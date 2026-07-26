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
- **Pages:** 172 · **Inspected:** **113 / 172 (Text)** — contents, the full section index,
  and complete deep reads of **four of the six parts**, each including its question sets
  and answer key:
  - **Part 3 — Group 15 — pp. 448–482** (extracted lines 4003–6220), §10.35–10.45.
  - **Part 4 — Group 16 — pp. 483–512** (extracted lines 6221–8088), §10.46–10.55.
  - **Part 5 — Group 17 — pp. 513–541** (extracted lines 8089–9991), §10.56–10.66.
  - **Part 6 — Group 18 — pp. 542–558** (extracted lines 9992–11169), §10.67–10.74,
    **plus the chapter-wide Miscellaneous Questions** on pp. 553–558, which range over
    all six groups.
- **The extracted text ends at line 11169 (p. 558).** Groups 15–18 are therefore read in
  full; nothing follows Group 18 in this file.
- **Cumulative harvest** recorded in `MASTER_REGISTERS.md` (main body + Addenda 1–4):
  **112 topics, ~430 species, ~275 reactions, 72 structures, 26 MO cases, 58 visuals,
  95 JEE traps, 31 contradictions/source errors.**
- **Still to read in this file:** extracted lines **107–4003 = Parts 1 and 2, Groups 13
  and 14** (pp. ~380–447). That is the only remaining unread portion.
- **All named course gaps in this file are now closed:** §10.32, §10.34, §10.50, §10.53,
  §10.65, §10.66 and **§10.73 Structure and Bonding in Xenon Compounds** — the MOT
  section flagged from the outset.
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
| Files 7–11 (new five) | 1294 | **132** | 10.2 % |
| **Total project** | **1731** | **457** | **26 %** |

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

## 4a. A twelfth file exists that was not attached

`Downloads/p block/15161718.pdf` sits in the same folder as everything attached
and covers **Groups 15–18** by its name. It is **not** in the register above
because it was never attached. Attach it and it goes into the same pipeline.

## 5. Points needing NCERT confirmation (source absent)

- CO/haemoglobin affinity: 200× vs 300× — course uses ~300 with the range noted.
- Graphite interlayer spacing: 335 vs 340 pm — course leads with 335.
- Electronegativity sets (Pauling vs oxidation-state-specific) differ between
  sources — course uses the NCERT-style set from the coaching material.
- Whether PbBr₄ is to be treated as non-existent alongside PbI₄.
