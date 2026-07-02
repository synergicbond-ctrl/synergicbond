import { NextResponse } from "next/server";
import {
  getFormulaById,
  getFormulaChapterSummaries,
  getFormulasForPYQ,
  queryFormulaCards,
} from "@/lib/chemistry/formulas";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id")?.trim() || "";
  const query = url.searchParams.get("q")?.trim() || "";
  const chapter = url.searchParams.get("chapter")?.trim() || "";
  const pyqId = url.searchParams.get("pyqId")?.trim() || "";
  const limit = Number(url.searchParams.get("limit") || "200");

  if (id) {
    const formula = getFormulaById(id);
    return NextResponse.json({
      formulas: formula ? [{ ...formula, relevanceScore: 100 }] : [],
      chapters: getFormulaChapterSummaries(),
      total: formula ? 1 : 0,
    });
  }

  const formulas = pyqId
    ? getFormulasForPYQ(pyqId).filter((formula) => !chapter || formula.chapter === chapter).slice(0, limit)
    : queryFormulaCards({ query, chapter, limit });

  return NextResponse.json({
    formulas,
    chapters: getFormulaChapterSummaries(),
    total: formulas.length,
  });
}
