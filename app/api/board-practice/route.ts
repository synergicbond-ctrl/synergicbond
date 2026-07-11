export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { generateJSON } from "@/lib/gemini";
import { createClient } from "@/lib/supabase/server";
import { guardAiRequest } from "@/lib/ai/guardAiRequest";
import { getBoardQuestionType } from "@/lib/cbse/practice";

// ─────────────────────────────────────────────────────────────────────────────
// POST /api/board-practice — generates ONE board-style SUBJECTIVE question for a
// CBSE class/chapter/type (2/3/5-mark, case-based, competency, HOTS). AI-only
// (Gemini), like /api/board-examiner. No verified subjective bank exists, so
// these are generated on demand — never faked. On AI failure it returns a clear
// error, not a placeholder question. Grade the student's answer via
// /api/board-examiner.
// ─────────────────────────────────────────────────────────────────────────────

const AI_TIMEOUT_MS = 25_000;

function withTimeout<T>(p: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error(`AI timed out after ${ms}ms`)), ms);
    p.then((v) => (clearTimeout(t), resolve(v)), (e) => (clearTimeout(t), reject(e)));
  });
}

export async function POST(req: Request) {
  try {
    const gate = await guardAiRequest(req, { bucket: "board-practice" });
    if (!gate.ok) return gate.response;
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Sign in to generate board practice questions." }, { status: 401 });

    const body = await req.json();
    const classNumber = Number(body.classNumber) === 12 ? 12 : 11;
    // Board isolation: the prompt speaks ONLY the requesting board's language.
    const board = ["CBSE", "ISC", "State Board"].includes(body.board) ? body.board : "CBSE";
    const type = getBoardQuestionType(String(body.typeKey));
    if (!type || type.kind !== "subjective") {
      return NextResponse.json({ error: "Unknown or non-subjective question type." }, { status: 400 });
    }
    const marks = type.marks;
    const chapter: string = typeof body.chapter === "string" && body.chapter.trim() ? body.chapter.trim() : "any Class " + classNumber + " chapter";

    const styleByKey: Record<string, string> = {
      "sa-2": "a concise Short-Answer question answerable in 2-3 sentences",
      "sa-3": "a Short-Answer question requiring a structured 3-mark response",
      "la-5": "a Long-Answer question requiring a full 5-mark structured answer",
      "case-based": "a Case-Based question: a short 3-4 line source passage/scenario followed by sub-questions",
      "competency": "a Competency-Based application question set in a real-world context",
      "hots": "a Higher-Order-Thinking (HOTS) question requiring analysis/reasoning, not recall",
    };
    const style = styleByKey[type.key] ?? "a board-style question";

    const prompt = `You are a ${board} Class ${classNumber} Chemistry board paper setter.
Create ${style} worth ${marks} marks strictly from the ${board} Class ${classNumber} chapter "${chapter}".
It must match the official ${board} board exam standard and be factually correct chemistry.

Respond with ONLY this JSON (no markdown):
{
  "question": "the full question text (include the passage/sub-parts if case-based)",
  "markingScheme": ["value-point 1 (x marks)", "value-point 2 (y marks)"],
  "modelAnswer": "a complete model answer a topper would write"
}`;

    const raw = await withTimeout(generateJSON(prompt), AI_TIMEOUT_MS);
    const clean = raw.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const parsed = JSON.parse(clean);
    if (!parsed.question) return NextResponse.json({ error: "The generator returned an unusable question — try again." }, { status: 502 });

    return NextResponse.json({
      question: String(parsed.question),
      markingScheme: Array.isArray(parsed.markingScheme) ? parsed.markingScheme.map(String) : [],
      modelAnswer: String(parsed.modelAnswer ?? ""),
      marks,
    });
  } catch (error) {
    console.error("[board-practice] error:", error);
    return NextResponse.json({ error: "The question generator is unavailable right now — please try again in a moment." }, { status: 500 });
  }
}
