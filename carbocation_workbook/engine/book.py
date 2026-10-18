"""Book model -> HTML -> PDF (Chromium) and DOCX (python-docx)."""
import html as _h
import json
import pathlib
import re

CSS = r"""
@page { size: A4; margin: 13mm 14mm 15mm 14mm; }
:root { --ink:#111; --rule:#9a9a9a; --soft:#f3f1ea; --acc:#7a1020; }
* { box-sizing:border-box; }
html { font-family: C059, 'Century Schoolbook', 'Century Schoolbook L', serif; }
body { margin:0; color:var(--ink); font-size:12.4pt; line-height:1.27; text-align:justify; hyphens:auto; -webkit-hyphens:auto; }
h1.part { font-size:19pt; margin:14pt 0 6pt; line-height:1.15; border-bottom:1.4pt solid var(--ink); padding-bottom:3pt; break-after:avoid; text-align:left; }
h1.part.newpage { break-before:page; margin-top:0; }
h2 { font-size:14.6pt; margin:12pt 0 3pt; line-height:1.2; break-after:avoid; text-align:left; }
h3 { font-size:12.8pt; margin:8pt 0 2pt; font-style:italic; break-after:avoid; text-align:left; }
p { margin:0 0 4.5pt; orphans:3; widows:3; }
ul, ol { margin:2pt 0 5pt 17pt; padding:0; }
li { margin:0 0 2pt; }
sub, sup { font-size:70%; line-height:0; }
.box { border:0.8pt solid var(--ink); background:var(--soft); padding:4pt 7pt; margin:5pt 0 7pt; break-inside:avoid; }
.box > b.t { display:block; font-size:11.5pt; letter-spacing:.02em; text-transform:uppercase; margin-bottom:1pt; }
.warn { border-left:3pt solid var(--acc); padding:2pt 7pt; margin:5pt 0 7pt; background:#faf3f3; break-inside:avoid; }
table { border-collapse:collapse; margin:4pt 0 7pt; font-size:11pt; width:100%; }
tr { break-inside:avoid; }
th, td { border:0.6pt solid #777; padding:2pt 4pt; vertical-align:top; text-align:left; line-height:1.18; }
th { background:#e9e6dc; }
.grid2 { display:grid; grid-template-columns:1fr 1fr; gap:5pt 13pt; margin:3pt 0 7pt; align-items:start; grid-auto-flow:dense; }
.grid1 { margin:3pt 0 7pt; }
.cell { break-inside:avoid; border-top:0.6pt solid var(--rule); padding-top:2pt; overflow:hidden; }
.cell.span2, .q.span2 { grid-column: 1 / span 2; }
.cell .ct { font-weight:bold; font-size:11.4pt; text-align:left; line-height:1.18; margin-bottom:1pt; }
.cell .cx { font-size:11.4pt; line-height:1.22; margin-top:2pt; }
.cell svg, .fig svg { display:block; max-width:100%; height:auto; }
.fig { break-inside:avoid; margin:4pt 0 6pt; }
.fig .cap { font-size:11pt; font-style:italic; margin-top:1pt; text-align:left; }
.q { break-inside:avoid; border-top:0.6pt solid var(--rule); padding-top:2pt; font-size:12pt; line-height:1.24; }
.q .qt { text-align:left; }
.q b.n { margin-right:3pt; }
.a { break-inside:avoid; border-top:0.6pt solid var(--rule); padding-top:2pt; font-size:11.6pt; line-height:1.22; margin-bottom:3pt; }
.a .ans { font-weight:bold; }
.toc { font-size:11.4pt; line-height:1.25; }
.toc div { display:flex; justify-content:space-between; gap:6pt; text-align:left; }
.toc .l1 { font-weight:bold; margin-top:4pt; }
.toc .l2 { padding-left:14pt; font-size:10.8pt; }
.toc .dots { flex:1; border-bottom:0.6pt dotted #666; transform:translateY(-3pt); }
.title { text-align:center; margin:18mm 0 8mm; }
.title h1 { font-size:26pt; line-height:1.15; margin:0 0 6pt; }
.title p { text-align:center; font-size:12.5pt; }
.small { font-size:10.6pt; }
.k { font-family: inherit; font-style:italic; }
svg text { font-family: C059, 'Century Schoolbook', serif; }
"""


def font_face_css():
    """Embed C059 (URW Century Schoolbook clone) so the offline HTML looks the same on any machine."""
    import base64
    base = "/usr/share/fonts/opentype/urw-base35/"
    spec = [("C059-Roman.otf", "normal", "normal"), ("C059-Bold.otf", "bold", "normal"),
            ("C059-Italic.otf", "normal", "italic"), ("C059-BdIta.otf", "bold", "italic")]
    out = []
    for fn, w, st in spec:
        try:
            b64 = base64.b64encode(open(base + fn, "rb").read()).decode()
        except OSError:
            continue
        out.append("@font-face{font-family:C059;font-weight:%s;font-style:%s;src:url(data:font/otf;base64,%s) format('opentype');}" % (w, st, b64))
    return "".join(out)


def esc(s):
    return _h.escape(s)


class Q:
    def __init__(self, qid, text, fig=None, answer="", why="", sol_fig=None, kind="", opts=None):
        self.qid, self.text, self.fig, self.answer, self.why, self.sol_fig, self.kind, self.opts = \
            qid, text, fig, answer, why, sol_fig, kind, opts


class Book:
    def __init__(self, title="", subtitle=""):
        self.blocks = []
        self.title, self.subtitle = title, subtitle
        self.toc = []
        self._pid = 0

    # ---- structure
    def part(self, label, title, newpage=False):
        self._pid += 1
        aid = f"p{self._pid}"
        self.toc.append((1, f"{label} {title}".strip(), aid))
        self.blocks.append(("html", f'<h1 class="part{" newpage" if newpage else ""}" id="{aid}">{label} {title}</h1>'))

    def h2(self, text):
        self._pid += 1
        aid = f"h{self._pid}"
        self.toc.append((2, text, aid))
        self.blocks.append(("html", f'<h2 id="{aid}">{text}</h2>'))

    def h3(self, text):
        self.blocks.append(("html", f"<h3>{text}</h3>"))

    def p(self, text):
        self.blocks.append(("p", text))

    def ul(self, items, ordered=False):
        tag = "ol" if ordered else "ul"
        self.blocks.append(("html", f"<{tag}>" + "".join(f"<li>{i}</li>" for i in items) + f"</{tag}>"))

    def box(self, title, text):
        self.blocks.append(("box", title, text))

    def warn(self, text):
        self.blocks.append(("warn", text))

    def table(self, header, rows, widths=None):
        self.blocks.append(("table", header, rows, widths))

    def fig(self, d, caption=None):
        self.blocks.append(("fig", d, caption))

    def grid(self, cells, cols=2):
        """cells: list of dict(title=, fig=dict(svg..), text=)"""
        self.blocks.append(("grid", cells, cols))

    def questions(self, qs, cols=2):
        self.blocks.append(("qs", qs, cols))

    def answers(self, qs, with_stem=False):
        self.blocks.append(("ans", qs, with_stem))

    def raw(self, html):
        self.blocks.append(("html", html))

    # ---- HTML
    def html(self, with_toc=True, pages=None):
        out = ["<!doctype html><html lang='en'><head><meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1'><title>%s</title><style>%s%s</style></head><body>" % (esc(self.title), font_face_css(), CSS)]
        out.append('<div class="title"><h1>%s</h1><p>%s</p></div>' % (self.title, self.subtitle))
        if with_toc:
            out.append('<h1 class="part" style="margin-top:4pt">Contents</h1><div class="toc">')
            for lvl, t, aid in self.toc:
                pg = (pages or {}).get(aid, "")
                out.append(f'<div class="l{lvl}"><span>{t}</span><span class="dots"></span><span>{pg}</span></div>')
            out.append("</div>")
            out.append('<span style="font-size:1px;color:#fff;line-height:1px">BODYSTARTMARK</span>')
        for b in self.blocks:
            out.append(self._render(b))
        out.append("</body></html>")
        return "".join(out)

    def _render(self, b):
        k = b[0]
        if k == "html":
            return b[1]
        if k == "p":
            return f"<p>{b[1]}</p>"
        if k == "box":
            return f'<div class="box"><b class="t">{b[1]}</b>{b[2]}</div>'
        if k == "warn":
            return f'<div class="warn">{b[1]}</div>'
        if k == "table":
            hd = "".join(f"<th>{c}</th>" for c in b[1])
            rows = "".join("<tr>" + "".join(f"<td>{c}</td>" for c in r) + "</tr>" for r in b[2])
            return f"<table><tr>{hd}</tr>{rows}</table>"
        if k == "fig":
            cap = f'<div class="cap">{b[2]}</div>' if b[2] else ""
            return f'<div class="fig">{b[1]["svg"]}{cap}</div>'
        if k == "grid":
            cells = []
            for c in b[1]:
                t = f'<div class="ct">{c["title"]}</div>' if c.get("title") else ""
                f = c["fig"]["svg"] if c.get("fig") else ""
                x = f'<div class="cx">{c["text"]}</div>' if c.get("text") else ""
                sp = " span2" if c.get("span") == 2 else ""
                cells.append(f'<div class="cell{sp}">{t}{f}{x}</div>')
            return f'<div class="grid{b[2]}">' + "".join(cells) + "</div>"
        if k == "qs":
            cells = []
            for q in b[1]:
                fg = q.fig["svg"] if q.fig else ""
                sp = " span2" if (q.fig and q.fig.get("span") == 2) else ""
                cells.append(f'<div class="q{sp}"><div class="qt"><b class="n">{q.qid}.</b>{q.text}</div>{fg}</div>')
            return f'<div class="grid{b[2]}">' + "".join(cells) + "</div>"
        if k == "ans":
            cells = []
            for q in b[1]:
                stem = f'<div class="qt">{q.text}</div>' if b[2] else ""
                fg = q.fig["svg"] if (b[2] and q.fig) else ""
                sf = q.sol_fig["svg"] if q.sol_fig else ""
                cells.append(f'<div class="a"><b>{q.qid}.</b> {stem}{fg}<div><span class="ans">Answer: {q.answer}</span></div>'
                             f'<div>{q.why}</div>{sf}</div>')
            return '<div class="grid1">' + "".join(cells) + "</div>"
        raise ValueError(k)

    # ---- PDF
    def pdf(self, path, pages=None, with_toc=True):
        from playwright.sync_api import sync_playwright
        html = self.html(with_toc=with_toc, pages=pages)
        hp = pathlib.Path(path).with_suffix(".html")
        hp.write_text(html, encoding="utf-8")
        with sync_playwright() as p:
            from .raster import launch
            br = launch(p)
            pg = br.new_page()
            pg.goto("file://" + str(hp.resolve()))
            pg.wait_for_timeout(600)
            foot = ('<div style="width:100%;font-size:8.5px;text-align:center;font-family:C059,serif;color:#444">'
                    '<span class="pageNumber"></span></div>')
            pg.pdf(path=str(path), format="A4", print_background=True, display_header_footer=True,
                   header_template="<span></span>", footer_template=foot,
                   margin=dict(top="13mm", bottom="15mm", left="14mm", right="14mm"))
            br.close()
