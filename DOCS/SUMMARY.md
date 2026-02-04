# SUMMARY

**Project:** otterdays.github.io — static dev profile site for GitHub Pages.

**Status:** Ready to serve. Static HTML/CSS/JS; small shared scripts for theme, badges, search, companies minimization. No build step.

**Features:**
- **13 themes:** Dark, Light, Google, OpenAI, Anthropic, Otterdays, GitHub, Dracula, Nord, VS Code, Synthwave, Monokai, Solarized, Gruvbox (localStorage).
- **Project badges:** Game, Software, Minecraft, Music, Android (multi-badge; `js/badges.js` on programs).
- **Unified search:** Site-wide search with Cmd/Ctrl+K, fuzzy matching, keyboard navigation (`js/search.js`, `js/search-data.js`).
- **Companies page:** Collapsible sections with top-center toggle, minimized by default (`js/companies.js`; companies only).
- **Responsive:** Mobile-first, glassmorphism; 6-wide project grid.
- **Pages (10):** Home, Programs (~60+ projects), AI Chats, Media Gen, Companies (56+ companies, collapsible), Tools (CLI/IDE/Web builders/Browser, alphabetical), Specials, Skills (IDE/MCP setup), About, 404.

**Recent content (2026-02-04):**
- **AI Chats:** Sup AI (multi-model orchestration, research-grade accuracy); Lumio AI, WebLLM Chat, Chat LLM, Higgsfield Assist in provider hubs.
- **Media:** Higgsfield (video & image); Agent Opus (article/script to video, motion design).
- **Companies:** Biela, Squarespace, Sup AI, Vibecode, Wix; Cloudflare AI link in Cloudflare; Agent Opus, Anything, Builder, Emergent, Lumio AI, Higgsfield; collapsible panels (minimized by default).
- **Tools:** Web builders: Biela, Squarespace AI, Vibecode, Wix AI; Browser Tools: Cloudflare AI; Reference: There&rsquo;s An AI For That (45k+ tools directory), findmypapers.ai.
- **Search:** Index updated for all new links (chats, media, companies, tools).

**Quick links:**
- [SCRATCHPAD](SCRATCHPAD.md) — active tasks, blockers, last 5 actions
- [CONTENT_GUIDE](CONTENT_GUIDE.md) — how to add content and update search
- [CURSOR_IDE_SETUP](CURSOR_IDE_SETUP.md) — Cursor IDE: MCPs, agent skills
- [SBOM](SBOM.md) — dependencies / security
- [STYLE_GUIDE](STYLE_GUIDE.md) — conventions
- [CHANGELOG](CHANGELOG.md) — version history
- [ARCHITECTURE](ARCHITECTURE.md) — site structure
- [My_Thoughts](My_Thoughts.md) — decisions & rationale

**Repo:** https://github.com/Otterdays/otterdays.github.io

**Live:** https://otterdays.github.io/

**Serve locally:** Open `index.html` in a browser, or `npx serve .`. Optional: `node fetch-github-repos.js [username]` for repos.md.
