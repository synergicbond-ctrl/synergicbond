# Post-Claude Task Queue (for Codex)

> Prioritized, acceptance-criteria-driven backlog created 2026-07-11 after the P0
> launch-safety mission. Companion to `CODEX_MASTER_HANDOVER.md`. Each task lists
> exact file paths and how to verify "done".

Priority key: **P0** = launch blocker · **P1** = fix before scale/marketing push ·
**P2** = hardening / hygiene.

---

## P0 — non-code, human-gated (do not skip)

### P0-1 · Confirm Supabase migrations in production
- **Files:** `supabase/migrations/013_program_entitlements.sql`, `016_profiles_role.sql`
- **Why:** Access code degrades silently; a missing migration masks as "works but
  no one is privileged / entitled".
- **Acceptance:** A human confirms both tables/columns exist in the production
  Supabase project; owner account shows `role='owner'`; a test board purchase writes
  a `user_program_entitlements` row and unlocks exactly that `<board>:<class>`.

### P0-2 · Final Indian legal review of policy drafts
- **Files:** `app/privacy/page.tsx`, `app/terms/page.tsx`, `app/refund/page.tsx`,
  `components/legal/LegalShell.tsx`
- **Acceptance:** A lawyer reviews/edits the copy; the internal "DRAFT — pending
  legal review" code comments are removed only after sign-off.

---

## P1 — fix before scaling

### P1-1 · Distributed rate limiter for AI routes
- **Current:** `lib/rateLimit.ts` is an in-memory fixed-window map — **per warm
  serverless instance**, so the effective global limit is `limit × instances`. Used
  by `lib/ai/guardAiRequest.ts` and Snap & Solve.
- **Task:** Back the limiter with Vercel KV / Upstash Redis (atomic INCR + TTL),
  keeping the same `rateLimit(key, limit, windowMs)` signature so callers are
  unchanged.
- **Acceptance:** Limits hold across instances; `guardAiRequest` and
  `app/api/snap-solve/route.ts` behave identically at the call site; 429s carry
  `Retry-After`.

### P1-2 · Meter AI **GET** routes
- **Files:** `app/api/daily-practice/route.ts` (anonymous + calls Gemini — cost hole),
  `app/api/daily-challenge/route.ts` (auth ok, no limit).
- **Task:** Apply an equivalent guard (auth where appropriate + rate limit). GET has
  no body; pass the `Request` to `guardAiRequest` or refactor to accept a key.
- **Acceptance:** `daily-practice` no longer calls a paid provider for anonymous
  callers unbounded; both routes rate-limited; no regression to the dashboard widgets
  that call them.

### P1-3 · Content-Security-Policy rollout
- **File:** `next.config.ts` (CSP intentionally omitted for now).
- **Task:** Add CSP in **Report-Only** first, allowing Next inline/hydration scripts
  (nonces), Supabase, Razorpay checkout iframe/scripts, and Vercel Analytics; monitor
  reports; then enforce.
- **Acceptance:** Checkout, auth, AI streaming and analytics all work with CSP
  enforced; no console CSP violations on core flows.

### P1-4 · Snap & Solve 500 error message
- **File:** `app/api/snap-solve/route.ts` (~line 517) returns `err.message` on the
  outer catch.
- **Task:** Return a generic message (like the other routes) while still logging
  server-side. **Coordinate — Snap & Solve is architecture-locked**; change only this
  error string, nothing else.
- **Acceptance:** No provider/internal detail in the 500 body; pipeline unchanged.

---

## P2 — hygiene / hardening

### P2-1 · Remove stray macOS duplicate files
- **Files (untracked, do NOT commit — delete on disk):**
  `lib/pyq/neetChemistryPaper 2.ts`, `lib/pyq/questions/neet 2.ts`,
  `scripts/audit_report 2.json`
- **Acceptance:** `git status --short` is clean; `launch-safety` still 28/28.

### P2-2 · Repo doc sprawl
- **Context:** ~70 top-level `*_AUDIT.md` / status docs. Consider moving to `docs/`
  or archiving.
- **Acceptance:** Root is legible; no doc referenced by code/CI is broken.

### P2-3 · Broaden launch-safety coverage
- **File:** `scripts/launch-safety-checks.mjs`
- **Task:** Add assertions as features land (e.g. require a `source` field once any
  PYQ becomes genuinely `VERIFIED`; assert every premium notes chapter dir has a
  layout as new chapters are added).
- **Acceptance:** New invariants fail loudly in CI when violated.

### P2-4 · Rate-limit tuning
- **File:** `lib/ai/guardAiRequest.ts` (default 30/min per user per bucket).
- **Task:** Review per-tool limits against real usage once metrics exist.
- **Acceptance:** Limits documented per bucket; no legitimate user hits them in
  normal study.

---

## Definition of done (every task)
`npm run typecheck` · `npm run lint` · `npm run build` · `npm run launch-safety`
all green, committed in a small focused commit, pushed to the working branch.
No merge to `main` / no deploy without human sign-off.
