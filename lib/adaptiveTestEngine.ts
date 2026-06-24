import { masterSyllabus } from "./masterSyllabus";

export type AdaptiveExam = {
  recommended: string[];

  weak: string[];

  bonus: string[];
};

export function getAdaptiveTest(
  weakTopics: string[]
): AdaptiveExam {
  const weak = masterSyllabus
    .filter((chapter) =>
      weakTopics.includes(chapter.id)
    )
    .map((chapter) => chapter.title);

  const recommended = weak.length
    ? weak
    : masterSyllabus
        .slice(0, 5)
        .map((chapter) => chapter.title);

  const bonus = masterSyllabus
    .filter(
      (chapter) =>
        !weakTopics.includes(chapter.id)
    )
    .slice(0, 3)
    .map((chapter) => chapter.title);

  return {
    recommended,
    weak,
    bonus,
  };
}