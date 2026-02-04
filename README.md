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
| `tools.html` | Developer tools (CLI, IDE, Browser) |
| `404.html` | Custom error page |

## Project Structure

```
├── css/style.css      # All styles
├── js/theme.js        # Theme switcher
├── js/badges.js       # Project badge logic
├── images/            # Favicon & images
└── DOCS/              # Documentation
```

## Local Development

```bash
# Option 1: Simple HTTP server
npx serve .

# Option 2: Open directly
start index.html

# Optional: Generate repos list
node fetch-github-repos.js
```

## Deployment

Push to `main` branch → GitHub Pages auto-deploys.

No build step. No sensitive data in this repo.

## Links

- [GitHub Repository](https://github.com/Otterdays/otterdays.github.io)
- [Live Site](https://otterdays.github.io/)
