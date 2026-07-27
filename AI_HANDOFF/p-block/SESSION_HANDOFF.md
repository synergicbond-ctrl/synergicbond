# P-block session handoff

**Read this first, then `SOURCE_COVERAGE_REGISTER.md` for page accounting and
`MASTER_REGISTERS.md` for the content itself.**

Last updated: 2026-07-27 · Last commit: `8d704ae1` · Branch:
`feat/p-block-groups-13-14` (PR #22 open) · local and remote in sync.

---

## 1. What this project is

A commercial JEE Advanced p-block chemistry course for synergicbond.com. Twelve
source PDFs are being audited exhaustively into master registers, and the
registers then drive original student-facing lessons. Nothing is copied — the
registers capture facts and source locations; the lessons must be original prose,
original diagrams, original questions.

**Two clones exist.** `/Users/mritunjayshukla/Documents/Synergic Bond` is the
canonical one and all work happens there.
`/Users/mritunjayshukla/workspace/synergicbond` is stale — do not use it, and note
that its dev server is separately broken by an unrelated RSC-manifest fault.

---

## 2. Coverage state

| | |
|---|---|
| **Corpus** | **555 / 1915 pages (29 %)** |
| Files 1–6 | 325 / 437 |
| File 7 (JD Lee 5th ed., whole book) | 5 / 1057 |
| **File 8** (JD Lee adapted, Ch. 10, all six groups) | **172 / 172 — COMPLETE** |
| File 9, 10 (handwritten notes) | 0 / 40, 0 / 11 — vision only, OCR garbled |
| File 11 (noble gas notes) | 14 / 14 |
| **File 12** (`15161718.pdf`, JD Lee 5th ed. Ch. 14–17) | 209/209 triaged · **39 / 184 deeply read** |

**Register IDs:** Topics **A1–A296** (contiguous, no gaps, no duplicates) ·
Visuals **V136** · MO cases **E45** · Traps and numbered items **247** ·
Contradictions **25–64** · `[UNCLEAR]` **3 distinct items**.

---

## 3. File 12 — the differential audit

It is **J.D. Lee 5th ed. Chapters 14–17**, a **pure scan** (zero extractable
text), and the **parent edition of file 8**. So it is read *differentially* — for
what the adapted edition trimmed. Agreement between the two is **one author in two
editions, never independent verification.**

**Only 184 of its 209 pages are p-block.** PDF 185–209 are Chapter 18, transition
elements — out of scope here, but **directly useful to the d-block work another
session is running.**

Chapter boundaries, confirmed from the scan: Ch. 14 G15 = PDF 1–64 · Ch. 15 G16 =
65–113 · Ch. 16 G17 = 114–166 · Ch. 17 G18 = 167–184. Page offset is printed =
PDF + 467 early, + 468 from about PDF 90.

**Triage:** 37 fully unique · 97 partially unique · 32 duplicates · 2 visual-only ·
9 question-gap · 30 not relevant · 0 unclear.

### `FULL — UNIQUE` is CLOSED at 37 / 37

Pages 1–5, 20–27, 54–59, 68–73, 95–96, 108, 109–110, 114–116, 145–146, 161–162.
Enumerated page by page, not derived by subtraction. PDF 107 was reclassified to
partially unique mid-audit and was still deeply read, so 38 − 1 = 37.
**PDF 114 is the only page in the whole audit that returned
`DEEP READ — NO NEW CONTENT`.**

---

## 4. NEXT WORK — start here

1. **9 `QUESTION GAP` pages** — PDF **62–64, 112–113, 165–166, 181–182**.
   Register the tested chemistry only, never the question wording. Each page must
   end as `AUDITED — CONCEPT REGISTERED` or `AUDITED — NO NEW CHEMISTRY`.
   Answer-key errors become contradiction items.
2. **2 `VISUAL ONLY` pages** — PDF **171–172** (Table 17.3, xenon structures).
   Register what the visual conveys and the original replacement required.
3. **95 remaining `FULL — PARTIALLY UNIQUE` pages**, in section-sized ranges,
   highest marginal value first: occurrence/extraction → less-common compounds →
   structures → property tables → uses/hazards → numerical data.

After file 12: the two handwritten sources (vision required), then JD Lee 5th ed.
Ch. 12–13.

---

## 5. Working rules that matter

**Git in this clone is hostile.** `git status` and `git commit` **hang** (index
refresh on the iCloud-synced volume); pushes routinely take over 10 minutes and
may time out — always re-check whether the commit actually pushed. Use
**isolated-index plumbing** for every commit:

```
export GIT_INDEX_FILE=<tmp>; git read-tree HEAD
git update-index --add <only the p-block files>
TREE=$(git write-tree); C=$(git commit-tree $TREE -p HEAD -F msg)
unset GIT_INDEX_FILE; git update-ref refs/heads/<branch> $C <old>
```

**Another session has 10 staged files** — `app/notes/d-block/*`,
`docs/content-audits/d-block-source-register.md`, `lib/engine/programSpec.ts`,
`lib/notes/chapterCatalog.ts`. Never commit, unstage, reset, stash, clean or
checkout them. Never force-push.

**Validate in code, not by hand.** Two counting mistakes were caught this way and
both are recorded rather than hidden: triage buckets once summed to 204 instead of
209, and topic IDs A223–A238 and A246–A249 were written as prose paragraphs so the
row-based check reported a lower maximum than really existed. **Every topic ID must
be a table row**, and the check must compare the table maximum against the maximum
appearing anywhere in the file.

**Never guess a number or a formula.** Use `[UNCLEAR — file, PDF page, printed
page, location]`. Re-render at higher resolution first — printed 490 was unreadable
at 165 dpi and fine at 300 dpi rotated.

**Balance every equation** and record the source form separately from the
correction. Fourteen source defects have been caught this way so far.

---

## 6. Bonding-model policy — non-negotiable

Three separate columns, never merged:

- **Experimental evidence** — bond lengths, bond equality, geometry, magnetism,
  conductivity, reactivity.
- **Historical / examination model** — conventional hybridisation, pπ–dπ, dπ–dπ,
  expanded octets. Kept, because examinations use it and it often predicts
  correctly.
- **Modern interpretation** — delocalisation, multicentre bonding, charge
  distribution, negative hyperconjugation, MO theory. **Marked PENDING
  VERIFICATION** wherever Greenwood would be needed.

Specific rulings already fixed: the weak F–F bond is **lone-pair repulsion**
(Coulson), with Mulliken's p–d hybridisation as *history only*; Born–Haber and
energy-cycle arguments are **thermodynamics, registered as topics, never as MO
entries**; and substantial central-atom d-orbital participation is **never**
promoted to the preferred modern account.

---

## 7. Blockers

**NCERT and Greenwood & Earnshaw are both absent from the corpus.** No claim of
verification from either appears anywhere, and it must stay that way. Attaching
either would let several parked contradictions be resolved instead of flagged —
notably **54** (phosphazene bonding), **62** ((SN)ₓ resistivity magnitude) and
**63** (oxyhaemoglobin side-on versus end-on geometry).

---

## 8. Visual infrastructure — built, one gap

`app/notes/p-block/_visuals/` holds `theme.ts`, `Frame.tsx`, `MoleculeDiagram.tsx`,
`MODiagram.tsx`, `Charts.tsx`, `Bonding.tsx` (OrbitalDiagram, MulticentreBond,
ThermalMap, VisualCaption) and `registry.tsx`. Lessons invoke them from prose via
`~~~viz` JSON fences — **tilde fences, because `content.ts` is a `String.raw`
literal that a backtick would terminate.**

Four proof visuals are live: diborane 3c–2e bridges, Al₂Cl₆'s 4-electron bridge,
the six-panel silicate classification, and a supporting orbital diagram. All seven
viz blocks parse, resolve to registered components, and carry caption + describe.

**Gap:** browser rendering has **never been verified in the correct clone.**
Verification so far is strict typecheck plus offline registry validation only —
do not claim more than that.
