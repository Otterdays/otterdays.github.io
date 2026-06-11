# Sync site sidebar: Home standalone, Main pages group, More group.
# Run from repo root: python tools/replace_sidebar_nav.py

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# (href, title attr, icon, visible label)
HOME = ("index.html", "Home", "🏠", "Home")

MAIN_PAGES = [
    ("about.html", "About", "👤", "About"),
    ("chats.html", "AI Chats", "💬", "AI Chats"),
    ("inspirations.html", "Inspirations", "✨", "Inspirations"),
    ("media.html", "Media Gen", "🎨", "Media Gen"),
    ("offline-survival.html", "Offline survival", "🛡️", "Offline survival"),
    ("other-assistants.html", "Other Assistants", "🌐", "Other Assistants"),
    ("specials.html", "Specials", "⭐", "Specials"),
    ("tools.html", "Tools", "🛠️", "Tools"),
]

MORE_PAGES = [
    ("museum.html", "AI Museum", "🏛️", "AI Museum"),
    ("my-creations.html", "My Creations", "🎮", "My Creations"),
    ("companies.html", "Companies", "🏢", "Companies"),
    ("explore.html", "Explore Data", "📊", "Explore"),
    ("posts.html", "Posts", "📰", "Posts"),
    ("updates.html", "Updates", "📋", "Updates"),
]

COMPANY_PAGES = {"openai.html", "anthropic.html", "google-gemini.html", "xai.html", "arcee.html"}


def link_line(href: str, title: str, icon: str, text: str, active_href: str | None) -> list[str]:
    active = ' class="active"' if active_href and href == active_href else ""
    return [
        f'    <a href="{href}"{active} title="{title}">',
        f'      <span class="sidebar-icon">{icon}</span>',
        f'      <span class="sidebar-text">{text}</span>',
        "    </a>",
    ]


def block_lines(links: list[tuple[str, str, str, str]], active_href: str | None, modifier: str = "") -> list[str]:
    cls = f"sidebar-block {modifier}".strip()
    lines = [f'  <div class="{cls}">']
    for href, title, icon, text in links:
        lines.extend(link_line(href, title, icon, text, active_href))
    lines.append("  </div>")
    return lines


def build_nav(active_href: str | None) -> str:
    lines = [
        "  <!-- Sidebar Navigation -->",
        '  <button type="button" class="mobile-nav-backdrop" hidden aria-label="Close navigation menu"></button>',
        '  <nav class="sidebar" id="site-sidebar" aria-label="Site navigation">',
    ]
    lines.extend(block_lines([HOME], active_href, "sidebar-block--home"))
    lines.append('  <div class="sidebar-divider" role="presentation"></div>')
    lines.append('  <div class="sidebar-block sidebar-block--main">')
    lines.append('    <p class="sidebar-group-label">Main</p>')
    for href, title, icon, text in MAIN_PAGES:
        lines.extend(link_line(href, title, icon, text, active_href))
    lines.append("  </div>")
    lines.append('  <div class="sidebar-divider" role="presentation"></div>')
    lines.append('  <div class="sidebar-block sidebar-block--more">')
    lines.append('    <p class="sidebar-group-label">More</p>')
    for href, title, icon, text in MORE_PAGES:
        lines.extend(link_line(href, title, icon, text, active_href))
    lines.append("  </div>")
    lines.append("  </nav>")
    lines.extend([
        '  <button type="button" class="mobile-nav-toggle" id="mobile-nav-toggle"',
        '    aria-controls="site-sidebar" aria-expanded="false">',
        '    <span class="mobile-nav-toggle-chevron" aria-hidden="true"></span>',
        '    <span class="mobile-nav-toggle-text">Open menu</span>',
        "  </button>",
    ])
    return "\n".join(lines)


def process_file(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    if not re.search(r'<nav class="sidebar"', text):
        return False
    name = path.name
    if name in COMPANY_PAGES or name == "404.html":
        active = None
    else:
        active = name
    new_nav = build_nav(active)
    pattern = (
        r"(?:\s*<!-- Sidebar Navigation -->\s*)?"
        r"(?:\s*<button type=\"button\" class=\"mobile-nav-backdrop\"[^>]*>.*?</button>\s*)?"
        r"\s*<nav class=\"sidebar\"[^>]*>.*?</nav>"
        r"(?:\s*<button type=\"button\" class=\"mobile-nav-toggle\"[^>]*>.*?</button>)?"
    )
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
