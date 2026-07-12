import React from "react";

type Entry = {
  title: string;
  subtitle: string;
  flow: [string, string, string];
  theory: string[];
  formulas: [string, string, string][];
  traps: [string, string][];
  problems: [string, string, string][];
};

const ENRICHMENT: Record<number, Entry> = {
  "3": {
    "title": "Reversibility, quasi-static motion and finite-gradient irreversibility",
    "subtitle": "Precision layer for thermodynamic processes and equilibrium.",
    "flow": [
      "equilibrium state 1",
      "controlled path",
      "equilibrium state 2"
    ],
    "theory": [
      "A quasi-static process passes through a dense sequence of near-equilibrium states, but it is reversible only when every dissipative effect is absent.",
      "Mechanical reversibility requires an infinitesimal pressure difference; thermal reversibility requires an infinitesimal temperature difference; chemical reversibility requires an infinitesimal affinity.",
      "Friction, viscosity, electrical resistance, turbulence, finite diffusion gradients and free expansion generate entropy even when the process is slow.",
      "A reversible path is an ideal limiting construction used to calculate maximum work and minimum entropy production."
    ],
    "formulas": [
      [
        "Mechanical limit",
        "Pext = Psys ± dP",
        "A finite pressure gap causes irreversible acceleration."
      ],
      [
        "Thermal limit",
        "Tsurr = Tsys ± dT",
        "A finite temperature gap generates entropy."
      ],
      [
        "Chemical limit",
        "ΔrG → 0",
        "Reaction progress is reversible only near zero affinity."
      ],
      [
        "Entropy production",
        "Sgen ≥ 0",
        "Zero for reversible change, positive for real irreversible change."
      ]
    ],
    "traps": [
      [
        "Slow",
        "does not automatically mean reversible"
      ],
      [
        "Quasi-static",
        "can still contain friction"
      ],
      [
        "Cyclic",
        "does not mean every step is reversible"
      ],
      [
        "Adiabatic",
        "does not automatically mean isentropic"
      ]
    ],
    "problems": [
      [
        "Frictional piston",
        "A piston moves extremely slowly but rubs against the cylinder. Is the path reversible?",
        "No. Friction dissipates work and produces entropy even in the quasi-static limit."
      ],
      [
        "Finite temperature gap",
        "A body at 350 K contacts a reservoir at 300 K. Can the heat transfer be reversible?",
        "No. The finite temperature difference produces entropy. Reversibility would require a continuum of reservoirs differing infinitesimally in temperature."
      ],
      [
        "Mechanical reversal",
        "Why can a reversible piston direction be reversed by an infinitesimal pressure change?",
        "Because system and external pressures differ only infinitesimally, so a differential perturbation changes the sign of the driving force."
      ],
      [
        "Chemical equilibrium",
        "What is the reversible-reaction limit in terms of reaction Gibbs energy?",
        "The reaction affinity tends to zero, so ΔrG tends to zero and an infinitesimal composition change can reverse direction."
      ]
    ]
  },
  "9": {
    "title": "Microscopic meaning of isothermal expansion",
    "subtitle": "Adds accessible-state reasoning without repeating the work derivation.",
    "flow": [
      "confined ideal gas",
      "larger accessible volume",
      "greater multiplicity"
    ],
    "theory": [
      "For an ideal gas at fixed temperature, internal energy does not change because it depends only on temperature.",
      "Expansion increases the number of accessible translational states even when the mean molecular kinetic energy is unchanged.",
      "Reversible isothermal expansion extracts the maximum work magnitude; free expansion extracts no work but reaches the same entropy change between the same endpoints.",
      "The entropy increase is an endpoint property and may be evaluated by a reversible comparison path."
    ],
    "formulas": [
      [
        "Entropy change",
        "ΔS = nR ln(V₂/V₁)",
        "Positive for expansion and negative for compression."
      ],
      [
        "Reversible work",
        "wrev = −nRT ln(V₂/V₁)",
        "Chemistry sign convention."
      ],
      [
        "Ideal-gas energy",
        "ΔU = 0",
        "For an isothermal ideal-gas process."
      ],
      [
        "Reversible heat",
        "qrev = −wrev",
        "Follows from the first law when ΔU = 0."
      ]
    ],
    "traps": [
      [
        "Same endpoints",
        "same ΔS but not same q or w"
      ],
      [
        "Free expansion",
        "w = 0, not reversible work"
      ],
      [
        "Isothermal",
        "does not imply q = 0"
      ],
      [
        "Real gas",
        "U may depend on volume"
      ]
    ],
    "problems": [
      [
        "Threefold expansion",
        "One mole expands isothermally from V to 3V. Find ΔS.",
        "ΔS = R ln 3 = 9.13 J K⁻¹."
      ],
      [
        "Free versus reversible",
        "Compare ΔS for free and reversible isothermal expansion between the same ideal-gas endpoints.",
        "The system entropy change is identical because S is a state function; work and heat differ."
      ],
      [
        "Compression",
        "Two moles are compressed isothermally from 10 L to 4 L. Find ΔS.",
        "ΔS = 2R ln(0.4) = −15.24 J K⁻¹."
      ],
      [
        "Real-gas warning",
        "Must a real gas remain at constant temperature during free expansion?",
        "No. Constant U can be accompanied by a temperature change because real-gas U can depend on volume."
      ]
    ]
  },
  "10": {
    "title": "Adiabatic is not automatically isentropic",
    "subtitle": "Separates heat blocking from entropy generation.",
    "flow": [
      "q = 0 boundary",
      "reversible or irreversible?",
      "entropy outcome"
    ],
    "theory": [
      "Adiabatic means no heat crosses the selected boundary. It says nothing by itself about friction, turbulence, mixing or finite pressure differences.",
      "A reversible adiabatic process in a closed simple compressible system is isentropic because both heat transfer and entropy generation vanish.",
      "An irreversible adiabatic process generates entropy, so the system entropy increases.",
      "The familiar ideal-gas relations PV^γ = constant and TV^(γ−1) = constant require a reversible adiabatic path."
    ],
    "formulas": [
      [
        "Adiabatic boundary",
        "q = 0",
        "No heat transfer through the chosen boundary."
      ],
      [
        "Entropy balance",
        "ΔS = Sgen",
        "For a closed adiabatic system."
      ],
      [
        "Reversible adiabatic",
        "PV^γ = constant",
        "Ideal gas with appropriate constant heat capacities."
      ],
      [
        "Temperature-volume",
        "TV^(γ−1) = constant",
        "Same assumptions as above."
      ]
    ],
    "traps": [
      [
        "Adiabatic",
        "may be irreversible"
      ],
      [
        "Isentropic",
        "requires zero entropy generation"
      ],
      [
        "PVγ",
        "not valid for arbitrary adiabatic paths"
      ],
      [
        "Insulated",
        "does not eliminate work"
      ]
    ],
    "problems": [
      [
        "Free expansion",
        "An ideal gas expands adiabatically into vacuum. Is the process isentropic?",
        "No. It is irreversible and the gas entropy increases despite q = 0."
      ],
      [
        "Frictional compression",
        "An insulated gas is compressed with piston friction. What is the sign of ΔS?",
        "Positive because entropy is generated inside the adiabatic system."
      ],
      [
        "Reversible relation",
        "When may PV^γ = constant be applied?",
        "For a reversible adiabatic ideal-gas process with the heat-capacity assumptions stated."
      ],
      [
        "Boundary choice",
        "Can an adiabatic subsystem gain entropy while a larger isolated composite conserves energy?",
        "Yes. Entropy can be generated internally while total energy remains constant."
      ]
    ]
  },
  "18": {
    "title": "Entropy balance and irreversibility accounting",
    "subtitle": "Adds a universal balance framework for system and surroundings.",
    "flow": [
      "entropy transfer",
      "entropy generation",
      "total entropy change"
    ],
    "theory": [
      "Entropy can cross a boundary with heat, but entropy generation occurs inside the chosen system whenever the process is irreversible.",
      "The entropy change of a system can be negative; the second law requires nonnegative entropy generation for the complete isolated composite.",
      "A reversible comparison path calculates a state-function change but does not make the actual process reversible.",
      "Finite temperature differences, friction, diffusion, chemical reaction away from equilibrium and electrical resistance are common sources of entropy generation."
    ],
    "formulas": [
      [
        "Closed-system balance",
        "ΔSsys = ∫δq/Tb + Sgen",
        "Tb is the boundary temperature where heat crosses."
      ],
      [
        "Universe criterion",
        "ΔSuniv ≥ 0",
        "Positive for spontaneous irreversible change."
      ],
      [
        "Reversible limit",
        "Sgen = 0",
        "The minimum possible entropy production."
      ],
      [
        "Clausius inequality",
        "∮δq/T ≤ 0",
        "Equality for a reversible cycle."
      ]
    ],
    "traps": [
      [
        "ΔSsys < 0",
        "can still be spontaneous"
      ],
      [
        "δq/T",
        "not automatically equal to dS"
      ],
      [
        "Reversible path",
        "is a calculation path"
      ],
      [
        "Entropy generation",
        "never negative"
      ]
    ],
    "problems": [
      [
        "Composite balance",
        "The system loses 120 J K⁻¹ while the surroundings gain 145 J K⁻¹. Is the change allowed?",
        "ΔSuniv = +25 J K⁻¹, so it is spontaneous and irreversible."
      ],
      [
        "Reservoir transfer",
        "1000 J flows from 400 K to 300 K. Find ΔSuniv.",
        "−1000/400 + 1000/300 = 0.833 J K⁻¹."
      ],
      [
        "System entropy decreases",
        "Can water freeze spontaneously below its freezing temperature although its entropy decreases?",
        "Yes. Heat released raises surroundings entropy by more than the system entropy decrease."
      ],
      [
        "Cycle inequality",
        "What does a negative ∮δq/T indicate?",
        "An irreversible cycle; the magnitude is connected to entropy generation."
      ]
    ]
  },
  "20": {
    "title": "Microscopic mixing and the identical-gas safeguard",
    "subtitle": "Deepens ideal mixing through multiplicity and indistinguishability.",
    "flow": [
      "separated species",
      "remove constraint",
      "mixed equilibrium"
    ],
    "theory": [
      "Mixing distinct ideal gases increases the number of composition microstates and therefore increases entropy.",
      "For ideal gases, mixing at fixed temperature does not change internal energy or enthalpy; the Gibbs-energy decrease is entirely entropic.",
      "The entropy of mixing vanishes for identical gases because removing a fictitious partition creates no new measurable macrostate.",
      "At fixed total amount, the molar entropy of binary ideal mixing is greatest at equimolar composition."
    ],
    "formulas": [
      [
        "Mixing entropy",
        "ΔmixS = −RΣnᵢ ln xᵢ",
        "Positive for distinct ideal species."
      ],
      [
        "Mixing enthalpy",
        "ΔmixH = 0",
        "Ideal-gas mixing."
      ],
      [
        "Mixing Gibbs energy",
        "ΔmixG = RTΣnᵢ ln xᵢ",
        "Negative for genuine mixing."
      ],
      [
        "Equimolar binary maximum",
        "ΔmixS/n = R ln 2",
        "At xA = xB = 1/2."
      ]
    ],
    "traps": [
      [
        "Identical gases",
        "ΔmixS = 0"
      ],
      [
        "Different labels",
        "do not guarantee physical distinction"
      ],
      [
        "Ideal mixing",
        "not enthalpy-driven"
      ],
      [
        "Maximum mixing",
        "requires fixed total amount"
      ]
    ],
    "problems": [
      [
        "Unequal mixture",
        "Mix 1 mol A and 3 mol B ideally. Find ΔmixS.",
        "−R[ln0.25 + 3ln0.75] = 18.7 J K⁻¹."
      ],
      [
        "Equimolar mixture",
        "Mix 2 mol A and 2 mol B ideally. Find ΔmixS.",
        "4R ln2 = 23.1 J K⁻¹."
      ],
      [
        "Identical gas",
        "Two portions of the same ideal gas at equal T and P are combined. Find ΔmixS.",
        "Zero because no new thermodynamic composition state appears."
      ],
      [
        "Gibbs driver",
        "Why is ΔmixG negative when ΔmixH = 0?",
        "Because ΔmixG = −TΔmixS and the entropy of genuine ideal mixing is positive."
      ]
    ]
  },
  "21": {
    "title": "Molecular modes, symmetry and absolute-entropy trends",
    "subtitle": "Adds deeper interpretation to tabulated molar entropies.",
    "flow": [
      "molecular structure",
      "accessible modes",
      "standard molar entropy"
    ],
    "theory": [
      "Translational, rotational, vibrational and conformational states all contribute to molecular entropy.",
      "Greater molecular mass and larger moments of inertia often increase state density, while high symmetry reduces the number of distinguishable rotational arrangements.",
      "Flexible polyatomic molecules often have larger entropies because they possess many low-energy vibrations and conformations.",
      "Gas-mole change is a useful reaction-entropy diagnostic but does not replace tabulated entropy data."
    ],
    "formulas": [
      [
        "Reaction entropy",
        "ΔrS° = ΣνS°products − ΣνS°reactants",
        "Use stoichiometric coefficients."
      ],
      [
        "Temperature correction",
        "ΔS(T₂)=ΔS(T₁)+∫ΔCp/T dT",
        "When heat-capacity data are needed."
      ],
      [
        "Phase trend",
        "S°gas > S°liquid > S°solid",
        "A robust general trend, not an absolute comparison across all substances."
      ],
      [
        "Mode count",
        "nonlinear molecule: 3N−6 vibrations",
        "Linear molecule: 3N−5."
      ]
    ],
    "traps": [
      [
        "More atoms",
        "usually but not always higher S°"
      ],
      [
        "Equal gas moles",
        "does not imply ΔrS° = 0"
      ],
      [
        "High symmetry",
        "can lower rotational entropy"
      ],
      [
        "Dissolved gas",
        "often has lower entropy than gas phase"
      ]
    ],
    "problems": [
      [
        "Equal gas moles",
        "Can a reaction with equal gas moles have nonzero ΔrS°?",
        "Yes. Mass, symmetry, rotational constants and vibrational spectra can differ."
      ],
      [
        "Symmetry comparison",
        "Which often has lower rotational entropy: a highly symmetric or asymmetric molecule of similar mass?",
        "The highly symmetric molecule."
      ],
      [
        "Flexible molecule",
        "Why can a flexible polyatomic gas have larger entropy than a rigid molecule?",
        "It has more low-energy vibrational and conformational states."
      ],
      [
        "Temperature correction",
        "If ΔCp is constant, how is reaction entropy corrected from T₁ to T₂?",
        "ΔS(T₂)=ΔS(T₁)+ΔCp ln(T₂/T₁)."
      ]
    ]
  },
  "22": {
    "title": "Absolute entropy staircase and Third-Law construction",
    "subtitle": "Integrates heating segments and phase-transition jumps.",
    "flow": [
      "perfect crystal at 0 K",
      "Cp/T integration",
      "absolute entropy at T"
    ],
    "theory": [
      "The Third Law supplies an absolute entropy reference for a pure perfect crystal with a unique ground-state arrangement.",
      "Absolute entropy is constructed by integrating Cp/T through each phase and adding entropy jumps for reversible phase transitions.",
      "A first-order transition produces a finite entropy change at constant transition temperature.",
      "Heat capacities approach zero at sufficiently low temperature because quantum excitations freeze out."
    ],
    "formulas": [
      [
        "Third-law reference",
        "S(0 K) = 0",
        "Pure perfect crystal with unique order."
      ],
      [
        "Heating contribution",
        "ΔS = ∫(Cp/T)dT",
        "Use the correct phase heat capacity."
      ],
      [
        "Transition contribution",
        "ΔStr = ΔHtr/Ttr",
        "At the equilibrium transition temperature."
      ],
      [
        "Absolute entropy",
        "S(T)=∫₀ᵀCp/T dT + ΣΔHtr/Ttr",
        "Split at every transition."
      ]
    ],
    "traps": [
      [
        "Every solid",
        "does not automatically have S = 0 at 0 K"
      ],
      [
        "Perfect crystal",
        "requires unique microscopic order"
      ],
      [
        "Latent heat",
        "creates an entropy jump"
      ],
      [
        "Constant Cp to 0 K",
        "is physically invalid"
      ]
    ],
    "problems": [
      [
        "Fusion entropy",
        "A solid melts at 360 K with ΔHfus = 9.0 kJ mol⁻¹. Find ΔSfus.",
        "9000/360 = 25.0 J mol⁻¹ K⁻¹."
      ],
      [
        "Heating segment",
        "Cp = 24 J mol⁻¹ K⁻¹ from 20 K to 200 K. Find ΔS.",
        "24 ln(10) = 55.3 J mol⁻¹ K⁻¹."
      ],
      [
        "Two-stage path",
        "Fusion contributes 20.0 J mol⁻¹ K⁻¹ and liquid heating contributes 7.29. Find total.",
        "27.29 J mol⁻¹ K⁻¹."
      ],
      [
        "Low-temperature check",
        "Why can Cp not remain constant as T approaches zero?",
        "The Cp/T integral would diverge and contradict the finite Third-Law entropy limit."
      ]
    ]
  },
  "23": {
    "title": "Microstates, residual entropy and particle-in-a-box accessibility",
    "subtitle": "Strengthens the statistical interpretation already introduced.",
    "flow": [
      "count microstates",
      "apply S = k ln W",
      "interpret residual order"
    ],
    "theory": [
      "Boltzmann entropy links a thermodynamic macrostate to the logarithm of its compatible microstate count.",
      "A larger container compresses translational energy-level spacing because En is proportional to 1/L².",
      "Residual entropy arises when several orientational arrangements remain frozen even as temperature approaches zero.",
      "Microstate counting must state whether particles or orientations are distinguishable; hidden counting assumptions change W."
    ],
    "formulas": [
      [
        "Boltzmann formula",
        "S = kB ln W",
        "W is thermodynamic multiplicity."
      ],
      [
        "Entropy difference",
        "ΔS = kB ln(W₂/W₁)",
        "The multiplicity ratio controls the change."
      ],
      [
        "Particle in box",
        "En = n²h²/(8mL²)",
        "Larger L gives closer levels."
      ],
      [
        "Residual molar entropy",
        "Sres = R ln Worient",
        "For independent orientational multiplicity per mole."
      ]
    ],
    "traps": [
      [
        "W",
        "is not number of particles"
      ],
      [
        "Energy levels",
        "are not microstates by themselves"
      ],
      [
        "Frozen disorder",
        "can produce residual entropy"
      ],
      [
        "Counting convention",
        "must be explicit"
      ]
    ],
    "problems": [
      [
        "Two orientations",
        "A crystal has two frozen orientations per molecule. Find Sres.",
        "R ln2 = 5.76 J mol⁻¹ K⁻¹."
      ],
      [
        "Box expansion",
        "The box length doubles. By what factor does each En change?",
        "Each level becomes one-fourth."
      ],
      [
        "Multiplicity ratio",
        "W rises by a factor 10⁶. Find ΔS for one microscopic system.",
        "6kB ln10 = 1.91×10⁻²² J K⁻¹."
      ],
      [
        "Counting caution",
        "Why must distinguishability be specified before using W?",
        "Different counting conventions produce different multiplicities and can create false entropy changes."
      ]
    ]
  },
  "24": {
    "title": "Thermodynamic potentials as Legendre transforms",
    "subtitle": "Explains why each potential matches a different laboratory constraint.",
    "flow": [
      "choose controlled variables",
      "choose natural potential",
      "apply minimum criterion"
    ],
    "theory": [
      "Thermodynamic potentials are not unrelated formulas; they are transformations designed to replace difficult controlled variables with experimentally convenient ones.",
      "Internal energy naturally uses S and V; enthalpy uses S and P; Helmholtz energy uses T and V; Gibbs energy uses T and P.",
      "The potential matched to the imposed constraints decreases during spontaneous change and is minimized at stable equilibrium.",
      "Maximum useful-work statements require reversible operation and explicit separation of pressure–volume work."
    ],
    "formulas": [
      [
        "Internal energy",
        "dU = T dS − P dV",
        "Fixed composition, simple compressible system."
      ],
      [
        "Enthalpy",
        "dH = T dS + V dP",
        "Natural variables S and P."
      ],
      [
        "Helmholtz energy",
        "dA = −S dT − P dV",
        "Natural variables T and V."
      ],
      [
        "Gibbs energy",
        "dG = −S dT + V dP",
        "Natural variables T and P."
      ]
    ],
    "traps": [
      [
        "Minimum criterion",
        "depends on constraints"
      ],
      [
        "Maximum work",
        "requires reversibility"
      ],
      [
        "Gibbs energy",
        "not universal for every constraint"
      ],
      [
        "Legendre transform",
        "changes natural variables, not physics"
      ]
    ],
    "problems": [
      [
        "Fixed T,V",
        "Which potential determines spontaneous direction?",
        "Helmholtz energy A decreases and reaches a minimum."
      ],
      [
        "Fixed T,P",
        "Which potential determines spontaneous direction?",
        "Gibbs energy G decreases and reaches a minimum."
      ],
      [
        "Isolated system",
        "Which extremum principle applies?",
        "Entropy is maximized at fixed U, V and composition."
      ],
      [
        "Natural derivative",
        "What is (∂G/∂T)P?",
        "−S."
      ]
    ]
  },
  "26": {
    "title": "Gibbs-energy slopes, phase stability and crossover temperatures",
    "subtitle": "Adds graph-reading and stability interpretation.",
    "flow": [
      "G(T,P) surface",
      "compare phase slopes",
      "identify stable minimum"
    ],
    "theory": [
      "At constant pressure, the slope of G against T is −S, so the higher-entropy phase has the more negative slope.",
      "At constant temperature, the slope of G against P is V, so the smaller-volume phase is stabilized as pressure increases.",
      "A phase transition occurs where molar Gibbs energies of two phases are equal.",
      "A stationary point is stable only when the relevant curvature is positive under the permitted constraints."
    ],
    "formulas": [
      [
        "Temperature slope",
        "(∂G/∂T)P = −S",
        "Higher entropy means steeper negative slope."
      ],
      [
        "Pressure slope",
        "(∂G/∂P)T = V",
        "Smaller volume gains less G with pressure."
      ],
      [
        "Crossover",
        "Ttr = ΔHtr/ΔStr",
        "When ΔH and ΔS are approximately constant."
      ],
      [
        "Stability",
        "∂²G/∂ξ² > 0",
        "Positive curvature at a constrained minimum."
      ]
    ],
    "traps": [
      [
        "Equal G",
        "marks coexistence, not identical phases"
      ],
      [
        "dG/dξ = 0",
        "alone does not prove stability"
      ],
      [
        "Pressure",
        "generally favours lower volume"
      ],
      [
        "Temperature",
        "generally favours higher entropy"
      ]
    ],
    "problems": [
      [
        "Pressure stabilization",
        "Two phases have equal G; phase α has smaller volume. Which is favoured by higher pressure?",
        "Phase α, because its G rises more slowly with pressure."
      ],
      [
        "Entropy from slope",
        "G decreases by 18 J mol⁻¹ for a 0.10 K rise at fixed P. Find S.",
        "S = 180 J mol⁻¹ K⁻¹."
      ],
      [
        "Transition temperature",
        "ΔHtr = 12 kJ mol⁻¹ and ΔStr = 30 J mol⁻¹ K⁻¹. Estimate Ttr.",
        "400 K."
      ],
      [
        "Stability test",
        "Why is zero first derivative insufficient?",
        "The point may be a maximum or inflection; positive second derivative is required."
      ]
    ]
  },
  "27": {
    "title": "Standard states, activities and the STP distinction",
    "subtitle": "Prevents the most common notation and equilibrium errors.",
    "flow": [
      "choose standard state",
      "form dimensionless activity",
      "write chemical potential"
    ],
    "theory": [
      "A standard state is a reference state at the temperature of interest; it is not synonymous with 273.15 K or STP.",
      "Activities are dimensionless by construction, so logarithms in chemical-potential and Gibbs-energy equations are valid.",
      "For an ideal gas, activity is approximated by P/P°. For a pure solid or liquid in its standard state, activity is one.",
      "Different standard-state conventions may be used for solutes and solvents, but the convention must remain internally consistent."
    ],
    "formulas": [
      [
        "Ideal gas",
        "μ = μ° + RT ln(P/P°)",
        "P/P° is dimensionless."
      ],
      [
        "Real gas",
        "a = f/f°",
        "Fugacity replaces pressure."
      ],
      [
        "Ideal solute",
        "a ≈ c/c°",
        "Approximation for suitable dilute solutions."
      ],
      [
        "Pure condensed phase",
        "a = 1",
        "For the chosen pure standard state."
      ]
    ],
    "traps": [
      [
        "Standard state",
        "is not STP"
      ],
      [
        "ln P",
        "is invalid without a reference pressure"
      ],
      [
        "Pure solid",
        "activity one, amount still matters for phase presence"
      ],
      [
        "Concentration",
        "is not always activity"
      ]
    ],
    "problems": [
      [
        "Gas activity",
        "A gas has P = 0.25 bar and P° = 1 bar. Find a.",
        "a = 0.25."
      ],
      [
        "Solute activity",
        "c = 0.020 M and γ = 0.80 with c° = 1 M. Find a.",
        "a = 0.016."
      ],
      [
        "STP trap",
        "Does ΔG° at 500 K refer to 273.15 K?",
        "No. The standard state is defined at 500 K for that value."
      ],
      [
        "Pure solid",
        "Why is a pure solid omitted from Q?",
        "Its activity is one in the chosen standard state."
      ]
    ]
  },
  "28": {
    "title": "Entropy and chemical-potential proof of Raoult’s law",
    "subtitle": "Adds the missing conceptual bridge between mixing and vapour-pressure lowering.",
    "flow": [
      "pure solvent μ",
      "mixing lowers μ",
      "lower equilibrium vapour pressure"
    ],
    "theory": [
      "Ideal mixing increases configurational entropy and lowers the solvent chemical potential by RT ln xsolvent.",
      "Vapour–liquid equilibrium requires equal solvent chemical potentials in both phases.",
      "The vapour chemical potential must therefore fall, which for an ideal vapour requires a lower solvent partial pressure.",
      "The more volatile component is enriched in the vapour because yi is proportional to xiPi*."
    ],
    "formulas": [
      [
        "Ideal-solution μ",
        "μi = μi* + RT ln xi",
        "Raoult-law standard state."
      ],
      [
        "Raoult law",
        "Pi = xiPi*",
        "Ideal liquid solution."
      ],
      [
        "Total pressure",
        "P = ΣxiPi*",
        "For volatile ideal components."
      ],
      [
        "Vapour composition",
        "yi = xiPi*/P",
        "More volatile component is enriched."
      ]
    ],
    "traps": [
      [
        "Vapour-pressure lowering",
        "is a chemical-potential result"
      ],
      [
        "Ideal mixing",
        "ΔHmix = 0"
      ],
      [
        "Azeotrope",
        "not produced by an ideal solution"
      ],
      [
        "Nonvolatile solute",
        "contributes negligibly to vapour pressure"
      ]
    ],
    "problems": [
      [
        "Chemical-potential lowering",
        "At 298 K, find μA−μA* for xA = 0.80.",
        "RT ln0.80 = −0.553 kJ mol⁻¹."
      ],
      [
        "Raoult pressure",
        "P* = 120 mmHg and x = 0.75. Find P.",
        "90 mmHg."
      ],
      [
        "Binary total",
        "PA*=200, PB*=80 mmHg and xA=0.30. Find total pressure.",
        "60 + 56 = 116 mmHg."
      ],
      [
        "Vapour enrichment",
        "For the preceding mixture, find yA.",
        "60/116 = 0.517, greater than xA."
      ]
    ]
  },
  "29": {
    "title": "Q/K direction compass, logarithmic K ruler and genuine reaction coupling",
    "subtitle": "Integrates nonstandard direction, activities and coupled reactions.",
    "flow": [
      "evaluate Q",
      "compare with K",
      "predict direction"
    ],
    "theory": [
      "ΔrG° describes the standard-state reaction; ΔrG describes the current mixture and directly determines the present direction.",
      "Q below K gives forward drive, Q above K gives reverse drive and Q equal to K gives equilibrium.",
      "At 298 K, changing ΔrG° by about 5.708 kJ mol⁻¹ changes K by one power of ten.",
      "An uphill reaction can proceed only when physically coupled to a sufficiently downhill process through a shared mechanism, intermediate, circuit or mechanical linkage."
    ],
    "formulas": [
      [
        "Nonstandard Gibbs",
        "ΔrG = ΔrG° + RT ln Q",
        "Current activities determine Q."
      ],
      [
        "Direction form",
        "ΔrG = RT ln(Q/K)",
        "Immediate Q/K test."
      ],
      [
        "Equilibrium constant",
        "ΔrG° = −RT ln K",
        "Thermodynamic K is dimensionless."
      ],
      [
        "Coupled reactions",
        "ΔGoverall = ΣΔGi",
        "Only for a genuine combined process."
      ]
    ],
    "traps": [
      [
        "Positive ΔrG°",
        "can still give forward actual reaction"
      ],
      [
        "Q",
        "must be dimensionless"
      ],
      [
        "Paper addition",
        "is not physical coupling"
      ],
      [
        "Catalyst",
        "does not change K"
      ]
    ],
    "problems": [
      [
        "Q below K",
        "K = 50 and Q = 0.20. Direction?",
        "Forward because Q<K."
      ],
      [
        "Recover K",
        "At 298 K, ΔrG° = +17.1 kJ mol⁻¹. Estimate K.",
        "Approximately 10⁻³."
      ],
      [
        "Heterogeneous quotient",
        "Write Q for CaCO3(s) ⇌ CaO(s)+CO2(g).",
        "Q = PCO2/P°."
      ],
      [
        "Coupled sum",
        "An uphill step is +28 and the driver is −45 kJ mol⁻¹. Find total.",
        "−17 kJ mol⁻¹ if physically coupled 1:1."
      ],
      [
        "Electrochemical link",
        "A two-electron cell has E = 0.30 V. Find ΔrG.",
        "−2FE = −57.9 kJ mol⁻¹."
      ]
    ]
  },
  "30": {
    "title": "van ’t Hoff interpretation, integration limits and phase-equilibrium extension",
    "subtitle": "Adds approximation control and temperature-trend reasoning.",
    "flow": [
      "reaction enthalpy",
      "temperature change",
      "new equilibrium constant"
    ],
    "theory": [
      "The van ’t Hoff equation connects the temperature derivative of lnK to standard reaction enthalpy.",
      "Endothermic reactions generally have increasing K with temperature; exothermic reactions generally have decreasing K.",
      "The familiar integrated two-temperature form assumes ΔrH° is approximately constant over the interval.",
      "For wide temperature ranges, heat-capacity corrections are required; near phase changes, the standard-state phases must be tracked carefully."
    ],
    "formulas": [
      [
        "Differential van ’t Hoff",
        "d lnK/dT = ΔrH°/(RT²)",
        "Exact at each temperature with the local ΔrH°."
      ],
      [
        "Integrated form",
        "ln(K₂/K₁)=−ΔrH°/R(1/T₂−1/T₁)",
        "Constant-enthalpy approximation."
      ],
      [
        "Heat-capacity correction",
        "dΔrH°/dT = ΔrCp°",
        "Kirchhoff relation."
      ],
      [
        "Phase boundary",
        "dP/dT = ΔHtr/(TΔVtr)",
        "Clapeyron equation."
      ]
    ],
    "traps": [
      [
        "Le Châtelier",
        "is explained quantitatively by K(T)"
      ],
      [
        "Constant ΔH°",
        "may fail over wide intervals"
      ],
      [
        "K",
        "depends only on temperature for fixed standard states"
      ],
      [
        "Rates",
        "do not determine equilibrium K"
      ]
    ],
    "problems": [
      [
        "Endothermic trend",
        "What happens to K when T rises for ΔrH°>0?",
        "K increases."
      ],
      [
        "Exothermic trend",
        "What happens to K when T rises for ΔrH°<0?",
        "K decreases."
      ],
      [
        "Two-temperature calculation",
        "K1=4.0 at 300 K and ΔH°=20 kJ mol⁻¹. Estimate K2 at 350 K.",
        "ln(K2/4)=−20000/8.314(1/350−1/300)=1.145, so K2≈12.6."
      ],
      [
        "Approximation check",
        "Why can a van ’t Hoff plot curve?",
        "ΔrH° changes with temperature because ΔrCp° is nonzero."
      ],
      [
        "Phase slope",
        "What determines the sign of a solid–liquid coexistence slope?",
        "The sign of ΔVfus because T and ΔHfus are positive."
      ]
    ]
  }
};

function FlowGraphic({ entry, part }: { entry: Entry; part: number }) {
  const [left, center, right] = entry.flow;
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-4 md:p-6">
      <svg viewBox="0 0 1200 620" role="img" aria-label={`${entry.title} concept flow`} className="h-auto w-full">
        <defs>
          <linearGradient id={`integrated-bg-${part}`} x1="0" x2="1">
            <stop offset="0" stopColor="#172554" />
            <stop offset="1" stopColor="#020617" />
          </linearGradient>
          <filter id={`integrated-glow-${part}`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <marker id={`integrated-arrow-${part}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fbbf24" />
          </marker>
        </defs>
        <rect width="1200" height="620" rx="36" fill={`url(#integrated-bg-${part})`} />
        <text x="600" y="58" fill="#f8fafc" fontSize="29" fontWeight="900" textAnchor="middle">
          INTEGRATED ADVANCED CONCEPT MAP
        </text>
        <rect x="65" y="165" width="300" height="250" rx="34" fill="#0f172a" stroke="#22d3ee" strokeWidth="4" />
        <circle cx="600" cy="290" r="116" fill="#0f172a" stroke="#fbbf24" strokeWidth="5" />
        <rect x="835" y="165" width="300" height="250" rx="34" fill="#0f172a" stroke="#a78bfa" strokeWidth="4" />
        <text x="215" y="300" fill="#a5f3fc" fontSize="22" fontWeight="900" textAnchor="middle">{left}</text>
        <text x="600" y="300" fill="#fde68a" fontSize="21" fontWeight="900" textAnchor="middle">{center}</text>
        <text x="985" y="300" fill="#ddd6fe" fontSize="22" fontWeight="900" textAnchor="middle">{right}</text>
        <path d="M385 290 H475" stroke="#fbbf24" strokeWidth="5" markerEnd={`url(#integrated-arrow-${part})`} filter={`url(#integrated-glow-${part})`} />
        <path d="M725 290 H815" stroke="#fbbf24" strokeWidth="5" markerEnd={`url(#integrated-arrow-${part})`} filter={`url(#integrated-glow-${part})`} />
        <rect x="230" y="485" width="740" height="60" rx="24" fill="#0f172a" stroke="#34d399" strokeWidth="4" />
        <text x="600" y="522" fill="#a7f3d0" fontSize="20" fontWeight="900" textAnchor="middle">
          original integration • no duplicated source wording or figures
        </text>
      </svg>
    </div>
  );
}

export default function ThermodynamicsIntegratedEnrichment({ part }: { part: number }) {
  const entry = ENRICHMENT[part];
  if (!entry) return null;

  return (
    <section
      data-thermodynamics-integrated-enrichment={part}
      className="mx-auto max-w-7xl px-5 pb-12 md:px-8"
    >
      <div className="rounded-[2rem] border border-fuchsia-400/20 bg-gradient-to-br from-slate-950 via-slate-950 to-fuchsia-950/20 p-5 shadow-2xl shadow-black/25 md:p-8">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-fuchsia-400/25 bg-fuchsia-400/[0.08] px-3 py-1 text-xs font-black tracking-wide text-fuchsia-200">
            INTEGRATED PREMIUM ENRICHMENT
          </span>
          <span className="rounded-full border border-cyan-400/25 bg-cyan-400/[0.08] px-3 py-1 text-xs font-black tracking-wide text-cyan-200">
            PART {String(part).padStart(2, "0")}
          </span>
          <span className="rounded-full border border-emerald-400/25 bg-emerald-400/[0.08] px-3 py-1 text-xs font-black tracking-wide text-emerald-200">
            NONDUPLICATE
          </span>
        </div>

        <h2 className="mt-5 text-3xl font-black tracking-tight text-white md:text-4xl">{entry.title}</h2>
        <p className="mt-3 max-w-4xl leading-7 text-slate-300">{entry.subtitle}</p>

        <div className="mt-7">
          <FlowGraphic entry={entry} part={part} />
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {entry.theory.map((paragraph, index) => (
            <article key={paragraph} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                Concept {index + 1}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-200">{paragraph}</p>
            </article>
          ))}
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {entry.formulas.map(([label, value, note]) => (
            <article key={label} className="overflow-x-auto rounded-2xl border border-cyan-300/20 bg-black/25 p-4">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">{label}</p>
              <p className="mt-3 whitespace-nowrap font-mono text-base font-black text-white">{value}</p>
              <p className="mt-3 text-xs leading-5 text-slate-300">{note}</p>
            </article>
          ))}
        </div>

        <div className="mt-7">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-300">Trap detector</p>
          <div className="mt-3 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {entry.traps.map(([term, warning]) => (
              <div key={term} className="rounded-2xl border border-rose-400/20 bg-rose-400/[0.06] p-4">
                <p className="font-black text-white">{term}</p>
                <p className="mt-1 text-sm leading-6 text-slate-300">{warning}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">Original exam applications</p>
          <div className="mt-3 grid gap-4 lg:grid-cols-2">
            {entry.problems.map(([title, question, solution], index) => (
              <details key={title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <summary className="cursor-pointer list-none font-black text-white">
                  <span className="mr-2 text-amber-300">◆</span>
                  {index + 1}. {title}
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-200">{question}</p>
                <div className="mt-4 rounded-xl border border-emerald-300/20 bg-emerald-300/[0.06] p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-300">Solution</p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">{solution}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
