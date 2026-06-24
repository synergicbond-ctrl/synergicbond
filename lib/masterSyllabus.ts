export type Chapter = {
  id: string;
  title: string;
  category: "physical" | "inorganic" | "organic";
  exams: ("neet" | "jeeMain" | "jeeAdvanced")[];
  difficulty: 1 | 2 | 3 | 4 | 5;
  concepts: string[];
  pyqTags: string[];
  subDifficulty: {
    easy: number;
    medium: number;
    hard: number;
  };
};

export const masterSyllabus: Chapter[] = [
  {
    id: "some-basic-concepts",
    title: "Some Basic Concepts of Chemistry",
    category: "physical",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 2,
    concepts: [
      "Mole Concept",
      "Atomic Mass",
      "Molar Mass",
      "Stoichiometry"
    ],
    pyqTags: ["mole", "stoichiometry", "limiting reagent"],
    subDifficulty: {
      easy: 60,
      medium: 30,
      hard: 10
    }
  },

  {
    id: "structure-of-atom",
    title: "Structure of Atom",
    category: "physical",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 2,
    concepts: [
      "Bohr Model",
      "Quantum Numbers",
      "Orbital Concept",
      "Electronic Configuration"
    ],
    pyqTags: ["quantum numbers", "bohr", "configuration"],
    subDifficulty: {
      easy: 50,
      medium: 40,
      hard: 10
    }
  },

  {
    id: "thermodynamics",
    title: "Thermodynamics",
    category: "physical",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 3,
    concepts: [
      "First Law",
      "Enthalpy",
      "Entropy",
      "Gibbs Free Energy"
    ],
    pyqTags: ["enthalpy", "gibbs", "entropy"],
    subDifficulty: {
      easy: 30,
      medium: 50,
      hard: 20
    }
  }
];