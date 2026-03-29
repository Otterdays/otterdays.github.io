/**
 * Site update log data. Add new entries at top.
 * Format: { version, date, skipLatest?: boolean, sections: [{ type, items }] }
 * — skipLatest: set true for placeholder/planning rows so the real shipped tag keeps the “Latest” badge.
 */
const UPDATES_DATA = [
  {
    version: "Unreleased",
    date: "TBD",
    sections: [
      {
        type: "added",
        items: [
          "(Future updates.)"
        ]
      }
    ]
  },
  {
    version: "1.10.1",
    date: "2026-03-29",
    sections: [
      {
        type: "added",
        items: [
          "**Hermes Agent** (Nous Research) — **`tools.html`** computer-automation card + **`companies.html`** under Nous Research; **`js/search-data.js`** (tool row + Nous company blurb); **`js/badges.js`**; **`tools.html`** meta/OG descriptions.",
          "**DOCS** — `CHANGELOG` **[1.10.1]**; `SUMMARY`, `SCRATCHPAD`, `SBOM`, `ARCHITECTURE`, `CONTENT_GUIDE` (computer-automation ordering), `journal/2026-03-29.md`."
        ]
      },
      {
        type: "changed",
        items: [
          "**Version & badges** — Top-bar **v1.10.1** site-wide; **`updates.html`** **Latest** on this patch; search modal placeholder **v1.10.1**.",
          "**README.md** — Current version link **v1.10.1**."
        ]
      }
    ]
  },
  {
    version: "1.10.0",
    date: "2026-03-27",
    sections: [
      {
        type: "changed",
        items: [
          "**Release scope:** **v1.10.0** is the **minor** line that **bundles** the museum expansion, informational links hub, multi-provider catalogs, and navigation/registry polish shipped across **v1.9.1 → v1.9.5**. The **patch cards below** stay the dated audit trail; this card summarizes **what changed after** that train (sidebar + museum UX + docs)."
        ]
      },
      {
        type: "added",
        items: [
          "**informational-links.html** — Wikipedia **navigation templates** section: Template:Artificial_intelligence_navbox, Template:Generative_AI, Template:Natural_language_processing, Template:OpenAI, Wikipedia:Wikimedia_sister projects. Flagship / HKChat / 'More Wikipedia' blocks **prioritize Wikipedia** URLs first where it makes sense.",
          "**museum.html** — **Cursor / Warp / Qwen Code** picker snapshots **split into separate cards**: Qwen Code **add-on relative cost** row (own panel), **Warp** long model selector (terminal agent labels, A–Z), **Cursor** context-window + in-app **comparison score** tables. Side-by-side grid (`.museum-picker-snapshot-pair`). Section title **Qwen Code, Cursor, Warp & frontier · Q1 2026**.",
          "**Model makers checklist** — **Completed** state only for **shipped premium catalogs**: **Google** & **Google DeepMind** → `google-gemini.html`; **OpenAI**, **Anthropic**, **xAI**, **Arcee AI** → their museum pages. Green clickable `v1.0` for linked catalogs; everyone else gets registry-only muted `v1.0`.",
          "**Museum — premium flagship FF-07–FF-10**: **GLM-5** (Zhipu AI), **DeepSeek-V3.2**, **MiMo-V2-Pro** (Xiaomi), **Qwen3-Max-Thinking** (Alibaba). Model makers registry **v1.0** — **38** plaque tiles with `Released` dates.",
          "**OpenAI (`openai.html`)** — Wall of models snapshot tables; **ChatGPT lineup** version table + **API & completion** chronological table; full **model ID list** with aliases (`gpt-*` / `o*`).",
          "**Arteria** ([GAME-Arteria](https://github.com/Otterdays/GAME-Arteria)) — mobile idle RPG: hero + Explore card on `index.html`, `programs.html` entry.",
          "**specials.html** — **FreeWebHosting** (40+ free host list) + **Neocities** (free static hosting) in Free domains section.",
          "**tools/replace_sidebar_nav.py** — Regenerate alphabetized sidebar across all HTML pages."
        ]
      },
      {
        type: "changed",
        items: [
          "**Version & badges** — Top-bar **v1.10.0** site-wide; **Updates** timeline shows **Latest** on this release (minor ship).",
          "**Site-wide sidebar** — Labels **A–Z** (**About** first). **Removed** per-provider shortcuts (🔷 Google Gemini, 🤖 OpenAI, 🦉 Anthropic, 🌌 xAI, 🏬 Arcee AI); discovery is via **museum.html** premium chips, **Companies**, and search. Provider catalog pages **no longer** set a matching **`active`** nav item.",
          "**css/style.css** — **`.sidebar::before`** hover overlay is a **flat accent tint** (fixes **banding** from the old vertical gradient + scroll). **`.sidebar a.active:hover`** keeps the inset bar without sideways **translate**. **`.museum-maker-tile--catalog-linked`**, linked vs registry badge colors; exhibit tiles use **`:not(a)`** so **Arcee**’s linked badge stays **green** “catalog done”.",
          "**js/search-data.js** — **AI Museum** description mentions **Warp** long selector; **Informational Links** mentions Wikipedia **templates** + **Templates** search tag.",
          "**DOCS** — `CHANGELOG` **[1.10.0]**, `SUMMARY` (release block), `MODEL_MAKERS_CHECKLIST` (badge semantics + registry), `ARCHITECTURE` (nav order, museum registry, informational-links hub), `SBOM` date, `journal/2026-03-27.md`.",
          "**anthropic.html** — Frontier comparison table (Opus/Sonnet 4.6, Haiku 4.5: API, Bedrock, Vertex IDs, pricing, thinking modes); platform snapshot; release chronology; expanded architecture & technical notes.",
          "**Museum UI** — Removed redundant Gemini CTA button under premium provider chips; chips remain the CTAs."
        ]
      }
    ]
  },
  {
    version: "1.9.5",
    date: "2026-03-26",
    sections: [
      {
        type: "added",
        items: [
          "Premium provider catalogs: **openai.html**, **anthropic.html**, **xai.html**, **arcee.html** — same museum template as Google Gemini (hero, architecture, tiers, versions table, timeline, refs).",
          "Sidebar: 🤖 OpenAI, 🦉 Anthropic, 🌌 xAI, 🏬 Arcee AI after Google Gemini on all pages; **museum.html** gateway chips for all five providers.",
          "css/style.css — provider theme gradients (OpenAI green, Anthropic orange, xAI purple galaxy, Arcee slate) + `.museum-provider-catalog-nav` chips.",
          "Site **v1.9.5**; footer **21 pages**; `sitemap.xml`, `js/search-data.js`."
        ]
      }
    ]
  },
  {
    version: "1.9.4",
    date: "2026-03-26",
    sections: [
      {
        type: "changed",
        items: [
          "Site version bump: badges, `updates.html`, and docs aligned to **v1.9.4**."
        ]
      }
    ]
  },
  {
    version: "1.9.3",
    date: "2026-03-26",
    sections: [
      {
        type: "changed",
        items: [
          "google-gemini.html — Deeper catalog pass: LaMDA / PaLM 2 lineage, Gemini 1.0 launch & benchmarks (MMLU 90%), tier naming (Ultra / Pro / Nano / Deep Think / Flash / Flash Lite), Wikipedia + DeepMind technology links, full **Gemma** table (Gemma 1–3, CodeGemma, RecurrentGemma, PaliGemma 1–2) with context/KV notes and specialized variants (ShieldGemma 2, MedGemma, CodeGemma, DolphinGemma, etc.); IDE model menu section references **Cursor** and **Google Antigravity**.",
          "museum.html — Example Q1 2026 model-picker snapshot: labels **Cursor** and **Google Antigravity** (`#museum-picker-snapshot`).",
          "css/style.css — `.gemini-subheading` for subsection titles on the Google page.",
          "Search index: Google Gemini page entry mentions Antigravity for discoverability."
        ]
      }
    ]
  },
  {
    version: "1.9.2",
    date: "2026-03-26",
    sections: [
      {
        type: "added",
        items: [
          "google-gemini.html — Premium Google / DeepMind museum page: full Gemini version table (Bard, 1.0–1.5, 2.0–2.5, 3.x, 3.1 previews), technical specs (1.x), Nano Banana / image codenames, Gemma, ecosystem timeline; Wikipedia + gemini.google.com refs. Intended as the template for future provider expansions.",
          "Navigation: sidebar **Google Gemini** (🔷) after AI Museum on all pages (including compact-nav explore/posts/inspirations); museum gateway aside + About pages list; sitemap, search-data, explore.js.",
          "Site badge **v1.9.2**; footer **17 pages** site-wide."
        ]
      }
    ]
  },
  {
    version: "1.9.1",
    date: "2026-03-26",
    sections: [
      {
        type: "added",
        items: [
          "informational-links.html — Wikipedia & reference links for Q1 2026 museum flagships (Composer 2, Opus 4.6, GPT-5.4, Grok, Kimi K2.5, Gemini) plus family articles (Claude, GPT-5.x, Codex, Grok, Gemini, Moonshot AI, Cursor IDE).",
          "Sidebar navigation alphabetized by label on all pages; new Informational Links (🔗). Museum intro links to this page.",
          "Search index (Informational Links, AI Museum page entries), sitemap, explore.js page label, footer 16 pages site-wide, v1.9.1 badge."
        ]
      }
    ]
  },
  {
    version: "1.9.0",
    date: "2026-03-21",
    sections: [
      {
        type: "added",
        items: [
          "Release 1.9.0: Consolidated documentation and site version bump; prior patch train 1.8.0–1.8.5 remains below for history.",
          "Tools (Reference): Product Hunt (producthunt.com) — product board for launches; indexed; also linked from About product boards with Futurepedia and There's An AI For That.",
          "Tools (Reference / MCP & agents): CLIProxyAPI, Context7, Firecrawl, Glama MCP, Playwright MCP, Smithery, Tavily; OpenRouter in Reference; Cline (Coding Assistants); Goose (CLI); Daytona & e2b (DevOps).",
          "Tools (IDE): Chad IDE (Clad Labs); OpenCode Desktop; Bind AI — tools card → app.getbind.co/ide; desktop IDE coming soon in copy. Browser based builder: Devin, Genspark, Manus, Replit, Repaint (YC; repaint.com).",
          "Tools (Reference): Awesome TUIs — github.com/rothgar/awesome-tuis (curated TUI apps by category).",
          "Tools (CLI): Fresh (getfresh.dev; terminal editor, LSP, GUI-like UX); Orbiton (xyproto/orbiton; minimal TUI editor, o).",
          "Chats: OpenClaw, NemoClaw, Moltbook — expanded copy and links.",
          "Companies: Clad Labs, Block (Goose), Repaint; NVIDIA; Bind AI, cmux/Manaflow, Obsidian; Amp, JetBrains (Junie, Junie CLI), Gemini Code Assist.",
          "Inspirations: The PrimeTime (@ThePrimeTimeagen).",
          "Earlier in this release window (content + UX): SpacetimeDB, vinext, Bun, Vite, Svelte, OpenCode Zen; Low Level & TechLinked inspirations; page-load veil; Atelier theme; Light theme refresh.",
          "Search & badges: search-data.js and badges.js updated for all new cards and company headers."
        ]
      },
      {
        type: "changed",
        items: [
          "Loader: Fades on window load, reduced motion, timeout fallback, earlier app-shell reveal to avoid pre-loader flashes.",
          "Search: Hashchange re-runs highlight + collapsible expansion; Cmd/Ctrl+K ignores focused editables; result-list hover avoids extra smooth-scroll.",
          "Cards: Per-card pointer handlers for spotlight/tilt (theme.js).",
          "Footer: Eastern clock updates less often; not a live region per tick."
        ]
      },
      {
        type: "fixed",
        items: [
          "Search: Repeated same-page hash jumps stay reliable.",
          "Footer: Clock accessibility (no constant live-region chatter)."
        ]
      }
    ]
  },
  {
    version: "1.8.5",
    date: "2026-02-25",
    sections: [
      { type: "added", items: ["Tools (Hosting/Deploy): Render, Fly.io, Coolify, DigitalOcean, Heroku, and Zeabur added to Tools.", "Companies: Render, Fly.io, Coolify, DigitalOcean, Heroku, and Zeabur added.", "Search index & Badges: Updated search-data.js and badges.js to include the new hosting platforms.", "Tools (Reference): AI research & papers — Connected Papers, Consensus, Elicit, Georgetown Library AI Tools, Ithaka S+R GenAI Tracker, Keenious, Research Rabbit, scite, Scholarcy, Semantic Scholar, Undermind; all in Reference section A–Z.", "Tools (Reference): AI Tools Directory, Marketer Milk (26 best AI marketing tools), Read AI (meeting copilot), Saner.AI (ADHD assistant), Gamma (presentations & docs), Grammarly (writing).", "Tools (IDE): RexIDE, T3 Code (minimal web GUI for coding agents; Codex-first; by theo gg; npx t3 or desktop app), Theia IDE, PearAI, Blackbox AI, Devin.", "Companies (T3 theo gg): t3.gg (main site), YouTube @t3dotgg, T3 Code added to T3 (theo gg) section.", "Inspirations: theo gg card added — Developer & Creator; t3.gg, shoo, T3 Chat, T3 Canvas, T3 Code, create-t3-app.",
      "Posts: New archive page (posts.html) for saved articles; first entry: SMH — Alibaba ROME AI bot went rogue, cryptomining; sidebar 📰, 15 pages site-wide.", "DOCS: New journal folder (DOCS/journal/) with entries 2026-02-25, 2026-03-02.", "Search index updated for all new entries."] }
    ]
  },
  {
    version: "1.8.4",
    date: "2026-02-25",
    sections: [
      { type: "added", items: ["Tools (Coding Assistants): Codeium (forever-free AI coding), Continue (open-source; VS Code, JetBrains; model-agnostic).", "Tools (Reference): MCP Directory (10,000+ MCP servers).", "Media (Video): Kling (Kuaishou), LTX Video (Lightricks).", "Specials: New section Free AI coding — Gemini Code Assist (free), p5js AI.", "Chats: Llama 4 (Meta open-source multimodal).", "Companies: Codeium (Codeium + Windsurf), Continue, Kuaishou (Kling), Lightricks (LTX Video).", "Tools (IDE): IntelliJ IDEA (jetbrains.com/idea) — leading IDE for Java & Kotlin; JetBrains AI built-in.", "Tools (Debug & QA): Jam (jam.dev) — one-click bug reports; auto-capture console, network, repro steps; instant replay; MCP.", "Tools (Web builders): Builder.io GitHub (github.com/BuilderIO/builder) — SDKs, Figma to code, visual dev platform.", "Companies: Jam, JetBrains (IntelliJ IDEA).", "Explore page: Data viz (donut chart, bar chart, tag cloud); sidebar nav, search index, sitemap.", "QoL: URL tooltips on chat cards, search hint on hover (⌘K), footer stats as links (items→search, pages→updates, companies→companies).", "Footer: 13 pages (includes Explore); Mintlify link/description updated (llms.txt, MCP, intelligent docs).", "Search index and badges updated for all new entries.", "Coverage aligns with LogRocket/JetBrains 2025-2026 AI dev rankings (Cursor, Windsurf, Copilot, v0, Bolt, JetBrains AI, Kimi Code, Claude Code, Antigravity)."] },
      { type: "changed", items: ["Mintlify: description updated to Intelligent docs platform; built for humans & AI; llms.txt, MCP.", "Sitemap: explore.html, museum.html added."] }
    ]
  },
  {
    version: "1.8.3",
    date: "2026-02-25",
    sections: [
      { type: "fixed", items: ["A-Z Filter Bar: Filtered-out sections now hide correctly (CSS specificity for .collapsible-pages .profile-section.filter-hidden)."] },
      { type: "changed", items: ["Tools: Desktop Tools sections sorted A–Z (Auth, Browser AI, Browser Tools, CLI, Codebase & research, Coding Assistants, Coding plans, DevOps & containers, Game development, IDE, Local LLM runtimes, Reference, Terminal, Tunneling, Voice & speech-to-text, Web builders).", "A-Z Filter Bar: Click the active letter again to clear the filter and show all sections (QoL)."] },
      { type: "added", items: ["Tools (IDE/CLI/Assistants): Aider, Claude Code, Open Interpreter (CLI), Zed (IDE), GitHub Copilot (Coding Assistants); cards in A–Z order; search index Open Interpreter.", "A-Z Filter Bar: Sticky filter bar on collapsible pages (companies, tools, specials, skills, media); filter sections by first letter; All | # | A–Z pills; glassmorphism; sessionStorage; js/filter.js, .filter-bar in style.css.", "Tools: New section Coding plans — Z.ai GLM Coding Plan (z.ai/subscribe) first; subscription/API for IDEs & CLIs; companies Zhipu AI, search, badges.", "Tools: Gemini CLI dual-link — geminicli.com + GitHub (github.com/google-gemini/gemini-cli); second card Gemini CLI GitHub; search index and badges.", "Tools: Z Code (IDE; zcode-ai.com — AI agent for plan, code, review, deploy); Ghostty (Terminal; ghostty.org — GPU-accelerated cross-platform terminal); new Terminal section in tools.html; companies.html, search-data.js, badges.js updated.", "A11y & QoL: Reduced motion mode, skip-to-content link, :focus-visible ring, auto dark/light (system preference), print-friendly CSS, sitemap.xml, footer Source link.", "Content: shoo.dev (Tools Auth), Squoosh (Tools Reference), T3 Chat (chats), T3 Canvas (media), theo gg (About Inspirations, Companies T3 section); search index entries.", "About: Pages at a glance now includes Updates; duplicate Inspirations removed from search.", "Stagger: About profile-sections use stagger-1 through stagger-5 for entrance animation."] }
    ]
  },
  {
    version: "1.8.2",
    date: "2026-02-16",
    sections: [
      { type: "added", items: ["Collapsible sections: Tools, Specials, Skills, and Media Gen now have collapsible panes like Companies (js/collapsible.js).", "Search category labels: Results show Company, Chat, Tool, etc. for clarity.", "Media page accents: Emoji icons and title box styling (left accent border, subtle background) on section headers."] },
      { type: "changed", items: ["Search: Companies panel auto-expands when landing from search; prefer section header over product cards; modal closes on result click/Enter.", "Collapsible: Shared collapsible.js for all 5 pages; fixed multi-child bug; compact layout.", "Companies page: companies.js now only adds country badges; collapsible logic moved to collapsible.js."] },
      { type: "fixed", items: ["Collapsible sections: Content not showing when expanded on Media, Tools, Specials (multi-child grid bug).", "Search: Modal staying open when clicking result on same page (e.g. Companies → OpenAI)."] }
    ]
  },
  {
    version: "1.8.1",
    date: "2026-02-04",
    sections: [
      { type: "added", items: ["Country badges site-wide via js/badges.js; shared BADGE_COUNTRY_MAP.", "Full country names with wrapping; compact pill styling (top-right of cards).", "Product coverage: OpenAI Codex, Google AI Studio, Android Studio, Gemini, Jules, and 50+ tools/chats/media entries."] },
      { type: "changed", items: ["Badge styling: Card country badges smaller; companies page section badges reduced size, pill style.", "Companies page: Section h2 badges use shared map; smaller, less prominent."] }
    ]
  },
  {
    version: "1.8.0",
    date: "2026-02-04",
    sections: [
      { type: "changed", items: ["UI/UX Redesign: Complete overhaul (Futuristic Glassmorphism).", "Sidebar Navigation: Replaced top nav with dynamic, expandable sidebar.", "Glassmorphism: backdrop-filter blur, translucent backgrounds for all cards.", "Bento Grid: Hierarchical layout with Featured cards.", "Motion: 3D perspective tilt on hover, staggered slideInRight entrance animations.", "Layout: CSS Grid (sidebar + content); Search, Theme, Version Badge in floating Top Bar.", "Theme Organization: Modular files (core, brands, editors, creative); Forest, Coffee, Cyber, Aqua, Luxury."] }
    ]
  },
  {
    version: "1.7.1",
    date: "2026-02-04",
    sections: [
      { type: "changed", items: ["Programs: Project cards alphabetized A–Z; featured block unchanged at top.", "Tools: All sections alphabetized by chat-link-name.", "AI Chats: Provider Chats, Other Assistants, Provider hubs — link cards A–Z.", "Media Gen: Video, Image, Audio — link cards A–Z.", "Specials: Games section A–Z.", "Companies: Product cards within each section alphabetized."] }
    ]
  },
  {
    version: "1.7.0",
    date: "2026-02-04",
    sections: [
      { type: "added", items: ["Antigravity agentic tools: File/Code, Editing, Terminal, Web, Creativity, MCPs.", "SkillBox: track-session, git-worktree, generate-skill.", "Skills directory: React, Testing, Git & workflows; links to skills.sh.", "Themes: VS Code, Synthwave, Monokai, Solarized, Gruvbox.", "Theme switcher now dynamically generates dropdown from JS."] },
      { type: "removed", items: ["Phind from Tools and Companies.", "Haiper from Media."] },
      { type: "changed", items: ["Media: Google VideoFX renamed to Google Flow.", "Companies: Kiro updated to Amazon: agentic AI development; moved to Amazon section."] }
    ]
  },
  {
    version: "1.6.0",
    date: "2026-02-04",
    sections: [
      { type: "added", items: ["Themes: GitHub, Dracula, Nord (Total: 9 themes).", "Scroll-to-top button: Appears after 300px scroll.", "Site Footer: Stats (indexed items, pages, companies) on all pages.", "External link indicators: Subtle arrow on external links.", "Animated background: Slow gradient shift (15s loop)."] },
      { type: "changed", items: ["All HTML pages: footer, scroll button, 9-theme dropdown."] }
    ]
  },
  {
    version: "1.5.1",
    date: "2026-02-04",
    sections: [
      { type: "added", items: ["Specials: Games & play — itch.io, Armor Games, PlayHop, Newgrounds, Yandex Games.", "Tools: Game development — Rosebud AI, itch.io.", "Companies: Rosebud AI, itch.io, Armor Games, Newgrounds, PlayHop, Yandex.", "Search: Tool and special entries for all six."] },
      { type: "changed", items: ["Specials meta: Games in description and keywords.", "SUMMARY: Companies 61+, Tools/Specials copy updated."] }
    ]
  },
  {
    version: "1.5.0",
    date: "2026-02-04",
    sections: [
      { type: "added", items: ["AI Chats: HuggingChat (Hugging Face).", "Tools: MongoDB Atlas, Hugging Face (Models, datasets, Spaces).", "Firebase description expanded: hosting, Firestore, Auth, ML, AI.", "Companies: Hugging Face, MongoDB.", "Media: Hugging Face Spaces (1M+ AI apps).", "Search: HuggingChat, HF Spaces, HF & MongoDB, Firebase."] },
      { type: "changed", items: ["Firebase copy on tools and companies reflects hosting, Firestore, Auth, ML, AI features."] }
    ]
  },
  {
    version: "1.4.0",
    date: "2026-02-04",
    sections: [
      { type: "added", items: ["About page: What this is, Links, Pages at a glance, Who.", "States every link is safe and direct (no redirect chains or affiliate wrappers).", "Nav About added to all pages.", "Search modal and index entry for About.", "README and DOCS updated."] },
      { type: "changed", items: ["CSS: .about-list styles for About page."] }
    ]
  },
  {
    version: "1.3.1",
    date: "2026-02-04",
    sections: [
      { type: "added", items: ["Tools: Voice & speech-to-text — Wispr Flow (AI voice dictation).", "Companies: Wispr (Wispr Flow).", "Search: Wispr Flow indexed.", "DOCS/CONTENT_GUIDE.md — content templates and examples."] }
    ]
  },
  {
    version: "1.3.0",
    date: "2026-02-04",
    sections: [
      { type: "added", items: ["Site-wide Search: Modal, fuzzy matching, Cmd/Ctrl+K, keyboard nav.", "js/search-data.js: 100+ items across all pages.", "js/search.js: Search logic, debounced, theme-aware.", "Tools: Cursor, TRAE, Warp, Factory, Antigravity, Android Studio; Kimi Code CLI, Mistral Vibe, Crush, Qwen Code; Docker.", "Companies: Cursor, Docker, TRAE, Warp, Factory, Charm Bracelet; Google Antigravity; Anthropic Claude; Mistral; Moonshot; Alibaba/QwenLM."] },
      { type: "changed", items: ["All HTML: search button and modal markup.", "Tools meta: Updated for new entries."] }
    ]
  },
  {
    version: "1.2.0",
    date: "2026-02-04",
    sections: [
      { type: "added", items: ["Specials page: Free domains, Learning (freeCodeCamp).", "AI Chats: Claude, Perplexity, Copilot, NotebookLM, Poe, Character.AI, Pi, Cohere, Arcee, Allen AI, Duck.ai; Provider hubs: OpenRouter, T3 Chat, Groq, SambaNova, Cerebras.", "Media: SuperMaker AI, Cuzi AI; FLUX, Recraft; MusicAI.", "Tools: Bolt, Replit, Amp, Netlify, Cloudflare Pages; Localtunnel, Tunnelmole, reTunnel; MCP.", "Companies: 50+ sections (Perplexity, Moonshot, IBM, Character.AI, OpenRouter, etc.).", "Docs: README, SUMMARY, SCRATCHPAD, CHANGELOG, ARCHITECTURE, SBOM, STYLE_GUIDE updated."] },
      { type: "changed", items: ["Chats: Assistants + Provider hubs sections.", "Companies: Aligned with Chats, Tools, Media."] }
    ]
  },
  {
    version: "1.1.0",
    date: "2026-02-04",
    sections: [
      { type: "added", items: ["Custom 404 page for GitHub Pages.", "SVG favicon with gradient branding.", "SEO meta tags (description, keywords, Open Graph, Twitter Cards) on all pages.", "Canonical URLs for SEO."] },
      { type: "changed", items: ["Project restructure: assets/ → css/, js/, images/.", "Inline scripts → theme.js, badges.js.", "Updated all HTML to new asset paths.", "Removed ~200 lines duplicate JS.", "Page titles consistent (e.g. Programs | Otterdays)."] },
      { type: "removed", items: ["assets/ folder.", "~200 lines duplicate inline JavaScript."] }
    ]
  },
  {
    version: "1.0.0",
    date: "2026-02-03",
    sections: [
      { type: "added", items: ["Desktop Tools page: CLI (Gemini CLI), IDE (OpenAI Codex), Browser Tools (AI Studio).", "Site-wide navigation with Desktop Tools link.", "Theme switcher: 6 themes (Dark, Light, Google, OpenAI, Anthropic, Otterdays).", "Badge system: Game, Software, Minecraft, Music, Android.", "Glassmorphism UI with animated backgrounds."] },
      { type: "changed", items: ["Encoding fixes for special characters.", "Layout: 6-wide grid, edge-to-edge, compact cards."] },
      { type: "fixed", items: ["Character encoding issues in page content."] }
    ]
  }
];
