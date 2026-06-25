#!/usr/bin/env python3
"""Quick audit: HTML card names vs js/search-data.js titles."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
search = (ROOT / "js/search-data.js").read_text(encoding="utf-8")
titles = set(re.findall(r'title:\s*"([^"]+)"', search))

names: set[str] = set()
for html in ROOT.glob("*.html"):
    text = html.read_text(encoding="utf-8", errors="replace")
    names.update(re.findall(r'chat-link-name">([^<]+)</span>', text))
    names.update(re.findall(r"daily-driver-card__name\">([^<]+)</span>", text))
    names.update(re.findall(r"home-primary-link__name\">([^<]+)</span>", text))
    names.update(re.findall(r'gear-card__brand">([^<]+)</span>', text))

def norm(s: str) -> str:
    return s.replace("&amp;", "&").replace("&rsquo;", "'").strip()

missing = sorted(
    n for n in names
    if n.strip() and norm(n) not in {norm(t) for t in titles}
    and not any(norm(n) in norm(t) or norm(t) in norm(n) for t in titles)
)
print(f"Search titles: {len(titles)}")
print(f"HTML card names: {len(names)}")
print(f"Likely missing from search: {len(missing)}")
for m in missing:
    print(f"  - {m}")
