# Program Syllabus Audit — Official Sources & Program Isolation

Date: 2026-07-05 · Sources: 7 uploaded official documents (GATE 2026 CY · JEE Main NTA ·
JEE Advanced 2026 ×2 · NSEC · ISC Revised 2026 Cl. XII · CBSE XI–XII).
Architecture: `lib/programSyllabus/` (reusable schema, one file per program) +
`components/programs/ProgramSyllabusTree.tsx` (one isolation-safe renderer) +
`lib/boards.ts` (board resolver: CBSE ↔ ISC never mixed).

## Audit table

| Program | Chapters/Units | Question Types | Practicals | Projects | Mocks | PYQs | Analytics |
|---|---|---|---|---|---|---|---|
| NEET Chemistry | 20 (verified SSOT, NEET-tagged only)¹ | SCQ · A–R · Statement · NCERT-Based (all verified bank) | — | — | ✅ real paper (45Q +4/−1) | ✅ verified bank | ✅ attempts-based |
| JEE Main Chemistry | 20 official units (NTA PDF) | SCQ (bank) · Integer · Numerical · Decimal · Scientific (AI auto-graded) — **no A–R/Matrix** | — | — | ✅ real paper (25Q) | ✅ verified bank | ✅ + Speed Analysis |
| JEE Advanced Chemistry | 37 official units (IIT PDF) | SCQ · Multi-Correct · Integer · Matrix · List · Paragraph · Numerical Response · Comprehension · Challenge | — | — | ✅ real paper (18Q +3/−1) | ✅ verified bank | ✅ + Speed Analysis |
| CBSE Class 11 | 9 official units + practicals² | 1/2/3/5 Mark · Case · Competency · HOTS (subjective = AI, board scheme) | ✅ 5 authored experiments | ✅ topics + template | ✅ custom generator | objective bank shared core³ | ✅ + Predicted Board Score |
| CBSE Class 12 | 10 official units + practicals² | same board set | ✅ 8 authored experiments | ✅ topics + template | ✅ custom generator | objective bank shared core³ | ✅ + Predicted Board Score |
| ISC Class 11 | 0 — **official doc not uploaded; honestly pending, never invented** | same board set (ready) | scaffold ready | scaffold ready | AI subjective only | — | ✅ engine ready |
| ISC Class 12 | 10 official units (ISC 2026 PDF) + Paper II scheme (15+10+5) | same board set | ✅ official 7-experiment scheme transcribed | ✅ Project 10 + File 5 marks | ✅ custom generator (AI subjective; objective pool honestly 0) | no verified ISC bank — honest | ✅ |
| NSEC Chemistry | 27 official units (I–XXVII) | Olympiad MCQ · Olympiad/Challenge/Conceptual problems (AI) | — | — | via test engine | no verified NSEC bank — honest | ✅ |
| GATE Chemistry (CY) | 21 official units in 3 sections (incl. Quantum, Group Theory, Spectroscopy, Adv. Thermo/Kinetics, Organometallics, Mechanisms) | MCQ · MSQ (AI self-graded) · NAT (AI auto-graded) | — | — | via test engine | no verified GATE bank — honest | ✅ + predictor tools |

¹ No NEET PDF in the uploaded set — tree derives from the verified master-syllabus SSOT
(NTA rationalized), stated on the page; upload the NTA PDF to pin verbatim.
² CBSE PDF text layer is glyph-corrupted (unextractable); unit tables verified structurally
(9 + 10 rows) and unit list confirmed against the founder-supplied official chapter list.
³ Board 1-mark objective pool draws on the shared verified chemistry bank scoped to the
class's chapters; board-specific *board-paper* PYQ banks remain to be sourced.

## Isolation fixes (verified in built HTML)

1. **Cross-exam tags removed** — `ExamSyllabus` no longer prints `NEET · JEE MAIN · …`
   on any page (legacy /neet /jee included). Grep of built output: zero matches.
2. **Hub trees isolated** — each program's tree name appears ONLY in its own hub HTML
   (verified for all five entrance/olympiad/gate hubs).
3. **CBSE ⇄ ISC separated** — ICSE board pages now render official ISC units via
   `lib/boards.ts`; CBSE-unique unit titles absent from ISC pages (verified); ISC Class 11
   shows the honest pending state.
4. **AI prompts board-correct** — /api/board-practice + board-examiner calls now speak
   the requesting board's name (CBSE/ISC/State Board), never another board's.
5. **Question-type matrices corrected to official lists** — JEE Main lost A–R/Statement/
   NCERT-Based (NEET-only formats); JEE Advanced gained the full official format set.
6. **Empty scope = empty pool** — a board without a verified bank can no longer fall
   back into another board's question pool (`selectObjective` fix).

## Gates
typecheck ✅ · lint ✅ 0 errors (2 pre-existing warnings) · build ✅ 174/174 pages.
