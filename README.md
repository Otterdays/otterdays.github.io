# otterdays.github.io

> Personal developer portfolio — static site, no build step, served on GitHub Pages.

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success?style=flat-square&logo=github)](https://otterdays.github.io/)
[![Static Site](https://img.shields.io/badge/Static-HTML%20%7C%20CSS%20%7C%20JS-blue?style=flat-square)](https://github.com/Otterdays/otterdays.github.io)

**Live site:** [https://otterdays.github.io/](https://otterdays.github.io/) · **Current version:** [v1.9.4](https://otterdays.github.io/updates.html) (see `DOCS/CHANGELOG.md`)

---

## Features

| | |
|---|---|
| 🎨 **20 Themes** | Core, Brands, Editors, Creative groups — including Atelier, Aqua, Coffee, Cyber, Forest, Luxury, Otterdays, Synthwave, VS Code, Dracula, Nord, Monokai, Solarized, Gruvbox, GitHub, Google, OpenAI, Anthropic |
| 🏷️ **Project Badges** | Game, Software, Minecraft, Music, Android (multi-badge support) |
| 📂 **Companies Page** | Collapsible sections with top-center toggle and smooth open/close animation |
| 🔍 **Unified Search** | Cmd/Ctrl+K, fuzzy matching, keyboard navigation |
| 📱 **Responsive** | Mobile-first design with glassmorphism effects |
| ⚡ **Performance** | No build step, pure HTML/CSS/JS |
| 🔗 **SEO Ready** | Open Graph, meta descriptions, canonical URLs, sitemap.xml |
| ♿ **A11y** | Skip-to-content, :focus-visible, reduced motion, print-friendly CSS |

---

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Home profile page |
| `programs.html` | 60+ projects with auto-badges |
| `chats.html` | Links to AI chat platforms |
| `museum.html` | AI Model Museum (landmark LLMs) |
| `google-gemini.html` | Google Gemini — full catalog (Gemini / Gemma / Nano Banana); premium museum provider template |
| `informational-links.html` | Wikipedia / reference links for museum models |
| `media.html` | AI media gen (video/image tools) |
| `companies.html` | AI & dev tools by company (80+ sections) |
| `tools.html` | Developer tools (CLI, browser builders, IDE, Reference, MCP, etc.) |
| `specials.html` | Free & special services (e.g. free domains) |
| `skills.html` | Skills/Tools: Cursor & Antigravity agentic tools, MCPs, SkillBox, Skills directory |
| `updates.html` | Version history (e.g. v1.9.4), timeline UI |
| `explore.html` | Charts / exploration |
| `inspirations.html` | YouTube & creator inspirations |
| `posts.html` | Archived articles |
| `about.html` | About this site: projects, tools, and link policy |
| `404.html` | Custom error page |

---

## Project Structure

```
├── css/style.css           # Layout, themes, search, collapsible, filter bar, loader
├── css/themes/             # Per-theme CSS
├── js/theme.js             # Themes, card effects, scroll progress
├── js/badges.js            # Project + country badges (BADGE_COUNTRY_MAP)
├── js/collapsible.js       # Collapsible sections
├── js/companies.js         # Company section header badges
├── js/filter.js            # A–Z section filter
├── js/qol.js               # Page-load veil, scroll-to-top
├── js/search-data.js       # Search index
├── js/search.js            # Search modal
├── js/updates-data.js      # Changelog entries (v1.9.4, …)
├── js/updates.js           # Updates page renderer
├── fetch-github-repos.js   # Optional: repos → repos.md
├── images/
└── DOCS/                   # SUMMARY, CHANGELOG, journal/, …
```

---

## Local Development

```bash
# Option 1: Simple HTTP server
npx serve .

# Option 2: Open directly
start index.html

# Optional: Fetch GitHub repos (writes repos.md)
node fetch-github-repos.js [username]
```

---

## Deployment

Push to `main` branch → GitHub Pages auto-deploys.

No build step. No sensitive data in this repo.

---

## Links

- [GitHub Repository](https://github.com/Otterdays/otterdays.github.io)
- [Live Site](https://otterdays.github.io/)
