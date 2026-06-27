export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { fetchSyllabusContext } from "@/lib/aiTutor";

const MARKING_SCHEMES: Record<string, Record<string, { marks: number; negative: number }>> = {
  "JEE Main": {
    single_correct: { marks: 4, negative: -1 },
    numerical: { marks: 4, negative: 0 },
    multiple_correct: { marks: 4, negative: -2 },
  },
  "JEE Advanced": {
    single_correct: { marks: 3, negative: -1 },
    numerical: { marks: 3, negative: 0 },
    multiple_correct: { marks: 4, negative: -2 },
    matrix_match: { marks: 3, negative: 0 },
  },
  NEET: {
    single_correct: { marks: 4, negative: -1 },
  },
  GATE: {
    single_correct: { marks: 1, negative: -0.33 },
    numerical: { marks: 2, negative: 0 },
  },
  NSEC: { single_correct: { marks: 3, negative: 0 } },
  INChO: { single_correct: { marks: 5, negative: 0 }, numerical: { marks: 5, negative: 0 } },
  IChO: { single_correct: { marks: 5, negative: 0 }, numerical: { marks: 10, negative: 0 } },
};

export async function POST(req: Request) {
  try {
    const OpenAI = (await import("openai")).default;
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

    const {
      topic,
      chapterId,
      examType = "JEE Main",
      difficulty = "mixed",
      totalQuestions = 10,
      language = "english",
      questionTypes = ["single_correct", "numerical", "reasoning"],
    } = await req.json();

    if (!topic && !chapterId) {
      return NextResponse.json({ error: "topic or chapterId required" }, { status: 400 });
    }

    const context = chapterId ? fetchSyllabusContext(chapterId) : null;
    const contextStr = context ? JSON.stringify(context).slice(0, 3000) : "";
    const marking = MARKING_SCHEMES[examType] || MARKING_SCHEMES["JEE Main"];
    const markingStr = Object.entries(marking)
      .map(([type, m]) => `${type}: +${m.marks}/${m.negative}`)
      .join(", ");

    const langInstruction =
      language === "hindi"
        ? "Write all questions in Hindi (Devanagari script). Keep formulas in standard notation."
        : language === "hinglish"
        ? "Write questions in Hinglish (Hindi words in Roman script + English chemistry terms)."
        : "Write all questions in English.";

    const difficultyDist =
      difficulty === "easy" ? "All easy questions (NCERT level)"
      : difficulty === "medium" ? "All medium questions (JEE Main level)"
      : difficulty === "hard" ? "All hard questions (JEE Advanced/Olympiad level)"
      : "Mix: 30% easy, 40% medium, 30% hard";

    const systemPrompt = `You are an expert ${examType} Chemistry question setter with 18+ years experience.

Create a ${totalQuestions}-question assignment on: ${topic || chapterId}
Exam: ${examType} | Marking: ${markingStr}
Difficulty: ${difficultyDist}
Question Types to include: ${questionTypes.join(", ")}
${langInstruction}

${contextStr ? `Syllabus Context:\n${contextStr}\n` : ""}

RULES:
- Each question must test a DISTINCT concept — no repetition
- Use LaTeX for ALL formulas ($...$ inline, $$...$$ display)
- Numerical answers must be single numbers (integer or decimal to 2 places)
- All 4 MCQ options must be plausible
- Include detailed step-by-step solution for each question
- Map each question to the correct sub-topic

RESPOND IN THIS EXACT JSON FORMAT ONLY (no markdown, no extra text):
{
  "assignment": {
    "title": "Assignment title here",
    "topic": "${topic || chapterId}",
    "examType": "${examType}",
    "totalQuestions": ${totalQuestions},
    "totalMarks": <calculated total>,
    "duration": "<estimated minutes>",
    "markingScheme": "${markingStr}",
    "questions": [
      {
        "id": 1,
        "type": "single_correct",
        "difficulty": "easy|medium|hard",
        "subTopic": "specific sub-topic name",
        "question": "Question text with LaTeX",
        "options": ["A) ...", "B) ...", "C) ...", "D) ..."],
        "correct": "A",
        "marks": 4,
        "negativeMarks": -1,
        "solution": "Full step-by-step solution",
        "concept": "Core concept being tested",
        "tip": "Exam trick or shortcut"
      }
    ]
  }
}`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Generate ${totalQuestions} questions for ${topic || chapterId} at ${examType} level.` },
      ],
      response_format: { type: "json_object" },
      temperature: 0.6,
      max_tokens: 4000,
    });

    const raw = completion.choices[0]?.message?.content || "{}";
    const parsed = JSON.parse(raw);

    return NextResponse.json(parsed);
  } catch (error: any) {
    console.error("Assignment generation error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
