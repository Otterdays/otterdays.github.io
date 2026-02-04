# SCRATCHPAD

**Active:** None.  
**Blockers:** None.

**Last 5 actions:**
1. **Tools page:** New **Web builders** section (Bolt, Firebase Studio, Google AI Studio, Lovable, Replit, v0); removed those from Browser Tools. Added [Firebase Studio](https://studio.firebase.google.com/).
2. **Docs:** Updated SCRATCHPAD, SUMMARY, CHANGELOG, ARCHITECTURE, CONTENT_GUIDE, README, STYLE_GUIDE.
3. **New links:** GitHub (Companies), Railway (Companies + Tools), Lovable, v0, Base44 (Tools).
4. **style.css:** Fixed corruption (UTF-16/null from ~line 1310); truncated at last good `}\n}` and re-appended QoL/footer CSS.
5. **Companies page:** Collapsible sections with top-center toggle, smooth open/close animation (`js/companies.js`, `css/style.css`).

**Latest structural changes (2026-02-04):**
- `companies.html`: body class `companies-page`, script `js/companies.js`; new sections **GitHub**, **Railway**.
- `tools.html`: New **Web builders** section (Bolt, Firebase Studio, Google AI Studio, Lovable, Replit, v0); Browser Tools no longer includes those five. Subtitle mentions web builders.
- `css/style.css`: Companies-only block (`.section-toggle`, `.collapsible-wrapper`, `.minimized`); QoL block restored after corruption fix (scroll button, external link indicator, bg-shift, site-footer, stat-icon).
- `js/companies.js`: Section minimization; runs only when `body` has class `companies-page`.

**Search system:**
- Fuzzy matching, scored results, Cmd/Ctrl+K, keyboard nav.
- **Reminder:** Add GitHub, Railway, Lovable, v0, Base44 to `js/search-data.js` if not yet indexed.

**Next steps:**
- Add the five new links to `js/search-data.js` for search.
- Test companies minimization and Tools order in browser.
