import { NextResponse } from "next/server";
import { physical } from "@/lib/masterSyllabus/physical";
import { organic } from "@/lib/masterSyllabus/organic";
import { inorganic } from "@/lib/masterSyllabus/inorganic";
import { NAME_REACTIONS } from "@/lib/nameReactions";
import { reactionSlug } from "@/lib/reactionSlug";
import { searchReactions } from "@/lib/chemistry/reactions";
import { searchKnowledgeGraph } from "@/lib/chemistry/graph";
import { searchFormulaCards } from "@/lib/chemistry/formulas";
import { searchNCERTLinks } from "@/lib/chemistry/ncert";
import { pyqDatabase } from "@/lib/pyqDatabase";
import { IMPORTANT_ORDERS } from "@/lib/importantOrders";

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
  type: "chapter" | "reaction" | "formula" | "pyq" | "ncert" | "order" | "graph";
  href: string;
  subtitle?: string;
  graphType?: string;
  relevanceScore: number;
};

function normalizeSearch(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function scoreText(fields: string[], query: string): number {
  const q = normalizeSearch(query);
  const text = normalizeSearch(fields.join(" "));
  if (!q || !text.includes(q.split(" ")[0] ?? "")) return 0;

  const exactScore = fields.some((field) => normalizeSearch(field) === q) ? 80 : 0;
  const prefixScore = fields.some((field) => normalizeSearch(field).startsWith(q)) ? 40 : 0;
  const termScore = q.split(" ").filter(Boolean).reduce((sum, term) => sum + (text.includes(term) ? 10 : 0), 0);
  return exactScore + prefixScore + termScore;
}

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

  const formulaResults: SearchResult[] = searchFormulaCards(query, 20).map((formula) => ({
    id: formula.id,
    title: formula.name,
    category: formula.chapter,
    type: "formula",
    href: `/formula-cards?id=${encodeURIComponent(formula.id)}`,
    subtitle: `${formula.formula} - ${formula.ncertReference.chapter}`,
    relevanceScore: formula.relevanceScore,
  }));

  const pyqResults: SearchResult[] = Object.entries(pyqDatabase)
    .flatMap(([chapterId, questions]) => questions.map((question) => ({ chapterId, question })))
    .map(({ chapterId, question }) => ({
      chapterId,
      question,
      score: scoreText([question.id, question.year, question.exam, question.topic, question.question, question.explanation], query),
    }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.question.topic.localeCompare(b.question.topic))
    .slice(0, 20)
    .map(({ chapterId, question, score }) => ({
      id: question.id,
      title: question.topic,
      category: chapterId,
      type: "pyq" as const,
      href: `/pyq?pyq=${encodeURIComponent(question.id)}`,
      subtitle: `${question.year} - ${question.exam}`,
      relevanceScore: score,
    }));

  const ncertResults: SearchResult[] = searchNCERTLinks(query, { limit: 20 }).map((link) => ({
    id: `${link.entityType}-${link.entityId}`,
    title: link.label,
    category: link.entityType,
    type: "ncert",
    href: "/search",
    subtitle: `Class ${link.ncertReference.class} - ${link.ncertReference.chapter} - ${link.ncertReference.topic}`,
    relevanceScore: link.relevanceScore,
  }));

  const orderResults: SearchResult[] = IMPORTANT_ORDERS
    .map((order) => ({
      order,
      score: scoreText([order.id, order.group, order.property, order.order, order.note ?? "", order.reference ?? "", order.sourcePdf], query),
    }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.order.property.localeCompare(b.order.property))
    .slice(0, 20)
    .map(({ order, score }) => ({
      id: order.id,
      title: order.property,
      category: order.category,
      type: "order" as const,
      href: "/important-orders",
      subtitle: `${order.order} - ${order.group}`,
      relevanceScore: score,
    }));

  const graphResults: SearchResult[] = searchKnowledgeGraph(query, { limit: 30 })
    .filter((hit) => !["reaction", "formula", "pyq"].includes(hit.type))
    .map((hit) => ({
    id: hit.id,
    title: hit.label,
    category: hit.type.replace("derived-", ""),
    type: "graph",
    href: hit.type === "reaction"
      ? "/name-reactions"
      : hit.type === "pyq"
        ? "/pyq"
        : hit.type === "formula"
          ? `/formula-cards?id=${encodeURIComponent(hit.id)}`
          : hit.type === "ncert-reference"
            ? "/search"
            : hit.type === "derived-reagent"
              ? "/reagents"
              : hit.type === "derived-exception"
                ? "/vault/exceptions"
                : hit.type === "derived-order"
                  ? "/important-orders"
                  : "/search",
    subtitle: hit.summary,
    graphType: hit.type,
    relevanceScore: hit.score,
  }));

  const results = [
    ...chapterResults,
    ...reactionResults,
    ...formulaResults,
    ...pyqResults,
    ...ncertResults,
    ...orderResults,
    ...graphResults,
  ]
    .sort((a, b) => b.relevanceScore - a.relevanceScore || a.title.localeCompare(b.title))
    .slice(0, 60);

  return NextResponse.json({ results, total: results.length });
}
