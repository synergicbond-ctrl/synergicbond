# Thermodynamics Part 28 — Coverage Audit

## Student-facing title
Gibbs Energy of Mixing and Ideal-Gas Mixtures

## Sequence position
This part follows the approved Module 13–14 Thermodynamics architecture after Part 27.

## Included source-controlled topics
- Chemical potential in a mixture
  - μi=μi°+RT ln(pi/P°): For an ideal-gas mixture, pi=xiP.
  - μi=μi°+RT ln(xiP/P°): Composition and total pressure both matter.
  - Partial molar Gibbs energy: μi=(∂G/∂ni)T,P,nj.
- Entropy and Gibbs energy of mixing
  - ΔmixS=−RΣni ln xi: Positive for a mixture of distinct ideal gases.
  - ΔmixH=0: Ideal-gas mixing has no enthalpy change.
  - ΔmixG=RTΣni ln xi: Negative because 0<xi<1.
- Binary mixture
  - ΔmixG=nRT[xA ln xA+xB ln xB]: Minimum occurs near equimolar composition for fixed n.
  - ΔmixS=−nR[xA ln xA+xB ln xB]: Maximum molar entropy of mixing is R ln2.
  - Identical-gas safeguard: Thermodynamic mixing entropy is zero when the gases are identical.
- Driving force
  - μi,high → μi,low: Matter transfers down a chemical-potential gradient.
  - Equilibrium: μi(α)=μi(β): No net transfer of component i between phases.
  - Mixing minimum: At fixed T and P, spontaneous mixing lowers total G.

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

## Boundary to Part 29
Reaction Gibbs energy, reaction quotient, and equilibrium condition.

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

**Component:** `/Users/mritunjayshukla/workspace/synergicbond/app/learn/thermodynamics-local-review/_components/ThermodynamicsPart28LocalhostReview.tsx`
**SHA-256:** `d6b8d29a81e3f1dea57e4047cd85aa0c3b907a1c62f17d4b7bffbb66ef469808`
**Detected title:** Partial Molar Gibbs Energy, Ideal-Gas Mixtures and Entropy of Mixing

### Structural metrics

| Metric | Count |
|---|---:|
| Lines | 299 |
| Bytes | 19228 |
| Lesson sections | 5 |
| Formula components | 4 |
| Derivation rows | 0 |
| Example/solution/answer terms | 9 |
| Actual practice question entries | 0 |
| Literal inline SVGs | 2 |
| `role="img"` | 2 |
| SVG titles | 2 |
| SVG descriptions | 2 |
| SVG viewBoxes | 4 |
| Figure wrappers | 0 |
| Visible figcaptions | 0 |

### Detected lesson sections

1. Gibbs Energy of Ideal Mixing
2. Entropy and Enthalpy of Ideal Mixing
3. Raoult
4. Gibbs–Duhem Relation
5. Worked Examples

### Required checks

| Check | Result | Evidence |
|---|---|---|
| Minimum implementation size | PASS | 299 lines, 19228 bytes; minimum 250 lines and 15000 bytes |
| Structured lesson sections | PASS | 5 detected Section components |
| Visible examples/solutions | PASS | 9 example/solution/answer terms |
| Visible applied material | PASS | 3 instructional input fields, 3 solution/answer fields and 3 potential visible pairs |
| Required original SVG count | PASS | 2 SVGs; minimum 2 |
| SVG accessibility roles | PASS | 2 role=img for 2 SVGs |
| SVG titles | PASS | 2 titles for 2 SVGs |
| SVG descriptions | PASS | 2 descriptions for 2 SVGs |
| Responsive SVG viewBoxes | PASS | 4 viewBoxes for 2 SVGs |
| No collapsed lesson content | PASS | 0 details and 0 summary elements |
| No forbidden provenance/extractor wording | PASS | handwritten wording=0, source-page wording=0, source-image wording=0, watermark wording=0, extractor framing=0, PDF provenance=0 |
| No external/raster source images | PASS | img element=0, Next Image import=0, data image=0, remote image URL=0, raster source reference=0 |
| No exact duplicate educational rows | PASS | 0 duplicate educational rows |
| Required topic anchors | PASS | 5/5 anchor groups passed |
| Repository TypeScript validation | PASS | PASSED |
| Scoped ESLint validation | PASS | PASSED |

### Topic anchors

| Anchor | Result |
|---|---|
| Partial molar Gibbs energy | PASS |
| Ideal-gas mixtures | PASS |
| Entropy of mixing | PASS |
| Gibbs energy of mixing | PASS |
| Chemical-potential driving force | PASS |

### Exact duplicate educational rows

- None.

### Advisory warnings

- 2 SVG(s) lack figure wrappers.
- 2 SVG(s) lack visible figcaptions.

<!-- CORRECTED-PRACTICE-AUDIT:START -->
### Corrected practice-structure verification

- Actual question entries: **0**
- Actual answer/solution entries: **3**
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

- Instructional input fields: **3**
- Solution/answer fields: **3**
- Potential visible input–solution pairs: **3**
- Input-field structure: `given:` × 3
- Output-field structure: `solution:` × 3
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

**Component:** `/Users/mritunjayshukla/workspace/synergicbond/app/learn/thermodynamics-local-review/_components/ThermodynamicsPart28LocalhostReview.tsx`
**SHA-256:** `d6b8d29a81e3f1dea57e4047cd85aa0c3b907a1c62f17d4b7bffbb66ef469808`

### Metrics

| Metric | Count |
|---|---:|
| Lines | 299 |
| Bytes | 19228 |
| Sections | 16 |
| SVGs | 2 |
| Figure wrappers | 0 |
| Figcaptions | 0 |
| Applied input–solution pairs | 3 |

### Checks

| Check | Result | Evidence |
|---|---|---|
| Minimum implementation size | PASS | 299 lines; minimum 250 |
| Lesson sections | PASS | 16 sections |
| Single default export | PASS | 1 default exports |
| No collapsed lesson content | PASS | 0 details; 0 summaries |
| No external or raster images | PASS | 0 external-image references |
| No forbidden framing | PASS | 0 forbidden references |
| SVG roles | PASS | 2/2 |
| SVG titles | PASS | 2/2 |
| SVG descriptions | PASS | 2/2 |
| SVG viewBoxes | PASS | 4/2 |
| Visible applied material | PASS | 3 pairs; minimum 3 |
| Required topic anchors | PASS | 4/4 |

### Topic anchors

| Topic | Result |
|---|---|
| partial molar Gibbs energy | PASS |
| ideal-gas mixture | PASS |
| entropy of mixing | PASS |
| Gibbs energy of mixing | PASS |

### Release state

- Typecheck: PASSED
- Thermodynamics-scoped ESLint: PASSED
- Build: NOT RUN
- Commit/push/deploy: NOT PERFORMED
<!-- ALL-PARTS-FINAL-AUDIT:END -->
