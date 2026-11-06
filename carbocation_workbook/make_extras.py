"""Post-build extras: answer-key PDF and editable .docx. Run after build_all.py.
   python3 make_extras.py
"""
import sys, re, base64, pathlib, subprocess, io
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
import build_all as ba          # rebuilds the book once and exposes B
from engine.book import Book

out = pathlib.Path(ba.out) if hasattr(ba, "out") else pathlib.Path("out")

# ---- answer key (all questions with an answer, in book order)
rows = []
for blk in ba.B.blocks:
    if blk[0] == "ans":
        for q in blk[1]:
            if getattr(q, "answer", ""):
                rows.append((q.qid, q.answer))
K = Book("Answer Key — Reaction Intermediates", "Short answers only; full reasoning is in the book. Answers written for this book have not been independently checked; ⚑ marks convention-dependent items.")
K.part("Answer Key", f"All {len(rows)} short answers in book order")
K.table(["ID", "Answer"], [[i, a] for i, a in rows], widths=[14, 86])
K.pdf(str(out / "REACTION_INTERMEDIATES_ANSWER_KEY.pdf"), with_toc=False)
print("answer key rows:", len(rows))

# ---- docx: inline SVG -> PNG data URIs, then pandoc
import cairosvg
html = (out / "REACTION_INTERMEDIATES_JEE_ADVANCED.html").read_text(encoding="utf-8")
cnt = [0]
def rep(m):
    svg = m.group(0)
    try:
        png = cairosvg.svg2png(bytestring=svg.encode("utf-8"), scale=1.6)
    except Exception:
        return ""
    cnt[0] += 1
    return '<img src="data:image/png;base64,' + base64.b64encode(png).decode() + '"/>'
html2 = re.sub(r"<svg\b.*?</svg>", rep, html, flags=re.S)
html2 = re.sub(r"@font-face\s*\{.*?\}", "", html2, flags=re.S)   # embedded fonts are not needed in docx
tmp = out / "_docx_src.html"
tmp.write_text(html2, encoding="utf-8")
r = subprocess.run(["pandoc", str(tmp), "-f", "html", "-t", "docx", "-o", str(out / "REACTION_INTERMEDIATES_JEE_ADVANCED.docx")],
                   capture_output=True, text=True)
print("svg->png:", cnt[0], "pandoc rc:", r.returncode, r.stderr[:300])
tmp.unlink()
