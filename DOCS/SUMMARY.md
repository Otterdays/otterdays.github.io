# SUMMARY

## Version modality

- **v1.9.1** through **v1.9.5** are **consolidated under** the minor **v1.10.0** (one bucket for the museum / informational-links / Gemini / multi-provider catalog work). The **per-patch log** stays in **`updates.html`** (`js/updates-data.js`) and **`DOCS/CHANGELOG.md`** sections **[1.9.1]–[1.9.5]**.
- [AMENDED 2026-03-27]: Site badge is **v1.10.0**; **Latest** on `updates.html` follows **v1.10.0** (see **[1.10.0]** in `CHANGELOG.md`).
- [AMENDED 2026-03-29]: Site badge is **v1.10.1**; **Latest** on `updates.html` follows **v1.10.1** (see **[1.10.1]** in `CHANGELOG.md`).

## Release v1.10.1 — 2026-03-29

- **Version:** Site badge **v1.10.1** everywhere; **`updates.html`** **Latest** on **v1.10.1**; **`js/updates-data.js`** patch card (Hermes Agent + docs).
- **Docs:** `DOCS/CHANGELOG.md` **[1.10.1]**; this file; `README.md`; `DOCS/ARCHITECTURE.md`; `DOCS/SCRATCHPAD.md`; `DOCS/SBOM.md`; `DOCS/journal/2026-03-29.md`.

## Recent update — 2026-03-29 (Hermes Agent + documentation)

- **Content:** **Hermes Agent** (Nous Research) — `tools.html` **Computer automation (agents)** card + `companies.html` under **Nous Research**; `js/search-data.js` (tool index + **Nous Research** blurb/tags); `js/badges.js` (USA); `tools.html` SEO meta/OG text.
- **Release:** Shipped as patch **v1.10.1** (badges, `updates.html` **Latest**, `js/updates-data.js` card, search placeholder).
- **Docs:** `DOCS/CHANGELOG.md` **[1.10.1]**; this file; `DOCS/SCRATCHPAD.md`; `DOCS/SBOM.md`; `DOCS/ARCHITECTURE.md`; `DOCS/CONTENT_GUIDE.md`; `DOCS/journal/2026-03-29.md`; `README.md`. [AMENDED 2026-03-29]: post-ship doc trail.

## Release v1.10.0 — 2026-03-27

- **Version:** Site badge **v1.10.0** everywhere; **`updates.html`** **Latest** ribbon on **v1.10.0**; **`**bold**`** in changelog lines (`js/updates.js`); modality badge + list legibility (`css/style.css`).
- **Docs:** `DOCS/CHANGELOG.md` **[1.10.0]**; `README.md`, `ARCHITECTURE.md`, this file; `js/updates-data.js` (date + ship note).

## Recent update — 2026-03-27 (docs/log + updates modal cue)

- **Docs/logs:** `DOCS/SCRATCHPAD.md` + `DOCS/CHANGELOG.md` updated with current-release maintenance note and curated upkeep links (model catalogs, benchmarks, provider status pages, Wikipedia templates).
- **updates.html:** Search modal placeholder now references **v1.10.0** context so release baseline is obvious while searching from the updates page.
- **Linking workflow:** `DOCS/CONTENT_GUIDE.md` now includes a **Trusted External Sources** section for quick copy/link/verify when adding museum/provider content.
- **Informational links page:** `informational-links.html` now includes a matching **Trusted external sources** section (OpenRouter models, Artificial Analysis, OpenAI/Anthropic/Google/xAI status dashboards); `js/search-data.js` page entry updated.
- **Refinement:** `informational-links.html` section was tightened to **Wikipedia-first** references (LLM/projects lists, citation/disambiguation guidance, Wikidata pages) to keep the page focused on encyclopedia-style context.

## Recent update — 2026-03-26 (navigation + museum + informational links)

- **Sidebar (all pages):** **A–Z** labels; **no** per-provider nav items (Google Gemini, OpenAI, Anthropic, xAI, Arcee AI removed from the bar — use **AI Museum**, **Companies**, or premium chips on `museum.html`). Helper: `tools/replace_sidebar_nav.py`.
- **CSS:** Sidebar hover overlay fix (no gradient banding); model makers **registry** (muted `v1.0`) vs **linked** green badges for the five premium catalogs (six tiles: Google + Google DeepMind share `google-gemini.html`); `.museum-picker-snapshot-pair` for IDE + Qwen Code side-by-side.
- **museum.html:** **Qwen Code**, **Warp**, **Cursor** picker snapshots separated; **Model makers checklist** lede + linked badges only for shipped premium catalog pages.
- **informational-links.html:** Wikipedia **navigation template** links (Generative AI, OpenAI template, NLP, AI navbox, sister projects); Wikipedia-first ordering where applicable.
- **Docs:** `DOCS/CHANGELOG.md` **[Unreleased]**; `DOCS/MODEL_MAKERS_CHECKLIST.md`; `DOCS/ARCHITECTURE.md`; `DOCS/SCRATCHPAD.md`.

## Recent update — 2026-03-28 (site + docs sync)

- **OpenAI (`openai.html`):** `#openai-versions` — **ChatGPT lineup** table (release date, discontinued / legacy / active) + **API & completion** chronological table; `#openai-wall` March 2026 snapshot tables; `#openai-chat-completion-ids` — model ids + aliases. CSS: `.openai-version-exhibit`, `.gemini-status--legacy`.
- **Anthropic (`anthropic.html`):** Frontier comparison (Opus/Sonnet 4.6, Haiku 4.5 — API, Bedrock, Vertex, pricing, thinking modes), platform snapshot, release chronology, expanded architecture & technical notes; `body.provider-anthropic .museum-table code` in `css/style.css`.
- **Museum (`museum.html`):** Premium flagship **FF-01–FF-10** (Composer 2, Claude, GPT-5.4, Grok, Kimi, Gemini, GLM-5, DeepSeek-V3.2, MiMo-V2-Pro, Qwen3-Max-Thinking); **model makers registry v1.0** — **38** tiles (35 catalog developers + **Arcee AI**, **HKChat OmniServe Limited**, **Xiaomi** exhibit); gateway aside uses provider chips only (no separate Gemini CTA button). `DOCS/MODEL_MAKERS_CHECKLIST.md` — maintenance log + amended counts.
- **Home (`index.html`):** Hero mesh/aurora on `.home`; **Minecraft** → [Otters-Den-Server](https://otterdays.github.io/Otters-Den-Server/) + **Server repository** → [Otters-Den-Server repo](https://github.com/Otterdays/Otters-Den-Server); **Arteria** + **Nate's Space** links/cards; `meta theme-color`; search hardening (`js/search.js`, `js/search-data.js`, `js/qol.js`); scroll progress single-source CSS.
- **Programs:** `programs.html` — **Arteria** card + repo link. **Search:** index entries aligned with new pages and counts.
- **Docs trail:** `DOCS/CHANGELOG.md` **[Unreleased]** (gateway CTA removal, **anthropic.html** depth, flagship + registry); `DOCS/ARCHITECTURE.md` (museum line = chips + catalog + registry); `DOCS/MODEL_MAKERS_CHECKLIST.md`; `DOCS/SCRATCHPAD.md` (dated entries); this file.

[AMENDED 2026-03-28]: Anthropic bullet; expanded docs trail.

## Recent update — 2026-03-28 (Arteria on home)

- **Arteria** ([GAME-Arteria](https://github.com/Otterdays/GAME-Arteria)) — mobile idle RPG: [GitHub Pages](https://otterdays.github.io/GAME-Arteria/), hero + Explore on `index.html`, `programs.html` entry, search + `DOCS/CHANGELOG` Unreleased, `DOCS/SCRATCHPAD.md`.

## Release v1.9.5 — 2026-03-26

- **Version:** Site badge, `updates.html`, and docs on **v1.9.5**.
- **Premium provider pages:** `openai.html`, `anthropic.html`, `xai.html`, `arcee.html` — full catalogs parallel to `google-gemini.html`; sidebar icons 🤖 🦉 🌌 🏬; museum gateway chips; themed CSS.
- **Wiring:** `sitemap.xml`, `js/search-data.js`; footer **21 pages**; About “Pages at a glance” updated.
- **Docs:** `DOCS/CHANGELOG.md` **[1.9.5]**; `js/updates-data.js`; `DOCS/SCRATCHPAD.md`; `DOCS/ARCHITECTURE.md`; `README.md`.

## Release v1.9.4 — 2026-03-26

- **Version:** Site badge, `updates.html`, and docs on **v1.9.4** (patch: version sync only).
- **Docs:** `DOCS/CHANGELOG.md` **[1.9.4]**; `js/updates-data.js`; `DOCS/SCRATCHPAD.md`; `DOCS/ARCHITECTURE.md`.

## Release v1.9.3 — 2026-03-26

- **Version:** Site badge, `updates.html`, and docs on **v1.9.3** (superseded by 1.9.4 for badge).
- **Google Gemini page:** Content pass — LaMDA / PaLM 2 lineage, Gemini launch & benchmarks, tier naming, Wikipedia + DeepMind refs; full **Gemma** specs table + variants; IDE picker note for **Cursor** & **Google Antigravity**; `.gemini-subheading` in CSS; search-data tweak.
- **museum.html:** Picker snapshot labels Cursor + Antigravity (`#museum-picker-snapshot`).
- **Docs:** `DOCS/CHANGELOG.md` **[1.9.3]**; `js/updates-data.js`; `DOCS/SCRATCHPAD.md`; `DOCS/ARCHITECTURE.md` release line.

## Release v1.9.2 — 2026-03-26

- **Version:** Site badge, `updates.html`, and docs on **v1.9.2** (superseded by 1.9.4 for badge).
- **Google Gemini (premium museum page):** New `google-gemini.html` — full catalog of Google / DeepMind Gemini-era models (versions table, 1.x technical specs, Nano Banana / Gemma sections, timeline); CSS premium hero + status pills; **museum gateway** aside on `museum.html` positions this as the template for future provider pages.
- **Wiring:** Sidebar **Google Gemini** (🔷) after **AI Museum** on all pages + 404; `sitemap.xml`, `js/search-data.js`, `js/explore.js`; About “Pages at a glance”; footer **17 pages**.
- **Docs:** `DOCS/CHANGELOG.md` **[1.9.2]**; `js/updates-data.js`; `DOCS/SCRATCHPAD.md`.

## Release v1.9.1 — 2026-03-26

- **Version:** Site badge, `updates.html`, and docs on **v1.9.1**.
- **Informational Links:** New page `informational-links.html` — English Wikipedia (and related) articles for Q1 2026 museum flagships and model families; disclaimer for third-party lag vs product names. **Sidebar** alphabetized by label site-wide; new 🔗 nav item.
- **Wiring:** `sitemap.xml`, `js/search-data.js`, `js/explore.js`, museum intro cross-link; footer **16 pages** (superseded by 1.9.2 count).
- **Docs:** `DOCS/CHANGELOG.md` **[1.9.1]**; `js/updates-data.js`; `DOCS/ARCHITECTURE.md`, `README.md`; About “Pages at a glance” updated.

## Release v1.9.0 — 2026-03-21

- **Version:** Site badge, `updates.html`, and docs on **v1.9.0** — shipped to `main` (GitHub Pages). Includes loader/search/card/footer QoL from the former Unreleased bucket plus March 2026 content.
- **Reference / discovery:** [Product Hunt](https://www.producthunt.com/); [Awesome TUIs](https://github.com/rothgar/awesome-tuis) (curated TUI list); search + **About** product boards.
- **Tools:** MCP/agent stack; **Chad IDE** / Clad Labs; **Browser based builder** (Devin, Genspark, Manus, Replit, **Repaint**); **Bind AI** → [app.getbind.co/ide](https://app.getbind.co/ide) + desktop IDE soon; **CLI:** **Fresh**, **Orbiton**; OpenCode Desktop; SpacetimeDB, vinext, Bun, Vite, Svelte, OpenCode Zen, etc.
- **Chats / companies:** OpenClaw, NemoClaw, Moltbook; Clad Labs, Block, **Repaint**, NVIDIA, Bind, cmux/Manaflow, Obsidian, Amp/Junie/Gemini Code Assist.
- **Inspirations:** The PrimeTime; Low Level, TechLinked, Brackeys, theo gg.
- **Docs:** `DOCS/CHANGELOG.md` **[1.9.0]**; `js/updates-data.js`; `DOCS/journal/2026-03-21.md`; `DOCS/SBOM.md`; `README.md` / `ARCHITECTURE.md` where refreshed.

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
- **20 themes** (theme picker): Core (Dark, Light); Brands (Anthropic, GitHub, Google, OpenAI); Editors (Dracula, Gruvbox, Monokai, Nord, Solarized, VS Code); Creative (Atelier, Aqua, Coffee, Cyber, Forest, Luxury, Otterdays, Synthwave) — `localStorage`.
- **Project badges:** Game, Software, Minecraft, Music, Android (multi-badge; `js/badges.js` on programs).
- **Country badges:** Origin (full country name) on all card pages and company section headers; shared map in `js/badges.js`; company = country for products.
- **Unified search:** Site-wide search with Cmd/Ctrl+K, fuzzy matching, keyboard navigation (`js/search.js`, `js/search-data.js`).
- **Collapsible sections:** Companies, Tools, Specials, Skills, Media Gen — collapsible panes with toggle, minimized by default (`js/collapsible.js`).
- **Responsive:** Mobile-first, glassmorphism; 6-wide project grid.
- **Scroll progress:** Thin bar at top fills left-to-right as you scroll (`js/theme.js`, `css/style.css`).
- **A11y & QoL:** Reduced motion mode, skip-to-content link, :focus-visible ring, auto dark/light (system preference), print-friendly CSS, sitemap.xml, footer Source link.
- **Gradient titles:** Home and profile page titles use theme-aware gradient text (fg→accent).
- **Pages (21):** Home, Programs (~60+ projects), AI Chats, AI Museum, **Google Gemini**, **OpenAI**, **Anthropic**, **xAI**, **Arcee AI** (premium provider catalogs), **Informational Links** (Wikipedia refs for museum models), Media Gen, Companies (80+ companies, collapsible), Tools (CLI/IDE/Web builders/Browser, alphabetical), Specials, Skills/Tools, Updates, Explore, Inspirations (Brackeys, theo gg, Low Level, TechLinked, The PrimeTime), Posts (archived articles), About, 404.

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

**Docs:** `DOCS/journal/` — dated entries (e.g. 2026-02-25, 2026-03-02, **2026-03-21** for v1.9.0, **2026-03-26** for v1.9.1+). **Current version: v1.10.1** (`updates.html`, top-bar badge on all pages). [AMENDED 2026-03-29]

**Quick links:**
- [MODEL_MAKERS_CHECKLIST](MODEL_MAKERS_CHECKLIST.md) — labs/model makers visible on the museum checklist + agent maintenance notes
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
