# Chemical Bonding — 189-Topic Course · START HERE

**Status: COMPLETE and DEPLOYED.** Verified 2026-07-19: the authoritative
189-topic rebuild is merged on `origin/main` (PR #7, commit `8238df90`) and
included in the successful Vercel production deployment of `093a8a42`.
Do NOT rebuild it. Only continue genuinely missing work.

## Architecture (do not regress to the old 13-part layout)

| File | Role |
|---|---|
| `app/learn/chemical-bonding/parts/topicData.ts` | Authoritative structured content — 189 topics, `number` 1–189 in exact syllabus order, each tagged `part` 1–23 |
| `app/learn/chemical-bonding/parts/lesson.tsx` | Shared lesson renderer for Parts 01–23 (theory) |
| `app/learn/chemical-bonding/parts/practice.tsx` | Part 24 — integrated JEE Advanced practice |
| `app/learn/chemical-bonding/parts/_shared.tsx` | Chapter meta + canonical shell (24 lessons) |
| `app/learn/chemical-bonding/[part]/page.tsx` | Dynamic route: part01–part24 |
| `app/learn/chemical-bonding/page.tsx` | Chapter hub |
| `app/learn/chemical-bonding/_components/ChemicalBondingDeepVisuals.tsx` | Deep original chemistry visuals |
| `components/premiumNotes/visuals/chemicalBonding.tsx` | Shared visual support |
| `docs/chemical-bonding-189-coverage.md` | Proof: 189/189 rows COMPLETE, no PARTIAL/MISSING |
| `docs/chemical-bonding-189-audit-before.md` · `docs/chemical-bonding-189-rebuild-report.md` | Audit trail |

Access: premium-gated via the chapter layout (`requirePaidContent`-family
guard). Unauthenticated requests redirect to `/auth/signin` — that is correct
behaviour, not a bug. NEVER weaken the gate.

## Protected chemistry corrections — MUST NEVER REGRESS

1. **NO**: 11 VALENCE electrons (N=5, O=6). Never "15 valence electrons"
   (15 counts core electrons). MOT: bond order 2.5, paramagnetic.
2. **NO₂/N₂O₄**: odd electron principally on N; N₂O₄ is O₂N–NO₂ with a direct
   N–N bond. No terminal O–O dimerisation.
3. **SCN⁻** is singly charged. Never SCN²⁻.
4. **N₂ vs N₂⁺**: r(N₂) < r(N₂⁺); bond orders 3 vs 2.5.
5. **Alkali solubility**: carbonates increase down the group; perchlorates do
   NOT follow that trend (heavier alkali perchlorates sparingly soluble).
6. **Lattice-energy reasoning**: keep the corrected thermodynamic treatment;
   no contradictory lattice-vs-hydration arguments.
7. **O₂ family**: O₂⁺ BO 2.5 para · O₂ BO 2 para · O₂⁻ BO 1.5 para ·
   O₂²⁻ BO 1 diamagnetic.
8. **Sulfate**: keep the corrected formal-charge treatment.
9. No stale placeholders (e.g. "Awaiting instruction").

Scientific-accuracy policy: teach the traditional/JEE model AND the modern
interpretation, explicitly labelled (Sugden singlet linkage, Sidgwick maximum
covalency, expanded-octet d-orbital language, pπ–dπ, sp3d/sp3d2/sp3d3) —
never silently delete the exam model, never present outdated models as
unquestioned modern fact.

## Validation baseline (Chemical-Bonding-scoped)

```
git diff --check
npx eslint app/learn/chemical-bonding
npm run typecheck
npm run build
```

Do not "fix" unrelated files just to make repo-wide lint pass; scope lint to
the chapter.

## Related presentation metadata

- `lib/notes/chapterCatalog.ts` — /notes explorer card for chemical-bonding
  says "24 lessons · 189 topics". Update it if the course structure changes.

## Read next

- `CURRENT_STATUS.md` — what is on main / deployed (the bottom line)
- `ARCHITECTURE.md` — 189-topic data-driven layout; how to extend it
- `PROTECTED_CHEMISTRY.md` — the ten never-regress corrections + spot-checks
- `VALIDATION.md` — validation baseline and last verified results
- `FILE_INDEX.md` — full map of live sources and handoff artifacts
- `RECOVERY_AND_RESTORE.md` — restore paths (git → snapshot → archives)
- `status/` — PR #7 info, full patch of `8238df90`, changed-file list
- `manifests/` — FILE_LIST.txt, TREE.txt, SHA256SUMS.txt
- `snapshot/current/` — verbatim copy of the deployed sources + proof docs
- `archives/` — rebuild/corrected ZIPs (checksummed; the KNOWN_BAD one is
  named unmistakably — never treat it as authoritative)
- `scripts/` — historical installer/resume scripts (do NOT blindly re-run)
- `source-manifest/` — checksummed inventory of local source PDFs (off-repo)
