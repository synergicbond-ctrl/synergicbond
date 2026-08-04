# Deployment Report

- **Branch**: `chore/chemistry-chapters-audit`, created from `origin/main` at `11ac0be` (the local
  clone was 82 commits behind `origin/main` at session start and was fast-forwarded first — see
  commit history for detail).
- **Commits so far**: 13, covering Adsorption, Surface Chemistry (audit only), S-Block,
  Environmental Chemistry, Salt Analysis (audit only), Hydrogen, Polymers (audit only), Formal
  Charges (audit only), Liquid Solutions, a source-note-leak + branding sweep across Chemical
  Kinetics/Gaseous State/Solid State, a Solid State route investigation (with a logged
  self-correction), and F-Block (audit only). Full list: `git log origin/main..HEAD --oneline`.
- **Pushed to remote**: yes, continuously, after every checkpoint.
- **PR**: [#23](https://github.com/synergicbond-ctrl/synergicbond/pull/23), open, targeting `main`.
- **Backup tag**: `backup/main-before-chemistry-audit-20260801`, pushed, points at `origin/main`
  before this branch's work started.
- **Build verification, done this session**:
  - `npx tsc --noEmit -p .` — clean (0 errors), run repeatedly throughout, most recently after
    the last content commit.
  - `npm run build` (the actual production build, not just typecheck) — **found and fixed a
    real, pre-existing environment gap unrelated to this branch's changes**: `react-katex` was
    declared in `package.json` but never actually installed in `node_modules`, so the build
    failed on `surface-chemistry-shared.tsx` and `chemical-kinetics-shared.tsx` with
    `Module not found: Can't resolve 'react-katex'`. Ran `npm install` (not `npm audit fix
    --force`, which stays off-limits per this session's rules) to sync `node_modules` with
    `package.json` — 2 packages added. Reran the build: **clean, exit 0, zero warnings**, every
    route compiled including all 13 chapters' routes and the new canonical S-Block route.
- **Vercel preview**: built successfully during PR review (status checks `Vercel – synergicbond`
  and `Vercel – synergicbond-thermodynamics-production` both `SUCCESS` on the PR head commit).

## Merge and production deploy — 2026-08-02

- **Merged**: PR #23 merged into `main` via `gh pr merge 23 --merge`, merge commit
  `97bb454` (parents: `cc9e381` i18n fix already on `main`, and `7288aa8` this branch's tip).
- **CI note**: the repo-wide `typecheck · lint · build` GitHub Action check was `FAILURE`
  (165 pre-existing lint errors, all in `app/notes/d-block/*` and `scripts/pyq-audit.ts` —
  confirmed unrelated to any file touched by this branch, see `ROUTE_AUDIT.md`). `main` has no
  branch protection rule (`404` on the protection API), so this did not block the merge; it was
  not overridden or bypassed, there was simply nothing gating it.
- **Production deploy**: triggered automatically by the merge via Vercel's GitHub integration.
  Both `Vercel – synergicbond` and `Vercel – synergicbond-thermodynamics-production` reached
  `SUCCESS` on commit `97bb454` (confirmed via `gh api .../commits/97bb454/status`, overall
  state `success`), not just "started building."
- **Production verification**: `curl` against `www.synergicbond.com` confirmed every touched
  route (old `/surface-chemistry/adsorption` redirect target, `/surface-chemistry/parts/part01`,
  `/inorganic-chemistry/s-block`, `/chemical-kinetics`, `/gaseous-state`, `/salt-analysis`,
  `/chemical-bonding/formal-charges`, `/solid-state`) resolves with a clean `307` to the auth
  gate (`/auth/signin?next=...`) — no `404`/`500`s, confirming the routes exist and are
  recognized by `proxy.ts` middleware. Content itself sits behind the site's premium-content
  sign-in wall, so it was not visually inspected logged-in this session (no test account
  credentials available, and creating/authenticating an account is outside this session's
  allowed actions).

This closes out the "push commit and deploy" request. Remaining scope (deep scientific
verification pass, full desktop/tablet/mobile browser QA while signed in, source-coverage report,
D-block/pyq-audit.ts lint cleanup) is tracked separately and was not part of this deploy step.
