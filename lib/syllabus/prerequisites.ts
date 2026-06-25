export const prerequisites: Record<string, string[]> = {
  // =========================
  // PHYSICAL CHEMISTRY
  // =========================

  "some-basic-concepts": [],

  "structure-of-atom": [
    "some-basic-concepts"
  ],

  "states-of-matter": [
    "some-basic-concepts"
  ],

  thermodynamics: [
    "states-of-matter"
  ],

  equilibrium: [
    "thermodynamics"
  ],

  "redox-reactions": [
    "some-basic-concepts"
  ],

  solutions: [
    "thermodynamics"
  ],

  electrochemistry: [
    "redox-reactions",
    "thermodynamics"
  ],

  "chemical-kinetics": [
    "thermodynamics"
  ],

  "surface-chemistry": [
    "states-of-matter"
  ],

  "solid-state": [
    "structure-of-atom"
  ],

  // =========================
  // INORGANIC CHEMISTRY
  // =========================

  "periodic-classification": [
    "structure-of-atom"
  ],

  "chemical-bonding": [
    "structure-of-atom",
    "periodic-classification"
  ],

  hydrogen: [
    "chemical-bonding"
  ],

  "s-block-elements": [
    "periodic-classification"
  ],

  "p-block-elements": [
    "chemical-bonding"
  ],

  "d-and-f-block-elements": [
    "periodic-classification"
  ],

  "coordination-compounds": [
    "chemical-bonding",
    "d-and-f-block-elements"
  ],

  metallurgy: [
    "redox-reactions"
  ],

  "environmental-chemistry": [],

  "qualitative-analysis": [
    "coordination-compounds"
  ],

  // =========================
  // ORGANIC CHEMISTRY
  // =========================

  "general-organic-chemistry": [
    "chemical-bonding"
  ],

  isomerism: [
    "general-organic-chemistry"
  ],

  "iupac-nomenclature": [
    "general-organic-chemistry"
  ],

  hydrocarbons: [
    "general-organic-chemistry",
    "isomerism"
  ],

  "haloalkanes-haloarenes": [
    "hydrocarbons"
  ],

  "alcohols-phenols-ethers": [
    "haloalkanes-haloarenes"
  ],

  "aldehydes-ketones-carboxylic-acids": [
    "alcohols-phenols-ethers"
  ],

  amines: [
    "aldehydes-ketones-carboxylic-acids"
  ],

  biomolecules: [
    "general-organic-chemistry"
  ],

  polymers: [
    "general-organic-chemistry"
  ],

  "chemistry-in-everyday-life": [],

  "practical-organic-chemistry": [
    "general-organic-chemistry"
  ]
};