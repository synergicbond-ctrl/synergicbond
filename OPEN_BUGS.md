# OPEN BUGS

## Revenue Verification

Status: NOT TESTED.

Evidence:
- `app/api/payment/create-order/route.ts` requires Razorpay key/secret.
- `app/api/payment/webhook/route.ts` requires Razorpay webhook secret and Supabase service role.
- Live webhook delivery cannot be proven without external credentials.

## Full Lint Failure

Status: FAIL.

Evidence:
- `npm run lint` reports 118 problems.
- Current touched files are no longer listed in lint errors.
- `npx tsc --noEmit --pretty false` passes.
- `npm run build` passes.

## NCERT Detail Routing

Status: PARTIAL.

Evidence:
- `/api/search` returns NCERT results.
- NCERT results currently link to `/search`.
- No dedicated NCERT reference route exists.

## Low-Coverage Graph Edges

Status: PARTIAL.

Evidence:
- Reaction -> Order: 6 edges, 10% coverage.
- Exception -> PYQ: 10 edges, 15.09% coverage.
- Order -> PYQ: 8 edges, 3.72% coverage.
- No broken graph IDs, duplicate edges, or orphan graph nodes.

## User-Specific PYQ Weak Areas

Status: PARTIAL.

Evidence:
- `/pyq` shows source-data weak-area signals.
- Authenticated progress/mistake history is not connected to `/pyq`.
