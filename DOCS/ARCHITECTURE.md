# ARCHITECTURE

## Site structure

```
/
├── index.html          # Dev profile landing
├── assets/
│   └── style.css       # Minimal profile styles
├── fetch-github-repos.js  # Optional local script (repos list)
├── DOCS/               # Project docs (not public-facing content)
├── README.md
└── .gitignore
```

## GitHub Pages

- **Source:** Branch `main`, root (or `/docs` if you switch later).
- **Content:** Static files only; no server, no API keys in repo.
- **URL:** `https://otterdays.github.io/` (or custom domain if configured).

## Data flow

- Profile content is static in `index.html`.
- `fetch-github-repos.js` is for local use only; run manually to generate `repos.md`; do not commit secrets or tokens.
