# One-off: replace site sidebar with alphabetized nav (no per-company items).
# Run from repo root: python tools/replace_sidebar_nav.py

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

LINKS = [
    ("about.html", "About", "👤", "About"),
    ("chats.html", "AI Chats", "💬", "AI Chats"),
    ("museum.html", "AI Museum", "🏛️", "AI Museum"),
    ("companies.html", "Companies", "🏢", "Companies"),
    ("explore.html", "Explore Data", "📊", "Explore"),
    ("index.html", "Home", "🏠", "Home"),
    ("informational-links.html", "Informational Links", "🔗", "Informational Links"),
    ("inspirations.html", "Inspirations", "✨", "Inspirations"),
    ("media.html", "Media Gen", "🎨", "Media Gen"),
    ("posts.html", "Posts", "📰", "Posts"),
    ("programs.html", "Programs", "🎮", "Programs"),
    ("skills.html", "Skills", "🧠", "Skills"),
    ("specials.html", "Specials", "⭐", "Specials"),
    ("tools.html", "Tools", "🛠️", "Tools"),
    ("updates.html", "Updates", "📋", "Updates"),
]

COMPANY_PAGES = {"openai.html", "anthropic.html", "google-gemini.html", "xai.html", "arcee.html"}


def build_nav(active_href: str | None) -> str:
    lines = ['  <nav class="sidebar">']
    for href, title, icon, text in LINKS:
        active = ' class="active"' if active_href and href == active_href else ""
        lines.append(f'    <a href="{href}"{active} title="{title}">')
        lines.append(f'      <span class="sidebar-icon">{icon}</span>')
        lines.append(f'      <span class="sidebar-text">{text}</span>')
        lines.append("    </a>")
    lines.append("  </nav>")
    return "\n".join(lines)


def process_file(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    if '<nav class="sidebar">' not in text:
        return False
    name = path.name
    if name in COMPANY_PAGES or name == "404.html":
        active = None
    else:
        active = name
    new_nav = build_nav(active)
    pattern = r"<nav class=\"sidebar\">.*?</nav>"
    new_text, n = re.subn(pattern, new_nav, text, count=1, flags=re.DOTALL)
    if n != 1:
        print(f"SKIP {path.name}: pattern matched {n} times")
        return False
    if new_text != text:
        path.write_text(new_text, encoding="utf-8")
        print(f"OK {path.name}")
        return True
    return False


def main() -> None:
    for p in sorted(ROOT.glob("*.html")):
        if p.name == "museum_catalog_fragment.html":
            continue
        process_file(p)


if __name__ == "__main__":
    main()
