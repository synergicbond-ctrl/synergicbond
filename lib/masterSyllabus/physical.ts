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
