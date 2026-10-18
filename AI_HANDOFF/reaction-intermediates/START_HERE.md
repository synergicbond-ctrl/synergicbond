# Reaction Intermediates book — handover (written at end of usage budget)

Branch `claude/gracious-sagan-l8rfe7`, PR #169 (draft, green at commit bfaba8d).
Book: `carbocation_workbook/` → `out/REACTION_INTERMEDIATES_JEE_ADVANCED.{pdf,html}` (174 pp, 170 validated mechanisms).
Website copy (must be re-copied after every rebuild):
`content/reaction-intermediates/reaction-intermediates.{html,pdf}`; route under
`app/learn/jee-advanced/organic-chemistry/reaction-intermediates/` (sign-in gated).

## Rebuild
```
cd carbocation_workbook && python3 build_all.py        # ~30 s; asserts every mechanism arrow-validates
cp out/REACTION_INTERMEDIATES_JEE_ADVANCED.html ../content/reaction-intermediates/reaction-intermediates.html
cp out/REACTION_INTERMEDIATES_JEE_ADVANCED.pdf  ../content/reaction-intermediates/reaction-intermediates.pdf
```
Single module test: write a tiny script calling `Book` + `module.build(B)` (see engine/book.py, content/common.py `ex`, `Q`).
Fish-hook mechanisms need `chem.ALLOW_RADICAL[0]=True` (build_all already does this for Parts 8-13).

## Done (this session)
- Parts 8-12 deepened: content/{carbanion,radical,carbene,nitrene,benzyne}.py now call *_adv.py
  (theory tables, extra mechanisms, problems). content/exam_extra.py holds 62 extra exam-style problems
  (_P and _P2 dicts keyed CA/FR/CE/NI/BZ; add(topic,q) appends them).
- Part 13 (radical ions) expanded: content/radical_ion_adv.py; fixed bug where RI-1..4 were never printed
  (overview.py now prints RI answers and returns ri_qs + qs).
- All answer keys written by the assistant — NOT independently checked. Problems are original, exam-STYLE
  (JEE/GATE/CSIR/IChO); no copyrighted problems reproduced.

## Pending (priority order)
1. DONE (commit after b24ebea): Part 15 "Important orders" in content/orders.py (answers unchecked; extend with more families if wanted). Old note:: tables with reasons for acidity
   (carboxylic acids incl. halo/position, benzoic acids/ortho effect, phenols, alcohols solution vs gas, hybridisation,
   HX), basicity (aliphatic amines aq/gas, aromatic, N-heterocycles, guanidine), −I/+I/±M orders, leaving groups,
   carbonyl electrophilicity, acid-derivative reactivity, EAS activation, alkene stability (heats of hydrogenation:
   tetra 26.6 < tri 26.9 < trans 27.6 < isobutene 28.4 ≈ cis 28.6 < 1-butene 30.3 kcal/mol), hydration equilibria.
   Exclude nucleophilicity comparison (user's syllabus). Wire in: new content/orders.py with build(B) returning qs;
   add to the import line and the `for _m in (...)` tuple in build_all.py (~lines 11 and 47).
2. Larger problem bank: 20-25 harder multi-step/olympiad-style problems per topic (user wants very high quality).
3. Carbocation gaps: 50 stability-order questions (Part 5), migratory aptitude + 10 Qs (Part 6), rest of Part 7
   (Tiffeneau–Demjanov, semipinacol, phenonium, norbornyl, terpene cascades from Kohinoor), KCP/TCP diagrams.
4. User items: Exercise-2 Q4,18,19,22,33,34 unreadable; lecture homework; flagged drawings awaiting user
   confirmation (Q27 VI, Q19(a), Q21 items 3-5, AgNO3 pairs A and C, isopropyl items E,G,H,I).
5. Deliverables not built: .docx export, CARBOCATION_ANSWER_KEY.pdf, source map, audit report, source zip,
   full page-by-page visual QA (only ~15 new pages were looked at; some mechanism cells are cramped:
   9.12 AIBN, 10.11, 10.12).

## Drive findings
User Drive has NO file called "GOC Kohinoor". Kohinoor files present: Carbocation JEE Kohinoor 2024 (already used),
Atomic Structure/Chemical Kinetics/Coordination/Isomerism/IUPAC/Boron Family Kohinoor. GOC material: handwritten
"General Organic chemistry.pdf", "GOC -FINAL SHEET.pdf" (Sri Chaitanya IIT workbook, Ex A–I + key; structures lost
in text extraction, so not usable without page images), GOC_L-5, GOC.pdf/GOC1.pdf, Assignments 129–138 keys,
Exercise-O2 solution. Also Maya Shankar Singh "Reactive Intermediates" book.

## Gotchas
- Cond-label markup uses `_`/`^`, not HTML sub tags. Every `ex(...)` step list must match `expect` strings exactly,
  including by-products (H2O, halide) — that is the usual validation failure.
- Atom maps required on carbenes/nitrenes/radicals used as arrow sinks (`[CH2:1]`, not `[CH2]`).
- Keep problem answers honest: when unsure of a product, drop the problem rather than guess.
- Usage was nearly exhausted when this was written; check credits before large jobs.
