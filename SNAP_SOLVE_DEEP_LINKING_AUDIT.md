# Snap & Solve — Deep Linking Audit (Week 8)

**Goal:** turn Snap & Solve from "question → solution" into an entry point of the
Chemistry OS by surfacing links from a solved problem into the Learn ecosystem
(notes, formulas, PYQs, mechanisms, reagents, important orders, tests).

---

## Architecture decision — the locked contract is preserved

Snap & Solve is under an **immutable-architecture contract** (schema is SSOT, the
`/api/snap-solve` route owns all inference, `SnapSolveResult` is pure
presentational). This feature was built to honour that:

| Locked invariant | Status |
|---|---|
| `SnapSolveResponseSchema` unchanged, not duplicated | ✅ untouched |
| `/api/snap-solve` owns OCR / classification / confidence / fallback | ✅ untouched |
| AI prompt | ✅ not rewritten (not necessary) |
| `SnapSolveResult` = pure rendering of props | ✅ still pure — new panels render only derived props |
| Equations via `lib/renderChemistry` | ✅ reused, no new renderer |
| Page owns `activeSolution` state | ✅ unchanged |

**How linking stays lock-compatible:** `lib/ai/snapSolveLinks.ts` is a *pure,
deterministic resolution layer*. It does **not** re-infer classification,
confidence, or the solution. It reads the API's **own semantic outputs**
(`classification`, `recommendedPractice`, `parsedProblem`, `solution` text) and
resolves them against existing SSOT catalogues to produce links. No new response
schema; `SnapSolveLinks` is a view-model, not a duplicate of the response schema.

---

## Path correction

Task referenced `app/ai-lab/snap-solve/page.tsx` — that path does not exist. The
real page is **`app/snap-solve/page.tsx`** (the only renderer of
`SnapSolveResult`). The page is a thin state-owner and required **no change**;
all deep-linking lives inside `SnapSolveResult`, so it propagates automatically.

---

## Files changed

| File | Change |
|------|--------|
| `lib/ai/snapSolveLinks.ts` | **New** — pure derivation layer (resolution only). |
| `components/SnapSolveResult.tsx` | **Edited** — additive deep-link panels + empty states. |
| `SNAP_SOLVE_DEEP_LINKING_AUDIT.md` | **New** — this audit. |
| `app/snap-solve/page.tsx` | **No change needed** (linking is inside the component). |

---

## Linking sources used (existing SSOT only)

| Source | Module | Route |
|--------|--------|-------|
| Formula cards | `masterFormulas` (`lib/masterSyllabus/formulas`) | `/vault/formulas` |
| Chapter notes | `NOTES_CHAPTERS` (`lib/notesEngine`) | `/notes` |
| PYQs (real counts) | `ALL_PYQ_QUESTIONS` (`lib/pyq`, read-only) | `/pyq` |
| Named-reaction mechanisms | `NAME_REACTIONS` + `HIGH_YIELD` (`lib/nameReactions`) | `/learn/reactions/[slug]` |
| Reagents | `REAGENTS` (`lib/chemistry`) | `/reagents` |
| Important orders | `IMPORTANT_ORDERS` (`lib/importantOrders`) | `/important-orders` |
| Trends (Periodic) | static | `/periodic-trends` |

A 9-entry `CHAPTER_INDEX` aligns each chapter's notes / formula-vault key / PYQ
enum name / aliases so one detected chapter fans out to all catalogues.

---

## UI panels added (inside `SnapSolveResult`, mobile-first)

1. **Concept Detected** — API classification + resolved chapter + topic.
2. **Learn This Topic** — notes chapter link(s) (+ Trends Explorer for Periodic).
3. **Formula Cards** — up to 4 formula cards from the detected chapter.
4. **Related PYQs** — real question count for the detected PYQ chapter.
5. **Related Mechanisms & Reagents** — named reactions found in the solution,
   plus matched reagents and important orders.
6. **Practice Next** — the API's `recommendedPractice` chips + tests placeholder.

All panels are appended below the existing solution render; nothing existing was
removed or restructured.

---

## Empty states added

| Panel | Empty message |
|-------|---------------|
| Formula Cards | **"No linked formula yet."** |
| Related PYQs | **"No PYQ available yet."** |
| Related Mechanisms | **"No mechanism link for this topic yet."** |
| Learn This Topic | "No linked notes yet — browse all chapter notes." |

Empty states appear whenever resolution yields nothing — **no fake links, no
fabricated PYQs**.

---

## No-fake-link guarantees

- PYQ links appear **only** when `ALL_PYQ_QUESTIONS` actually contains questions
  for the detected chapter (count > 0); the count is shown verbatim.
- Mechanism links appear **only** for named reactions whose exact name occurs in
  the solved text, and deep-link to the real `reactionSlug` route.
- Formula links come from real `masterFormulas` entries for the detected chapter.
- Reagent/order links come from catalogue entries whose name/property occurs in
  the solved text.

---

## Follow-ups (out of scope)

- Wire the **Practice tests** placeholder to a real per-topic test bank.
- Consider adding a URL query on `/pyq` and `/notes` so links can pre-open the
  detected chapter (both are currently client-state pages).
