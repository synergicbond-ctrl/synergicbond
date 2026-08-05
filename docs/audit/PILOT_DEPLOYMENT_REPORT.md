# Chemical Equilibrium Pilot — Deployment Report

Final validation of the Learn→Retrieve→Revise pilot (Phases 0–9 of the approved
Information Architecture & Migration Map). **Nothing in this stack is merged, and
the pilot is OFF in every environment until a founder enables it.**

Prepared 2026-08-04 · branch `docs/phase9-pilot-validation`

---

## 1 · What ships (and what does not)

| Phase | PR | Student-visible when merged? |
| --- | --- | --- |
| 0 · Route & analytics baseline | #35 | No — scripts, docs, CI only |
| 1 · Route hygiene | #36 | Only a corrected `/auth/signin` link on a demo CTA |
| 2 · Feature-flag foundation | #37 | No — nothing imports it yet |
| 3 · Retrieval component library | #38 | No — not referenced by any route |
| 4 · Retrieval → attempts wiring | #39 | No — no caller |
| 5 · Pilot on part01 (flag-gated) | #40 | No — flag OFF |
| 6 · Mobile hardening | #41 | Yes — wide tables scroll instead of overflowing on ≤720px (all 18 CE parts) |
| 7 · Performance split + measurement | #44 | No |
| 8 · Accessibility fixes | #45 | Yes — keyboard focus stop on overflowing equations/tables (all 18 CE parts) |
| 9 · This report | — | No |

Two changes are student-visible even with the flag off, both in the Chemical
Equilibrium chapter and both strictly improvements: mobile table scrolling
(Phase 6) and keyboard-reachable scroll containers (Phase 8). Everything else is
dormant.

## 2 · Flag OFF — production behaviour unchanged

Verified on a clean build (`rm -rf .next && npm run build`):

- Pilot rendered output present on `/learn/chemical-equilibrium/part01`: **no**
  (`Pilot preview`, `[PLACEHOLDER]`, `Retrieval pilot` all absent)
- Lesson content intact: **yes**
- Sibling lesson `part02` contains pilot markup: **no**
- Scripts on the page: **16** — the same count as the pre-pilot build

**Honest caveat, carried from Phase 7.** "Byte-identical when disabled" does not
hold. Measured against a build with the pilot import removed entirely:

```
pre-pilot build   1 257 499 bytes of client JS
flag-off build    1 263 016 bytes
dormant cost         +5 517 bytes  (+5.39 KB, never executed)
```

Turbopack groups this route's client modules into one chunk, so the pilot code
rides inside a chunk the lesson downloads anyway. A dynamic import inside the
branch and a bundler-foldable `process.env` literal gate were both tried and
**measured as ineffective**. The cost disappears when the pilot is promoted (flag
retired) or reverted. Flag ON and flag OFF download the *same* bytes — only the
rendering differs.

## 3 · Flag ON — pilot works

With `NEXT_PUBLIC_FF_LOOP_PILOT_V1=1`:

- Pilot section renders below the lesson: **yes**
- Lesson content still intact: **yes**
- Retrieval flow: 2 placeholder checks → confidence capture → session summary
- Results recorded to `attempts` with `source: "embedded"`,
  `title: "embedded:ceq-part01"`, `chapter_id: "chemical-equilibrium"`,
  concept id in `topic`, confidence in `metadata.answerExtras`
- No schema change; `learning_events` deliberately not created

**Not yet verified in a signed-in browser session.** `/learn/chemical-equilibrium/*`
is premium-gated and correctly redirects to `/auth/signin`; the gate was neither
weakened nor bypassed for testing. End-to-end confirmation that an `attempts` row
lands for a real entitled user is a founder/staging step — see §6.

## 4 · Validation matrix

| Check | Result |
| --- | --- |
| `npm run build` (flag off) | ✓ 603/603 pages |
| `npm run build` (flag on) | ✓ 603/603 pages |
| `npm run typecheck` | ✓ clean |
| ESLint (scoped to touched files) | ✓ clean |
| `npm run test:route-audit` | ✓ 7/7 |
| `npm run test:feature-flags` | ✓ 6/6 |
| `npm run test:retrieval-schema` | ✓ 6/6 |
| `npm run test:retrieval-submission` | ✓ 5/5 |
| `npm run audit:links` | ✓ 962 hrefs, 0 findings, baseline empty |
| `npm run audit:routes` | ✓ 405 patterns inventoried |

Contrast (measured): 5.09:1 – 14.46:1 across retrieval tokens — all ≥ AA, most
AAA. Accessibility fixes verified in a live browser: answered options focusable
with `aria-disabled`, sr-only correctness text in the a11y tree, live regions
present and not `display:none`.

## 5 · Safety properties

- **Zero chemistry content changed.** No lesson prose, formula or reaction edited
  in any phase. All pilot questions are `[PLACEHOLDER]`-marked fixtures, and a
  test asserts fixtures carry a `fixture:` concept scope so production chemistry
  cannot enter through that file.
- **Access gates untouched.** No change to `lib/auth/guards`, `lib/access`, chapter
  layouts, entitlements, pricing, webhooks or Supabase policies.
- **No database migration.** `attempts` / `attempt_answers` absorbed the pilot via
  an additive source value and existing `metadata` jsonb.
- **Chemical Bonding untouched**, protected corrections not approached.
- **Rollback**: unset the env var and redeploy (flag), or revert the phase branch
  (code). Neither touches data.

## 6 · Before any student sees this

1. **F6 — faculty content.** Replace `PLACEHOLDER_ITEMS` with authored, approved
   retrieval items. This is the hard blocker; engineering cannot supply it.
2. **Signed-in staging pass.** Enable the flag on a preview deployment, sign in
   with an entitled account, answer both checks, and confirm the `attempts` and
   `attempt_answers` rows (including `metadata.answerExtras[].confident`).
3. **Founder decision on the 5.39 KB dormant cost** (§2) — accept for a gated
   pilot, or hold the pilot branch unmerged until launch.
4. **Merge order.** The nine branches are stacked; each PR targets its
   predecessor. Merge #35 → #36 → #37 → #38 → #39 → #40 → #44 → #45 → this one,
   or squash the stack after review. `main` has advanced (PR #42 merged during
   this work), so a rebase is expected at merge time.
