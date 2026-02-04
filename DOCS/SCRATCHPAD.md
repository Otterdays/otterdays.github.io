# SCRATCHPAD

**Active:** None.  
**Blockers:** None.

**Last 5 actions:**
1. **Themes:** Added Synthwave, Monokai, Solarized, Gruvbox (Total 13).
2. **Refactor:** `js/theme.js` now dynamically generates theme dropdown items (DRY); future themes need only JS/CSS updates.
3. **Docs:** Updated CHANGELOG (v1.7.0) and README.
4. **Companies page:** Added 7 new sections (Abacus.AI, DeepAI, Figma, Genspark, Hostinger, JDoodle, QuillBot) and Manus under Meta.
5. **Tools page:** Added 10 new tools; new Web builders section.

**Latest structural changes (2026-02-04):**
- `js/theme.js`: Refactored to populate `#theme-dropdown` dynamically from a `labels` object.
- `css/style.css`: Added 4 new theme blocks (Synthwave, Monokai, Solarized, Gruvbox).

**Search system:**
- Fuzzy matching, scored results, Cmd/Ctrl+K, keyboard nav.

**Next steps:**
- Verify theme switching in browser (especially dropdown generation).
