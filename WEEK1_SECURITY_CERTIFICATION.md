# WEEK 1 SECURITY CERTIFICATION

## Status

PARTIAL

## Security Table

| Test | Status | Evidence |
| --- | --- | --- |
| Guest API access | PARTIAL | `app/api/payment/create-order/route.ts` returns 401 without user; `app/api/snap-solve/route.ts` checks quota and returns 401 for guest. Live API calls NOT TESTED. |
| Direct premium route access | PARTIAL | `app/chapter/[id]/page.tsx` server redirects unauthenticated premium chapters to sign-in and non-Pro users to `/pricing`. Live auth session NOT TESTED. |
| Fake webhook signature | PARTIAL | Code rejects invalid HMAC with HTTP 400 before DB writes. Live curl test NOT TESTED. |
| Replayed webhook | PARTIAL | Code checks `payment_events.event_id` and returns duplicate response. Live replay NOT TESTED. |
| Client-supplied userId abuse | PASS | `/api/payment/create-order` ignores client user IDs and binds Razorpay notes to the authenticated Supabase user ID. |
| Hidden route access | PARTIAL | `proxy.ts` protects listed paths and redirects unauthenticated users when Supabase env exists; route access with production auth NOT TESTED. |
| Service role exposure | PASS | `SUPABASE_SERVICE_ROLE_KEY` is referenced only in `lib/supabase/admin.ts`; admin client is imported only by webhook route. |
| Payment amount tampering | PASS | Server derives amount from `PLANS` using validated `plan`; client cannot submit amount. |
| Open redirect | PASS | `app/auth/callback/route.ts` and `app/auth/signin/page.tsx` only accept same-origin relative `next` values. |
| Missing env crash | PASS | Added `.env.example`; `proxy.ts`, `lib/supabase.ts`, `lib/controlCenterData.ts`, and `app/auth/callback/route.ts` now degrade without local Supabase env instead of crashing public rendering. |

## Fixes Applied

- Added `.env.example`.
- Added Supabase env guard to `app/auth/callback/route.ts`.
- Preserved local no-env render fallback in `proxy.ts`, `lib/supabase.ts`, and `lib/controlCenterData.ts`.

## Required Manual Security Tests

1. POST fake-signature webhook and verify HTTP 400 plus no DB rows.
2. Replay a real signed webhook and verify duplicate response.
3. Attempt `/api/payment/create-order` as guest and verify 401.
4. Attempt premium chapter as guest/free/Pro and verify redirect/unlock behavior.
5. Tamper with client payment amount in browser and verify Razorpay order still uses server plan amount.
