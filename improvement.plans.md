# 🚀 Improvement Plans

## Visual Polish
- [ ] **Card hover micro-animations**
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
- [ ] **Staggered entrance animations**
  - **Difficulty:** 2/5
  - **Trace:** `css/style.css` (Animations), `HTML files` (Stagger delay classes)

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
- [ ] **Collapsible sections**
  - **Difficulty:** 3/5
  - **Trace:** `js/main.js` (Toggle logic), `css/style.css` (Transitions)
- [ ] **Quick filter chips**
  - **Difficulty:** 4/5
  - **Trace:** `js/search.js` (Filtering logic), `HTML pages` (UI component)

## Themes & Customization
- [ ] **Theme preview on hover**
  - **Difficulty:** 3/5
  - **Trace:** `js/theme.js` (Event listeners, temporary CSS variable injection)
- [ ] **Auto dark/light mode**
  - **Difficulty:** 2/5
  - **Trace:** `js/theme.js` (`matchMedia` listener)
- [ ] **Custom accent color picker**
  - **Difficulty:** 4/5
  - **Trace:** `js/theme.js` (LocalStorage, CSS Variable manager), `UI` (Color input)
- [ ] **Theme transition animations**
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