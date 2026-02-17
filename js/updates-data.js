/**
 * Site update log data. Add new entries at top.
 * Format: { version, date, sections: [{ type: "added"|"changed"|"fixed"|"removed", items: [...] }] }
 */
const UPDATES_DATA = [
  {
    version: "Unreleased",
    date: "TBD",
    sections: [
      { type: "added", items: ["A11y & QoL: Reduced motion mode, skip-to-content link, :focus-visible ring, auto dark/light (system preference), print-friendly CSS, sitemap.xml, footer Source link.", "Content: shoo.dev (Tools Auth), Squoosh (Tools Reference), T3 Chat (chats), T3 Canvas (media), theo gg (About Inspirations, Companies T3 section); search index entries.", "About: Pages at a glance now includes Updates; duplicate Inspirations removed from search.", "Stagger: About profile-sections use stagger-1 through stagger-5 for entrance animation."] }
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
