# SCRATCHPAD

**Active:** None.  
**Blockers:** None.

**Last 5 actions:**
1. **Tools:** Added Z Code (IDE) and Ghostty (Terminal); new Terminal section in tools.html; companies.html, search-data.js, badges.js updated.
2. **Patch 2 (1–10):** Reduced motion, skip link, focus-visible, auto dark/light, print CSS, sitemap.xml, footer Source, About Updates, Inspirations dedup, stagger on About.
2. **Content:** T3 (theo gg) section on companies.html; shoo, Squoosh, T3 Chat, T3 Canvas, Inspirations (About); search index updated.
3. **Collapsible:** Extended to tools, specials, skills, media via `js/collapsible.js`; fixed multi-child grid bug (wrapper inner div); compact layout.
4. **Search:** Companies panel auto-expand when landing from search; prefer section header over product cards (e.g. OpenAI not Azure OpenAI); category labels (Company, Chat, Tool); close modal on result click.
5. **Media:** Emoji accents (🎬 🖼️ 🎵 📦) and section title box styling (left accent border, subtle background).

**Latest structural changes (2026-02-16):**
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
