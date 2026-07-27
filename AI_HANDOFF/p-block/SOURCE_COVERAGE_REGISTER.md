# P-block Course — Source Coverage Register

Working document for the master p-block build. **Updated as pages are actually
inspected.** Nothing is marked inspected unless it was read in this session's
transcript. "Text" = read via extracted text layer; "Vision" = read as page
images (required for scans and handwriting).

Last updated: 2026-07-26.

---

## 0. Blockers to record before anything else

| Requirement in the spec | Status |
|---|---|
| **Greenwood & Earnshaw, *Chemistry of the Elements*** | **NOT UPLOADED — verification unavailable.** No claim of Greenwood verification appears anywhere in the course. |
| **NCERT textbook (Class 11/12 p-block chapters)** | **NOT UPLOADED.** `Downloads` holds `ncert_tables.pdf` and four Arihant *NCERT Solutions* volumes, but none was attached to the project, and solution books are not the NCERT text. "NCERT-first" therefore cannot be sourced or audited. Points that need NCERT confirmation are flagged in §5 below. |
| **J.D. Lee** | **AVAILABLE and used.** Three separate copies in the project (see files 6, 7, 8). Verification performed and cited internally. |

---

## 1. File-by-file coverage

### File 1 — `Boron Family Kohinoor .pdf` (user's own handwritten notes)
- **Pages:** 50 · **Inspected:** **50 / 50 (Vision)** — complete
- **Groups:** 13
- **Topics:** atomic/physical data tables; B₁₂ icosahedron; electropositive character; ΔE(np−ns) promotion gaps; reactivity with air/water/acid/alkali/non-metals/metals/NH₃/H₂; B vs Al; B–Si diagonal; minerals; extraction; B₂O₃; borax; H₃BO₃; borates; peroxoborate; boron halides; dihalides; BN; borazine; boranes; STYX; hydroboration; AlCl₃; alums; α/γ-Al₂O₃; Al(BH₄)₃; Be(BH₄)₂; BH₃·CO donor/acceptor analysis
- **Unique to this file:** ΔE promotion-gap values (B 4.5 → Tl 7.0 eV); HSAB-dependent Lewis-acidity reversal; borosalicylic acid as the optically active B compound; halide redistribution equilibrium; Ga[AlCl₄] as Ga(I); STYX code
- **Suspected errors found:** `4HBO₂ → H₂B₄O₇ + 2H₂O` — hydrogen does not balance; corrected to **+ H₂O**. Borazine mp given as −5 to −6 °C — literature is ≈ −58 °C; mp omitted from the course, bp 53 °C used
- **Destination:** Sections 2, 3, 4 — **DONE** (commits d97c167, bb242b0)

### File 2 — `P-BLOCK SHEET (ENTHUSE)-THEORY.pdf` (ALLEN)
- **Pages:** 92 · **Inspected:** **~75 / 92 (Text)**
- **Not yet inspected:** the Group 14 stretch (extracted lines ≈ 560–1485: silicone types, lead compounds). Equivalent content was taken from Files 3 and 4 instead, so no gap in the course — but this file is **not** fully read.
- **Groups:** 13, 14, 15, 16, 17, 18
- **Destination:** Sections 2–19 — **DONE for Groups 15–18** (dde2d9f, ce565e8, 6c8a52c)

### File 3 — `The P-Block Elements ( Group 13–14) - Theory.pdf`
- **Pages:** 84 · **Inspected:** **~35 / 84 (Text)**
- **Not yet inspected:** extracted lines 1769–4983 = its **entire Groups 15–18 half** (the title understates the contents). Headings were indexed only.
- **Destination:** Sections 2–6 — **DONE**. Groups 15–18 portion **UNREAD**.

### File 4 — `BORON AND CARBON FAMILY.pdf` (textbook, scanned)
- **Pages:** 80 · **Inspected:** **~34 / 80 (Vision)** — pp. 1–3, 30–33, 38–55, 56–64
- **Not yet inspected:** pp. 4–29 (Ch. 9 body + exercises), 34–37, 65–80 (Ch. 10 exercises/answers)
- **Suspected errors found:** Mn²⁺/PbO₂ permanganate equation unbalanced in nitrogen — replaced with the ionic form. "Boron nitride > diamond" hardness claim — restated as c-BN second to diamond. "Gelignite = nitrobenzene" — nitroglycerine; omitted.
- **Destination:** Sections 5, 6 — **DONE**

### File 5 — `Boron Family SG.pdf` (J.D. Lee, adapted ed., Ch. 10 Group 13 extract)
- **Pages:** 22 · **Inspected:** **22 / 22 (Text)** — complete
- **Destination:** Sections 2–4 — **DONE**

### File 6 — `asli jd lee.pdf` (J.D. Lee 5th ed., Chapters 12–13)
- **Pages:** 109 · **Inspected:** **109 / 109 (Vision)** — complete
- **Groups:** 13, 14
- **Unique:** mean M–Cl bond energies behind the inert-pair effect; Al³⁺ hydration vs ΣIE arithmetic; 37 % icosahedral space filling; graphite intercalation compounds (three classes, C₈K conductivity, AAAA stacking); graphite oxide and (CF)ₙ; carbon dating; charge-transfer spectra; carboranes; five borane bond types; Zintl clusters; Walden inversion at Si; lead tetraacetate
- **Suspected errors found:** Si–Si/Ge–Ge/Sn–Sn bond energies differ from the coaching set — both recorded, JEE-standard set retained, discrepancy flagged in the course. States only PbI₄ unknown (coaching texts say PbBr₄ too) — both positions flagged.
- **Destination:** Sections 2–6 — **DONE** (commit bb242b0)

### File 7 — `JD Lee Inorganic 5th Edition.pdf` (complete book, scanned)
- **Pages:** 1057 · **Inspected:** **5 / 1057 (Vision)** — pp. 7–11, contents only
- **Confirmed:** same 5th edition as File 6. Ch. 11 (Group 2) ends p. 354, so p-block begins at Ch. 12. Files 6 covered **Ch. 12–13 (Groups 13–14)** already.
- **STILL UNREAD:** **Ch. 14–17 = Groups 15, 16, 17, 18** in the original 5th-edition wording.
- **Note on efficiency:** File 8 is the same author's p-block chapter in *clean extractable text* covering all six groups, so File 8 should be read first and this scan used only to check for material the adapted edition trimmed.
- **Destination:** Sections 7–19 — **PENDING**

### File 8 — `151716181314.pdf` (J.D. Lee adapted ed., Ch. 10 — **all six groups**)
- **Pages:** 172 · **Inspected: 172 / 172 — COMPLETE.**
- **Page accounting, done properly.** The PDF's 172 pages carry printed page numbers
  **387 to 558 inclusive**, and 558 − 387 + 1 = **172**, so printed pages map 1:1 onto
  PDF pages for this file. Earlier revisions of this register counted the contents and
  section index as extra pages on top of the six Parts, which inflated the total to 113
  before Groups 13–14 were read. **Corrected here: the six Parts alone account for all
  172 pages.**

| Part | Group | Printed pages | Extracted lines | Sections | Pages |
|---|---|---|---|---|---|
| 1 | 13 | 387–412 | 107–1748 | 10.1–10.15 | 26 |
| 2 | 14 | 413–447 | 1749–4002 | 10.16–10.34 | 35 |
| 3 | 15 | 448–482 | 4003–6220 | 10.35–10.45 | 35 |
| 4 | 16 | 483–512 | 6221–8088 | 10.46–10.55 | 30 |
| 5 | 17 | 513–541 | 8089–9991 | 10.56–10.66 | 29 |
| 6 | 18 | 542–558 | 9992–11169 | 10.67–10.74 + chapter-wide Miscellaneous Questions | 17 |
| | | | | **Total** | **172** |

- **Every Part was read end to end, including its question sets and answer key**, and the
  chapter-wide Miscellaneous Questions on pp. 553–558, which range over all six groups.
  The extracted text ends at line 11169; nothing follows.
- **Cumulative harvest** recorded in `MASTER_REGISTERS.md` (main body + Addenda 1–6):
  **176 topics, ~600 species, ~430 reactions, 96 structures, 38 MO cases, 84 visuals,
  150 JEE traps, 53 contradictions/source errors**, plus dedicated colour-and-observation
  and uses-and-hazards registers for Groups 13, 14, 17 and 18.
- **All named course gaps in this file are now closed:** §10.32 Internal π Bonding Using
  d Orbitals, §10.34 Organic Derivatives, §10.50 General Properties of Oxides, §10.53
  Oxohalides, §10.65 Polyhalides, §10.66 Pseudohalogens, and §10.73 Structure and Bonding
  in Xenon Compounds — the MOT section flagged at the very start of this project.
- **Verification status:** everything registered from this file is verified against the
  accessible J.D. Lee text and nothing else. Modern bonding re-interpretations recorded
  alongside the source's pπ–dπ and sp³dⁿ language are marked **PENDING VERIFICATION**;
  no NCERT or Greenwood corroboration is claimed, because neither is in the corpus.
- **Register-integrity note (2026-07-27):** the two commits that closed Groups 15 and 16
  updated the summary table at the foot of this file but their scripted edit to *this*
  block silently no-matched, so the narrative sat at "~25 / 172" for two parts. Repaired
  here and re-verified by reading the file back. Page counts above are the honest totals.
- **Structure mapped** (extracted-line anchors): Part 1 G13 @107 · Part 2 G14 @1749 · Part 3 G15 @4003 · Part 4 G16 @6221 · Part 5 G17 @8089 · Part 6 G18 @9992; sections 10.1–10.74
- **Sections that cover topics absent from the course today:**
  - **10.38 Hydrogen azide and the azides** — not in the course at all
  - **10.39 Nitrogen fixation** — not in the course
  - **10.40 NPK fertilizers** — not in the course
  - **10.53 Oxohalides** (SOCl₂, SO₂Cl₂ etc.) — only glancingly present
  - **10.73 Structure and bonding in xenon compounds** — the MOT treatment the spec asks for
  - 10.32 internal π bonding using d orbitals; 10.34 organic derivatives; 10.65 polyhalides; 10.66 pseudohalogens (deeper than current)
- **Destination:** Sections 7–19 + new MOT material — **HIGHEST PRIORITY, PENDING**

### File 9 — `annotated p block/Note 6 Mar 2026 20_18_57.pdf` (user's annotated notes)
- **Pages:** 40 · **Inspected:** **0 / 40**
- OCR layer is **garbled** (`xÉ Ptto`, `koFalunstable`) → **Vision required**, per spec item 5
- **Destination:** PENDING

### File 10 — `annotated p block/Note 7 Mar 2026 20_56_21.pdf` (user's annotated notes)
- **Pages:** 11 · **Inspected:** **0 / 11** — Vision required
- **Destination:** PENDING

### File 11 — `Noble Gas For Adv and Olympiad.pdf`
- **Pages:** 14 · **Inspected:** **14 / 14 (Vision)** — complete
- **Actual path:** `Downloads/p block/Noble Gas For Adv and Olympiad.pdf` (the attachment path was wrong)
- **Compiled from:** Cotton & Wilkinson, Housecroft, Shriver, Miessler & Tarr, Holleman–Wiberg — with the user's handwritten overlay
- **Unique:** KAgF₄/BF₃ → AgF₃ route to XeF₂; E°(XeF₂/Xe) = **+2.64 V**; Housecroft thermochemistry (Xe–F shortens 200→189 pm while weakening 133→126 kJ/mol, which *derives* XeF₆ > XeF₄ > XeF₂); oxidation-state/lone-pair classification table; **XeF₅⁻ pentagonal planar**, **XeF₈²⁻ square antiprismatic**; why **XeF₃⁻ cannot exist** (lone pairs at 90°); **XeF₂ is donor-only**; Xe₂F₃⁺ bridged cation; Cs₂XeF₈ yellow and stable to 400 °C vs CsXeF₇ dec > 50 °C; why XeO and XeO₂ do not exist (hybridisation energy vs radial distance); XeF₂/XeF₄/XeF₆ reaction fans incl. BrO₃⁻ → BrO₄⁻; Lux–Flood acidity order; **SiF₄ > SiCl₄ order inverting the boron series**; F-vs-H high-coordination table; clathrates in phenol/hydroquinone; thermal vs electrical conductivity opposite trends; Ne has the highest EGE
- **Destination:** Sections 18, 19 (+ the Lewis-acidity contrast into Section 4) — **DONE**

---

## 2. Aggregate coverage

| | Pages | Inspected | % |
|---|---|---|---|
| Files 1–6 (original six) | 437 | **325** | 74 % |
| Files 7–11 (new five) | 1294 | **191** | 14.8 % |
| File 12 (`15161718.pdf`, p-block part only) | 184 | **30** | 16.3 % |
| **Total project** | **1915** | **546** | **29 %** |

Files 7–12 breakdown: file 7 (JD Lee 5th ed., whole book) 5 / 1057 · **file 8 (JD Lee
adapted Ch. 10) 172 / 172 — COMPLETE** · file 9 (annotated notes) 0 / 40 · file 10
(annotated notes) 0 / 11 · file 11 (noble-gas notes) 14 / 14 · **file 12 (JD Lee 5th ed.
Ch. 14–17 extract) 30 / 184 deeply read, **209 / 209 triaged**.

**Denominator history, so the movement is auditable.** Locating file 12 added its pages to
a corpus that had been missing them, taking the total from 1731 to 1940 and the completion
figure from 30 % to 27 %. Triaging the file then showed that **25 of its 209 pages are
d-block (Ch. 18) and outside this project**, so its p-block contribution is 184 pages and
the total settles at **1915**. Neither movement is a regression — the first corrected a
missing file, the second removed out-of-scope pages.

**The project has NOT been fully reviewed.** No statement in the course may claim otherwise.

---

## 3. Course state today

45,046 words, 20 lessons, all six groups, shipped on branch
`feat/p-block-groups-13-14` (PR #22, open, CI green). Verified each commit
through the chapter's real render pipeline: zero KaTeX errors, all internal
cross-references resolving, all 20 lessons non-empty.

## 4. What the spec still requires that does not exist yet

1. Read Files 8–11 in full, then File 7 Ch. 14–17 (≈ 1,290 pages).
2. Master Topic / Compound / Reaction / Visual registers (spec §4).
3. Full mandatory compound profiles (spec §6) — identity, occurrence, every
   preparation with conditions and reasons, physical properties. Current
   coverage is trend- and mechanism-led, not profile-led.
4. ~~**Diagrams.**~~ **DONE — infrastructure shipped.** `app/notes/p-block/_visuals/`
   provides a themed SVG system (theme, Frame, MoleculeDiagram, StructureGallery,
   MODiagram, OxidationStateMap, TrendChart, ProcessFlow/ReactionNetwork/HydrolysisMap,
   ComparisonGraphic) plus a registry and a `~~~viz` fence bridge in the p-block renderer.
   Three visuals are live. Remaining: author the other 14 registered visuals.
5. Molecular Orbital Theory depth beyond the O₂ paramagnetism case.

## 4a. File 12 — `15161718.pdf` (now located, identified and entered)

- **Actual path:** `/Users/mritunjayshukla/Downloads/p block/15161718.pdf`
- **Pages: 209.** Verified three ways — `mdls kMDItemNumberOfPages`, a count of
  `/Type /Page` objects, and the top-level `/Count`. All give 209.
- **Format: a PURE SCAN.** `pdftotext` over the whole document returns **zero
  characters** (209 page-break bytes and nothing else). Every page needs vision;
  there is no OCR text layer to fall back on.
- **Identity:** **J.D. Lee, *Concise Inorganic Chemistry*, 5th edition,
  Chapters 14–17** — Groups 15, 16, 17 and 18. The filename is the group list.
- **Printed page range:** ≈**469–677**. Offset is printed = PDF + 467 at the
  front and printed = PDF + 468 from about PDF p. 140, so one page is inserted
  between those points. Chapter starts: Ch. 14 Group 15 at PDF p. 1; Group 16
  reached by PDF p. 100; Ch. 16 Group 17 by PDF p. 140; Ch. 17 Group 18 by
  PDF p. 175.
- **Relationship to file 7 — do not double-count.** File 7 is the *whole*
  1057-page 5th edition, whose Ch. 14–17 was recorded as unread. **This file is
  an extract of exactly those chapters.** They are the same printed pages. Pages
  completed here therefore also discharge file 7's Ch. 14–17 obligation, and
  file 7's own tally is deliberately left at 5/1057 so the same paper is not
  counted twice.
- **Relationship to file 8 — this is a differential pass.** File 8 is the
  *adapted Indian edition* of this same text. Spot checks at PDF p. 140
  (printed 608) and PDF p. 175 (printed 643) match file 8 **almost word for
  word**, and those passages are already registered in Addenda 3 and 4. This
  source is therefore read for **material the adapted edition trimmed**, and
  Addendum 7 records only what is genuinely new.
- **The trimming is heavy in the front matter of each chapter.** Chapter 14
  occupies ~99 PDF pages here against 35 printed pages in the adapted edition.
  Occurrence, extraction, world production figures and the whole of
  arsenic/antimony/bismuth metallurgy were cut.
- **ALL 209 PAGES TRIAGED.** Every page carries a status label, derived from the
  scan itself: all 209 pages were rendered, the running-header band cropped at
  150 dpi, and the headers read in seven stacked montages. The full page map,
  chapter boundaries, section list and per-range status table are in
  **`MASTER_REGISTERS.md` Addendum 8**.
- **CORRECTION — only 184 of the 209 pages are p-block.** PDF **185–209**
  (printed 654–678) are **Chapter 18, "An Introduction to the Transition
  Elements"** — d-block, and outside this project. The p-block denominator for
  this file is therefore **184**. *Those 25 pages are directly useful to the
  d-block work another session is running.*
- **Chapter boundaries, confirmed from the scan** (not inferred from lengths):
  Ch. 14 Group 15 = PDF 1–64 (printed 468–531) · Ch. 15 Group 16 = PDF 65–113
  (printed 532–580) · Ch. 16 Group 17 = PDF 114–166 (printed 582–634) ·
  Ch. 17 Group 18 = PDF 167–184 (printed 635–651).
- **Page offset shifts by one.** printed = PDF + 467 up to ≈PDF 65, then
  printed = PDF + 468 from ≈PDF 90. Confirmed at p3→470, p29→496, p65→532 and
  at p90→558, p140→608, p175→643. Recorded, not smoothed over.
- **Triage totals** (recounted range by range and asserted to sum to 209, with no page
  double-labelled and none unlabelled): `FULL — UNIQUE` **38** ·
  `FULL — PARTIALLY UNIQUE` **98** · `SAMPLED — DUPLICATE OF FILE 8` **32** ·
  `VISUAL ONLY` **2** · `QUESTION GAP` **9** · `NOT RELEVANT` **30** (5
  further-reading/chapter-close + 25 d-block) · `UNCLEAR` **0**.
- **Deeply inspected and fully registered: 8 / 184 (Vision).**
  - **PDF 1–6 = printed 468–473** (Addenda 7, 7a): 14 topics, ~50 species, 13
    preparations/reactions, a melting/boiling table, 6 colour observations, a
    uses-and-hazards block, 5 visuals, 9 JEE traps, 0 new contradictions.
  - **PDF 58–59 = printed 525–526** (Addendum 9), `FULL — UNIQUE`, both sections
    absent from file 8: 8 topics, ~30 species, 8 reactions, phosphazene bond-length
    data, 4 visuals, 7 JEE traps, **1 new contradiction (item 54)**. Adds two
    compound classes (phosphazenes, pnictogen organometallics) and a **third
    back-bonding type, dπ–dπ**, which the registers did not have.
  - **PDF 107–108 = printed 575–576** (Addendum 10). p107 `FULL — PARTIALLY
    UNIQUE` (halides tail), p108 `FULL — UNIQUE` (sulphur–nitrogen compounds,
    absent from file 8): 6 topics, ~20 species, 8 reactions, the S₄N₄ bond-length
    argument, 1 MO case (E41), 3 visuals, 7 JEE traps, **2 `[UNCLEAR]` items**
    and 0 new contradictions.
  - **PDF 145–146 = printed 613–614** (Addendum 11). Halogen **standard reduction
    potentials**, absent from file 8. Identified as **Latimer diagrams**, not
    Frost/Ebsworth, with separate **acid (H⁺ activity 1)** and **basic (OH⁻
    activity 1)** versions. Every adjacent and skip-step potential transcribed for
    F, Cl, Br and I; the four species the source flags as disproportionating in
    base recorded; 7 topics, ~12 new species, 4 reactions, 1 MO cross-reference
    (E42, held at pending verification), 3 visuals, 8 JEE traps, **1 new
    `[UNCLEAR]`** (the acid-diagram asterisk legend), 0 new contradictions.
  - **PDF 161–162 = printed 629–630** (Addendum 12). **Halogen cations and
    superacid media**, absent from file 8: 9 topics, ~35 species, 10 reactions,
    the [Br₂]⁺ 2.15 Å / Br₂ 2.27 Å bond-length evidence, 1 MO case (**E43**),
    4 visuals, 9 JEE traps, **1 new contradiction (item 55)**.
  - **PDF 95–96 = printed 563–564** (Addendum 13). **Selenium and tellurium
    oxoacids and the selenyl oxohalides**, absent from file 8: 4 topics, ~20
    species, the coordination-number change from tetrahedral H₂SO₄/H₂SeO₄ to
    **octahedral Te(OH)₆**, 3 visuals, 7 JEE traps, **1 new contradiction (item
    56)**. p95's polythionate and peroxoacid material duplicates §10.52 and is
    cross-referenced, not re-registered.
  - **PDF 68–73 = printed 535–540** (Addendum 14), the six-page **Group 16
    occurrence, extraction and industrial recovery** range, absent from file 8
    entirely: 16 topics, ~30 new species (plus 8 expanded), the six-route sulphur
    share table, the Frasch three-pipe mechanism, Table 15.3's 17 sulphide ores,
    the wet-versus-dry deposition distinction, Se/Te recovery from copper anode
    sludge, and a complete **polonium** section. 5 visuals, 11 JEE traps, **0 new
    contradictions** — every printed equation balances.
  - **PDF 20–23 = printed 487–490** (Addendum 15). Liquid ammonia as a solvent
    system, **hydrogen azide and the azides in full**, fertilisers, and a **second
    set of Latimer diagrams — Group 15, acid and basic** — all absent from file 8:
    11 topics (A239–A249), ~20 species each registered separately, 5 balance-checked
    equations, **1 MO case (E44)**, 6 visuals, 9 JEE traps, **1 new contradiction
    (item 57)**. Printed 490 was re-rendered at 300 dpi and rotated because the
    165 dpi image was not safe to transcribe.
  - **PDF 24–27 = printed 491–494** (Addendum 16), closing range 20–27. Biological
    fixation (*Rhizobium*, nitrification), transition-metal dinitrogen complexes and
    the titanium cycle, the cyanamide process, **Haber–Bosch in full** with catalyst
    preparation and hydrogen sourcing, ammonia production and uses, nitrate
    environmental chemistry, and **urea and the superphosphates with their
    compositions and balanced equations**: 16 topics (A250–A265), 5 visuals,
    9 JEE traps, **2 new contradictions (items 58, 59)**. All five fertiliser and
    cyanamide equations balance-checked; all balance.

**Page-status fields for the deeply read pages** (triage label kept visible
alongside the deep-read outcome, as required):

| PDF | Printed | Triage label | Deep-read outcome |
|---|---|---|---|
| 1–5 | 468–472 | `FULL — UNIQUE` | `DEEP READ — UNIQUE REGISTERED` |
| 6 | 473 | `FULL — PARTIALLY UNIQUE` | `DEEP READ — PARTIAL ADDITIONS REGISTERED` |
| 58 | 525 | `FULL — UNIQUE` | `DEEP READ — UNIQUE REGISTERED` |
| 59 | 526 | `FULL — UNIQUE` | `DEEP READ — UNIQUE REGISTERED` |
| 107 | 575 | `FULL — PARTIALLY UNIQUE` | `DEEP READ — PARTIAL ADDITIONS REGISTERED` |
| 108 | 576 | `FULL — UNIQUE` | `DEEP READ — UNIQUE REGISTERED` |
| 145 | 613 | `FULL — UNIQUE` | `DEEP READ — UNIQUE REGISTERED` |
| 146 | 614 | `FULL — UNIQUE` | `DEEP READ — PARTIAL ADDITIONS REGISTERED` (lower half duplicates §10.63) |
| 161 | 629 | `FULL — UNIQUE` | `DEEP READ — UNIQUE REGISTERED` |
| 162 | 630 | `FULL — UNIQUE` | `DEEP READ — UNIQUE REGISTERED` |
| 95 | 563 | `FULL — UNIQUE` | `DEEP READ — PARTIAL ADDITIONS REGISTERED` (polythionates/peroxoacids duplicate §10.52) |
| 96 | 564 | `FULL — UNIQUE` | `DEEP READ — UNIQUE REGISTERED` |
| 20 | 487 | `FULL — UNIQUE` | `DEEP READ — UNIQUE REGISTERED` |
| 21 | 488 | `FULL — UNIQUE` | `DEEP READ — UNIQUE REGISTERED` |
| 22 | 489 | `FULL — UNIQUE` | `DEEP READ — UNIQUE REGISTERED` |
| 23 | 490 | `FULL — UNIQUE` | `DEEP READ — UNIQUE REGISTERED` |
| 24 | 491 | `FULL — UNIQUE` | `DEEP READ — UNIQUE REGISTERED` |
| 25 | 492 | `FULL — UNIQUE` | `DEEP READ — UNIQUE REGISTERED` |
| 26 | 493 | `FULL — UNIQUE` | `DEEP READ — UNIQUE REGISTERED` |
| 27 | 494 | `FULL — UNIQUE` | `DEEP READ — UNIQUE REGISTERED` |
| 68 | 535 | `FULL — UNIQUE` | `DEEP READ — UNIQUE REGISTERED` |
| 69 | 536 | `FULL — UNIQUE` | `DEEP READ — UNIQUE REGISTERED` |
| 70 | 537 | `FULL — UNIQUE` | `DEEP READ — UNIQUE REGISTERED` |
| 71 | 538 | `FULL — UNIQUE` | `DEEP READ — UNIQUE REGISTERED` |
| 72 | 539 | `FULL — UNIQUE` | `DEEP READ — UNIQUE REGISTERED` |
| 73 | 540 | `FULL — UNIQUE` | `DEEP READ — UNIQUE REGISTERED` |

**Separate counts, recounted in code rather than tallied by hand.** All pages
triaged **209** · p-block pages **184** · **fully unique pages 37** (the Addendum-8
figure was 38; **PDF 107 was reclassified to partially unique in Addendum 10**
once the S–N section turned out to start in its last paragraph) · **fully unique
pages deeply inspected 28** · **fully unique pages remaining 9** · partially
unique pages compared **2 of 97** · duplicate pages sampled **32** · visual-only
pages inspected **0 of 2** · question-gap pages audited **0 of 9** ·
not-relevant pages **30** · pages with unclear content **3**.

**Total pages deeply inspected 30** = 28 fully unique + 2 partially unique
(PDF 6 and PDF 107). All 30 yielded additions; **none has returned
`DEEP READ — NO NEW CONTENT`.** The audited-page denominator is not reduced for
any page.

**The 9 fully unique pages still outstanding, listed to prove the count:**
**54, 55, 56, 57** (phosphorus sulphides) · **109, 110** (organo derivatives) ·
**114, 115, 116** (Group 17 occurrence and extraction).

**Range PDF 20–27 is closed — all eight pages deeply read and registered.**
- **Sections found to be absent from file 8 altogether** — the queue that
  justifies reading this file at all: **Phosphazenes and cyclophosphazenes**
  (PDF 58–59) · **Compounds of sulphur and nitrogen, S₄N₄** (107–108) ·
  **Standard reduction potentials, acidic and basic diagrams** (145–146) ·
  **Basic properties of the halogens — halogen cations I₂⁺** (161–162) ·
  **Oxoacids of selenium and tellurium** (95–96) · **Group 16 extraction and
  uses** (68–73) · **Sulphides of phosphorus** (54–57) · **Organo derivatives
  and haemoglobin** (109–110), plus **Nitrogen fixation** (22–27) and
  **Hydrogen azide and the azides** (20–21), both flagged absent from the course
  since the first register.
- **Map refinement from the deep read:** printed 526 carries the tail of the
  phosphazene section *and* the opening of **Organometallic compounds**, which the
  Addendum 8 map did not separate. Corrected: **PDF 59–60 = Organometallic
  compounds (`FULL — UNIQUE`), PDF 61 = Further reading (`NOT RELEVANT`)**. Bucket
  totals unchanged.
- **`[UNCLEAR]` items outstanding — 3.** Two on PDF 108 / printed 576: the four
  larger bicyclo S–N formulae, and the coefficients of the S₄N₄ + NaOH + H₂O
  hydrolysis equation. One on PDF 145 / printed 613: whether the asterisk-like
  marks beside HClO₂, HOBr and HOI in the **acid** Latimer diagram carry the same
  "disproportionates" meaning as the footnoted asterisks on the basic diagram —
  that page shows no legend. **None is guessed; all three are marked unsafe to
  publish until re-read.**
- **Next range for deep reading: PDF 54–57 (printed 521–524)** — the phosphorus
  sulphides. Then 109–110 (organo derivatives, where the two PDF-108 `[UNCLEAR]`
  items are to be checked) and 114–116 (halogen occurrence and extraction).
- **`FULL — UNIQUE`: 28 of 37 done, 9 remaining** — exactly 54–57, 109–110 and
  114–116. After those: 9 `QUESTION GAP`, 2 `VISUAL ONLY`, then 95 of 97
  `FULL — PARTIALLY UNIQUE`.
- **Destination:** Sections 7–19, as gap-fill on top of Addenda 1–4 — **IN
  PROGRESS**

## 5. Points needing NCERT confirmation (source absent)

- CO/haemoglobin affinity: 200× vs 300× — course uses ~300 with the range noted.
- Graphite interlayer spacing: 335 vs 340 pm — course leads with 335.
- Electronegativity sets (Pauling vs oxidation-state-specific) differ between
  sources — course uses the NCERT-style set from the coaching material.
- Whether PbBr₄ is to be treated as non-existent alongside PbI₄.
