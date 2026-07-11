# Atomic Structure Premium Redesign Audit

## Batch 1 — Parts 01–05

- Branch: `feature/atomic-structure-premium-redesign`
- Processed scope: Parts 01–05 only; Parts 06–55 were not edited.
- Shared system: premium chapter shell, responsive formula/table containers, visible keyboard focus, progress indicator, reusable accessible SVG primitive, and gold-foil visual.
- Retention inventory: Part 01 (Dalton postulates, discharge tube, cathode-ray properties, e/m); Part 02 (crossed-field derivation, oil-drop data/problem, electron mass and classical radius); Part 03 (canal rays, proton properties and ionisation equations); Part 04 (neutron reaction/constants, Thomson model, gold-foil observations and scattering law); Part 05 (deflection table, nuclear-radius relation, closest approach, impact-parameter derivation and cross section).
- Content-retention result: all existing academic sections, formulae, steps, tables, questions, answers and diagram meanings from Parts 01–05 retained. Two previously omitted classical-electron-radius relations are now stated as typed content.
- Scientific corrections: Dalton statements are explicitly framed as historical model claims; chemical-reaction conservation is scoped to chemical reactions; Goldstein/canal-ray and Rutherford/proton attribution is corrected; the centrifugal-force language is corrected by distinguishing inertial and rotating frames. These change presentation and attribution, not the intended concepts.
- Equation review: all Batch 1 KaTeX expressions reviewed for delimiter balance; no changed equation was removed.
- Visuals: existing tube, field-deflection, Thomson, geometry and radius diagrams retained; an original labelled Rutherford gold-foil SVG added with title and description.
- Graphs: none warranted by the Batch 1 content.
- Accessibility/responsiveness: semantic article/header/navigation structure, labelled progress, focus-visible controls, responsive SVGs and horizontal overflow for mathematical/table content.
- Performance: reusable inline SVG and server-safe static markup only; no dependency or animation-library added.
- Forbidden-term audit: passed for student-facing Batch 1 files.
- Route/part validation: 55 static part files and 55 route registrations retained; Parts 56–60 absent.
- Manual review: verify the original historical wording against the owner-held material if a literal archival transcription is required.
- Exact next batch: Batch 2 — Parts 06–10.

## Batch 2 — Parts 06–10

- Content inventory and retention: Part 06 (cross-section derivation, closest-approach examples, density); Part 07 (momentum problem, Rutherford limitations, EM-wave and spectrum statements); Part 08 (wave terms, frequency example, black-body and Wien material); Part 09 (heating/peak observations, Stefan-Boltzmann, Planck/Rayleigh-Jeans derivation); Part 10 (Rayleigh-Jeans, Planck postulates, photon-energy examples). All existing academic steps, formulae, questions, answers, tables and diagram meanings were retained.
- Corrections: Part 06 adds the negative derivative sign for decreasing scattered fraction and explicitly uses its magnitude for counts (presentation correction). Part 07 limits speed c to vacuum and preserves an unverified note as `[UNCLEAR]` (meaning clarified). Part 09 distinguishes energy density `u` from radiant exitance `M`, fixes the Stefan spelling and defines units/role (notation and scientific correction).
- Shared visual extension: accessible `ElectromagneticSpectrumVisual`; all new SVGs include title and description.
- Forbidden-term, equation-delimiter, route and navigation audit: passed. Parts 01–05 and 11–55 untouched.
- Exact next batch: Batch 3 — Parts 11–15.
