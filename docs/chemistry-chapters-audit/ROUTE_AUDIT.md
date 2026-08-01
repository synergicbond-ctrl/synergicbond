# Route Audit

## Confirmed routes for the 13 handover chapters (verified against the live repo, not assumed)

| Chapter | Route | Parts found | Notes |
|---|---|---|---|
| Surface Chemistry | `/learn/jee-advanced/surface-chemistry` | 12 | Matches handover doc's expected count. |
| Adsorption | `/learn/jee-advanced/surface-chemistry/adsorption` | dedicated page | Fixed this branch. |
| S-Block | `/learn/jee-advanced/inorganic-chemistry/s-block` | 20 sections (1 page) | Now canonical — see MASTER_AUDIT.md. Old `/notes/s-block` (15 parts) now redirects here. |
| Polymers | `/learn/jee-advanced/polymers` | 8 data files | Doc expects "26 numbered sections" — not yet verified whether the 8 files cover 26 sections. |
| Environmental Chemistry | `/learn/jee-advanced/environmental-chemistry` | 15 | Matches doc's expected count. |
| Salt Analysis | `/learn/jee-advanced/salt-analysis` | 18 | Matches doc's expected count. |
| Hydrogen | `/notes/hydrogen` | dynamic `[part]` route | Part count not yet enumerated. |
| Formal Charges | `/learn/jee-advanced/chemical-bonding/formal-charges` | single page | |
| Liquid Solutions | `/learn/jee-advanced/solutions` | dynamic `[part]` route | Doc expects 17 parts — not yet verified. |
| Chemical Kinetics | `/learn/jee-advanced/chemical-kinetics` | 20 | Matches doc's expected count. |
| Gaseous State | `/learn/gaseous-state` | 16 (`PART_COUNT = 16` in `_meta.ts`) | Matches doc's expected count; the doc-mentioned "faulty 18-part deployment" is confirmed superseded. |
| Solid State | `/learn/solid-state` | **duplicate**: `master/` (10 parts) vs `parts/` (23 legacy `.tsx` files) | Not yet reconciled — flagged, not fixed. |
| F-Block | `/notes/f-block` | 8 content files | Part count not yet fully enumerated. |

## Duplicate-route findings

1. **S-Block** — resolved this branch (see MASTER_AUDIT.md).
2. **Solid State** — `app/learn/solid-state/master/` (10 parts, `_content.ts` + `_figures.tsx` +
   `_shared.tsx`) vs `app/learn/solid-state/parts/` (23 standalone `.tsx` files, `part01.tsx`
   through `part23.tsx`). Not yet investigated which is canonical/linked from navigation — this
   is the next likely candidate for the same kind of reconciliation done for S-Block.

## Branding scan (scoped to the 13 chapter directories + `public/notes`, `public/images`)

Ran on 2026-08-01, before the Adsorption fix:
```
grep -RniE '\bNotebookLM\b|\bwatermark\b|\bFIITJEE\b|\bAakash\b|\bNarayana\b|Physics Wallah|Sri Chaitanya|\bVibrant\b|\bResonance\b' \
  <13 chapter dirs> public/notes public/images
```
Result: no literal brand-name string hits in source files. However this text-based grep would
**not** catch a rendered image containing a logo — which is exactly how the Adsorption
NotebookLM watermarks were missed by any earlier automated check and only found by opening the
image file directly. Any future branding sweep must include actually opening a sample of the
figure files, not just grepping source text.

## `dangerouslySetInnerHTML` usage (architecture risk flagged by the handover doc)

As of 2026-08-01, before this branch's fixes:
- `app/learn/jee-advanced/salt-analysis/SaltAnalysisArticle.tsx` — 7 occurrences
- `app/learn/jee-advanced/polymers/page.tsx` — 1 occurrence
- `app/learn/jee-advanced/chemical-bonding/formal-charges/page.tsx` — 1 occurrence
- `app/learn/jee-advanced/surface-chemistry/adsorption/AdsorptionContent.tsx` — 1 occurrence (still present; the Adsorption fix this branch replaced the *images* referenced inside this HTML string, but did not remove the `dangerouslySetInnerHTML` architecture itself — that would require a full rewrite to native JSX, judged out of scope for this pass)

None of these have been rewritten. They remain a known architectural debt item per the
handover doc's Point 19, not yet addressed.
