import { NextResponse } from "next/server";
import { physical } from "@/lib/masterSyllabus/physical";
import { organic } from "@/lib/masterSyllabus/organic";
import { inorganic } from "@/lib/masterSyllabus/inorganic";

const allChapters = [...physical, ...organic, ...inorganic];

function scoreChapter(chapter: any, query: string): number {
  const q = query.toLowerCase();
  let score = 0;

  // Exact title match = highest priority
  if (chapter.title.toLowerCase() === q) score += 100;
  else if (chapter.title.toLowerCase().startsWith(q)) score += 60;
  else if (chapter.title.toLowerCase().includes(q)) score += 40;

  // Keyword match
  if (chapter.searchKeywords) {
    for (const kw of chapter.searchKeywords as string[]) {
      if (kw.toLowerCase() === q) score += 50;
      else if (kw.toLowerCase().includes(q)) score += 20;
    }
  }

  // Concept match
  for (const concept of chapter.concepts || []) {
    if (concept.title?.toLowerCase().includes(q)) score += 15;
    if (concept.description?.toLowerCase().includes(q)) score += 5;
  }

  // Boost by exam relevance (JEE Advanced > JEE Main > NEET)
  if (chapter.exams?.includes("JEE Advanced")) score += 5;
  if (chapter.exams?.includes("JEE Main")) score += 3;

  return score;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q")?.trim() || "";
  const exam = url.searchParams.get("exam") || "";
  const category = url.searchParams.get("category") || "";

  if (!query) {
    return NextResponse.json({ results: [], total: 0 });
  }

  let chapters = allChapters;

  // Filter by exam type
  if (exam) {
    chapters = chapters.filter((c: any) => c.exams?.includes(exam));
  }

  // Filter by category (physical/organic/inorganic)
  if (category) {
    chapters = chapters.filter((c: any) =>
      c.category?.toLowerCase() === category.toLowerCase()
    );
  }

  // Score and filter
  const scored = chapters
    .map((c: any) => ({ chapter: c, score: scoreChapter(c, query) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 20)
    .map((r) => ({ ...r.chapter, relevanceScore: r.score }));

  return NextResponse.json({ results: scored, total: scored.length });
}
