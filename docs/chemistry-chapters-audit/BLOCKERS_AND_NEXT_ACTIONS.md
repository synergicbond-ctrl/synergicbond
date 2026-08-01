# Blockers and Next Actions

Running log of things found during the audit that this session cannot fix directly (no
credentials, no image-generation/editing tool available for raster asset repair, or a decision
that genuinely needs a human). Not a stop notice — work is continuing on everything else.

## Open items

1. **`public/environmental-chemistry/fluoride-concentration.webp` has a spelling error**
   baked into the image: the heading reads "A Matter of Concenration" (missing "t" in
   "Concentration"). This is a raster image, not text in code — fixing it needs either the
   original generation prompt/source re-run with a corrected heading, or manual image editing.
   Not attempted this pass. Next action: regenerate this one asset (same visual style: dark
   underwater gradient, 3-tier ppm scale) with the heading corrected, or edit the existing file
   with an image tool if one becomes available.

2. **In-app browser QA is not possible without a signed-in session.** Every route audited so far
   (Adsorption, S-Block, Environmental Chemistry) is gated behind Supabase auth
   (`requirePaidContent` via `proxy.ts`). Per this session's standing rules, credentials are
   never entered on the user's behalf, so desktop/tablet/mobile visual QA on the *live, rendered,
   signed-in* page has not been done for any chapter — only static-file/standalone-HTML renders
   (for the Adsorption SVGs) and source-level checks. Next action: someone with a signed-in
   session should do a pass on the Vercel preview once one exists (see DEPLOYMENT_REPORT.md).

3. **Merge to `main` / production deploy is intentionally held.** Per the repo's standing PR
   workflow and the real-world stakes of shipping AI-reviewed chemistry content to paying
   students without a human look, this branch will be pushed and kept as an open PR, but not
   merged, until an explicit go-ahead. See DEPLOYMENT_REPORT.md.

Nothing here is stopping continued work on the remaining chapters — logging these for follow-up,
not pausing.
