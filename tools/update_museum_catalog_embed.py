"""Replace embedded master catalog section in museum.html after regenerating fragment."""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
START = "    <!-- Master catalog (Wikipedia-style index) -->"
END_MARKER = "    <!-- Site Footer -->"


def main():
    museum = ROOT / "museum.html"
    frag = (ROOT / "museum_catalog_fragment.html").read_text(encoding="utf-8")
    html = museum.read_text(encoding="utf-8")
    if START not in html:
        raise SystemExit("start marker not found")
    if END_MARKER not in html:
        raise SystemExit("footer marker not found")
    pre, rest = html.split(START, 1)
    _, post = rest.split(END_MARKER, 1)
    section = f"""{START}
    <section class="museum-catalog-section stagger-2" aria-labelledby="museum-catalog-heading">
      <h2 id="museum-catalog-heading" class="museum-section-title">Master catalog</h2>
      <p class="museum-catalog-lede">Dense index of publicly notable <abbr title="large language model">LLM</abbr>
        releases and open-weight checkpoints. This is not every private internal checkpoint; it follows the same
        broad canon as Wikipedia&rsquo;s
        <a href="https://en.wikipedia.org/wiki/List_of_large_language_models" rel="noopener noreferrer"
          target="_blank">List of large language models</a>, with extra gap-fill rows. Figures are often
        reported ranges or estimates, not audited specs.</p>
      <div class="museum-catalog-toolbar">
        <label for="museum-catalog-filter" class="museum-catalog-label">Filter</label>
        <input type="search" id="museum-catalog-filter" class="museum-catalog-filter"
          placeholder="Name, developer, year, license..." autocomplete="off" spellcheck="false">
        <span class="museum-catalog-count" id="museum-catalog-count" aria-live="polite"></span>
      </div>
{frag}    </section>

{END_MARKER}"""
    museum.write_text(pre + section + post, encoding="utf-8")
    print("Updated embedded catalog.")


if __name__ == "__main__":
    main()
