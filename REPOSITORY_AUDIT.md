# REPOSITORY_AUDIT.md — Synergic Bond

> **Deep audit of `main` @ `ffef48d`.** Scores are reasoned judgements (each justified). Findings are graded Critical / High / Medium / Low. Facts are verified from source; inferences are marked **(assumption)**.

---

## 1. SCORECARD

| Dimension | Score | One-line justification |
|---|---:|---|
| **Architecture** | 7/10 | Clean "golden pattern" (seed→cache→AI→zod→persist) + typed SSOT + graceful degradation. Held back by undocumented schema & some inline-AI drift. |
| **Scalability** | 5/10 | Mechanism cache scales beautifully; but ephemeral memory, uncached AI elsewhere, and no rate limiting cap real throughput/cost. |
| **Security** | 4/10 | RLS + anon-key + no secrets in repo = good base. **No server rate limiting**, unverified RLS on 7 tables, possible error leaks drop it. |
| **Maintainability** | 5/10 | Strong patterns where new; duplicate datasets, dead files/deps, committed node_modules clone, no tests pull it down. |
| **Performance** | 6/10 | Lazy OpenChemLib + multi-tier mechanism cache are excellent; rest regenerates and refetches; bundle carries dead SDKs. |
| **Developer Experience** | 5/10 | Path aliases, conventional commits, good in-code comments; but no tests/CI, Next-16 docs friction, schema not reproducible. |
| **Product Readiness** | 5/10 | Deployed, broad, several polished flagship areas; many scaffolds, undefined paywall, sparse error/loading states. |
| **Overall** | **5.3/10** | Promising architecture on an under-hardened foundation. |

---

## 2. CRITICAL FINDINGS (fix before scaling)

### C1 — Database is not reproducible from the repo
- **Evidence:** `.from(...)` grep references **9 tables** (`analytics, exam_results, mistakes, profiles, reaction_mechanisms, saved_chapters, study_sessions, subscriptions, user_xp`); `supabase/migrations/` defines **2** (`user_xp`, `reaction_mechanisms`). Migration 001 only `ALTER`s `study_sessions` (no CREATE).
- **Impact:** A fresh environment cannot rebuild the DB. Schema drift is invisible. Onboarding any new dev/AI is blocked.
- **Fix:** `supabase db pull` → commit migrations for all tables; verify RLS on each.

### C2 — `zod` is used everywhere but is not a declared dependency
- **Evidence:** `import { z } from "zod"` in `mechanismSchema.ts`, `snapSolveTypes.ts`, etc. `zod` is **absent from `package.json` dependencies**; it currently resolves only transitively (installed 4.4.3 via `next`/`openai`/etc.).
- **Impact:** A lockfile change, `npm dedupe`, or removing the `openai` dep (recommended!) can make `zod` vanish → **build breaks**. Ironically, fixing dead-dep C-level debt could trigger this.
- **Fix:** `npm i zod@4` to declare it directly. **Do this before removing `openai`.**

### C3 — No server-side rate limiting on paid AI routes
- **Evidence:** `lib/rateLimiter.ts` is explicitly client-only (its own comment), used by exactly **one page** (`app/doubt-solver/page.tsx`) and **zero API routes**. 15 public routes call Gemini.
- **Impact:** Unbounded cost + abuse; a single script can drain the Gemini quota/budget.
- **Fix:** per-IP + per-user token bucket (KV/DB) on every AI route.

---

## 3. HIGH FINDINGS

### H1 — Committed third-party clone incl. node_modules
- **Evidence:** `git ls-files synergic-bond-clone | wc -l` = **1,155** tracked files, including `…/node_modules/caniuse-lite/...`.
- **Impact:** Repo bloat, slow clones, confusion about what's live, security-scan noise.
- **Fix:** `git rm -r --cached synergic-bond-clone/` + add to `.gitignore`.

### H2 — Inconsistent error handling across routes
- **Evidence:** Only `reaction` + `snap-solve` are verified to never leak; the other 23 routes use ad-hoc handling.
- **Impact:** Potential `err.message` / stack leakage; inconsistent UX.
- **Fix:** shared `safeError()` helper; audit all routes.

### H3 — Ephemeral `memoryCore` presented as student "memory"
- **Evidence:** `lib/memoryCore.ts` is an in-memory `Map`; its own header documents it's per-warm-instance, wiped on cold start, not shared across instances.
- **Impact:** On Vercel, Snap & Solve "memory"/adaptation is effectively random per request → feature promise unmet at scale.
- **Fix:** move to Supabase/KV.

### H4 — Validation only on 2 of the AI surfaces
- **Evidence:** zod schemas exist only for mechanisms + snap-solve; notes/quiz/exam/doubt/vision do manual/no validation.
- **Impact:** Unvalidated AI output can render badly or mislead (chemistry-trust risk).
- **Fix:** schema-gate the remaining content-generating routes.

---

## 4. MEDIUM FINDINGS

### M1 — Duplicate code / datasets
- **Two syllabus trees:** `lib/syllabus/` and `lib/masterSyllabus/` (overlapping organic/inorganic/physical/types). Two sources of truth → drift risk. **(assumption: `masterSyllabus` is the newer/intended one — confirm imports before deleting either.)**
- **Duplicate components:** `Navbar.tsx` + `Navbar.v1.tsx`; `AIChemistryEngine.tsx` + `AIChemistryEngine.v1.tsx`.

### M2 — Dead code & dependencies
- **Dead deps (0 imports in `app`/`lib`/`components`):** `@google/generative-ai`, `openai` (only referenced by the unused `lib/openai-client.ts`), `claude`, `axios`.
- **Dead files:** `lib/openai-client.ts`, `lib/supabase.ts.backup`, empty `AI_CONTEXT.md` (0 bytes), `app.txt`, `components.txt`, `lib.txt`.
- **Impact:** install/bundle weight, security surface, confusion.

### M3 — Three AI SDKs installed, one used
- `@google/genai` (live), `@google/generative-ai` (dead), `openai` (dead). Consolidate to `@google/genai`.

### M4 — Sparse loading/error UX
- **Evidence:** 1 `loading.tsx`, 0 `error.tsx`, 0 `not-found.tsx` across 62 routes.
- **Impact:** jank on slow AI routes; unhandled render failures show a blank/crash.

### M5 — No tests, no CI
- **Evidence:** no test runner in `package.json`, no test files, no CI workflow detected.
- **Impact:** regressions invisible; risky refactors. Schema + API smoke tests are the cheapest high-value start.

### M6 — Inline Gemini usage bypasses the central client
- `snap-solve`, `vision`, `handwritten-notes`, `chat` use `@google/genai` directly (pinned `gemini-2.0-flash`), bypassing the fallback chain in `lib/gemini.ts`. Drift risk when model ids change.

### M7 — Paywall defined but unenforced
- `PaywallGate`, `PaymentGateway`, `/api/content/access`, `subscriptions` exist, but tiers are undefined and enforcement is light. Monetization not production-ready.

---

## 5. LOW FINDINGS

- **L1 — Hardcoded dark theme** despite a `ThemeProvider` toggle (light mode likely untested).
- **L2 — `next.config.ts` is empty** — no image/domain/perf config.
- **L3 — Multiple stray local env files** (`.env.local.save`, `.env.locales`, `.env.vercel`) — gitignored by `.env*`, but clutter; confirm none were ever committed historically.
- **L4 — `proxy.ts` / `deploy.sh` / `fix-setup.sh`** at root — purpose/currency unverified (assumption: ops scripts).
- **L5 — 4 TODO/FIXME markers** in `app`/`lib`/`components` — small, but track them.
- **L6 — `/debug` route** shipped — confirm it's not reachable/sensitive in prod.
- **L7 — i18n count mismatch in prior docs** (7 languages, earlier handover said 8) — corrected here.

---

## 6. HIDDEN BUGS / SCHEMA DRIFT (suspected — verify)

| Suspect | Why | Check |
|---|---|---|
| `study_sessions` writes | table only ALTERed, never CREATEd in repo | does prod have it? does a fresh DB? |
| Cross-instance memory | `memoryCore` per-instance | adaptation inconsistent under load |
| `subscriptions` reads in `/api/content/access` | table undocumented | RLS correct? schema match? |
| `SCHEMA_VERSION` cache | if shape changes without bump → stale rows render | enforce bump discipline |
| Model id drift on inline routes | `gemini-2.0-flash` hardcoded (no fallback) | will 404 when deprecated |

---

## 7. WHAT'S GENUINELY GOOD (don't "fix" these)

- **The golden pattern** in `/api/reaction` — textbook resilient AI integration.
- **zod SSOT** shared by API + UI (`mechanismSchema`, `snapSolveTypes`).
- **Graceful-degrade cache** (`mechanismCache.ts`) — never throws.
- **Model fallback chain** (`gemini.ts`) — resilient to drift.
- **Lazy OpenChemLib** — keeps the heavy lib off the main bundle.
- **Strong in-code documentation** — `memoryCore.ts`, `rateLimiter.ts`, `mechanismSchema.ts` headers honestly state their own limits.
- **Verified faculty content** — periodic trends, important-orders (207 verified), colour-of-compounds (168) — the real moat.
- **Security base** — RLS own-row policies, anon-key-only, no secrets committed, `.env*` gitignored.

---

## 8. AUDIT SUMMARY

The codebase shows a **clear architectural maturation curve**: early breadth-first scaffolding (Phases 1–6) followed by a disciplined, well-governed pattern (Phases 7–8) that *should now be back-propagated* to the rest of the app. The flagship work is genuinely strong. The risks are all **foundation-level and fixable in days, not months**: make the DB reproducible, pin zod, rate-limit AI, standardize errors, and delete the dead weight. Do those five and the scorecard jumps ~1.5 points across the board.

---

*End of REPOSITORY_AUDIT.md*
