# ROADMAP

## Next Highest ROI

1. PASS blockers first: keep `npm run build` and `npx tsc --noEmit --pretty false` green.
2. PARTIAL: reduce full-repo lint debt outside current touched files.
3. PARTIAL: add a dedicated NCERT reference/detail route so NCERT search results do not route back to `/search`.
4. PARTIAL: connect authenticated progress/mistake data to PYQ weak-area insights.
5. PARTIAL: improve Reaction-Order, Exception-PYQ, and Order-PYQ coverage only from verified sources.
6. NOT TESTED: run browser/mobile visual verification for `/formula-cards`, `/pyq`, `/search`, and reaction detail pages.
7. NOT TESTED: run live Razorpay/Supabase revenue verification with credentials.

## Completed In This Sprint

- PASS: Formula Cards UI/API.
- PASS: Knowledge Graph UI/API.
- PASS: Formula -> PYQ and Formula -> NCERT exposure.
- PASS: PYQ UX refinement from existing data.
- PASS: Global search integration for reactions, reagents, exceptions, orders, formulas, PYQs, and NCERT refs.
- PARTIAL: hardening; touched files fixed, full lint remains blocked by unrelated repository debt.

## Verification Gates

- PASS: `npx tsc --noEmit --pretty false`
- PASS: `npm run build`
- FAIL: `npm run lint`
- PASS: graph validation has 0 broken links, 0 duplicate edges, 0 orphan graph nodes.
