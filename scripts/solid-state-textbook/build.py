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

# 4. Master part overview (the hub-card titles and descriptions, so none of that source text is left out)
ov = json.loads(subprocess.run(["node", str(HERE / "master_overview.mjs")], capture_output=True, text=True, check=True).stdout)
ov_html = ('<div class="tb-overview"><p class="tb-tag">Master Edition · the ten parts</p><ol>' + "".join(
    f'<li><b>Part {o["number"]} · {esc(o["title"])}</b> ({esc(o["shortTitle"])}). {esc(o["description"])}</li>' for o in ov) + "</ol></div>")
m_ = re.search(r"<h2[^>]*>\s*Master Edition notes\s*</h2>", s)
assert m_, "master heading not found"
s = s[:m_.end()] + ov_html + s[m_.end():]

# 5. build the figures (numbered later, in reading order) and place them after the theory they explain
hashes = sorted({pl["hash"] for pl in PLACEMENTS if pl["kind"] == "lab"})
(pathlib.Path("/tmp/solid-state-hashes.json")).write_text(json.dumps(hashes))
subprocess.run(["node", str(HERE / "posters.mjs"), "/tmp/solid-state-hashes.json", str(POSTERS)], check=True)
posters = json.loads(POSTERS.read_text())

def fields_html(f, connect):
    rows = [("What you are seeing", f["see"]), ("How to interact", f["interact"]), ("What happens", f["happens"]),
            ("Why it happens", f["why"]), ("Key conclusion", f["concl"]), ("Link to the theory", connect)]
    return "".join(f"<p><b>{esc(k)}.</b> {esc(v)}</p>" for k, v in rows)

figs, meta, replaces = {}, [], []
for k, pl in enumerate(PLACEMENTS):
    if pl["kind"] == "lab":
        parts_ = pl["hash"].split("/")
        struct, mode, way = parts_[0], parts_[1], (parts_[2] if len(parts_) > 2 else None)
        f = describe(struct, mode, way)
        title = pl["title"] or f"{STRUCT_TITLE[struct]}: {MODE_TITLE[mode]}"
        fig = (f'<figure class="tb-lab" data-ph="{k}" data-hash="{esc(pl["hash"])}" data-title="{esc(title)}">'
               f'<div class="tb-stage"><img class="tb-poster" src="{posters[pl["hash"]]}" alt="Still image of the Crystal Lab: {esc(title)}" width="760" height="600">'
               f'<button class="tb-load" type="button">▶ Load the interactive 3D model</button></div><div class="tb-bar" hidden></div>'
               f'<figcaption class="tb-desc"><p class="tb-tag">Animation 0 · {esc(title)}</p>{fields_html(f, pl["connect"])}</figcaption></figure>')
        meta.append(dict(ph=k, kind="3D Crystal Lab (existing Three.js model)", ref=pl["hash"], title=title, heading=pl["heading"]))
    else:
        w = pl["widget"]; title = WIDGET_TITLE[w]
        default = f' data-default="{esc(pl["default"])}"' if pl.get("default") else ""
        f = {x: pl[x] for x in ("see", "interact", "happens", "why", "concl")}
        fig = (f'<figure class="tb-w" data-ph="{k}" data-widget="{w}"{default}><p class="tb-tag">Animation 0 · {esc(title)}</p><div class="tb-host"></div>'
               f'<figcaption class="tb-desc">{fields_html(f, pl["connect"])}</figcaption></figure>')
        meta.append(dict(ph=k, kind="Small interactive model (new)", ref=w + (":" + pl["default"] if pl.get("default") else ""), title=title, heading=pl["heading"]))
    if pl.get("replace_iframe"):
        replaces.append(dict(src=pl["replace_iframe"], fig=fig, heading=pl["heading"]))
    else:
        figs.setdefault(pl["heading"], []).append(fig)

pathlib.Path("/tmp/tb-stage1.html").write_text(s, encoding="utf-8")
pathlib.Path("/tmp/tb-plan.json").write_text(json.dumps(dict(plan=[dict(heading=h, figs=v) for h, v in figs.items()], replace=replaces)), encoding="utf-8")
subprocess.run(["node", str(HERE / "place.mjs"), "/tmp/tb-stage1.html", "/tmp/tb-plan.json", "/tmp/tb-stage2.html", "/tmp/tb-place-report.json"], check=True)
s = pathlib.Path("/tmp/tb-stage2.html").read_text(encoding="utf-8")
report = json.loads(pathlib.Path("/tmp/tb-place-report.json").read_text())
bad = [x for x in report["placed"] if x.get("error") or x.get("where") == "fallback-after-heading"]
if bad:
    sys.exit(f"placement problems: {bad}")
where_by_heading = {x["heading"]: x for x in report["placed"]}
records = []
for o in report["order"]:
    m = meta[o["ph"]]; w = where_by_heading.get(m["heading"]) if not any(r["heading"] == m["heading"] and r["fig"].count(f'data-ph="{o["ph"]}"') for r in replaces) else dict(where="replaces-original-iframe", beforeExample=False, theoryBlocksAbove=0)
    records.append(dict(n=int(o["id"].split("-")[1]), id=o["id"], kind=m["kind"], ref=m["ref"], title=m["title"], heading=m["heading"],
                        placement=w["where"], placedBeforeExample=w["beforeExample"], theoryBlocksAbove=w["theoryBlocksAbove"]))

# 6. chrome: search box, widget CSS, the lab (stored once), the runtime, and the title
search = '<div class="tb-search"><input id="tb-q" type="search" placeholder="Search the whole chapter…" aria-label="Search the chapter" autocomplete="off"><div id="tb-res" class="tb-results" role="region" aria-label="Search results"></div></div>\n'
i = s.find('<nav class="toc"')
s = (s[:i] + search + s[i:]) if i >= 0 else s.replace("<body>", "<body>\n" + search, 1)
# the site's own styling, compiled for exactly the classes this chapter uses (otherwise the standalone file has none of it)
site_css = subprocess.run(["node", str(HERE / "site_css.mjs"), "/tmp/tb-stage2.html"], capture_output=True, text=True, check=True).stdout
prefix = re.search(r"(reader-module__[A-Za-z0-9]+)__", s).group(1)
s = s.replace("</head>", '<style id="site-styles">\n' + site_css + "\n</style>\n</head>", 1)
def add_root_class(m):
    attrs = m.group(1)
    cm = re.search(r'class="([^"]*)"', attrs)
    return "<body" + (attrs.replace(cm.group(0), f'class="{cm.group(1)} {prefix}__root"') if cm else attrs + f' class="{prefix}__root"') + ">"
s = re.sub(r"<body([^>]*)>", add_root_class, s, count=1)
s = s.replace("</head>", "<style>\n" + (HERE / "widgets.css").read_text(encoding="utf-8") + "\n</style>\n</head>", 1)
lab_b64 = base64.b64encode(LAB.read_bytes()).decode()
js = (HERE / "widgets.js").read_text(encoding="utf-8")
k = s.rfind("</body>")
s = s[:k] + f'<script type="text/plain" id="tb-lab-src">{lab_b64}</script>\n<script>\n{js}\n</script>\n' + s[k:]
s = re.sub(r"<title>.*?</title>", "<title>Solid State — Complete Interactive Textbook</title>", s, count=1, flags=re.S) if "<title>" in s else "<title>Solid State — Complete Interactive Textbook</title>" + s

# 7. page frame: branded header, grouped side contents with search, the opening summary folded into a "Quick summary" block
m_top = re.search(r'<main>\s*<h1>.*?</nav>', s, re.S)
assert m_top, "top of page not found"
top = m_top.group(0)
links = re.findall(r'<a href="#([^"]+)">([^<]*)</a>', top)
search_html = re.search(r'<div class="tb-search">.*?<div id="tb-res"[^>]*></div></div>', top, re.S).group(0)
part = {i: t for i, t in links}
GROUPS = [("Foundations", ["part-01", "part-02", "part-03", "part-04"]), ("Lattices and unit cells", ["part-05", "part-06", "part-07", "part-08", "part-09", "part-10"]),
          ("Counting, geometry and density", ["part-11", "part-12", "part-13", "part-14", "part-15", "part-16"]), ("Packing and voids", ["part-17", "part-18"]),
          ("Ionic crystals and structures", ["part-19", "part-20"]), ("Defects and properties", ["part-21", "part-22", "part-23"])]
nav = '<nav class="tb-nav" aria-label="Chapter contents"><a class="tb-quicklink" href="#quick-summary">Quick summary</a>'
for title, ids in GROUPS:
    nav += f'<p class="tb-group">{esc(title)}</p>' + "".join(f'<a href="#{i}">{esc(part[i])}</a>' for i in ids if i in part)
nav += '<p class="tb-group">Master Edition</p><a href="#master">Master Edition notes (10 parts)</a></nav>'
head = ('<header class="tb-top"><div class="tb-brand"><span class="tb-logo">SB</span><span class="tb-brandtext"><b>SYNERGIC BOND</b><small>THE CHEMISTRY OPERATING SYSTEM</small></span></div>'
        '<button class="tb-menu" type="button" aria-expanded="false" aria-controls="tb-side">☰ Contents</button></header>')
hero = ('<div class="tb-hero"><p class="tb-eyebrow">JEE ADVANCED · PHYSICAL CHEMISTRY</p><h1>Solid State</h1>'
        '<p class="tb-sub">The complete chapter in one file: all 23 sections and the Master Edition notes, with an interactive 3D model beside each concept it explains.</p>'
        '<ul class="tb-chips"><li>23 sections</li><li>Master Edition notes</li><li>3D Crystal Lab models</li><li>Works offline</li></ul></div>')
s = s.replace(top, head + '<div class="tb-shell"><aside id="tb-side" class="tb-side">' + search_html + nav + '</aside><main class="tb-main">' + hero, 1)
k = s.rfind("</main>"); s = s[:k] + "</main></div>" + s[k + len("</main>"):]
a = s.index('<section id="theory"'); b = s.index('<section id="parts"')
s = s[:a] + '<details id="quick-summary" class="tb-quick"><summary>Quick summary: the chapter in simple words (optional, read first if you like)</summary>' + s[a:b] + "</details>\n" + s[b:]

OUT.write_text(s, encoding="utf-8")
DOCS.mkdir(parents=True, exist_ok=True)
(DOCS / "animations.json").write_text(json.dumps(sorted(records, key=lambda r: r["n"]), indent=1, ensure_ascii=False))
(DOCS / "placement-report.json").write_text(json.dumps(report, indent=1))
print("animations:", len(records), "| lab views:", len(hashes), "| bytes:", OUT.stat().st_size)
