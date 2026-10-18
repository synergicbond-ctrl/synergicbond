"""Assemble the book from content modules and write the offline PDF (work in progress build)."""
import sys, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
from content.common import *
import content.intro as intro
import content.gen_A as gA, content.gen_B as gB, content.gen_C as gC, content.gen_D as gD, content.gen_E as gE
import content.lg as lg
import content.gen_F as gF
import content.gen_H as gH
import content.gen_R as gR
import content.carbanion as cbn, content.radical as rad, content.carbene as cbe, content.nitrene as nit, content.benzyne as bzy, content.overview as ovw
from engine import chem as _chem
import content.user_ex2 as ux
import content.user_ex3 as ux3
import content.user_ex4 as ux4
import content.user_ex5 as ux5
import content.user_ex6 as ux6
import content.user_ex7 as ux7
import content.user_ex8 as ux8
import content.user_ex9 as ux9
import content.count_q as cq
import content.stab_theory as st

B = Book("Reaction Intermediates — JEE Advanced Organic Chemistry",
         "Carbocations (in depth), carbanions, free radicals, carbenes, nitrenes, benzyne and radical ions: theory, generation, stability, arrow-validated mechanisms, and worked solutions to the exercises you supplied. "
         "Status: Parts 0–4, 5A–5H, 7.0–7.1 and 8–14 are written; the 50 original stability questions (Part 5), the migratory-aptitude chapter (Part 6) and the rest of the rearrangement series (Part 7) are not yet written.")
intro.build(B)
B.part("Part 2", "Generation of Carbocations")
B.p("Each of the following mechanisms was checked by computer: the curved arrows were applied to the drawn reactant graph and the result compared with the drawn product (valence, charge, atom conservation). "
    "Examples are grouped by generation route: 2.A alcohols, 2.B alkyl halides and sulfonates, 2.C alkenes/dienes/alkynes, 2.D solvolysis, 2.E other routes, 2.F amines with nitrous acid, 2.G aromatic compounds (arenium ions), 2.H Lewis-acid-assisted ionisation, ether cleavage and aromatic cations.")
for m in (gA, gB, gC, gD, gE, gF, gH):
    m.build(B)
qs = lg.build(B)
st.build(B)
ux.build(B)
ux3.build(B)
ux4.build(B)
ux5.build(B)
ux6.build(B)
ux7.build(B)
ux8.build(B)
ux9.build(B)
gR.build(B)
cqs = cq.build(B)
_chem.ALLOW_RADICAL[0] = True
new_qs = []
for _m in (cbn, rad, cbe, nit, bzy, ovw):
    new_qs += _m.build(B) or []
_chem.ALLOW_RADICAL[0] = False
B.part("Answers", "Part 3 — Leaving-Group Problems: Answers and Explanations")
B.answers(qs, with_stem=False)
B.part("Answers", "Part 7.1 — Counting Problems: Answers and Explanations")
B.answers(cqs, with_stem=False)
out = pathlib.Path(__file__).resolve().parent / "out"
out.mkdir(exist_ok=True)
pdfp = str(out / "REACTION_INTERMEDIATES_JEE_ADVANCED.pdf")
B.pdf(pdfp)
# second pass: put real page numbers into the table of contents (TOC length is unchanged, so layout is stable)
import pymupdf, re as _re
doc = pymupdf.open(pdfp)
texts = [_re.sub(r"\s+", " ", pg.get_text()) for pg in doc]
start = next((i for i, t in enumerate(texts) if "BODYSTARTMARK" in t), 0)
texts[start] = texts[start].split("BODYSTARTMARK", 1)[-1]
pages = {}
for lvl, t, aid in B.toc:
    plain = _re.sub(r"<[^>]+>", "", t)
    plain = _re.sub(r"\s+", " ", plain)
    key = plain[:40]
    for i in range(start, len(texts)):
        if key in texts[i]:
            pages[aid] = i + 1
            break
B.pdf(pdfp, pages=pages)
import json
json.dump(LOG, open(out / "mechanism_validation_log.json", "w"), indent=1)
print("mechanisms validated:", len({e['id'].rstrip("'") for e in LOG}), "all ok:", all(e['ok'] for e in LOG))
