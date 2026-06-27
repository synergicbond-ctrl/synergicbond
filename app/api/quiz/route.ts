export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { fetchSyllabusContext } from "@/lib/aiTutor";

export async function POST(req: Request) {
  try {
    const OpenAI = (await import("openai")).default;
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

    const body = await req.json();
    const {
      chapterId = "mole-concept",
      difficulty = "medium",
      count = 5,
      exam = "JEE",
      language = "english",
    } = body;

    const context = fetchSyllabusContext(chapterId);
    const contextStr = JSON.stringify(context).slice(0, 3000);

    const difficultyMap: Record<string, string> = {
      easy: "straightforward, 1-step conceptual questions suitable for NEET",
      medium: "moderate 2-step application questions for JEE Main level",
      hard: "complex multi-step reasoning questions for JEE Advanced level",
    };

    const langInstruction =
      language === "hindi"
        ? "Write questions and options in Hindi (Devanagari script)."
        : language === "hinglish"
        ? "Write questions and options in Hinglish (Hindi words in Roman script mixed with English)."
        : "Write questions and options in English.";

    const systemPrompt = `You are a NEET/JEE Chemistry question generator.
Generate exactly ${count} multiple choice questions.
${langInstruction}
Difficulty: ${difficultyMap[difficulty] || difficultyMap.medium}
Exam standard: ${exam}

RULES:
- Each question must test a distinct concept
- All 4 options must be plausible (no obvious wrong answers)
- Only one correct answer per question
- Include LaTeX for formulas using $...$ notation
- Questions must be strictly from the provided syllabus context

RESPOND IN THIS EXACT JSON FORMAT (no markdown, no extra text):
{
  "questions": [
    {
      "question": "Question text here",
      "options": { "A": "option1", "B": "option2", "C": "option3", "D": "option4" },
      "answer": "A",
      "difficulty": "${difficulty}",
      "explanation": "Brief explanation of why A is correct"
    }
  ]
}`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        {
          role: "user",
          content: `Chapter: ${chapterId}\nSyllabus Context: ${contextStr}\n\nGenerate ${count} ${difficulty} questions for ${exam}.`,
        },
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
    });

    const raw = completion.choices[0]?.message?.content || "{}";
    const parsed = JSON.parse(raw);

    return NextResponse.json({
      questions: parsed.questions || [],
      chapterId,
      difficulty,
      exam,
      count: parsed.questions?.length || 0,
    });
  } catch (error: any) {
    console.error("Quiz generation error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
