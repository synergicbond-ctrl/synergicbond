export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { generateJSON } from "@/lib/gemini";
import { createClient } from "@/lib/supabase/server";
import { guardAiRequest } from "@/lib/ai/guardAiRequest";

// ─────────────────────────────────────────────────────────────────────────────
// POST /api/engine/generate — the learning engine's single AI generation route
// (follows the /api/board-practice pattern: auth + Gemini + hard timeout +
// honest failure, never a placeholder).
//
// kinds:
//   illustration (level: basic|intermediate|advanced)   → worked example with
//     thinking process, full solution, fast method, alternate method, mistakes
//   misc         (level: easy|medium|hard|challenge)    → mixed-concept example
//   innovation   (pattern: concept-combination|multi-chapter|examiner|surprise)
//     → NEW-pattern question (explicitly NOT a PYQ) with answer + explanation
//   numeric      (format: integer|numerical|decimal|scientific) → auto-gradable
//     numeric-answer question (JEE Main/Adv layer)
//   advanced     (pattern: multi-correct|matrix-match|list-match|paragraph|
//     numerical-response|challenge) → JEE Advanced format, model answer
//     revealed for SELF-grading (exotic formats are never fake auto-graded)
// ─────────────────────────────────────────────────────────────────────────────

const AI_TIMEOUT_MS = 25_000;

function withTimeout<T>(p: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error(`AI timed out after ${ms}ms`)), ms);
    p.then((v) => (clearTimeout(t), resolve(v)), (e) => (clearTimeout(t), reject(e)));
  });
}

const ILLUSTRATION_JSON = `{
  "question": "the full question text",
  "thinking": "the thinking process — how a topper decides the approach",
  "solution": "the complete step-by-step solution",
  "fastMethod": "the fastest exam method / shortcut",
  "alternateMethod": "one alternate valid method (or empty string)",
  "commonMistakes": ["mistake 1", "mistake 2"]
}`;

export async function POST(req: Request) {
  try {
    const gate = await guardAiRequest(req, { bucket: "engine-generate" });
    if (!gate.ok) return gate.response;
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Sign in to use the learning engine." }, { status: 401 });

    const body = await req.json();
    const kind = String(body.kind ?? "");
    const exam = ["NEET", "JEE Main", "JEE Advanced"].includes(body.exam) ? body.exam : "JEE Main";
    const chapter = typeof body.chapter === "string" && body.chapter.trim() ? body.chapter.trim().slice(0, 120) : "";
    const topic = typeof body.topic === "string" ? body.topic.trim().slice(0, 120) : "";
    if (!chapter) return NextResponse.json({ error: "chapter is required." }, { status: 400 });
    const scope = topic ? `the topic "${topic}" of the chapter "${chapter}"` : `the chapter "${chapter}"`;

    let prompt = "";
    if (kind === "illustration" || kind === "misc") {
      const level = String(body.level ?? "basic");
      const framing =
        kind === "misc"
          ? `Create ONE ${level}-difficulty MIXED-CONCEPT example that combines at least two ideas from ${scope}`
          : `Create ONE ${level}-level solved illustration strictly from ${scope}`;
      prompt = `You are a senior ${exam} chemistry faculty. ${framing}, matching the real ${exam} exam standard, chemically correct.
Respond with ONLY this JSON (no markdown): ${ILLUSTRATION_JSON}`;
    } else if (kind === "innovation") {
      const pattern = String(body.pattern ?? "examiner");
      const patternText: Record<string, string> = {
        "concept-combination": "combines two or more distinct concepts of the chapter in one question",
        "multi-chapter": `links ${scope} with ONE other chemistry chapter in a single question`,
        examiner: "is exactly what a shrewd examiner would set to catch rote learners",
        surprise: "uses an unfamiliar framing or data presentation students have not seen in PYQs",
      };
      prompt = `You are the question-design lab of a ${exam} coaching institute. Invent ONE brand-NEW question (NOT a past-year question, no recycled stems) from ${scope} that ${patternText[pattern] ?? patternText.examiner}. Chemically rigorous, ${exam} standard.
Respond with ONLY this JSON (no markdown):
{ "question": "...", "answer": "the final answer", "explanation": "why, step by step", "conceptsTested": ["..."] }`;
    } else if (kind === "numeric") {
      const format = String(body.format ?? "numerical");
      const formatText: Record<string, string> = {
        integer: "a single INTEGER from 0-99",
        numerical: "a numerical value (state it to appropriate significant figures)",
        decimal: "a decimal number rounded to exactly TWO decimal places",
        scientific: "a value in scientific notation a×10^n (give a to 2 decimals and integer n)",
      };
      prompt = `You are a ${exam} paper setter. Create ONE numeric-answer chemistry question from ${scope} whose answer is ${formatText[format] ?? formatText.numerical}. ${exam} standard, chemically correct, all data needed included.
Respond with ONLY this JSON (no markdown):
{ "question": "...", "answer": "the numeric answer as a plain number string, e.g. \\"42\\" or \\"3.25\\" or \\"6.02e23\\"", "unit": "unit or empty string", "solution": "full worked solution", "tolerancePct": 1 }`;
    } else if (kind === "advanced") {
      const pattern = String(body.pattern ?? "challenge");
      const patternText: Record<string, string> = {
        "multi-correct": "a ONE-OR-MORE-correct MCQ with options A-D (state ALL correct options)",
        "matrix-match": "a matrix-match question (Column I items P-S vs Column II items 1-5) with the full matching",
        "list-match": "a List-I / List-II matching question with four option combinations A-D",
        paragraph: "a short data/experiment paragraph followed by TWO linked sub-questions",
        "numerical-response": "a numerical-response question with a single numeric answer",
        challenge: "an advanced multi-concept challenge problem beyond routine difficulty",
      };
      prompt = `You are a JEE Advanced paper setter. Create ${patternText[pattern] ?? patternText.challenge} strictly from ${scope}. Real JEE Advanced rigour, chemically correct.
Respond with ONLY this JSON (no markdown):
{ "question": "the full question incl. columns/options/passage as plain text", "modelAnswer": "the exact correct answer(s)", "explanation": "complete reasoning" }`;
    } else {
      return NextResponse.json({ error: "Unknown kind." }, { status: 400 });
    }

    const raw = await withTimeout(generateJSON(prompt), AI_TIMEOUT_MS);
    const clean = raw.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const parsed = JSON.parse(clean);
    if (!parsed.question) {
      return NextResponse.json({ error: "The generator returned an unusable item — try again." }, { status: 502 });
    }
    return NextResponse.json(parsed);
  } catch (error) {
    console.error("[engine/generate] error:", error);
    return NextResponse.json(
      { error: "The generator is unavailable right now — please try again in a moment." },
      { status: 500 }
    );
  }
}
