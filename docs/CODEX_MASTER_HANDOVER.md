# Synergic Bond — Codex Master Handover

> Canonical engineering handover as development transitions from Claude to Codex.
> Written 2026-07-11. Read this **before** touching the repository.

---

## 1. Canonical repository & branch

- **Repository:** `https://github.com/synergicbond-ctrl/synergicbond.git`
- **Local working copy (authoritative):** `/Users/mritunjayshukla/Documents/Synergic Bond`
- **Working branch:** `feature/atomic-structure-60-part-tsx`
- **Do NOT use:** `/Users/mritunjayshukla/workspace/synergicbond` (stale mirror).
- **Never** work off `synergic-bond-clone/` — a nested clone now untracked/gitignored.
- Latest pushed HEAD at handover: `8462425` (see §5).
- Do **not** merge to `main` or deploy without human sign-off.

---

## 2. Stack & architecture map

- **Framework:** Next.js **16.2.9** (App Router). ⚠️ This is a modern Next with
  breaking changes vs. older training data. **Read `node_modules/next/dist/docs/`
  before writing framework code.** Notable: middleware is `proxy.ts` (root),
  `params`/`searchParams` are **Promises** (`await params`).
- **Auth/DB:** Supabase (`@supabase/ssr`, `@supabase/supabase-js`). Server client:
  `lib/supabase/server.ts` (`createClient()`, cookie-based).
- **Payments:** Razorpay (`app/api/payment/*`). Amounts are **server-authoritative**
  (`lib/subscription.ts` → `PLANS`, `PROGRAM_ACCESS_PRICE_PAISE_BY_KEY`).
- **AI:** Google Gemini (`@google/genai`, `@google/generative-ai`), OpenAI SDK
  present. Helpers: `lib/gemini.ts`, `lib/ai/*`, `lib/aiTutor.ts`.
- **Analytics:** `@vercel/analytics`.

### Access-control system (single source of truth)
| Concern | File | Notes |
|---|---|---|
| Client-safe role primitives | `lib/auth/roles.ts` | `profiles.role` → owner/admin/mentor/student; `isPrivileged`, `getAccessUser` |
| Server access façade | `lib/auth/access.ts` | imports server-only; `hasPremiumAccess`, `canAccessContent`, `hasProgramAccess` |
| Route gating rules (pure) | `lib/access/contentAccess.ts` | `requiresAuth`, `isPublicRoute`, `isFreeChapter`; used by `proxy.ts` |
| Purchased entitlements | `lib/access/entitlements.ts` | Pro ⇒ all keys; granular rows from `user_program_entitlements` |
| **Shared route guards (NEW)** | `lib/auth/guards.ts` | `requireAdmin`, `requirePaidContent`, `requireProgramEntitlement` |
| **AI route guard (NEW)** | `lib/ai/guardAiRequest.ts` | auth + shared rate limiter for paid AI POST routes |
| Rate limiter | `lib/rateLimit.ts` | in-memory fixed-window (per warm instance — see §8) |
| Free chapters SSOT | `lib/freeChapters.ts` | `mole-concept`, `redox-reactions`, `periodic-table`, `goc` |
| Board/class SSOT | `lib/boardDashboard.ts` | boards `cbse`/`icse`/`state-boards`, classes `class-11`/`class-12` |
| Syllabus SSOTs | `lib/cbse/syllabus.ts`, `lib/isc/syllabus.ts`, `lib/boards.ts` | chapters carry `class: 11|12` |

**Enforcement model:** `proxy.ts` redirects signed-out users off protected paths.
Page/layout guards then enforce **entitlement** (Pro / purchased program / role).
Privileged (owner/admin) bypasses paywalls. Auth alone never grants paid content.

---

## 3. Atomic Structure completion

- **55 part TSX files:** `app/learn/atomic-structure/parts/part01.tsx … part55.tsx`
  (+ `_shared.tsx`).
- **Routed** via `app/learn/atomic-structure/[part]/page.tsx` — all 55 registered in
  the `parts` map and enumerated by `generateStaticParams`.
- Index: `app/learn/atomic-structure/page.tsx`; chapter entry `app/chapter/atomic-structure`.
- The branch is named `…-60-part…` but the **verified scope is 55 parts**; the final
  commit notes "pages 176-192 out of scope". Do not fabricate parts 56-60 without source.
- Verified continuously by `npm run launch-safety` (check #6).

---

## 4. Source-page coverage (current)

- Learn modules present: `atomic-structure` (55), plus `chemical-bonding`,
  `mole-concept`, `periodic-table`, `reactions`, `thermodynamics` scaffolds.
- Notes chapters: free — `mole-concept`, `redox-reactions`; premium (gated) —
  `electrochemistry`, `concentration-terms`, `eudiometry`, `stoichiometry`,
  `some-basic-concepts-of-chemistry`.
- PYQ: `lib/pyq` — **all questions `NEEDS_MANUAL_REVIEW` (0 verified)**; NEET set
  (`scripts/validate-neet-pyq` reports ~909 items) validated for integrity, not
  authenticity. See §9.

---

## 5. Latest commits (this mission)

```
8462425 chore: stop tracking nested synergic-bond-clone (repo bloat)
5977180 test: add deterministic launch-safety regression checks
128352b ci: add launch-safety validation workflow
c8d2903 feat: add production security headers and error/not-found pages
8d9d0f8 feat: add legal policy drafts (privacy, terms, refund)
09cd39f fix: authenticate and rate-limit AI provider routes
09334c4 fix: enforce premium notes, board entitlements, and admin protection
a1aab40 feat: add atomic structure part 55 (final)   ← pre-mission baseline
```

---

## 6. Completed P0 launch-safety fixes

1. **Premium notes protection** (`09334c4`) — `lib/auth/guards.ts:requirePaidContent`
   + a `layout.tsx` in each premium chapter dir; `/notes/` added to proxy protected
   sub-prefixes; free chapters exempt via `isFreeChapter`. Signed-out → sign-in;
   signed-in-unpaid → `/pricing`.
2. **Board entitlement isolation** (`09334c4`) — `app/dashboard/[board]/[class]/layout.tsx`
   → `requireProgramEntitlement("<board>:<class>")`. One purchase never unlocks another.
3. **Admin protection** (`09334c4`) — `app/admin/layout.tsx` → `requireAdmin` (owner/admin
   only; 404 for others).
4. **AI auth + rate-limit** (`09cd39f`) — `lib/ai/guardAiRequest.ts` on 16 paid POST
   routes. Closed auth holes in `reaction` & `assignment/generate`; gated anonymous `chat`.
   Snap & Solve untouched.
5. **Legal drafts** (`8d9d0f8`) — `/privacy`, `/terms`, `/refund` + footer/pricing links.
6. **Security headers + error pages** (`c8d2903`) — `next.config.ts` headers,
   `not-found.tsx`, `error.tsx`, `global-error.tsx`.
7. **CI** (`128352b`) — `.github/workflows/ci.yml`.
8. **Regression checks** (`5977180`) — `scripts/launch-safety-checks.mjs` (28 assertions).
9. **Repo bloat** (`8462425`) — nested clone untracked (−50k LOC).

---

## 7. Unresolved work (P0/P1/P2) → see `POST_CLAUDE_TASK_QUEUE.md`

Headlines: distributed rate limiter (P1), CSP rollout (P1), GET-route AI metering
(P1: `daily-practice` is anonymous+AI), final legal review (P0 non-code), Supabase
migration confirmation (P0 non-code, §10), remove three untracked ` 2` dupe files.

---

## 8. Safe Git workflow

- Branch off the working branch; small, single-purpose commits.
- **Never stage:** `private/`, `tmp/`, `.next/`, PDFs, rendered images, logs, caches,
  `synergic-bond-clone/`, or the three ` 2`-suffixed macOS dupes.
- Commit message trailer: `Co-Authored-By: …` as configured.
- Push after every validated checkpoint. Do **not** merge to `main` / deploy.

---

## 9. Validation commands (run before every commit)

```bash
npm run typecheck        # tsc --noEmit
npm run lint             # eslint
npm run build            # full production build (no secrets required to compile)
npm run launch-safety    # 28 P0 invariant assertions
npm run validate-neet-pyq
```

At handover: typecheck ✅, lint ✅, build ✅, launch-safety ✅ (28/28).

---

## 10. Supabase migration status — REQUIRES HUMAN CONFIRMATION

Migrations `supabase/migrations/006…017`. Access control depends on two that
**must be confirmed applied to production** (code degrades gracefully, which can
mask a missing migration):

- **`016_profiles_role.sql`** — adds `profiles.role`. If NOT applied: everyone
  resolves to `student` → **fails safe** (no privileged bypass; owner/admin lose
  all-access). Owner cannot use the platform as owner until applied.
- **`013_program_entitlements.sql`** — `user_program_entitlements`. If NOT applied:
  granular board purchases degrade to Pro-only → **board purchasers without Pro get
  locked out** of their class dashboard. Confirm before selling per-board access.

A human must verify both in the production Supabase project. Do not assume.

---

## 11. Deployment checklist (human-gated)

1. Confirm migrations §10 applied to prod.
2. Set all env vars (§12) in the host; `FOUNDER_DEV_BYPASS` **unset/false** in prod.
3. `npm run build` green; CI green on the PR.
4. Verify HSTS only serves over HTTPS (it is `NODE_ENV==='production'`-gated).
5. Smoke test: sign-in redirect on a premium note; board entitlement gate; admin 404
   for a normal user; a paid AI route returns 401 when signed out, 429 under spam;
   Razorpay checkout; payment webhook path unaffected.
6. Legal pages reviewed by an Indian lawyer (§13).

---

## 12. Required secrets (by NAME only — never commit values)

`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`,
`SUPABASE_SERVICE_ROLE_KEY`, `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`,
`NEXT_PUBLIC_RAZORPAY_KEY_ID`, `RAZORPAY_WEBHOOK_SECRET`, `GEMINI_API_KEY`,
`GOOGLE_API_KEY`, `OPENAI_API_KEY`, `FOUNDER_DEV_BYPASS` (must be false/unset in prod).

CI compiles with **placeholder public values only** — no production secret is required
to build.

---

## 13. Verified vs unverified PYQ status

- `lib/pyq` questions are **all `NEEDS_MANUAL_REVIEW` — none verified.** The UI/data
  must keep reporting this honestly. **Do not relabel a question `VERIFIED` without
  a real source review.** `npm run launch-safety` check #9 fails if any verified
  literal appears; upgrade that check to *require a source field* once genuine
  verification begins.

---

## 14. Legal-review reminder

`/privacy`, `/terms`, `/refund` are good-faith **product drafts**, marked internally
(code comments) as requiring final review under Indian law (DPDP Act 2023, IT Act &
SPDI Rules, Consumer Protection Act 2019 / e-commerce rules, GST/refund rules).
**Not certified.** Do not present as final legal terms until a lawyer signs off.

---

## 15. Recommended Codex batch sizes

- **Content (notes/PYQ authoring):** 3–6 chapter-parts per batch, one commit each,
  run `launch-safety` + `typecheck` after each.
- **Route/guard changes:** 1 logical concern per commit; always add/extend a
  `launch-safety` assertion in the same batch.
- **AI-route changes:** ≤5 routes per batch; re-run `typecheck` + `build`.
- **Migrations:** one migration per PR; never auto-apply — human confirms in prod.
- Keep each batch under ~400 changed lines where possible so review stays tractable.
