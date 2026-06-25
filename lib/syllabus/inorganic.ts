import { Chapter } from "./types";

export const inorganicChapters: Chapter[] = [
  {
    id: "periodic-classification",
    title: "Classification of Elements and Periodicity in Properties",
    category: "inorganic",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 2,
    estimatedHours: 8,
    prerequisites: ["structure-of-atom"],
    concepts: [],
    pyqTags: [],
  },

  {
    id: "chemical-bonding",
    title: "Chemical Bonding and Molecular Structure",
    category: "inorganic",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 5,
    estimatedHours: 16,
    prerequisites: [
      "structure-of-atom",
      "periodic-classification"
    ],
    concepts: [],
    pyqTags: [],
  },

  {
    id: "hydrogen",
    title: "Hydrogen",
    category: "inorganic",
    exams: ["neet"],
    difficulty: 1,
    estimatedHours: 4,
    prerequisites: [
      "chemical-bonding"
    ],
    concepts: [],
    pyqTags: [],
  },

  {
    id: "s-block-elements",
    title: "The s-Block Elements",
    category: "inorganic",
    exams: ["neet"],
    difficulty: 2,
    estimatedHours: 6,
    prerequisites: [
      "periodic-classification"
    ],
    concepts: [],
    pyqTags: [],
  },

  {
    id: "p-block-elements",
    title: "The p-Block Elements",
    category: "inorganic",
    exams: ["neet"],
    difficulty: 3,
    estimatedHours: 12,
    prerequisites: [
      "chemical-bonding"
    ],
    concepts: [],
    pyqTags: [],
  },

  {
    id: "d-and-f-block-elements",
    title: "The d- and f-Block Elements",
    category: "inorganic",
    exams: ["neet", "jeeMain"],
    difficulty: 3,
    estimatedHours: 10,
    prerequisites: [
      "periodic-classification"
    ],
    concepts: [],
    pyqTags: [],
  },

  {
    id: "coordination-compounds",
    title: "Coordination Compounds",
    category: "inorganic",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 5,
    estimatedHours: 14,
    prerequisites: [
      "chemical-bonding",
      "d-and-f-block-elements"
    ],
    concepts: [],
    pyqTags: [],
  },

  {
    id: "metallurgy",
    title: "General Principles and Processes of Isolation of Elements",
    category: "inorganic",
    exams: ["jeeMain"],
    difficulty: 2,
    estimatedHours: 6,
    prerequisites: [],
    concepts: [],
    pyqTags: [],
  },

  {
    id: "environmental-chemistry",
    title: "Environmental Chemistry",
    category: "inorganic",
    exams: ["neet"],
    difficulty: 1,
    estimatedHours: 3,
    prerequisites: [],
    concepts: [],
    pyqTags: [],
  },

  {
    id: "qualitative-analysis",
    title: "Practical Inorganic Chemistry",
    category: "inorganic",
    exams: ["jeeAdvanced"],
    difficulty: 3,
    estimatedHours: 8,
    prerequisites: [
      "coordination-compounds"
    ],
    concepts: [],
    pyqTags: [],
  },
];