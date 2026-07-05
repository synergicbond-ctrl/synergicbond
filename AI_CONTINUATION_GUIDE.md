# AI_CONTINUATION_GUIDE.md — Rules for the Next AI Assistant

> **You are continuing a live project (`synergicbond`, a Next.js 16 "Chemistry OS").** This file is written to be model-agnostic — it works whether you are Claude, ChatGPT, Gemini, Cursor, Codex, Windsurf, Devin, or OpenHands.
> **Read order:** this file → `SYSTEM_ARCHITECTURE.md` → the specific file you're editing. Don't trust memory of "how Next.js works" — see Rule 0.
> Everything here was verified against source on `main` @ `ffef48d`. The reference implementation for *every* pattern below is **`app/api/reaction/route.ts`** — when unsure, copy it.

---

## 0. RULE ZERO — THIS IS NOT THE NEXT.JS YOU REMEMBER

`AGENTS.md` (and `CLAUDE.md`, which @-includes it) mandate: **Next.js here is 16.2.9 and diverges from your training data.** Before using *any* framework API (route handlers, caching, `cookies()`, dynamic params, metadata, server actions), **read the relevant doc in `node_modules/next/dist/docs/`**. Heed deprecation notices. Do not assume Pages-Router or Next-13/14 behavior.

---

## 1. PROJECT RULES (never break these)

1. **Never leak raw AI/DB/model errors to the UI.** Log server-side (`console.error`), return a friendly message + appropriate status. Template: the `UNAVAILABLE` constant + `try/catch` in `app/api/reaction/route.ts`.
2. **Never fabricate chemistry.** Verified content only (NCERT / Clayden / March). Prefer "Not conclusively established" over a confident guess. No invented reagents, intermediates, or fake curved-arrow geometry. This is the product's core value — breaking it destroys trust.
3. **All AI output is validated by a zod schema before use or persistence.** No exceptions for governed features.
4. **The DB is anon-key + RLS.** There is no service-role key. Any new table needs an RLS policy *and* a migration file. Assume any table may not exist yet — degrade gracefully.
5. **Commit/push only when explicitly asked.** This repo commits direct to `main` by convention. End commit messages with the Co-Authored-By trailer.
6. **Don't redesign architecture-locked features.** Snap & Solve is architecture-locked (project memory): inject only explicitly-requested changes, no redesign.
7. **Verify before claiming done.** `npm run build` must be green; use the browser/preview tools to confirm UI changes.

---

## 2. ARCHITECTURE RULES

- **The golden pattern (follow for all generated content):**
  `input clean/validate → seed lookup → persisted cache lookup → AI generate → strip fences + JSON.parse → inject server-owned fields → zod safeParse → persist (graceful) → return`.
- **Server-owned identity fields** (`schemaVersion`, `slug`, `name`, `category`) are injected by the server *before* parse — never trust the model to set them.
- **One root layout** (`app/layout.tsx`). Don't add competing global providers; extend `ThemeProvider`/`LanguageProvider`.
- **Pages don't call Gemini/Supabase for AI flows** — go through `app/api/*`. (Browser `supabase` client is OK for auth/session and simple reads.)
- **Keep OpenChemLib lazy** (`openchemlib/minimal`, dynamic import). Never static-import it into a server bundle or the homepage.
- **No new global state library** without a real, justified need (see ADR-6 in `DEVELOPMENT_LOG.md`).

## 3. SECURITY RULES

- **Add server-side rate limiting to any route that calls Gemini.** `lib/rateLimiter.ts` is client-only — do not rely on it for protection.
- **Authed routes:** `createClient()` → `auth.getUser()` → 401 if null. Never read another user's data without RLS enforcing `auth.uid()`.
- **Every new table:** `ALTER TABLE … ENABLE ROW LEVEL SECURITY` + own-row policies (copy `user_xp` policies in migration 001). Public content caches may use `USING(true)` like `reaction_mechanisms`.
- **Never commit secrets.** `.env*` is gitignored — keep it that way. No service-role key in client-reachable code.
- **Sanitize before `dangerouslySetInnerHTML`** (currently only `StructureView.tsx`). Don't add new uses without sanitizing.

## 4. CHEMISTRY CONTENT RULES

- **Verified sources only.** Cross-check mechanisms, orders, colours against NCERT/Clayden/March.
- **Structured units, not walls of text.** Every text field in a mechanism step is ONE short line (the prompt enforces this; keep it). The whole product moved *away* from AI essays.
- **SMILES must be valid** and represent the actual species; omit a SMILES field rather than invent one.
- **High-stakes reactions should be hand-authored seeds** (`lib/reactionSeeds/`), not left to live generation. Acyloin is the template (`lib/reactionSeeds/acyloin.ts`).
- **Exceptions/orders are sacred** — `important-orders` is PDF-verified; don't auto-generate into it without a verified source (OC/PC tabs are intentionally empty).

## 5. UI RULES

- **Use the design system tokens** in `app/globals.css` (`--background`, `--surface` = the ONE card color, `--accent-cyan`, `--accent-purple`, `--radius`). 80% calm, 20% accent. Accents are **cyan + purple only** in chrome; semantic colours live in content.
- **Use `components/ui/*` primitives** (Button/Card/Badge/Container/Heading/Section/StatCard) instead of bespoke divs.
- **Dark-first.** `<html class="dark">` is fixed; respect it.
- **Mobile-first for new features** (bottom-sheet drawers, horizontal scroll) — match the reaction/snap-solve patterns, not the legacy desktop-shrunk pages.
- **i18n:** user-facing strings go through `t()` / the `LanguageProvider` (7 languages). AI prompts branch by language; cache keys include language.

## 6. DATABASE RULES

- **Before any schema work, run `supabase db pull`** and commit the result — the repo currently captures only 2 of 9 tables.
- **One migration file per change:** `supabase/migrations/NNN_description.sql`. Use `CREATE TABLE IF NOT EXISTS`, `DROP POLICY IF EXISTS` then `CREATE POLICY` (idempotent, like 002).
- **Tables in use** (confirm shapes via pull): `user_xp`, `reaction_mechanisms` (documented); `study_sessions`, `mistakes`, `profiles`, `exam_results`, `subscriptions`, `saved_chapters`, `analytics` (undocumented).
- **All DB calls degrade gracefully** — wrap in try/catch, return null/no-op on failure (copy `lib/mechanismCache.ts`).

## 7. API RULES

- Every route: `export const runtime = "nodejs"; export const dynamic = "force-dynamic";`.
- `POST` JSON in, JSON out. Validate input (`clean()` strips `<>{}` + caps length).
- Friendly errors only; never `return … err.message`.
- Authed routes gate with `auth.getUser()`. Public AI routes still need rate limiting.
- Reuse `lib/gemini.ts` (`generateText`/`generateJSON`) unless you genuinely need vision/SSE (then mirror `snap-solve`).

## 8. VALIDATION RULES

- **Define a zod schema as SSOT** in `lib/*Schema.ts` (or `*Types.ts`); export `z.infer` types so API + UI share one contract. Don't duplicate types.
- `safeParse`, not `parse` — handle failure with a friendly fallback + `console.error` of `parsed.error.issues`.
- **Bump `SCHEMA_VERSION`** when changing a cached schema's shape (invalidates `reaction_mechanisms` rows).
- **Pin `zod` as a direct dependency** before doing schema work (currently transitive-only — latent break).

## 9. PERFORMANCE RULES

- **Cache anything AI generates** (mechanisms already are; notes/quiz/exam/search are not — fix when you touch them). Multi-tier = seed → Supabase → localStorage.
- **Lazy-load heavy client widgets.** Add `loading.tsx` to heavy segments; prefetch reaction/learn links on hover.
- Don't add dependencies casually (3 AI SDKs already bloat install). Prefer removing dead ones.

## 10. DEPLOYMENT RULES

- **Vercel, auto-deploy on push to `main`.** A push *is* a production deploy — be sure the build is green first (`npm run build`).
- Env vars required: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `GEMINI_API_KEY` (or `GOOGLE_API_KEY`). No others are read.
- AI SDK must lazy-init (don't construct `GoogleGenAI` at module top with a hard-required key — historically crashed builds).

## 11. COMMIT RULES

- Direct to `main` is the convention; branch only if asked.
- Conventional-commit style is used (`feat(scope): …`, `fix:`, `refactor:`, `chore:`).
- End commit messages with:
  `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>` (or your model's equivalent trailer).
- Only commit/push when the user asks.

## 12. DOCUMENTATION RULES

- Keep this doc set current: `SYSTEM_ARCHITECTURE.md`, `PRODUCT_SPEC.md`, `DEVELOPMENT_LOG.md`, `AI_CONTINUATION_GUIDE.md`, `REPOSITORY_AUDIT.md`. (The older `PROJECT_HANDOVER.md` is superseded but kept for history.)
- When you change architecture (new table, new pattern, new provider), update the relevant doc in the same change.
- Mark assumptions explicitly; don't state inferred facts as verified.

---

## 13. COMMON MISTAKES TO AVOID

1. Assuming old Next.js semantics (Rule 0).
2. Returning raw error messages to the client.
3. Using the AI output without `safeParse`.
4. Adding a table without an RLS policy + migration.
5. Trusting `lib/rateLimiter.ts` for real abuse protection (it's client-only).
6. Treating `memoryCore` as persistent (it's per-instance, wiped on cold start).
7. Editing `lib/syllabus/*` when the live data is `lib/masterSyllabus/*` (or vice-versa) — confirm which the page imports first.
8. Reviving a `*.v1.tsx` / `*.backup` file thinking it's live (they're dead).
9. Static-importing OpenChemLib (kills bundle / can crash build).
10. Adding `zod` usage while it's still transitive-only (pin it first).
11. Hardcoding a single Gemini model id (use the fallback chain — model ids drift).
12. Enforcing paywalls client-side only (`subscriptions` checks must be server-side).

## 14. DANGEROUS AREAS OF THE CODEBASE (touch with care)

- **`lib/gemini.ts`** — every AI feature depends on it; the model fallback chain exists for a reason (drift). Don't simplify to one model.
- **`lib/mechanismSchema.ts` / `lib/snapSolveTypes.ts`** — SSOT. Changing shapes ripples to API + UI + cache. Bump `SCHEMA_VERSION` and migrate.
- **`lib/mechanismCache.ts`** — graceful-degrade is load-bearing (table may not exist). Don't let it throw.
- **`app/api/snap-solve/route.ts`** — SSE + adaptive pacing + memory; **architecture-locked**. Surgical changes only.
- **`app/layout.tsx`** — global providers + Navbar; a mistake here breaks every page.
- **Supabase RLS / migrations** — wrong policy = data leak or total lockout. Test on a branch DB.
- **`components/mechanism/StructureView.tsx`** — `dangerouslySetInnerHTML`; sanitize.

## 15. SAFE REFACTORING ZONES (low blast radius)

- **Deleting dead files:** `Navbar.v1.tsx`, `AIChemistryEngine.v1.tsx`, `lib/supabase.ts.backup`, `lib/openai-client.ts`, empty `AI_CONTEXT.md` / `app.txt` / `components.txt` / `lib.txt`.
- **Removing dead deps:** `openai`, `@google/generative-ai`, `claude`, `axios` (verify 0 imports first — current grep says 0).
- **Removing committed `synergic-bond-clone/`** (`git rm -r --cached` + gitignore).
- **Adding `loading.tsx` / `error.tsx`** to routes (purely additive).
- **`components/ui/*` primitive polish** (isolated).
- **Static reference datasets** (`periodicTable.ts`, `saltColourCompounds.ts`, `importantOrders.ts`) — additive content edits are safe (keep verified).

## 16. FUTURE RECOMMENDED DIRECTION

Harden the spine, then deepen the flagship loop. Stop adding new routes; **finish or cut** the scaffolds. Concretely: make the DB reproducible, pin zod, rate-limit AI, persist all AI outputs, then invest in the **Learn → Reaction → Practice → Track** loop (the differentiated core) — more seeds, real practice generator, durable student memory, wired engagement (XP on completion). Defer Teacher Hub / monetization enforcement until the single-student loop is excellent.

---

## 17. IMMEDIATE NEXT TASKS — RANKED 1–50

> Grouped by tier; numbered globally. P0 = do before anything else. Effort: S(<½ day) / M(~1 day) / L(multi-day).

### P0 — Foundation hardening (unblocks everything)
1. **(S)** `npm i zod@4` — pin zod as a direct dependency (currently transitive-only; build risk).
2. **(M)** `supabase db pull` → commit real migrations for all 9 tables (`profiles`, `mistakes`, `study_sessions`, `exam_results`, `subscriptions`, `saved_chapters`, `analytics`).
3. **(S)** Run migration `002_reaction_mechanisms` on prod (turn on mechanism cache).
4. **(M)** Add **server-side rate limiting** (per IP + per user) to all AI routes (Upstash/Vercel KV or DB token bucket).
5. **(S)** Verify RLS policies exist for every table from task 2; add own-row policies where missing.

### P1 — Reliability & consistency
6. **(M)** Audit all 25 API routes; replace raw `err.message` with a shared `safeError()` helper.
7. **(S)** Add a global `app/error.tsx` boundary.
8. **(M)** Add `loading.tsx` skeletons to heavy routes (vault, quiz, exam, dashboard, periodic-table, snap-solve).
9. **(M)** Persist Snap & Solve memory to Supabase (replace ephemeral `memoryCore`).
10. **(S)** Remove dead deps: `openai`, `@google/generative-ai`, `claude`, `axios` (confirm 0 imports).
11. **(S)** Delete dead files: `*.v1.tsx`, `lib/supabase.ts.backup`, `lib/openai-client.ts`, empty `.txt`/`AI_CONTEXT.md`.
12. **(S)** `git rm -r --cached synergic-bond-clone/` + gitignore (1,155 tracked files incl. node_modules).
13. **(M)** Resolve the duplicate syllabus datasets (`lib/syllabus` vs `lib/masterSyllabus`) — pick one, migrate, delete the other.

### P2 — Engagement loop (the product's heartbeat)
14. **(M)** Wire XP/streak to reaction/lesson completion (`user_xp` already exists).
15. **(M)** Cache notes/quiz/exam/search outputs (Supabase + localStorage), mirroring mechanisms.
16. **(M)** Hand-author next high-yield reaction seeds: Aldol, Cannizzaro, Diels–Alder, Wittig, Grignard, Aldol-condensation, SN1/SN2 archetypes.
17. **(L)** Real multi-mode Practice/Quiz generator (reuse `/api/quiz`), beyond reusing `examples`.
18. **(M)** Tutor-interrupt UI trigger on Snap & Solve (backend branch exists, no UI).
19. **(S)** Add a `safeError()` + `withRateLimit()` wrapper utility and adopt it (depends on 4, 6).

### P3 — Depth & polish
20. **(L)** Full color-coded category theming across Learn (only purple/reactions done).
21. **(M)** Reaction page: re-introduce valuable sections (Energy Profile, Scope, References) into `MechanismSchema` (+ bump `SCHEMA_VERSION`).
22. **(M)** PYQ frequency analytics (`pyqEngine.ts` foundation).
23. **(L)** Exam generator + evaluation (`adaptiveTestEngine.ts`).
24. **(M)** Reaction Predictor depth (`/reaction-predictor` is a placeholder).
25. **(M)** Durable per-student analytics / readiness intelligence (Supabase-backed).
26. **(S)** Prefetch-on-hover for reaction/learn links.
27. **(M)** Mobile QA pass on legacy desktop-first pages.
28. **(M)** Accessibility pass (focus states, aria, contrast).
29. **(S)** Sanitize OpenChemLib SVG before `dangerouslySetInnerHTML`.
30. **(M)** Extend `lib/gemini.ts` to cover vision/SSE so the 4 inline-Gemini routes stop drifting.

### P4 — Monetization & teacher (defer until loop is excellent)
31. **(M)** Define free/pro tiers explicitly; document in `/pricing`.
32. **(M)** Enforce paywall server-side (`subscriptions` + `/api/content/access` + `PaywallGate`).
33. **(L)** Payment integration hardening (`PaymentGateway.tsx`).
34. **(L)** Teacher Hub: assignment + class analytics.
35. **(M)** Subscription lifecycle (trial, expiry, webhooks).

### P5 — Quality engineering
36. **(M)** Add a test runner (Vitest) + schema tests for `MechanismSchema`/`SnapSolveResponseSchema`.
37. **(M)** API smoke tests for the 25 routes (happy path + 401 + bad input).
38. **(S)** Add CI (typecheck + build + lint) on push.
39. **(S)** ESLint pass; fix warnings; enforce in CI.
40. **(S)** Add `next.config.ts` perf options (image domains, experimental flags per Next-16 docs).

### P6 — Content scale & reach
41. **(L)** Scale reaction seeds toward the top ~50 JEE/NEET reactions.
42. **(M)** Fill vault depth (concepts/facts/exceptions/formulas) with verified content.
43. **(M)** OC/PC important-orders once verified sources exist.
44. **(M)** NCERT highlights feature.
45. **(M)** Mechanism Visualizer as a first-class experience.
46. **(M)** Multilingual *content* (not just UI strings) for top pages.
47. **(S)** Periodic table: complete oxidation-state/MP-BP coverage gaps.

### P7 — Observability & ops
48. **(M)** Add analytics/event logging (the `analytics` table is referenced but undocumented).
49. **(S)** Add server logging/alerting for AI failures + cost (Gemini usage).
50. **(M)** Cost dashboard / quota guardrails for Gemini (tie to rate limiting).

---

*End of AI_CONTINUATION_GUIDE.md*
