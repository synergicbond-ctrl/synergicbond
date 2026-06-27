// lib/masterSyllabus/concepts.ts
import { Concept } from "./types";

export const masterConcepts: Record<string, Concept[]> = {
  "mole-concept": [
    {
      id: "c-mole-quantification",
      title: "Mole Concept and Equivalents",
      description: "Counting entities (atoms, molecules, ions) using Avogadro's number (6.022 x 10^23), molar mass determination, and calculating equivalents for redox/acid-base titrations.",
      keywords: ["mole concept", "avogadro number", "molar mass", "equivalents", "n-factor", "gram atomic mass"]
    },
    {
      id: "c-stoichiometry-limit",
      title: "Stoichiometry and Limiting Reagents",
      description: "Quantitative relationships between reactants and products in balanced chemical equations. Identification of limiting reagents to determine theoretical and percentage yields.",
      keywords: ["stoichiometry", "limiting reagent", "excess reagent", "theoretical yield", "percentage yield", "stoichiometric coefficient"]
    },
    {
      id: "c-concentration-terms",
      title: "Solution Concentration Parameters",
      description: "Mathematical expressions of concentration including molarity, molality, mole fraction, mass percentage, parts per million (ppm), and normality. Temperature-dependent vs. temperature-independent terms.",
      keywords: ["molarity", "molality", "mole fraction", "normality", "mass percentage", "ppm", "solution concentration"]
    }
  ],
  "atomic-structure": [
    {
      id: "c-bohr-model-hydro",
      title: "Bohr's Model for Hydrogen-Like Species",
      description: "Postulates of Bohr's model, quantization of angular momentum, derivation of radii, velocities, and total energy of orbits. Hydrogen emission spectrum series (Lyman, Balmer, Paschen, Brackett, Pfund).",
      keywords: ["bohr model", "quantized energy", "hydrogen spectrum", "orbit radius", "rydberg equation", "emission lines"]
    },
    {
      id: "c-wave-duality",
      title: "Wave-Particle Duality and Uncertainty Principle",
      description: "De Broglie wavelength relation for microscopic particles, Heisenberg's uncertainty principle, and photoelectric effect observations.",
      keywords: ["de broglie wavelength", "heisenberg uncertainty principle", "photoelectric effect", "wave particle duality", "photon momentum"]
    },
    {
      id: "c-quantum-mech-orbitals",
      title: "Quantum Mechanical Model and Atomic Orbitals",
      description: "Schrödinger wave equation (qualitative treatment), significance of psi and psi-squared, quantum numbers (principal, azimuthal, magnetic, spin), Pauli's exclusion principle, Hund's rule, Aufbau principle, and radial/angular nodes.",
      keywords: ["quantum numbers", "schrodinger wave equation", "atomic orbitals", "nodes", "aufbau principle", "pauli exclusion", "hunds rule"]
    }
  ],
  "gaseous-state": [
    {
      id: "c-ideal-gas-laws",
      title: "Gas Laws and Kinetic Theory of Gases",
      description: "Boyle's Law, Charles's Law, Gay-Lussac's Law, Avogadro's Law, and the Combined Ideal Gas Equation. Kinetic theory postulates, RMS, average, and most probable velocities.",
      keywords: ["ideal gas equation", "boyles law", "charles law", "kinetic theory of gases", "rms velocity", "daltons law"]
    },
    {
      id: "c-real-gases-vanderwaals",
      title: "Real Gases and Deviation from Ideality",
      description: "Compressibility factor Z, deviations at high pressure and low temperatures. van der Waals equation of state, critical constants, and liquefaction phenomena.",
      keywords: ["real gas", "compressibility factor", "van der waals equation", "critical temperature", "compressibility", "gas liquefaction"]
    }
  ],
  "thermodynamics": [
    {
      id: "c-first-law-thermo",
      title: "First Law of Thermodynamics",
      description: "Concepts of system, surroundings, work, heat, internal energy, and enthalpy. Reversible and irreversible expansion work, heat capacities (Cp, Cv), and Joule-Thomson effect.",
      keywords: ["first law of thermodynamics", "internal energy", "heat", "work", "enthalpy", "reversible expansion", "heat capacity"]
    },
    {
      id: "c-thermochemistry",
      title: "Thermochemistry",
      description: "Enthalpy changes during phase transitions, combustion, neutralization, and formation. Hess's Law of Constant Heat Summation, Kirchhoff's equations, and bond enthalpies.",
      keywords: ["thermochemistry", "enthalpy of formation", "bond enthalpy", "hess law", "enthalpy of combustion", "lattice enthalpy"]
    },
    {
      id: "c-second-third-law",
      title: "Spontaneity, Entropy, and Free Energy",
      description: "Second Law of Thermodynamics, concept of entropy as a state function. Gibbs Free Energy (G) and criteria for chemical reaction spontaneity and equilibrium conditions.",
      keywords: ["entropy", "gibbs free energy", "spontaneous process", "second law of thermodynamics", "third law of thermodynamics", "standard free energy"]
    }
  ],
  "chemical-equilibrium": [
    {
      id: "c-law-mass-action",
      title: "Law of Mass Action and Equilibrium Constants",
      description: "Dynamic nature of chemical equilibria, Law of Mass Action, equilibrium constants Kp and Kc, relationship between thermodynamic equilibrium constant and standard free energy.",
      keywords: ["law of mass action", "equilibrium constant", "kp", "kc", "reaction quotient", "homogeneous equilibrium"]
    },
    {
      id: "c-le-chatelier",
      title: "Le Chatelier's Principle",
      description: "Qualitative prediction of stress effects (concentration, pressure, temperature, addition of inert gas) on dynamic equilibrium systems.",
      keywords: ["le chatelier principle", "stress on equilibrium", "temperature dependence", "pressure effect", "equilibrium shift"]
    }
  ],
  "ionic-equilibrium": [
    {
      id: "c-acid-base-theories",
      title: "Acids, Bases, and the pH Scale",
      description: "Arrhenius, Brønsted-Lowry, and Lewis concepts of acids and bases. Ionization of water, dissociation constants (Ka, Kb, Kw), pKa, pKb, and pH calculations of mixtures.",
      keywords: ["arrhenius acid", "bronsted lowry", "lewis acid", "autoionization of water", "ph scale", "pka", "pkb"]
    },
    {
      id: "c-buffer-hydrolysis",
      title: "Salt Hydrolysis and Buffer Solutions",
      description: "Hydrolysis constants of salts, pH calculations of salt solutions. Buffer action, buffer capacity, and derivation of Henderson-Hasselbalch equation.",
      keywords: ["salt hydrolysis", "buffer solution", "henderson hasselbalch equation", "acidic buffer", "basic buffer", "buffer capacity"]
    },
    {
      id: "c-solubility-product",
      title: "Solubility Equilibria and Ksp",
      description: "Solubility product constant (Ksp), ionic product, common ion effect, conditions for precipitation, and selective precipitation analysis.",
      keywords: ["solubility product", "ksp", "common ion effect", "precipitation condition", "solubility", "sparingly soluble salts"]
    }
  ],
  "goc": [
    {
      id: "c-electronic-displacements",
      title: "Electronic Effects and Intermediates",
      description: "Inductive effect, resonance (mesomeric effect), hyperconjugation, and electromeric effects. Generation, geometry, and relative stability of carbocations, carbanions, and free radicals.",
      keywords: ["inductive effect", "resonance", "mesomeric effect", "hyperconjugation", "carbocation stability", "carbanion", "free radical"]
    },
    {
      id: "c-acidity-basicity-trends",
      title: "Acidity and Basicity Evaluation",
      description: "Systematic comparison of acidic and basic strengths of organic functional groups based on electronic effects, hybridization, solvent effects, and steric hindrance.",
      keywords: ["organic acidity", "organic basicity", "pka", "amine basicity", "steric inhibition of resonance", "ortho effect"]
    }
  ],
  "hydrocarbons": [
    {
      id: "c-alkanes-prep-props",
      title: "Alkanes Synthesis and Reactions",
      description: "Methods of preparation via Wurtz reaction, Kolbe's electrolysis, and catalytic hydrogenation. Free radical substitution reactions, halogenation kinetics, and conformational analysis of ethane/butane.",
      keywords: ["wurtz reaction", "kolbe electrolysis", "free radical substitution", "halogenation", "conformation", "newman projection"]
    },
    {
      id: "c-alkenes-add-mech",
      title: "Alkenes Preparation and Electrophilic Additions",
      description: "Preparation via dehydrohalogenation and dehydration. Electrophilic addition reactions across double bonds, Markovnikov/Anti-Markovnikov additions, ozonolysis, and oxymercuration-demercuration.",
      keywords: ["markovnikov rule", "ozonolysis", "hydroboration oxidation", "electrophilic addition", "dehydration of alcohol", "saytzeff rule"]
    },
    {
      id: "c-alkynes-acidity",
      title: "Alkynes Chemistry and Acidity",
      description: "Acidity of terminal alkynes, formation of metal acetylides. Addition of halogens, water, and hydrohalogenation mechanisms. Birch reduction and metal-catalyzed reductions.",
      keywords: ["terminal alkyne", "metal acetylide", "hydration of alkyne", "birch reduction", "lindlar catalyst"]
    },
    {
      id: "c-aromaticity",
      title: "Aromaticity and Electrophilic Substitution",
      description: "Hückel's Rule of Aromaticity (4n + 2 pi electrons). Electrophilic aromatic substitution mechanisms (nitration, halogenation, sulfonation, Friedel-Crafts alkylation and acylation) and directing group effects.",
      keywords: ["huckel rule", "aromaticity", "electrophilic aromatic substitution", "friedel crafts", "activating groups", "deactivating groups"]
    }
  ],
  "periodic-table": [
    {
      id: "c-periodic-trends",
      title: "Periodic Trends in Elemental Properties",
      description: "Modern periodic law, long form of periodic table. Periodic trends in atomic radius, ionic radius, ionization enthalpy, electron gain enthalpy, and electronegativity scales (Pauling, Mulliken).",
      keywords: ["periodic table", "atomic radius", "ionization enthalpy", "electron gain enthalpy", "electronegativity", "pauling scale"]
    }
  ],
  "chemical-bonding": [
    {
      id: "c-lewis-vespr",
      title: "Lewis Structures and VSEPR Theory",
      description: "Octet rule, formal charge analysis, VSEPR model, geometries of polyatomic molecules, lone pair-bond pair repulsions, dipole moment calculations, and Bent's rule.",
      keywords: ["lewis structure", "formal charge", "vespr theory", "molecular geometry", "lone pair", "dipole moment", "bents rule"]
    },
    {
      id: "c-vbt-hybridization",
      title: "Valence Bond Theory and Hybridization",
      description: "Orbital overlap concept, sigma and pi bond distinctions, hybridization schemes (sp, sp2, sp3, sp3d, sp3d2, sp3d3), and structures of complex coordination/covalent molecules.",
      keywords: ["valence bond theory", "sigma bond", "pi bond", "hybridization", "sp3d", "sp3d2", "orbital overlap"]
    },
    {
      id: "c-mot",
      title: "Molecular Orbital Theory (MOT)",
      description: "Linear combination of atomic orbitals (LCAO), bonding and antibonding molecular orbitals. Energy level diagrams for homonuclear/heteronuclear diatomics, bond order calculation, and magnetic property interpretation.",
      keywords: ["molecular orbital theory", "lcao", "bonding orbital", "antibonding orbital", "bond order", "paramagnetic", "diamagnetic"]
    },
    {
      id: "c-hydrogen-bonding",
      title: "Hydrogen Bonding Interactions",
      description: "Intermolecular and intramolecular hydrogen bonding, influence on physical properties such as melting/boiling points, viscosity, and solubility.",
      keywords: ["hydrogen bond", "intermolecular forces", "intramolecular h bonding", "anomalous boiling point"]
    }
  ],
  "coordination-compounds": [
    {
      id: "c-werner-iupac",
      title: "Coordination Chemistry Foundations and Nomenclature",
      description: "Werner's coordination theory, definitions of ligands, coordination number, denticity, chelate effect, and IUPAC nomenclature of coordination entities.",
      keywords: ["coordination compound", "werners theory", "ligand", "coordination number", "denticity", "iupac nomenclature", "chelate"]
    },
    {
      id: "c-isomerism-coordination",
      title: "Isomerism in Coordination Complexes",
      description: "Structural isomerism (ionization, linkage, coordination, hydrate) and stereoisomerism (geometrical and optical isomerism in square planar and octahedral complexes).",
      keywords: ["structural isomerism", "stereoisomerism", "geometrical isomerism", "optical isomerism", "fac mer isomerism"]
    },
    {
      id: "c-bonding-cft",
      title: "Bonding Theories and Crystal Field Theory",
      description: "Valence Bond Theory limitations. Crystal Field Theory (CFT) in octahedral, tetrahedral, and square planar complexes. Crystal field splitting energy (Delta_o), spectrochemical series, pairing energy, and magnetic moment calculations.",
      keywords: ["valence bond theory", "crystal field theory", "cft", "crystal field splitting", "delta o", "spectrochemical series", "magnetic moment"]
    },
    {
      id: "c-organometallics-synergic",
      title: "Organometallic Compounds and Synergic Bonding",
      description: "Metal carbonyls structure and bonding, pi-acid ligand characteristics, and synergic back-bonding interactions affecting C-O stretch frequencies.",
      keywords: ["organometallic", "metal carbonyls", "synergic bonding", "back bonding", "pi acid ligand"]
    }
  ]
};