# SCRATCHPAD

**Active:** None.  
**Blockers:** None.

**Last 5 actions:**
1. **Docs & Updates:** SCRATCHPAD, CHANGELOG, updates-data.js updated for A-Z filter fix (CSS specificity for .filter-hidden) and click-active-letter-to-undo QoL.
2. **A-Z Filter Bar:** Fixed filter not hiding sections (CSS specificity: .collapsible-pages .profile-section.filter-hidden); click active letter again to reset to All (js/filter.js).
3. **A-Z Filter Bar:** Added sticky filter bar to collapsible pages (companies, tools, specials, skills, media); js/filter.js, css/style.css, script tags on all 5 pages; sessionStorage persistence.
2. **Tools:** Sorted Desktop Tools sections A–Z (Auth, Browser AI, Browser Tools, CLI, Codebase & research, Coding Assistants, Coding plans, DevOps & containers, Game development, IDE, Local LLM runtimes, Reference, Terminal, Tunneling, Voice & speech-to-text, Web builders).
2. **Tools:** New section “Coding plans” (subscription/API for IDEs & CLIs); Z.ai GLM Coding Plan (z.ai/subscribe) first entry; companies.html Zhipu AI, search-data.js, badges.js updated.
3. **Docs:** SCRATCHPAD, CHANGELOG, updates-data.js updated for Gemini CLI dual-link and prior Tools changes.
4. **Tools:** Gemini CLI dual-link — geminicli.com + GitHub (github.com/google-gemini/gemini-cli); second card “Gemini CLI GitHub”; tools.html, companies.html, search-data.js, badges.js.
5. **Tools:** Added Z Code (IDE) and Ghostty (Terminal); new Terminal section in tools.html; companies.html, search-data.js, badges.js updated.

**Latest structural changes (2026-02-16):**
- **A-Z Filter Bar:** Sticky bar on collapsible pages; scans `.profile-section h2`, builds letter index; All | # | A–Z pills; filter/expand on click; sessionStorage; glassmorphism; click active letter to undo filter; `.collapsible-pages .profile-section.filter-hidden` for correct hide (CSS specificity fix).
- **Updates page:** New dedicated changelog page (updates.html) with timeline rail, glass cards, scroll-driven fade-in; version badge links to updates; 11 pages site-wide.
- **Collapsible:** Shared `js/collapsible.js` for companies, tools, specials, skills, media; body class `collapsible-pages`; `companies.js` now only adds country badges.
- **Search:** Expand matching panel on collapsible pages; prefer company section header; category labels; close modal on click/Enter.

**Previous structural changes (2026-02-04):**
- **Sidebar Navigation:** Replaced top navigation bar with a sticky, expandable sidebar (icons + text). CSS Grid layout (`64px 1fr` -> `240px 1fr`).
- **Glassmorphism:** All cards (`.project-card`, `.chat-link-card`) now use `backdrop-filter: blur(12px)`, translucent backgrounds, and subtle borders.
- **Bento Grid:** Introduced `.bento-grid`, `.col-span-2` for hierarchical layouts (Featured cards).
- **Motion:** Added 3D perspective tilt on card hover (JS-driven `rotateX`/`rotateY`) and `slideInRight` page entrance animations.
- **Layout:** Moved Search, Theme Switcher, and Version Badge into a floating "Top Bar" inside the main content area.
- **Refactored Pages:** All pages (`index.html` through `404.html`) now use the new Sidebar + Content Wrapper structure.
- **Theme Organization:** CSS themes moved to `css/themes/` (core, brands, editors, creative); `theme.js` updated to generate categorized dropdowns.
- **New Themes:** Added Forest, Coffee, Cyber, Aqua, Luxury (Creative category).
- **programs.html:** Project cards A–Z by `.project-title`; featured block (Nexus Engine, RAIN.CHAT v2, RunicOS) kept at top.

**Search system:** Fuzzy matching with text normalization, scored results, Cmd/Ctrl+K, keyboard nav, highlight & jump to results.

**Next steps:** Monitor for any layout regressions on mobile; consider adding more specific "featured" items to the bento grid on inner pages.
