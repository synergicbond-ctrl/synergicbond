import { masterSyllabus } from "@/lib/masterSyllabus/all";

export function explainChapter(query: string) {
  const q = query.toLowerCase();

  const chapter = masterSyllabus.find((c) => {
    return (
      c.title.toLowerCase().includes(q) ||
      c.id.toLowerCase().includes(q)
    );
  });

  if (!chapter) {
    return {
      title: "Not Found",
      concepts: [],
      difficulty: 0,
    };
  }

  return {
    title: chapter.title,
    concepts: chapter.concepts,
    difficulty: chapter.difficulty,
  };
}
