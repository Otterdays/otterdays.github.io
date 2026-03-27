"""One-off: unique Developer column values from museum master catalog."""
import re
from pathlib import Path

root = Path(__file__).resolve().parent.parent
t = (root / "museum.html").read_text(encoding="utf-8")
start = t.find("<tbody>", t.find("museum-master-catalog"))
end = t.find("</tbody>", start)
block = t[start:end]
devs = set()
for row in re.findall(r"<tr>.*?</tr>", block, re.DOTALL):
    tds = re.findall(r"<td>([^<]*)</td>", row)
    if len(tds) >= 2:
        devs.add(tds[1].strip())
for d in sorted(devs, key=str.lower):
    print(d)
print("COUNT", len(devs))
