"""One-off: add Google Gemini nav link after AI Museum on all pages except google-gemini.html."""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SNIP = """    <a href="google-gemini.html" title="Google Gemini">
      <span class="sidebar-icon">🔷</span>
      <span class="sidebar-text">Google Gemini</span>
    </a>
"""
NEEDLE = """    <a href="museum.html" title="AI Museum">
      <span class="sidebar-icon">🏛️</span>
      <span class="sidebar-text">AI Museum</span>
    </a>
"""
NEEDLE_ACTIVE = """    <a href="museum.html" class="active" title="AI Museum">
      <span class="sidebar-icon">🏛️</span>
      <span class="sidebar-text">AI Museum</span>
    </a>
"""


def main():
    for path in sorted(ROOT.glob("*.html")):
        if path.name == "google-gemini.html":
            continue
        text = path.read_text(encoding="utf-8")
        if 'href="google-gemini.html"' in text and "Google Gemini" in text:
            print("skip", path.name)
            continue
        if NEEDLE_ACTIVE in text:
            text = text.replace(NEEDLE_ACTIVE, NEEDLE_ACTIVE + "\n" + SNIP, 1)
        elif NEEDLE in text:
            text = text.replace(NEEDLE, NEEDLE + "\n" + SNIP, 1)
        else:
            print("NO MATCH", path.name)
            continue
        path.write_text(text, encoding="utf-8")
        print("ok", path.name)


if __name__ == "__main__":
    main()
