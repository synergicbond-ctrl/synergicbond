export type Exam = "neet" | "jeeMain" | "jeeAdvanced";

export type Category =
  | "physical"
  | "inorganic"
  | "organic";

export type Chapter = {
  id: string;
  title: string;

  category: Category;

  exams: Exam[];

  difficulty: 1 | 2 | 3 | 4 | 5;

  concepts: string[];

  pyqTags: string[];

  subDifficulty: {
    neet: 1 | 2 | 3 | 4 | 5;
    jeeMain: 1 | 2 | 3 | 4 | 5;
    jeeAdvanced: 1 | 2 | 3 | 4 | 5;
  };
};