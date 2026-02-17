# 🚀 Improvement Plans

*Refreshed 2026-02: Collapsible, Staggered entrance, Changelog page, and "Collapsible on other pages" marked done.*

## Visual Polish
- [x] **Card hover micro-animations**
  - **Difficulty:** 1/5
  - **Trace:** `css/style.css` (Target `.chat-link-card`, `.project-card`)
- [ ] **Skeleton loading states**
  - **Difficulty:** 3/5
  - **Trace:** `css/style.css` (Animation/Grays), `js/main.js` (State management)
- [x] **Gradient text for page titles**
  - **Difficulty:** 1/5
  - **Trace:** `css/style.css` (`.home-title`, `.profile-title` — theme-aware fg→accent, @supports fallback)
- [x] **Custom scrollbar styling**
  - **Difficulty:** 1/5
  - **Trace:** `css/style.css` (Target `::-webkit-scrollbar`)
- [x] **Staggered entrance animations**
  - **Difficulty:** 2/5
  - **Trace:** `css/style.css` (Animations), `HTML files` (Stagger delay classes). Partially: stagger classes used on Home, 404; update cards use IntersectionObserver fade-in.

## UX & Navigation
- [ ] **Keyboard navigation for cards**
  - **Difficulty:** 3/5
  - **Trace:** `js/accessibility.js` (New), `css/style.css` (Focus states)
- [x] **Scroll progress indicator**
  - **Difficulty:** 2/5
  - **Trace:** `css/style.css` (Progress bar), `js/theme.js` (Scroll listener)
- [ ] **Breadcrumb / "You are here"**
  - **Difficulty:** 1/5
  - **Trace:** `HTML files` (Navigation component), `css/style.css`
- [x] **Collapsible sections**
  - **Difficulty:** 3/5
  - **Trace:** `js/collapsible.js` (shared), `css/style.css` (transitions); Companies, Tools, Specials, Skills, Media.
- [ ] **Quick filter chips**
  - **Difficulty:** 4/5
  - **Trace:** `js/search.js` (Filtering logic), `HTML pages` (UI component)

## Themes & Customization
- [x] **Theme preview on hover**
  - **Difficulty:** 3/5
  - **Trace:** `js/theme.js` (Event listeners, temporary CSS variable injection)
- [ ] **Auto dark/light mode**
  - **Difficulty:** 2/5
  - **Trace:** `js/theme.js` (`matchMedia` listener)
- [ ] **Custom accent color picker**
  - **Difficulty:** 4/5
  - **Trace:** `js/theme.js` (LocalStorage, CSS Variable manager), `UI` (Color input)
- [x] **Theme transition animations**
  - **Difficulty:** 2/5
  - **Trace:** `css/style.css` (Global transition on colors/backgrounds)

## Delight & Fun
- [ ] **Easter egg / Konami code**
  - **Difficulty:** 2/5
  - **Trace:** `js/main.js` (Key sequence listener)
- [ ] **Rich tooltip previews**
  - **Difficulty:** 4/5
  - **Trace:** `js/tooltips.js` (Portal mounting), `css/style.css` (Styling)
- [ ] **"Surprise me!" button**
  - **Difficulty:** 2/5
  - **Trace:** `js/search.js` (Random index picker + Highlight-Jump trigger)
- [ ] **Animated favicon**
  - **Difficulty:** 3/5
  - **Trace:** `js/main.js` (Interval-based link rel update)

## Performance & Accessibility
- [ ] **Lazy loading for below-fold sections**
  - **Difficulty:** 2/5
  - **Trace:** `js/main.js` (Intersection Observer implementation)
- [ ] **Reduced motion mode**
  - **Difficulty:** 2/5
  - **Trace:** `css/style.css` (`@media (prefers-reduced-motion)`)

---

## Ideas backlog (QoL, themes, links, everything)

**QoL & UX**
- [ ] **Breadcrumb / "You are here"** — Small text above content: Home → Programs (or current page). Low effort, high clarity.
- [ ] **"Back to top" after long scroll** — You have a scroll-top button; consider showing it only after ~2 screens (Intersection Observer or scroll threshold).
- [ ] **Copy link / Share** — On About or key pages, a "Copy link" or "Share" button (Web Share API with fallback).
- [ ] **Print-friendly CSS** — `@media print` to hide sidebar, simplify cards, show URLs so the site is useful when printed.
- [ ] **Skip to main content** — `<a href="#main" class="skip-link">Skip to content</a>` + `id="main"` on `<main>` for keyboard/screen-reader users.
- [ ] **Focus visible** — Ensure `:focus-visible` is styled on nav, search, theme, cards so keyboard users see where they are.
- [ ] **Theme transition** — Short (e.g. 0.2s) transition on `body` for `background-color` / `color` when switching themes so it doesn’t flash.

**Themes**
- [ ] **Auto dark/light** — `prefers-color-scheme` in theme.js; default to system, still allow manual override (localStorage).
- [x] **Theme preview on hover** — In the theme dropdown, hovering an option briefly applies that theme; click to confirm (reduces misclicks).
- [ ] **More themes** — Catppuccin, Tokyo Night, One Dark, Rose Pine; or seasonal (e.g. Halloween, Winter) if you like variety.
- [ ] **Theme transition animation** — As above; smooth flip instead of instant swap.

**Links & content**
- [ ] **About: "How to add a link"** — One short paragraph + link to CONTENT_GUIDE or a short inline checklist (add to HTML, add to search, add company if new).
- [ ] **About: Changelog teaser** — "Recent changes" with 3–5 bullets from CHANGELOG (manual or script). Dedicated Updates page exists; optional teaser on About still possible.
- [ ] **Footer: Repo / Edit on GitHub** — Link to GitHub repo (e.g. "Source" or "Edit this page") so devs can find the repo.
- [ ] **Footer: RSS** — If you ever add a blog or "Recently added" feed, an RSS link in the footer.
- [ ] **404: Suggested links** — "Try: Home, Programs, Tools" or a few popular pages so 404 isn’t a dead end.
- [ ] **Programs: repo links** — If projects have GitHub URLs, add a small "Repo" or icon link on each card (optional, only where you have the URL).

**Search & discovery**
- [ ] **"Surprise me!" in search** — Button that picks a random result and navigates (or opens) it; fun and discovery.
- [ ] **Search: filter by category** — Chips or dropdown: All / Chats / Tools / Companies / etc. to narrow results.
- [ ] **Search: recent searches** — Store last 5 queries in localStorage and show "Recent: X, Y" under the input (optional).

**Delight & polish**
- [ ] **Easter egg** — Konami code or a hidden shortcut that does something small (e.g. confetti, theme shuffle, or "Surprise me!").
- [ ] **Card hover micro-animations** — Slight scale or shadow on `.chat-link-card` / `.project-card` hover (you already have this in plans).
- [ ] **Animated favicon** — Favicon that changes with theme or shows a small animation on load (optional; can be distracting).
- [ ] **Staggered entrance** — Stagger delay on cards or sections so the page doesn’t pop in all at once (you have stagger classes; apply to more sections if desired).

**SEO & meta**
- [ ] **JSON-LD** — Person or WebSite schema on index/about so search engines understand the site.
- [ ] **OG image per section** — Different `og:image` for Programs vs Tools vs About (optional; current single image is fine).
- [ ] **Sitemap** — `sitemap.xml` listing all 11 pages for crawlers (static list is enough).

**Docs & maintenance**
- [ ] **STYLE_GUIDE: Programs order** — "Keep project cards A–Z by `.project-title`; featured block stays at top."
- [ ] **CONTENT_GUIDE: Programs** — "New project: add card in A–Z order; add to search-data.js; update SCRATCHPAD/CHANGELOG."
- [ ] **Link checker** — Occasional script or CI step to `fetch` key URLs and report broken links (optional).

**Optional biggers**
- [x] **Changelog page** — Done: `updates.html` + `js/updates-data.js`, `js/updates.js`; version badge links to updates.
- [ ] **Dark/light toggle in nav** — In addition to full theme switcher, a single "Dark / Light" flip for quick switch.
- [x] **Collapsible sections on other pages** — Done: collapsible reused on Tools, Specials, Skills, Media via `collapsible.js`.
- [ ] **Quick filter chips on Programs** — Filter by tag (Game, Music, TypeScript, etc.) without leaving the page.