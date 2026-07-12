import React from "react";

const partDerivations: Record<number, { title: string; steps: { label: string; math: string; note?: string }[] }[]> = {
  1: [
    {
      title: "Distinguishing open, closed and isolated systems from the boundary conditions",
      steps: [
        { label: "Open system", math: "matter + energy cross the boundary", note: "e.g., a beaker in open air" },
        { label: "Closed system", math: "only energy (heat or work) crosses; no matter transfer", note: "e.g., a sealed, non-rigid balloon" },
        { label: "Isolated system", math: "neither energy nor matter crosses", note: "e.g., an ideal Dewar flask" },
        { label: "Universe", math: "universe = system + surroundings", note: "total system; no external boundary" },
      ],
    },
    {
      title: "Boundary classification",
      steps: [
        { label: "Rigid boundary", math: "V = constant → no PdV work possible" },
        { label: "Adiabatic boundary", math: "q = 0 → no heat transfer across boundary" },
        { label: "Diathermal boundary", math: "heat flows until thermal equilibrium is reached" },
        { label: "Semipermeable", math: "allows selective passage of matter or specific species" },
      ],
    },
  ],
  2: [
    {
      title: "Proof that internal energy U is a state function",
      steps: [
        { label: "Define state function", math: "f is a state function if ∮ df = 0 for any cyclic path" },
        { label: "First Law", math: "ΔU = q + w for any process between states 1 and 2" },
        { label: "Cyclic process", math: "ΔU_cycle = q_cycle + w_cycle" },
        { label: "Joule's result", math: "for isothermal ideal gas: ΔU = 0 regardless of path" },
        { label: "Conclusion", math: "U depends only on state (T, P, V, n) — not on the path taken" },
      ],
    },
    {
      title: "Intensive vs extensive property classification",
      steps: [
        { label: "Extensive", math: "X_total = Σ X_i  (additive over subsystems)", note: "U, H, S, G, V, n, mass" },
        { label: "Intensive", math: "X_total = X_i  (independent of system size)", note: "T, P, ρ, μ, molar quantities" },
        { label: "Ratio rule", math: "extensive / extensive = intensive  (e.g., U/n = Um)" },
      ],
    },
  ],
  3: [
    {
      title: "Derivation of work for isothermal reversible ideal-gas expansion",
      steps: [
        { label: "Define reversible", math: "P_ext = P_gas at every infinitesimal step" },
        { label: "Ideal gas law", math: "P = nRT/V" },
        { label: "Differential work element", math: "δw_rev = −P_ext dV = −P dV = −(nRT/V) dV" },
        { label: "Integrate V₁ → V₂", math: "w_rev = −nRT ∫[V₁→V₂] dV/V = −nRT ln(V₂/V₁)" },
        { label: "Equivalent form", math: "w_rev = −nRT ln(P₁/P₂)  (using P₁V₁ = P₂V₂ at const T)" },
        { label: "Sign check", math: "expansion: V₂ > V₁ → ln > 0 → w_rev < 0 (work done BY system)" },
      ],
    },
    {
      title: "Irreversible isothermal expansion against constant external pressure",
      steps: [
        { label: "Condition", math: "P_ext = P_final = constant throughout" },
        { label: "Work integral", math: "w_irrev = −P_ext ΔV = −P_ext(V₂ − V₁)" },
        { label: "Comparison", math: "|w_rev| > |w_irrev| for the same initial and final states" },
        { label: "Reason", math: "irreversible process loses work to entropy generation in surroundings" },
      ],
    },
  ],
  4: [
    {
      title: "Zeroth Law and the definition of temperature",
      steps: [
        { label: "Statement", math: "If A is in thermal equilibrium with C, and B is also in thermal equilibrium with C, then A and B are in thermal equilibrium with each other." },
        { label: "Consequence", math: "There exists a property called temperature T such that T_A = T_C and T_B = T_C imply T_A = T_B." },
        { label: "Empirical scale", math: "T/K = 273.15 + θ/°C  (by definition for ideal-gas scale)" },
        { label: "Thermometer basis", math: "any measurable property that changes monotonically with T can define an empirical temperature scale" },
      ],
    },
    {
      title: "Conditions for mechanical and thermal equilibrium",
      steps: [
        { label: "Mechanical equilibrium", math: "P_system = P_surroundings (no unbalanced pressure forces)" },
        { label: "Thermal equilibrium", math: "T_system = T_surroundings (no net heat flow)" },
        { label: "Chemical equilibrium", math: "μᵢ,system = μᵢ,surroundings for all species i" },
        { label: "Thermodynamic equilibrium", math: "all three conditions satisfied simultaneously" },
      ],
    },
  ],
  5: [
    {
      title: "Chain rule and cyclic relation for partial derivatives",
      steps: [
        { label: "Two-variable function", math: "z = f(x, y): dz = (∂z/∂x)_y dx + (∂z/∂y)_x dy" },
        { label: "At constant z", math: "0 = (∂z/∂x)_y dx + (∂z/∂y)_x dy" },
        { label: "Divide by dx at constant z", math: "(∂x/∂y)_z = −(∂z/∂x)_y⁻¹ · (∂z/∂y)_x" },
        { label: "Cyclic relation", math: "(∂x/∂y)_z · (∂y/∂z)_x · (∂z/∂x)_y = −1" },
        { label: "Application to PVT", math: "(∂P/∂V)_T · (∂V/∂T)_P · (∂T/∂P)_V = −1" },
      ],
    },
    {
      title: "Exact differential test (Euler reciprocity)",
      steps: [
        { label: "Exact form", math: "dz = M(x,y) dx + N(x,y) dy is exact if (∂M/∂y)_x = (∂N/∂x)_y" },
        { label: "First Law check", math: "dU = T dS − P dV: test (∂T/∂V)_S = −(∂P/∂S)_V ✓" },
        { label: "Inexact differentials", math: "δq and δw individually are NOT exact — they depend on path" },
        { label: "Combination", math: "but dU = δq + δw IS exact — it is path-independent" },
      ],
    },
  ],
  6: [
    {
      title: "First Law derivation for a closed system",
      steps: [
        { label: "Empirical statement", math: "Energy can neither be created nor destroyed; it can only be converted." },
        { label: "Formal statement", math: "ΔU = q + w  (chemistry sign convention: q > 0 absorbed, w > 0 done ON system)" },
        { label: "Differential form", math: "dU = δq + δw" },
        { label: "For PV work only", math: "δw = −P_ext dV" },
        { label: "Reversible limit", math: "δw_rev = −P dV → dU = δq_rev − P dV" },
        { label: "Combined with entropy", math: "δq_rev = T dS → dU = T dS − P dV (fundamental relation)" },
      ],
    },
    {
      title: "Isothermal expansion of ideal gas: ΔU = 0",
      steps: [
        { label: "Joule's experiment", math: "free expansion into vacuum: w = 0, q = 0 → ΔU = 0" },
        { label: "Joule coefficient", math: "(∂U/∂V)_T = 0 for an ideal gas (no intermolecular forces)" },
        { label: "Proof from kinetic theory", math: "U = U_kinetic only = (f/2)nRT → U depends only on T" },
        { label: "Consequence", math: "any isothermal process on ideal gas: ΔU = 0 → q = −w" },
      ],
    },
  ],
  7: [
    {
      title: "Work done by a gas against varying external pressure",
      steps: [
        { label: "General expression", math: "w = −∫[V₁→V₂] P_ext dV" },
        { label: "Free expansion", math: "P_ext = 0 → w = 0" },
        { label: "Against constant P_ext", math: "w = −P_ext(V₂ − V₁) = −P_ext ΔV" },
        { label: "Reversible isothermal", math: "P_ext = P = nRT/V → w = −nRT ln(V₂/V₁)" },
        { label: "Maximum work theorem", math: "|w_max| = |w_rev| ≥ |w_actual| for any real expansion" },
        { label: "Physical meaning", math: "reversible work is the upper bound; irreversibility destroys useful work" },
      ],
    },
    {
      title: "Derivation of enthalpy from the First Law at constant pressure",
      steps: [
        { label: "First Law", math: "ΔU = q_p + w = q_p − P_ext ΔV" },
        { label: "At constant P", math: "P_ext = P = constant → ΔU = q_p − PΔV" },
        { label: "Rearrange", math: "q_p = ΔU + PΔV = ΔU + Δ(PV) (since P constant)" },
        { label: "Define H", math: "H = U + PV → ΔH = ΔU + Δ(PV)" },
        { label: "Result", math: "q_p = ΔH  (heat at constant pressure equals enthalpy change)" },
        { label: "Note", math: "H is a state function; q_p is a path function that equals ΔH only when P is constant" },
      ],
    },
  ],
  8: [
    {
      title: "Hess's Law from the state-function nature of enthalpy",
      steps: [
        { label: "State function property", math: "ΔH depends only on initial and final states, not on path" },
        { label: "Consequence", math: "any sequence of reactions with the same net change gives the same ΔH" },
        { label: "Formal statement", math: "ΔH_rxn = Σ ΔH°_f(products) − Σ ΔH°_f(reactants)" },
        { label: "Algebraic manipulation", math: "reactions can be reversed (change sign) and scaled (multiply ΔH)" },
        { label: "Example", math: "C(s) + O₂(g) → CO₂(g): ΔH°_f = −393.5 kJ mol⁻¹" },
        { label: "Combination", math: "ΔH°_rxn = ΔH°_f[CO₂] − ΔH°_f[C,graphite] − ΔH°_f[O₂] = −393.5 kJ mol⁻¹" },
      ],
    },
    {
      title: "Relation between ΔH and ΔU for gas-phase reactions",
      steps: [
        { label: "Definition", math: "ΔH = ΔU + Δ(PV)" },
        { label: "Ideal gas", math: "PV = nRT → Δ(PV) = Δn_g RT" },
        { label: "Result", math: "ΔH = ΔU + Δn_g RT" },
        { label: "Δn_g definition", math: "Δn_g = moles of gaseous products − moles of gaseous reactants" },
        { label: "When Δn_g = 0", math: "ΔH = ΔU (e.g., H₂ + Cl₂ → 2HCl: Δn_g = 2 − 2 = 0)" },
      ],
    },
  ],
  9: [
    {
      title: "Bond enthalpy and its use in estimating ΔH_rxn",
      steps: [
        { label: "Definition", math: "Bond enthalpy = mean enthalpy required to break 1 mol of X–Y bonds in gaseous molecules" },
        { label: "Sign", math: "bond breaking: endothermic (positive ΔH); bond forming: exothermic (negative ΔH)" },
        { label: "Estimation formula", math: "ΔH°_rxn ≈ Σ D(bonds broken) − Σ D(bonds formed)" },
        { label: "All species must be gaseous", math: "must include phase-change enthalpies if reactants or products are not gas" },
        { label: "Limitation", math: "bond enthalpies are averages; actual bond strengths vary with molecular environment" },
        { label: "Example", math: "H₂(g) + Cl₂(g) → 2HCl(g): ΔH = D(H–H) + D(Cl–Cl) − 2D(H–Cl) = 436 + 242 − 2(431) = −184 kJ mol⁻¹" },
      ],
    },
    {
      title: "Born–Haber cycle for lattice enthalpy",
      steps: [
        { label: "Target", math: "Na(s) + ½Cl₂(g) → NaCl(s)  ΔH°_f = −411 kJ mol⁻¹" },
        { label: "Step 1: atomisation Na", math: "Na(s) → Na(g)  ΔH°_sub = +108 kJ mol⁻¹" },
        { label: "Step 2: dissociation Cl₂", math: "½Cl₂(g) → Cl(g)  ½D(Cl₂) = +121 kJ mol⁻¹" },
        { label: "Step 3: ionisation Na", math: "Na(g) → Na⁺(g) + e⁻  IE₁ = +496 kJ mol⁻¹" },
        { label: "Step 4: electron affinity Cl", math: "Cl(g) + e⁻ → Cl⁻(g)  EA = −349 kJ mol⁻¹" },
        { label: "Step 5: lattice enthalpy", math: "Na⁺(g) + Cl⁻(g) → NaCl(s)  U_L = ΔH°_f − (108 + 121 + 496 − 349) = −411 − 376 = −787 kJ mol⁻¹" },
      ],
    },
  ],
  10: [
    {
      title: "Derivation of Cp − Cv = R for an ideal gas",
      steps: [
        { label: "Start from H = U + PV", math: "(∂H/∂T)_P = (∂U/∂T)_P + P(∂V/∂T)_P" },
        { label: "Cp definition", math: "Cp = (∂H/∂T)_P" },
        { label: "Expand (∂U/∂T)_P", math: "(∂U/∂T)_P = (∂U/∂T)_V + (∂U/∂V)_T (∂V/∂T)_P" },
        { label: "Ideal gas: (∂U/∂V)_T = 0", math: "(∂U/∂T)_P = Cv  (for ideal gas only)" },
        { label: "Ideal gas: PV = nRT", math: "(∂V/∂T)_P = nR/P" },
        { label: "Substitute", math: "Cp = Cv + P · (nR/P) = Cv + nR" },
        { label: "Per mole", math: "Cp,m − Cv,m = R = 8.314 J mol⁻¹ K⁻¹" },
      ],
    },
    {
      title: "Kirchhoff's equation — temperature dependence of ΔH",
      steps: [
        { label: "Differentiate ΔH°_rxn w.r.t. T", math: "d(ΔH°)/dT = Σ νᵢ Cp,m,i = ΔCp" },
        { label: "Kirchhoff's equation", math: "ΔH°(T₂) = ΔH°(T₁) + ∫[T₁→T₂] ΔCp dT" },
        { label: "If ΔCp ≈ constant", math: "ΔH°(T₂) ≈ ΔH°(T₁) + ΔCp(T₂ − T₁)" },
        { label: "General Cp = a + bT + cT²", math: "ΔH° = ΔH°(T₁) + Δa(T₂−T₁) + ½Δb(T₂²−T₁²) + ⅓Δc(T₂³−T₁³)" },
        { label: "Sign of ΔCp", math: "ΔCp > 0 → ΔH increases with T; ΔCp < 0 → ΔH decreases with T" },
      ],
    },
  ],
  11: [
    {
      title: "Calorimeter calibration and heat capacity of calorimeter",
      steps: [
        { label: "Calorimeter equation", math: "q_rxn = −C_cal · ΔT" },
        { label: "Calibration", math: "burn known quantity of benzoic acid (ΔU_comb known) → find C_cal" },
        { label: "C_cal from calibration", math: "C_cal = q_known / ΔT_measured" },
        { label: "Bomb calorimeter", math: "constant V → measures ΔU_comb directly (no PV work)" },
        { label: "Convert ΔU to ΔH", math: "ΔH_comb = ΔU_comb + Δn_g RT" },
        { label: "Coffee-cup calorimeter", math: "constant P → measures ΔH directly; C_cal usually negligible" },
      ],
    },
  ],
  12: [
    {
      title: "Definitions and relationships between standard enthalpy changes",
      steps: [
        { label: "ΔH°_f", math: "enthalpy of formation of 1 mol compound from elements in standard states at 298 K, 1 bar" },
        { label: "Elements convention", math: "ΔH°_f (element in standard state) = 0 by definition" },
        { label: "ΔH°_comb", math: "enthalpy when 1 mol substance burns completely in excess O₂ at standard conditions" },
        { label: "ΔH°_sol", math: "enthalpy when 1 mol solute dissolves in large excess of solvent" },
        { label: "ΔH°_neut", math: "enthalpy when 1 mol H₂O forms from acid–base neutralisation" },
        { label: "From Hess", math: "ΔH°_rxn = Σ νᵢ ΔH°_f,i  (with sign convention: products positive, reactants negative)" },
      ],
    },
  ],
  13: [
    {
      title: "Boltzmann's entropy formula — derivation outline",
      steps: [
        { label: "Define microstate", math: "one specific quantum-mechanical configuration of all particles" },
        { label: "Macrostate Ω", math: "number of microstates compatible with the observed macroscopic state" },
        { label: "Boltzmann postulate", math: "S = k_B ln Ω  (k_B = 1.381 × 10⁻²³ J K⁻¹)" },
        { label: "Additivity check", math: "two independent systems: Ω_total = Ω_A · Ω_B → S_total = k_B ln(Ω_A Ω_B) = S_A + S_B ✓" },
        { label: "Maximum entropy", math: "equilibrium corresponds to the macrostate with the maximum number of microstates" },
        { label: "Link to disorder", math: "more disordered configurations have larger Ω → larger S" },
      ],
    },
    {
      title: "Spontaneity from the entropy of the universe",
      steps: [
        { label: "Second Law", math: "for any spontaneous process: ΔS_univ = ΔS_sys + ΔS_surr ≥ 0" },
        { label: "ΔS_surr", math: "ΔS_surr = −q_sys / T  (at constant T)" },
        { label: "At constant T,P", math: "ΔS_univ = ΔS_sys − ΔH_sys/T = −ΔG_sys/T" },
        { label: "Spontaneous", math: "ΔG_sys < 0 ↔ ΔS_univ > 0" },
        { label: "Equilibrium", math: "ΔG_sys = 0 ↔ ΔS_univ = 0" },
      ],
    },
  ],
  14: [
    {
      title: "Carnot cycle — step-by-step derivation",
      steps: [
        { label: "Step 1: Isothermal expansion at T_h", math: "q_h = −w₁ = nRT_h ln(V₂/V₁) > 0" },
        { label: "Step 2: Adiabatic expansion T_h → T_c", math: "q = 0; w₂ = Cv(T_c − T_h) < 0; work done by gas" },
        { label: "Step 3: Isothermal compression at T_c", math: "q_c = −w₃ = nRT_c ln(V₄/V₃) < 0 (heat released)" },
        { label: "Step 4: Adiabatic compression T_c → T_h", math: "q = 0; w₄ = Cv(T_h − T_c) > 0" },
        { label: "Net work", math: "w_net = w₁ + w₂ + w₃ + w₄ = −(q_h + q_c)" },
        { label: "Adiabat relation", math: "T_h V₂^{γ−1} = T_c V₃^{γ−1} and T_h V₁^{γ−1} = T_c V₄^{γ−1}" },
        { label: "Therefore", math: "V₂/V₁ = V₃/V₄" },
        { label: "Efficiency", math: "η = w_by/q_h = 1 + q_c/q_h = 1 − T_c/T_h" },
      ],
    },
  ],
  15: [
    {
      title: "Kelvin–Planck and Clausius statements — equivalence",
      steps: [
        { label: "Kelvin–Planck", math: "It is impossible to construct a heat engine operating in a cycle that absorbs heat from a reservoir and converts it entirely to work." },
        { label: "Clausius", math: "It is impossible to construct a device operating in a cycle whose sole effect is to transfer heat from a cold reservoir to a hot reservoir." },
        { label: "Equivalence proof (sketch)", math: "Assume Kelvin–Planck is violated → build a device with η = 1 → drive a reverse Carnot (refrigerator) → net result violates Clausius. And vice versa." },
        { label: "Carnot theorem", math: "No engine operating between two fixed temperatures can be more efficient than the Carnot engine." },
      ],
    },
  ],
  16: [
    {
      title: "Clausius inequality — derivation",
      steps: [
        { label: "For any cycle", math: "ΔS_univ = ΔS_sys + ΔS_surr ≥ 0" },
        { label: "ΔS_surr for surroundings at T", math: "ΔS_surr = −δq_sys/T (heat absorbed by system)" },
        { label: "Integrate over cycle", math: "ΔS_cycle,sys + ΔS_surr,cycle ≥ 0" },
        { label: "S is a state function", math: "ΔS_cycle,sys = 0" },
        { label: "Therefore", math: "∮ δq/T ≤ 0 (Clausius inequality)" },
        { label: "Equality", math: "∮ δq/T = 0 for all reversible cycles" },
        { label: "Strict inequality", math: "∮ δq/T < 0 for irreversible cycles" },
        { label: "Define entropy", math: "dS ≡ δq_rev/T → S is a well-defined state function" },
      ],
    },
  ],
  17: [
    {
      title: "Entropy change for reversible processes",
      steps: [
        { label: "Phase transition at T_tr", math: "ΔS_tr = ΔH_tr/T_tr  (reversible, isothermal, isobaric)" },
        { label: "Heating at constant pressure", math: "ΔS = ∫[T₁→T₂] Cp/T dT" },
        { label: "If Cp ≈ constant", math: "ΔS = Cp ln(T₂/T₁)" },
        { label: "Reversible isothermal ideal gas", math: "ΔS = nR ln(V₂/V₁) = −nR ln(P₂/P₁)" },
        { label: "Reversible adiabatic", math: "ΔS = 0 (isentropic process)" },
        { label: "Irreversible adiabatic", math: "ΔS > 0 (internal irreversibility)" },
      ],
    },
    {
      title: "Entropy is a state function — path independence proof",
      steps: [
        { label: "Two paths A and B from state 1 to state 2", math: "∫_A δq/T and ∫_B δq/T" },
        { label: "Reverse path B and combine with A", math: "∮ δq/T = ∫_A δq/T − ∫_B δq/T" },
        { label: "If both reversible", math: "∮ δq_rev/T = 0 → ∫_A δq_rev/T = ∫_B δq_rev/T" },
        { label: "Conclusion", math: "∫ δq_rev/T is path-independent → it defines a state function S" },
      ],
    },
  ],
  18: [
    {
      title: "Entropy of mixing for ideal gases",
      steps: [
        { label: "Before mixing", math: "each gas i occupies volume Vᵢ at T and Pᵢ" },
        { label: "After mixing", math: "each gas i occupies total volume V at partial pressure pᵢ = yᵢP" },
        { label: "Entropy change for gas i", math: "ΔS_i = −nᵢR ln(pᵢ/P) = −nᵢR ln yᵢ" },
        { label: "Total entropy of mixing", math: "ΔS_mix = −R Σᵢ nᵢ ln yᵢ = −nR Σᵢ xᵢ ln xᵢ" },
        { label: "Sign", math: "yᵢ < 1 → ln yᵢ < 0 → ΔS_mix > 0 always for genuine mixing" },
        { label: "Maximum", math: "ΔS_mix is maximum for equimolar mixture (x₁ = x₂ = 0.5): ΔS_mix = nR ln 2" },
      ],
    },
  ],
  19: [
    {
      title: "Third Law of Thermodynamics — Nernst heat theorem",
      steps: [
        { label: "Nernst (1906)", math: "As T → 0, ΔS → 0 for any pure crystalline solid at thermal equilibrium" },
        { label: "Planck's formulation", math: "S → 0 as T → 0 for a perfect crystalline substance (Ω = 1 at absolute zero)" },
        { label: "Consequence", math: "absolute (Third-Law) entropies can be assigned to all pure substances" },
        { label: "Residual entropy", math: "some substances retain Ω > 1 at T = 0 due to orientational disorder (CO, NO, ice) → S₀ > 0" },
        { label: "CO residual entropy", math: "S₀(CO) ≈ R ln 2 = 5.76 J mol⁻¹ K⁻¹ (each CO can point either way in crystal)" },
      ],
    },
  ],
  20: [
    {
      title: "Third-Law entropy calculation using Debye extrapolation",
      steps: [
        { label: "Problem", math: "Cp cannot be measured below ~10 K; Debye extrapolation needed" },
        { label: "Debye T³ law", math: "Cp,m ≈ aT³ as T → 0" },
        { label: "Entropy at T_low from 0 K", math: "S(T_low) = ∫[0→T_low] Cp/T dT = ∫ aT² dT = aT_low³/3 = Cp(T_low)/3" },
        { label: "Then integrate Cp/T", math: "S(T₂) = S(T_low) + ∫[T_low→T₂] Cp,m/T dT (graphically or analytically)" },
        { label: "Add transition terms", math: "S_total = Σ contributions + Σ ΔH_tr/T_tr" },
        { label: "Standard entropy S°_m", math: "value at 298 K and 1 bar; tabulated for all substances" },
      ],
    },
  ],
  21: [
    {
      title: "Maxwell relations derived from exact differentials",
      steps: [
        { label: "From dU = T dS − P dV", math: "(∂T/∂V)_S = −(∂P/∂S)_V" },
        { label: "From dH = T dS + V dP", math: "(∂T/∂P)_S = (∂V/∂S)_P" },
        { label: "From dA = −S dT − P dV", math: "(∂S/∂V)_T = (∂P/∂T)_V" },
        { label: "From dG = V dP − S dT", math: "(∂S/∂P)_T = −(∂V/∂T)_P = −Vα (α = thermal expansion coeff.)" },
        { label: "Why useful", math: "Maxwell relations express unmeasurable quantities (∂S/∂P)_T in terms of measurable (∂V/∂T)_P" },
      ],
    },
    {
      title: "Gibbs–Helmholtz equation derivation",
      steps: [
        { label: "Start from G = H − TS", math: "G/T = H/T − S" },
        { label: "Differentiate w.r.t. T at constant P", math: "∂(G/T)/∂T = (T∂G/∂T − G)/T² = (T(−S) − G)/T² = −(G + TS)/T² = −H/T²" },
        { label: "Result", math: "[∂(G/T)/∂T]_P = −H/T²" },
        { label: "Reaction form", math: "[∂(ΔG°/T)/∂T]_P = −ΔH°/T²" },
        { label: "Integrate", math: "ΔG°(T₂)/T₂ − ΔG°(T₁)/T₁ = ΔH°(1/T₂ − 1/T₁) (if ΔH° ≈ const)" },
      ],
    },
  ],
  22: [
    {
      title: "Fundamental relation for open systems — chemical potential",
      steps: [
        { label: "Closed system dU", math: "dU = T dS − P dV" },
        { label: "Open system", math: "matter can enter/leave → U also depends on nᵢ" },
        { label: "Extended fundamental relation", math: "dU = T dS − P dV + Σᵢ μᵢ dnᵢ" },
        { label: "Chemical potential definition", math: "μᵢ ≡ (∂U/∂nᵢ)_{S,V,nⱼ≠ᵢ} = (∂G/∂nᵢ)_{T,P,nⱼ≠ᵢ}" },
        { label: "Euler's theorem", math: "G = Σᵢ nᵢ μᵢ  (consequence of G being extensive in nᵢ)" },
        { label: "Gibbs–Duhem equation", math: "Σᵢ nᵢ dμᵢ = 0 at constant T, P" },
      ],
    },
  ],
  23: [
    {
      title: "Temperature correction of reaction entropy using Kirchhoff-type integral",
      steps: [
        { label: "Differentiate ΔrS° w.r.t. T", math: "[∂(ΔrS°)/∂T]_P = ΔrCp°/T" },
        { label: "Integrate from T₁ to T₂", math: "ΔrS°(T₂) = ΔrS°(T₁) + ∫[T₁→T₂] ΔrCp°/T dT" },
        { label: "If ΔrCp° ≈ constant", math: "ΔrS°(T₂) = ΔrS°(T₁) + ΔrCp° ln(T₂/T₁)" },
        { label: "Example", math: "½N₂ + O₂ → NO₂: ΔrS°₂₉₈ = −16.805 J mol⁻¹K⁻¹, ΔrCp° = −6.725 J mol⁻¹K⁻¹" },
        { label: "At 348 K", math: "ΔrS°₃₄₈ = −16.805 + (−6.725) ln(348/298) = −16.805 − 1.048 = −17.85 J mol⁻¹K⁻¹" },
      ],
    },
  ],
  24: [
    {
      title: "Helmholtz energy A = U − TS: complete derivation of spontaneity criterion",
      steps: [
        { label: "Definition", math: "A ≡ U − TS" },
        { label: "Differential", math: "dA = dU − T dS − S dT" },
        { label: "First Law", math: "dU = δq + δw = δq − P_ext dV" },
        { label: "Second Law", math: "δq ≤ T dS (equality for reversible)" },
        { label: "Combine at constant T", math: "dA = dU − T dS ≤ δw_total" },
        { label: "At constant T,V (no PV work)", math: "dA ≤ 0  (equality for reversible)" },
        { label: "Maximum work", math: "w_max,by = −ΔA (reversible, constant T)" },
      ],
    },
    {
      title: "Gibbs energy G = H − TS: complete derivation of spontaneity criterion",
      steps: [
        { label: "Definition", math: "G ≡ H − TS = U + PV − TS" },
        { label: "Differential", math: "dG = dH − T dS − S dT" },
        { label: "From dH = dU + P dV + V dP", math: "dG = dU + P dV + V dP − T dS − S dT" },
        { label: "At constant T, P", math: "dG = dU + P dV − T dS" },
        { label: "Second Law", math: "T dS ≥ δq = dU − δw_non-PV + P dV" },
        { label: "Therefore", math: "dG ≤ δw_non-PV,by  (at constant T,P)" },
        { label: "If no non-PV work", math: "dG ≤ 0 (equality for reversible)" },
        { label: "Maximum non-PV work", math: "w_non-PV,max,by = −ΔG (reversible, constant T,P)" },
      ],
    },
  ],
  25: [
    {
      title: "Four fundamental differential relations — complete derivation matrix",
      steps: [
        { label: "From U(S,V)", math: "dU = T dS − P dV  →  T = (∂U/∂S)_V,  −P = (∂U/∂V)_S" },
        { label: "Legendre: H = U + PV", math: "dH = T dS + V dP  →  T = (∂H/∂S)_P,  V = (∂H/∂P)_S" },
        { label: "Legendre: A = U − TS", math: "dA = −S dT − P dV  →  −S = (∂A/∂T)_V,  −P = (∂A/∂V)_T" },
        { label: "Legendre: G = H − TS", math: "dG = V dP − S dT  →  V = (∂G/∂P)_T,  −S = (∂G/∂T)_P" },
        { label: "Maxwell from dA", math: "(∂S/∂V)_T = (∂P/∂T)_V  [most useful for real gases]" },
        { label: "Maxwell from dG", math: "(∂S/∂P)_T = −(∂V/∂T)_P = −Vα  [measurable quantities]" },
      ],
    },
    {
      title: "Joule–Thomson coefficient derivation",
      steps: [
        { label: "Definition", math: "μ_JT = (∂T/∂P)_H" },
        { label: "Use cyclic relation", math: "(∂T/∂P)_H = −(∂H/∂P)_T / (∂H/∂T)_P = −(∂H/∂P)_T / Cp" },
        { label: "From Maxwell + Euler", math: "(∂H/∂P)_T = V − T(∂V/∂T)_P = V(1 − αT)" },
        { label: "Where α", math: "α = (1/V)(∂V/∂T)_P (thermal expansion coefficient)" },
        { label: "Result", math: "μ_JT = (T(∂V/∂T)_P − V)/Cp = V(αT − 1)/Cp" },
        { label: "Ideal gas", math: "αT = 1 (since PV=nRT) → μ_JT = 0 for ideal gas" },
        { label: "Inversion", math: "μ_JT = 0 at inversion temperature T_inv; cooling below T_inv (μ_JT > 0)" },
      ],
    },
  ],
  26: [
    {
      title: "Complete derivation of (∂G/∂P)_T and (∂G/∂T)_P",
      steps: [
        { label: "From dG = V dP − S dT", math: "(∂G/∂P)_T = V  and  (∂G/∂T)_P = −S" },
        { label: "Pressure integral for ideal gas", math: "G_m(T,P) = G°_m(T) + ∫[P°→P] V_m dP = G°_m + RT ln(P/P°)" },
        { label: "For condensed phase", math: "G_m(T,P) ≈ G°_m(T) + V_m(P − P°)  (V_m ≈ constant)" },
        { label: "Second temperature derivative", math: "(∂²G/∂T²)_P = −(∂S/∂T)_P = −Cp/T < 0 → G curves downward" },
        { label: "Phase stability", math: "stable phase at T,P has lowest G_m; intersection of G_m lines is a phase transition" },
      ],
    },
  ],
  27: [
    {
      title: "Chemical potential for components in mixtures — complete derivation",
      steps: [
        { label: "Fundamental relation", math: "dG = −S dT + V dP + Σᵢ μᵢ dnᵢ" },
        { label: "Chemical potential", math: "μᵢ = (∂G/∂nᵢ)_{T,P,nⱼ≠ᵢ} = Ḡ_m,i (partial molar Gibbs energy)" },
        { label: "Pure ideal gas", math: "dμ = V_m dP = (RT/P) dP at constant T" },
        { label: "Integrate from P° to P", math: "μ(T,P) = μ°(T) + RT ln(P/P°)" },
        { label: "Mixture component", math: "μᵢ = μ°ᵢ(T) + RT ln(yᵢP/P°) = μᵢ*(T,P) + RT ln yᵢ" },
        { label: "Dilution lowers μ", math: "yᵢ < 1 → RT ln yᵢ < 0 → mixing is spontaneous" },
      ],
    },
  ],
  28: [
    {
      title: "Derivation of Raoult's law from chemical-potential equality",
      steps: [
        { label: "Equilibrium condition", math: "μᵢ(l, mixture) = μᵢ(g, vapour)" },
        { label: "Ideal liquid phase", math: "μᵢ(l) = μ*ᵢ(l) + RT ln xᵢ" },
        { label: "Ideal vapour phase", math: "μᵢ(g) = μ°ᵢ(g) + RT ln(Pᵢ/P°)" },
        { label: "Pure component equilibrium", math: "μ*ᵢ(l) = μ°ᵢ(g) + RT ln(P*ᵢ/P°)" },
        { label: "Subtract", math: "RT ln xᵢ = RT ln(Pᵢ/P*ᵢ)" },
        { label: "Raoult's Law", math: "Pᵢ = xᵢ P*ᵢ" },
        { label: "Validity", math: "holds for ideal solutions (similar intermolecular forces, sizes)" },
      ],
    },
  ],
  29: [
    {
      title: "Derivation of ΔrG° = −RT ln K",
      steps: [
        { label: "Start", math: "ΔrG = Σᵢ νᵢ μᵢ = Σᵢ νᵢ (μ°ᵢ + RT ln aᵢ)" },
        { label: "Separate standard and activity terms", math: "ΔrG = ΔrG° + RT Σᵢ νᵢ ln aᵢ" },
        { label: "Define Q", math: "Q = Πᵢ aᵢ^{νᵢ}  →  Σᵢ νᵢ ln aᵢ = ln Q" },
        { label: "Key relation", math: "ΔrG = ΔrG° + RT ln Q" },
        { label: "At equilibrium: ΔrG = 0, Q = K", math: "0 = ΔrG° + RT ln K" },
        { label: "Standard result", math: "ΔrG° = −RT ln K  →  K = exp(−ΔrG°/RT)" },
        { label: "Direction formula", math: "ΔrG = RT ln(Q/K)  (< 0 when Q < K → forward; > 0 when Q > K → reverse)" },
      ],
    },
  ],
  30: [
    {
      title: "van't Hoff equation — complete derivation",
      steps: [
        { label: "Start from ΔrG° = −RT ln K", math: "ln K = −ΔrG°/(RT)" },
        { label: "Gibbs–Helmholtz applied to ΔrG°", math: "[∂(ΔrG°/T)/∂T]_P = −ΔrH°/T²" },
        { label: "Since ΔrG°/T = −R ln K", math: "[∂(−R ln K)/∂T]_P = −ΔrH°/T²" },
        { label: "Simplify", math: "d(ln K)/dT = ΔrH°/(RT²)  [van't Hoff differential equation]" },
        { label: "Integrate T₁ → T₂ (ΔrH° ≈ const)", math: "ln(K₂/K₁) = −(ΔrH°/R)(1/T₂ − 1/T₁)" },
        { label: "Plot", math: "ln K vs 1/T gives a straight line with slope = −ΔrH°/R" },
      ],
    },
    {
      title: "Clapeyron equation derivation",
      steps: [
        { label: "Two-phase equilibrium", math: "μ_α(T,P) = μ_β(T,P) along coexistence line" },
        { label: "Along the coexistence line", math: "dμ_α = dμ_β" },
        { label: "Expand", math: "−S̄_α dT + V̄_α dP = −S̄_β dT + V̄_β dP" },
        { label: "Rearrange", math: "(V̄_β − V̄_α) dP = (S̄_β − S̄_α) dT" },
        { label: "At transition temperature", math: "ΔS_tr = ΔH_tr/T_tr" },
        { label: "Clapeyron equation", math: "dP/dT = ΔH_tr/(T_tr ΔV_tr)" },
        { label: "Clausius–Clapeyron (l–v)", math: "Assume ΔV ≈ V_g = RT/P: d ln P/dT = ΔH_vap/(RT²)" },
      ],
    },
  ],
};

type DerivStep = { label: string; math: string; note?: string };
type DerivBlock = { title: string; steps: DerivStep[] };

function DerivationBlock({ block, idx }: { block: DerivBlock; idx: number }) {
  return (
    <div className="rounded-2xl border border-violet-400/20 bg-violet-400/[0.04] p-5">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-300">
        Derivation {idx + 1}
      </p>
      <h3 className="mt-2 text-lg font-black text-white">{block.title}</h3>
      <div className="mt-4 space-y-2">
        {block.steps.map((step, si) => (
          <div
            key={si}
            className="grid gap-2 border-b border-white/5 pb-2 pt-1 md:grid-cols-[160px_1fr]"
          >
            <span className="text-xs font-black uppercase tracking-wider text-slate-400">
              {step.label}
            </span>
            <span className="font-mono text-sm text-slate-100">
              {step.math}
              {step.note ? (
                <span className="ml-2 text-xs text-slate-400 not-italic">
                  — {step.note}
                </span>
              ) : null}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ThermodynamicsCompleteDerivations({ part }: { part: number }) {
  const blocks: DerivBlock[] = partDerivations[part] ?? [];
  if (blocks.length === 0) return null;

  return (
    <section className="rounded-[2rem] border border-violet-400/20 bg-slate-950/80 p-5 shadow-2xl shadow-black/20 md:p-8">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-300">
        Complete Derivations
      </p>
      <h2 className="mt-2 text-2xl font-black tracking-tight text-white md:text-3xl">
        Step-by-step mathematical derivations
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-400">
        Each derivation below shows every intermediate step with stated assumptions, so that a student can follow the logic line by line.
      </p>
      <div className="mt-6 space-y-5">
        {blocks.map((block, idx) => (
          <DerivationBlock key={idx} block={block} idx={idx} />
        ))}
      </div>
    </section>
  );
}
