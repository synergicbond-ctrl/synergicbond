export type Exam = "neet" | "jeeMain" | "jeeAdvanced";

export type Category = "physical" | "inorganic" | "organic";

export type Chapter = {
  id: string;
  title: string;
  category: Category;

  exams: Exam[];

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
  // =========================
  // PHYSICAL CHEMISTRY
  // =========================

  {
    id: "some-basic-concepts",
    title: "Some Basic Concepts of Chemistry",
    category: "physical",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 2,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 60, medium: 30, hard: 10 },
  },

  {
    id: "structure-of-atom",
    title: "Structure of Atom",
    category: "physical",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 2,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 50, medium: 40, hard: 10 },
  },

  {
    id: "states-of-matter",
    title: "States of Matter",
    category: "physical",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 2,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 60, medium: 30, hard: 10 },
  },

  {
    id: "thermodynamics",
    title: "Thermodynamics",
    category: "physical",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 3,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 30, medium: 50, hard: 20 },
  },

  {
    id: "equilibrium",
    title: "Equilibrium",
    category: "physical",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 4,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 20, medium: 50, hard: 30 },
  },

  {
    id: "redox-reactions",
    title: "Redox Reactions",
    category: "physical",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 2,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 50, medium: 40, hard: 10 },
  },

  {
    id: "solutions",
    title: "Solutions",
    category: "physical",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 3,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 30, medium: 50, hard: 20 },
  },

  {
    id: "electrochemistry",
    title: "Electrochemistry",
    category: "physical",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 4,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 20, medium: 50, hard: 30 },
  },

  {
    id: "chemical-kinetics",
    title: "Chemical Kinetics",
    category: "physical",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 3,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 30, medium: 50, hard: 20 },
  },

  {
    id: "surface-chemistry",
    title: "Surface Chemistry",
    category: "physical",
    exams: ["neet"],
    difficulty: 2,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 60, medium: 30, hard: 10 },
  },

  {
    id: "solid-state",
    title: "Solid State",
    category: "physical",
    exams: ["jeeMain"],
    difficulty: 3,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 40, medium: 40, hard: 20 },
  },

  // =========================
  // INORGANIC CHEMISTRY
  // =========================

  {
    id: "periodic-table",
    title: "Classification of Elements and Periodicity",
    category: "inorganic",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 2,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 50, medium: 40, hard: 10 },
  },

  {
    id: "chemical-bonding",
    title: "Chemical Bonding and Molecular Structure",
    category: "inorganic",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 4,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 20, medium: 50, hard: 30 },
  },

  {
    id: "hydrogen",
    title: "Hydrogen",
    category: "inorganic",
    exams: ["neet"],
    difficulty: 1,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 70, medium: 20, hard: 10 },
  },

  {
    id: "s-block-elements",
    title: "s-Block Elements",
    category: "inorganic",
    exams: ["neet"],
    difficulty: 2,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 60, medium: 30, hard: 10 },
  },

  {
    id: "p-block-elements",
    title: "p-Block Elements",
    category: "inorganic",
    exams: ["neet"],
    difficulty: 3,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 40, medium: 40, hard: 20 },
  },

  {
    id: "d-and-f-block-elements",
    title: "d and f Block Elements",
    category: "inorganic",
    exams: ["neet", "jeeMain"],
    difficulty: 3,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 40, medium: 40, hard: 20 },
  },

  {
    id: "coordination-compounds",
    title: "Coordination Compounds",
    category: "inorganic",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 4,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 20, medium: 50, hard: 30 },
  },

  {
    id: "metallurgy",
    title: "Metallurgy",
    category: "inorganic",
    exams: ["jeeMain"],
    difficulty: 2,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 60, medium: 30, hard: 10 },
  },

  {
    id: "environmental-chemistry",
    title: "Environmental Chemistry",
    category: "inorganic",
    exams: ["neet"],
    difficulty: 1,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 80, medium: 15, hard: 5 },
  },

  // =========================
  // ORGANIC CHEMISTRY
  // =========================

  {
    id: "general-organic-chemistry",
    title: "General Organic Chemistry",
    category: "organic",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 4,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 20, medium: 50, hard: 30 },
  },

  {
    id: "isomerism",
    title: "Isomerism",
    category: "organic",
    exams: ["jeeMain", "jeeAdvanced"],
    difficulty: 4,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 20, medium: 50, hard: 30 },
  },

  {
    id: "hydrocarbons",
    title: "Hydrocarbons",
    category: "organic",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 3,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 30, medium: 50, hard: 20 },
  },

  {
    id: "haloalkanes-and-haloarenes",
    title: "Haloalkanes and Haloarenes",
    category: "organic",
    exams: ["neet", "jeeMain"],
    difficulty: 3,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 40, medium: 40, hard: 20 },
  },

  {
    id: "alcohols-phenols-and-ethers",
    title: "Alcohols Phenols and Ethers",
    category: "organic",
    exams: ["neet", "jeeMain"],
    difficulty: 3,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 40, medium: 40, hard: 20 },
  },

  {
    id: "aldehydes-ketones-and-carboxylic-acids",
    title: "Aldehydes Ketones and Carboxylic Acids",
    category: "organic",
    exams: ["neet", "jeeMain"],
    difficulty: 4,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 20, medium: 50, hard: 30 },
  },

  {
    id: "amines",
    title: "Amines",
    category: "organic",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 3,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 30, medium: 50, hard: 20 },
  },

  {
    id: "biomolecules",
    title: "Biomolecules",
    category: "organic",
    exams: ["neet"],
    difficulty: 2,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 70, medium: 20, hard: 10 },
  },

  {
    id: "polymers",
    title: "Polymers",
    category: "organic",
    exams: ["neet"],
    difficulty: 1,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 80, medium: 15, hard: 5 },
  },

  {
    id: "chemistry-in-everyday-life",
    title: "Chemistry in Everyday Life",
    category: "organic",
    exams: ["neet"],
    difficulty: 1,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 80, medium: 15, hard: 5 },
  },

  {
    id: "reaction-mechanisms",
    title: "Reaction Mechanisms",
    category: "organic",
    exams: ["jeeAdvanced"],
    difficulty: 5,
    concepts: [],
    pyqTags: [],
    subDifficulty: { easy: 10, medium: 40, hard: 50 },
  },
];