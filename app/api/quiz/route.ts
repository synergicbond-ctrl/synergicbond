export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { generateJSON } from "@/lib/gemini";
import { fetchSyllabusContext } from "@/lib/aiTutor";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Sign in to use the quiz engine." }, { status: 401 });

    const {
      chapterId = "mole-concept",
      difficulty = "medium",
      count = 5,
      exam = "JEE Main",
      language = "english",
      topic,
    } = await req.json();

    const context = fetchSyllabusContext(chapterId);
    const contextStr = JSON.stringify(context).slice(0, 2000);

    const langInstruction =
      language === "hindi" ? "Write questions in Hindi (Devanagari script)."
      : language === "hinglish" ? "Write questions in Hinglish (Hindi words in Roman script + English chemistry terms)."
      : "Write questions in English.";

    const prompt = `You are a NEET/JEE Chemistry question generator.
Generate exactly ${count} multiple choice questions on: ${topic || chapterId}
Exam: ${exam} | Difficulty: ${difficulty}
${langInstruction}
Syllabus Context: ${contextStr}

Rules:
- Each question tests a DISTINCT concept
- All 4 options must be plausible
- Only one correct answer
- Use $ for LaTeX formulas inline

Respond with ONLY this JSON (no markdown, no code blocks):
{
  "questions": [
    {
      "id": 1,
      "question": "Question text",
      "options": {"A": "option1", "B": "option2", "C": "option3", "D": "option4"},
      "answer": "A",
      "difficulty": "${difficulty}",
      "explanation": "Why A is correct"
    }
  ]
}`;

    const raw = await generateJSON(prompt);
    const clean = raw.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const parsed = JSON.parse(clean);

    return NextResponse.json({ questions: parsed.questions || [], chapterId, difficulty, exam });
  } catch (error: any) {
    console.error("Quiz error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
