export type Progress = {
  completed: string[];
  inProgress: string[];
  revisionQueue: string[];
};

export const userProgress: Progress = {
  completed: ["structure-of-atom"],
  inProgress: ["thermodynamics"],
  revisionQueue: ["some-basic-concepts"],
};