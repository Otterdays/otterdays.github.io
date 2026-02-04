# ARCHITECTURE

## Site structure

```
/
├── index.html              # Homepage with profile and social links
├── programs.html           # Projects grid with badges (60+ projects)
├── chats.html              # AI Chat quick links (ChatGPT, Gemini, etc.)
├── tools.html              # Desktop Tools: CLI, IDE, Browser-based
├── 404.html                # Custom 404 error page
├── css/
│   └── style.css           # Themes, badges, layout styles
├── js/
│   ├── theme.js            # Theme switcher module (shared)
│   └── badges.js           # Project badge injection (programs.html only)
├── images/
│   ├── favicon.svg         # Site favicon
│   └── placeholder.svg     # Profile placeholder image
├── fetch-github-repos.js   # Optional local script (repos list)
├── DOCS/                   # Project documentation (not public-facing)
│   ├── ARCHITECTURE.md
│   ├── CHANGELOG.md
│   ├── My_Thoughts.md
│   ├── SBOM.md
│   ├── SCRATCHPAD.md
│   ├── STYLE_GUIDE.md
│   ├── SUMMARY.md
│   └── debugs/
├── README.md
└── .gitignore
```

## Themes

- **data-theme** on `body`: dark (default), light, google, openai, anthropic, lorenz (Otterdays).
- Stored in localStorage as `dev-profile-theme`.
- CSS variables: `--bg`, `--fg`, `--muted`, `--accent`, `--card`, `--border`, `--glass`, `--accent-glow`.

## Badges

- **Types:** Game, Software, Minecraft, Music, Android.
- Injected by `js/badges.js`; project title → badge mapping in JS.
- Cards can show multiple badges (e.g. Brain-Busters: Android + Game).

## GitHub Pages

- **Source:** Branch `main`, root.
- **Content:** Static files; no server, no API keys.
- **URL:** `https://otterdays.github.io/`
- **404 Page:** Custom 404.html is auto-served by GitHub Pages.

## Data flow

- Profile content static in HTML files.
- Theme script (`js/theme.js`) runs on all pages.
- Badge script (`js/badges.js`) runs only on `programs.html`.
- `fetch-github-repos.js` for local use only; do not commit secrets.

## SEO

- All pages have proper `<title>`, `<meta description>`, Open Graph tags.
- Canonical URLs set for each page.
- Favicon served as SVG for scalability.
