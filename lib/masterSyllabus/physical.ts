export const physical = [
  {
    id: "atomic-structure",
    title: "Atomic Structure",
    category: "physical",
    difficulty: 4,
    estimatedHours: 6,
    exams: ["NEET", "JEE MAIN", "JEE ADVANCED"],
    pyqTags: ["Bohr Model", "De Broglie Wavelength", "Heisenberg Uncertainty", "Quantum Numbers"],
    concepts: [
      {
        id: "subatomic-particles",
        title: "Subatomic Particles & Discovery",
        description: "Fundamental particles (electrons, protons, neutrons), their charge-to-mass ratios, and Millikan's oil drop experiment.",
        animations: [
          "Electron charge quantification via e/m ratio.",
          "Quantized nature of electric charge verified."
        ]
      },
      {
        id: "bohr-model",
        title: "Bohr's Model for Hydrogen Atom",
        description: "Postulates of Bohr model, stationary orbits, radius, velocity, and energy derivations for hydrogen-like species.",
        animations: [
          "Electron jumping between quantized orbits emitting/absorbing photons.",
          "Stationary non-radiating orbit visualization."
        ]
      },
      {
        id: "quantum-mechanical",
        title: "Quantum Mechanical Model",
        description: "Dual nature of matter (de Broglie), Heisenberg's uncertainty principle, Schrödinger wave equation, and quantum numbers.",
        animations: [
          "Wave-particle duality interference pattern.",
          "Probability density clouds (orbitals) mapping."
        ]
      }
    ]
  },

  {
    id: "mole-concept",
    title: "Some Basic Concepts of Chemistry (Mole Concept)",
    category: "physical",
    difficulty: 3,
    estimatedHours: 8,
    exams: ["NEET", "JEE MAIN", "JEE ADVANCED"],
    pyqTags: ["Mole calculation", "Limiting reagent", "Stoichiometry", "Empirical formula", "Molarity"],
    concepts: [
      {
        id: "laws-chemical-combination",
        title: "Laws of Chemical Combination",
        description: "Law of conservation of mass, law of definite proportions, law of multiple proportions, Gay Lussac's law of gaseous volumes, Avogadro's law.",
        animations: ["Mass balance in a chemical equation."]
      },
      {
        id: "mole-avogadro",
        title: "Mole Concept and Avogadro's Number",
        description: "Definition of mole, Avogadro's number (6.022 × 10²³), molar mass, relation between moles, mass, volume, and number of particles.",
        animations: ["One mole of gas occupying 22.4 L at STP."]
      },
      {
        id: "stoichiometry",
        title: "Stoichiometry and Limiting Reagent",
        description: "Balancing chemical equations, mole-to-mole ratio calculations, identifying the limiting reagent, calculating theoretical and percentage yield.",
        animations: ["Limiting reagent consuming first in a reaction."]
      },
      {
        id: "concentration-terms",
        title: "Concentration Terms",
        description: "Molarity (M), molality (m), mole fraction, normality, ppm. Preparation of solutions and dilution calculations.",
        animations: ["Adding solute to solvent: molarity vs molality difference."]
      }
    ]
  },

  {
    id: "chemical-equilibrium",
    title: "Equilibrium",
    category: "physical",
    difficulty: 4,
    estimatedHours: 12,
    exams: ["NEET", "JEE MAIN", "JEE ADVANCED"],
    pyqTags: ["Le Chatelier's principle", "Kp vs Kc", "Ionic equilibrium", "pH calculation", "Buffer", "Solubility product"],
    concepts: [
      {
        id: "equilibrium-law",
        title: "Law of Mass Action and Equilibrium Constant",
        description: "Law of mass action, equilibrium constant expressions Kc and Kp, relation between Kp and Kc (Kp = Kc(RT)^Δn).",
        animations: ["Forward and reverse reaction rates equalizing at equilibrium."]
      },
      {
        id: "le-chatelier",
        title: "Le Chatelier's Principle",
        description: "Effect of changes in concentration, pressure, temperature, and inert gas addition on equilibrium position.",
        animations: ["Equilibrium shifting on adding/removing reactant or product."]
      },
      {
        id: "ionic-equilibrium",
        title: "Ionic Equilibrium — Acids, Bases, and Salts",
        description: "Arrhenius, Brønsted-Lowry, and Lewis theories; ionization of weak acids and bases; Ka, Kb, Kw; degree of ionization; pH scale.",
        animations: ["Partial dissociation of weak acid in water."]
      },
      {
        id: "buffer-ksp",
        title: "Buffer Solutions and Solubility Product",
        description: "Henderson-Hasselbalch equation, buffer capacity, Ksp, common ion effect, precipitation conditions.",
        animations: ["Buffer resisting pH change on addition of strong acid."]
      }
    ]
  },

  {
    id: "thermodynamics",
    title: "Thermodynamics",
    category: "physical",
    difficulty: 4,
    estimatedHours: 12,
    exams: ["NEET", "JEE MAIN", "JEE ADVANCED"],
    pyqTags: ["First law", "Enthalpy", "Hess's law", "Gibbs free energy", "Entropy", "Spontaneity"],
    concepts: [
      {
        id: "first-law",
        title: "First Law of Thermodynamics",
        description: "Internal energy, work done by/on system, heat, ΔU = q + w. Types of processes: isothermal, adiabatic, isobaric, isochoric.",
        animations: ["Energy conservation during gas expansion in a piston."]
      },
      {
        id: "enthalpy-hess",
        title: "Enthalpy and Hess's Law",
        description: "Enthalpy (H = U + PV), standard enthalpy of formation, combustion, neutralization. Hess's law and its applications.",
        animations: ["Hess's law: two pathways to same product giving same ΔH."]
      },
      {
        id: "entropy-gibbs",
        title: "Entropy and Gibbs Free Energy",
        description: "Entropy as a measure of randomness, second law of thermodynamics, Gibbs equation (ΔG = ΔH − TΔS), spontaneity criteria.",
        animations: ["Spreading of gas molecules illustrating entropy increase."]
      }
    ]
  },

  {
    id: "electrochemistry",
    title: "Electrochemistry",
    category: "physical",
    difficulty: 4,
    estimatedHours: 10,
    exams: ["NEET", "JEE MAIN", "JEE ADVANCED"],
    pyqTags: ["Nernst equation", "Cell potential", "Electrolysis", "Faraday's laws", "Kohlrausch's law", "Corrosion"],
    concepts: [
      {
        id: "galvanic-cells",
        title: "Galvanic Cells and Standard Electrode Potential",
        description: "Construction of electrochemical cells, EMF, standard hydrogen electrode, standard electrode potentials, cell notation.",
        animations: ["Electron flow in a Daniell cell via external circuit."]
      },
      {
        id: "nernst-equation",
        title: "Nernst Equation and Concentration Cells",
        description: "Nernst equation derivation (E = E° − (RT/nF)ln Q), cell potential at non-standard conditions, concentration cells, equilibrium constant from cell potential.",
        animations: ["Cell potential changing as ion concentration changes."]
      },
      {
        id: "electrolysis",
        title: "Electrolysis and Faraday's Laws",
        description: "Electrolytic cells, electrolysis of molten NaCl and aqueous NaCl, Faraday's first and second laws, electroplating.",
        animations: ["Ions migrating to electrodes during electrolysis."]
      },
      {
        id: "conductance",
        title: "Conductance and Kohlrausch's Law",
        description: "Specific conductance, molar conductance, variation with concentration, Kohlrausch's law of independent migration of ions.",
        animations: ["Molar conductance increasing with dilution for weak electrolyte."]
      }
    ]
  },

  {
    id: "chemical-kinetics",
    title: "Chemical Kinetics",
    category: "physical",
    difficulty: 3,
    estimatedHours: 8,
    exams: ["NEET", "JEE MAIN", "JEE ADVANCED"],
    pyqTags: ["Rate law", "Order of reaction", "Half life", "Arrhenius equation", "Activation energy", "Collision theory"],
    concepts: [
      {
        id: "rate-law",
        title: "Rate of Reaction and Rate Law",
        description: "Average and instantaneous rate, rate law expression, rate constant (k), order of reaction (experimentally determined), molecularity.",
        animations: ["Concentration vs time graph for first-order decay."]
      },
      {
        id: "integrated-rate-laws",
        title: "Integrated Rate Laws and Half-Life",
        description: "Zero, first, and second order integrated rate equations. Half-life derivations: t₁/₂ = 0.693/k for first order.",
        animations: ["Half-life showing constant decay interval for first-order reaction."]
      },
      {
        id: "arrhenius-equation",
        title: "Arrhenius Equation and Activation Energy",
        description: "Arrhenius equation (k = Ae^(−Ea/RT)), effect of temperature on rate constant, activation energy, pre-exponential factor.",
        animations: ["Energy profile diagram with activation energy barrier."]
      }
    ]
  },

  {
    id: "solutions",
    title: "Solutions",
    category: "physical",
    difficulty: 3,
    estimatedHours: 8,
    exams: ["NEET", "JEE MAIN", "JEE ADVANCED"],
    pyqTags: ["Raoult's law", "Colligative properties", "Osmosis", "Elevation in boiling point", "Depression in freezing point", "Van't Hoff factor"],
    concepts: [
      {
        id: "types-solutions",
        title: "Types of Solutions and Concentration",
        description: "Binary solutions, types by phase, molarity, molality, mole fraction, Henry's law for gas solubility.",
        animations: ["Gas dissolving in liquid following Henry's law."]
      },
      {
        id: "raoults-law",
        title: "Raoult's Law and Vapour Pressure",
        description: "Raoult's law for volatile and non-volatile solutes, ideal and non-ideal solutions, positive and negative deviations.",
        animations: ["Vapour pressure lowering by non-volatile solute."]
      },
      {
        id: "colligative-properties",
        title: "Colligative Properties",
        description: "Relative lowering of vapour pressure, elevation in boiling point (ΔTb = Kbm), depression in freezing point (ΔTf = Kfm), osmotic pressure (π = iCRT), van't Hoff factor.",
        animations: ["Osmosis through semi-permeable membrane."]
      }
    ]
  }
];

export const masterFormulas: Record<string, any[]> = {
  "atomic-structure": [
    {
      title: "Bohr Radius",
      expression: "r_n = 0.529 \\times \\frac{n^2}{Z} \\text{ Å}",
      meaning: "Distance of electron from nucleus in nth orbit.",
      units: "Ångström (Å)",
      shortcut: "r_n \\propto n^2/Z. For H, r_1 = 0.529 Å.",
      commonMistakes: "Forgetting to divide by Z for He+, Li2+ etc.",
      pyqContext: "Ratio of radii in different orbits."
    },
    {
      title: "Energy of Electron",
      expression: "E_n = -13.6 \\times \\frac{Z^2}{n^2} \\text{ eV}",
      meaning: "Total energy of electron in nth orbit.",
      units: "eV",
      shortcut: "E_n \\propto -Z^2/n^2. PE = 2E_n, KE = -E_n.",
      commonMistakes: "Missing the negative sign.",
      pyqContext: "Ionization energy and spectral line calculations."
    },
    {
      title: "de Broglie Wavelength",
      expression: "\\lambda = \\frac{h}{mv} = \\frac{h}{\\sqrt{2mK}}",
      meaning: "Matter wave wavelength of moving particle.",
      units: "m",
      shortcut: "For electron: \\lambda = 12.27/\\sqrt{V} Å.",
      commonMistakes: "Using photon mass instead of particle mass.",
      pyqContext: "Comparing wavelengths of proton vs electron."
    },
    {
      title: "Rydberg Equation",
      expression: "\\bar{\\nu} = R_H Z^2 \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)",
      meaning: "Wavenumber of spectral line.",
      units: "cm⁻¹",
      shortcut: "R_H = 1.097 \\times 10^7 \\text{ m}^{-1}.",
      commonMistakes: "Forgetting to square n₁ and n₂.",
      pyqContext: "Identifying spectral series (Lyman, Balmer, Paschen)."
    }
  ],

  "mole-concept": [
    {
      title: "Mole-Mass-Number Relationship",
      expression: "n = \\frac{m}{M} = \\frac{N}{N_A}",
      meaning: "Moles = mass/molar mass = particles/Avogadro's number.",
      units: "mol",
      shortcut: "At STP: 1 mol gas = 22.4 L.",
      commonMistakes: "Using 22.4 L at non-STP conditions.",
      pyqContext: "Mole calculation problems."
    },
    {
      title: "Molarity",
      expression: "M = \\frac{n_{\\text{solute}}}{V_{\\text{solution (L)}}}",
      meaning: "Moles of solute per litre of solution.",
      units: "mol/L",
      shortcut: "Dilution: M₁V₁ = M₂V₂.",
      commonMistakes: "Dividing by volume of solvent instead of solution.",
      pyqContext: "Preparation and dilution of standard solutions."
    }
  ],

  "chemical-equilibrium": [
    {
      title: "Equilibrium Constant",
      expression: "K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}",
      meaning: "Ratio of product to reactant concentrations at equilibrium.",
      units: "Dimensionless (concentration ratio)",
      shortcut: "K_p = K_c(RT)^{\\Delta n} where \\Delta n = moles of gaseous products − reactants.",
      commonMistakes: "Including solids and pure liquids in the expression.",
      pyqContext: "Predicting direction of reaction from Q vs K."
    },
    {
      title: "pH Scale",
      expression: "\\text{pH} = -\\log[H^+]; \\quad \\text{pOH} = -\\log[OH^-]; \\quad \\text{pH + pOH} = 14",
      meaning: "Logarithmic measure of hydrogen ion concentration.",
      units: "Dimensionless",
      shortcut: "Strong acid: pH = -log(C). Weak acid: pH = ½(pKa - log C).",
      commonMistakes: "Forgetting that pH + pOH = 14 only at 25°C.",
      pyqContext: "pH calculation of buffer, weak acid, salt hydrolysis."
    },
    {
      title: "Henderson-Hasselbalch Equation",
      expression: "\\text{pH} = \\text{p}K_a + \\log\\frac{[\\text{Salt}]}{[\\text{Acid}]}",
      meaning: "pH of a buffer solution.",
      units: "Dimensionless",
      shortcut: "At half-equivalence point: pH = pKa.",
      commonMistakes: "Inverting salt/acid ratio.",
      pyqContext: "Buffer pH problems, titration curves."
    }
  ],

  "thermodynamics": [
    {
      title: "First Law of Thermodynamics",
      expression: "\\Delta U = q + w; \\quad w = -P_{\\text{ext}}\\Delta V",
      meaning: "Energy is conserved; internal energy = heat + work.",
      units: "J or kJ",
      shortcut: "At constant V: ΔU = qᵥ. At constant P: ΔH = qₚ.",
      commonMistakes: "Sign convention: work done ON system is positive.",
      pyqContext: "Calculating work in isothermal/adiabatic processes."
    },
    {
      title: "Gibbs Free Energy",
      expression: "\\Delta G = \\Delta H - T\\Delta S; \\quad \\Delta G^\\circ = -RT\\ln K",
      meaning: "Determines spontaneity of a process.",
      units: "kJ/mol",
      shortcut: "ΔG < 0: spontaneous; ΔG > 0: non-spontaneous; ΔG = 0: equilibrium.",
      commonMistakes: "Forgetting to convert T to Kelvin.",
      pyqContext: "Predicting spontaneity under different T conditions."
    }
  ],

  "electrochemistry": [
    {
      title: "Nernst Equation",
      expression: "E = E^\\circ - \\frac{RT}{nF}\\ln Q = E^\\circ - \\frac{0.0592}{n}\\log Q \\text{ at 298 K}",
      meaning: "Cell potential at non-standard conditions.",
      units: "Volts (V)",
      shortcut: "At equilibrium: E = 0 and K = 10^(nE°/0.0592).",
      commonMistakes: "Using ln instead of log with 0.0592 factor.",
      pyqContext: "Concentration cell EMF, equilibrium constant from cell potential."
    },
    {
      title: "Faraday's Laws",
      expression: "m = \\frac{Q \\cdot M}{n \\cdot F} = \\frac{I \\cdot t \\cdot M}{n \\cdot F}",
      meaning: "Mass deposited/dissolved in electrolysis.",
      units: "grams",
      shortcut: "F = 96500 C/mol. 1 Faraday deposits 1 equivalent.",
      commonMistakes: "Using molar mass instead of equivalent mass for n-factor.",
      pyqContext: "Electrolysis numericals, electroplating."
    }
  ],

  "chemical-kinetics": [
    {
      title: "First Order Rate Law",
      expression: "k = \\frac{2.303}{t}\\log\\frac{[A]_0}{[A]_t}; \\quad t_{1/2} = \\frac{0.693}{k}",
      meaning: "Rate constant and half-life for first order reaction.",
      units: "s⁻¹",
      shortcut: "t₁/₂ is independent of initial concentration for first order.",
      commonMistakes: "Using natural log instead of log₁₀ with 2.303.",
      pyqContext: "Radioactive decay, hydrolysis, decomposition reactions."
    },
    {
      title: "Arrhenius Equation",
      expression: "k = Ae^{-E_a/RT}; \\quad \\ln\\frac{k_2}{k_1} = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)",
      meaning: "Temperature dependence of rate constant.",
      units: "k in s⁻¹, Ea in J/mol",
      shortcut: "10°C rise roughly doubles rate for Ea ≈ 50 kJ/mol.",
      commonMistakes: "Not converting Ea to J when R = 8.314 J/mol·K.",
      pyqContext: "Activation energy calculation from rate constants at two temperatures."
    }
  ],

  "solutions": [
    {
      title: "Boiling Point Elevation",
      expression: "\\Delta T_b = K_b \\cdot m \\cdot i",
      meaning: "Rise in boiling point due to dissolved solute.",
      units: "K or °C",
      shortcut: "Kb(water) = 0.52 K·kg/mol.",
      commonMistakes: "Forgetting to multiply by van't Hoff factor i for electrolytes.",
      pyqContext: "Molar mass determination by elevation."
    },
    {
      title: "Freezing Point Depression",
      expression: "\\Delta T_f = K_f \\cdot m \\cdot i",
      meaning: "Depression in freezing point due to dissolved solute.",
      units: "K or °C",
      shortcut: "Kf(water) = 1.86 K·kg/mol.",
      commonMistakes: "Using molarity instead of molality.",
      pyqContext: "Cryoscopic method for molar mass."
    },
    {
      title: "Osmotic Pressure",
      expression: "\\pi = iCRT = i\\frac{n}{V}RT",
      meaning: "Pressure needed to stop osmosis.",
      units: "Pa or atm",
      shortcut: "Isotonic solutions have equal osmotic pressure.",
      commonMistakes: "Using wrong value of R (use 0.0821 L·atm/mol·K for atm).",
      pyqContext: "Comparing osmotic pressures, isotonic solutions."
    }
  ]
};

export const masterReactions: any[] = [];

export const highYieldNotes: any[] = [
  {
    chapterId: "atomic-structure",
    title: "Bohr Model Limitations",
    content: "Applies only to single-electron species (H, He+, Li2+). Fails for multi-electron atoms, Zeeman/Stark effects, and violates Heisenberg's principle."
  },
  {
    chapterId: "atomic-structure",
    title: "Quantum Number Rules",
    content: "n = 1,2,3... | l = 0 to (n−1) | m = −l to +l | s = ±½. Total orbitals in shell = n². Max electrons = 2n²."
  },
  {
    chapterId: "mole-concept",
    title: "STP vs NTP",
    content: "STP (IUPAC): 0°C, 1 bar → 1 mol gas = 22.7 L. Old STP: 0°C, 1 atm → 22.4 L. NTP: 25°C, 1 atm → 24.5 L. JEE usually uses 22.4 L unless stated otherwise."
  },
  {
    chapterId: "chemical-equilibrium",
    title: "Effect of Temperature on K",
    content: "Exothermic reaction: increasing T decreases K. Endothermic reaction: increasing T increases K. This follows van't Hoff equation."
  },
  {
    chapterId: "thermodynamics",
    title: "Spontaneity Summary",
    content: "ΔH−, ΔS+: always spontaneous. ΔH+, ΔS−: never spontaneous. ΔH−, ΔS−: spontaneous at low T. ΔH+, ΔS+: spontaneous at high T."
  },
  {
    chapterId: "electrochemistry",
    title: "Cell Convention",
    content: "Cell notation: anode (oxidation) | solution || solution | cathode (reduction). E°cell = E°cathode − E°anode. Positive E°cell → spontaneous."
  },
  {
    chapterId: "chemical-kinetics",
    title: "Order vs Molecularity",
    content: "Order: experimentally determined, can be fractional/zero/negative. Molecularity: theoretical, equals sum of stoichiometric coefficients in elementary step, always positive integer."
  },
  {
    chapterId: "solutions",
    title: "Van't Hoff Factor",
    content: "i = 1 for non-electrolytes. i > 1 for electrolytes (dissociation). i < 1 for association. i = 1 + (n−1)α for degree of dissociation α into n ions."
  }
];
