# SCRATCHPAD

**Active:** None.  
**Blockers:** None.

**Last 5 actions:**
1. **Country badges:** Refactored badges site-wide — full names, top-right pill on cards; tighter wrap; companies page badge smaller.
2. **COUNTRY_MAP:** Added all missing product labels (Google, OpenAI, tools/chats/media) so every company product shows origin.
3. **Docs:** Updated CHANGELOG [1.8.1], SCRATCHPAD; git commit and push.
4. **Alphabetize:** programs.html — project cards A–Z by `.project-title`; featured block unchanged at top.
5. **Redesign:** Applied "Futuristic Redesign" (Sidebar, Glassmorphism, Bento Grid) to `companies.html` (maintained collapsible sections logic).

**Latest structural changes (2026-02-04):**
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
