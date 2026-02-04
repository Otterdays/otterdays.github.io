# SUMMARY

**Project:** otterdays.github.io — static dev profile site for GitHub Pages.

**Status:** Ready to serve. Static HTML/CSS/JS; small shared scripts for theme, badges, search, companies minimization. No build step.

**Features:**
- **9 themes:** Dark, Light, Google, OpenAI, Anthropic, Otterdays, GitHub, Dracula, Nord (localStorage).
- **Project badges:** Game, Software, Minecraft, Music, Android (multi-badge; `js/badges.js` on programs).
- **Unified search:** Site-wide search with Cmd/Ctrl+K, fuzzy matching, keyboard navigation (`js/search.js`, `js/search-data.js`).
- **Companies page:** Collapsible sections with top-center toggle and smooth open/close animation (`js/companies.js`; companies only).
- **Responsive:** Mobile-first, glassmorphism; 6-wide project grid.
- **Pages:** Home, Programs (~60+ projects), AI Chats (Assistants + Provider hubs), Media Gen (video/image/audio), Companies (56+ companies, collapsible), Tools (CLI/IDE/Browser/Tunneling/DevOps/Game dev/Reference, alphabetical), Specials (free domains, learning, games & play), About, 404.

**Recent content (2026-02-04):**
- **Companies:** New sections GitHub (platform), Railway (cloud). style.css corruption fixed (QoL/footer block re-appended).
- **Tools:** Alphabetical order for CLI, IDE, Browser Tools; new entries Base44, Lovable, Railway, v0 in Browser Tools.

**Quick links:**
- [SCRATCHPAD](SCRATCHPAD.md) — active tasks, blockers, last 5 actions
- [CONTENT_GUIDE](CONTENT_GUIDE.md) — how to add content and update search
- [SBOM](SBOM.md) — dependencies / security
- [STYLE_GUIDE](STYLE_GUIDE.md) — conventions
- [CHANGELOG](CHANGELOG.md) — version history
- [ARCHITECTURE](ARCHITECTURE.md) — site structure
- [My_Thoughts](My_Thoughts.md) — decisions & rationale

**Repo:** https://github.com/Otterdays/otterdays.github.io

**Live:** https://otterdays.github.io/

**Serve locally:** Open `index.html` in a browser, or `npx serve .`. Optional: `node fetch-github-repos.js [username]` for repos.md.
