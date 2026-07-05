# PROJECT HANDOFF — JULY 2026

**Project:** SYNERGIC BOND (www.synergicbond.com) — AI chemistry education platform ("Chemistry OS")
**Repo:** `synergicbond-ctrl/synergicbond` · auto-deploys to Vercel on push to `main`
**Snapshot date:** 6 July 2026 · latest commits `9dc4878` → `bb9e0f1` → `9fdb75c` (all deployed)
**Stack:** Next.js 16.2 (App Router, Turbopack) · React 19 · TypeScript · Tailwind v4 (CSS-only config) · Supabase (auth + Postgres via `@supabase/ssr`) · Google Gemini (`@google/genai`, lazy-init in `lib/gemini.ts`) · Razorpay (REST, no SDK)

---

## 1. Current Architecture

### Access control (rebuilt July 2026 — role-based, zero email hardcoding)

```
                 ┌──────────────────────────────────────────┐
                 │  profiles.role  (owner|admin|mentor|student)
                 │  migration 016 — anti-escalation trigger  │
                 └──────────────────┬───────────────────────┘
                                    │
     lib/auth/roles.ts  ◄── CLIENT-SAFE primitives (isOwner, isAdmin,
                                    │   isPrivileged, getRole, getAccessUser,
                                    │   isPrivilegedById, isPrivilegedServer)
                                    │
     lib/auth/access.ts ◄── SERVER-ONLY façade (re-exports roles.ts +
                                    │   hasPremiumAccess, canUseAiTool,
                                    │   hasProgramAccess, canAccessContent)
                                    │
                 ┌──────────────────▼───────────────────────┐
                 │ isProActive()  — lib/subscription.ts      │  ◄── THE CHOKEPOINT
                 │ privileged(role) short-circuit → true     │
                 │ else → subscriptions table (active row)   │
                 └───────┬───────────────┬──────────────────┘
                         │               │
        getUserEntitlements()      checkAndConsumeSnapQuota()
        (lib/access/entitlements)  (lib/snapQuota — AI limits)
        Pro/privileged ⇒ ALL keys        │
        else user_program_entitlements   │
                         │               │
        /programs badges · board dashboards · chapter gates ·
        paywall · /api/content/access · subscription dashboard
```

Key invariants:
- **Privileged = owner ∪ admin** ⇒ unrestricted (bypasses subscription, payment, entitlement, premium, usage-limit, locked-content checks) — all through the one `isProActive` line.
- `lib/auth/roles.ts` imports nothing server-only → safe inside `lib/subscription.ts` (which client pages import). `lib/auth/access.ts` pulls entitlements → `next/headers`, so **server-side only**.
- `getRole()` is defensive: missing column/row/error ⇒ `'student'` (app correct before AND after migration 016 runs).
- Old email-based `lib/access/founderBypass.ts` + `FOUNDER_DEV_BYPASS` env flag: **deleted**. No `.includes(email)` gates anywhere.

### Route protection
- `proxy.ts` (Next middleware) + `lib/access/contentAccess.ts` (pure route rules SSOT): `PUBLIC_EXACT` / `PUBLIC_PREFIXES` / free chapters (`lib/freeChapters.ts`) / `PROTECTED_PREFIXES` (`/dashboard`, `/pyq`, `/tests`, …) / `PROTECTED_SUBPREFIXES` (`/programs/`, `/learn/`). Signed-out on protected → `/auth/signin?next=…`.
- Page-level premium gating on top (chapter engine checks `isFreeChapter` → else entitlement keys).

### Payments (Razorpay)
- `app/api/payment/create-order` — validates plan (`PLANS`) or program key (`ALL_PROGRAM_KEYS` + `isSaleableProgram`), creates order with `notes {user_id, plan|program_key}`.
- `app/api/payment/webhook` — signature-verified, idempotent (`payment_events`), service-role writes to `subscriptions` (Pro) or `user_program_entitlements` (granular). Skips non-saleable (coming-soon) keys defensively.
- Client flow: pricing card / subscription dashboard → `StudentDetailsForm` (collects profile details) → confirm modal → `PaymentGateway` (Razorpay Checkout).

---

## 2. Student Dashboard Structure (`/dashboard`, rebuilt commit 9fdb75c)

Server page `app/dashboard/page.tsx` (guests get `GuestDashboardPreview`). Sections in order:

1. **My Programs + Profile** (`lg:grid-cols-3`, spine of the page)
   - `components/dashboard/MyPrograms.tsx` — entitlement-driven cards (`resolveOwnedPrograms(entitlements.keys, …)`). Per card: status chip (Active / Owner / Coming Soon), **primary CTA "Chapter-wise Notes & Learning"** (`programKeyToActions(key).notes`), secondary Practice / Tests / Full Hub. Empty state → `/pricing`. No mock data.
   - `components/dashboard/ProfileCard.tsx` — name, email, phone, class/board chips, subscription label → links `/dashboard/profile`.
2. **Continue Learning** — `OnboardingChecklist` (only until first study+test), `RevisionQueue`, `CoachWidget`.
3. **Progress & Performance** — `SummaryCards`, `RecentTests`, `WeakTopics`, `ActivityLog` (all real activity from `exam_results` / `study_sessions` / `saved_chapters` / `mistakes`).
4. **Quick Tools** — `QuickActions` (global tools: tutor, exam, revision, vault).

**Profile page** `app/dashboard/profile/page.tsx` (`force-dynamic`):
- Identity header (initial avatar, name, role badge for owner/admin, subscription label) + `ProfileEditForm`.
- Personal information rows: name, email, phone, DOB, class, board/exam target, joined date (all from `profiles`; "Not added yet" for nulls).
- Subscription & Programs: status line + owned program list (Active / Owner preview / Coming Soon) + link to `/dashboard/subscription`.
- `components/dashboard/ProfileEditForm.tsx` (client) — edits ONLY `full_name, phone, date_of_birth, class_standard, board_program` via browser client under `profiles_update_own` RLS; email read-only; role untouchable (016 trigger blocks non-service-role role changes).

**Board dashboards** (separate layer, pre-existing): `/dashboard/boards` → `/dashboard/[board]` → `/dashboard/[board]/[class]` with sub-routes `full-syllabus / practice / custom-test / analytics / practical / projects / mentorship` (CBSE fully built; ISC via `lib/isc`; state-boards structural).

## 3. Subscription Dashboard Structure (`/dashboard/subscription`)

- Server page fetches `subscriptions` row + `user_program_entitlements` + role (`getRole`) → passes `isOwner` / `isStaff` (privileged) to the client.
- `components/subscription/SubscriptionDashboardClient.tsx`:
  - **Expiring Soon Center** (≤30 days) with renew buttons.
  - **My Active Plans** — Pro card / founder-plan card / granular program cards with expiry + extend; **Owner Access all-access card** when `isOwner && !isPro`.
  - **Upgrade & Add Programs** — catalogue from `PROGRAM_CATALOG` (prices derived from `PROGRAM_ACCESS_PRICE_PAISE_BY_KEY / 100`). Per row (`renderProgramRow`):
    - normal user: ₹price + Add Plan (or Owned)
    - owner/admin: **"Preview →" link** (`programKeyToHref`) — no price, no checkout
    - coming-soon (State Boards): "Coming Soon" badge + note; owner gets a **"Coming Soon · Preview" link** instead
  - Purchase flow: `initiatePurchase` → StudentDetailsForm → consent modal → PaymentGateway.
  - Admin console link shown by `isStaff` (role), NOT email. `/dashboard/subscription/admin` is role-gated (`isPrivileged` → honest management panel; others → 404).

## 4. Program Routing

| Program key (entitlement) | Experience route | Notes CTA | Practice | Tests |
|---|---|---|---|---|
| `neet`, `jee-main`, `jee-advanced` | `/programs/<key>` (hub) | `/programs/<key>/learn` | `/programs/<key>/practice` | `/programs/<key>/tests` |
| `cbse:class-11/12` | `/dashboard/cbse/<class>` | `…/full-syllabus` | `…/practice` | `…/custom-test` |
| `isc:class-11/12` (alias `icse:*`) | `/dashboard/icse/<class>` | `…/full-syllabus` | `…/practice` | `…/custom-test` |
| `state-boards:class-11/12` | `/dashboard/state-boards/<class>` | (coming-soon; owner preview only) | — | — |

- Mapping lives in **`programKeyToHref` / `programKeyToActions`** (`lib/programs.ts`) — the ONLY place keys→routes are translated. `isc` entitlement keys map to the `icse` route slug (dashboard route uses `icse`; checkout sells `isc:*`; Pro/owner derivation emits both).
- `/programs` landing = 9 marketing hubs from `PROGRAMS` (`lib/programs.ts`, slugs: neet, jee-main, jee-advanced, olympiad, cbse, icse, state-boards, gate, international) with "Included in your plan" badges from entitlements.
- Chapter engine: `/programs/[slug]/chapter/[id]` (11 sections; premium notes render when authored). Free chapters open to all.

## 5. Owner Preview Implementation

1. `profiles.role = 'owner'` (seeded by migration 016 for `synergicbond@gmail.com` — data seed, not code).
2. `isProActive` short-circuit ⇒ owner is "Pro everywhere" ⇒ `getUserEntitlements` returns **ALL program keys** ⇒ every gate opens, snap/AI limits bypass, no upgrade prompts.
3. UI: `/dashboard/subscription` gets `isOwner`/`isStaff` → Owner Access card, Preview links (no Add Plan/checkout), owner banner; `/dashboard` MyPrograms shows all catalogue cards chipped **Owner**; `/dashboard/profile` shows role badge + "Owner — all-access".
4. State Boards stay unsellable for everyone (server-enforced) but owner can open their dashboards via Coming Soon · Preview links.
5. **Not yet active in prod** — see Blockers.

## 6. Existing SSOTs (reuse, never duplicate)

| Concern | SSOT |
|---|---|
| Role primitives (client-safe) | `lib/auth/roles.ts` |
| Server access decisions | `lib/auth/access.ts` |
| Plans, program prices (paise), coming-soon keys, `isSaleableProgram` | `lib/subscription.ts` |
| Entitlement resolution (`ALL_PROGRAM_KEYS`, `getUserEntitlements`) | `lib/access/entitlements.ts` (server-only) |
| Route protection rules | `lib/access/contentAccess.ts` (pure) |
| Program marketing data (9 hubs) + **`PROGRAM_CATALOG`** (9 sellable keys+names+aliases) + **`programKeyToHref` / `programKeyToActions`** | `lib/programs.ts` |
| Program hub sections | `lib/programHubData.ts` |
| Class/board registration options + labels | `lib/studentOptions.ts` |
| Free chapters | `lib/freeChapters.ts` |
| Official syllabus trees (program isolation) | `lib/programSyllabus/` |
| Engine question-type matrices | `lib/engine/programSpec.ts` |
| Premium notes schema/content registry | `lib/premiumNotes/` |
| CBSE/ISC board curriculum | `lib/cbse/`, `lib/isc/` |
| Attempt-derived intelligence (scoring/mistakes/analytics/ncert/readiness) | `lib/attempts/` |

## 7. Supabase Tables Used

| Table | Migration | Purpose / notes |
|---|---|---|
| `profiles` | 006, 008, 014, 015, **016** | identity + student details (`phone, class_standard, board_program, date_of_birth, discovery_source, security_q/a`) + **`role`** (016 — NOT YET RUN). RLS own-row; role change blocked for non-service-role by trigger |
| `subscriptions` | 003 | Pro/founder plans; `isProActive` reads active+unexpired |
| `user_program_entitlements` | 013 | granular per-program purchases; service-role written (webhook); RLS select-own |
| `snap_usage` | 004 | Snap & Solve daily quota (free tier 5/day) |
| `payment_events` | 005 | webhook idempotency log |
| `exam_results`, `study_sessions`, `saved_chapters`, `mistakes` | 001, 007 | legacy dashboard/performance data |
| `attempts`, `attempt_answers` | 010 | attempt layer — feeds analytics/mistakes/ncert/readiness/board score |
| `memory_cards` | 011 | **not provisioned** — memory engine uses localStorage V1 |
| `revision_items` | 012 | **not provisioned** — revision store uses localStorage V1 |
| `beta_events`, `beta_feedback` | 009 | beta analytics |
| `reaction_mechanisms` | 002 | mechanism visualizer data |
| `user_xp` | (leaderboard, pre-existing) | joined with profiles in `/api/leaderboard` |

## 8. Current Blockers

1. **Migration 016 not run** (`supabase/migrations/016_profiles_role.sql`) — must be executed manually in the Supabase SQL editor (this dev env has no service-role key). Until then no account has `role='owner'` and owner UX is dormant (everyone safely degrades to `student`). After running: owner signs out/in once.
2. **Migrations 011/012 not run** — memory + revision remain device-local localStorage (stores are intentionally swappable).
3. **Local browser verification of auth-gated pages impossible** — local `.env.local` Supabase anon key is stale (`vercel env pull` to fix). Verification is done via build/SSG output, server-render passes, and prod route checks.
4. **Gemini paths are prod-only** (`GEMINI_API_KEY` on Vercel; free-tier quota exhausts under testing).
5. **In-depth chapter notes content**: engine + template live, but only Chemical Bonding is authored (~27 of 30 chapters pending) — founder-verified content only, no fabrication.
6. Legacy `plan='founder'` subscription grant (commit 8837db6) still exists as a second all-access path — consider retiring after role-based owner is confirmed live.

## 9. Files Changed (July 2026 access/dashboard work — all deployed)

**`9dc4878` — role-based owner access + State Board coming-soon** (12 files, +451/−136)
`lib/auth/roles.ts` (new) · `lib/auth/access.ts` (new) · `supabase/migrations/016_profiles_role.sql` (new) · `lib/access/founderBypass.ts` (**deleted**) · `lib/subscription.ts` · `app/api/content/access/route.ts` · `app/api/payment/create-order/route.ts` · `app/api/payment/webhook/route.ts` · `app/pricing/page.tsx` · `app/dashboard/subscription/page.tsx` · `app/dashboard/subscription/admin/page.tsx` · `components/subscription/SubscriptionDashboardClient.tsx`

**`bb9e0f1` — owner Preview buttons navigate** (2 files, +46/−6)
`lib/programs.ts` (`programKeyToHref`) · `components/subscription/SubscriptionDashboardClient.tsx`

**`9fdb75c` — organized student dashboard + profile** (9 files, +707/−68)
`components/dashboard/MyPrograms.tsx` (new) · `components/dashboard/ProfileCard.tsx` (new) · `components/dashboard/ProfileEditForm.tsx` (new) · `app/dashboard/profile/page.tsx` (new) · `lib/studentOptions.ts` (new) · `app/dashboard/page.tsx` · `lib/programs.ts` (`PROGRAM_CATALOG`, `programKeyToActions`) · `components/StudentDetailsForm.tsx` · `components/subscription/SubscriptionDashboardClient.tsx`

Gates at each commit: `tsc --noEmit` clean · eslint 0 errors (3 pre-existing warnings) · `next build` 176/176 pages.

## 10. Pending Work

1. **Run migration 016** + confirm owner login flow end-to-end (all programs unlocked, no purchase prompts, snap limits bypassed, State Boards preview-only).
2. **Chapter-wise notes content expansion** — author remaining chapters into the `lib/premiumNotes` template (founder-verified chemistry; one content file + registry line each).
3. Run 011/012 then swap `lib/memory/store.ts` / `lib/revision/store.ts` to server-backed (cross-device sync).
4. Retire the legacy `plan='founder'` grant once role-based owner is verified.
5. W12 Snap & Solve V2 — **architecture-locked**; needs explicit founder unlock + concrete spec.
6. State Boards launch (post CBSE/ISC stabilization): flip = remove keys from `COMING_SOON_PROGRAM_KEYS` in `lib/subscription.ts` (one line) + author state syllabus data.
7. Admin console: build real platform analytics behind the existing role gate (currently an honest management-links panel).
8. Consider `vercel env pull` locally to restore browser-verifiable auth flows in dev.

---

**Standing rules (unchanged):** SSOT, reuse before build, no mock data, only real user activity in analytics, Snap & Solve stays a visible flagship, no email-based access checks, structure before features, production-ready only.
