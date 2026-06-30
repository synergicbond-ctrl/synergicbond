# OPEN BUGS

## Revenue verification blocked

Status: NOT TESTED end to end.

Evidence:
- `app/api/payment/create-order/route.ts` requires Razorpay key/secret.
- `app/api/payment/webhook/route.ts` requires Razorpay webhook secret and Supabase service role.
- Live webhook delivery to `/api/payment/webhook` cannot be proven locally.

## Graph canonical edges missing

Status: PARTIAL.

Evidence:
- `GRAPH_AUDIT.md` shows Reaction-Reagent and Reaction-Exception only as text fields.
- Reaction-Order, Exception-PYQ, and Order-PYQ links are 0.

## Formula API missing

Status: PARTIAL.

Evidence:
- `lib/chemistry/formulas/*` exposes reusable data/search.
- No `/api/formulas` route exists.

## Full lint failure

Status: FAIL.

Evidence:
- Last full `npm run lint` reported 128 problems before P3.2-P4.0 work.
- Build and TypeScript pass.

## Git commit blocked

Status: PARTIAL.

Evidence:
- Local commit attempt after P3.2 was rejected by approval usage limit.
- Changes remain in the working tree.
