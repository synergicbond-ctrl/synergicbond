export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { buildMockPaperPrompt } from "@/lib/aiQuestionEngine";

const MARKING_SCHEMES: Record<string, string> = {
  "JEE Main": "Single correct: +4/-1. No partial marking.",
  "JEE Advanced": "Single correct: +3/-1. Multi-correct: +4 full, partial +1 to +3 per correct, -2 for wrong. Integer type: +3/0.",
  "NEET": "Single correct: +4/-1.",
  "GATE": "MCQ: +1 or +2 / -0.33 or -0.66. NAT (Numerical): +1 or +2 / 0.",
  "Olympiad": "Positive marking only. No negative marking.",
};

export async function POST(request: Request) {
  try {
    const OpenAI = (await import("openai")).default;
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

    const body = await request.json();
    const { exam, totalQuestions, targetDifficulty, selectedChapters, language = "english" } = body;

    if (!exam || !selectedChapters || !Array.isArray(selectedChapters)) {
      return NextResponse.json(
        { error: "Exam type and selected chapters are required." },
        { status: 400 }
      );
    }

    const paperPrompt = buildMockPaperPrompt(selectedChapters, exam);
    const markingScheme = MARKING_SCHEMES[exam] || MARKING_SCHEMES["JEE Main"];

    const langInstruction =
      language === "hindi"
        ? "Write all questions and options in Hindi (Devanagari script)."
        : language === "hinglish"
        ? "Write questions in Hinglish (Hindi words in Roman script mixed with English)."
        : "Write questions in English.";

    const systemPrompt = `You are the SYNERGIC BOND Exam Generation Engine — an expert NEET/JEE/GATE Chemistry paper setter.

${paperPrompt}

Marking Scheme for ${exam}: ${markingScheme}
Total Questions: ${totalQuestions || selectedChapters.reduce((s: number, c: any) => s + (c.questionsAllocated || 5), 0)}
Difficulty: ${targetDifficulty || "mixed"}
${langInstruction}

RULES:
- Questions must be strictly from the provided chapters
- Use LaTeX for all chemical equations and formulas ($...$ notation)
- Each question must have exactly 4 options (A, B, C, D)
- Distribute difficulty: 30% easy, 40% medium, 30% hard (unless specified)
- Include PYQ-style questions where relevant

RESPOND IN THIS EXACT JSON FORMAT only (no markdown):
{
  "exam": "${exam}",
  "markingScheme": "${markingScheme}",
  "totalQuestions": <number>,
  "sections": [
    {
      "chapter": "chapter name",
      "questions": [
        {
          "id": 1,
          "type": "single_correct",
          "question": "Question text",
          "options": ["A) ...", "B) ...", "C) ...", "D) ..."],
          "correct": "A",
          "explanation": "Why A is correct",
          "difficulty": "easy|medium|hard",
          "concept": "Concept name",
          "marks": 4,
          "negativeMarks": -1
        }
      ]
    }
  ]
}`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Generate the full mock paper now.` },
      ],
      response_format: { type: "json_object" },
      temperature: 0.6,
      max_tokens: 4000,
    });

    const raw = completion.choices[0]?.message?.content || "{}";
    const paper = JSON.parse(raw);

    return NextResponse.json({ paper });
  } catch (err: any) {
    console.error("Exam generation error:", err);
    return NextResponse.json({ error: "Error generating the mock paper." }, { status: 500 });
  }
}
