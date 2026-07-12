# Thermodynamics Part 05 — Source Coverage Audit

## Student-facing title
Partial-Derivative Tools and Thermodynamic Response Coefficients

## Primary handwritten sequence coverage
- Partial derivative notation
- Reciprocal derivative relation
- Cyclic derivative relation
- Chain-rule use in thermodynamics
- Total differential of a state variable
- Isobaric volume expansion coefficient
- Definition of alpha
- Isothermal compressibility
- Required negative sign in compressibility
- Thermal pressure coefficient at constant volume
- Relationship among thermal expansion, compressibility and pressure coefficient
- Ideal-gas values of the response coefficients
- Use of equation of state to evaluate derivatives
- Application to real-gas equations of state
- Volume-response differential in temperature and pressure
- Small-change approximation
- Relation to density

## Original enrichment
- Animated P–V–T response-surface visual
- Derivative-toolkit cards
- Animated thermal expansion, compression and thermal-pressure examples
- Master volume-response animation
- Explicit distinction between normalised and unnormalised pressure coefficients
- Bulk modulus connection
- Mechanical-stability interpretation
- Density-response derivation
- Ideal-gas coefficient derivation
- Implicit-differentiation strategy for real gases
- Daily-life applications:
  - railway and bridge expansion
  - deep-sea instruments
  - rigid aerosol can heating
  - mercury thermometer
- Negative thermal expansion and water anomaly
- Eight original JEE Advanced problems with solutions
- Trap-detection table

## Scientific corrections and safeguards
- The pressure-coefficient symbol is convention-dependent; definition is stated explicitly
- (∂P/∂T)V has unit Pa K^-1; the normalised coefficient has unit K^-1
- Compressibility includes a minus sign so stable ordinary matter has positive kappa_T
- Ideal-gas alpha = 1/T requires kelvin
- Alpha and kappa_T are generally state-dependent, not universal constants
- Incompressibility is treated as an approximation
- dV/V = alpha dT - kappa_T dP uses the correct pressure sign
- Negative alpha is allowed over special ranges
- Real-gas coefficients are obtained by implicit differentiation without copying source derivations

## Copyright safety
- No source screenshots
- No source branding or watermarks
- No copied page design
- No copied figures
- No copied numerical data or problem wording
- No copied solutions
- Original theory, equations presentation, SVGs, animations, examples, and solutions

## Complete derivation rebuild

- Existing theory, SVG graphics, tables, examples and solutions retained.
- Added 4 explicit derivations with assumptions, intermediate steps, final equations and validity limits.
- Added 3 independently authored worked examples.
- Added one original responsive relationship graph.
- Existing collapsed problem elements converted to permanently visible content.
- Student-facing examination-extractor and provenance wording removed.
- No raster images added.
- Chapter architecture remains exactly Parts 01–30.

<!-- ALL-PARTS-FINAL-AUDIT:START -->
## Final deterministic audit — 20260712-133505

**Status:** PASS

**Component:** `/Users/mritunjayshukla/workspace/synergicbond/app/learn/thermodynamics-local-review/_components/ThermodynamicsPart05LocalhostReview.tsx`
**SHA-256:** `92d9a2f52db69cfafaad62f858577c51f83c34a0977138919939101a1c2445bd`

### Metrics

| Metric | Count |
|---|---:|
| Lines | 926 |
| Bytes | 39531 |
| Sections | 32 |
| SVGs | 5 |
| Figure wrappers | 0 |
| Figcaptions | 0 |
| Applied input–solution pairs | 8 |

### Checks

| Check | Result | Evidence |
|---|---|---|
| Minimum implementation size | PASS | 926 lines; minimum 180 |
| Lesson sections | PASS | 32 sections |
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
