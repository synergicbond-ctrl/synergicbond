export type Exam = "neet" | "jeeMain" | "jeeAdvanced";

export type Category =
  | "physical"
  | "organic"
  | "inorganic";

export interface Chapter {
  id: string;
  title: string;
  category: Category;

  exams: Exam[];

  difficulty: 1 | 2 | 3 | 4 | 5;

  estimatedHours: number;

  concepts: string[];

  prerequisites: string[];

  pyqTags: string[];
}