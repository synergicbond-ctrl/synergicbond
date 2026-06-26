import OpenAI from "openai";
import { NextResponse } from "next/server";
import { fetchSyllabusContext } from "@/lib/aiTutor";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const quizPrompt = `
You are a NEET/JEE Chemistry Quiz Generator.

You generate high-quality MCQs ONLY.

RULES:
- 5 questions per request
- 4 options each (A, B, C, D)
- Only ONE correct answer
- Include difficulty: Easy / Medium / Hard
- Based strictly on syllabus
- No explanations in output
- No chat language
- Output must be structured JSON ONLY

FORMAT:

{
  "questions": [
    {
      "question": "...",
      "options": {
        "A": "...",
        "B": "...",
        "C": "...",
        "D": "..."
      },
      "answer": "A",
      "difficulty": "Easy"
    }
  ]
}
`;

export async function POST(req: Request) {
  try {
    const { chapterId } = await req.json();

    if (!chapterId) {
      return NextResponse.json({ error: "chapterId required" }, { status: 400 });
    }

    const context = fetchSyllabusContext(chapterId);

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: quizPrompt },
        {
          role: "system",
          content: `Chapter Context: ${JSON.stringify(context).slice(0, 4000)}`,
        },
        {
          role: "user",
          content: `Generate 5 MCQs for chapter: ${chapterId}`,
        },
      ],
      temperature: 0.7,
    });

    const raw = completion.choices[0].message.content || "{}";

    return NextResponse.json(JSON.parse(raw));
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "quiz generation failed" }, { status: 500 });
  }
}