# STYLE_GUIDE

**Naming:** camelCase (JS), kebab-case (CSS/files).  
**Limits:** 100 char/line, 50 lines/function, 400 lines/file.  
**Trace:** `// [TRACE: filename.md]` in code when linking to docs.  
**Comments:** WHY only; prefixes: TODO, FIXME, NOTE.  
**Secrets:** Never in code; use `.env` (gitignored) if needed later.

**HTML/CSS:** Semantic HTML; minimal, scoped CSS. No inline scripts from CDNs unless documented in SBOM.

**Nav:** Same order on all pages: Home → Programs → AI Chats → Media Gen → Companies → Tools → Specials → Skills → About. Use `<nav class="top-nav">`; active page gets `class="active"` on its link.

**Link cards:** External links use `.chat-link-card` with `.chat-link-name`, `.chat-link-desc`, `.chat-link-arrow`. Always `rel="noopener noreferrer" target="_blank"` for outbound links.

**New pages:** Add to nav on every HTML file (index, programs, chats, media, companies, tools, specials, skills, about, 404). Include theme switcher, favicon, canonical URL, and SEO meta tags per existing pages.

**Companies page only:** Collapsible-section CSS and behavior are scoped to `body.companies-page`. Use `.companies-page` as parent for any companies-specific styles so other pages (chats, tools, media, etc.) are unchanged.

**Tools page:** Within each section (CLI, IDE, Browser Tools), keep link cards in **alphabetical order** by `.chat-link-name` for consistent UX.

**Stagger / fade-in effect:** Page load uses a soft vertical pop-in so content doesn’t appear all at once. Implemented in `css/style.css`:
- **Animation:** `fadeInUp` — from `opacity: 0`, `translateY(20px)`, `blur(4px)` to `opacity: 1`, `translateY(0)`, `blur(0)` over 0.8s with easing `cubic-bezier(0.2, 0.8, 0.2, 1)`.
- **Stagger classes:** `.stagger-1` … `.stagger-5` — same `fadeInUp` animation with delays 0.1s, 0.2s, 0.3s, 0.4s, 0.5s. Use on key elements (e.g. nav `stagger-1`, hero `stagger-2`, title `stagger-3`) so they pop in one after another.
- **Search and theme:** `.search-trigger` and `.theme-switcher` use the same `fadeInUp` (delays 0.2s and 0.3s) so they match the nav/content flow; no stagger classes needed in HTML.
- **Adding the effect:** Give an element a stagger class (`stagger-1` through `stagger-5`) or, for fixed header controls, rely on the existing `.search-trigger` / `.theme-switcher` rules. Don’t add extra entrance animations that conflict with `fadeInUp`.
