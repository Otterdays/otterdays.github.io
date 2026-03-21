# SUMMARY

## Recent update — 2026-03-12 (content batch)

- **Inspirations:** Low Level (reverse engineering, low-level, cybersecurity); TechLinked (tech news).
- **Tools:** SpacetimeDB, vinext, OpenCode Desktop, OpenCode Zen, Bun, Vite, Svelte added.
- **Companies:** Clockwork Labs (SpacetimeDB), Cloudflare (vinext), OpenCode (Desktop, Zen), Bun, Vite, Svelte.
- **Search & badges:** All new entries indexed; country badges updated.

## Recent update — 2026-03-09 (page-load effect)

- **Page-load UX:** Added a shared site-wide load/reload transition with a blurred panel, accent pulse, and moving progress bar.
- **Implementation:** Loader is injected from `js/qol.js`, styled in `css/style.css`, fades out on `window.load`, and includes a timeout fallback.
- **A11y:** Respects reduced-motion users and avoids getting stuck if load timing is unusual.

## Recent update — 2026-03-09

- **Search UX/engineering:** Same-page search targets now re-highlight on hash changes, `Cmd/Ctrl+K` no longer hijacks focused inputs, and result-list hover avoids extra smooth-scroll churn.
- **Interaction performance:** Card spotlight / tilt effects moved from document-wide mousemove scans to per-card pointer handlers for cheaper runtime behavior on large pages.
- **A11y/QoL:** Footer clock no longer announces every refresh via a live region and now updates less aggressively.
- **Updates trail:** `DOCS/CHANGELOG.md`, `DOCS/SCRATCHPAD.md`, and `js/updates-data.js` refreshed for the engineering pass.

**Project:** otterdays.github.io — static dev profile site for GitHub Pages.

**Status:** Ready to serve. Static HTML/CSS/JS; small shared scripts for theme, badges, search, companies minimization. No build step.

**Features:**
- **13 themes:** Dark, Light, Google, OpenAI, Anthropic, Otterdays, GitHub, Dracula, Nord, VS Code, Synthwave, Monokai, Solarized, Gruvbox (localStorage).
- **Project badges:** Game, Software, Minecraft, Music, Android (multi-badge; `js/badges.js` on programs).
- **Country badges:** Origin (full country name) on all card pages and company section headers; shared map in `js/badges.js`; company = country for products.
- **Unified search:** Site-wide search with Cmd/Ctrl+K, fuzzy matching, keyboard navigation (`js/search.js`, `js/search-data.js`).
- **Collapsible sections:** Companies, Tools, Specials, Skills, Media Gen — collapsible panes with toggle, minimized by default (`js/collapsible.js`).
- **Responsive:** Mobile-first, glassmorphism; 6-wide project grid.
- **Scroll progress:** Thin bar at top fills left-to-right as you scroll (`js/theme.js`, `css/style.css`).
- **A11y & QoL:** Reduced motion mode, skip-to-content link, :focus-visible ring, auto dark/light (system preference), print-friendly CSS, sitemap.xml, footer Source link.
- **Gradient titles:** Home and profile page titles use theme-aware gradient text (fg→accent).
- **Pages (15):** Home, Programs (~60+ projects), AI Chats, AI Museum, Media Gen, Companies (80+ companies, collapsible), Tools (CLI/IDE/Web builders/Browser, alphabetical), Specials, Skills/Tools, Updates, Explore, Inspirations (Brackeys, theo gg, Low Level, TechLinked, The PrimeTime), Posts (archived articles), About, 404.

**Recent (2026-02-16):**
- **Patch 2 (1–10):** Reduced motion, skip link, focus-visible, auto dark/light, print CSS, sitemap.xml, footer Source, About Updates, Inspirations dedup, stagger on About.
- **Updates page:** Dedicated changelog (updates.html) with timeline, glass cards, type badges.

**Previous content (2026-02-04):**
- **AI Chats:** Sup AI (multi-model orchestration, research-grade accuracy); Lumio AI, WebLLM Chat, Chat LLM, Higgsfield Assist in provider hubs.
- **Media:** Higgsfield (video & image); Agent Opus (article/script to video, motion design).
- **Companies:** Biela, Squarespace, Sup AI, Vibecode, Wix; Cloudflare AI link in Cloudflare; Agent Opus, Anything, Builder, Emergent, Lumio AI, Higgsfield; collapsible panels (minimized by default).
- **Tools:** Web builders: Biela, Squarespace AI, Vibecode, Wix AI; Browser Tools: Cloudflare AI; Reference: There&rsquo;s An AI For That (45k+ tools directory), findmypapers.ai.
- **Skills:** Antigravity agentic tools (capabilities list), SkillBox, Skills directory (React, Testing, Git).
- **Search:** Index updated for all new links (chats, media, companies, tools, skills).

**Docs:** `DOCS/journal/` — dated journal entries (e.g. 2026-02-25, 2026-03-02). Tools: SpacetimeDB, vinext, Bun, Vite, Svelte, OpenCode (Desktop, Zen). Inspirations: Brackeys, theo gg, Low Level, TechLinked, The PrimeTime. Companies: Clockwork Labs, Bun, Vite, Svelte; OpenCode expanded. Current version v1.8.5.

**Quick links:**
- [SCRATCHPAD](SCRATCHPAD.md) — active tasks, blockers, last 5 actions
- [CONTENT_GUIDE](CONTENT_GUIDE.md) — how to add content and update search
- [CURSOR_IDE_SETUP](CURSOR_IDE_SETUP.md) — Cursor IDE: MCPs, agent skills, SkillBox, Skills directory
- [SBOM](SBOM.md) — dependencies / security
- [STYLE_GUIDE](STYLE_GUIDE.md) — conventions
- [CHANGELOG](CHANGELOG.md) — version history
- [ARCHITECTURE](ARCHITECTURE.md) — site structure
- [My_Thoughts](My_Thoughts.md) — decisions & rationale

**Repo:** https://github.com/Otterdays/otterdays.github.io

**Live:** https://otterdays.github.io/

**Serve locally:** Open `index.html` in a browser, or `npx serve .`. Optional: `node fetch-github-repos.js [username]` for repos.md.
