# Thermodynamics Part 24 — Source Coverage Audit

## Student-facing title
Helmholtz and Gibbs Free Energies

## Primary handwritten source range
Pages 170–177 of the primary handwritten Thermodynamics notes.

## Source-sequence coverage

### Why free-energy functions are introduced
Retained source idea:
- entropy of the universe is the universal spontaneity criterion
- calculating surroundings entropy may be difficult
- free-energy functions permit a system-only calculation under specified constraints

### Helmholtz free energy
Retained:
- symbol A
- definition:
  A = U − TS
- name:
  Helmholtz free energy
- source note:
  A from German “Arbeit,” meaning work
- A is a state function
- A is extensive
- A has dimensions of energy

### Helmholtz derivation
Retained and completed:
- Clausius inequality
- dU relation
- constant-volume condition
- constant-temperature condition
- A2 − A1 ≤ 0
- spontaneous:
  ΔA < 0
- reversible equilibrium:
  ΔA = 0

Scientifically completed differential:
- A = U − TS
- dA = dU − T dS − S dT
- for simple reversible PV work:
  dU = T dS − P dV
- therefore:
  dA = −S dT − P dV

### Helmholtz work meaning
Retained:
- decrease in Helmholtz energy represents available work
- maximum work is obtained reversibly
- at constant T,V:
  maximum work done by the system = −ΔA

Scientific sign clarification:
- chemistry convention takes work on system as positive
- work delivered by the system is therefore −ΔA

### Gibbs free energy
Retained:
- most chemical processes are studied at constant temperature and pressure
- Gibbs function provides the useful criterion
- definition:
  G = H − TS
- G is a state function
- G is extensive

### Gibbs derivation
Retained and completed:
- G = H − TS
- dG = dH − T dS − S dT
- for a simple closed system:
  dH = T dS + V dP
- therefore:
  dG = V dP − S dT

### Gibbs spontaneity criterion
Retained:
- at constant T and P:
  spontaneous process:
  ΔG < 0
- reversible equilibrium:
  ΔG = 0
- non-spontaneous forward:
  ΔG > 0

### Relation to universe entropy
Retained source logic:
- system entropy plus surroundings entropy determines spontaneity
- at constant T,P the system-only Gibbs criterion is sufficient

Completed relation:
- ΔGsys = −TΔSuniverse
- ΔSuniverse > 0 ⇔ ΔGsys < 0
- ΔSuniverse = 0 ⇔ ΔGsys = 0

### Gibbs minimum at equilibrium
Retained:
- Gibbs energy decreases during spontaneous change
- the system approaches equilibrium
- Gibbs energy reaches a minimum
- no further spontaneous decrease is possible at equilibrium

Scientific stability refinement:
- ΔG = 0 is a stationary condition
- stable equilibrium requires a local minimum under the allowed constraints

### Gibbs energy and non-PV work
Retained:
- decrease in Gibbs energy at constant T,P estimates non-PV work
- reversible process gives maximum non-PV work
- examples include electrical and other useful work

Completed relation:
- w_non-PV,max,by = −ΔG

### Helmholtz versus Gibbs work
Retained source distinction:
- decrease in Helmholtz energy represents maximum work at constant temperature and volume
- decrease in Gibbs energy represents maximum non-expansion work at constant temperature and pressure

## Original visual system
- free-energy constraint map
- reversible work-extraction comparison
- free-energy derivation matrix
- spontaneity/equilibrium sign table
- premium dark Synergic Bond layout

## Original worked examples
1. Helmholtz decrease and maximum work
2. Gibbs energy from ΔH and ΔS
3. universe entropy from ΔG
4. maximum non-PV work from ΔG

## Original JEE Advanced assessment
- twelve original questions with complete solutions
- natural-variable identification
- derivation of dA and dG
- equilibrium-minimum nuance
- irreversibility and lost work
- rigid-vessel and constant-pressure criteria
- isothermal ideal-gas ΔG relation

## Scientific corrections and safeguards
- free-energy criteria tied explicitly to their constraints
- reversible equality separated from irreversible inequality
- stable equilibrium described as a minimum, not merely ΔG=0
- total work and non-PV work distinguished
- chemistry work-sign convention stated
- spontaneity distinguished from kinetic rate
- no unsupported numerical source example invented

## Thermodynamics–Thermochemistry boundary
- H appears only as part of G = H − TS and in spontaneity expressions
- detailed reaction-enthalpy determination remains in Thermochemistry

## Boundary to Part 25
The next source sequence continues with:
- detailed derivation of Gibbs energy and non-PV work
- maximum useful work and thermodynamic efficiency
- Gibbs minimum diagrams
- ΔG calculations for ideal-gas processes
- temperature and pressure dependence of Gibbs energy

These topics should be developed in Part 25.

## Copyright safety
- no source screenshots
- no source branding or watermark
- no copied source layout
- all source equations independently typeset
- all explanatory wording, SVGs, examples, and solutions are original

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

**Component:** `/Users/mritunjayshukla/workspace/synergicbond/app/learn/thermodynamics-local-review/_components/ThermodynamicsPart24LocalhostReview.tsx`
**SHA-256:** `5f0e7b5ecf6388efa4aa1dbc19c13151c3faa843f0cfa900597f47f5a057acb7`

### Metrics

| Metric | Count |
|---|---:|
| Lines | 439 |
| Bytes | 23344 |
| Sections | 26 |
| SVGs | 2 |
| Figure wrappers | 0 |
| Figcaptions | 0 |
| Applied input–solution pairs | 4 |

### Checks

| Check | Result | Evidence |
|---|---|---|
| Minimum implementation size | PASS | 439 lines; minimum 350 |
| Lesson sections | PASS | 26 sections |
| Single default export | PASS | 1 default exports |
| No collapsed lesson content | PASS | 0 details; 0 summaries |
| No external or raster images | PASS | 0 external-image references |
| No forbidden framing | PASS | 0 forbidden references |
| SVG roles | PASS | 2/2 |
| SVG titles | PASS | 2/2 |
| SVG descriptions | PASS | 2/2 |
| SVG viewBoxes | PASS | 2/2 |
| Visible applied material | PASS | 4 pairs; minimum 3 |
| Required topic anchors | PASS | 5/5 |

### Topic anchors

| Topic | Result |
|---|---|
| Helmholtz energy | PASS |
| Gibbs energy | PASS |
| constant T,V criterion | PASS |
| constant T,P criterion | PASS |
| maximum work | PASS |

### Release state

- Typecheck: PASSED
- Thermodynamics-scoped ESLint: PASSED
- Build: NOT RUN
- Commit/push/deploy: NOT PERFORMED
<!-- ALL-PARTS-FINAL-AUDIT:END -->
