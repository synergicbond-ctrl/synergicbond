# Master Audit — Recent Chemistry Chapters

Working branch: `chore/chemistry-chapters-audit` (created from `origin/main` at `11ac0be`).
Started: 2026-08-01, in response to the "Synergic Bond — Complete Claude Handover" document.

This tracks real, verified status only. A chapter is not marked done until it has actually
been read, checked against a live rendering or the source repo, and typechecked. "Not started"
means exactly that — no claim of correctness is made either way.

## Priority-ordered chapter status

| # | Chapter | Status | Notes |
|---|---|---|---|
| 1 | Adsorption | **Done (this branch)** | See below. Not yet merged to `main`. |
| 2 | Surface Chemistry (12-part) | Not started | Adsorption is one sub-route of this chapter; the other 11 parts and the hub page are unaudited. |
| 3 | S-Block Elements | **Done (this branch)** | Route de-duplication only — see below. Content itself (both old and new versions) not independently fact-checked against a primary source in this pass. |
| 4 | Environmental Chemistry | Not started | |
| 5 | Salt Analysis | Not started | |
| 6 | Hydrogen | Not started | |
| 7 | Polymers | Not started | |
| 8 | Formal Charges | Not started | |
| 9 | Liquid Solutions | Not started | |
| 10 | Chemical Kinetics | Not started | |
| 11 | Gaseous State | Not started | |
| 12 | Solid State | Not started | Also has a confirmed duplicate-route situation (`master/` 10-part vs `parts/` 23-file legacy) — noted, not yet investigated. |
| 13 | F-Block Elements | Not started | |
| 14 | Cross-chapter navigation | Partially touched | Only the one `UniversalChapterNavigator.tsx` entry for S-Block was updated as a side effect of the S-Block fix. No broader nav audit done. |

## What "done" means for the two completed items

### Adsorption (`app/learn/jee-advanced/surface-chemistry/adsorption/`)
- Removed a duplicated "Applications" section (a short and an expanded version were both present).
- Fixed a leftover raw `\ldots` LaTeX command rendering as visible text.
- Reordered sections to the doc's required flow.
- Replaced 24 NotebookLM-watermarked JPG/PNG figures (previously `display:none`'d, with a
  24-panel collage image standing in for them — the exact anti-pattern the handover doc
  describes) with 24 original hand-authored dark SVG diagrams.
- Deleted the 25 now-orphaned branded/collage files from `public/`.
- Verified: `tsc --noEmit` clean: all 24 SVGs are well-formed XML; all 24 visually inspected
  standalone in a local render (see `QA_REPORT.md`).
- **Not done**: I did not re-verify the chapter's prose against the source DOCX
  (`Adsorption_Complete_Strong_Notes (3).docx`) for scientific accuracy or completeness — the
  existing prose text was left untouched (except the one `\ldots` fix). No new derivations,
  examples, or JEE questions were added beyond what already existed. See "Scope note" below.

### S-Block Elements — duplicate-route reconciliation
- Two full, independent implementations existed: `/notes/s-block` (15-part, ~3,000 lines) and
  `/learn/jee-advanced/inorganic-chemistry/s-block` (20-section single page, rebuilt same-day
  per its commit `8f7ae2f`, but with zero inbound links anywhere in the codebase).
- Promoted the single-page version to canonical per explicit user decision:
  - `lib/engine/programSpec.ts` and `lib/notes/chapterCatalog.ts` now point to
    `/learn/jee-advanced/inorganic-chemistry/s-block`.
  - Split that page into a server component (`page.tsx`, now exports `metadata`) wrapping a
    client component (`SBlockMasterTextbook.tsx`), matching the pattern used elsewhere in the
    repo (e.g. Adsorption) — the previous version was `"use client"` with no metadata export.
  - Old `/notes/s-block` and `/notes/s-block/[part]` now `permanentRedirect()` to the new
    canonical route, rather than being deleted — the underlying content files
    (`app/notes/s-block/content/*.ts`, ~1,946 lines of prose) are left in place, unreferenced,
    in case they contain unique material worth mining later.
  - Verified the access gate is unaffected: both old and new routes fall under the
    `/learn/` and `/notes/` `PROTECTED_SUBPREFIXES` in `lib/access/contentAccess.ts`, and
    `s-block` is not in the free-chapter exemption list — the paywall is unchanged either way.
- **Not done**: no side-by-side fact check of whether the retired 15-part version contained
  any unique correct chemistry that the new 20-section version omits. This was a routing/duplication
  fix, not a content-coverage audit.

## Scope note on "scientific verification"

The handover document's 24-point framework asks for full scientific re-verification, derivation
rebuilds, and new original examples/questions per chapter. That has **not** been attempted yet
for any chapter, including Adsorption — the work done so far is structural/technical (dead
branding, duplicate sections, broken render architecture risk, dead-end routes) rather than a
line-by-line chemistry fact-check against NCERT/JEE Advanced primary sources. Flagging this
explicitly so it isn't mistaken for a completed scientific audit.
