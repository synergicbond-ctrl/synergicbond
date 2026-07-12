# Thermodynamics Part 18 — Source Coverage Audit

## Student-facing title
Entropy Changes in Phase Transitions, Reactions, and Real Fluids

## Primary handwritten source range
Pages 129–130 of the primary handwritten Thermodynamics notes.

## Page 129 coverage — entropy changes in phase transitions

### Fusion
- H2O(s) ⇌ H2O(l)
- T = 273.15 K
- P = 1 atm
- reversible phase equilibrium
- ΔStotal = 0
- ΔSsys + ΔSsurr = 0
- ΔSsurr = −ΔSsys
- ΔSsurr = −ΔHfusion/Tf
- Tf identified as melting point
- retained result:
  ΔSfusion = ΔHfusion/Tf

### Vaporisation
- liquid and vapour coexist at equilibrium at the boiling point
- H2O(l) ⇌ H2O(g)
- T = 373.15 K
- P = 1 atm
- reversible phase equilibrium
- ΔStotal = 0
- ΔSsys + ΔSsurr = 0
- ΔSsurr = −ΔSsys
- ΔSsurr = −ΔHvap/Tb
- Tb identified as boiling point
- retained result:
  ΔSvap = ΔHvap/Tb

### Trouton’s rule
- retained estimate:
  ΔSvap ≈ 10.5R
- associated/hydrogen-bonded liquids identified as important exceptions
- water specifically retained as a deviation
- rule expressed numerically as approximately 87 J mol⁻¹ K⁻¹
- clarified as an empirical estimate for many non-associated liquids at normal boiling points

### Sublimation
- solid ⇌ gas
- retained result:
  ΔSsub = ΔHsub/Tsub
- Tsub identified as sublimation equilibrium temperature
- reverse deposition sign added explicitly

## Page 130 coverage

### Crystalline modification or transition
- retained result:
  ΔStr = ΔHtrans/Ttransition
- original entropy–temperature graph added
- solid–solid entropy jump explained through different lattice modes and order

### Entropy change of a chemical reaction
- general reaction:
  aA + bB → cC + dD
- retained result:
  ΔrS = ΣSproducts − ΣSreactants
- expanded form:
  ΔrS = cSC + dSD − aSA − bSB
- SA, SB, SC and SD identified as molar entropies
- balanced stoichiometric coefficients retained
- standard-state form independently added:
  ΔrS° = ΣνS°m(products) − ΣνS°m(reactants)
- physical-state requirement explained

### General entropy calculation
- retained starting relation:
  dS = δqrev/T
- chemistry-sign completion:
  δqrev = dU + P dV
- retained T–V expansion of internal energy:
  dU = nCv,m dT + (∂U/∂V)T dV
- corrected general differential:
  dS = nCv,m dT/T + [(∂U/∂V)T + P]dV/T
- thermodynamic identity added:
  (∂U/∂V)T = T(∂P/∂T)V − P

### van der Waals gas
- equation of state:
  (P + an²/V²)(V−nb) = nRT
- retained internal-energy derivative:
  (∂U/∂V)T = an²/V²
- retained differential:
  dS = nCv,m dT/T + nR dV/(V−nb)
- retained integrated form:
  ΔS = nCv,m ln(T2/T1) + nR ln[(V2−nb)/(V1−nb)]
- attraction-parameter cancellation explained
- excluded-volume interpretation added

### Solid and liquid heating
- retained constant-volume relation:
  dS = nCv,m dT/T
- retained constant-Cv result:
  ΔS = nCv,m ln(T2/T1)
- constant-pressure Cp version added for scientific completeness
- Cp ≈ Cv for many condensed phases explained as an approximation, not an identity

## Original visual system
- Animated solid–liquid–gas phase transition map
- Entropy-versus-temperature graph with crystalline, fusion, and vaporisation jumps
- Trouton-rule estimate graphic
- Stoichiometric reaction-entropy ledger
- van der Waals cancellation animation
- Original formula cards and condensed-phase heating cards

## Original solved content
Six complete worked examples:
1. reversible fusion entropy balance
2. Trouton-rule enthalpy estimate
3. crystalline-transition entropy
4. stoichiometric reaction entropy
5. van der Waals gas entropy change
6. reversible heating of a solid

Sixteen original JEE Advanced problems with solutions:
- reversible and irreversible transitions
- Trouton limitations
- sublimation additivity
- crystalline transitions
- reaction stoichiometry and state symbols
- gas-mole heuristic limitations
- general differential derivation
- ideal-gas and van der Waals limits
- condensed-phase heat capacities
- multistage heating through a phase transition

## Scientific corrections and safeguards
- ΔStr = ΔHtr/Ttr restricted to a reversible equilibrium transition
- reverse-transition entropy signs included
- Trouton’s rule identified as empirical rather than exact
- water and associated liquids treated as deviations
- reaction entropy requires stoichiometric coefficients and physical states
- gas-mole count described only as a qualitative predictor
- sign of P dV corrected for the chemistry work convention
- Cp and Cv for condensed phases treated as close but not identical
- detailed latent-heat, calorimetry, and reaction-enthalpy theory remains in Thermochemistry

## Handwritten-example audit
- Pages 129–130 contain formulas and general symbolic examples but no explicit numerical problem.
- Every symbolic relation and named example is retained.
- All numerical problems added in this part are original Synergic Bond examples.

## Boundary to Part 19
Page 131 begins:
- entropy change of an ideal gas with T and V variation
- isochoric cases
- temperature-independent and temperature-dependent heat capacities
- T and P variation
These topics are reserved for Part 19 to preserve source order.

## Copyright safety
- No source screenshots
- No source branding, watermark, or copied page design
- No copied external figures
- No copied external numerical examples, wording, or solutions
- All SVGs, animations, explanatory text, problems, and solutions are original

## Complete derivation rebuild

- Existing theory, SVG graphics, tables, examples and solutions retained.
- Added 4 explicit derivations with assumptions, intermediate steps, final equations and validity limits.
- Added 2 independently authored worked examples.
- Added one original responsive relationship graph.
- Existing collapsed problem elements converted to permanently visible content.
- Student-facing examination-extractor and provenance wording removed.
- No raster images added.
- Chapter architecture remains exactly Parts 01–30.

<!-- ALL-PARTS-FINAL-AUDIT:START -->
## Final deterministic audit — 20260712-133505

**Status:** PASS

**Component:** `/Users/mritunjayshukla/workspace/synergicbond/app/learn/thermodynamics-local-review/_components/ThermodynamicsPart18LocalhostReview.tsx`
**SHA-256:** `cfc142c8a06c9d492d6760f87c9ea36b5cfb7a64a7fa631009dfb87c76f6d9b0`

### Metrics

| Metric | Count |
|---|---:|
| Lines | 1171 |
| Bytes | 51015 |
| Sections | 30 |
| SVGs | 5 |
| Figure wrappers | 0 |
| Figcaptions | 0 |
| Applied input–solution pairs | 22 |

### Checks

| Check | Result | Evidence |
|---|---|---|
| Minimum implementation size | PASS | 1171 lines; minimum 180 |
| Lesson sections | PASS | 30 sections |
| Single default export | PASS | 1 default exports |
| No collapsed lesson content | PASS | 0 details; 0 summaries |
| No external or raster images | PASS | 0 external-image references |
| No forbidden framing | PASS | 0 forbidden references |
| SVG roles | PASS | 5/5 |
| SVG titles | PASS | 5/5 |
| SVG descriptions | PASS | 5/5 |
| SVG viewBoxes | PASS | 10/5 |

### Topic anchors

| Topic | Result |
|---|---|
| No static anchor list | INFO |

### Release state

- Typecheck: PASSED
- Thermodynamics-scoped ESLint: PASSED
- Build: NOT RUN
- Commit/push/deploy: NOT PERFORMED
<!-- ALL-PARTS-FINAL-AUDIT:END -->
