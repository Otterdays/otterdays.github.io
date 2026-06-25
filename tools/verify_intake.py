#!/usr/bin/env python3
"""
Deterministic gate for DOCS/intake/*.intake.json before HTML import.
No network, no LLM — schema + repo collision checks only.

Usage (repo root):
  python tools/verify_intake.py DOCS/intake/YYYY-MM-DD_slug.intake.json
  python tools/verify_intake.py DOCS/intake/_EXAMPLE.intake.json
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SEARCH_DATA = ROOT / "js" / "search-data.js"
BADGES = ROOT / "js" / "badges.js"
SCHEMA = ROOT / "DOCS" / "schemas" / "intake-record.schema.json"

VALID_KINDS = {
    "lab_chat",
    "hub_assistant",
    "tool",
    "company",
    "media",
    "special",
    "creator",
    "museum",
    "project",
}
VALID_CATEGORIES = {"project", "chat", "media", "company", "tool", "special", "page"}
VALID_HUB_LAB = {"lab", "hub", "neither", "unknown"}
VALID_ACCESS = {
    "public",
    "freemium",
    "waitlist",
    "enterprise",
    "open_source",
    "api_only",
}
VALID_ORDERING = {"alpha", "curated", "country_alpha", "n/a"}
INTAKE_ID_RE = re.compile(r"^[0-9]{4}-[0-9]{2}-[0-9]{2}_[a-z0-9-]+$")
ISO2_RE = re.compile(r"^[A-Z]{2}$")
TITLE_CASE_TAG = re.compile(r"^[A-Z0-9][A-Za-z0-9+./ -]*$")


def fail(errors: list[str], msg: str) -> None:
    errors.append(msg)


def load_json(path: Path) -> dict:
    with path.open(encoding="utf-8") as f:
        return json.load(f)


def search_index_text() -> str:
    return SEARCH_DATA.read_text(encoding="utf-8")


def badges_text() -> str:
    return BADGES.read_text(encoding="utf-8")


def validate_record(data: dict, path: Path) -> list[str]:
    errors: list[str] = []
    label = path.name

    if data.get("schema_version") != "1.0":
        fail(errors, f"{label}: schema_version must be '1.0'")

    intake_id = data.get("intake_id", "")
    if not INTAKE_ID_RE.match(intake_id):
        fail(
            errors,
            f"{label}: intake_id must match YYYY-MM-DD_slug (got {intake_id!r})",
        )

    status = data.get("status")
    if status not in {
        "research",
        "classified",
        "imported",
        "verified",
        "blocked",
    }:
        fail(errors, f"{label}: invalid status {status!r}")

    entities = data.get("entities")
    if not isinstance(entities, list) or not entities:
        fail(errors, f"{label}: entities must be a non-empty array")
        return errors

    search_blob = search_index_text()
    badge_blob = badges_text()

    for i, ent in enumerate(entities):
        prefix = f"{label} entity[{i}]"
        name = ent.get("display_name")
        if not name or not isinstance(name, str):
            fail(errors, f"{prefix}: display_name required")
            continue

        kind = ent.get("kind")
        if kind not in VALID_KINDS:
            fail(errors, f"{prefix}: invalid kind {kind!r}")

        url = ent.get("primary_url", "")
        if not url.startswith("https://"):
            fail(errors, f"{prefix}: primary_url must be https://")

        one_line = ent.get("one_line", "")
        words = len(one_line.split())
        if words < 8 or words > 24:
            fail(
                errors,
                f"{prefix}: one_line should be ~10–20 words (got {words})",
            )

        placement = ent.get("placement") or {}
        pages = placement.get("html_pages") or []
        if not pages:
            fail(errors, f"{prefix}: placement.html_pages required")

        for page in pages:
            if not (ROOT / page).is_file():
                fail(errors, f"{prefix}: html page missing: {page}")

        entries = placement.get("search_entries") or []
        if not entries:
            fail(errors, f"{prefix}: placement.search_entries required")

        for j, row in enumerate(entries):
            ep = f"{prefix} search[{j}]"
            cat = row.get("category")
            if cat not in VALID_CATEGORIES:
                fail(errors, f"{ep}: invalid category {cat!r}")
            tags = row.get("tags") or []
            if len(tags) < 2:
                fail(errors, f"{ep}: need at least 2 tags")
            for tag in tags:
                if tag != tag.strip() or tag != tag.title() and tag not in {
                    "xAI",
                    "GPT-4",
                    "MCP",
                    "CLI",
                    "IDE",
                    "3D",
                    "PKM",
                    "T3 Chat",
                    "OpenRouter",
                }:
                    if tag.lower() == tag or tag.upper() == tag and len(tag) > 3:
                        fail(
                            errors,
                            f"{ep}: tag should be Title Case: {tag!r}",
                        )

        research = ent.get("research") or {}
        if research.get("hub_vs_lab") not in VALID_HUB_LAB:
            fail(errors, f"{prefix}: invalid hub_vs_lab")
        if research.get("access_model") not in VALID_ACCESS:
            fail(errors, f"{prefix}: invalid access_model")
        if not research.get("primary_source_verified"):
            fail(
                errors,
                f"{prefix}: primary_source_verified must be true before import",
            )

        iso2 = ent.get("country_iso2")
        if iso2 and not ISO2_RE.match(iso2):
            fail(errors, f"{prefix}: country_iso2 must be ISO 3166-1 alpha-2")

        ordering = placement.get("ordering", "n/a")
        if ordering not in VALID_ORDERING:
            fail(errors, f"{prefix}: invalid ordering {ordering!r}")

        # Placement rules (agent-first policy)
        if kind == "lab_chat" and "chats.html" not in pages:
            fail(errors, f"{prefix}: lab_chat must include chats.html")
        if kind == "hub_assistant" and "other-assistants.html" not in pages:
            fail(errors, f"{prefix}: hub_assistant must include other-assistants.html")
        if research.get("hub_vs_lab") == "hub" and "chats.html" in pages:
            fail(errors, f"{prefix}: hub must not go on chats.html")
        if research.get("hub_vs_lab") == "lab" and "other-assistants.html" in pages:
            if "chats.html" not in pages:
                fail(
                    errors,
                    f"{prefix}: lab should be chats.html not other-assistants alone",
                )

        # Duplicate detection in search index (pre-import only)
        if status in ("research", "classified"):
            for row in entries:
                title = row.get("title", "")
                if f'title: "{title}"' in search_blob or f"title: '{title}'" in search_blob:
                    fail(
                        errors,
                        f"{prefix}: search title already exists: {title!r}",
                    )

        # Badge keys should exist in plan when country set
        badge_keys = placement.get("badge_keys") or []
        if iso2 and not badge_keys:
            fail(
                errors,
                f"{prefix}: country_iso2 set but placement.badge_keys empty",
            )

    return errors


def main(argv: list[str]) -> int:
    if len(argv) < 2:
        print(__doc__.strip())
        return 2

    paths = [Path(p) for p in argv[1:]]
    all_errors: list[str] = []

    if not SCHEMA.is_file():
        all_errors.append(f"Missing schema: {SCHEMA}")

    for path in paths:
        if not path.is_file():
            all_errors.append(f"File not found: {path}")
            continue
        if path.name.startswith("_TEMPLATE"):
            print(f"INTAKE VERIFY: SKIP (template placeholder): {path.name}")
            continue
        try:
            data = load_json(path)
        except json.JSONDecodeError as e:
            all_errors.append(f"{path.name}: invalid JSON — {e}")
            continue
        all_errors.extend(validate_record(data, path))

    if all_errors:
        print("INTAKE VERIFY: FAIL")
        for err in all_errors:
            print(f"  - {err}")
        return 1

    print(f"INTAKE VERIFY: PASS ({len(paths)} file(s))")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
