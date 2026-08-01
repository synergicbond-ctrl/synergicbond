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
| 2 | Surface Chemistry (12-part) | **Audited, clean — no changes needed** | See below. |
| 3 | S-Block Elements | **Done (this branch)** | Route de-duplication only — see below. Content itself (both old and new versions) not independently fact-checked against a primary source in this pass. |
| 4 | Environmental Chemistry | **Fixed (this branch)** | See below. |
| 5 | Salt Analysis | **Audited — real content gap found, not fixed** | See below. |
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

### Surface Chemistry (12-part) — audit, no fixes required
- Architecture: clean. All 12 parts are thin (14-line) page wrappers around a shared
  `PartShell` + typed content components (`Card`, `Section`, `FormulaCard`, `SurfaceVisual`,
  etc. from `surface-chemistry-shared.tsx`) — no `dangerouslySetInnerHTML`, no raw HTML strings.
- Branding scan: 0 hits across all 4 content modules (`content/adsorption.tsx`,
  `content/catalysis.tsx`, `content/colloids.tsx`, `content/applications-mastery.tsx`, 2,233
  lines total).
- Raw LaTeX scan (`$$`, `\frac`, `\theta`, `\mathrm`, `\ldots`): 0 hits.
- `<img>` / `<Image>` tags: 0 — all figures are inline `SurfaceVisual` SVG components, already
  original and unbranded.
- Duplicate-heading check: no true duplicates within any single part; "Isosteric heat" appears
  twice across the whole 12-part chapter (once in the Adsorption-topic part, once presumably in
  the Part 12 mastery/recap) — expected for a recap section, not flagged as a bug.
- `/programs/jee-advanced/chapter/surface-chemistry/page.tsx` is a one-line re-export of the
  `/learn/...` page — not a separately maintained duplicate, despite the handover doc flagging
  this as a risk area to check.
- The 12-part hub page already cross-links to the dedicated Adsorption deep-dive page.
- **Not done**: scientific fact-checking against a primary source — same scope note as
  Adsorption applies here too.

### Environmental Chemistry (15-part) — fixed
- **Real bug found and fixed**: every part's internal `sourceNote` field (e.g. "Source coverage:
  NCERT pp. 406-407 and summary; Essential Sheet pp. 1-2; Environmental Chemistry Theory pp.
  181-182.") was being **publicly rendered** in the page header
  (`EnvironmentalChemistryPart.tsx`, was lines 303-305) — exactly the "source coverage / source
  note" text the handover doc explicitly says must never reach the public page. The doc's own
  commit history log shows an earlier commit (`aa6c3a0`, "Remove source coverage text from
  Environmental Chemistry") that apparently addressed this once before; it had regressed, or
  only covered a different code path. Fixed by removing the render, not the data — the
  `sourceNote` field stays in each part's data object (useful for `SOURCE_COVERAGE.md`-style
  auditing later) but is no longer shown to users.
- Architecture: clean data-object pattern (`PartData`), no `dangerouslySetInnerHTML`.
- Branding scan (text): 0 hits. Raw LaTeX scan: 0 hits.
- 24 hero images, all real `.webp` files present on disk, all referenced, no duplicates,
  semantic filenames (e.g. `greenhouse-effect.webp`, `bod-oxygen-crisis.webp` — not
  index-numbered like Adsorption's old figures).
- Spot-checked 3 of the 24 images directly (not all 24, given time budget): 2 clean, but
  **`fluoride-concentration.webp` has a real spelling error baked into the image itself** —
  the heading reads "A Matter of Concenration" (missing the "t" in "Concentration"). This is a
  raster-image defect, not something fixable by a code edit — it needs the source image
  regenerated or re-edited with an image tool, which wasn't available/attempted this pass.
  **Not fixed — flagged for follow-up.** The remaining 21 images were not individually opened;
  a full image-by-image visual QA pass has not been done for this chapter.
- No duplicate part titles across the 15 parts.

### Salt Analysis (18-part) — audited, real gap found, not fixed
- **Architecture is actually solid, contrary to initial suspicion.** All 18 parts share one
  renderer, `SaltAnalysisArticle.tsx`, which parses a lightweight custom markdown format.
  `dangerouslySetInnerHTML` appears 7 times in that one file, but every use is fed either
  `katex.renderToString()` output (both inline `$...$` and block `$$...$$` math, including
  `\mathrm{}` chemical equations) or an `inlineMarkup()` helper that HTML-entity-escapes first
  and only then substitutes rendered KaTeX/bold/code spans. This is the doc's *preferred*
  server-side-KaTeX pattern, not the fragile client-side-scan pattern that caused the Adsorption
  bugs. No raw-LaTeX-leak risk found.
- Branding scan: 0 hits in source text. Spot-checked 2 of the ~35 figure images directly
  (`flame-emission-spectrum.webp` and one other) — clean, no logos, scientifically correct flame
  colours.
- **Real gap**: `SaltAnalysisStructures.tsx` (214 lines) and `SaltAnalysisVisuals.tsx` (273
  lines) are fully built and correctly wired into the renderer via `[STRUCTURE:...]` /
  `[VISUAL:...]` tags — but **zero** of the 18 content parts actually use either tag. ~487 lines
  of built-but-unused components.
- **Real gap, matches the handover doc's own cited founder complaint**: "JEE trap" appears
  exactly once and "mnemonic" appears zero times across all 18 parts combined. The handover doc
  explicitly lists "mnemonics" and "JEE traps" among things the founder previously reported
  missing for this chapter — that complaint appears to still be valid. Colours (199 mentions)
  and solubility (56 mentions) are well covered, so not everything on that historical list is
  still missing.
- **Not fixed this pass**: writing genuinely good JEE traps, mnemonics, and placing the existing
  structure/visual components at the right points across 18 parts is real content-authoring
  work, not a quick structural fix — flagged rather than rushed.

## Scope note on "scientific verification"

The handover document's 24-point framework asks for full scientific re-verification, derivation
rebuilds, and new original examples/questions per chapter. That has **not** been attempted yet
for any chapter, including Adsorption — the work done so far is structural/technical (dead
branding, duplicate sections, broken render architecture risk, dead-end routes) rather than a
line-by-line chemistry fact-check against NCERT/JEE Advanced primary sources. Flagging this
explicitly so it isn't mistaken for a completed scientific audit.
