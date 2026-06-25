import { Chapter } from "./types";

export const organicChapters: Chapter[] = [
  {
    id: "general-organic-chemistry",
    title: "General Organic Chemistry (GOC)",
    category: "organic",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 5,
    estimatedHours: 18,
    prerequisites: [
      "chemical-bonding",
      "structure-of-atom"
    ],
    concepts: [],
    pyqTags: [],
  },

  {
    id: "isomerism",
    title: "Isomerism",
    category: "organic",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 4,
    estimatedHours: 12,
    prerequisites: [
      "general-organic-chemistry"
    ],
    concepts: [],
    pyqTags: [],
  },

  {
    id: "iupac-nomenclature",
    title: "IUPAC Nomenclature",
    category: "organic",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 2,
    estimatedHours: 5,
    prerequisites: [
      "general-organic-chemistry"
    ],
    concepts: [],
    pyqTags: [],
  },

  {
    id: "hydrocarbons",
    title: "Hydrocarbons",
    category: "organic",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 3,
    estimatedHours: 12,
    prerequisites: [
      "general-organic-chemistry",
      "isomerism"
    ],
    concepts: [],
    pyqTags: [],
  },

  {
    id: "haloalkanes-haloarenes",
    title: "Haloalkanes and Haloarenes",
    category: "organic",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 4,
    estimatedHours: 12,
    prerequisites: [
      "hydrocarbons"
    ],
    concepts: [],
    pyqTags: [],
  },

  {
    id: "alcohols-phenols-ethers",
    title: "Alcohols, Phenols and Ethers",
    category: "organic",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 4,
    estimatedHours: 12,
    prerequisites: [
      "haloalkanes-haloarenes"
    ],
    concepts: [],
    pyqTags: [],
  },

  {
    id: "aldehydes-ketones-carboxylic-acids",
    title: "Aldehydes, Ketones and Carboxylic Acids",
    category: "organic",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 5,
    estimatedHours: 16,
    prerequisites: [
      "alcohols-phenols-ethers"
    ],
    concepts: [],
    pyqTags: [],
  },

  {
    id: "amines",
    title: "Amines",
    category: "organic",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 4,
    estimatedHours: 10,
    prerequisites: [
      "aldehydes-ketones-carboxylic-acids"
    ],
    concepts: [],
    pyqTags: [],
  },

  {
    id: "biomolecules",
    title: "Biomolecules",
    category: "organic",
    exams: ["neet", "jeeMain"],
    difficulty: 2,
    estimatedHours: 8,
    prerequisites: [],
    concepts: [],
    pyqTags: [],
  },

  {
    id: "polymers",
    title: "Polymers",
    category: "organic",
    exams: ["neet"],
    difficulty: 1,
    estimatedHours: 4,
    prerequisites: [],
    concepts: [],
    pyqTags: [],
  },

  {
    id: "chemistry-in-everyday-life",
    title: "Chemistry in Everyday Life",
    category: "organic",
    exams: ["neet"],
    difficulty: 1,
    estimatedHours: 4,
    prerequisites: [],
    concepts: [],
    pyqTags: [],
  },

  {
    id: "practical-organic-chemistry",
    title: "Practical Organic Chemistry",
    category: "organic",
    exams: ["jeeAdvanced"],
    difficulty: 3,
    estimatedHours: 8,
    prerequisites: [
      "general-organic-chemistry"
    ],
    concepts: [],
    pyqTags: [],
  },
];