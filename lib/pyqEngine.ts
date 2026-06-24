import { masterSyllabus } from "./masterSyllabus";

export function findRelatedChapter(question: string) {
  const q = question.toLowerCase();

  return masterSyllabus.filter((chapter) =>
    chapter.pyqTags.some((tag) => q.includes(tag))
  );
}

export function suggestConcepts(question: string) {
  const chapters = findRelatedChapter(question);

  return chapters.flatMap((c) => c.concepts);
}