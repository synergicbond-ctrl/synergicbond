# Founder Launch Certification — Sprint 1

Date: 2026-07-02 · Certified against production deployment `dpl_EYJUdN9P55LB5RXnjMNCQSpea3nV`
(commit `3dfa512`) at https://www.synergicbond.com. **Every status is backed by a live probe
executed today. No assumptions, no estimated PASS.**

## Certification Table

| # | Item | Status |
|---|---|---|
| 1a | Latest commit on production | **PASS** |
| 1b | Homepage | **PASS** |
| 1c | Notes | **PASS** |
| 1d | Tests | **PASS** |
| 1e | AI Lab (+ AI Notes) | **PASS** |
| 2a | Signup | **PASS** |
| 2b | Login | **PASS** |
| 2c | Logout (+ token revocation) | **PASS** |
| 2d | Session persistence | **PASS** |
| 3a | Free chapters (GOC / Mole / Periodic Table) | **PARTIAL** |
| 3b | Premium chapters gated | **PASS** |
| 3c | Preview mode | **PASS** |
| 4a | Razorpay: create real order | **PASS** |
| 4b | Complete real ₹149 payment | **NOT TESTED** |
| 4c | Receive webhook | **NOT TESTED** |
| 4d | Verify signature (valid path) | **NOT TESTED** (invalid-signature rejection: PASS) |
| 4e | Create/update subscription row | **NOT TESTED** |
| 4f | Premium unlock after payment | **NOT TESTED** |
| 5a | Guest access | **PASS** |
| 5b | Protected routes | **PASS** |
| 5c | Premium route protection | **PASS** |
| 5d | Direct API access | **PARTIAL** |

## Evidence

**1. Deployment.** Production deploy Ready (39s build). Version proven current by behavior:
the `upgrade_intent` event (added in the latest commit) is accepted by
`POST /api/beta/track` → `{"success":true}`. Homepage serves the "What is Synergic Bond?"
section; `/notes`, `/tests`, `/ai-lab`, `/ai-lab/notes`, `/pricing`, `/support`,
`/formula-cards` all HTTP 200. (The feedback button is client-hydrated — absent from raw
HTML by design, verified present in the rendered DOM on this exact commit.)

**2. Authentication** — real account exercised against production Supabase (GoTrue v2.192.0):
- Signup created a real user (`student+launchcert@gmail.com`) and returned a session
  immediately — **email auto-confirm is ON** (no verification step; see decisions below).
- Password login → session (expires_in 3600). Refresh-token grant → new session
  (persistence mechanism works). Logout → HTTP 204, and the old refresh token is
  rejected afterwards (`refresh_token_not_found`) — sessions properly revoked.

**3. Monetization** — live API + route probes:
- Free list live: `goc / general-organic-chemistry / mole-concept / periodic-table`.
- Signed-in free user: `/chapter/goc` renders full content; `/chapter/thermodynamics`
  returns a streamed redirect to `/pricing` with **zero premium content in the payload**
  (body inspected: 0 content markers).
- Guest: every `/chapter/*` → 307 to `/auth/signin` — because `/chapter` is in the
  middleware's PROTECTED_PATHS. So the three "free" chapters currently require a **free
  account** at `/chapter/*`, while the same chapters' notes are guest-open at `/notes`
  → PARTIAL, founder decision below.
- Preview mode: guest tier correctly reported by the live API; slice + unlock-banner
  behavior verified in-browser on this commit (12/30 reagents, 25/200 formulas, 15/168 colours).

**4. Razorpay** — live mode confirmed:
- `POST /api/payment/create-order` with the real signed-in session created a **real
  live-mode order**: `order_T8dqCHrsUKiQJd`, amount 14900 paise (₹149), currency INR,
  key `rzp_live_…` — the platform can genuinely open a checkout for money.
- No payment was completed (agent does not execute payments) → 4b–4f **NOT TESTED**.
  The webhook endpoint's tamper rejection was verified (invalid signature → HTTP 400).

**5. Security:**
- Unauthenticated: `/api/payment/create-order` 401 · `/api/doubt` 401 · `/api/exam-result` 401 ·
  `/api/notes/generate` 401 · `/api/study-plan` 401 · `/api/snap-solve` guest-allowed **by
  design** (5/day quota is the free tier).
- **Finding (5d PARTIAL): `/api/chat` has no auth gate.** It validates params, then treats the
  user as optional and proceeds to the AI call for guests (currently returns 500 "AI request
  failed", but the code path exposes unmetered AI usage to anonymous callers). The `/tutor`
  page is login-walled, but the API is directly reachable.

## Blocking Issues

1. **`/api/chat` unauthenticated AI access** — cost-abuse vector. One-line class of fix
   (mirror the 401 gate used by `/api/doubt` / `/api/notes/generate`). Recommend fixing
   before public launch. (Audit-only sprint: not fixed here.)
2. **Payment chain 4b–4f uncertified** — blocks "can take money" sign-off until the founder
   completes one live ₹149 transaction and we verify webhook → subscription row → unlock.

## Founder Decisions Needed

- **Free chapters behind free account?** Guests hitting `/chapter/goc` are sign-in-walled by
  middleware while `/notes` is open. Either (a) accept account-gated free chapters (lead
  capture), or (b) exempt the three free chapter slugs in `proxy.ts`.
- **Email auto-confirm ON** — fastest onboarding, but unverified emails can register.
  Keep for beta, or enable confirmation in Supabase Auth settings.

## Exact Next Actions

1. Founder: sign in on production, upgrade via `/pricing`, pay **₹149 once** (live mode is
   active — this is a real charge; it can be refunded from the Razorpay dashboard afterwards).
2. Immediately after: report back — I verify webhook receipt, `subscriptions` row, premium
   chapter access, and preview unlock, then flip 4b–4f to PASS/FAIL.
3. Approve the `/api/chat` auth fix (5-minute change + deploy).
4. Decide the two policy questions above.
5. Housekeeping: test account `student+launchcert@gmail.com` can be deleted in Supabase
   Auth (or kept as the payment-test account for step 1 — recommended).
