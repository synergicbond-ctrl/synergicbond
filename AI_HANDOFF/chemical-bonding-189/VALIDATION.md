# Chemical Bonding 189 — Validation Baseline

Run after ANY change touching Chemical Bonding:

```
git diff --check
npx eslint app/learn/chemical-bonding
npm run typecheck
npm run build
```

## Scope rules

- **Chemical-Bonding-scoped ESLint is the task-level lint gate.** Repo-wide
  `npm run lint` has historically failed on unrelated files (e.g.
  `app/learn/periodic-table/PeriodicityQuestionBank.tsx`,
  `app/learn/solid-state/[part]/page.tsx`,
  `components/revision/RecallDecksExperience.tsx`,
  `components/tests/CompleteTestExperience.tsx`). Do NOT modify unrelated
  files merely to make a Chemical Bonding task pass.
  (A dedicated fix for those four files exists on branch
  `fix/eslint-react-effects` / PR #6 — separate concern.)
- Known benign warning at one point: unused variable `i` in
  `ChemicalBondingDeepVisuals.tsx` — 0 errors.

## Content validation

- `docs/chemical-bonding-189-coverage.md` must show 189/189 rows COMPLETE,
  zero PARTIAL/MISSING.
- Topic integrity check:

```
node -e "
const s=require('fs').readFileSync('app/learn/chemical-bonding/parts/topicData.ts','utf8');
const nums=[...s.matchAll(/\"number\": (\d+)/g)].map(m=>+m[1]);
const parts=[...s.matchAll(/\"part\": (\d+)/g)].map(m=>+m[1]);
console.log('topics:',nums.length,'unique:',new Set(nums).size,'ordered:',nums.every((v,i)=>v===i+1));
console.log('parts:',[...new Set(parts)].sort((a,b)=>a-b).join(','));
"
# expect: topics: 189 unique: 189 ordered: true · parts: 1..23
```

- Protected chemistry spot-checks: see `PROTECTED_CHEMISTRY.md`.

## Last verified results (2026-07-19, origin/main 093a8a42)

- 189/189 topics exact and ordered · parts 1–23 + practice part 24 ✅
- coverage 189/189 COMPLETE, 0 PARTIAL/MISSING ✅
- protected-correction spot-checks PASS ✅
- git diff --check PASS · scoped ESLint 0 errors · TypeScript PASS ✅
- Next.js production build PASS · Vercel production deployment SUCCESS ✅
- Live route premium-gated as designed (redirects to /auth/signin) ✅
