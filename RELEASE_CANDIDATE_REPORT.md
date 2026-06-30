# RELEASE CANDIDATE REPORT

## Certification

| Subsystem | Status | Evidence |
| --- | --- | --- |
| Build | PASS | `npm run build` exit code 0; 70 app routes generated. |
| Lint | PASS | `npm run lint` exit code 0. |
| TypeScript | PASS | `npx tsc --noEmit --pretty false` exit code 0. |
| Revenue readiness | PARTIAL | Razorpay order route, HMAC webhook, subscription migration, premium gate, and Snap quota code exist. Live credentials and webhook execution were not verified. |
| Search | PASS | `/search` page and `/api/search` use one `{ results, total }` contract and build. |
| Formula Cards | PASS | 200 formula cards, route, API, query helpers, NCERT refs, and PYQ links are present and build. |
| PYQ runtime | PARTIAL | `/pyq` builds and exposes filters/graph cards. Corpus count is 34 questions; user-specific weak-area data is not connected. |
| Knowledge Graph validation | PASS | 435 nodes, 605 edges, 0 broken links, 0 duplicate edges, 0 orphan nodes. |
| Knowledge Graph coverage | PARTIAL | Reaction-order 10%, exception-PYQ 15.09%, order-PYQ 3.72%. |
| NCERT visibility | PARTIAL | 324 NCERT entity links and 200 formula-NCERT links exist; no dedicated NCERT detail route exists. |
| Content coverage | PARTIAL | Reactions 50, formulas 200, orders 207; PYQs 34 and canonical exceptions 3 are content gaps. |
| Mobile QA | PARTIAL | Static responsive classes exist and build passes. Browser/device visual QA was not executed. |
| SEO | PASS | `app/sitemap.ts`, `app/robots.ts`, and metadata build as `/sitemap.xml` and `/robots.txt`. |
| Generated docs | PASS | `REVENUE_READINESS.md`, `CONTENT_COVERAGE.md`, `LAUNCH_CHECKLIST.md`, and `RELEASE_CANDIDATE_REPORT.md` generated. |

## Remaining Blockers

- External credentials required for live Razorpay checkout, webhook, subscription, premium gate, and Snap quota verification.
- Browser/device mobile QA not executed.
- NCERT search results need a dedicated reference/detail route.
- PYQ corpus and canonical exception corpus are small.
- Low graph coverage remains for Reaction -> Order, Exception -> PYQ, and Order -> PYQ.

## Exact Steps Required Before Public Launch

1. Configure production Razorpay and Supabase environment variables.
2. Run a real Razorpay checkout and verify webhook receipt, `payment_events` insert, and `subscriptions` upsert.
3. Verify premium chapter access with guest, free, and Pro users.
4. Verify Snap Solve limits with migrated `snap_usage`.
5. Run browser/device QA for `/search`, `/formula-cards`, `/pyq`, reaction detail pages, and pricing/payment flow.
6. Add a dedicated NCERT reference route or intentionally accept `/search` as the NCERT destination.

## Exact Restart Prompt

```text
SYNERGIC BOND - RELEASE CANDIDATE RESUME

Start by running:
- git status --short
- npm run lint
- npx tsc --noEmit --pretty false
- npm run build

Use:
- RELEASE_CANDIDATE_REPORT.md
- REVENUE_READINESS.md
- CONTENT_COVERAGE.md
- LAUNCH_CHECKLIST.md
- VERIFICATION_STATUS.md
- OPEN_BUGS.md

Highest ROI:
1. Verify live Razorpay checkout/webhook/subscription flow with production credentials.
2. Verify premium gating and Snap Solve limits against the production Supabase database.
3. Run browser/mobile QA for `/search`, `/formula-cards`, `/pyq`, reaction detail pages, and pricing/payment.
4. Add a dedicated NCERT reference route if NCERT search result navigation must leave `/search`.
5. Expand PYQ and canonical exception coverage from verified sources only.

Rules:
- Reuse existing schemas/data.
- No mock data.
- No duplicate types.
- No architecture rewrite.
- No unverified chemistry links.
- Build after every logical change.
```
