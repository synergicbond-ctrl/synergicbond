export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { generateJSON } from "@/lib/gemini";
import { buildMockPaperPrompt } from "@/lib/aiQuestionEngine";
import { createClient } from "@/lib/supabase/server";

const MARKING_SCHEMES: Record<string, string> = {
  "JEE Main": "Single correct: +4/-1.",
  "JEE Advanced": "Single correct: +3/-1. Multi-correct: +4/-2. Integer: +3/0.",
  "NEET": "Single correct: +4/-1.",
  "GATE": "MCQ 1 mark: +1/-0.33. MCQ 2 mark: +2/-0.66. NAT: no negative.",
  "NSEC": "Single correct: +3/0.",
  "INChO": "Mixed: +5/0.",
  "IChO": "Mixed: +10/0.",
};

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Sign in to generate an exam." }, { status: 401 });

    const { exam, totalQuestions, targetDifficulty, selectedChapters, language = "english" } = await request.json();

    if (!exam || !selectedChapters) {
      return NextResponse.json({ error: "Exam type and chapters required." }, { status: 400 });
    }

    const paperPrompt = buildMockPaperPrompt(selectedChapters, exam);
    const marking = MARKING_SCHEMES[exam] || MARKING_SCHEMES["JEE Main"];
    const langInstruction =
      language === "hindi" ? "Write in Hindi (Devanagari)."
      : language === "hinglish" ? "Write in Hinglish."
      : "Write in English.";

    const prompt = `${paperPrompt}
Marking Scheme: ${marking}
Total Questions: ${totalQuestions || 20}
Difficulty: ${targetDifficulty || "mixed"}
${langInstruction}

Rules:
- Questions must come from specified chapters only
- Use $ for LaTeX formulas
- Distribute difficulty: 30% easy, 40% medium, 30% hard

Respond with ONLY this JSON (no markdown, no code blocks):
{
  "exam": "${exam}",
  "markingScheme": "${marking}",
  "totalQuestions": ${totalQuestions || 20},
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
          "explanation": "Why correct",
          "difficulty": "medium",
          "marks": 4,
          "negativeMarks": -1
        }
      ]
    }
  ]
}`;

    const raw = await generateJSON(prompt);
    const clean = raw.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const paper = JSON.parse(clean);

    return NextResponse.json({ paper });
  } catch (err: unknown) {
    console.error("Exam error:", err);
    return NextResponse.json({ error: "Error generating mock paper." }, { status: 500 });
  }
}
