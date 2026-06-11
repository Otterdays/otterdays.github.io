<!-- PRESERVATION RULE: Never delete or replace content. Append or annotate only. -->

# SBOM — Software Bill of Materials

**Updated:** 2026-06-11 (**Unreleased** — Homepage Daily drivers favicons via `favicon.show`; no package changes)

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

**Security:** No npm install; external image-only CDN (`favicon.show`) for Daily drivers favicons. No secrets in repo.
