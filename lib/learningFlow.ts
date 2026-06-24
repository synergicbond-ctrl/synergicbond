export const learningFlow = {
  continueLearning: "thermodynamics",

  recommended: [
    "electrochemistry",
    "equilibrium",
    "chemical-bonding",
  ],

  todayRevision: [
    "equilibrium",
    "thermodynamics",
  ],

  savedChapters: [
    "structure-of-atom",
  ],
};

export function saveChapter(
  chapter: string
) {
  if (
    !learningFlow.savedChapters.includes(
      chapter
    )
  ) {
    learningFlow.savedChapters.push(
      chapter
    );
  }
}