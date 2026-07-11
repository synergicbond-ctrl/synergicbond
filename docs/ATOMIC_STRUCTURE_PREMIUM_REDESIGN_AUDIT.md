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

## Batch 3 — Parts 11–15

- Content inventory and retention: Part 11 (photoelectric effect, threshold frequency, work function, Einstein equation, intensity/frequency roles, stopping potential, four observations); Part 12 (emission statements 3–4, photoelectron energy distribution, KEmax relations, particle-nature intensity argument, three collector-potential cases with saturation and stopping potential); Part 13 (case-3 stopping potential, four graph sketches, Millikan reference, V₀–1/λ relation with K/Na/Li lines, colour-prediction question, photon-count question n = IAt/E); Part 14 (work-function table for 12 metals, NCERT visible-photon solved example with all three energies, classical-electron-radius problem eqs 5.1–5.2, caesium Example 11.2, Bohr postulates 1–2 with energy-gap inequalities); Part 15 (Bohr postulates 3–4, angular-momentum quantisation, radius/speed derivations with boxed results and constants 0.529 Å and 2.188×10⁶ m/s, radius table, three speed problems, frequency and time-period derivations with 1.5×10⁻¹⁶ s constant and two worked problems). All headings, formulae, derivation steps, tables, questions, answers and diagram meanings retained; verified against pre-edit Git versions.
- Numerical verification: all Part 14–15 arithmetic re-computed (photon energies 3.19/2.26/1.64 eV; ν₀ = 5.16×10¹⁴ Hz; λ = 454 nm; rₑ = 2.82×10⁻¹⁵ m; Li²⁺ 4th-orbit speed 1.64×10⁶ m/s; n = 4 from 8.464 Å; 1.591×10⁶ m/s by both methods; T = 4.05×10⁻¹⁵ s; f = 1.667×10¹⁵ s⁻¹). No value changed.
- Scientific corrections: Part 13 saturated-current sketch description restored to saturation current (vertical) versus intensity (horizontal) with explicit proportionality; Part 13 stopping-potential–frequency sketch axis labels restored to V₀ versus ν with tan θ = h/e and −φ/e intercept (the transcribed labels were garbled); Part 13 photon-count question clarified as red source vs blue source of equal intensity (required by the recorded conclusion n_R > n_B); Part 14 note added that eq. 5.1 is the conventional definition of the classical electron radius while the exact shell self-energy carries a factor ½; Part 15 outward-force line reframed as the rotating-frame centrifugal magnitude (consistent with the Batch 1 frame correction).
- Retained ambiguity: Part 13 "V_max v/s V" sketch labels are ambiguous in the transcription; preserved verbatim with an `[UNCLEAR]` note that the shape matches photocurrent saturation. Manual review against owner-held material advised.
- Retained teaching simplifications (recorded, not altered): Part 12 statement that a photon is either absorbed with immediate ejection or reflected, and that work function is nearly half of ionisation energy for most metals.
- Notation/grammar: Part 14 Bohr-postulate grammar corrected (proposed/paths/shells/energy levels); Part 15 units normalised to m/s, s, s⁻¹; Part 13 option label "(2)" corrected to "(b)".
- Shared visual extensions (all accessible with title + desc, responsive viewBox): `PhotoelectricApparatusVisual`, `KmaxFrequencyGraph` (slope h, ν₀ intercept, −φ extrapolation, linear coordinates), `PhotocurrentPotentialGraph` (marked representative; same saturation, ordered stopping potentials), `StoppingPotentialFrequencyGraph` (parallel lines, slope h/e), `BohrOrbitsVisual` (marked conceptual, spacing not to scale).
- Forbidden-term audit: passed for Batch 3 student-facing files. Route count 55/55 unchanged; navigation intact.
- Validation: typecheck pass (after removing stray untracked macOS " 2" duplicate artifacts inside git-ignored `.next/`), lint 0 errors, launch-safety 28/28 pass.
- Authenticated in-browser rendering not exercised in this batch run; deferred to the final visual review.
- Exact next batch: Batch 4 — Parts 16–20.
