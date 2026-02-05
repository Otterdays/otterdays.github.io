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

Order: Home → Programs → AI Chats → Media Gen → Companies → Tools → Specials → Skills/Tools → About. Same `<nav class="top-nav">` on every HTML page; theme switcher present on index, programs, chats, media, companies, tools, specials, skills, 404.

## Page breakdown

| Page           | Sections / content |
|----------------|--------------------|
| **index**      | Profile, image, home links (X, Bluesky, GitHub). |
| **programs**   | Profile header + projects grid; `js/badges.js` adds badges by title. |
| **chats**      | **Assistants:** ChatGPT, Claude, Gemini, NotebookLM, Perplexity, Grok, Kimi, DeepSeek, Qwen, Minimax, IBM Granite, Z.ai, Amazon Nova, Meta AI, Copilot, Mistral, Poe, Character.AI, Pi, Cohere, Arcee AI, Allen AI, Duck.ai. **Provider hubs:** OpenRouter, T3 Chat, Groq Cloud, SambaNova, Cerebras. |
| **media**      | **Video:** Artlist, Runway, Pika, Synthesia, HeyGen, Luma, Google Flow, Sparkify, SuperMaker, Cuzi. **Image:** Midjourney, ChatGPT Images, Stable Diffusion, FLUX, Ideogram, Recraft, Leonardo, Adobe Firefly. **Audio:** Suno, Udio, ElevenLabs, MusicAI. |
| **companies**  | One section per company (56+); collapsible sections (toggle at top center). GitHub, Railway added. |
| **tools**      | **CLI (A–Z):** Crush, Gemini CLI, Kimi Code CLI, Mistral Vibe, OpenAI Codex CLI, Qwen Code. **IDE (A–Z):** Android Studio, Cursor, Factory, Google Antigravity, Jules, OpenAI Codex, TRAE, Warp. **Web builders:** Bolt, Firebase Studio, Google AI Studio, Lovable, Replit, v0. **Browser (A–Z):** Amp Free, Base44, Cloudflare Pages, Firebase, Hugging Face, MongoDB, Netlify, Opal, Project Mariner, Railway, Stitch, Supabase, Vercel. **Tunneling:** Localtunnel, Tunnelmole, reTunnel. **Reference:** MCP, Claude download, HTML Online Viewer. |
| **specials**   | **Free domains:** DigitalPlat, FreeDomain, FreeDomain GitHub. **Learning:** freeCodeCamp. |
| **skills**     | **Cursor agentic tools:** File/code, search, terminal, lint, todo, web, memory, image, MCP. **Antigravity agentic tools:** File/Code, Editing, Terminal, Web, Creativity, MCPs. **MCPs:** MCP_DOCKER, cursor-ide-browser. **Agent skills:** create-rule, create-skill, update-cursor-settings, create-subagent, migrate-to-skills. **SkillBox:** antjanus/skillbox (track-session, git-worktree, generate-skill, ideal-react-component, rate-skill). **Skills directory:** React (6), Testing (6), Git & workflows (6); npx skills find, skills.sh, /find-skills. |
| **404**        | Error code, title, back link. |

## Themes

- **data-theme** on `body`: `dark` (default), `light`, `google`, `openai`, `anthropic`, `lorenz` (Otterdays), `github`, `dracula`, `nord`, `vscode`, `synthwave`, `monokai`, `solarized`, `gruvbox` (14 total).
- Stored in localStorage as `dev-profile-theme`.
- CSS variables: `--bg`, `--fg`, `--muted`, `--accent`, `--card`, `--border`, `--glass`, `--accent-glow`.

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
