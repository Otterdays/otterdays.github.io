# STYLE_GUIDE

**Naming:** camelCase (JS), kebab-case (CSS/files).  
**Limits:** 100 char/line, 50 lines/function, 400 lines/file.  
**Trace:** `// [TRACE: filename.md]` in code when linking to docs.  
**Comments:** WHY only; prefixes: TODO, FIXME, NOTE.  
**Secrets:** Never in code; use `.env` (gitignored) if needed later.

**HTML/CSS:** Semantic HTML; minimal, scoped CSS. No inline scripts from CDNs unless documented in SBOM.

**Nav:** Same order on all pages: Home → Programs → AI Chats → Media Gen → Companies → Tools → Specials. Use `<nav class="top-nav">`; active page gets `class="active"` on its link.

**Link cards:** External links use `.chat-link-card` with `.chat-link-name`, `.chat-link-desc`, `.chat-link-arrow`. Always `rel="noopener noreferrer" target="_blank"` for outbound links.

**New pages:** Add to nav on every HTML file (index, programs, chats, media, companies, tools, specials, 404). Include theme switcher, favicon, canonical URL, and SEO meta tags per existing pages.
