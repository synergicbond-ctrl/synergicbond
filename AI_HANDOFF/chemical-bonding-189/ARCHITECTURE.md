# Chemical Bonding 189 — Architecture

## Authority

The authoritative specification is **189 numbered topics in exact required
order**. The chapter is complete only against that list — never against the
historical 13-part layout, which is obsolete and must not be restored.

## Layout (validated, deployed)

- **Parts 01–23 — theory.** Content is data-driven: every topic lives in
  `app/learn/chemical-bonding/parts/topicData.ts` as a structured record
  `{ number (1–189, exact syllabus order), title, part (1–23), paragraphs,
  bullets, exam, … }`, rendered by the shared lesson renderer
  `parts/lesson.tsx`.
- **Part 24 — integrated JEE Advanced practice**, in `parts/practice.tsx`.
- `parts/_shared.tsx` — chapter meta + canonical Synergic Bond shell
  (dark navy, cyan/gold tabs — see `components/notes/canonical.tsx`).
- `[part]/page.tsx` — dynamic route serving part01–part24.
- `page.tsx` — chapter hub; `layout.tsx` — premium access gate (never weaken).
- Visuals: `_components/ChemicalBondingDeepVisuals.tsx` (deep original
  chemistry visuals), `_components/ChemicalBondingVisuals.tsx` (earlier set,
  still used), plus shared `components/premiumNotes/visuals/chemicalBonding.tsx`.

## Scientific-accuracy policy

Keep BOTH the traditional/JEE exam model AND the modern interpretation,
explicitly labelled — especially: Sugden singlet-linkage, Sidgwick maximum
covalency, expanded-octet d-orbital explanations, pπ–dπ descriptions,
classical sp3d / sp3d2 / sp3d3 hypervalent hybridisation. Never silently
delete the exam model; never present obsolete simplified models as
unquestioned modern fact.

## Depth bar

JEE Advanced / serious coaching-reference depth: conceptual explanation,
physical reasoning, derivations, equations, assumptions, trends, exceptions,
comparisons, structures, orbital diagrams, geometries, worked examples, JEE
traps. Not an NCERT summary.

## Extending the chapter

- Add/edit topics in `topicData.ts` only, preserving `number` order 1–189
  (or extend beyond 189 with a new authoritative list from the user).
- Keep `docs/chemical-bonding-189-coverage.md` in sync — every topic row must
  stay COMPLETE.
- Re-run the validation baseline (see `VALIDATION.md`) and the protected
  chemistry spot-checks (see `PROTECTED_CHEMISTRY.md`).
