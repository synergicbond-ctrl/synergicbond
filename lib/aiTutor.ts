import { masterSyllabus, type Chapter } from "@/lib/masterSyllabus";

export type TutorResult = {
  title: string;
  concepts: string[];
  difficulty: number;
};

export type AiTutorRequest = {
  question: string;
  chapter?: string;
};

export type AiTutorResponse = {
  answer: string;
};

export type AiTutorContext = {
  chapterTitle: string;
  category: Chapter["category"] | "general";
  concepts: string[];
  pyqTags: string[];
  difficulty: Chapter["difficulty"] | null;
};

export function explainChapter(query: string): TutorResult {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return {
      title: "Ask a chemistry topic",
      concepts: ["Try Thermodynamics, Structure of Atom, or Mole Concept."],
      difficulty: 1,
    };
  }

  const chapter = findChapterContext(normalizedQuery);

  if (!chapter) {
    return {
      title: "Topic not found",
      concepts: ["Try a different chapter name or concept keyword."],
      difficulty: 1,
    };
  }

  return {
    title: chapter.title,
    concepts: chapter.concepts,
    difficulty: chapter.difficulty,
  };
}

export function findChapterContext(chapterQuery?: string): Chapter | undefined {
  const normalizedQuery = chapterQuery?.trim().toLowerCase();

  if (!normalizedQuery) {
    return undefined;
  }

  return masterSyllabus.find(
    (item) =>
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.id.toLowerCase().includes(normalizedQuery) ||
      item.concepts.some((concept) =>
        concept.toLowerCase().includes(normalizedQuery)
      ) ||
      item.pyqTags.some((tag) => tag.toLowerCase().includes(normalizedQuery))
  );
}

export function buildAiTutorContext(chapterQuery?: string): AiTutorContext {
  const chapter = findChapterContext(chapterQuery);

  if (!chapter) {
    return {
      chapterTitle: chapterQuery?.trim() || "General Chemistry",
      category: "general",
      concepts: [],
      pyqTags: [],
      difficulty: null,
    };
  }

  return {
    chapterTitle: chapter.title,
    category: chapter.category,
    concepts: chapter.concepts,
    pyqTags: chapter.pyqTags,
    difficulty: chapter.difficulty,
  };
}

export function buildAiTutorPrompt(request: AiTutorRequest): string {
  const context = buildAiTutorContext(request.chapter);

  return [
    `Chapter: ${context.chapterTitle}`,
    `Category: ${context.category}`,
    `Difficulty: ${context.difficulty ?? "adaptive"}`,
    `Concepts: ${context.concepts.length ? context.concepts.join(", ") : "Use core chemistry fundamentals"}`,
    `PYQ tags: ${context.pyqTags.length ? context.pyqTags.join(", ") : "Not specified"}`,
    `Student question: ${request.question}`,
    "Teach step-by-step, identify likely student mistakes, simplify the concept, and end with exam-focused insight.",
  ].join("\n");
}
