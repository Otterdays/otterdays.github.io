<!-- PRESERVATION RULE: Never delete or replace content. Append or annotate only. -->

# SBOM — Software Bill of Materials

**Updated:** 2026-06-23 (**Unreleased** — `tools/verify_intake.py` stdlib gate; Homepage Daily drivers favicons via `favicon.show`)

[AMENDED 2026-03-29]: **v1.10.1** — Hermes Agent patch + docs

## Runtime / site

| Item        | Version | Purpose              | Notes                    |
|-------------|---------|----------------------|--------------------------|
| HTML/CSS/JS | —       | Static site          | No third-party packages  |
| Inline JS   | —       | Theme switcher, badges | No external deps       |
| favicon.show | Hosted service | Cached external favicons for homepage Daily drivers | Image CDN only; no script execution |

## Tooling (optional, local)

| Item    | Version | Purpose                          | Notes              |
|---------|---------|----------------------------------|--------------------|
| Node.js | LTS     | Running `fetch-github-repos.js`  | No npm packages   |
| Python  | 3.x     | `tools/verify_intake.py`, sidebar/museum scripts | Stdlib only for verify_intake; no pip deps |

[AMENDED 2026-06-23]: **verify_intake.py** — pre-import validation for `DOCS/intake/*.intake.json`; no third-party packages.

**Security:** No npm install; external image-only CDN (`favicon.show`) for Daily drivers favicons. No secrets in repo.
