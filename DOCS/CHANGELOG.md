# CHANGELOG

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
