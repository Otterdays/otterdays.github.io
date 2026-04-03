# CONTENT_GUIDE

How to add new content to the website and ensure it appears in search.

---

## Quick Checklist

When adding **any** new item:

1. ✅ Add HTML entry to the appropriate page
2. ✅ Add entry to `js/search-data.js`
3. ✅ Use consistent tags (see Tag Reference below)
4. ✅ Add company entry to `companies.html` if it's a new organization
5. ✅ **Tools page:** Keep CLI, IDE, and Browser Tools in **alphabetical order** by card name (`.chat-link-name`)
6. ✅ Update `DOCS/SCRATCHPAD.md` and `DOCS/CHANGELOG.md`
7. ✅ On a **numbered release**: bump `js/updates-data.js`, `DOCS/CHANGELOG.md`, `DOCS/SUMMARY.md`, version badge (`v1.x.x` + title) on **all** `.html` pages, and add `DOCS/journal/YYYY-MM-DD.md` if significant

---

## Trusted External Sources (for linking and verification)

Use these when adding/updating museum or provider content so links stay consistent and easy to verify:

- **Model catalogs:** [OpenRouter models](https://openrouter.ai/models)
- **Benchmark snapshots:** [Artificial Analysis](https://artificialanalysis.ai/)
- **Provider status pages:** [OpenAI](https://status.openai.com/), [Anthropic](https://status.anthropic.com/), [Google Cloud](https://status.cloud.google.com/), [xAI](https://status.x.ai/)
- **Wikipedia structure templates:** [AI navbox](https://en.wikipedia.org/wiki/Template:Artificial_intelligence_navbox), [NLP template](https://en.wikipedia.org/wiki/Template:Natural_language_processing)

Quick use:
1. Verify naming/version/date against catalog or provider docs.
2. Prefer primary source links first; keep Wikipedia as context links.
3. Add matching search tags/desc in `js/search-data.js` when introducing new references.

---

## 1. Adding to HTML Pages

### Page → Content Type Mapping

| Page | What to add | When to use |
|------|-------------|-------------|
| `programs.html` | Your own projects | Personal creations, repos, apps |
| `chats.html` | AI chat assistants & provider hubs | Interactive AI you can "talk to" |
| `media.html` | AI media generation tools | Video, image, audio, 3D generation |
| `tools.html` | Developer tools | CLI, IDE, browser, tunneling, DevOps |
| `companies.html` | Organizations/companies | Every company with products on the site |
| `specials.html` | Free resources, learning | Domains, courses, unique offers |
| `skills.html` | Agent skills & tools | Cursor/Antigravity agentic tools, MCPs, SkillBox, Skills directory (React/Testing/Git) |

### HTML Template (link card)

```html
<a href="https://example.com/" rel="noopener noreferrer" target="_blank" class="chat-link-card">
    <span class="chat-link-name">Tool Name</span>
    <span class="chat-link-desc">Brief description of what it does</span>
    <span class="chat-link-arrow">→</span>
</a>
```

### HTML Template (section with multiple cards)

```html
<section class="profile-section">
    <h2>Section Title</h2>
    <div class="chat-links">
        <!-- Add cards here -->
    </div>
</section>
```

### Page-specific notes

- **Companies page** (`companies.html`): Has body class `companies-page` and loads `js/companies.js`. Sections are collapsible (toggle at top center). Minimization styles live under `.companies-page` in `css/style.css`; other pages are unaffected.
- **Tools page** (`tools.html`): CLI, IDE, and Browser Tools sections are kept **alphabetically** by card name (`.chat-link-name`). When adding a new card, insert it in A–Z order within its section. [AMENDED 2026-03-29]: The **Computer automation (agents)** section (`#computer-automation`) uses **curated narrative order** (pioneer stack, Playwright, cross-vendor agents like Hermes Agent, then OpenClaw-adjacent “claw” projects) — do **not** re-sort that block to strict A–Z without updating this note. Canonical list of AI IDEs/CLIs/coding assistants: tools.html (sections IDE, CLI, Coding Assistants) plus `js/search-data.js` for search.
- **OpenClaw ecosystem** [AMENDED 2026-04-03]: Long-form notes and decision guide live in repo-root **`Openclaw_variations.md`** (not built for GitHub Pages). **Site map** (project → `tools.html` / `companies.html` / `chats.html`): **`DOCS/OPENCLAW_ECOSYSTEM.md`**. When adding a new claw-class or adjacent agent: (1) card in **`#computer-automation`** (preserve narrative order), (2) row in **`DOCS/OPENCLAW_ECOSYSTEM.md`**, (3) **`js/search-data.js`**, (4) optional bullet in **`Openclaw_variations.md`**, (5) country badge in **`js/badges.js`** if the card should show a flag (match `.chat-link-name` exactly).

---

## 2. Adding to Search Index

**File:** `js/search-data.js`

### Entry Format

```javascript
{ title: "Tool Name", desc: "Brief description.", category: "tool", tags: ["Tag1", "Tag2", "Tag3"], url: "tools.html" }
```

### Fields

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `title` | ✅ | Exact display name | `"Wispr Flow"` |
| `desc` | ✅ | 10-20 word description | `"AI voice dictation..."` |
| `category` | ✅ | Content type (see below) | `"tool"` |
| `tags` | ✅ | 2-4 searchable tags | `["Voice", "Speech-to-text"]` |
| `url` | ✅ | Target HTML page | `"tools.html"` |

### Category Values

| Category | Icon | Color | Used for |
|----------|------|-------|----------|
| `project` | 📦 | Blue | Personal projects (programs.html) |
| `chat` | 💬 | Green | AI chat assistants (chats.html) |
| `media` | 🎨 | Orange | Media generation (media.html) |
| `company` | 🏢 | Purple | Organizations (companies.html) |
| `tool` | 🛠️ | Red | Developer tools (tools.html) |
| `special` | ⭐ | Amber | Free resources (specials.html) |
| `page` | 📄 | Indigo | Site pages (navigation) |

### Reminder: New links added to HTML

If you add new link cards to any page (e.g. GitHub, Railway, Lovable, v0, Base44), add matching entries to `js/search-data.js` so they appear in site search. Use the same `title`, `desc`, `category`, `tags`, and `url` as appropriate for the page.

### Placement in File

Add entries in the appropriate section (look for comment headers):

```javascript
// === PROJECTS (programs.html) ===
// === AI CHATS (chats.html) ===
// === MEDIA GENERATION (media.html) ===
// === COMPANIES (companies.html) ===
// === TOOLS (tools.html) ===
// === SPECIALS (specials.html) ===
// === SKILLS (skills.html) ===
// === PAGES ===
```

---

## 3. Tag Reference (Standardized)

Use these standard tags for consistency. **Always use Title Case.**

### Tool Types
- `CLI` — Command-line interface
- `IDE` — Integrated development environment
- `Browser` — Web-based tool
- `Terminal` — Terminal/shell tool
- `Agent` — AI agent/autonomous

### AI/ML
- `AI` — General AI
- `GPT-4` — OpenAI GPT-4
- `Claude` — Anthropic Claude
- `Gemini` — Google Gemini
- `Llama` — Meta Llama
- `MCP` — Model Context Protocol
- `Assistant` — AI assistant
- `Multimodal` — Multiple modalities

### Media
- `Image` — Image generation
- `Video` — Video generation
- `Music` — Music generation
- `Voice` — Voice/TTS
- `3D` — 3D generation
- `Art` — Artistic output
- `Avatar` — Digital avatars

### Platforms
- `Open Source` — Open-source project
- `Enterprise` — Enterprise/business
- `Free` — Free tier available

### Companies (as tags)
- `OpenAI`, `Anthropic`, `Google`, `Meta`, `Microsoft`, `xAI`, `Mistral`, `Cohere`, `Stability`

### Development
- `TypeScript`, `JavaScript`, `Python`, `Kotlin`, `Rust`, `Java`
- `Android`, `iOS`, `Web`, `Desktop`
- `Coding`, `DevOps`, `Containers`

---

## 4. Companies Page Rule

**Every organization with a product on the site should have a section on `companies.html`.**

If you add a new tool/chat/media from a company not yet listed:

1. Add a new section to `companies.html`
2. Add a search entry with `category: "company"`
3. Link to their main product(s)

### Company Section Template

```html
<section class="profile-section">
    <h2>Company Name</h2>
    <div class="chat-links">
        <a href="https://company.com/product" rel="noopener noreferrer" target="_blank" class="chat-link-card">
            <span class="chat-link-name">Product Name</span>
            <span class="chat-link-desc">What the product does</span>
            <span class="chat-link-arrow">→</span>
        </a>
    </div>
</section>
```

---

## 5. Documentation Updates

After adding content, update:

1. **`DOCS/SCRATCHPAD.md`** — Add to "Last 5 actions"
2. **`DOCS/CHANGELOG.md`** — Add under current version or create new patch version
3. **`DOCS/ARCHITECTURE.md`** — If adding new sections or page structure changes

---

## 6. Examples

### Example: Adding a new AI chat assistant

**1. Add to `chats.html`** (in appropriate section):
```html
<a href="https://newchat.ai/" rel="noopener noreferrer" target="_blank" class="chat-link-card">
    <span class="chat-link-name">NewChat</span>
    <span class="chat-link-desc">AI assistant with unique features</span>
    <span class="chat-link-arrow">→</span>
</a>
```

**2. Add to `js/search-data.js`** (under `// === AI CHATS ===`):
```javascript
{ title: "NewChat", desc: "AI assistant with unique features.", category: "chat", tags: ["AI", "Assistant", "NewCompany"], url: "chats.html" },
```

**3. Add company to `companies.html`** (if new):
```html
<section class="profile-section">
    <h2>NewCompany</h2>
    <div class="chat-links">
        <a href="https://newchat.ai/" rel="noopener noreferrer" target="_blank" class="chat-link-card">
            <span class="chat-link-name">NewChat</span>
            <span class="chat-link-desc">AI assistant with unique features</span>
            <span class="chat-link-arrow">→</span>
        </a>
    </div>
</section>
```

**4. Add company to search** (under `// === COMPANIES ===`):
```javascript
{ title: "NewCompany", desc: "Creator of NewChat AI assistant.", category: "company", tags: ["AI", "Assistant", "Startup"], url: "companies.html" },
```

**5. Update SCRATCHPAD.md**:
```markdown
1. Chats: added NewChat; Companies: NewCompany; Search: NewChat, NewCompany
```

---

## 7. Testing Search

After adding entries:

1. Open any page in browser
2. Press `Cmd/Ctrl + K` or click the search button
3. Type part of the new entry's title
4. Verify it appears with correct icon and description
5. Click or press Enter to navigate

---

## 8. Common Mistakes to Avoid

| ❌ Don't | ✅ Do |
|----------|-------|
| Lowercase tags | Title Case tags (`"cli"` → `"CLI"`) |
| Forget search entry | Always add to `search-data.js` |
| Skip company page | Add company if it's a new org |
| Duplicate entries | Check if item already exists |
| Long descriptions | Keep to 10-20 words |
| Missing trailing comma | Add comma after each entry |
| Invalid category | Use only: project, chat, media, company, tool, special, page |

---

## Quick Reference Card

```
┌─────────────────────────────────────────────────────────────┐
│ ADDING NEW CONTENT                                          │
├─────────────────────────────────────────────────────────────┤
│ 1. HTML page    → Add card to correct page                  │
│ 2. Search       → Add entry to js/search-data.js            │
│ 3. Company      → Add section to companies.html (if new)    │
│ 4. Docs         → Update SCRATCHPAD + CHANGELOG             │
│ 5. Test         → Cmd/Ctrl+K and search for it              │
└─────────────────────────────────────────────────────────────┘
```
