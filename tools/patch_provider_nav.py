# One-off: insert provider nav links after Google Gemini (UTF-8).
from pathlib import Path
import re

INSERT = """    <a href="openai.html" title="OpenAI">
      <span class="sidebar-icon">🤖</span>
      <span class="sidebar-text">OpenAI</span>
    </a>
    <a href="anthropic.html" title="Anthropic">
      <span class="sidebar-icon">🦉</span>
      <span class="sidebar-text">Anthropic</span>
    </a>
    <a href="xai.html" title="xAI">
      <span class="sidebar-icon">🌌</span>
      <span class="sidebar-text">xAI</span>
    </a>
    <a href="arcee.html" title="Arcee AI">
      <span class="sidebar-icon">🏬</span>
      <span class="sidebar-text">Arcee AI</span>
    </a>
"""


def patch(text: str) -> tuple[str, bool]:
    if 'href="openai.html"' in text[:12000]:
        return text, False
    t = text
    pat_a = re.compile(
        r'(\s*<a href="google-gemini\.html" class="active" title="Google Gemini">\s*'
        r'<span class="sidebar-icon">🔷</span>\s*'
        r'<span class="sidebar-text">Google Gemini</span>\s*</a>\s*)'
        r'(<a href="about\.html")',
        re.DOTALL,
    )
    if pat_a.search(t):
        t = pat_a.sub(r"\1" + INSERT + r"    \2", t, count=1)
        return t, True
    pat = re.compile(
        r'(\s*<a href="google-gemini\.html" title="Google Gemini">\s*'
        r'<span class="sidebar-icon">🔷</span>\s*'
        r'<span class="sidebar-text">Google Gemini</span>\s*</a>\s*)'
        r'(<a href="about\.html")',
        re.DOTALL,
    )
    if pat.search(t):
        t = pat.sub(r"\1" + INSERT + r"    \2", t, count=1)
        return t, True
    old_c = (
        '<a href="google-gemini.html" title="Google Gemini">'
        '<span class="sidebar-icon">🔷</span><span class="sidebar-text">Google Gemini</span></a>\n'
        '    <a href="about.html"'
    )
    if old_c in t:
        new_c = (
            '<a href="google-gemini.html" title="Google Gemini">'
            '<span class="sidebar-icon">🔷</span><span class="sidebar-text">Google Gemini</span></a>\n'
            '    <a href="openai.html" title="OpenAI">'
            '<span class="sidebar-icon">🤖</span><span class="sidebar-text">OpenAI</span></a>\n'
            '    <a href="anthropic.html" title="Anthropic">'
            '<span class="sidebar-icon">🦉</span><span class="sidebar-text">Anthropic</span></a>\n'
            '    <a href="xai.html" title="xAI">'
            '<span class="sidebar-icon">🌌</span><span class="sidebar-text">xAI</span></a>\n'
            '    <a href="arcee.html" title="Arcee AI">'
            '<span class="sidebar-icon">🏬</span><span class="sidebar-text">Arcee AI</span></a>\n'
            '    <a href="about.html"'
        )
        t = t.replace(old_c, new_c, 1)
        return t, True
    return text, False


def main() -> None:
    root = Path(__file__).resolve().parent.parent
    for p in sorted(root.glob("*.html")):
        raw = p.read_text(encoding="utf-8")
        new, ok = patch(raw)
        if ok and new != raw:
            p.write_text(new, encoding="utf-8")
            print("patched", p.name)


if __name__ == "__main__":
    main()
