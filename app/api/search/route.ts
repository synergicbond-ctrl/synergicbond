import { NextResponse } from "next/server";
import { physical } from "@/lib/masterSyllabus/physical";
import { organic } from "@/lib/masterSyllabus/organic";
import { inorganic } from "@/lib/masterSyllabus/inorganic";

const allChapters = [...physical, ...organic, ...inorganic];

export async function GET(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q")?.toLowerCase() || "";

  if (!query) {
    return NextResponse.json({ results: [] });
  }

  const matches = allChapters.filter((c: any) => 
    c.title.toLowerCase().includes(query) ||
    (c.searchKeywords && (c.searchKeywords as string[]).some((k: string) => k.toLowerCase().includes(query))) ||
    c.concepts.some((concept: any) => concept.title.toLowerCase().includes(query))
  );

  return NextResponse.json({ results: matches });
}
