# ARCHITECTURE

**Current release:** v1.9.5 (version badge in top bar → `updates.html`).

## Site structure

```
/
├── index.html              # Home: profile, social links
├── programs.html           # Projects grid with badges (~60+ projects)
├── chats.html              # AI Chats: Assistants + Provider hubs & playgrounds
├── museum.html             # AI Model Museum (landmark LLMs); premium provider catalog chips; master catalog; model makers registry
├── google-gemini.html      # Premium provider catalog: full Gemini / Gemma / Nano Banana tables (museum expansion template)
├── openai.html             # Premium provider catalog: OpenAI GPT / o-series
├── anthropic.html          # Premium provider catalog: Anthropic Claude
├── xai.html                # Premium provider catalog: xAI Grok
├── arcee.html              # Premium provider catalog: Arcee AI models & merge stack
├── informational-links.html  # Wikipedia / reference links for museum models
├── media.html              # AI Media Gen: Video, Image, Audio
├── companies.html          # AI & dev tools by company (80+); collapsible sections
├── tools.html              # CLI, IDE, Browser based builder, Browser Tools, Web builders, DevOps, Reference, etc. (A–Z within sections)
├── specials.html           # Specials: Free domains, Learning, Games
├── skills.html             # Skills/Tools: agentic tools, MCPs, SkillBox, Skills directory
├── explore.html            # Explore: charts / tag viz
├── updates.html            # Site changelog timeline (js/updates-data.js)
├── inspirations.html       # YouTube / creator inspirations
├── posts.html              # Archived article links
├── about.html              # About, pages at a glance
├── 404.html                # Custom 404
├── css/
│   ├── style.css           # Layout, glass cards, search, collapsible, filter bar, footer, loader
│   └── themes/             # Per-theme CSS fragments
├── js/
│   ├── theme.js            # Themes, dropdown, scroll progress, card tilt/spotlight
│   ├── badges.js           # Project badges (programs); BADGE_COUNTRY_MAP (all card pages + companies h2)
│   ├── collapsible.js      # Collapsible sections (body.collapsible-pages)
│   ├── companies.js        # Company section header badges (companies-page)
│   ├── filter.js           # A–Z section filter (collapsible pages)
│   ├── qol.js              # Page-load veil, scroll-to-top, shared QoL
│   ├── search-data.js      # Search index
│   ├── search.js           # Search modal, fuzzy match, keyboard nav
│   ├── updates-data.js     # Changelog entries for updates.html
│   └── updates.js          # Renders updates timeline
├── images/
│   ├── favicon.svg
│   └── placeholder.svg
├── fetch-github-repos.js   # Optional local: repos → repos.md
├── DOCS/
│   ├── ARCHITECTURE.md
│   ├── CHANGELOG.md
│   ├── CONTENT_GUIDE.md
│   ├── journal/            # Dated release notes (e.g. 2026-03-21.md)
│   ├── SUMMARY.md
│   ├── SBOM.md
│   └── …
├── README.md
└── .gitignore
```

[AMENDED 2026-03-28]: **`museum.html`** in the tree above: previously described as gateway primarily to Google Gemini; entry now reflects premium provider chips, master catalog, and model makers registry.

## Navigation (all pages)

**Sidebar Navigation:** A sticky, collapsible sidebar on the left (`.sidebar`).
- **Collapsed (64px):** Shows icons only.
- **Expanded (240px):** Expands on hover to show text labels.
- **Mobile:** Fixed bottom navigation bar (icons only).
- **Links (A–Z by label):** AI Chats, AI Museum, About, Companies, Explore, Home, Informational Links, Inspirations, Media Gen, Posts, Programs, Skills, Specials, Tools, Updates.

## Page breakdown

| Page           | Sections / content |
|----------------|--------------------|
| **index**      | Profile, image, home links (X, Bluesky, GitHub). **Bento layout:** Image (col-span-2 on mobile), profile text. |
| **programs**   | Profile header + projects grid; `js/badges.js` adds badges by title. **Glassmorphic cards.** |
| **chats**      | **Assistants** & **Provider hubs**: Bento grid layout with featured cards (e.g. OpenAI, Anthropic). |
| **media**      | **Video**, **Image**, **Audio**, **Platforms**: Collapsible sections. Bento grid layout with emoji accents. |
| **companies**  | One section per company (80+); collapsible; country badges on h2. |
| **tools**      | **CLI** (incl. AI agents, **Fresh** / **Orbiton** TUI editors), **Browser based builder**, **IDE**, **Web builders**, **Browser Tools**, **DevOps**, **Reference** (e.g. Awesome TUIs), etc.; collapsible + A–Z filter bar. |
| **specials**   | **Free domains**, **Learning**, **Games**: Collapsible sections. |
| **skills**     | **Agentic tools**, **MCPs**, **Skills**: Collapsible sections. |
| **informational-links** | Wikipedia & reference articles for museum models (flagships + GPT/Claude/Codex/Gemini families). |
| **404**        | Error code, title, back link. Centered layout. |

## Themes

- **data-theme** on `body`.
- **Categories (see `js/theme.js`):**
    - **Core:** Dark, Light.
    - **Brands:** Anthropic, GitHub, Google, OpenAI.
    - **Editors:** Dracula, Gruvbox, Monokai, Nord, Solarized, VS Code.
    - **Creative:** Atelier, Aqua, Coffee, Cyber, Forest, Luxury, Otterdays (Lorenz), Synthwave.
- **Total:** 20 themes in the picker.
- Stored in localStorage as `dev-profile-theme`.
- CSS variables: `--bg`, `--fg`, `--muted`, `--accent`, `--card`, `--border`, `--glass`, `--accent-glow`.

## Layout Architecture

**CSS Grid:**
- `body { display: grid; grid-template-columns: 64px 1fr; }`
- **Sidebar:** Fixed width (64px -> 240px hover).
- **Content:** `1fr` area (`.content`).
- **Top Bar:** Version badge (v1.9.5 → `updates.html`), Search, Theme switcher.

## Glassmorphism & Motion

- **Cards:** `.project-card`, `.chat-link-card` use `backdrop-filter: blur(12px)` and `rgba(..., 0.4)` backgrounds.
- **3D Tilt / spotlight:** `js/theme.js` uses **per-card** pointer handlers for tilt and spotlight (not document-wide mousemove).
- **Entrance:** Content slides in from right (`slideInRight` keyframe).

## Badges

- **Project types:** Game, Software, Minecraft, Music, Android — `programs.html` via `js/badges.js`.
- **Country / origin:** `js/badges.js` → `BADGE_COUNTRY_MAP` for `.chat-link-name` on tools/chats/media/etc. and company `h2` on `companies.html`.

## GitHub Pages

- **Source:** Branch `main`, root.
- **Content:** Static files only; no server, no API keys in delivered site.
- **URL:** https://otterdays.github.io/
- **404:** Custom `404.html` is auto-served by GitHub Pages.

## Data flow

- Static HTML only; no CMS at runtime.
- `js/theme.js` — every page (theme, scroll progress, card effects).
- `js/badges.js` — every page (country badges on cards); plus project badges on `programs.html`.
- `js/collapsible.js` — `body.collapsible-pages`.
- `js/companies.js` — `body.companies-page` (section h2 country badges).
- `js/filter.js` — A–Z section filter on collapsible pages.
- `js/qol.js` — load veil, scroll-to-top, shared QoL.
- `js/search-data.js` + `js/search.js` — unified search.
- `js/updates-data.js` + `js/updates.js` — `updates.html` only.
- `fetch-github-repos.js` — local optional; `repos.md` not required for the live site.

## Search System

**Architecture:**
- `js/search-data.js`: Static array of all searchable items with title, description, category, tags, and URL
- `js/search.js`: IIFE module handling modal UI, search algorithm, keyboard navigation

**Features:**
- **Trigger:** Search button in nav bar + `Cmd/Ctrl+K` keyboard shortcut
- **Search algorithm:** Fuzzy matching with scored results (title > tags > category > description)
- **UI:** Glassmorphic modal with results list, category icons, and hints
- **Navigation:** Arrow keys (↑↓), Enter to select, Escape to close
- **Accessibility:** ARIA labels, focus trap, screen reader support

**Categories:**
| Category | Icon | Color |
|----------|------|-------|
| project | 📦 | Blue (#58a6ff) |
| chat | 💬 | Green (#10a37f) |
| media | 🎨 | Orange (#d97706) |
| company | 🏢 | Purple (#8b5cf6) |
| tool | 🛠️ | Red (#ef4444) |
| special | ⭐ | Amber (#f59e0b) |
| page | 📄 | Indigo (#6366f1) |

## SEO

- Every page has `<title>`, `<meta name="description">`, Open Graph tags, canonical URL.
- Favicon: SVG for scalability.
