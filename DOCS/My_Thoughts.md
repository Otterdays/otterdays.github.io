# My_Thoughts — Decisions & rationale

- **Static HTML only:** No framework or build step so the site is trivial to host on GitHub Pages and stays fast.

- **No sensitive info:** No email, phone, or API keys in the repo; profile links (e.g. GitHub) only.

- **DOCS in repo:** Per project rules; SCRATCHPAD/SUMMARY/SBOM etc. live under `DOCS/` for handoff and audit.

- **Resource-link strategy:** Chats = “talk to AI” (assistants + provider hubs). Media = video/image/audio. Tools = dev workflows (CLI, IDE, browser, tunneling, reference). Companies = same products grouped by company. Specials = free/special services (domains, learning). Avoid duplicating long descriptions; keep Companies entries short and consistent with other pages.

- **Companies page scope:** One section per company; include every org that has a product on Chats, Tools, or Media so the Companies page is the canonical “by company” view.

- **Search system design:** Client-side only to maintain static site simplicity. Fuzzy matching with scored results ensures good UX without a backend. Cmd/Ctrl+K shortcut mirrors modern dev tools (VS Code, GitHub). Keyboard navigation (arrows + Enter) makes it fast for power users. Single data file (`search-data.js`) keeps indexing simple and allows easy updates when content grows. Glassmorphic modal integrates with existing design language.
