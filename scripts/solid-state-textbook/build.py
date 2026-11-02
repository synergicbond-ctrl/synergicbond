#!/usr/bin/env python3
"""Builds content/solid-state-html/solid-state-textbook.html (run from the repository root).

Input : content/solid-state-html/solid-state-combined.html  (all 23 parts and the Master notes; never modified)
Output: one self-contained textbook with
          - KaTeX CSS and fonts inlined (no outside files),
          - animations placed under the headings they explain (scripts/solid-state-textbook/placements.py),
          - the real Crystal Lab stored once and loaded lazily per placement,
          - search, print styles and a written description under every animation.
It also writes docs/solid-state-textbook/animation-coverage.md and animations.json.
"""
import base64, html, json, pathlib, re, subprocess, sys

ROOT = pathlib.Path.cwd()
HERE = pathlib.Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))
from placements import PLACEMENTS  # noqa: E402
from describe import describe  # noqa: E402

SRC = ROOT / "content/solid-state-html/solid-state-combined.html"
OUT = ROOT / "content/solid-state-html/solid-state-textbook.html"
LAB = ROOT / "content/solid-state-html/crystal-lab.html"
KATEX = ROOT / "content/solid-state-html/katex"
POSTERS = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "/tmp/solid-state-posters.json")
DOCS = ROOT / "docs/solid-state-textbook"

MODE_TITLE = dict(view="structure", pos="positions and atom count", share="atom sharing", pack="packing", cn="coordination",
                  voids="voids", grow="crystallisation", plane="Miller planes", layers="stacking layers")
STRUCT_TITLE = dict(sc="Simple cubic", bcc="Body-centred cubic", fcc="Face-centred cubic", hcp="Hexagonal close-packed",
                    nacl="Rock salt (NaCl)", cscl="CsCl", zns="Zinc blende (ZnS)", diamond="Diamond")
WIDGET_TITLE = dict(defects="Point defects in a crystal", packing="Packing efficiency of the cubic lattices",
                    radius="Radius ratio and coordination number", density="Density of a unit cell")
esc = lambda t: html.escape(t, quote=True)

s = SRC.read_text(encoding="utf-8")

# 1. remove the oversized introductory lab section (animations now sit beside the theory they explain)
a = s.index('<section id="lab">')
tail = "</iframe>\n</section>"
b = s.index(tail, a) + len(tail)   # the lab's own copy sits inside the iframe's srcdoc attribute, so anchor on the iframe's end
removed = s[a:b]
assert "3D Crystal Lab" in removed[:200] and removed.count("<iframe") == 1, "unexpected lab section shape"
s = s[:a] + s[b:]
s = s.replace('<a href="#lab">3D Crystal Lab</a>', "", 1)

# 2. inline KaTeX (CSS plus woff2 fonts) so the file works alone and offline
css = (KATEX / "katex.min.css").read_text(encoding="utf-8")
def font_sub(m):
    data = base64.b64encode((KATEX / m.group(1)).read_bytes()).decode()
    return f'src:url(data:font/woff2;base64,{data}) format("woff2")'
css, n_fonts = re.subn(r'src:url\((fonts/[^)]+\.woff2)\) format\("woff2"\),url\([^)]+\) format\("woff"\),url\([^)]+\) format\("truetype"\)', font_sub, css)
assert n_fonts >= 15, n_fonts
link = '<link rel="stylesheet" href="katex/katex.min.css">'
assert link in s
s = s.replace(link, f"<style>{css}</style>", 1)

# 3. render the few headings whose maths was left as raw $...$
parts = re.split(r"(<script[\s\S]*?</script>|<style[\s\S]*?</style>|<[^>]+>)", s)
latex = []
for i, p in enumerate(parts):
    if i % 2 == 0:
        latex += re.findall(r"\$([^$\n<>]{1,60})\$", p)
if latex:
    rendered = json.loads(subprocess.run(["node", str(HERE / "render_math.mjs")], input=json.dumps(latex), capture_output=True, text=True, check=True).stdout)
    it = iter(rendered)
    parts = [re.sub(r"\$([^$\n<>]{1,60})\$", lambda m: next(it), p) if i % 2 == 0 else p for i, p in enumerate(parts)]
    s = "".join(parts)
print("raw $maths$ rendered:", len(latex), latex)

# 4. find every anchor heading exactly once
anchors, problems = {}, []
for pl in PLACEMENTS:
    h = pl["heading"]
    if h in anchors:
        continue
    ms = list(re.finditer(r"<h([234])[^>]*>\s*" + re.escape(h) + r"\s*</h\1>", s))
    if len(ms) != 1:
        problems.append((h, len(ms)))
    else:
        anchors[h] = ms[0].end()
if problems:
    sys.exit(f"heading anchors not unique/found: {problems}")

# 5. number the animations in document order and build their HTML
order = sorted(range(len(PLACEMENTS)), key=lambda k: (anchors[PLACEMENTS[k]["heading"]], k))
number = {k: i + 1 for i, k in enumerate(order)}
hashes = sorted({pl["hash"] for pl in PLACEMENTS if pl["kind"] == "lab"})
(pathlib.Path("/tmp/solid-state-hashes.json")).write_text(json.dumps(hashes))
subprocess.run(["node", str(HERE / "posters.mjs"), "/tmp/solid-state-hashes.json", str(POSTERS)], check=True)
posters = json.loads(POSTERS.read_text())

def fields_html(f, connect):
    rows = [("What you are seeing", f["see"]), ("How to interact", f["interact"]), ("What happens", f["happens"]),
            ("Why it happens", f["why"]), ("Key conclusion", f["concl"]), ("Link to the theory", connect)]
    return "".join(f"<p><b>{esc(k)}.</b> {esc(v)}</p>" for k, v in rows)

inserts, records = {}, []
for k, pl in enumerate(PLACEMENTS):
    n = number[k]
    if pl["kind"] == "lab":
        parts_ = pl["hash"].split("/")
        struct, mode, way = parts_[0], parts_[1], (parts_[2] if len(parts_) > 2 else None)
        f = describe(struct, mode, way)
        title = pl["title"] or f"{STRUCT_TITLE[struct]}: {MODE_TITLE[mode]}"
        fig = (f'<figure class="tb-lab" id="anim-{n}" data-hash="{esc(pl["hash"])}" data-title="{esc(title)}">'
               f'<div class="tb-stage"><img class="tb-poster" src="{posters[pl["hash"]]}" alt="Still image of the Crystal Lab: {esc(title)}" width="760" height="600">'
               f'<button class="tb-load" type="button">▶ Load the interactive 3D model</button></div><div class="tb-bar" hidden></div>'
               f'<figcaption class="tb-desc"><p class="tb-tag">Animation {n} · {esc(title)}</p>{fields_html(f, pl["connect"])}</figcaption></figure>')
        records.append(dict(n=n, id=f"anim-{n}", kind="3D Crystal Lab (existing Three.js model)", ref=pl["hash"], title=title, heading=pl["heading"]))
    else:
        w = pl["widget"]; title = WIDGET_TITLE[w]
        default = f' data-default="{esc(pl["default"])}"' if pl.get("default") else ""
        f = {x: pl[x] for x in ("see", "interact", "happens", "why", "concl")}
        fig = (f'<figure class="tb-w" id="anim-{n}" data-widget="{w}"{default}><p class="tb-tag">Animation {n} · {esc(title)}</p><div class="tb-host"></div>'
               f'<figcaption class="tb-desc">{fields_html(f, pl["connect"])}</figcaption></figure>')
        records.append(dict(n=n, id=f"anim-{n}", kind="Small interactive model (new)", ref=w + (":" + pl["default"] if pl.get("default") else ""), title=title, heading=pl["heading"]))
    inserts.setdefault(anchors[pl["heading"]], []).append((k, fig))

for pos in sorted(inserts, reverse=True):
    block = "\n" + "\n".join(f for _, f in sorted(inserts[pos])) + "\n"
    s = s[:pos] + block + s[pos:]

# 6. chrome: search box, widget CSS, the lab (stored once), the runtime, and the title
search = '<div class="tb-search"><input id="tb-q" type="search" placeholder="Search the whole chapter…" aria-label="Search the chapter" autocomplete="off"><div id="tb-res" class="tb-results" role="region" aria-label="Search results"></div></div>\n'
i = s.find('<nav class="toc"')
s = (s[:i] + search + s[i:]) if i >= 0 else s.replace("<body>", "<body>\n" + search, 1)
s = s.replace("</head>", "<style>\n" + (HERE / "widgets.css").read_text(encoding="utf-8") + "\n</style>\n</head>", 1)
lab_b64 = base64.b64encode(LAB.read_bytes()).decode()
js = (HERE / "widgets.js").read_text(encoding="utf-8")
k = s.rfind("</body>")
s = s[:k] + f'<script type="text/plain" id="tb-lab-src">{lab_b64}</script>\n<script>\n{js}\n</script>\n' + s[k:]
s = re.sub(r"<title>.*?</title>", "<title>Solid State — Complete Interactive Textbook</title>", s, count=1, flags=re.S) if "<title>" in s else "<title>Solid State — Complete Interactive Textbook</title>" + s

OUT.write_text(s, encoding="utf-8")
DOCS.mkdir(parents=True, exist_ok=True)
(DOCS / "animations.json").write_text(json.dumps(sorted(records, key=lambda r: r["n"]), indent=1, ensure_ascii=False))
print("animations:", len(records), "| lab views:", len(hashes), "| bytes:", OUT.stat().st_size)
