# WEEK 1 CONFIG AUDIT

## Status

PARTIAL

## Required Env Vars

| Env var | Status | Used in | Purpose |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | PARTIAL | `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, `.env.example` | Canonical site URL, sitemap, robots. Defaults to `https://synergicbond.vercel.app` if absent. |
| `NEXT_PUBLIC_SUPABASE_URL` | PARTIAL | `proxy.ts`, `lib/supabase.ts`, `lib/supabase/server.ts`, `lib/supabase/admin.ts`, `app/auth/callback/route.ts`, `.env.example` | Supabase project URL for auth and database. Actual production value NOT TESTED. |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | PARTIAL | `proxy.ts`, `lib/supabase.ts`, `lib/supabase/server.ts`, `app/auth/callback/route.ts`, `.env.example` | Supabase browser/server auth client key. Actual production value NOT TESTED. |
| `SUPABASE_SERVICE_ROLE_KEY` | PARTIAL | `lib/supabase/admin.ts`, `app/api/payment/webhook/route.ts`, `.env.example` | Server-only webhook writes to `subscriptions` and `payment_events`. Actual production value NOT TESTED. |
| `RAZORPAY_KEY_ID` | PARTIAL | `app/api/payment/create-order/route.ts`, `.env.example` | Razorpay order API auth and Checkout public key. Actual production value NOT TESTED. |
| `RAZORPAY_KEY_SECRET` | PARTIAL | `app/api/payment/create-order/route.ts`, `.env.example` | Server-only Razorpay REST Basic auth. Actual production value NOT TESTED. |
| `RAZORPAY_WEBHOOK_SECRET` | PARTIAL | `app/api/payment/webhook/route.ts`, `.env.example` | HMAC verification for Razorpay webhook raw body. Actual production value NOT TESTED. |
| `GEMINI_API_KEY` | PARTIAL | `app/api/snap-solve/route.ts`, `app/api/chat/route.ts`, `app/api/handwritten-notes/route.ts`, `app/api/vision/route.ts`, `lib/gemini.ts`, `.env.example` | AI solving/generation. Actual production value NOT TESTED. |
| `GOOGLE_API_KEY` | PARTIAL | `app/api/chat/route.ts`, `app/api/vision/route.ts`, `lib/gemini.ts`, `.env.example` | Fallback Google AI key. Actual production value NOT TESTED. |
| `OPENAI_API_KEY` | PARTIAL | `lib/openai-client.ts`, `.env.example` | OpenAI client. Actual production value NOT TESTED. |

## Present/Missing

- PASS: `.env.example` now exists and lists required production variables.
- NOT TESTED: actual local `.env.local`, Vercel Production variables, and Razorpay/Supabase dashboard values. They are intentionally not committed.

## Setup Instructions

1. In Vercel Project Settings -> Environment Variables, add all variables from `.env.example`.
2. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
3. In Supabase Project Settings -> API, copy Project URL to `NEXT_PUBLIC_SUPABASE_URL`.
4. In Supabase Project Settings -> API, copy anon public key to `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
5. In Supabase Project Settings -> API, copy service-role key to `SUPABASE_SERVICE_ROLE_KEY`; never expose it client-side.
6. In Razorpay Dashboard -> Account & Settings -> API Keys, create production keys and set `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET`.
7. In Razorpay Dashboard -> Webhooks, register `https://<production-domain>/api/payment/webhook` and set the same secret in `RAZORPAY_WEBHOOK_SECRET`.
8. Redeploy after setting variables.

## Fixes Applied

- Added `.env.example`.
- Added missing-Supabase guard to `app/auth/callback/route.ts`.
- Kept local no-credential fallbacks from mobile QA: `proxy.ts`, `lib/supabase.ts`, `lib/controlCenterData.ts`.
