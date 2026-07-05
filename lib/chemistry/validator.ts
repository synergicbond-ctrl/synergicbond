import type { PYQQuestion } from "@/lib/pyq/schema";

// Blacklisted non-chemistry terms that indicate Math/Physics leakage.
const PHYSICS_MATH_BLACKLIST = [
  "calculus",
  "derivative",
  "integration",
  "gravitation",
  "optics",
  "refractive index",
  "resistor",
  "capacitor",
  "inductance",
  "electric current",
  "frictional force",
  "acceleration",
  "kinematics",
  "projectile",
  "simple harmonic motion",
  "quantum mechanics", // allowed in structure of atom, but keep eye
];

// Whitelisted chemistry-specific keyword anchors.
const CHEMISTRY_ANCHORS = [
  "mole", "atom", "molecule", "reaction", "reagent", "exception", "compound",
  "bond", "orbital", "hybridisation", "spin", "element", "catalysis", "acid", "base",
  "equilibrium", "thermodynamics", "electrochemistry", "kinetic", "solution",
  "oxidation", "reduction", "organic", "inorganic", "complex", "ligand", "pH",
  "buffer", "hydrocarbon", "ether", "ester", "ketone", "aldehyde", "alkene",
  "alkyne", "alkane", "amine", "biomolecule", "polymer", "solubility", "salt",
  "spectroscopy", "coordination", "valency", "wavelength", "de broglie", "heisenberg",
  "schrodinger", "bohr", "orbit", "quantum", "transition", "spectral", "node", "electronic",
  "enthalpy", "entropy", "gibbs", "joule", "calorie", "cell", "electrode", "nernst", "faraday",
  "solute", "solvent", "molarity", "molality", "normality", "colligative", "osmotic",
  "adsorption", "colloid", "catalyst", "zeolite", "allotrope", "silicate", "borane", "carbocation",
  "carbanion", "radical", "resonance", "nucleophile", "electrophile", "isomer", "chirality",
  "enantiomer", "aldol", "cannizzaro", "wurtz", "grignard", "sugar", "peptide", "protein",
  "vitamin", "nucleic", "monomer", "copolymer", "viva", "laboratory", "experiment", "titration",
  "react", "metal", "oxide", "anhydrous", "hydrated", "precipitate"
];

/**
 * Validates whether a question belongs strictly to Chemistry.
 * Returns true if valid, or throws an error with detailed explanation.
 */
export function validateChemistryQuestion(q: PYQQuestion): boolean {
  const text = `${q.question} ${q.explanation} ${q.subtopic} ${q.concepts.join(" ")}`.toLowerCase();

  // 1. Check Blacklist
  for (const term of PHYSICS_MATH_BLACKLIST) {
    // Exception: quantum is allowed in structure of atom / quantum chemistry
    if (term === "quantum mechanics" && q.chapter === "Atomic Structure") {
      continue;
    }
    if (text.includes(term)) {
      throw new Error(
        `Validation failed for question [${q.id}]: Contains non-chemistry blacklisted term "${term}".`
      );
    }
  }

  // 2. Check Whitelist Anchors (at least one must match)
  const matchesAnchor = CHEMISTRY_ANCHORS.some((anchor) => text.includes(anchor.toLowerCase()));
  if (!matchesAnchor) {
    throw new Error(
      `Validation failed for question [${q.id}]: Question does not contain any whitelisted chemistry concepts.`
    );
  }

  return true;
}

/**
 * Audits the entire question bank.
 */
export function auditQuestionBank(questions: PYQQuestion[]): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  for (const q of questions) {
    try {
      validateChemistryQuestion(q);
    } catch (err: any) {
      errors.push(err.message);
    }
  }
  return {
    valid: errors.length === 0,
    errors,
  };
}
