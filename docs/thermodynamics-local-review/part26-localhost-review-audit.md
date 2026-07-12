# Thermodynamics Part 26 — Coverage Audit

## Student-facing title
Pressure and Temperature Dependence of Gibbs Energy

## Sequence position
This part follows the approved Module 13–14 Thermodynamics architecture after Part 25.

## Included source-controlled topics
- Fundamental differential
  - dG = V dP − S dT: For a simple closed system of fixed composition.
  - (∂G/∂P)T = V: At fixed temperature, Gibbs energy increases with pressure because volume is positive.
  - (∂G/∂T)P = −S: At fixed pressure, Gibbs energy decreases with temperature because entropy is positive.
- Pressure dependence
  - G(P₂)−G(P₁)=∫P₁P₂ V dP: General isothermal relation.
  - Ideal gas: ΔG=nRT ln(P₂/P₁): Use V=nRT/P.
  - Condensed phase: ΔG≈V̄(P₂−P₁): Valid when molar volume is nearly pressure independent.
- Temperature dependence
  - G(T₂)−G(T₁)=−∫T₁T₂ S dT: General isobaric relation.
  - Slope of G–T graph = −S: Gas has the steepest negative slope, then liquid, then solid.
  - Phase transition: At equilibrium, molar Gibbs energies of the two phases are equal.
- Gibbs–Helmholtz bridge
  - G=H−TS: Separates enthalpic and entropic contributions.
  - (∂(G/T)/∂T)P = −H/T²: Gibbs–Helmholtz equation.
  - ΔG/T relation: Useful for temperature correction of reaction Gibbs energy.

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

## Boundary to Part 27
Gibbs energy of ideal gases, condensed phases, and standard states.

## Copyright safety
- no source screenshots
- no source branding or watermark
- no copied source layout
- all explanatory wording, visuals, and added problems are original

## Complete derivation rebuild

- Existing theory, SVG graphics, tables, examples and solutions retained.
- Added 4 explicit derivations with assumptions, intermediate steps, final equations and validity limits.
- Added 2 independently authored worked examples.
- Added one original responsive relationship graph.
- Existing collapsed problem elements converted to permanently visible content.
- Student-facing examination-extractor and provenance wording removed.
- No raster images added.
- Chapter architecture remains exactly Parts 01–30.

<!-- DETERMINISTIC-PART-AUDIT:START -->
## Deterministic audit checkpoint — 20260712-131554

**Status:** PASS

**Component:** `/Users/mritunjayshukla/workspace/synergicbond/app/learn/thermodynamics-local-review/_components/ThermodynamicsPart26LocalhostReview.tsx`
**SHA-256:** `bf1d3f1da9fbe194f08c2fe3995ba2aa60955dc6147658b67bd3493ce4dec6a1`
**Detected title:** Pressure and Temperature Dependence of Gibbs Energy

### Structural metrics

| Metric | Count |
|---|---:|
| Lines | 361 |
| Bytes | 23033 |
| Lesson sections | 6 |
| Formula components | 10 |
| Derivation rows | 0 |
| Example/solution/answer terms | 5 |
| Actual practice question entries | 6 |
| Literal inline SVGs | 2 |
| `role="img"` | 2 |
| SVG titles | 2 |
| SVG descriptions | 2 |
| SVG viewBoxes | 4 |
| Figure wrappers | 0 |
| Visible figcaptions | 0 |

### Detected lesson sections

1. Theory: The Fundamental Gibbs Differential
2. Temperature Dependence: G vs T Plots and Phase Stability
3. Pressure Dependence: Integrating dG = V dP at Constant T
4. The Gibbs–Helmholtz Equation
5. Worked Examples
6. Concept Traps

### Required checks

| Check | Result | Evidence |
|---|---|---|
| Minimum implementation size | PASS | 361 lines, 23033 bytes; minimum 250 lines and 15000 bytes |
| Structured lesson sections | PASS | 6 detected Section components |
| Visible examples/solutions | PASS | 5 example/solution/answer terms |
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
| Required topic anchors | PASS | 4/4 anchor groups passed |
| Repository TypeScript validation | PASS | PASSED |
| Scoped ESLint validation | PASS | PASSED |

### Topic anchors

| Anchor | Result |
|---|---|
| Gibbs-energy dependence | PASS |
| Pressure dependence | PASS |
| Temperature dependence | PASS |
| Gibbs–Helmholtz relation | PASS |

### Exact duplicate educational rows

- None.

### Advisory warnings

- 2 SVG(s) lack figure wrappers.
- 2 SVG(s) lack visible figcaptions.

<!-- CORRECTED-PRACTICE-AUDIT:START -->
### Corrected practice-structure verification

- Actual question entries: **6**
- Actual answer/solution entries: **6**
- Practice-array blocks: **1**
- Practice-array objects: **6**
- Practice headings: **1**
- Rendered practice-array maps: **1**
- Corrected practice result: **PASS**

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
- Applied-array rendering: `examples.map(...)`, `practice.map(...)`
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

**Component:** `/Users/mritunjayshukla/workspace/synergicbond/app/learn/thermodynamics-local-review/_components/ThermodynamicsPart26LocalhostReview.tsx`
**SHA-256:** `bf1d3f1da9fbe194f08c2fe3995ba2aa60955dc6147658b67bd3493ce4dec6a1`

### Metrics

| Metric | Count |
|---|---:|
| Lines | 361 |
| Bytes | 23033 |
| Sections | 18 |
| SVGs | 2 |
| Figure wrappers | 0 |
| Figcaptions | 0 |
| Applied input–solution pairs | 3 |

### Checks

| Check | Result | Evidence |
|---|---|---|
| Minimum implementation size | PASS | 361 lines; minimum 250 |
| Lesson sections | PASS | 18 sections |
| Single default export | PASS | 1 default exports |
| No collapsed lesson content | PASS | 0 details; 0 summaries |
| No external or raster images | PASS | 0 external-image references |
| No forbidden framing | PASS | 0 forbidden references |
| SVG roles | PASS | 2/2 |
| SVG titles | PASS | 2/2 |
| SVG descriptions | PASS | 2/2 |
| SVG viewBoxes | PASS | 4/2 |
| Visible applied material | PASS | 3 pairs; minimum 3 |
| Required topic anchors | PASS | 3/3 |

### Topic anchors

| Topic | Result |
|---|---|
| Gibbs pressure dependence | PASS |
| Gibbs temperature dependence | PASS |
| Gibbs–Helmholtz | PASS |

### Release state

- Typecheck: PASSED
- Thermodynamics-scoped ESLint: PASSED
- Build: NOT RUN
- Commit/push/deploy: NOT PERFORMED
<!-- ALL-PARTS-FINAL-AUDIT:END -->
