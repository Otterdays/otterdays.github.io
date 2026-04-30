<!-- PRESERVATION RULE: Never delete or replace content. Append or annotate only. -->

# SCRATCHPAD

## 2026-04-29 — Added caveman Cursor skill
**What changed:** Added `caveman` Cursor agent skill under `~/.cursor/skills/caveman/` (`SKILL.md`, `reference.md`, `examples.md`).
**Out-of-scope observations:** None.
---

## 2026-04-29 — Poolside added to Companies
**What changed:** `companies.html` — new **Poolside** company section (platform + docs cards). `js/search-data.js` — indexed **Poolside** for site search. `js/badges.js` — added country badge keys for **Poolside** and **Poolside Docs**.
**Out-of-scope observations:** None.
---

## 2026-04-27 — tools.html: Design & UI (Coolors, Mobbin, Awesome DESIGN.md, Button Stealer)

**What changed:** **`tools.html`** — new **`#design-ui`** section: **Awesome DESIGN.md** (VoltAgent repo), **Button Stealer** (Chrome Web Store), **Coolors**, **Mobbin**. **`js/search-data.js`** — four tool rows (hash links). **`js/badges.js`** — `IT` country + map keys; **Mobbin** → UK. **`DOCS/CHANGELOG.md`** [Unreleased] Added; **`DOCS/SUMMARY.md`**; **`DOCS/ARCHITECTURE.md`** tools line amended.

**Out-of-scope observations:** None.

---

## 2026-04-27 — tools.html: Games tools + MC Tools

**What changed:** **`tools.html`** — section renamed from **Game development** to **Games tools** and added **MC Tools** ([mc.tools](https://mc.tools/)) as a dedicated Minecraft browser toolkit card. **`js/search-data.js`** indexed **MC Tools**. **`js/badges.js`** added `MC Tools` country key.

**Out-of-scope observations:** None.

---

## 2026-04-18 — Samtime (Inspiration)

**What changed:** **`inspirations.html`** — added **Samtime** card (tech satire/YouTube); **`js/search-data.js`** — indexed Samtime; **`about.html`** — updated inspirations list/blurb. **`DOCS/CHANGELOG.md`** [Unreleased]; **`DOCS/SUMMARY.md`**.

**Out-of-scope observations:** None.

---

## 2026-04-18 — Git sync

**What changed:** Performed `git pull`. Repository was already up to date.

**Out-of-scope observations:** None.

---

## 2026-04-03 — tools.html: Augment → CLI only

**What changed:** **`tools.html`** — **Augment** (augmentcode.com) listed only under **CLI**; removed duplicate **Augment Code** from IDE. **`js/search-data.js`** — one **Augment** row; **`js/badges.js`** — `Augment` key. **`DOCS/CHANGELOG.md`** [Unreleased] Changed.

**Out-of-scope observations:** None.

---

## 2026-04-04 — tools.html: Pi, ChatGPT Codex, JetBrains IDEs

**What changed:** **`tools.html`** — **Pi** + **Pi coding agent (npm)**; **OpenAI Codex (developer hub)** + **ChatGPT Codex** in CLI; IDE: **ChatGPT Codex** only (chatgpt.com/codex landing; developers.openai.com/codex/app in copy); anchors `#browser-based-builder`, `#coding-assistants`; IDE blurb → cloud IDEs; **GoLand**, **RustRover**, **CLion**. **`js/search-data.js`**, **`js/badges.js`**. **`DOCS/CHANGELOG.md`** [Unreleased].

**Out-of-scope observations:** None.

---

## 2026-04-04 — Offline survival page (Project NOMAD)

**What changed:** New **`offline-survival.html`** (featured [Project NOMAD](https://www.projectnomad.us/), GitHub install, Kiwix / Ollama / OSM / Kolibri / IIAB). Sidebar link **Offline survival** 🛡️ inserted after **Media Gen** on all main `*.html` (21 files, excl. `museum_catalog_fragment.html`). **`specials.html`** — **Offline resilience** section. **`js/search-data.js`**, **`js/explore.js`**, **`js/badges.js`**, **`sitemap.xml`**, **`README.md`**, **`DOCS/ARCHITECTURE.md`**, **`DOCS/CONTENT_GUIDE.md`**, **`DOCS/CHANGELOG.md`** [Unreleased], **`about.html`** (pages list, **22 pages**).

**Out-of-scope observations:** No site version bump.

---

## 2026-04-03 — OpenClaw ecosystem: site map + tools.html + search + docs

**What changed:** **`tools.html`** `#computer-automation` — **Playwright MCP**; claw-family and adjacent frameworks (ZeroClaw through TrustClaw); **Awesome OpenClaw alternatives**; card to **`Openclaw_variations.md`** on GitHub; meta/OG strings. **`js/search-data.js`** — parallel index rows + **OpenClaw variations (repo)** + **OpenClaw ecosystem map** (→ GitHub blob for `DOCS/OPENCLAW_ECOSYSTEM.md`). **`js/badges.js`** — `COUNTRY_MAP` keys for new card titles. **`DOCS/OPENCLAW_ECOSYSTEM.md`** (new) — table: project → `tools.html` / `companies.html` / `chats.html` / repo-only. **`Openclaw_variations.md`** — cross-ref to ecosystem map. **`DOCS/CONTENT_GUIDE.md`**, **`DOCS/ARCHITECTURE.md`**, **`about.html`** (Tools bullet). **`DOCS/CHANGELOG.md`** [Unreleased], **`DOCS/SUMMARY.md`**, **`DOCS/journal/2026-04-03.md`**, **`README.md`** structure line.

**Out-of-scope observations:** No version bump (still **v1.10.1**); **`js/updates-data.js`** unchanged.

---

## 2026-03-29 — explore.html: premium metrics redesign

**What changed:** `explore.html` — new inline CSS: 2-col grid, card entrance animation (`exploreCardIn`), `ex-stat` icon+counter grid (4-col), SVG donut with hover highlight & interactive legend, flat slim bar charts, link-ratio split bar, top-pages podium (🥇🥈🥉), tag cloud with count badges that fade in on hover. `js/explore.js` — full rewrite: `makeStatsSummaryCard` (8 stats with animated counters), `makeDonutCard` (SVG `<circle>` segments, mouseenter/leave handlers), `makePageBreakdownCard` (podium + 15 bars), `makeLinkRatioCard`, `makeTopTagsCard` (20 tags, hue-shifted fill), `makeTagCloudCard` (80 tags, size/alpha by frequency). Bars animate width from 0% via `activateBars()` with rAF settle.

**Out-of-scope observations:** None.

---

## 2026-03-29 — ship v1.10.1 (badges, timeline Latest, patch card)

**What changed:** All `*.html` version badges **v1.10.1**; `js/updates-data.js` — **1.10.1** card (Hermes Agent + DOCS), **Unreleased** placeholder restored; `updates.html` search placeholder **v1.10.1**; `README.md`; `DOCS/CHANGELOG.md` **[1.10.1]**; `DOCS/SUMMARY.md`, `DOCS/ARCHITECTURE.md`, `DOCS/SBOM.md`; `DOCS/journal/2026-03-29.md` — patch ship line.

---

## 2026-03-29 — Hermes Agent + documentation sync

**What changed:** **Hermes Agent** (Nous Research) already on `tools.html`, `companies.html`, `js/search-data.js`, `js/badges.js`, `js/updates-data.js`. **Docs trail:** `DOCS/CHANGELOG.md` **[Unreleased]**, `DOCS/SUMMARY.md`, `DOCS/SBOM.md`, `DOCS/ARCHITECTURE.md`, `DOCS/CONTENT_GUIDE.md` (curated-order note for computer-automation subsection), `DOCS/journal/2026-03-29.md`.

**Out-of-scope observations:** None.

---

## 2026-03-27 — informational-links: tightened to wiki-first focus

**What changed:** Replaced the broad external verification block on `informational-links.html` with **Wikipedia research and verification** links (LLM list, AI projects list, citing sources, disambiguation, Wikidata main page, Wikidata Query Service). Updated `js/search-data.js` informational-links desc/tags to match wiki-first scope.

---

## 2026-03-27 — informational-links: trusted external sources block

**What changed:** `informational-links.html` — added **Trusted external sources** section with verification links for **OpenRouter models**, **Artificial Analysis**, and provider status pages (**OpenAI**, **Anthropic**, **Google Cloud**, **xAI**). `js/search-data.js` informational-links page description/tags expanded for discoverability.

---

## 2026-03-27 — docs: linked source-of-truth block (CONTENT_GUIDE)

**What changed:** `DOCS/CONTENT_GUIDE.md` — added **Trusted External Sources** section with direct links for model catalogs, benchmarks, provider status pages, and Wikipedia templates, plus a 3-step usage flow for future content/link updates.

---

## 2026-03-27 — docs/log sweep + v1.10.0 modal cue + next-link ideas

**What changed:** Docs/status sweep for current release context; confirmed all page badges are **v1.10.0**; updated `updates.html` search modal placeholder to mention **v1.10.0** context.

**Useful next additions (linked):**
- **Model cards metadata source:** [OpenRouter models](https://openrouter.ai/models) for quick release/status cross-checks.
- **Benchmark snapshots:** [Artificial Analysis](https://artificialanalysis.ai/) for model capability trends.
- **Provider status pages:** [OpenAI status](https://status.openai.com/), [Anthropic status](https://status.anthropic.com/), [Google Cloud status](https://status.cloud.google.com/), [xAI status](https://status.x.ai/).
- **Museum reference quality pass:** [Wikipedia AI navbox](https://en.wikipedia.org/wiki/Template:Artificial_intelligence_navbox) and [NLP template](https://en.wikipedia.org/wiki/Template:Natural_language_processing) for category consistency.

---

## 2026-03-27 — specials: FreeWebHosting + Neocities

**What changed:** `specials.html` — added **FreeWebHosting** ([miten5/FreeWebHosting](https://github.com/miten5/FreeWebHosting)) + **Neocities** ([neocities.org](https://neocities.org/)) to Free domains section, alphabetically after FreeDomain (GitHub); `js/search-data.js` — both entries.

**Research findings:**
- **FreeWebHosting:** 71 ⭐, 15 forks, 1 contributor (miten5). 40+ providers: Neocities, Netlify, Vercel, GitHub Pages, GitLab Pages, Render, InfinityFree, 000WebHost, Alwaysdata, Awardspace, Freehostia, etc.
- **Neocities:** Missing from site — perfect complement (free static hosting, 1 GB storage, 200 GB bandwidth, no ads).
- Related providers already on site: Netlify ✓, Vercel ✓, GitHub Pages ✓, Render ✓.

---

## 2026-03-27 — ship v1.10.0 (badges, timeline Latest, update modalities)

**What changed:** All `*.html` version badges **v1.10.0**; `js/updates-data.js` — removed **`skipLatest`** on **1.10.0**, date **2026-03-27**, **Changed** bullet for badges; `js/updates.js` — **`formatUpdateItem`** (`**bold**` → `<strong>`); `css/style.css` — update section badges + list contrast. `README.md`, `DOCS/CHANGELOG.md` **[1.10.0]**, `SUMMARY.md`, `ARCHITECTURE.md`, `SCRATCHPAD` (this line).

---

## 2026-03-26 — js/updates-data.js: v1.10.0 card filled out (timeline)

**What changed:** `js/updates-data.js` — **v1.10.0** — **Changed** (release scope), **Added** (informational-links templates, museum snapshots + side-by-side + model makers linked badges, `replace_sidebar_nav.py`), **Changed** (sidebar A–Z, CSS, search-data, DOCS). **Unreleased** single placeholder line. **`skipLatest: true`** on 1.10.0 so **Latest** stays **v1.9.5**. `DOCS/CHANGELOG.md` Unreleased bullet.

---

## 2026-03-26 — docs: CHANGELOG Unreleased + SUMMARY + MODEL_MAKERS_CHECKLIST + ARCHITECTURE (nav, museum, informational links)

**What changed:** `DOCS/CHANGELOG.md` **[Unreleased]** — batch entry (sidebar A–Z, CSS, informational-links templates, museum snapshots + linked registry badges); `DOCS/SUMMARY.md` — **Recent update — 2026-03-26**; `DOCS/MODEL_MAKERS_CHECKLIST.md` — **Badge semantics**, maintenance log, [AMENDED] note; `DOCS/ARCHITECTURE.md` — museum tree, informational-links, sidebar A–Z order, amended notes.

---

## 2026-03-26 — docs: v1.10.0 modality (1.9.1–1.9.5 consolidation)

**What changed:** `js/updates-data.js` — **v1.10.0 (TBD)** card + Unreleased bullets; **`skipLatest`** on that row so **v1.9.5** keeps **Latest** on `updates.html`. `js/updates.js` — honors `skipLatest`. `DOCS/CHANGELOG.md` Unreleased — version modality line. `DOCS/SUMMARY.md` — **Version modality** section.

---

## 2026-03-26 — museum: model makers checklist — linked “done” badges (5 premium catalogs only)

**What changed:** `museum.html` — registry lede explains registry vs completed catalog; **Google**, **Google DeepMind** → `google-gemini.html`; **OpenAI**, **Anthropic**, **xAI**, **Arcee AI** → respective catalog pages; `<a class="museum-maker-ver museum-maker-ver--linked">` for those six tiles only; others **`.museum-maker-ver--registry`** (muted). `css/style.css` — registry vs linked styles, `.museum-maker-tile--catalog-linked` border tint.

---

## 2026-03-26 — museum.html: IDE menu + Qwen Code snapshots side by side

**What changed:** `museum.html` — wrap `#museum-picker-snapshot` + `#museum-picker-snapshot-qwen-code` in `.museum-picker-snapshot-pair`. `css/style.css` — 2-col grid ≤72rem; stacks at `max-width: 52rem`.

---

## 2026-03-26 — museum.html: Qwen Code add-ons in own card (not Cursor-titled)

**What changed:** `museum.html` — `#museum-picker-snapshot-qwen-code` + class `museum-picker-snapshot--qwen-code`; title **Qwen Code — add-on relative cost** (no “Cursor —”); roster + section heading list Qwen Code first. `css/style.css` — subtle accent border for that card.

---

## 2026-03-26 — museum.html: Warp long model selector split out from Cursor block

**What changed:** `museum.html` — new `#museum-picker-snapshot-warp` card (long model selector A–Z); Qwen Code → `#museum-picker-snapshot-cursor-qwen`; context/comparison tables → `#museum-picker-snapshot-cursor-tables`. Section title **Cursor, Warp & frontier lineup**; roster note names Cursor vs Warp.

---

## 2026-03-26 — museum.html: Qwen Code add-on cost row (Cursor snapshot)

**What changed:** `museum.html` — Cursor extended snapshot: copy + `aria-label` state the relative-cost list is the **Qwen Code** add-on row; group title **Qwen Code — add-on models (relative cost)**; five models A–Z (GLM-5 … Qwen3.5-Plus).

---

## 2026-03-26 — informational-links: Wikipedia navbox templates + sister projects

**What changed:** `informational-links.html` — new section **Wikipedia navigation templates** (A–Z): Template:Artificial_intelligence_navbox, Template:Generative_AI, Template:Natural_language_processing, Template:OpenAI, Wikipedia:Wikimedia_sister_projects. Stagger classes renumbered. `js/search-data.js` — Informational Links desc/tags.

---

## 2026-03-26 — nav: A–Z sidebar (no company shortcuts); informational links Wikipedia-first; sidebar CSS banding fix

**What changed:** All pages with `<nav class="sidebar">` — removed per-company items (Google Gemini, OpenAI, Anthropic, xAI, Arcee AI); links sorted A–Z (About → Updates). Museum/provider HTML pages have no `active` nav item. `css/style.css` — uniform hover tint on `.sidebar::before` (replaces vertical gradient that banded with scroll); `.sidebar a.active:hover` keeps inset bar without slide. `informational-links.html` — intro leads with Wikipedia for Gemini; flagship cards + “More Wikipedia context” A–Z; HKChat lists Wikipedia before official URLs. `tools/replace_sidebar_nav.py` — script to regenerate nav blocks.

---

## 2026-03-28 — docs: CHANGELOG + SUMMARY + ARCHITECTURE + MODEL_MAKERS_CHECKLIST

**What changed:** `DOCS/CHANGELOG.md` [Unreleased] — museum **CTA removal** (`museum-gemini-gateway-btn`), **anthropic.html** catalog depth; `DOCS/SUMMARY.md` — Anthropic bullet + docs trail (CHANGELOG, ARCHITECTURE, checklist); `DOCS/ARCHITECTURE.md` — `museum.html` tree line + [AMENDED] note outside code fence; `DOCS/MODEL_MAKERS_CHECKLIST.md` — related link `#openai-versions`.

---

## 2026-03-28 — openai.html: ChatGPT lineup + API tables (`#openai-versions`)

**What changed:** `openai.html` — **ChatGPT lineup** table (Version / Release date / Status in ChatGPT / Notes) chronological through **GPT-5.4**; **API & completion** table (API status) unchanged rows; intro explains product vs API churn; `.openai-version-exhibit` + `.gemini-status--legacy` in `css/style.css`; `js/search-data.js` OpenAI blurb.

[AMENDED 2026-03-28]: Prior pass: API-only chronological table (Codex Aug 2021 → GPT-5.4 Mar 2026).

---

## 2026-03-28 — museum: premium flagship +4 (GLM-5, DeepSeek-V3.2, MiMo-V2-Pro, Qwen3-Max-Thinking)

**What changed:** `museum.html` — **Exhibit FF-07–FF-10** in Premium flagship · Q1 2026: **GLM-5** (Zhipu AI / Z.AI), **DeepSeek-V3.2**, **MiMo-V2-Pro** (Xiaomi), **Qwen3-Max-Thinking** (Alibaba); roster note updated; **model makers registry** +1 exhibit tile **Xiaomi** (38 tiles). `css/style.css` — `data-company` accents **zhipu**, **xiaomi**, **alibaba**. `js/search-data.js` — AI Museum desc/tags. **Docs:** `DOCS/MODEL_MAKERS_CHECKLIST.md` amended count; `DOCS/CHANGELOG.md` Unreleased.

---

## 2026-03-28 — museum: model makers registry v1.0 (plaque + tiles)

**What changed:** `museum.html` — full **37** makers (35 `RAW_ROWS` developers + **Arcee AI** + **HKChat OmniServe Limited**): registry ribbon **Collection · Museum registry v1.0** + **Updated 28 Mar 2026**; per-tile **v1.0** badge + **earliest catalog** `<time>` (exhibit rows: **Exhibit** pill, Mar 2026). `css/style.css` — gold plaque frame, grid, hover lift, exhibit lavender accent. `DOCS/MODEL_MAKERS_CHECKLIST.md` — amended count + date rules; `js/search-data.js` AI Museum desc.

[AMENDED 2026-03-28]: **+1 exhibit tile** — **Xiaomi** (MiMo-V2-Pro flagship); checklist total **38** tiles. See `DOCS/SUMMARY.md` Recent update.

---

## 2026-03-27 — anthropic.html museum catalog expansion

**What changed:** `anthropic.html` — frontier comparison table (Opus/Sonnet 4.6, Haiku 4.5: API, Bedrock, Vertex IDs, list pricing, extended/adaptive thinking); platform snapshot (latency, context/output, cutoffs); release chronology table; expanded architecture (Constitutional AI / RLAIF), tiers guidance, lifecycle table rows, technical notes (thinking, MCP), timeline bullets, refs + disclaimer. `css/style.css` — `body.provider-anthropic .museum-table code` monospace styling. `js/search-data.js` — Anthropic entry tags/desc.

---

## 2026-03-28 — Arteria (GAME-Arteria) on home + programs

**What changed:** `index.html` — hero link + Explore card → [otterdays.github.io/GAME-Arteria/](https://otterdays.github.io/GAME-Arteria/) (cosmic idle RPG); meta/OG/Twitter mention Arteria. `css/style.css` — `.home-link--arteria`, `.feature-card--arteria` (lavender `#a78bfa`). `programs.html` — A–Z card after Aethereal Hymns, inline link to [Otterdays/GAME-Arteria](https://github.com/Otterdays/GAME-Arteria). `js/search-data.js` — Arteria project row (external URL) + Home tag/desc. **Docs:** `DOCS/CHANGELOG.md` Unreleased; `DOCS/SUMMARY.md` quick link.

---

## 2026-03-28 — OpenAI Chat & Completion model ID table

**What changed:** `openai.html` — new subsection `#openai-chat-completion-ids`: full **OpenAI Chat** + **Completion** model id list with **aliases** (gpt-4o through gpt-5.4 dated SKUs, o-series, gpt-3.5-turbo-instruct). **Docs:** `DOCS/MODEL_MAKERS_CHECKLIST.md` related link + maintenance log; `DOCS/CHANGELOG.md` Unreleased; `js/search-data.js` OpenAI tags.

---

## 2026-03-28 — OpenAI wall + model makers checklist

**What changed:** `openai.html` — **OpenAI wall of models** (`#openai-wall`): March 2026 snapshot tables (ChatGPT tiers, frontier, image, video, realtime/audio, Codex, deep research, GPT-OSS, more SKUs, ChatGPT API labels). `museum.html` — **Model makers checklist** chip list (catalog developers + Arcee AI, HKChat OmniServe Limited). `css/style.css` — `.museum-makers-checklist`, `.museum-makers-list`, `.museum-maker-chip`. **Docs:** `DOCS/MODEL_MAKERS_CHECKLIST.md` (preservation header, maintenance log); `DOCS/SUMMARY.md` quick link; `DOCS/CHANGELOG.md` Unreleased note; `js/search-data.js` Museum + OpenAI entries. **Tool:** `tools/extract_museum_devs.py` — optional diff of catalog `Developer` column vs checklist.

---

## 2026-03-26 — index: Otter's Den Server repo link

**What changed:** `index.html` — server callout link now points to [Otterdays/Otters-Den-Server](https://github.com/Otterdays/Otters-Den-Server) (“Server repository”); primary **Minecraft Server** button still opens the [GitHub Pages site](https://otterdays.github.io/Otters-Den-Server/).

---

## 2026-03-26 — home: mesh / aurora background pattern

**What changed:** `css/style.css` — `.home` isolation + `::before` layered dot grid, diagonal hatch, accent radial (soft ellipse mask); `::after` blurred conic “aurora”; `home-pattern-drift` / `home-aurora-pulse` animations disabled under `prefers-reduced-motion`; `.home > *` raised above pattern layers.

---

## 2026-03-26 — site search: hardening, dedupe, CSS, platform hint

**What changed:** `js/search.js` — allowlist/sanitize `item.url`, hash parse (first `=`), try/catch `decodeURIComponent`, `escapeHtmlAttr` on result `href`; `js/search-data.js` — merge duplicate T3 Canvas / shoo / Squoosh rows, Companies page blurb **78+**; `css/style.css` — single `.scroll-progress` / `.scroll-progress-fill` (gradient + scroll-driven animation, z-index 9999), `.skip-link:focus-visible`; `js/qol.js` — `addSearchHint` sets title + `.search-trigger-kbd` for **⌘** vs **Ctrl** by platform; `index.html` — `meta name="theme-color" content="#0a0d12"`.

---

## 2026-03-28 — index: Nate's Space (friend site)

**What changed:** `index.html` — hero link + Explore card for [Nate's Space](https://otterdays.github.io/Nates-Space/) (natee.vercel.app); `css/style.css` teal `.home-link--friend` / `.feature-card--nates`; `search-data.js` Home entry/tags.

[AMENDED 2026-03-28]: Meta/OG/Twitter descriptions; dedicated search row for Nate's Space (external URL); `.feature-card--nates:focus-visible` teal outline.

---

## 2026-03-26 — home page polish pass (unstyled text fix)

**What changed:** `index.html` + `css/style.css` — added a compact server callout card under hero; tightened home layout widths; upgraded feature grid sizing/spacing; forced `.feature-card` link states (`:visited/:hover/:active`) and descendants to inherit text color with no underlines to remove default-link appearance; improved typography and keyboard focus ring.

---

## 2026-03-26 — arcee.html: Trinity + full docs catalog

**What changed:** `arcee.html` — aligned with **docs.arcee.ai**: **Trinity** Nano/Mini/Large MoE table, foundation vs post-train lists (SuperNova Medius/Lite, Spark, Virtuoso, Caller, &hellip;), AFM-4.5B, capabilities, context I/O, and training bullets, MergeKit + Fusion + Cloud; `search-data.js` Arcee row + tags.

---

## 2026-03-26 — v1.9.5 OpenAI, Anthropic, xAI, Arcee premium museum pages

**What changed:** New `openai.html`, `anthropic.html`, `xai.html`, `arcee.html` (provider catalogs, Wikipedia-forward); sidebar 🤖🦉🌌🏬 after 🔷 on all HTML + 404; `museum.html` gateway chips; provider CSS themes; site **v1.9.5**, footer **21 pages**; `sitemap.xml`, `search-data.js`, About list; `CHANGELOG` **[1.9.5]**, `SUMMARY`, `ARCHITECTURE`, `README`, `updates-data.js`.

---

## 2026-03-26 — v1.9.4 version sync (patch bump)

**What changed:** All HTML version badges **v1.9.4**; `js/updates-data.js` **[1.9.4]**; `CHANGELOG` **[1.9.4]**; `SUMMARY`, `ARCHITECTURE`, `SCRATCHPAD`.

---

## 2026-03-26 — v1.9.3 Google Gemini + Gemma catalog refinement; Antigravity picker note

**What changed:** `google-gemini.html` — LaMDA/PaLM 2, launch/benchmarks, tier names, Gemma full table + variants, refs; **Cursor** + **Google Antigravity** in IDE picker section; `museum.html` snapshot copy; `.gemini-subheading` in `css/style.css`; `search-data.js` Antigravity tag; site **v1.9.3**; `CHANGELOG` **[1.9.3]**, `SUMMARY`, `ARCHITECTURE`, `updates-data.js`. Git: commit + push `main`.

---

## 2026-03-26 — v1.9.2 Google Gemini premium museum page

**What changed:** New `google-gemini.html` — full Gemini / Gemma / Nano Banana catalog (tables, timeline, architecture); premium CSS; `museum-gemini-gateway` aside on `museum.html`; sidebar 🔷 after 🏛️ on all HTML + 404; compact nav fixed for explore/inspirations/posts; `sitemap.xml`, `search-data.js`, `explore.js`; site **v1.9.2**, footer **17 pages**; `DOCS/CHANGELOG` **[1.9.2]**, `SUMMARY`, `updates-data.js`.

---

## 2026-03-26 — v1.9.1 Informational Links + alphabetical sidebar

**What changed:** New `informational-links.html` (Wikipedia links for museum Q1 2026 flagships + families); sidebar A–Z by label on all HTML + 404; `sitemap.xml`, `search-data.js`, `explore.js`, museum cross-link; footer 16 pages; docs SUMMARY/CHANGELOG/ARCHITECTURE/README; `js/updates-data.js` 1.9.1 entry.

---

## 2026-03-21 — v1.9.0 ship (docs + git push)

**What changed:** Final **1.9.0** notes in `CHANGELOG.md` and `js/updates-data.js` (Repaint, Awesome TUIs, Fresh, Orbiton, Bind IDE link/copy); `SUMMARY.md` + `journal/2026-03-21.md`. **Git:** commit `chore(release): v1.9.0` (or `docs(release): v1.9.0`) and **push `main`**.

---

## 2026-03-21 — Fresh + Orbiton (TUI editors, CLI section)

**What changed:** **Fresh** ([getfresh.dev](https://getfresh.dev/), [sinelaw/fresh](https://github.com/sinelaw/fresh)) and **Orbiton** ([xyproto/orbiton](https://github.com/xyproto/orbiton)) — `tools.html` CLI (A–Z: Fresh after Crush; Orbiton after Open Interpreter); `search-data.js`; `badges.js` (Fresh US, Orbiton Norway).

---

## 2026-03-21 — Awesome TUIs (rothgar/awesome-tuis)

**What changed:** [awesome-tuis](https://github.com/rothgar/awesome-tuis) — `tools.html` Reference (after Arena); `search-data.js`; `badges.js` (US). Curated TUI directory: editors, dev tools, K8s/Docker, file managers, games, libraries.

---

## 2026-03-21 — Repaint (repaint.com)

**What changed:** [Repaint](https://repaint.com/) — **Browser based builder** on `tools.html`; **companies.html** section; `search-data.js` (company + tool); `badges.js` (United States). YC AI website builder: chat-to-build, design inspiration.

---

## 2026-03-21 — Bind AI: browser IDE + desktop (soon)

**What changed:** Copy + links: **Bind AI** — browser IDE at [app.getbind.co/ide](https://app.getbind.co/ide); **full desktop IDE coming soon**. `tools.html` IDE card links to `/ide`; `companies.html` stays getbind.co with same narrative; `search-data.js` updated.

---

## 2026-03-21 — Release v1.9.0 + docs sweep

**What changed:** Unified **v1.9.0** — all HTML version badges, `js/updates-data.js` (new **1.9.0** entry; prior Unreleased cleared to placeholder), `DOCS/CHANGELOG.md` **[1.9.0]** + Unreleased trimmed; restored **1.8.4** bullets (IntelliJ, Jam, Explore, Mintlify, etc.) into the long 1.8.4 section after duplicate removal. **SUMMARY.md**, **SBOM.md**, **CONTENT_GUIDE.md** (release checklist), **DOCS/journal/2026-03-21.md**. **Product Hunt:** confirmed in tools Reference, search, About — called out in 1.9.0 notes.

---

## 2026-03-21 — Chad IDE (Clad Labs) + Browser based builder section

**What changed:** **Chad IDE** ([cladlabs.ai](https://www.cladlabs.ai/)) — `tools.html` IDE + `companies.html` **Clad Labs**; `search-data.js` + `badges.js`. New **Browser based builder** on `tools.html` (before IDE): **Devin**, **Genspark**, **Manus**, **Replit** — removed duplicates from IDE / Browser Tools / Web builders.

---

## 2026-03-21 — Agent/MCP infra batch (homie follow-up)

**What changed:** **companies.html** — **Block** section (**Goose**). **search-data.js** — company Block; tools: CLIProxyAPI, Context7, Firecrawl, Glama MCP, Playwright MCP, Smithery, Tavily, Goose, Cline, Daytona, e2b, OpenRouter (tools). **badges.js** — country badges for those `.chat-link-name` keys plus **Block** / **Goose** for companies.

---

## 2026-03-21 — Agent tools batch (Amp CLI, Junie, Gemini Code Assist)

**What changed:** Web-informed additions: **Amp CLI** (tools CLI + companies Amp), **Junie** + **Junie CLI** (Coding Assistants, CLI, JetBrains companies), **Gemini Code Assist** (Coding Assistants + Google companies). `search-data.js`, `badges.js` updated.

---

## 2026-03-21 — OpenClaw / NemoClaw / Moltbook expansion

**What changed:** Richer **OpenClaw** + **Moltbook** on `chats.html`; **OpenClaw** + **NemoClaw** in `tools.html` CLI; **companies.html**: OpenClaw section (site, GitHub, Docs), **Moltbook** section, **NVIDIA** (NemoClaw, ChatRTX); `search-data.js` + `badges.js` (NVIDIA, NemoClaw, OpenClaw GitHub/Docs).

---

## 2026-03-21 — Bind AI (getbind.co)

**What changed:** [Bind AI](https://www.getbind.co/) — `tools.html` IDE (A–Z after Augment Code); `companies.html` section; `search-data.js`; `badges.js`. [AMENDED 2026-04-03]: **Augment** removed from IDE list; Bind AI now follows **Android Studio** A–Z.

---

## 2026-03-21 — Inspirations: The PrimeTime

**What changed:** [The PrimeTime](https://www.youtube.com/@ThePrimeTimeagen) (@ThePrimeTimeagen) — `inspirations.html` card; `search-data.js`; `about.html`; `DOCS/SUMMARY.md` inspirations list.

---

## 2026-03-21 — Obsidian

**What changed:** [Obsidian](https://obsidian.md/) — `tools.html` Reference; `companies.html` section; `search-data.js`; `badges.js` (Canada).

---

## 2026-03-21 — cmux (Manaflow)

**What changed:** [cmux](https://cmux.com/) — Terminal section in `tools.html` (before Ghostty, A–Z); `companies.html` section **Manaflow**; `search-data.js` (tool + company); `badges.js` (`cmux`, `Manaflow`).

---

## 2026-03-21 — OpenCode Desktop on Tools IDE

**Active:** None.  
**Blockers:** None.

**What changed:** `tools.html` IDE section: card for [OpenCode Desktop](https://opencode.ai/download) (beta IDE; macOS/Windows/Linux, Homebrew cask). `search-data.js`: tool index entry + company blurb/tags. `companies.html`: OpenCode Desktop description notes IDE.

**Last action:** OpenCode Desktop IDE card + search alignment.

---

## 2026-03-12 — Content batch: inspirations, tools, companies

**Active:** None.  
**Blockers:** None.

**What changed:**
1. **Inspirations:** Low Level (YouTube; reverse engineering, low-level, cybersecurity); TechLinked (YouTube; tech news, 1.99M subs).
2. **Tools & Companies:** SpacetimeDB (real-time backend + DB; Clockwork Labs); vinext (Cloudflare Next.js on Vite); OpenCode Desktop, OpenCode Zen; Bun (JS runtime); Vite (frontend build tool); Svelte (UI framework).
3. **Search & badges:** search-data.js, badges.js updated for all new entries.
4. **Docs:** SCRATCHPAD, SUMMARY, CHANGELOG, updates-data.js updated.

**Last 5 actions:**
1. Content batch (2026-03-12): Inspirations (Low Level, TechLinked); Tools/Companies (SpacetimeDB, vinext, OpenCode Desktop/Zen, Bun, Vite, Svelte); docs updated.
2. Page-load effect (2026-03-09): Loader veil, accent pulse, progress sweep; qol.js, style.css.
3. Search + FX engineering (2026-03-09): Same-page hash re-highlight, Cmd+K ignores inputs, per-card pointer handlers.
4. Posts archive; Inspirations theo gg; T3 Code merge.
5. Tools Reference, Gemini CLI dual-link, Z Code, Ghostty, A-Z filter.

---

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
