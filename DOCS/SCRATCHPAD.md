# SCRATCHPAD

## 2026-03-09 — Sleek page-load effect

**Active:** Added a shared page-load / reload transition.  
**Blockers:** None.

**What changed:**
1. **Global loader:** Added a lightweight injected loader in `js/qol.js` so page reloads and initial UI loading feel intentional site-wide.
2. **Visual style:** Added a centered blurred panel, accent pulse, and moving progress bar in `css/style.css`.
3. **Behavior:** Loader respects reduced motion, auto-clears on `window.load`, has a timeout fallback, and now hides the app shell earlier to prevent pre-loader flash / styling jumps.
4. **Docs + updates:** `CHANGELOG.md`, `SUMMARY.md`, `SCRATCHPAD.md`, and `updates-data.js` updated for the new load effect.

## 2026-03-09 — Search + FX engineering cleanup

**Active:** Completed engineering pass on shared JS interactions.  
**Blockers:** None.

**What changed:**
1. **Search reliability:** Same-page search result jumps now re-run highlight/expand logic on hash changes; keyboard shortcut ignores focused form fields; result-list hover no longer constantly smooth-scrolls.
2. **Card FX performance:** Replaced document-wide mousemove scanning with per-card pointer handlers in `js/theme.js`; reduced work on large pages and skipped heavy FX for coarse pointers / reduced-motion users.
3. **Clock accessibility:** Footer clock no longer uses a live region and now refreshes at a lower frequency.
4. **Docs + updates:** `CHANGELOG.md`, `SUMMARY.md`, `updates-data.js`, and `SCRATCHPAD.md` updated for this pass.

**Next steps:**
- Browser-check search behavior on same-page destinations (`companies.html`, `tools.html`) and confirm the reduced card FX still feels responsive on large lists.

**Active:** None.  
**Blockers:** None.

**Last 5 actions:**
1. **Posts archive page:** New posts.html for archived articles; first entry SMH — Alibaba ROME AI bot went rogue, cryptomining; sidebar 📰 on all 15 pages; sitemap, search-data, about (Pages at a glance), footer 15 pages; updates-data.js, CHANGELOG, SCRATCHPAD.
2. **Inspirations theo gg + docs:** Added theo gg card to inspirations.html (Developer & Creator; t3.gg, shoo, T3 Chat, T3 Canvas, T3 Code, create-t3-app); updates-data.js, CHANGELOG, SCRATCHPAD updated; kept on v1.8.5.
2. **T3 Code + theo gg org:** Added T3 Code (github.com/pingdotgg/t3code) to tools.html IDE section; companies.html T3 (theo gg): t3.gg (main site), YouTube @t3dotgg, T3 Code; search-data.js T3 Code + updated T3 company/Inspirations entries; SCRATCHPAD.
2. **Merge 1.8.5–1.8.7:** Consolidated into single v1.8.5; updates-data.js, CHANGELOG; version badge v1.8.5 site-wide; SCRATCHPAD.
2. **Tools (Reference) + Docs:** Added 11 AI research tools (Connected Papers, Consensus, Elicit, Georgetown Library AI Tools, Ithaka S+R GenAI Tracker, Keenious, Research Rabbit, scite, Scholarcy, Semantic Scholar, Undermind) to tools.html; search-data.js entries; updates-data.js v1.8.5; DOCS/journal/2026-02-25.md; CHANGELOG [1.8.5]; SCRATCHPAD.
2. **Content batch:** Codeium, Continue (Tools); MCP Directory (Reference); Kling, LTX Video (Media); Free AI coding section — Gemini Code Assist, p5js AI (Specials); Llama 4 (Chats); Companies: Codeium, Continue, Kuaishou, Lightricks; search-data.js, badges.js, updates-data.js Unreleased, CHANGELOG, SCRATCHPAD.
2. **Version 1.8.3:** Unreleased → 1.8.3 (2026-02-25); updates-data.js new entry; version badge v1.8.3 on all 12 pages; CHANGELOG [1.8.3] added.
2. **Tools (IDE/CLI/Assistants):** Added Aider, Claude Code, Open Interpreter (CLI), Zed (IDE), GitHub Copilot (Coding Assistants) to tools.html in A–Z order; Open Interpreter in search-data.js; CHANGELOG, SCRATCHPAD updated.
3. **AI Museum page:** New `museum.html` — 12 exhibit display cases; 🏛️ nav link on all 12 sidebars; CHANGELOG updated.
4. **Docs & Updates:** SCRATCHPAD, CHANGELOG, updates-data.js for A-Z filter fix and click-active-letter-to-undo.
5. **A-Z Filter Bar:** Fixed filter hide (CSS .filter-hidden); sticky bar on collapsible pages; sessionStorage.
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
