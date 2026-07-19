# Chemical Bonding 189 — Recovery & Restore

## Preferred: restore from git (main is the source of truth)

```
git fetch origin main --prune
git show origin/main:app/learn/chemical-bonding/parts/topicData.ts > <target>
```

The 189 rebuild landed in commit `8238df90`
("feat(chemical-bonding): complete authoritative 189-topic notes (#7)").
Any file can be restored from that commit or any descendant of it.

## Fallback: snapshot in this handoff

`snapshot/current/` contains a verbatim copy of every chemical-bonding source
file and the three proof documents, taken 2026-07-19 from commit `093a8a42`.
Verify integrity against `manifests/SHA256SUMS.txt`:

```
cd AI_HANDOFF/chemical-bonding-189
shasum -a 256 -c manifests/SHA256SUMS.txt   # run from repo root paths
```

## Off-repo archives (NOT committed — local machine only)

In `~/Downloads` at handoff time:

- `chemical_bonding_189_rebuild_package.zip`
  SHA-256 `165438d528b2dd416be1a6f103732cf74ff5cd49878f61d34c865382381ae6d7`
- `chemical_bonding_corrected_package.zip`
  SHA-256 `71193d11c370e6a80f7d82e6a54b05918d2bffbc8baeaae3a7ed68f223bd4407`
  (matches the historically recorded corrected-package hash)
- `chemical_bonding_complete_package.zip` — ⚠️ OLD, contains known chemistry
  errors. NEVER treat as an authoritative source.

Historical build worktree (temporary, may be deleted by the OS):
`/private/tmp/synergicbond-chemical-bonding-189-20260719-103945`
branch `feat/chemical-bonding-189-20260719-103945` — superseded by the merge
of PR #7; only useful for archaeology.

## Safety rules for any recovery

- Never reset/clean/stash unrelated local work — this repo often carries
  active WIP for other chapters (isomerism, hydrogen, atomic structure…).
- Never force-push main.
- Preserve every protected chemistry correction listed in `START_HERE.md`.
