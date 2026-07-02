// lib/masterSyllabus/types.ts

export type SubjectCategory =
  | "physical"
  | "organic"
  | "inorganic";

// Display-format exam tags — the format used by the subject arrays and the
// AI Lab planner. Consumers that filter (examSyllabus, /pyq) normalize case
// and spacing, so these remain compatible everywhere.
export type Exam =
  | "NEET"
  | "JEE MAIN"
  | "JEE ADVANCED";

export interface Formula {
  id: string;
  title: string;
  expression: string;
  description?: string;
}

export interface Reaction {
  id: string;
  name: string;
  reactants?: string[];
  products?: string[];
  conditions?: string[];
}

export interface Mechanism {
  id: string;
  title: string;
  steps: string[];
}

export interface Concept {
  id: string;
  title: string;
  description?: string;

  formulas?: Formula[];
  reactions?: Reaction[];
  mechanisms?: Mechanism[];

  keywords?: string[];
}

export interface Chapter {
  id: string;

  title: string;

  category: SubjectCategory;

  exams: Exam[];

  difficulty: 1 | 2 | 3 | 4 | 5;

  estimatedHours: number;

  prerequisites: string[];

  concepts: Concept[];

  pyqTags: string[];

  searchKeywords: string[];

  ncert: {
    class: 11 | 12;
    unit?: string;
    chapter?: string;
  };
}