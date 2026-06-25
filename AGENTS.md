# AGENTS.md — Otterdays.github.io

Agent charter for **otterdays.github.io**: a static personal portfolio and AI link directory on **GitHub Pages**. No build step — plain **HTML, CSS, and vanilla JS**.

**Current release:** v1.13.0 · Live: [otterdays.github.io](https://otterdays.github.io/)

---

## 1. Session startup

Before non-trivial work, skim (in order):

1. `DOCS/SUMMARY.md` — what shipped recently
2. `DOCS/CONTENT_GUIDE.md` — where new items go
3. `DOCS/SCRATCHPAD.md` — active tasks and blockers

**Adding/researching site items:** `DOCS/INGEST_WORKFLOW.md` end-to-end (intake JSON → `python tools/verify_intake.py` → import). Placement rules: this file §3 + `CONTENT_GUIDE.md`.

For architecture or nav questions: `DOCS/ARCHITECTURE.md` (§ Content ingest pipeline). For OpenClaw-adjacent agents: `DOCS/OPENCLAW_ECOSYSTEM.md`.

---

## 2. Tech stack

| Layer | Location | Notes |
|-------|----------|--------|
| Pages | `*.html` at repo root | Shared sidebar nav on every main page |
| Styles | `css/style.css`, `css/themes/` | Global CSS; native nesting OK |
| Scripts | `js/*.js` | No bundler; load order matters per page |
| Search | `js/search-data.js` | **Must update** when adding/removing site items |
| Badges | `js/badges.js` | Country flags on `.chat-link-name` + company `h2` |
| Changelog UI | `js/updates-data.js` | Drives `updates.html` timeline |
| Docs | `DOCS/` | Append-only in status docs (see §6) |

**Local preview:** any static server on repo root (e.g. `npx serve .`). No `npm run build`.

**Shell (Windows):** use `;` not `&&` in PowerShell.

---

## 3. Where content goes

Getting placement wrong is the most common mistake. Use this table first:

| Page | Put here | Do **not** put here |
|------|----------|---------------------|
| **`chats.html`** | First-party **lab** chats grouped by **country** (ChatGPT, Claude, Kyutai, Yandex, Nex-AGI, …) | Multi-model hubs (Poe, T3 Chat, OpenRouter, Duck.ai) |
| **`other-assistants.html`** | Answer engines, **provider hubs**, specialty chats (Perplexity, Poe, OpenRouter, T3 Chat, Duck.ai, NotebookLM, …) | First-party model labs |
| **`tools.html`** | Dev tools, IDEs, CLIs, agents (`#computer-automation`), reference | Company homepages only (use companies) |
| **`companies.html`** | Every org/product with cards on the site | One-off tools with no company |
| **`specials.html`** | Agent-first social (Moltbook), free domains, learning, games | Provider chats |
| **`museum.html`** | Model history, catalogs, picker snapshots | Random tool links |
| **`inspirations.html`** | YouTube / creators | Tools or companies |
| **`my-creations.html`** | Ryan's own projects (sidebar: **My Creations**) | External links; `programs.html` redirects here |

**Quick rules**

- **Hub ≠ lab:** OpenRouter, Poe, T3 Chat, Duck.ai → `other-assistants.html`
- **Agents on your PC:** OpenClaw, Hermes Agent, AIRI → `tools.html#computer-automation`
- **Agent social:** Moltbook → `specials.html`
- **New company:** card on the right page **and** section in `companies.html`

Full templates and tag reference: `DOCS/CONTENT_GUIDE.md`.

---

## 4. Adding or changing a site item

**Canonical path (research + import):** `DOCS/INGEST_WORKFLOW.md` — intake JSON → `python tools/verify_intake.py` **PASS** → mutate HTML/JS → post-import grep. Applies to **any** new link, org, chat, tool, or creator batch.

Minimum checklist (do all that apply):

1. **Intake** — `DOCS/intake/YYYY-MM-DD_slug.intake.json` (copy from `_TEMPLATE.intake.json`; see `_EXAMPLE.intake.json`)
2. **HTML** — link card on the correct page (match existing `.chat-link-card` pattern)
3. **`js/search-data.js`** — row with correct `category`, `tags`, `url`
4. **`js/badges.js`** — country flag if the card shows a region (key = exact `.chat-link-name`)
5. **`companies.html`** — if it's a new organization
6. **`DOCS/SCRATCHPAD.md`** + **`DOCS/CHANGELOG.md`** — append under `[Unreleased]` or current release
7. **Sidebar** — if adding a new page, update nav on **all** main `*.html` files (icon + label; use real emoji, never `??` placeholders)

### Ordering

- **Tools:** CLI, IDE, Browser Tools → **A–Z** by `.chat-link-name`
- **`#computer-automation`:** **curated narrative order** — do not re-sort A–Z without updating `CONTENT_GUIDE.md`
- **Provider Chats:** A–Z within each country `h3`

### Link card template

```html
<a href="https://example.com/" rel="noopener noreferrer" target="_blank" class="chat-link-card">
  <span class="chat-link-name">Name</span>
  <span class="chat-link-desc">Brief description</span>
  <span class="chat-link-arrow">→</span>
</a>
```

---

## 5. Numbered release (when user ships a version)

1. Add card to top of **`js/updates-data.js`** (below `Unreleased` placeholder)
2. **`DOCS/CHANGELOG.md`** — `[x.y.z]` section; clear `[Unreleased]` or leave `(Nothing yet.)`
3. Bump **`vX.Y.Z`** on **every** `*.html` version badge + `updates.html` search placeholder
4. **`DOCS/SUMMARY.md`**, **`DOCS/journal/YYYY-MM-DD.md`**, **`README.md`** current version link
5. Do **not** commit or push unless the user asks

---

## 6. Documentation rules

`DOCS/` status files (`SCRATCHPAD`, `SUMMARY`, `CHANGELOG`, `SBOM`, `journal/`) — **append or annotate only**; never delete history.

Do **not** edit `README.md`, `ARCHITECTURE.md`, or `STYLE_GUIDE.md` unless the task requires it.

---

## 7. Git

- **Conventional commits:** `feat(scope): description` · types: `feat`, `fix`, `docs`, `refactor`, `chore`, `style`, `test`
- **Only commit when the user explicitly asks**
- **Never** force-push `main`, amend pushed commits, or skip hooks unless asked
- **Never** update git config

---

## 8. Code standards

- **Read before edit** — match surrounding patterns
- **Minimize scope** — no drive-by refactors
- **Semantic HTML** where you touch markup (`section`, `nav`, `article`, `figure`)
- **Accessibility:** `rel="noopener noreferrer"` on external links; `:focus-visible` in CSS; skip link already on pages
- **Performance:** `loading="lazy"` / `decoding="async"` on images; prefer modern CSS (`color-mix`, nesting, `@container`) per `.cursor/rules/tech-stack-2026.mdc`
- **No secrets** in repo

---

## 9. Sidebar nav

Every main page shares the same grouped `<nav class="sidebar">` block (see `tools/replace_sidebar_nav.py`):

1. **Home** — standalone block
2. **Main** — About, AI Chats, Inspirations, Media Gen, Offline survival, Other Assistants (**🌐**), Specials, Tools
3. **More** — AI Museum, My Creations, Companies, Explore, Posts, Updates

When editing sidebar on one page, sync all pages or run `python tools/replace_sidebar_nav.py`.

---

## 10. Verification

After changes:

- **Content adds:** `python tools/verify_intake.py DOCS/intake/YYYY-MM-DD_slug.intake.json` (pre-import); post-import grep per `DOCS/INGEST_WORKFLOW.md` §6
- Grep for broken placeholders (`??` in sidebar icons)
- Confirm new items appear in `js/search-data.js`
- `node --check js/search-data.js` if search index was edited
- Open changed HTML locally if layout/nav was touched
- No build step required — if JS syntax is uncertain, read the file back

---

## 11. Judgment defaults

| Situation | Do |
|-----------|-----|
| Reversible, obvious placement | Act — add to correct page + search index |
| Hub vs lab unclear | Prefer `other-assistants.html` for multi-model / third-party routing |
| User gives a URL only | Run **`INGEST_WORKFLOW.md`** — research, intake JSON, then import |
| Irreversible git ops | Ask first |
| Version bump | Only on explicit release or when user says "ship" / "release" |

**Bias:** Ship working, well-placed links. UX and correct page placement beat elegant abstractions.

---

## 12. Cursor rules map

| Rule file | When it applies |
|-----------|-----------------|
| `.cursor/rules/otterdays-agents.mdc` | Always — this charter |
| `.cursor/rules/git-push-never-pull.mdc` | Always — push when shipping; **never pull** |
| `.cursor/rules/project-workflow.mdc` | Docs, JSON, README |
| `.cursor/rules/tech-stack-2026.mdc` | HTML, CSS, JS |
| `DOCS/INGEST_WORKFLOW.md` | Research → import any site content (agent runbook) |

---

*Last updated: 2026-06-23 (content ingest architecture)*
