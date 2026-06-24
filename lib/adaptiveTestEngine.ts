import { masterSyllabus } from "./masterSyllabus";

export function getAdaptiveTest(userWeakTopics: string[]) {
  const weakChapters = masterSyllabus.filter((c) =>
    userWeakTopics.includes(c.id)
  );

  const strongChapters = masterSyllabus.filter(
    (c) => !userWeakTopics.includes(c.id)
  );

  return {
    testFocus: weakChapters,
    bonusQuestions: strongChapters.slice(0, 2),
  };
}