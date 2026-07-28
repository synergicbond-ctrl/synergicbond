# P-block session handoff

**Read this first, then `SOURCE_COVERAGE_REGISTER.md` for page accounting and
`MASTER_REGISTERS.md` for the content itself.**

Last updated: 2026-07-27 (Addendum 20, `QUESTION GAP` queue closed) · Branch:
`feat/p-block-groups-13-14` (PR #22 open). **Addendum 20's three edited files are
not yet committed — see §5 for the isolated-index procedure.**

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
| **Corpus** | **606 / 1915 pages (32 %)** |
| Files 1–6 | 325 / 437 |
| File 7 (JD Lee 5th ed., whole book) | 5 / 1057 |
| **File 8** (JD Lee adapted, Ch. 10, all six groups) | **172 / 172 — COMPLETE** |
| File 9, 10 (handwritten notes) | 0 / 40, 0 / 11 — vision only, OCR garbled |
| File 11 (noble gas notes) | 14 / 14 |
| **File 12** (`15161718.pdf`, JD Lee 5th ed. Ch. 14–17) | 209/209 triaged · **90 / 184 deeply read** |

**Register IDs:** Topics **A1–A440** (contiguous, no gaps, no duplicates, every
one a table row) · Visuals **V172** · MO cases **E45** · Traps and numbered items
**324** · Contradictions **25–80** · Source defects **D1–D14** · `[UNCLEAR]` **5
distinct items**.

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

**Triage, recounted in code from the page-map rows (Addendum 21 §G):** 37 fully
unique · **99** partially unique · **33** duplicates · **1** visual-only ·
9 question-gap · 30 not relevant · 0 unclear. **Sums to 209; no page double-
labelled, none unlabelled.** The long-quoted "97 partially unique" was the
*pending* count, not the total, and was never incremented when PDF 107 was
reclassified into the bucket — corrected.

### `FULL — UNIQUE` is CLOSED at 37 / 37

Pages 1–5, 20–27, 54–59, 68–73, 95–96, 108, 109–110, 114–116, 145–146, 161–162.
Enumerated page by page, not derived by subtraction. PDF 107 was reclassified to
partially unique mid-audit and was still deeply read, so 38 − 1 = 37.

### `QUESTION GAP` is CLOSED at 9 / 9 (Addendum 20)

Pages 62–64, 112–113, 165–166, 181–182 — enumerated, not subtracted. Eight
returned `AUDITED — CONCEPT REGISTERED`; **PDF 62 returned
`AUDITED — NO NEW CHEMISTRY`**. Together with **PDF 114's
`DEEP READ — NO NEW CONTENT`**, those are the **only two pages in the whole
file-12 audit that yielded nothing new** — both recorded, neither hidden, and
neither reduces the audited-page denominator.

**What the problem sets are worth, and what they are not.** They carry **no answer
key**, so a question proves a fact is examinable without establishing the fact.
Where a question asks for a product, Addendum 20 registers the **pairing** and
explicitly does not invent the product. That discipline produced a by-product
worth acting on: **five gaps in the registers that only the questions exposed** —
the fluorine-cell electrolyte (KHF₂) and Moissan apparatus, the roster of
fluorinating agents used instead of F₂, HF with uranium and with graphite, the
AgNO₃ silver-halide ladder with ammonia, and the boiling point of helium.

---

## 4. NEXT WORK — start here

**Every queue except `FULL — PARTIALLY UNIQUE` is now closed.**

**PDF 117–122 (Addendum 22), PDF 131–136 (Addendum 23), PDF 137–138
(Addendum 24), PDF 167–170 (Addendum 25), PDF 139–144 (Addendum 26),
PDF 123–124 (Addendum 27), PDF 145–152 (Addendum 28) and PDF 153–158
(Addendum 29) are done.**

1. **63 remaining `FULL — PARTIALLY UNIQUE` pages**, in section-sized ranges.
   **Next: PDF 159–160 (printed 627–628, polyhalides) — triaged `SAMPLED —
   DUPLICATE OF FILE 8`, but Addendum 25 showed a `SAMPLED` label doesn't
   guarantee no new content either, so a quick check is still worthwhile.**
   **Then PDF 161–162 (printed 629–630, basic properties of the halogens —
   halogen cations, `FULL — UNIQUE`, absent from file 8 entirely) and
   PDF 163–164 (printed 631–632, pseudohalogens, `SAMPLED — DUPLICATE OF
   FILE 8`).** These three ranges close out the rest of Chapter 16 (Group 17)
   before Chapter 17 (Group 18) resumes.

2. **Important finding from Addendum 28, reinforced by Addendum 29's own
   `A420`/`A435` cross-references: check the full registers, not just the
   file-8-equivalent column, before assuming any page is new** — a
   `FULL — UNIQUE` or `SAMPLED` label describes the relationship to file 8
   only, not to the whole corpus.

3. **Still-open gaps (only two remain):** **HF with graphite** — the source
   gives F₂ with graphite (A315), not HF, so the question-page pairing stands
   unanswered — and the **AgNO₃ colour/ammonia ladder** — A352 establishes
   AgCl/AgBr/AgI as insoluble and AgF as the exception, but colours and
   ammonia behaviour are not in the source. **The boiling point of helium is
   closed** — it was already registered at A179 before this shift began; see
   Addendum 25 §A for the bookkeeping correction.

4. **Before teaching from Table 16.13, read contradictions 69–71.** Its
   arithmetic does not close, and the failure is systematic rather than random.
   The qualitative three-factor account of HF's weakness (A350) is unaffected.
   **Before teaching liquid helium, read contradiction 74** — the source calls
   it a superconductor; it is a superfluid, and the two are not the same thing.
   **Before using the Cl₂O₆/N₂O₄ equation, read contradiction 75** — the printed
   form is unbalanced (present in both editions); use
   `2Cl₂O₆ + N₂O₄ → 2ClO₂ + 2[NO₂]⁺[ClO₄]⁻`. **Before quoting the Faraday
   constant, read contradiction 76** — the number 96 486 is right, the printed
   unit "kJ mol⁻¹" is wrong (it is C mol⁻¹). **Before quoting any interhalogen
   synthesis equation from PDF 154 (printed 622), read contradiction 79** — six
   equations there under-coefficient the product against an X₂ reactant.
   **Before quoting `IF₅+KI→[IF₆]⁻`, read contradiction 80** — the reagent
   should be KF, not KI.

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

**Validate in code, not by hand.** Four counting mistakes have been caught this way
and all are recorded rather than hidden: triage buckets once summed to 204 instead
of 209; topic IDs A223–A238 and A246–A249 were written as prose paragraphs so the
row-based check reported a lower maximum than really existed; **visual IDs V45, V46
and V89 had the same prose-only defect** (found and repaired in Addendum 20 §J1 —
the rule had been applied to topics and never carried over to visuals); and the
coverage register's "deeply inspected" headline had gone stale at 8 / 184 while the
authoritative recounted-in-code block said 39. **Every ID in every series must be a
table row**, and the check must compare the table maximum against the maximum
appearing anywhere in the file — run it for **A, V and E**, not just A.

**Do not "repair" V33–V44's double rows.** Each appears twice on purpose: the
original Group 17 set and Addendum 3's refined restatement, which supersedes it.
Same visual, not an ID collision. Documented in Addendum 20 §J2.

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

**The source itself now backs this split.** Chapter 17's problem 7 (printed 650,
registered as **A308**) asks the reader to discuss the noble-gas compounds "with
particular reference to … the participation of d orbitals in bonding by elements
of the s- and p-blocks" — the author treating central-atom d-orbital participation
as an **open interpretive question**, in his own words, in the parent edition.
That is the first explicit textual support in the corpus for keeping the three
columns apart.

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

**Two more parked by Addendum 20, and one of them is not resolvable by any
source.** **66** — printed 650's claim that noble-gas binary compounds are
"fluorides *and oxides* of Kr, Xe and Rn", when no krypton or radon oxide appears
in the source or the registers — needs Greenwood or a noble-gas review. **65** —
printed 530 pairing ammonia with an *acidified* hypochlorite solution, against the
chapter's own alkaline Raschig conditions — is different: **the book prints no
answer key anywhere**, so this corpus cannot decide whether "acidified" is a slip
or a deliberate test of condition-dependence. Attaching a reference text will not
settle it; only an answer key or the author would.

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
