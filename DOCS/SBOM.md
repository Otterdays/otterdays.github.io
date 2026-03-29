# SBOM — Software Bill of Materials

**Updated:** 2026-03-29 (**v1.10.1** — Hermes Agent patch + docs)

## Runtime / site

| Item        | Version | Purpose              | Notes                    |
|-------------|---------|----------------------|--------------------------|
| HTML/CSS/JS | —       | Static site          | No third-party packages  |
| Inline JS   | —       | Theme switcher, badges | No external deps       |

## Tooling (optional, local)

| Item    | Version | Purpose                          | Notes              |
|---------|---------|----------------------------------|--------------------|
| Node.js | LTS     | Running `fetch-github-repos.js`  | No npm packages   |

**Security:** No npm install; no external CDNs in delivered site. No secrets in repo.
