import { Exam } from "./types";

export const examMapping: Record<string, Exam[]> = {
  // =========================
  // PHYSICAL CHEMISTRY
  // =========================
  "some-basic-concepts": ["neet", "jeeMain", "jeeAdvanced"],
  "structure-of-atom": ["neet", "jeeMain", "jeeAdvanced"],
  "states-of-matter": ["neet", "jeeMain", "jeeAdvanced"],
  thermodynamics: ["neet", "jeeMain", "jeeAdvanced"],
  equilibrium: ["neet", "jeeMain", "jeeAdvanced"],
  "redox-reactions": ["neet", "jeeMain", "jeeAdvanced"],
  solutions: ["neet", "jeeMain", "jeeAdvanced"],
  electrochemistry: ["neet", "jeeMain", "jeeAdvanced"],
  "chemical-kinetics": ["neet", "jeeMain", "jeeAdvanced"],
  "surface-chemistry": ["neet"],
  "solid-state": ["jeeMain"],

  // =========================
  // INORGANIC CHEMISTRY
  // =========================
  "periodic-classification": ["neet", "jeeMain", "jeeAdvanced"],
  "chemical-bonding": ["neet", "jeeMain", "jeeAdvanced"],
  hydrogen: ["neet"],
  "s-block-elements": ["neet"],
  "p-block-elements": ["neet"],
  "d-and-f-block-elements": ["neet", "jeeMain"],
  "coordination-compounds": ["neet", "jeeMain", "jeeAdvanced"],
  metallurgy: ["jeeMain"],
  "environmental-chemistry": ["neet"],
  "qualitative-analysis": ["jeeAdvanced"],

  // =========================
  // ORGANIC CHEMISTRY
  // =========================
  "general-organic-chemistry": ["neet", "jeeMain", "jeeAdvanced"],
  isomerism: ["neet", "jeeMain", "jeeAdvanced"],
  "iupac-nomenclature": ["neet", "jeeMain", "jeeAdvanced"],
  hydrocarbons: ["neet", "jeeMain", "jeeAdvanced"],
  "haloalkanes-haloarenes": ["neet", "jeeMain", "jeeAdvanced"],
  "alcohols-phenols-ethers": ["neet", "jeeMain", "jeeAdvanced"],
  "aldehydes-ketones-carboxylic-acids": ["neet", "jeeMain", "jeeAdvanced"],
  amines: ["neet", "jeeMain", "jeeAdvanced"],
  biomolecules: ["neet", "jeeMain"],
  polymers: ["neet"],
  "chemistry-in-everyday-life": ["neet"],
  "practical-organic-chemistry": ["jeeAdvanced"],
};