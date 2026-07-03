export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { generateJSON } from "@/lib/gemini";
import { createClient } from "@/lib/supabase/server";
import { getBlueprint } from "@/lib/examBlueprints";
import { ALL_PYQ_QUESTIONS, getByExam } from "@/lib/pyq";
import type { PYQExam } from "@/lib/pyq";

// ─────────────────────────────────────────────────────────────────────────────
// /api/exam — real-pattern paper generation (Week 5A rebuild).
//
// Sizes come from lib/examBlueprints (NEET 45 · JEE Main 25 · JEE Adv 18),
// not client-supplied counts. AI generation runs behind a hard timeout; on
// timeout/failure the paper is built from the verified PYQ bank instead
// (never mock data), flagged `degraded: true` with the honest actual count.
// ─────────────────────────────────────────────────────────────────────────────

const AI_TIMEOUT_MS = 20_000;

interface PaperQuestion {
  id: string;
  question: string;
  options: Record<string, string>;
  correct: string;
  explanation: string;
  difficulty: string;
  chapter: string;
  topic?: string;
  /** PYQ SSOT id when from the verified bank — lets the server re-grade from SSOT. */
  questionId?: string;
}

function withTimeout<T>(p: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error(`AI generation timed out after ${ms}ms`)), ms);
    p.then(
      (v) => (clearTimeout(t), resolve(v)),
      (e) => (clearTimeout(t), reject(e))
    );
  });
}

/** Fisher–Yates on a copy. */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Verified-PYQ fallback paper — only real questions, honest about count. */
function buildFallbackPaper(exam: PYQExam, target: number) {
  const bank = getByExam(ALL_PYQ_QUESTIONS, exam).filter((q) => q.options && q.answer);
  const picked = shuffle(bank).slice(0, target);
  const questions: PaperQuestion[] = picked.map((q) => ({
    id: q.id,
    questionId: q.id,
    question: q.question,
    options: q.options as Record<string, string>,
    correct: q.answer,
    explanation: q.explanation,
    difficulty: q.difficulty,
    chapter: q.chapter,
    topic: q.subtopic,
  }));
  return { questions, available: bank.length };
}

/** Normalise the AI paper shape (sections → flat questions, options → keyed). */
function normalizeAiPaper(raw: string, exam: string): PaperQuestion[] {
  const clean = raw.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
  const parsed = JSON.parse(clean);
  const sections: Array<{ chapter?: string; questions?: unknown[] }> = parsed.sections ?? [];
  const out: PaperQuestion[] = [];
  for (const section of sections) {
    for (const q of section.questions ?? []) {
      const item = q as Record<string, unknown>;
      const rawOptions = item.options;
      let options: Record<string, string> | null = null;
      if (Array.isArray(rawOptions)) {
        options = {};
        rawOptions.forEach((opt, i) => {
          const key = ["A", "B", "C", "D", "E"][i];
          if (key) options![key] = String(opt).replace(/^[A-E][).\s]+\s*/, "");
        });
      } else if (rawOptions && typeof rawOptions === "object") {
        options = Object.fromEntries(Object.entries(rawOptions).map(([k, v]) => [k, String(v)]));
      }
      const correct = String(item.correct ?? "").trim().charAt(0).toUpperCase();
      if (!options || !options[correct] || !item.question) continue; // drop malformed AI output
      out.push({
        id: `ai-${exam}-${out.length + 1}`,
        question: String(item.question),
        options,
        correct,
        explanation: String(item.explanation ?? ""),
        difficulty: String(item.difficulty ?? "medium"),
        chapter: String(section.chapter ?? "Mixed"),
      });
    }
  }
  return out;
}

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Sign in to generate an exam." }, { status: 401 });

    const { exam, language = "english" } = await request.json();
    const blueprint = getBlueprint(exam);
    if (!blueprint) {
      return NextResponse.json({ error: "Unsupported exam. Choose NEET, JEE Main or JEE Advanced." }, { status: 400 });
    }

    const target = blueprint.totalQuestions;
    const basePaper = {
      exam: blueprint.exam,
      markingScheme: blueprint.markingLabel,
      marksCorrect: blueprint.marksCorrect,
      marksWrong: blueprint.marksWrong,
      note: blueprint.note ?? null,
    };

    // ── AI path with hard timeout ────────────────────────────────────────────
    try {
      const langInstruction =
        language === "hindi" ? "Write in Hindi (Devanagari)."
        : language === "hinglish" ? "Write in Hinglish."
        : "Write in English.";
      const prompt = `You are the SYNERGIC BOND Exam Generation Engine.
Generate a rigorous ${exam} chemistry mock paper at real exam standard.
Marking Scheme: ${blueprint.markingLabel}
Total Questions: ${target}
Difficulty: mixed (30% easy, 40% medium, 30% hard)
Cover the breadth of the official ${exam} chemistry syllabus.
${langInstruction}

Rules:
- Single-correct MCQs only, exactly 4 options each
- Use $ for LaTeX formulas
Respond with ONLY this JSON (no markdown):
{"sections":[{"chapter":"chapter name","questions":[{"id":1,"question":"...","options":["...","...","...","..."],"correct":"A","explanation":"...","difficulty":"medium"}]}]}`;

      const raw = await withTimeout(generateJSON(prompt), AI_TIMEOUT_MS);
      const questions = normalizeAiPaper(raw, exam);
      // AI must deliver at least 80% of the paper to count as a real paper.
      if (questions.length >= Math.ceil(target * 0.8)) {
        return NextResponse.json({
          paper: { ...basePaper, totalQuestions: questions.slice(0, target).length, questions: questions.slice(0, target) },
          degraded: false,
          source: "ai",
        });
      }
      throw new Error(`AI returned only ${questions.length}/${target} usable questions`);
    } catch (aiErr) {
      console.warn("[exam] AI generation unavailable, using verified PYQ fallback:", aiErr instanceof Error ? aiErr.message : aiErr);
    }

    // ── Verified PYQ fallback ────────────────────────────────────────────────
    const { questions, available } = buildFallbackPaper(blueprint.exam, target);
    if (questions.length === 0) {
      return NextResponse.json({ error: "No questions available for this exam right now." }, { status: 503 });
    }
    return NextResponse.json({
      paper: { ...basePaper, totalQuestions: questions.length, questions },
      degraded: questions.length < target,
      source: "verified-pyq-fallback",
      fallbackNote:
        questions.length < target
          ? `AI generation was unavailable — this paper uses all ${questions.length} verified ${exam} PYQs currently in the bank (real paper size: ${target}).`
          : `AI generation was unavailable — this paper was built from verified ${exam} PYQs (${available} in bank).`,
    });
  } catch (err: unknown) {
    console.error("Exam error:", err);
    return NextResponse.json({ error: "Error generating mock paper." }, { status: 500 });
  }
}
