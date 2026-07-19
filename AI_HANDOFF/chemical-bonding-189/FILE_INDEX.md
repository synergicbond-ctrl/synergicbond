# Chemical Bonding 189 — File Index

## Live sources (tracked on main — the single source of truth)

- `app/learn/chemical-bonding/page.tsx` — chapter hub
- `app/learn/chemical-bonding/layout.tsx` — premium access gate (do not weaken)
- `app/learn/chemical-bonding/[part]/page.tsx` — part01–part24 route
- `app/learn/chemical-bonding/parts/topicData.ts` — 189 authoritative topics (≈2448 lines)
- `app/learn/chemical-bonding/parts/lesson.tsx` — shared theory-lesson renderer
- `app/learn/chemical-bonding/parts/practice.tsx` — Part 24 integrated practice
- `app/learn/chemical-bonding/parts/_shared.tsx` — chapter meta + canonical shell
- `app/learn/chemical-bonding/_components/ChemicalBondingDeepVisuals.tsx` — original visuals
- `app/learn/chemical-bonding/_components/ChemicalBondingVisuals.tsx` — earlier visuals still in use
- `components/premiumNotes/visuals/chemicalBonding.tsx` — shared visual support

## Proof documents (tracked on main)

- `docs/chemical-bonding-189-coverage.md` — 189/189 COMPLETE coverage table
- `docs/chemical-bonding-189-audit-before.md` — pre-rebuild audit
- `docs/chemical-bonding-189-rebuild-report.md` — rebuild report

## This handoff bundle

- `START_HERE.md` — entry point (status summary, architecture, corrections)
- `CURRENT_STATUS.md` — main/deployment status table
- `ARCHITECTURE.md` — data-driven 189-topic layout + extension guide
- `PROTECTED_CHEMISTRY.md` — never-regress corrections with spot-check greps
- `VALIDATION.md` — validation baseline + last verified results
- `RECOVERY_AND_RESTORE.md` — how to restore any file (git → snapshot → zips)
- `status/STATUS.md` — git + deployment snapshot at handoff time
- `status/PR7_INFO.txt` — merge record of PR #7
- `status/CHANGED_FILES_8238df90.txt` — changed-file manifest of the rebuild commit
- `status/8238df90-chemical-bonding-189.patch` — full recovery patch of the rebuild commit
- `manifests/FILE_LIST.txt` — tracked chemical-bonding files on main
- `manifests/TREE.txt` — directory tree
- `manifests/SHA256SUMS.txt` — SHA-256 of every handoff artifact
- `snapshot/current/` — verbatim copy of all sources + proof docs
- `archives/` — ZIP packages + `archives/SHA256SUMS.txt` (the KNOWN_BAD zip is named unmistakably)
- `scripts/` — historical INSTALL/RESUME/FINISH scripts (reference only; do not blindly re-run)
- `source-manifest/SOURCE_PDFS.txt` — checksummed inventory of 24 local source PDFs (not committed)
