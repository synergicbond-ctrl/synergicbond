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
  completed: ["structure-of-atom"],

  inProgress: ["thermodynamics"],

  revisionQueue: ["some-basic-concepts"],

  weakChapters: [],

  strongChapters: [],

  totalStudyMinutes: 0,

  testsTaken: 0,
};