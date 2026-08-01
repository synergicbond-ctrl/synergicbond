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
| Solid State | `/learn/solid-state` | both `master/` (10 parts) and `parts/` (23 legacy `.tsx` files) | Investigated — not a duplicate, both are intentionally live. See below. |
| F-Block | `/notes/f-block` | 8 content files | Part count not yet fully enumerated. |

## Duplicate-route findings

1. **S-Block** — resolved this branch (see MASTER_AUDIT.md).
2. **Solid State — investigated, turned out NOT to be a duplicate.** `master/` (10-part single
   continuous document) and `parts/` (23-part granular course, via the `[part]` dynamic route)
   are both real and both intentionally live: the hub page (`app/learn/solid-state/page.tsx`)
   presents the 23 parts as its primary lesson-group navigation, with the master edition offered
   alongside as a "complete single-page edition" card. `chapterCatalog.ts` links directly to
   `/master`; `programSpec.ts` links to the hub, which surfaces both. Same pattern as Surface
   Chemistry's 12-part chapter coexisting with the dedicated Adsorption deep-dive — a deliberate
   two-track design, not a bug.
   - **Self-correction, logged for transparency**: an early `grep` for `href=` used a pattern
     that missed the hub's object-literal `href: \`/learn/solid-state/${part.part}\`` lesson
     links (they don't use JSX `href="..."` syntax), which made the 23-part system look
     orphaned. Based on that incomplete read, I replaced `[part]/page.tsx` with a
     `permanentRedirect()` to `/master` — which would have broken all 23 of the hub's primary
     lesson links. Caught it by reading the full hub page before committing anything, reverted
     via `git checkout`, and verified `tsc --noEmit` clean afterward. Nothing from this mistake
     was ever committed or pushed.

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
