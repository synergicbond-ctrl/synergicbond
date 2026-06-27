import { Chapter } from "./types";

export function chapter(data: Chapter): Chapter {
  return data;
}

export function byCategory(
  chapters: Chapter[],
  category: Chapter["category"]
): Chapter[] {
  return chapters.filter((chapter) => chapter.category === category);
}

export function byExam(
  chapters: Chapter[],
  exam: Chapter["exams"][number]
): Chapter[] {
  return chapters.filter((chapter) => chapter.exams.includes(exam));
}