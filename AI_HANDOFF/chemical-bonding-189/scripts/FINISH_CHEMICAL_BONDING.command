#!/bin/bash
set -euo pipefail

REPO="/Users/mritunjayshukla/Documents/Synergic Bond"

echo "=============================================================="
echo " SYNERGIC BOND — FINISH CHEMICAL BONDING END-TO-END"
echo "=============================================================="

[ -d "$REPO" ] || { echo "ERROR: Repo not found: $REPO"; exit 1; }
cd "$REPO"
git rev-parse --show-toplevel >/dev/null

echo "Repo: $(git rev-parse --show-toplevel)"
echo "Branch: $(git branch --show-current)"
git status --short || true

ZIP="$(find "$HOME/Downloads" -maxdepth 2 -type f -iname '*chemical*bonding*corrected*package*.zip' -print 2>/dev/null | while IFS= read -r f; do printf '%s\t%s\n' "$(stat -f '%m' "$f" 2>/dev/null || echo 0)" "$f"; done | sort -nr | head -1 | cut -f2-)"

[ -n "${ZIP:-}" ] && [ -f "$ZIP" ] || { echo "ERROR: Put chemical_bonding_corrected_package.zip in Downloads and rerun."; exit 1; }

echo "Using corrected package: $ZIP"
shasum -a 256 "$ZIP"
unzip -t "$ZIP" >/dev/null
echo "ZIP integrity: PASS"

command -v claude >/dev/null 2>&1 || { echo "ERROR: Claude Code CLI not found. Install/login first."; exit 1; }

PROMPT="$(mktemp /tmp/sb-cb.XXXXXX.txt)"
trap 'rm -f "$PROMPT"' EXIT

cat > "$PROMPT" <<EOF
You are Claude Code running LOCALLY on the user's Mac inside the REAL repository:
$REPO

AUTHORITATIVE INPUT ZIP:
$ZIP

This is the independently corrected Chemical Bonding package with status CHEMICALLY VERIFIED FOR TSX INTEGRATION.

DO THE ENTIRE JOB AUTONOMOUSLY. DO NOT ASK QUESTIONS. DO NOT STOP AFTER A PLAN OR PARTIAL BATCH. DO NOT USE ANY OLDER UNCORRECTED PACKAGE. PRESERVE UNRELATED USER CHANGES. NEVER FORCE-PUSH OR RUN DESTRUCTIVE BLANKET RESET/CLEAN/RESTORE COMMANDS.

GOAL:
Integrate the complete audited Chemical Bonding — JEE Advanced notes into Synergic Bond production: all 13 parts, all active validated SVG chemistry figures, premium gating, JEE Advanced registration, KaTeX, responsive textbook-style UI, validation, commit, push, production deployment, and live verification.

EXECUTE:

1) Verify repo/root/branch/remotes/status. Inspect dirty files. If the working tree is unsafe because of unrelated dirty work, create a clean temporary git worktree from latest origin/main and do this task there, preserving the original tree untouched.

2) Verify the corrected ZIP with sha256 and unzip -t. Extract to a temp import directory outside tracked app files. Read the correction log and independent validation report first. Use corrected files only. If Parts 1–3 are bundled, split by actual Part headings during TSX conversion without changing scientific meaning.

3) Inspect existing high-quality premium note chapters (Atomic Structure, Electrochemistry, Periodic Table/Periodicity, other JEE Advanced notes) and follow the real architecture for routes, part registry, numeric selector, premium server gating, KaTeX, SVGs, responsive layout, dark theme, chapter registry. Upgrade canonical Chemical Bonding route/stub if present; do not create duplicates.

4) Integrate all 13 corrected parts. Numeric selector 1–13. Preserve validated theory, equations, examples, tables, JEE Advanced Insight, Common Trap, Why, Exception, Exam Method, Model Limitation, questions/solutions. Do not summarize or shorten for convenience. Keep files maintainable.

5) Copy/integrate only active validated SVG figures from the corrected package into a sensible public asset tree. Do not activate superseded archived figures. Preserve SVG quality, captions, alt text, aspect ratio, responsive sizing, dark compatibility. Ensure wedges/dashes, lone pairs, angle labels, orbital phases, MO arrows, axial/equatorial labels remain readable. Do not replace chemistry diagrams with generic imagery.

6) Use established KaTeX/math components. No raw markdown math in rendered UI. Correct subscripts/superscripts/charges/arrows/orbital stars. Mobile-safe equation overflow.

7) ABSOLUTE AUDIT REGRESSIONS — MUST REMAIN FIXED:
- Neutral NO = 11 VALENCE electrons (5+6). 15 is total electrons, not valence electrons.
- Preserve corrected alkali perchlorate solubility discussion for KClO4/RbClO4/CsClO4; do not restore simplistic wrong increasing trend or confuse with carbonate trend.
- Preserve corrected NO2/N2O4 treatment leading to O2N–NO2; do not say radical principally on terminal O or dimerization via O–O bond.
- Use only corrected Part 13 Q7 matrix-match.
- Preserve r(N2) < r(N2+), approximately 110 pm -> 112 pm where used.
- Preserve corrected Worked Example 3.3 lattice-energy reasoning.
- SCN- must not become 2-.
- Preserve corrected sulfate problem wording.
- Remove stale placeholders/drafting artifacts/Awaiting instruction.

8) Register Chemical Bonding under JEE Advanced in correct order and canonical slug. Preserve premium/server-side access rules and online-only notes. Do not add download buttons.

9) Visual standard: premium dark textbook layout, compact spacing, readable prose, figures next to explanations, good tables, no giant glowing cards/white panels/huge empty space/tiny body text. Chemistry figures remain the visual focus.

10) Implement continuously in batches without asking:
- Parts 1–3 + assets, validate/fix
- Parts 4–6, validate/fix
- Parts 7–9 especially orbital/hybridisation/VSEPR, validate/fix
- Parts 10–13 especially MO/IMF/metallic/questions, validate/fix

11) Run real validation from package.json conventions, at minimum:
- git diff --check
- npm run lint
- npx tsc --noEmit
- npm run build (or repo-equivalent)
Fix all task-caused errors. If a global failure is genuinely pre-existing/unrelated, distinguish it honestly and run targeted validation proving Chemical Bonding is sound.

12) Start local app and use available browser/Playwright/screenshot tools. Desktop inspect landing + Parts 2,3,5,8,9,10,11,12,13. Mobile inspect at least Parts 2,9,10,13. Fix clipped SVGs, equation/table overflow, navigation/selector, spacing, dark-theme and caption defects.

13) Regression search source tree for:
"15 valence" "NO has 15" "SCN 2-" "SCN²-" "odd electron on oxygen" "terminal oxygen dimer" "Awaiting instruction"
Review contextually and ensure no known critical/major audit error reappears.

14) Final forensic diff:
- git status --short
- git diff --stat
- git diff --check
Inspect actual diff. Stage ONLY intended Chemical Bonding files/assets plus required JEE Advanced registry/navigation/shared component changes. Never stage unrelated dirty files or temp extraction artifacts.

15) After validations pass, FINISH PRODUCTION:
- commit intended files: feat(chemical-bonding): integrate audited JEE Advanced notes
- safely synchronize with latest origin/main
- never force-push
- push validated work to origin main
- deploy with repository's established Vercel production workflow; if none special, npx vercel@latest deploy --prod --yes

16) LIVE VERIFY PRODUCTION:
- determine canonical live Chemical Bonding route
- verify HTTP success
- Parts 1–13 reachable
- premium behavior consistent
- representative SVG assets load
- NO does not say 15 valence electrons
- corrected content present
- VSEPR/MO figures load
- no runtime crash
If a task-caused production defect exists: fix -> revalidate -> scoped follow-up commit -> push -> redeploy -> verify again.

17) FINAL TERMINAL REPORT ONLY AFTER COMPLETION:
- repo/worktree used
- corrected ZIP SHA-256
- canonical route
- Parts integrated count
- active SVG count integrated
- JEE Advanced registration
- premium gating
- audit regression checks
- diff-check/lint/TypeScript/build results
- desktop/mobile checks
- commit SHA
- pushed branch
- Vercel production URL
- live verification result
- any genuine remaining blocker

DO NOT END WITH "READY TO DEPLOY". ACTUALLY COMPLETE DEPLOYMENT AND LIVE VERIFICATION.
EOF

echo
echo "Starting LOCAL Claude Code. Do NOT paste this into claude.ai."
echo

unset ANTHROPIC_API_KEY ANTHROPIC_AUTH_TOKEN ANTHROPIC_BASE_URL CLAUDE_CODE_USE_BEDROCK CLAUDE_CODE_USE_VERTEX CLAUDE_CODE_USE_FOUNDRY 2>/dev/null || true

claude -p "$(cat "$PROMPT")" --permission-mode bypassPermissions --add-dir "$(dirname "$ZIP")"

echo
echo "=============================================================="
echo " CLAUDE CODE FINISHED — CURRENT REPO STATUS"
echo "=============================================================="
cd "$REPO"
git status --short || true
git log -1 --oneline || true
