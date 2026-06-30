import { physical } from "./masterSyllabus/physical";
import { organic } from "./masterSyllabus/organic";
import { inorganic } from "./masterSyllabus/inorganic";

const masterSyllabus = [...physical, ...organic, ...inorganic];

export function findRelatedChapter(question: string) {
  const q = question.toLowerCase();

  return masterSyllabus.filter((chapter) =>
    chapter.pyqTags.some((tag) => q.includes(tag.toLowerCase()))
  );
}

export function suggestConcepts(question: string) {
  const chapters = findRelatedChapter(question);

  return chapters.flatMap((c) => c.concepts as unknown[]);
}
