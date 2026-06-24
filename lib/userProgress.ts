export type UserProgress = {
  completed: string[];

  inProgress: string[];

  revisionQueue: string[];

  weakChapters: string[];

  strongChapters: string[];

  totalStudyMinutes: number;

  testsTaken: number;
};

export const userProgress: UserProgress = {
  completed: [
    "structure-of-atom",
    "some-basic-concepts",
  ],

  inProgress: [
    "thermodynamics",
  ],

  revisionQueue: [
    "equilibrium",
  ],

  weakChapters: [
    "electrochemistry",
  ],

  strongChapters: [
    "structure-of-atom",
  ],

  totalStudyMinutes: 420,

  testsTaken: 8,
};