# CHANGELOG

All notable changes to this project are documented in this file. Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.7.0] - 2026-02-04

### Added

**Themes** (`css/style.css`, `js/theme.js`)
- **VS Code:** Editor standard (dark grey/blue).
- **Synthwave:** Neon dreams (purple/pink/cyan).
- **Monokai:** Code classic (dark grey/yellow/pink).
- **Solarized:** Precision & contrast (teal/blue).
- **Gruvbox:** Retro groove (warm dark/orange).
- **Refactor:** Theme switcher now dynamically generates the dropdown list from JS; no HTML updates required for future themes.

## [Unreleased]

### Added

**AI Chats** (`chats.html`, `js/search-data.js`)
- **Provider Chats:** Deep Cogito (Cogito 671B–70B), Dolphin Chat (dphn.ai), Falcon (TII; H1R 7B, H1 Arabic), K2 Think (MBZUAI), LongCat AI (think, search, image & video), Nous Chat (Hermes; worldbuilding, code, reasoning), Public AI (Apertus; Switzerland), StepFun (chat, Q&A, image, Step Audio Studio), Tencent Hunyuan (Hunyuan AI Studio). All indexed.
- **Provider hubs:** ZenMux (unified gateway to many models; chat & API; compensation for subpar results). Indexed.
- **Provider hubs (previous):** Sup AI (multi-model orchestration; research-grade accuracy, logprob confidence, always cited). Indexed.
- **Provider hubs (previous):** Lumio AI, WebLLM Chat, Chat LLM (1096+ models), Higgsfield Assist. All indexed.

**Companies** (`companies.html`, `js/search-data.js`)
- **New sections:** Ollama (run open models locally). LM Studio (local AI on your computer; headless llmster, SDK, MCP). vLLM (high-throughput inference & serving for LLMs; vllm.ai). Footer stat 78+ companies site-wide. All indexed.
- **Previous:** Qoder, OpenCode, Kilo, Roo Code, Quests. IBM: Project Bob. StackBlitz: bolt.diy. Footer 75+ companies. All indexed.
- **Previous:** Deep Cogito, Dolphin (dphn.ai), K2 Think (MBZUAI), LongCat, Nous Research, Public AI, StepFun, TII (Falcon), Tencent Hunyuan, ZenMux. All indexed.

**Tools** (`tools.html`, `js/search-data.js`)
- **Local LLM runtimes:** New section with Ollama (run open models locally; works with Codex, Claude Code, OpenCode, Open WebUI, Msty). LM Studio (local AI on your computer; headless llmster, SDK, MCP, OpenAI-compatible). vLLM (high-throughput inference & serving for LLMs; OpenAI-compatible API; PagedAttention, Hugging Face). All indexed.
- **CLI:** Qoder CLI (terminal-native agentic; &lt;70ms startup, CI/CD). OpenCode (open-source agent; terminal, desktop, IDE; 75+ LLM providers, LSP). Kilo Code (all-in-one agentic platform; VS Code, JetBrains, CLI; #1 on OpenRouter). Roo Code (open-source AI dev team; VS Code + Cloud; model-agnostic). All indexed.
- **IDE:** Qoder (agentic platform: IDE, CLI, JetBrains; Editor &amp; Quest, Repo Wiki, MCP). Windsurf (AI coding IDE; Cascade, Tab, MCP, JetBrains). IBM Project Bob (AI software dev partner; chat in editor, code review, vulnerability &amp; secrets detection). All indexed.
- **Web builders:** bolt.diy (open-source Bolt: full-stack with any LLM; 19+ providers, MCP, Electron). Quests (open-source app builder; build &amp; run locally with any LLM; BYOK, desktop, templates). Both indexed.
- **Reference:** Spec Kit (GitHub: Spec-Driven Development toolkit; specs become executable; Specify CLI; works with Qoder, Cursor, OpenCode, etc.). Indexed.
- **Web builders (previous):** Biela (AI web & app builder; Claude 4.5 Opus). Squarespace AI (Blueprint AI Builder). Vibecode (AI mobile & web app builder). Wix AI (create business-ready website in no time with AI). All indexed.
- **Browser Tools:** Cloudflare AI (build AI agents & MCP servers; serverless GPU inference, R2; Agents SDK). Indexed.
- **Reference:** There&rsquo;s An AI For That (directory of 45,800+ AI tools for 11,356 tasks; search, categories, just released). Indexed.
- **Web builders (previous):** Anything (create.xyz), Builder.io, Emergent. All indexed.

**Media Gen** (`media.html`, `js/search-data.js`)
- **Video:** Agent Opus — create videos from ideas: article to video, script to video, motion design, X post to video. Higgsfield — AI video & image: Vibe Motion, Grok Imagine, motion control, cinema studio. Both indexed.

**Companies** (`companies.html`, `js/search-data.js`)
- **New sections:** Biela (AI web & app builder). Squarespace (Blueprint AI Builder). Sup AI (multi-model orchestration, research-grade accuracy). Vibecode (AI mobile & web app builder). Wix (AI website builder). All indexed.
- **Cloudflare:** Cloudflare AI link added (build AI agents & MCP servers; Agents SDK).
- **Previous:** Agent Opus, Anything (Create.xyz), Builder (Builder.io), Emergent, Lumio AI, Higgsfield. All indexed.

**Tools** (`tools.html`, `js/search-data.js`)
- **Reference:** findmypapers.ai — semantic search for 300,000+ AI research papers; find, compare, explain with citations. Indexed.

**Docs** (`DOCS/STYLE_GUIDE.md`)
- **Stagger / fade-in:** Documented `fadeInUp` animation, `.stagger-1` … `.stagger-5` classes, and that search/theme use the same effect (delays 0.2s, 0.3s) so header controls match page flow.

**Search index** (`js/search-data.js`)
- **Companies:** GitHub (platform: Copilot, Actions, Codespaces), Railway (intelligent cloud).
- **Tools:** Google AI Studio, Lovable, Base44, Railway — all added so site search finds new Tools/Companies links.

**Tools page** (`tools.html`, `js/search-data.js`)
- **Web builders:** Hostinger Horizons (no-code AI, 1-click launch), Manus (Meta: slides, sites, apps from prompts).
- **Browser Tools:** Abacus AI Deep Agent (general agent), DeepAI (creative AI suite), Figma (design, Dev Mode, MCP), Genspark (AI workspace), JDoodle (online IDE), LLMChat (research & agentic workflows), QuillBot (writing tools).
- **Reference:** Wikipedia List of LLMs (reference list).
- All 10 new tools added to site search index.

**Companies page** (`companies.html`, `js/search-data.js`)
- **New sections:** Abacus.AI (Deep Agent), DeepAI (creative AI), Figma (design), Genspark (AI workspace), Hostinger (Horizons), JDoodle (online IDE), QuillBot (writing tools).
- **Meta:** Added Manus link (Hands On AI).
- **Search:** All 7 new companies indexed. Footer stat 60+ companies.

**Companies page** (`companies.html`, `css/style.css`, `js/companies.js`)
- **Collapsible sections:** Each company section can be minimized/expanded.
- **Top-center indicator:** Clickable pill with chevron in the middle of each panel’s top area to open/close.
- **Animation:** Smooth grid-based open/close with rotating chevron; companies-page only (no impact on other pages).
- **New company sections:** GitHub (platform: Copilot, Actions, Codespaces), Railway (all-in-one cloud).

**Tools page** (`tools.html`)
- **Alphabetical order:** CLI, IDE, and Browser Tools sections reordered A–Z by card name.
- **New Browser Tools:** Base44 (build apps with natural language), Lovable (build apps & sites with AI), Railway (deploy/network/scale/monitor), v0 (Vercel: build agents/apps/sites with AI).
- **Web builders section:** New section with Bolt, Firebase Studio ([studio.firebase.google.com](https://studio.firebase.google.com/)), Google AI Studio, Lovable, Replit, v0; those five removed from Browser Tools.

### Fixed

**style.css** (corruption)
- From ~line 1310 onward the file was UTF-16/null-byte corrupted. Truncated at last good `}\n}` (end of `@media (max-width: 640px)` search block) and re-appended the QoL/footer CSS block: scroll-to-top button, external link indicator, `@keyframes bg-shift`, `.site-footer`, `.site-stats`, `.stat-item`, `.stat-icon`.

### Changed

- **Docs:** SCRATCHPAD, SUMMARY, CHANGELOG, ARCHITECTURE, CONTENT_GUIDE, README, STYLE_GUIDE updated to reflect all recent changes.

---

## [1.6.0] - 2026-02-04

### Added

**Themes** (`css/style.css`, `js/theme.js`)
- **GitHub:** Dark theme with blue accents check, familiar to devs.
- **Dracula:** High contrast "vampire" theme with purple/pink accents.
- **Nord:** Cool blue-gray arctic theme, calm and sophisticated.
- Added to theme dropdown on all pages (Total: 9 themes).

**Visual & QoL Enhancements** (`css/style.css`, `js/theme.js`)
- **Scroll-to-top button:** Circular button appears after scrolling 300px; smooth scroll to top.
- **Site Footer:** Added to all pages with stats (indexed items, page count, company count).
- **External Link Indicators:** Subtle "↗" arrow on external links for better UX.
- **Animated Background:** Slow, subtle gradient shift (15s loop) to bring pages to life.

### Changed
- All HTML pages updated to include new footer, scroll button, and 9-theme dropdown.

---

## [1.5.1] - 2026-02-04

### Added

**Specials** (`specials.html`)
- **Games & play** — itch.io (indie store, jams, dev portal), Armor Games (free online games), PlayHop (browser games), Newgrounds (classic portal), Yandex Games (browser).

**Desktop Tools** (`tools.html`)
- **Game development** — Rosebud AI (vibe coding: 2D/3D games with AI), itch.io (game dev portal).

**Companies** (`companies.html`)
- **Rosebud AI** — vibe coding, Game Creator, PixelVibe, AI Storybook.
- **itch.io** — indie game store, jams, dev portal, assets.
- **Armor Games** — free online games, dev portal.
- **Newgrounds** — games, art, audio; Flash legacy.
- **PlayHop** — free browser games platform.
- **Yandex** — Yandex Games portal.

**Search** (`js/search-data.js`)
- Tool entries: Rosebud AI, itch.io (game dev). Special entries: itch.io, Armor Games, PlayHop, Newgrounds, Yandex Games. Company entries for all six. Specials page description updated.

### Changed
- Specials meta description and keywords now include games.
- SUMMARY: Companies 61+, Tools/Specials copy updated.

---

## [1.5.0] - 2026-02-04

### Added

**AI Chats** (`chats.html`)
- **HuggingChat** (Hugging Face) — chat with open-source models.

**Desktop Tools** (`tools.html`)
- **MongoDB** — Atlas: document DB, vector search, stream processing; AI-ready.
- **Hugging Face** — Models (2M+), datasets (500k+), Spaces (1M+ apps); Inference, HuggingChat.
- **Firebase** description expanded: hosting, Firestore, Auth, Firebase ML, AI (Studio, Gemini in Firebase, Genkit).

**Companies** (`companies.html`)
- **Hugging Face** — Hugging Face + HuggingChat.
- **MongoDB** — MongoDB Atlas (document DB, vector search, stream processing).
- **Google / Firebase** — description updated to match tools.

**AI Media Gen** (`media.html`)
- **Platforms & discover** — **Hugging Face Spaces** (1M+ AI apps: image, video, audio, chat).

**Search** (`js/search-data.js`)
- HuggingChat (chat), Hugging Face Spaces (media), Hugging Face & MongoDB (company, tool), Firebase (tool).

### Changed
- Firebase copy on tools and companies now reflects hosting, Firestore, Auth, ML, and AI features (Studio, Gemini in Firebase, Genkit).

---

## [1.4.0] - 2026-02-04

### Added

**About page** (`about.html`)
- Describes the site as a mix of Ryan&rsquo;s projects and tools found, tried, or looked at and worth sharing.
- States that every link is intended to be **safe and direct** (no redirect chains or affiliate wrappers).
- Sections: What this is, Links, Pages at a glance, Who.
- Nav &ldquo;About&rdquo; added to all pages (Home, Programs, AI Chats, Media Gen, Companies, Tools, Specials, 404).
- Search modal and search index entry for About page.
- README Pages table and DOCS updated.

### Changed
- CSS: `.about-list` styles for list content on About page.

---

## [1.3.1] - 2026-02-04

### Added

**Desktop Tools** (`tools.html`)
- **Voice & speech-to-text:** Wispr Flow — AI voice dictation; speech to polished text in every app (Mac, Windows, iPhone).

**Companies** (`companies.html`)
- **Wispr:** Wispr Flow (AI voice dictation / speech-to-text).

**Search** (`js/search-data.js`)
- Wispr Flow (voice, speech-to-text, dictation).

**Documentation**
- `DOCS/CONTENT_GUIDE.md` — How to add content, update search, standardized tags, templates, examples.

---

## [1.3.0] - 2026-02-04

### Added

**Site-wide Search System**
- Search modal with glassmorphic UI matching existing design
- `js/search-data.js`: Comprehensive search index with 100+ items across all pages
- `js/search.js`: Search logic with fuzzy matching, keyboard navigation, accessibility
- Search trigger button in nav bar on all pages
- Keyboard shortcut: `Cmd/Ctrl+K` to open search
- Navigation: Arrow keys, Enter to select, Escape to close
- Real-time filtering with debounced search
- Category icons and color-coded results (projects, chats, media, tools, companies, specials)
- Results show title, description snippet, and tags
- Theme-aware: Works with all 6 themes
- Mobile responsive design

**CSS**
- 360+ lines of search styles in `style.css`
- Search modal, overlay, input, results, empty states
- Smooth animations and hover effects

### Changed
- All HTML pages updated with search button and modal markup
- Added `search-data.js` and `search.js` script references to all pages

---

## [1.3.0] - 2026-02-04

### Added

**Desktop Tools** (`tools.html`)
- **IDE:** Cursor, TRAE, Warp, Factory, Google Antigravity, Android Studio (with OpenAI Codex, Jules).
- **CLI:** Kimi Code CLI (Moonshot), Mistral Vibe, Crush (Charm), Qwen Code (QwenLM).
- **DevOps & containers:** Docker (MCP catalog, agentic stack).
- **Reference:** Claude (desktop & mobile download), HTML Online Viewer.

**Companies** (`companies.html`)
- **New sections:** Cursor, Docker, TRAE, Warp, Factory, Charm Bracelet.
- **Google:** Antigravity, Android Studio.
- **Anthropic:** Claude (desktop & mobile download).
- **Mistral:** Mistral Vibe. **Moonshot AI:** Kimi Code CLI. **Alibaba / QwenLM:** Qwen Code.

### Changed
- Tools meta description and keywords updated for new entries.

---

## [1.2.0] - 2026-02-04

### Added

**Pages**
- **Specials** (`specials.html`): Free domains (DigitalPlat, FreeDomain, GitHub repo), Learning (freeCodeCamp). Nav “Specials” on all pages.

**AI Chats** (`chats.html`)
- Assistants: Claude, Perplexity, Microsoft Copilot, NotebookLM, Poe, Character.AI, Pi, Cohere Chat, Arcee AI, Allen AI (Ai2), Duck.ai.
- Section “Provider hubs & playgrounds”: OpenRouter, T3 Chat, Groq Cloud, SambaNova Playground, Cerebras.

**AI Media Gen** (`media.html`)
- Video: SuperMaker AI, Cuzi AI. Image: FLUX (Black Forest Labs), Recraft. Audio: MusicAI.

**Desktop Tools** (`tools.html`)
- Browser: Bolt (StackBlitz), Replit, Amp Free, Netlify, Cloudflare Pages.
- Tunneling: Localtunnel, Tunnelmole, reTunnel.
- Reference: Model Context Protocol (MCP).

**Companies** (`companies.html`)
- OpenAI: Codex CLI. Anthropic: MCP.
- New company sections (50+ total): Perplexity, Moonshot AI, Minimax, IBM, Zhipu AI, Quora, Character.AI, Inflection, Cohere, Arcee AI, Allen Institute for AI, DuckDuckGo, OpenRouter, Groq, SambaNova, Cerebras, StackBlitz, Replit, Amp, Netlify, Cloudflare, Vercel, Supabase, Adobe, Stability AI, Black Forest Labs, Runway, Midjourney, Ideogram, Recraft, Leonardo.ai, Luma, ElevenLabs, Suno, Udio, Artlist, Synthesia, HeyGen, Pika, SuperMaker AI, Cuzi AI, MusicAI.

**Docs**
- README: pages table (media, companies, specials), project structure (fetch-github-repos.js), local dev (repos.md).
- DOCS: SUMMARY, SCRATCHPAD, CHANGELOG, ARCHITECTURE, SBOM, STYLE_GUIDE, My_Thoughts updated.

### Changed
- Chats page: two sections (Assistants, Provider hubs & playgrounds).
- Companies page: comprehensive company coverage aligned with Chats, Tools, Media.

---

## [1.1.0] - 2026-02-04

### Added
- Custom 404 error page (`404.html`) for GitHub Pages
- SVG favicon (`images/favicon.svg`) with gradient branding
- SEO meta tags (description, keywords, Open Graph, Twitter Cards) on all pages
- Canonical URLs for SEO

### Changed
- **Project restructure for better organization:**
  - `assets/style.css` → `css/style.css`
  - `assets/placeholder.svg` → `images/placeholder.svg`
  - Inline scripts → `js/theme.js` and `js/badges.js`
- Updated all HTML files to use new asset paths
- Removed duplicate JavaScript code across 4 HTML files (DRY principle)
- Improved page titles for consistency (e.g., "Programs | Otterdays")

### Removed
- `assets/` folder (consolidated into `css/`, `js/`, `images/`)
- ~200 lines of duplicate inline JavaScript

---

## [1.0.0] - 2026-02-03

### Added
- Desktop Tools page (`tools.html`): CLI (Gemini CLI), IDE (OpenAI Codex), Browser Tools (AI Studio)
- Site-wide navigation with "Desktop Tools" link
- Theme switcher with 6 themes: Dark, Light, Google, OpenAI, Anthropic, Otterdays
- Badge system: Game, Software, Minecraft, Music, Android (multi-badge support)
- Glassmorphism UI effects with animated backgrounds

### Changed
- Encoding fixes for special characters (title, profile handle)
- Layout tweaks: 6-wide grid, edge-to-edge, compact cards

### Fixed
- Character encoding issues in page content
