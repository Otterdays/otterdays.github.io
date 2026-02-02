# ARCHITECTURE

## Site structure

```
/
├── index.html          # Dev profile, theme switcher, badge script
├── programs.html       # Projects grid with badges
├── chats.html          # AI Chats quick links
├── tools.html          # Desktop Tools: CLI (e.g. Gemini CLI), IDE (e.g. OpenAI Codex)
├── assets/
│   └── style.css       # Themes, badges, layout
├── fetch-github-repos.js  # Optional local script (repos list)
├── DOCS/               # Project docs (not public-facing)
├── README.md
└── .gitignore
```

## Themes

- **data-theme** on `body`: dark (default), light, google, openai, anthropic, lorenz (Otterdays).
- Stored in localStorage as `dev-profile-theme`. CSS variables: `--bg`, `--fg`, `--muted`, `--accent`, `--card`, `--border`.

## Badges

- **Types:** Game, Software, Minecraft, Music, Android.
- Injected by script; project title → badge mapping in JS. Cards can show multiple badges (e.g. Brain-Busters: Android + Game).

## GitHub Pages

- **Source:** Branch `main`, root.
- **Content:** Static files; no server, no API keys.
- **URL:** `https://otterdays.github.io/`

## Data flow

- Profile content static in `index.html`.
- Theme + badge scripts run on load; no external deps.
- `fetch-github-repos.js` for local use only; do not commit secrets.
