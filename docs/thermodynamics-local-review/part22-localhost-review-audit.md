# Thermodynamics Part 22 — Source Coverage Audit

## Student-facing title
Third Law, Statistical Entropy, Residual Entropy, and Absolute Entropy

## Primary handwritten source range
Pages 153–160 of the primary handwritten Thermodynamics notes.

## Page 153 — Third Law and Nernst heat theorem

### Retained Third-Law statements
- entropy of a perfectly crystalline substance approaches zero as T approaches 0 K
- pure, perfectly ordered crystalline state identified as the minimum-entropy state
- Third Law connected historically with Nernst
- absolute zero written as 0 K or −273.15 °C
- Third Law used to determine entropy at finite temperatures

### Retained Nernst statements
- entropy change accompanying a transformation approaches zero as T → 0
- reversible-process wording retained
- Nernst heat theorem identified as a foundation of the Third Law

### Retained handwritten finite-temperature construction
- solid at 0 K and pressure p → solid at T and pressure p
- ΔS = ST − S0K
- ΔS = ∫0T Cp,m/T dT
- ST = S0K + ∫0T Cp,m/T dT
- ST identified as Third-Law entropy

### Scientific corrections
- Third-Law zero is not merely an arbitrary bookkeeping zero
- microscopic basis:
  S = kB lnΩ
  Ω0 = 1 ⇒ S(0) = 0
- zero entropy requires:
  pure substance
  perfect crystal
  equilibrium
  unique ground state
- unattainability of exact 0 K is presented as a related but distinct formulation
- Nernst theorem restricted to equilibrium isothermal transformations in the low-temperature limit

## Page 154 — Boltzmann formula and residual entropy

### Retained Boltzmann content
- Boltzmann formula:
  S = k ln W
- W identified as the number of microstates/thermodynamically probable states
- microscopic and macroscopic descriptions connected
- at T = 0, W = 1 for a unique perfect crystal
- W > 1 gives S(0) > 0

### Retained orientational-disorder example
- AB and BA molecular orientations
- near-degenerate orientations can remain disordered at T = 0
- multiple arrangements produce residual entropy

### Retained ice example
- residual entropy approximately 3.4 J K⁻¹ mol⁻¹
- hydrogen-bond disorder
- each oxygen has two short O–H bonds and two longer O···H contacts
- randomness remains in which bonds are short and long

### Scientific notation refinement
- W is written as Ω for total multiplicity in the premium notes
- for N independent molecules with w orientations:
  Ω = w^N
  S = NkB lnw
  Sm = Rlnw
- logarithm/additivity proof added

## Page 155 — Debye model

### Retained source content
- Debye model for low-temperature crystalline-solid heat capacity
- lattice vibrations treated as harmonic modes
- developed by Peter Debye
- non-metallic solid approximation
- retained law:
  Cp,m = aT³
- Cp,m and Cv,m treated as nearly indistinguishable at very low temperature
- a determined from a low-temperature heat-capacity measurement

### Scientific safeguards
- law restricted to sufficiently low temperature
- law restricted to lattice contribution of non-metallic crystals
- metal caveat added:
  Cp ≈ γT + βT³

## Page 156 — perfect crystal and residual entropy

### Retained perfect-crystal statement
- entropy of a perfectly crystalline substance is zero at 0 K
- perfect diamond crystal given as an example

### Retained residual-entropy statements
- ice and hydrogen mentioned as systems that may retain disorder
- entropy at absolute zero due to disorder called residual entropy
- Boltzmann relation retained
- W identified as number of thermodynamically probable states
- source’s idealised hydrogen line:
  ortho/para form
  W = 2
  S = k ln2 per molecule
  S = R ln2 per mole
- solid < liquid < gas trend
- perfect crystal versus imperfect crystal/amorphous distinction

### Required hydrogen correction
- equilibrium H2 approaches para-H2 in the lowest rotational state
- Rln2 is not automatically the equilibrium residual entropy
- frozen non-equilibrium ortho/para mixtures require a composition-dependent treatment
- Rln2 retained only as an ideal binary-degeneracy model

### Incomplete fragment
A line at the bottom begins:
- “Allow a slight disturbance of the equilibrium, and upon its restoration, the free e…”
- remainder is incomplete/obscured
- preserved as [UNCLEAR SOURCE FRAGMENT]
- no scientific statement was invented

## Page 157 — methods of entropy determination

### Retained methods
1. temperature dependence:
   S(T2) = S(T1) + ∫T1T2 Cp(T)/T dT
2. phase-transition contribution:
   ΔStr = ΔHtr/Ttr
3. calculated molecular parameters or spectroscopic data with Boltzmann’s statistical definition

### Retained full calorimetric route
For a final temperature above the boiling point:
- heat solid from 0 to Tf
- add fusion entropy ΔHfus/Tf
- heat liquid from Tf to Tb
- add vaporisation entropy ΔHvap/Tb
- heat gas from Tb to final T
- variable of integration changed to T′
- any solid-solid transition must also be added

### Complete premium expression
S°m(T) =
Sres,m
+ Σ∫Cp,m°(T′)/T′ dT′
+ ΣΔHtr°/Ttr

## Page 158 — graphical integration and Debye extrapolation

### Retained graphical method
- area under Cp,m(T)/T versus T equals the entropy integral
- standard entropy obtained for pure material measured at 1 bar
- standard molar entropy obtained by dividing by amount
- because dT/T = dlnT, equivalent area under Cp,m versus lnT

### Retained low-temperature problem
- heat capacity difficult to measure near 0 K
- measure down to the lowest practical temperature
- fit Cp,m = aT³
- extrapolate to T = 0

### Retained graph meaning
- upper Cp/T curve area gives continuous entropy contribution
- lower entropy curve rises continuously within phases
- entropy jumps at fusion and vaporisation
- a crystalline transition adds ΔHtr/Ttr

## Page 159 — retained Debye numerical

### Visible source problem
- molar constant-pressure heat capacity of a non-metallic solid at 4.2 K:
  0.43 J K⁻¹ mol⁻¹
- find molar entropy at 4.2 K

### Retained derivation
Cp,m = aT³

Sm(T) = Sm(0) + ∫0T aT′³/T′ dT′
Sm(T) = Sm(0) + aT³/3
Sm(T) = Sm(0) + Cp,m(T)/3

For perfect crystal:
Sm(0) = 0

Result:
Sm(4.2 K) = 0.43/3
Sm(4.2 K) = 0.143 J mol⁻¹ K⁻¹
Sm(4.2 K) ≈ 0.14 J mol⁻¹ K⁻¹

## Page 159 — all eight summary points retained

1. calorimetric entropy from low-temperature heat capacities and all phase transitions
2. Debye extrapolation/T³ law near T = 0
3. Nernst heat theorem:
   ΔS → 0 as T → 0 for perfectly ordered equilibrium substances
4. Third Law:
   entropy of all perfect crystalline substances is zero at T = 0
5. residual entropy:
   entropy from disorder persisting at T = 0
6. Third-Law entropies based on S(0) = 0
7. aqueous-ion standard entropy convention:
   S°m(H+, aq) = 0 at each temperature
8. standard reaction entropy:
   stoichiometric difference between standard molar entropies of separated products and reactants

### Single-ion scientific correction
- isolated single-ion absolute entropies are not directly measurable
- values are relative to the conventional proton zero
- relative single-ion values may be negative
- the convention cancels in charge-balanced reaction entropy

## Page 160 — all graph meanings retained

### Graph 1
- schematic Cp,m/T versus T
- shaded area equals entropy integral

### Graph 2
- schematic Cp,m versus log(T/K)
- shaded area gives equivalent entropy integral

### Graph 3
- entropy versus temperature
- continuous increase within a phase
- fusion jump ΔfusS
- vaporisation jump ΔvapS
- any crystalline transition contributes:
  ΔtrS = ΔtrH/T

## Original visual system
- animated perfect-crystal approach to 0 K
- animated macrostate/microstate multiplicity
- animated perfect versus residual orientational disorder
- animated Debye T³ extrapolation
- animated full calorimetric entropy path
- original Cp/T versus T and Cp versus lnT area graphics
- original tables for Third-Law formulations and retained summary

## Original worked content
- retained 4.2 K Debye numerical
- ideal binary residual entropy Rln2
- Pauling ice residual entropy Rln(3/2)
- inferred degeneracy from residual entropy
- one-transition calorimetric construction
- aqueous-ion convention explanation
- Cp versus lnT area proof

## Original JEE Advanced assessment
- sixteen original problems with solutions
- eight misconception corrections
- four daily-life applications

## Scientific corrections and safeguards
- perfect-crystal zero requires Ω0 = 1
- residual entropy separated from thermal excitation
- Nernst theorem restricted to equilibrium low-temperature transformations
- unattainability distinguished from the entropy-zero formulation
- Debye T³ law restricted to low-temperature non-metallic lattice heat capacity
- metal electronic heat-capacity term added
- hydrogen ortho/para source statement corrected
- aqueous single-ion entropy convention explained
- all source figures independently redrawn; no screenshots used

## Thermodynamics–Thermochemistry boundary
- Cp(T) and transition enthalpy are used as measured inputs
- detailed calorimetry, latent-heat measurement, and transition-enthalpy theory remain in Thermochemistry

## Boundary to Part 23
The next source sequence begins after the Third-Law summary with:
- absolute entropies of aqueous ions and their relative convention
- explicit microstate counting examples
- temperature effect on reaction entropy
- pressure effect on reaction entropy
- transition into Helmholtz free energy

These topics are reserved for Part 23.

## Copyright safety
- no source screenshots
- no source branding, watermark, or copied page design
- no copied external figure
- no copied external numerical wording or solution text
- every visible source statement, formula, graph meaning, summary point, and numerical value is independently typeset and audited
- all SVGs, animations, explanatory text, added problems, and solutions are original

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

**Component:** `/Users/mritunjayshukla/workspace/synergicbond/app/learn/thermodynamics-local-review/_components/ThermodynamicsPart22LocalhostReview.tsx`
**SHA-256:** `07fd6e866a6167a965bf8576962238d354f1c847bffaf66a63ef2f97c94a4bb3`

### Metrics

| Metric | Count |
|---|---:|
| Lines | 1331 |
| Bytes | 60063 |
| Sections | 34 |
| SVGs | 7 |
| Figure wrappers | 0 |
| Figcaptions | 0 |
| Applied input–solution pairs | 22 |

### Checks

| Check | Result | Evidence |
|---|---|---|
| Minimum implementation size | PASS | 1331 lines; minimum 180 |
| Lesson sections | PASS | 34 sections |
| Single default export | PASS | 1 default exports |
| No collapsed lesson content | PASS | 0 details; 0 summaries |
| No external or raster images | PASS | 0 external-image references |
| No forbidden framing | PASS | 0 forbidden references |
| SVG roles | PASS | 7/7 |
| SVG titles | PASS | 7/7 |
| SVG descriptions | PASS | 7/7 |
| SVG viewBoxes | PASS | 9/7 |

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
