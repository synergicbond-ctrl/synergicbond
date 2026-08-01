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
| 6 | Hydrogen | **Audited, clean — minor orphan-asset cleanup only** | See below. |
| 7 | Polymers | **Audited, clean** | See below. |
| 8 | Formal Charges | **Audited — real gap found, not fixed** | See below. |
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

### Hydrogen (8 parts, 22-section master markdown) — audited, clean
- Actual part count: **8** (the handover doc asked to "report actual count" since it didn't
  know). Parts map to a 22-section master markdown (`HYDROGEN_MASTER_MARKDOWN` in `content.ts`).
- **Best architecture found so far**: `_markdown.tsx` uses `react-markdown` +
  `remark-gfm` + `remark-math` + `rehype-katex` — exactly the doc's explicitly preferred stack
  (Section 7 names `remark-math + rehype-katex` directly). Zero `dangerouslySetInnerHTML`
  anywhere in the renderer.
- Branding scan: 0 hits. All 26 referenced SVG figures exist on disk, semantic filenames,
  unique descriptive captions (no index-junk like the old Adsorption figures).
- **Minor finding, fixed**: 8 SVG files existed in `public/notes/hydrogen/` but were never
  referenced — `05_ortho_para.svg`, `09_water_ice.svg`, `10_hard_water.svg`,
  `11_ion_exchange.svg`, `12_h2o2.svg`, `18_metallic_interstitial_hydride.svg`,
  `19_water_geometry.svg`, `26_fuel_cell_storage.svg`. These were earlier drafts superseded by
  later-numbered versions of the same topics (e.g. `27_ortho_para_spin.svg` supersedes
  `05_ortho_para.svg`) — confirmed via `comm` diff that all 26 actually-referenced files were
  untouched. Deleted; `public/notes/hydrogen/` now contains exactly the 26 referenced files.

### Polymers (26 sections) — audited, clean
- Confirmed exactly **26 sections**, matching the handover doc's expected count.
- **Notable architecture quirk, not a bug**: the actual content isn't in the 8
  `polymer-data-0N.ts` files as readable text — each contains a fragment of a single
  brotli-compressed, base64-encoded blob (`polymer-content.ts` concatenates all 8 fragments
  then calls `brotliDecompressSync`). A plain-text `grep` across these files finds nothing,
  which would have made a branding/leak scan silently look "clean" for the wrong reason. Decoded
  the actual JSON (53KB, 26 sections) via a one-off Node script to check the real content: 0
  branding hits, 0 "source note"/"source coverage" leaks, 18 KaTeX `formula` blocks, 11 worked
  examples, 1 quiz block.
- Math rendering: `katex.renderToString()` server-side with `katex/contrib/mhchem` (the doc's
  explicitly named preferred chemistry-notation extension). `dangerouslySetInnerHTML` is used
  but only ever fed KaTeX's own render output.
- Visuals: a modest set of original inline SVGs (`PolymerChainVisual` plus a
  `PolymerVisualGallery` of `PolymerArchitectureVisual` / `ThermalBehaviourVisual` /
  `SustainabilityVisual`) rather than one image per section — repeat-unit/monomer structures are
  instead shown via bracketed KaTeX formula notation (e.g. `[-CH2-CH2-]n` style), which is
  standard, textbook-correct practice for JEE-level polymer content, not a gap by itself.
- **Note for whoever audits content next**: because of the compression, any future manual
  content review of this chapter needs to decode it first — a plain read of the `.ts` files in
  the repo won't show the real prose.

### Formal Charges — audited, real gap found, not fixed
- Architecture clean: plain text (not compressed), `katex.renderToString()` server-side, custom
  `parseNotes()` line parser, 0 branding hits.
- **Real gap**: zero `<svg>` or `<img>` elements anywhere in the 749-line page. Every occurrence
  of "Structure" is a text label ("Structure I:", "Contributor I:", "Testing Structures with
  Experimental Bond Lengths") describing a Lewis structure in prose, never an actual drawn
  diagram — e.g. the cyanate-vs-fulminate resonance comparison, a worked example the file spends
  real space on, has no accompanying structure image at all. The handover doc explicitly lists
  Formal Charges among the chapters requiring drawn structures and explicitly says "Do not
  replace a required chemical structure with plain text alone" — this chapter currently does
  exactly that.
- **Not fixed this pass**: drawing chemically accurate Lewis-structure SVGs (correct
  connectivity, lone pairs, formal-charge labels, resonance arrows) for the examples this
  chapter actually discusses is real, precision-sensitive work — flagged rather than rushed,
  same reasoning as the Salt Analysis mnemonics/traps gap.

## Scope note on "scientific verification"

The handover document's 24-point framework asks for full scientific re-verification, derivation
rebuilds, and new original examples/questions per chapter. That has **not** been attempted yet
for any chapter, including Adsorption — the work done so far is structural/technical (dead
branding, duplicate sections, broken render architecture risk, dead-end routes) rather than a
line-by-line chemistry fact-check against NCERT/JEE Advanced primary sources. Flagging this
explicitly so it isn't mistaken for a completed scientific audit.
