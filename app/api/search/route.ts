import { NextResponse } from "next/server";
import { physical } from "@/lib/masterSyllabus/physical";
import { organic } from "@/lib/masterSyllabus/organic";
import { inorganic } from "@/lib/masterSyllabus/inorganic";
import { NAME_REACTIONS } from "@/lib/nameReactions";
import { reactionSlug } from "@/lib/reactionSlug";
import { searchReactions } from "@/lib/chemistry/reactions";

type ChapterSearchSource = {
  id: string;
  title: string;
  category: string;
  exams?: string[];
  concepts?: { title?: string; description?: string }[];
  searchKeywords?: string[];
};

const allChapters: ChapterSearchSource[] = [...physical, ...organic, ...inorganic];
const knownReactionNames = new Set<string>(NAME_REACTIONS);

type SearchResult = {
  id: string;
  title: string;
  category: string;
  type: "chapter" | "reaction";
  href: string;
  subtitle?: string;
  relevanceScore: number;
};

function scoreChapter(chapter: ChapterSearchSource, query: string): number {
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
    chapters = chapters.filter((c) => c.exams?.includes(exam));
  }

  // Filter by category (physical/organic/inorganic)
  if (category) {
    chapters = chapters.filter((c) =>
      c.category?.toLowerCase() === category.toLowerCase()
    );
  }

  // Score and filter
  const chapterResults: SearchResult[] = chapters
    .map((c) => ({ chapter: c, score: scoreChapter(c, query) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 20)
    .map((r) => ({
      id: r.chapter.id,
      title: r.chapter.title,
      category: r.chapter.category,
      type: "chapter",
      href: `/chapter/${r.chapter.id}`,
      subtitle: `${r.chapter.concepts?.length ?? 0} concepts`,
      relevanceScore: r.score,
    }));

  const reactionResults: SearchResult[] = searchReactions(query, { limit: 20 }).map((reaction) => ({
    id: reaction.id,
    title: reaction.name,
    category: reaction.category,
    type: "reaction",
    href: knownReactionNames.has(reaction.name)
      ? `/learn/reactions/${reactionSlug(reaction.name)}`
      : "/name-reactions",
    subtitle: `${reaction.reactionType} - ${reaction.ncertReference.chapter}`,
    relevanceScore: reaction.relevanceScore,
  }));

  const results = [...chapterResults, ...reactionResults]
    .sort((a, b) => b.relevanceScore - a.relevanceScore || a.title.localeCompare(b.title))
    .slice(0, 30);

  return NextResponse.json({ results, total: results.length });
}
