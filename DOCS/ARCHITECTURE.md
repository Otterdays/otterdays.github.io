# ARCHITECTURE

## Site structure

```
/
├── index.html              # Home: profile, social links
├── programs.html           # Projects grid with badges (~60+ projects)
├── chats.html              # AI Chats: Assistants + Provider hubs & playgrounds
├── media.html              # AI Media Gen: Video, Image, Audio
├── companies.html          # AI & dev tools by company (56+ companies); collapsible sections (companies-page only)
├── tools.html              # Desktop Tools: CLI, IDE, Browser (A–Z), Tunneling, Reference
├── specials.html           # Specials: Free domains, Learning
├── skills.html             # Skills/Tools: Cursor & Antigravity agentic tools, MCPs, SkillBox, Skills directory
├── 404.html                # Custom 404 error page
├── css/
│   └── style.css           # Themes, badges, layout, chat-link cards, search modal, companies collapsible, scroll progress, QoL/footer
├── js/
│   ├── theme.js            # Theme switcher (shared; all pages)
│   ├── badges.js           # Project badge injection (programs.html only)
│   ├── companies.js        # Section minimization (companies.html only; body.companies-page)
│   ├── search-data.js      # Search index with all searchable items
│   └── search.js           # Search modal logic, fuzzy matching, keyboard nav
├── images/
│   ├── favicon.svg         # Site favicon
│   └── placeholder.svg     # Profile placeholder image
├── fetch-github-repos.js   # Optional: fetch GitHub repos → repos.md (local)
├── DOCS/                   # Project documentation (not public-facing)
│   ├── ARCHITECTURE.md
│   ├── CHANGELOG.md
│   ├── CONTENT_GUIDE.md    # How to add content and update search
│   ├── My_Thoughts.md
│   ├── SBOM.md
│   ├── SCRATCHPAD.md
│   ├── STYLE_GUIDE.md
│   ├── SUMMARY.md
│   └── debugs/
├── README.md
└── .gitignore
```

## Navigation (all pages)

**Sidebar Navigation:** A sticky, collapsible sidebar on the left (`.sidebar`).
- **Collapsed (64px):** Shows icons only.
- **Expanded (240px):** Expands on hover to show text labels.
- **Mobile:** Fixed bottom navigation bar (icons only).
- **Links:** Home, Programs, AI Chats, Media Gen, Companies, Tools, Specials, Skills/Tools, About.

## Page breakdown

| Page           | Sections / content |
|----------------|--------------------|
| **index**      | Profile, image, home links (X, Bluesky, GitHub). **Bento layout:** Image (col-span-2 on mobile), profile text. |
| **programs**   | Profile header + projects grid; `js/badges.js` adds badges by title. **Glassmorphic cards.** |
| **chats**      | **Assistants** & **Provider hubs**: Bento grid layout with featured cards (e.g. OpenAI, Anthropic). |
| **media**      | **Video**, **Image**, **Audio**: Bento grid layout. |
| **companies**  | One section per company (56+); collapsible sections (toggle at top center). **Sidebar layout.** |
| **tools**      | **CLI**, **IDE**, **Web builders**, **Browser**, **Tunneling**, **Reference**: Bento grid layout. |
| **specials**   | **Free domains**, **Learning**, **Games**: Bento grid layout. |
| **skills**     | **Agentic tools**, **MCPs**, **Skills**: Bento grid layout. |
| **404**        | Error code, title, back link. Centered layout. |

## Themes

- **data-theme** on `body`.
- **Categories:**
    - **Core:** Dark, Light.
    - **Brands:** Google, OpenAI, Anthropic, Otterdays (Lorenz), GitHub.
    - **Editors:** VS Code, Dracula, Nord, Monokai, Solarized, Gruvbox, Synthwave.
    - **Creative:** Forest, Coffee, Cyber, Aqua, Luxury.
- **Total:** 19 themes.
- Stored in localStorage as `dev-profile-theme`.
- CSS variables: `--bg`, `--fg`, `--muted`, `--accent`, `--card`, `--border`, `--glass`, `--accent-glow`.

## Layout Architecture

**CSS Grid:**
- `body { display: grid; grid-template-columns: 64px 1fr; }`
- **Sidebar:** Fixed width (64px -> 240px hover).
- **Content:** `1fr` area (`.content`).
- **Top Bar:** Floating flex container inside `.content` for Version Badge, Search, and Theme Switcher.

## Glassmorphism & Motion

- **Cards:** `.project-card`, `.chat-link-card` use `backdrop-filter: blur(12px)` and `rgba(..., 0.4)` backgrounds.
- **3D Tilt:** `js/theme.js` adds mousemove event listeners to cards to apply `rotateX`/`rotateY` transforms based on cursor position.
- **Entrance:** Content slides in from right (`slideInRight` keyframe).

## Badges

- **Types:** Game, Software, Minecraft, Music, Android.
- Injected by `js/badges.js` on `programs.html`; project title → badge mapping in JS.
- Cards can show multiple badges.

## GitHub Pages

- **Source:** Branch `main`, root.
- **Content:** Static files only; no server, no API keys in delivered site.
- **URL:** https://otterdays.github.io/
- **404:** Custom `404.html` is auto-served by GitHub Pages.

## Data flow

- All content is static HTML; no CMS or API at runtime.
- `js/theme.js` runs on every page (theme dropdown, scroll-to-top, scroll progress bar, localStorage).
- `js/badges.js` runs only on `programs.html` (badge injection).
- `js/companies.js` runs only when `body` has class `companies-page` (section minimization; injects toggle + collapsible wrapper).
- `js/search-data.js` and `js/search.js` run on all pages (unified search).
- `fetch-github-repos.js` is for local use only; output `repos.md` is optional and not required for the site.

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
