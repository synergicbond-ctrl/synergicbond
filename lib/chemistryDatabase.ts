export type ChemistryTopic = {
  title: string;
  overview: string;
  neet: string[];
  jee: string[];
  gate: string[];
  incho: string[];
};

export const chemistryDatabase: Record<string, ChemistryTopic> = {
  "atomic-structure": {
    title: "Atomic Structure",

    overview:
      "Study of atoms, subatomic particles and electronic arrangement.",

    neet: ["Bohr model", "Quantum numbers", "Electronic configuration"],

    jee: [
      "De Broglie relation",
      "Heisenberg uncertainty principle",
      "Wave functions",
    ],

    gate: ["Quantum mechanics", "Schrödinger equation"],

    incho: ["Advanced orbital problems", "Quantum reasoning"],
  },

  "mole-concept": {
    title: "Mole Concept",

    overview:
      "Relationship between mass, moles, atoms and Avogadro number.",

    neet: ["Mole calculations", "Empirical formula", "Percentage composition"],

    jee: ["Limiting reagent", "Advanced stoichiometry"],

    gate: ["Reaction engineering basics"],

    incho: ["Complex numerical problems"],
  },

  equilibrium: {
    title: "Chemical Equilibrium",

    overview:
      "Dynamic state where forward and backward reaction rates become equal.",

    neet: ["Le Chatelier principle", "Kc and Kp", "NCERT examples"],

    jee: ["Ionic equilibrium", "Buffer systems", "Complex equilibrium"],

    gate: ["Thermodynamic relationships", "Free energy concepts"],

    incho: ["Advanced equilibrium problems", "Multi-equilibrium systems"],
  },

  thermodynamics: {
    title: "Thermodynamics",

    overview:
      "Study of energy transformations in chemical systems.",

    neet: ["Enthalpy", "Entropy", "First law"],

    jee: ["Second law", "Gibbs energy"],

    gate: ["Thermodynamic cycles"],

    incho: ["Advanced energy analysis"],
  },

  electrochemistry: {
    title: "Electrochemistry",

    overview:
      "Study of chemical reactions involving electricity.",

    neet: ["Galvanic cell", "Electrolysis", "Nernst equation"],

    jee: ["Cell potential calculations"],

    gate: ["Advanced electrochemical systems"],

    incho: ["Complex electrochemical reasoning"],
  },

  "chemical-kinetics": {
    title: "Chemical Kinetics",

    overview:
      "Study of reaction rates and mechanisms.",

    neet: ["Order", "Rate law", "Half-life"],

    jee: ["Integrated equations"],

    gate: ["Reaction engineering concepts"],

    incho: ["Advanced kinetics"],
  },

  goc: {
    title: "General Organic Chemistry",

    overview:
      "Foundation of organic reaction mechanisms.",

    neet: ["Inductive effect", "Resonance", "Hyperconjugation"],

    jee: ["Acidity and basicity"],

    gate: ["Mechanistic analysis"],

    incho: ["Advanced organic reasoning"],
  },

  sn1: {
    title: "SN1 Reaction",

    overview:
      "SN1 is a nucleophilic substitution reaction through carbocation formation.",

    neet: [
      "Definition",
      "Rate = k[Substrate]",
      "3° > 2° > 1°",
      "Polar protic solvents",
    ],

    jee: [
      "Carbocation rearrangement",
      "Energy profile",
      "Stereochemistry",
    ],

    gate: ["Transition state analysis"],

    incho: ["Competition with SN2"],
  },

  sn2: {
    title: "SN2 Reaction",

    overview:
      "Single-step nucleophilic substitution reaction.",

    neet: ["Backside attack", "Rate law"],

    jee: ["Stereochemical inversion"],

    gate: ["Mechanistic interpretation"],

    incho: ["Competition with SN1"],
  },

  isomerism: {
    title: "Isomerism",

    overview:
      "Compounds having same formula but different arrangements.",

    neet: ["Structural isomerism", "Geometrical isomerism"],

    jee: ["Optical isomerism"],

    gate: ["Advanced stereochemistry"],

    incho: ["Complex stereochemical problems"],
  },

  hydrocarbons: {
    title: "Hydrocarbons",

    overview:
      "Compounds containing carbon and hydrogen.",

    neet: ["Alkanes", "Alkenes", "Alkynes"],

    jee: ["Reaction mechanisms"],

    gate: ["Industrial chemistry"],

    incho: ["Advanced synthesis"],
  },

  "chemical-bonding": {
    title: "Chemical Bonding",

    overview:
      "Study of forces holding atoms together.",

    neet: ["Ionic bond", "Covalent bond", "VSEPR"],

    jee: ["Hybridization", "MOT", "Dipole moment"],

    gate: ["Advanced bonding models"],

    incho: ["Exceptional bonding cases"],
  },

  "periodic-table": {
    title: "Periodic Table",

    overview:
      "Arrangement of elements based on properties.",

    neet: ["Periodic trends", "Electronic configuration"],

    jee: ["Exceptions and anomalies"],

    gate: ["Periodic behavior"],

    incho: ["Advanced trend analysis"],
  },

  "coordination-chemistry": {
    title: "Coordination Chemistry",

    overview:
      "Study of coordination compounds.",

    neet: ["Ligands", "Coordination number"],

    jee: ["Crystal field theory"],

    gate: ["Advanced complexes"],

    incho: ["Advanced bonding"],
  },

  "d-and-f-block": {
    title: "d and f Block",

    overview:
      "Transition and inner transition elements.",

    neet: ["General properties"],

    jee: ["Magnetic properties"],

    gate: ["Electronic transitions"],

    incho: ["Advanced applications"],
  },
};