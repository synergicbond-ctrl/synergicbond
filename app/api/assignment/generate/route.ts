export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { generateJSON } from "@/lib/gemini";
import { fetchSyllabusContext } from "@/lib/aiTutor";

export async function POST(req: Request) {
  try {
    const {
      topic, chapterId,
      examType = "JEE Main",
      difficulty = "mixed",
      totalQuestions = 10,
      language = "english",
      questionTypes = ["single_correct", "numerical"],
    } = await req.json();

    if (!topic && !chapterId) {
      return NextResponse.json({ error: "topic or chapterId required" }, { status: 400 });
    }

    const context = chapterId ? fetchSyllabusContext(chapterId) : null;
    const contextStr = context ? JSON.stringify(context).slice(0, 2000) : "";
    const langInstruction =
      language === "hindi" ? "Write in Hindi (Devanagari)."
      : language === "hinglish" ? "Write in Hinglish (Hindi in Roman script + English terms)."
      : "Write in English.";

    const prompt = `You are an expert ${examType} Chemistry question setter with 18+ years experience.
Create a ${totalQuestions}-question assignment on: ${topic || chapterId}
Exam: ${examType} | Difficulty: ${difficulty} | Types: ${questionTypes.join(", ")}
${langInstruction}
${contextStr ? `Syllabus Context: ${contextStr}` : ""}

Rules:
- Each question tests a DISTINCT concept
- Use $ for LaTeX formulas
- Include detailed solution for each question

Respond with ONLY this JSON (no markdown, no code blocks):
{
  "assignment": {
    "title": "Assignment on ${topic || chapterId}",
    "topic": "${topic || chapterId}",
    "examType": "${examType}",
    "totalQuestions": ${totalQuestions},
    "totalMarks": 40,
    "duration": "45 minutes",
    "questions": [
      {
        "id": 1,
        "type": "single_correct",
        "difficulty": "medium",
        "subTopic": "sub-topic name",
        "question": "Question text",
        "options": ["A) option1", "B) option2", "C) option3", "D) option4"],
        "correct": "A",
        "marks": 4,
        "negativeMarks": -1,
        "solution": "Step-by-step solution",
        "concept": "Concept tested",
        "tip": "Exam tip"
      }
    ]
  }
}`;

    const raw = await generateJSON(prompt);
    const clean = raw.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const parsed = JSON.parse(clean);

    return NextResponse.json(parsed);
  } catch (error: any) {
    console.error("Assignment error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
