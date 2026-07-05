# Launch Certification — Synergic Bond

**Purpose:** A single, executable checklist that certifies the platform is safe to launch. Every item must be **verified against production** and backed by captured **evidence** (screenshot, curl output with status code, DB row, or dashboard event id). Nothing is "certified" on assertion alone.

**How to use this doc**
- Work top to bottom. Do not skip a phase.
- For each item, record **PASS / FAIL / N/A**, the **evidence artifact**, and the **timestamp**.
- Any FAIL blocks launch until fixed and re-verified.
- The person running Phase 2/3 needs: a real test account, a real (small-value) payment method, production URLs, and access to the Supabase, Vercel, Razorpay, and Cloudflare dashboards.

> ⚠️ **Agent limitation note:** A coding agent cannot, on its own, reach the production Supabase DB, Vercel env, Razorpay dashboard, or Cloudflare, and must not run real payments or probe production without explicit authorization and credentials. Phases 1–3 are **human-executed** (or agent-executed only with credentials + go-ahead). This doc gives the exact steps, commands, and expected results so execution is mechanical.

---

## 0 · System reference (grounded in the codebase)

Use these as the source of truth while testing.

### Environment variables the app requires
| Variable | Used by | Notes |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | client + server + admin | public |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | client + proxy auth | public |
| `SUPABASE_SERVICE_ROLE_KEY` | `lib/supabase/admin.ts` (webhook only) | **secret — server only** |
| `RAZORPAY_KEY_ID` | create-order, webhook order lookup | |
| `RAZORPAY_KEY_SECRET` | verify-payment + webhook order lookup | **secret** |
| `RAZORPAY_WEBHOOK_SECRET` | webhook HMAC verification | **secret** |
| `GEMINI_API_KEY` / `GOOGLE_API_KEY` | AI generation | **secret** |
| `NEXT_PUBLIC_SITE_URL` | redirects / links | public |

### Database (Supabase) — migrations expected in prod
`001`–`013` in `supabase/migrations/`. Critical for launch:
- `003_subscriptions.sql` — Pro subscriptions (the LIVE all-access product)
- `004_snap_usage.sql` — Snap & Solve daily quota
- `005_payment_events.sql` — webhook idempotency ledger
- `013_program_entitlements.sql` — granular `user_program_entitlements` (per-program)

### Access model (source: `lib/access/contentAccess.ts`, `lib/access/entitlements.ts`, `lib/freeChapters.ts`, `proxy.ts`)
- **Public:** `/`, `/programs`, `/learn`, `/pricing`, `/support`, `/about`, `/auth/*`.
- **Free chapter (open to all):** path `/learn/mole-concept`; free chapter ids `goc`, `general-organic-chemistry`, `mole-concept`, `periodic-table`.
- **Auth-required prefixes:** `/dashboard`, `/chapter`, `/tests`, `/pyq`, `/revision`, `/programs/<slug>/…`, etc. Enforced by `proxy.ts` → redirect to `/auth/signin?next=…`.
- **Premium gate (paid):** `canAccessContent()` requires `isPaid`; the program chapter route (`app/programs/[slug]/chapter/[id]/page.tsx`) redirects non-entitled users: signed-out → `/auth/signin`, signed-in-without-key → `/pricing`.
- **Entitlement truth (`getUserEntitlements`):** active Pro ⇒ every program key; otherwise granular rows from `user_program_entitlements`. Degrades to empty on any error (never fabricates ownership).

### Payment flow (source: `app/api/payment/*`)
1. `POST /api/payment/create-order` → creates Razorpay order (carries `notes.user_id`, `notes.plan`).
2. Client checkout → `POST /api/payment/verify-payment` → HMAC `sha256(orderId|paymentId, KEY_SECRET)`, timing-safe compare (client-facing confirmation only).
3. **Authoritative activation = webhook** `POST /api/payment/webhook`:
   - HMAC `sha256(rawBody, RAZORPAY_WEBHOOK_SECRET)`, timing-safe compare → 400 on mismatch.
   - Idempotency: `payment_events.event_id` → duplicates return `{ok, duplicate:true}`.
   - On `payment.captured` / `order.paid` with valid `notes` → upsert `subscriptions` (Pro) via **service-role** client.
- Plans (`lib/subscription.ts`): `pro_monthly` ₹149 / 30d, `pro_annual` ₹999 / 365d (amounts in paise).

### AI limits (source: `lib/snapQuota.ts`)
- Guest → blocked (must sign in). Free (signed-in) → `SNAP_FREE_DAILY_LIMIT = 5` solves/day, then `402` paywall. Pro → unlimited. **Fails closed** on quota error.

### 🚩 Known gaps to certify explicitly (found in code review)
1. **Granular entitlement rows are never written by any automated path.** The webhook writes `subscriptions` (Pro = all-access) only; **nothing** inserts into `user_program_entitlements` (grep: read-only in app code). So "single-program purchase → entitlement row" is **not wired** — today a payment grants **full Pro**, and granular rows exist only via manual SQL/service-role grant. Phase 2 "verify entitlement row created" must be interpreted accordingly, or the granular purchase path must be built before claiming it works.
2. **Two free-chapter SSOTs.** `contentAccess.FREE_CHAPTERS` lists only `/learn/mole-concept`, while `lib/freeChapters.ts` lists 3 branches (`goc`/`general-organic-chemistry`, `mole-concept`, `periodic-table`). Confirm which set is authoritative for each surface so a "free" chapter isn't accidentally gated (or vice-versa).

---

## Phase 1 — Infrastructure Verification

Record each as PASS/FAIL + evidence.

| # | Check | How to verify | Expected | Evidence to capture |
|---|---|---|---|---|
| 1.1 | Supabase prod DB connected | Load a signed-in page that reads DB (e.g. `/dashboard`) in prod; check Vercel function logs for Supabase errors | Page renders, no auth/DB errors | Screenshot + clean log excerpt |
| 1.2 | Migration `013` in prod | Supabase SQL editor: `select to_regclass('public.user_program_entitlements');` and `\d user_program_entitlements` (columns + RLS) | Table exists, RLS enabled, `entitlements_select_own` policy present | SQL output screenshot |
| 1.3 | All migrations applied | Confirm `subscriptions`, `payment_events`, `snap_usage` exist: `select to_regclass('public.subscriptions'), to_regclass('public.payment_events'), to_regclass('public.snap_usage');` | All non-null | SQL output |
| 1.4 | Env vars present in Vercel | Vercel → Project → Settings → Environment Variables (Production). Cross-check the table in §0 | All 9 present; secrets not `NEXT_PUBLIC_` | Screenshot (values masked) |
| 1.5 | Razorpay **production** keys | Confirm `RAZORPAY_KEY_ID` starts with `rzp_live_` (not `rzp_test_`) | Live keys in prod env | Screenshot (id prefix only) |
| 1.6 | Razorpay webhook configured | Razorpay dashboard → Webhooks: URL = `https://<prod-domain>/api/payment/webhook`, events `payment.captured` + `order.paid`, secret matches `RAZORPAY_WEBHOOK_SECRET`, status Active | Webhook active, correct events + URL | Screenshot |
| 1.7 | Cloudflare redirects | `curl -sI https://<apex>/` and `https://www...`; verify canonical host + HTTPS redirect; test any page rules | 301/308 to canonical HTTPS, no loops | curl `-I` outputs |
| 1.8 | Auth works in prod | Real sign-up + sign-in on prod; confirm session cookie set and protected route loads | Login succeeds, `/dashboard` reachable | Screenshot + network trace |
| 1.9 | Secret hygiene | Confirm no secret is exposed to the client bundle: search prod page source for key values; only `NEXT_PUBLIC_*` should ever appear | No `SERVICE_ROLE`/`KEY_SECRET`/`WEBHOOK_SECRET` in client | grep of built output |

---

## Phase 2 — Real User Flow Testing

Use a **fresh real account** (not an existing one). Capture the user id (`auth.users.id`) for DB checks.

### 2A · Free user
| # | Step | Expected | Evidence |
|---|---|---|---|
| 2A.1 | Sign up | Account created, verification per config | Screenshot |
| 2A.2 | Login | Session established, lands authenticated | Screenshot |
| 2A.3 | Open a **free** chapter (e.g. mole concept) | Fully accessible, no paywall | Screenshot |
| 2A.4 | Open a **premium** program chapter directly (`/programs/neet/chapter/<premium-id>`) | Redirect to `/pricing` (signed-in, no entitlement) | URL + screenshot |
| 2A.5 | Practice / test restrictions | Premium practice/tests gated per policy; free-tier limits enforced | Screenshot |
| 2A.6 | AI limit (Snap & Solve) | 6th solve in a day → `402` paywall; guest (logged out) → blocked | Network trace showing `402`; DB `snap_usage` row |

### 2B · Paid user
> Because of Known Gap #1, decide first what "paid" means for launch: **(a) Pro all-access** (current behavior) or **(b) single-program purchase**. If (b), the granular-entitlement write path must be built first. The steps below assume **(a) Pro**, with a note where granular differs.

| # | Step | Expected | Evidence |
|---|---|---|---|
| 2B.1 | Complete a **real** Razorpay payment (smallest plan, ₹149) | Checkout success; `verify-payment` returns `{success:true}` | Screenshot + network trace |
| 2B.2 | Webhook received | Razorpay dashboard shows delivery `200`; Vercel logs show webhook processed | Dashboard event id + log line |
| 2B.3 | Subscription row created | Supabase: `select * from subscriptions where user_id='<uid>';` → `status='active'`, correct `plan`, future `expires_at`, `razorpay_payment_id` set | SQL row |
| 2B.4 | (Granular only) entitlement row | `select * from user_program_entitlements where user_id='<uid>';` — **expected EMPTY today** unless granular path built (Gap #1). Record actual. | SQL output |
| 2B.5 | Premium content unlocks | The premium chapter from 2A.4 now loads fully | Screenshot |
| 2B.6 | Board dashboard access | `/dashboard/<board>/<class>` shows purchased state / full access | Screenshot |
| 2B.7 | Notes engine access | Premium notes render on an authored chapter (e.g. chemical bonding) | Screenshot |
| 2B.8 | Syllabus access | Program syllabus tree renders, program-isolated (no other program's tags) | Screenshot |
| 2B.9 | Idempotency | Re-deliver the same webhook event from Razorpay | Second call `{ok, duplicate:true}`, no duplicate subscription | Log + SQL count=1 |

---

## Phase 3 — Security Testing

**Expected result for every case below: BLOCKED.** Run against prod (or a prod-mirror) with authorization. Use `curl -i` and capture status + body.

| # | Attack | Method | Expected (blocked) | Evidence |
|---|---|---|---|---|
| 3.1 | Direct premium route, signed-out | `curl -i https://<prod>/programs/neet/chapter/<premium-id>` | Redirect to `/auth/signin?next=…` (proxy) | curl `-i` |
| 3.2 | Direct premium route, signed-in non-paid | Same URL with a free-user cookie | Redirect to `/pricing` | curl `-i` |
| 3.3 | Direct API without entitlement | Call a premium/AI API (e.g. Snap solve) past quota or unauthenticated | `401`/`402`/`403` — **fails closed** | curl `-i` |
| 3.4 | Webhook replay | Re-POST a previously seen event id (valid signature) | `{ok, duplicate:true}`, no state change | curl + SQL count unchanged |
| 3.5 | Fake webhook payload | `curl -i -X POST /api/payment/webhook` with body but **wrong/missing** `x-razorpay-signature` | `400` (HMAC mismatch), no DB write | curl `-i` + SQL unchanged |
| 3.6 | Forged subscription via webhook | Valid-signature body but `notes.user_id` = victim / invalid plan | No activation for arbitrary user (invalid plan rejected; only signed payloads processed) | log "missing/invalid notes" + SQL unchanged |
| 3.7 | Access another user's entitlement data | As user A, query user B's rows via the client (anon key + A's session): `select * from user_program_entitlements where user_id='<B>'` and same for `subscriptions` | Returns 0 rows — RLS `select own` only | SQL/REST output |
| 3.8 | Service-role exposure | Attempt to reach service-role client from any client route; inspect client bundle | Not reachable; key absent from client | grep + code path check |
| 3.9 | Missing-secret behavior | Temporarily unset `RAZORPAY_WEBHOOK_SECRET` in a staging env, POST webhook | `503`, no processing (fails closed) | curl `-i` |

---

## Phase 4 — Evidence Report (deliverable template)

Produce this as the certification record. Fill every cell; attach artifacts in an `/evidence` folder named `P<phase>-<item>-<slug>.png|txt`.

### 4.1 Run metadata
```
Product / build:      synergicbond @ <commit sha>
Production URL:       https://__________
Certified by:         __________
Date / timezone:      __________
Supabase project ref: __________
Vercel deployment id: __________
Razorpay mode:        live / test
```

### 4.2 Results matrix (one row per checklist item)
| Item | Description | Result (PASS/FAIL/N-A) | Evidence artifact | Timestamp | Notes |
|---|---|---|---|---|---|
| 1.1 | | | | | |
| … | | | | | |
| 3.9 | | | | | |

### 4.3 Failures & remediation log
| Item | Failure detail | Severity | Fix / owner | Re-verified (PASS + artifact) |
|---|---|---|---|---|

### 4.4 Open risk register (must include the §0 known gaps)
| Risk | Impact | Decision (fix before launch / accept / defer) | Owner |
|---|---|---|---|
| Granular entitlement write path not wired (Gap #1) | Any paid plan grants full Pro; per-program purchases impossible | | |
| Dual free-chapter SSOTs (Gap #2) | Free chapter may be mis-gated | | |

### 4.5 Certification decision
```
[ ] CERTIFIED FOR LAUNCH   — all critical items PASS, no open blockers
[ ] CONDITIONAL            — launch with listed accepted risks
[ ] NOT CERTIFIED          — blockers open (list item numbers): __________

Signature: __________            Date: __________
```

---

### Critical-item definition (what a FAIL blocks on)
Launch-blocking items: **1.2, 1.4, 1.5, 1.6, 1.8, 1.9, 2B.2, 2B.3, 2B.5, 3.1, 3.2, 3.3, 3.4, 3.5, 3.7, 3.9.** Any FAIL here = **NOT CERTIFIED** until fixed and re-verified.
