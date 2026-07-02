import { NextResponse } from "next/server";
import {
  getFormulaGraph,
  getNCERTGraph,
  getPYQGraph,
  getReactionGraph,
  searchKnowledgeGraph,
  validateKnowledgeGraph,
} from "@/lib/chemistry/graph";
import type { NCERTReference } from "@/lib/chemistry/reactions";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const type = url.searchParams.get("type") || "search";
  const id = url.searchParams.get("id")?.trim() || "";
  const query = url.searchParams.get("q")?.trim() || "";
  const ncertClass = Number(url.searchParams.get("class") || "0");
  const chapter = url.searchParams.get("chapter")?.trim() || "";
  const topic = url.searchParams.get("topic")?.trim() || "";

  if (type === "reaction" && id) {
    return NextResponse.json({ graph: getReactionGraph(id), validation: validateKnowledgeGraph() });
  }

  if (type === "pyq" && id) {
    return NextResponse.json({ graph: getPYQGraph(id), validation: validateKnowledgeGraph() });
  }

  if (type === "formula" && id) {
    return NextResponse.json({ graph: getFormulaGraph(id), validation: validateKnowledgeGraph() });
  }

  if (type === "ncert" && (ncertClass === 11 || ncertClass === 12) && chapter && topic) {
    const ref: NCERTReference = { class: ncertClass, chapter, topic };
    return NextResponse.json({ graph: getNCERTGraph(ref), validation: validateKnowledgeGraph() });
  }

  return NextResponse.json({
    results: query ? searchKnowledgeGraph(query, { limit: 30 }) : [],
    validation: validateKnowledgeGraph(),
  });
}
