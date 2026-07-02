# OPEN BUGS

## Revenue Runtime Verification

Status: NOT TESTED.

Evidence:
- `app/api/payment/create-order/route.ts` requires Razorpay key ID and key secret.
- `app/api/payment/webhook/route.ts` requires Razorpay webhook secret and Supabase service role.
- `supabase/migrations/003_subscriptions.sql`, `004_snap_usage.sql`, and `005_payment_events.sql` exist.
- Live checkout, webhook delivery, subscription write, premium gate, and Snap quota execution were not verified.

## NCERT Detail Routing

Status: PARTIAL.

Evidence:
- `/api/search` returns NCERT results.
- NCERT results currently link to `/search`.
- No dedicated NCERT reference route exists.

## Low-Coverage Graph Edges

Status: PARTIAL.

Evidence:
- Reaction -> Order: 6 edges, 10%.
- Exception -> PYQ: 10 edges, 15.09%.
- Order -> PYQ: 8 edges, 3.72%.
- Graph validation returned 0 broken links, 0 duplicate edges, 0 orphan nodes.

## PYQ Corpus Size

Status: PARTIAL.

Evidence:
- `pyqDatabase` contains 34 questions across 14 chapters.

## Canonical Exception Corpus Size

Status: PARTIAL.

Evidence:
- `exceptionsList` contains 3 canonical exceptions.

## Browser/Mobile QA

Status: NOT TESTED.

Evidence:
- `npm run build` passes.
- No Playwright/browser-device visual pass was executed in this release-candidate sprint.
