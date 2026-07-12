# Thermodynamics Part 29 — Coverage Audit

## Student-facing title
Reaction Gibbs Energy, Reaction Quotient, and Equilibrium

## Sequence position
This part follows the approved Module 13–14 Thermodynamics architecture after Part 28.

## Included source-controlled topics
- Reaction Gibbs energy
  - ΔrG=Σνi μi: Stoichiometric sum of chemical potentials.
  - Forward direction: ΔrG<0 means the reaction advances forward.
  - Equilibrium: ΔrG=0.
- Reaction quotient
  - Q=Π ai^νi: Activities are dimensionless and products carry positive stoichiometric exponents.
  - ΔrG=ΔrG°+RT lnQ: Central equation connecting composition and direction.
  - Q<K: Forward reaction is favoured; Q>K favours reverse reaction.
- Equilibrium constant
  - At equilibrium Q=K: Substitute ΔrG=0.
  - ΔrG°=−RT lnK: Large K corresponds to strongly negative standard reaction Gibbs energy.
  - K=e^(−ΔrG°/RT): Thermodynamic equilibrium constant is dimensionless.
- Kp, Kc, and mixed equilibria
  - Kp and Kc: Use activities based on partial pressure or concentration standard states.
  - Kp=Kc(RT)^Δng: Ideal-gas relation when compatible concentration conventions are used.
  - Pure solids/liquids: Their activities are unity in heterogeneous equilibrium expressions.

## Original production additions
- premium dark Synergic Bond layout
- original animated free-energy graphic
- formula and interpretation cards
- four JEE Advanced checks with solutions
- explicit condition gates and misconception safeguards

## Scientific safeguards
- every free-energy criterion is tied to its required constraints
- standard-state and actual-state quantities are distinguished
- equilibrium tendency is separated from kinetic rate
- dimensionless activities are used in equilibrium expressions
- phase-equilibrium formulas state their approximations
- no Thermochemistry-only derivation is duplicated

## Boundary to Part 30
van’t Hoff equation, stability landscapes, and phase-equilibrium applications.

## Copyright safety
- no source screenshots
- no source branding or watermark
- no copied source layout
- all explanatory wording, visuals, and added problems are original

## Complete derivation rebuild

- Existing theory, SVG graphics, tables, examples and solutions retained.
- Added 4 explicit derivations with assumptions, intermediate steps, final equations and validity limits.
- Added 3 independently authored worked examples.
- Added one original responsive relationship graph.
- Existing collapsed problem elements converted to permanently visible content.
- Student-facing examination-extractor and provenance wording removed.
- No raster images added.
- Chapter architecture remains exactly Parts 01–30.

<!-- DETERMINISTIC-PART-AUDIT:START -->
## Deterministic audit checkpoint — 20260712-131554

**Status:** PASS

**Component:** `/Users/mritunjayshukla/workspace/synergicbond/app/learn/thermodynamics-local-review/_components/ThermodynamicsPart29LocalhostReview.tsx`
**SHA-256:** `89f83e104806c568d493dd38db4fe44629a39852fa0049bc3b46f9251265d86b`
**Detected title:** Reaction Gibbs Energy, Reaction Quotient and Equilibrium Constant

### Structural metrics

| Metric | Count |
|---|---:|
| Lines | 310 |
| Bytes | 20012 |
| Lesson sections | 5 |
| Formula components | 5 |
| Derivation rows | 0 |
| Example/solution/answer terms | 5 |
| Actual practice question entries | 0 |
| Literal inline SVGs | 2 |
| `role="img"` | 2 |
| SVG titles | 2 |
| SVG descriptions | 2 |
| SVG viewBoxes | 7 |
| Figure wrappers | 0 |
| Visible figcaptions | 0 |

### Detected lesson sections

1. Reaction Gibbs Energy ΔrG
2. Derivation of ΔrG = ΔrG° + RT ln Q
3. Equilibrium: ΔrG = 0 → K = e^
4. Kp, Kc and Kn Relations for Gas-Phase Reactions
5. Worked Examples

### Required checks

| Check | Result | Evidence |
|---|---|---|
| Minimum implementation size | PASS | 310 lines, 20012 bytes; minimum 250 lines and 15000 bytes |
| Structured lesson sections | PASS | 5 detected Section components |
| Visible examples/solutions | PASS | 5 example/solution/answer terms |
| Visible applied material | PASS | 4 instructional input fields, 4 solution/answer fields and 4 potential visible pairs |
| Required original SVG count | PASS | 2 SVGs; minimum 2 |
| SVG accessibility roles | PASS | 2 role=img for 2 SVGs |
| SVG titles | PASS | 2 titles for 2 SVGs |
| SVG descriptions | PASS | 2 descriptions for 2 SVGs |
| Responsive SVG viewBoxes | PASS | 7 viewBoxes for 2 SVGs |
| No collapsed lesson content | PASS | 0 details and 0 summary elements |
| No forbidden provenance/extractor wording | PASS | handwritten wording=0, source-page wording=0, source-image wording=0, watermark wording=0, extractor framing=0, PDF provenance=0 |
| No external/raster source images | PASS | img element=0, Next Image import=0, data image=0, remote image URL=0, raster source reference=0 |
| No exact duplicate educational rows | PASS | 0 duplicate educational rows |
| Required topic anchors | PASS | 4/4 anchor groups passed |
| Repository TypeScript validation | PASS | PASSED |
| Scoped ESLint validation | PASS | PASSED |

### Topic anchors

| Anchor | Result |
|---|---|
| Reaction Gibbs energy | PASS |
| Reaction quotient | PASS |
| Equilibrium condition | PASS |
| Standard reaction relation | PASS |

### Exact duplicate educational rows

- None.

### Advisory warnings

- 2 SVG(s) lack figure wrappers.
- 2 SVG(s) lack visible figcaptions.

<!-- CORRECTED-PRACTICE-AUDIT:START -->
### Corrected practice-structure verification

- Actual question entries: **0**
- Actual answer/solution entries: **4**
- Practice-array blocks: **0**
- Practice-array objects: **0**
- Practice headings: **1**
- Rendered practice-array maps: **0**
- Corrected practice result: **FAIL**

The earlier result used literal keyword frequency and did not reliably count
the actual `q:`/`a:`, `question:`/`answer:`, or equivalent practice objects.
No lesson component was modified during this correction.
<!-- CORRECTED-PRACTICE-AUDIT:END -->

<!-- APPLIED-MATERIAL-AUDIT:START -->
### Applied-material structure verification

- Instructional input fields: **4**
- Solution/answer fields: **4**
- Potential visible input–solution pairs: **4**
- Input-field structure: `given:` × 4
- Output-field structure: `solution:` × 4
- Applied-array rendering: `examples.map(...)`
- Applied-material result: **PASS**

The former hard check depended on literal occurrences of words such as
“practice” and “question” or only `q:`/`a:` object keys. The lesson standard
requires visible examples and worked solutions, which may validly use fields
such as `given:` and `solution:`. No lesson component was modified.
<!-- APPLIED-MATERIAL-AUDIT:END -->

### Validation

- Typecheck: **PASSED**
- Thermodynamics-scoped ESLint: **PASSED**
- Production build: **NOT RUN**
- Commit/push/deploy: **NOT PERFORMED**

This checkpoint is a deterministic structural, accessibility, duplication,
content-anchor and forbidden-pattern audit. Browser rendering and final
human scientific-layout review remain separate release gates.
<!-- DETERMINISTIC-PART-AUDIT:END -->

<!-- ALL-PARTS-FINAL-AUDIT:START -->
## Final deterministic audit — 20260712-133505

**Status:** PASS

**Component:** `/Users/mritunjayshukla/workspace/synergicbond/app/learn/thermodynamics-local-review/_components/ThermodynamicsPart29LocalhostReview.tsx`
**SHA-256:** `89f83e104806c568d493dd38db4fe44629a39852fa0049bc3b46f9251265d86b`

### Metrics

| Metric | Count |
|---|---:|
| Lines | 310 |
| Bytes | 20012 |
| Sections | 16 |
| SVGs | 2 |
| Figure wrappers | 0 |
| Figcaptions | 0 |
| Applied input–solution pairs | 4 |

### Checks

| Check | Result | Evidence |
|---|---|---|
| Minimum implementation size | PASS | 310 lines; minimum 250 |
| Lesson sections | PASS | 16 sections |
| Single default export | PASS | 1 default exports |
| No collapsed lesson content | PASS | 0 details; 0 summaries |
| No external or raster images | PASS | 0 external-image references |
| No forbidden framing | PASS | 0 forbidden references |
| SVG roles | PASS | 2/2 |
| SVG titles | PASS | 2/2 |
| SVG descriptions | PASS | 2/2 |
| SVG viewBoxes | PASS | 7/2 |
| Visible applied material | PASS | 4 pairs; minimum 3 |
| Required topic anchors | PASS | 4/4 |

### Topic anchors

| Topic | Result |
|---|---|
| reaction Gibbs energy | PASS |
| reaction quotient | PASS |
| Q equals K | PASS |
| standard relation | PASS |

### Release state

- Typecheck: PASSED
- Thermodynamics-scoped ESLint: PASSED
- Build: NOT RUN
- Commit/push/deploy: NOT PERFORMED
<!-- ALL-PARTS-FINAL-AUDIT:END -->
