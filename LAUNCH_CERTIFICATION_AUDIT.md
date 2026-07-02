# Launch Certification Audit (Week 14)

Certified against commit `a1d9070` (live on production at the time of testing).
Every status below is backed by a real probe run on 2026-07-02; nothing is assumed.
Labels: PASS / PARTIAL / FAIL / NOT TESTED.

## Summary

| Area | Status |
|---|---|
| Razorpay configuration (prod) | **PASS** |
| Razorpay live checkout (real ₹) | **NOT TESTED** — founder action |
| Webhook endpoint security | **PASS** |
| Webhook live delivery → subscription activation | **PARTIAL** |
| Premium unlock gates | **PASS** (guest side) / **NOT TESTED** (paid side) |
| Protected routes | **PASS** |
| Guest restrictions | **PASS** |
| Build | **PASS** |
| Deployment (CD) | **PASS** |
| Local dev environment | **FAIL** (stale key — dev-only, not a launch blocker) |

## Evidence

### Razorpay configuration — PASS
- `vercel env ls production`: `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, `RAZORPAY_WEBHOOK_SECRET`,
  `SUPABASE_SERVICE_ROLE_KEY`, `GEMINI_API_KEY` all present in Production.
- `POST https://www.synergicbond.com/api/payment/create-order` (unauthenticated) →
  **HTTP 401 "Please sign in to upgrade."** — the code's not-configured path returns 503, so a 401
  proves keys are loaded and the auth gate fires first.

### Razorpay live checkout — NOT TESTED
Completing a real order→payment→capture requires an actual ₹149 transaction, which only the
founder should run (this agent does not execute payments). Historical evidence exists from the
earlier hardening sprint (`WEEK1_LIVE_PAYMENT_TRACE.md`, `PREMIUM_UNLOCK_VERIFICATION.md`) but
is not re-certified here. **Founder action: one live test transaction post-launch-candidate.**

### Webhook — security PASS, live delivery PARTIAL
- `POST /api/payment/webhook` with an invalid `x-razorpay-signature` → **HTTP 400 {"ok":false}**
  on production: signature verification rejects tampered payloads.
- Live delivery (Razorpay → webhook → `subscriptions` row) not re-exercised today; code path +
  migration `003_subscriptions.sql` verified in source, historical verification docs exist → PARTIAL.

### Premium unlock — guest side PASS, paid side NOT TESTED
Live production probes:
- `GET /api/content/access?chapterId=goc` → `{"access":true,"reason":"free_chapter"}`
- `GET /api/content/access?chapterId=thermodynamics` (guest) →
  `{"access":false,"reason":"not_logged_in","tier":"guest","freeChapters":["goc","general-organic-chemistry","mole-concept","periodic-table"]}` —
  the Week 12 tightened free list is live.
- Preview mode gates verified in-browser during Week 12 (guests see real slices + unlock banners).
- A paid Pro account's unlock flow needs the live test transaction above → NOT TESTED.

### Protected routes — PASS
- `GET https://www.synergicbond.com/dashboard` (guest) → **307 → /auth/signin**.
- `proxy.ts` PROTECTED_PATHS covers /dashboard /coach /tutor /chapter /quiz /exam /pyq /revision
  /vault /search /upload /olympiads (unchanged since merge-base; verified in source).

### Guest restrictions — PASS
Guest tier correctly identified by `/api/content/access?feature=preview`; premium chapters blocked
server-side (redirect) and client-side (preview slices); free chapters and public reference pages open.

### Build — PASS
- Local: `npm run lint` 0 errors · `tsc --noEmit` clean · `next build` 78/78 pages.
- Vercel production build of the same commit: **● Ready** (39s).

### Deployment — PASS
- GitHub → Vercel CD confirmed live: the Week 13 push deployed to Production within ~1 minute
  (`vercel ls`), and `https://www.synergicbond.com` serves the new build (the
  "What is Synergic Bond?" section is present in production HTML).
- Domain: synergicbond.com → 308 → www.synergicbond.com → 200.
- Branch previews exist for feature branches (e.g. `week7-11-local` alias).

### Local dev environment — FAIL (dev-only)
`.env.local`'s `NEXT_PUBLIC_SUPABASE_ANON_KEY` is invalid against the live Supabase project
(REST probe → 401 "Invalid API key"): local dev runs with degraded auth/DB (code fails open).
Not a launch blocker (production keys are valid) — fix with `vercel env pull .env.local`.
Local env also lacks Razorpay/Gemini keys, so payment/AI flows are only testable on deploys.

## Founder actions required before public launch
1. **One live ₹149 test transaction** on production → confirm webhook fires, `subscriptions` row
   activates, premium chapter opens, previews unlock. (Everything up to the payment screen is
   certified above.)
2. Ship the 60–90s intro video (slot ready on the homepage).
3. Optional: decide the direct-contribution checkout (Week 12 open item).

No launch blockers found in code, configuration, build, or deployment.
