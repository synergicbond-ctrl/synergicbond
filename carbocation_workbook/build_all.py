"""Assemble the book from content modules and write the offline PDF (work in progress build)."""
import sys, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
from content.common import *
import content.intro as intro
import content.gen_A as gA, content.gen_B as gB, content.gen_C as gC, content.gen_D as gD, content.gen_E as gE
import content.lg as lg
import content.gen_F as gF
import content.gen_H as gH
import content.user_ex2 as ux
import content.user_ex3 as ux3
import content.user_ex4 as ux4
import content.user_ex5 as ux5
import content.user_ex6 as ux6
import content.count_q as cq
import content.stab_theory as st

B = Book("Reaction Intermediates and Advanced Carbocation Chemistry",
         "Structure-based notes and problem workbook — WORK-IN-PROGRESS BUILD: Parts 0–4, Part 5A (solutions to your supplied exercise) and the opening of Part 7 (Parts 5, 6, rest of 7 onward not yet written)")
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
cqs = cq.build(B)
B.part("Answers", "Part 3 — Leaving-Group Problems: Answers and Explanations")
B.answers(qs, with_stem=False)
B.part("Answers", "Part 7.1 — Counting Problems: Answers and Explanations")
B.answers(cqs, with_stem=False)
out = pathlib.Path(__file__).resolve().parent / "out"
out.mkdir(exist_ok=True)
pdfp = str(out / "CARBOCATION_ADVANCED_MASTER_WIP.pdf")
B.pdf(pdfp)
# second pass: put real page numbers into the table of contents (TOC length is unchanged, so layout is stable)
import pymupdf, re as _re
doc = pymupdf.open(pdfp)
texts = [_re.sub(r"\s+", " ", pg.get_text()) for pg in doc]
toc_pages = 1
while toc_pages < len(texts) and "Contents" in texts[toc_pages]:
    toc_pages += 1
pages = {}
for lvl, t, aid in B.toc:
    plain = _re.sub(r"<[^>]+>", "", t)
    plain = _re.sub(r"\s+", " ", plain)
    for i in range(toc_pages - 1 if toc_pages > 1 else 0, len(texts)):
        key = plain[:40]
        body = texts[i] if i >= toc_pages else texts[i].split("Contents", 1)[-1][-0:] if False else texts[i]
        if i == 0:
            # page 1 holds the TOC plus the start of Part 0: search only after the TOC block
            body = texts[0].split("Answers Part 3", 1)[-1] if "Answers Part 3" in texts[0] else texts[0]
        if key in body:
            pages[aid] = i + 1
            break
B.pdf(pdfp, pages=pages)
import json
json.dump(LOG, open(out / "mechanism_validation_log.json", "w"), indent=1)
print("mechanisms validated:", len({e['id'].rstrip("'") for e in LOG}), "all ok:", all(e['ok'] for e in LOG))
