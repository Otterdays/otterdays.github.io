# otterdays.github.io

Personal developer portfolio site, served on [GitHub Pages](https://pages.github.com/).

🌐 **Live:** https://otterdays.github.io/

## Features

- 🎨 **6 Themes:** Dark, Light, Google, OpenAI, Anthropic, Otterdays
- 🏷️ **Project Badges:** Game, Software, Minecraft, Music, Android (multi-badge support)
- 📱 **Responsive:** Mobile-first design with glassmorphism effects
- ⚡ **Performance:** No build step, pure HTML/CSS/JS
- 🔍 **SEO Ready:** Open Graph, meta descriptions, canonical URLs

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Home profile page |
| `programs.html` | 60+ projects with auto-badges |
| `chats.html` | Links to AI chat platforms |
| `media.html` | AI media gen (video/image tools) |
| `companies.html` | AI & dev tools by company |
| `tools.html` | Developer tools (CLI, IDE, browser) |
| `specials.html` | Free & special services (e.g. free domains) |
| `about.html` | About this site: projects, tools, and link policy |
| `404.html` | Custom error page |

## Project Structure

```
├── css/style.css           # All styles
├── js/theme.js             # Theme switcher
├── js/badges.js            # Project badge logic
├── fetch-github-repos.js   # Optional: fetch repos → repos.md
├── images/                 # Favicon & images
└── DOCS/                   # Documentation
```

## Local Development

```bash
# Option 1: Simple HTTP server
npx serve .

# Option 2: Open directly
start index.html

# Optional: Fetch GitHub repos (writes repos.md)
node fetch-github-repos.js [username]
```

## Deployment

Push to `main` branch → GitHub Pages auto-deploys.

No build step. No sensitive data in this repo.

## Links

- [GitHub Repository](https://github.com/Otterdays/otterdays.github.io)
- [Live Site](https://otterdays.github.io/)
