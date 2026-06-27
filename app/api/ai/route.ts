export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import OpenAI from "openai";
import { NextResponse } from "next/server";
import { constructAIPrompt, fetchSyllabusContext } from "@/lib/aiTutor";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message, chapterId } = body;

    if (!message || !chapterId) {
      return NextResponse.json({ error: "message and chapterId are required." }, { status: 400 });
    }

    const syllabusContext = fetchSyllabusContext(chapterId);
    if (!syllabusContext) {
      return NextResponse.json({ error: "Chapter not found in syllabus." }, { status: 404 });
    }

    const prompt = constructAIPrompt(message, syllabusContext);

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a JEE/NEET Chemistry tutor. Answer concisely and exam-focused.",
        },
        { role: "user", content: prompt },
      ],
    });

    const reply = completion.choices[0]?.message?.content ?? "No response generated.";
    return NextResponse.json({ reply });
  } catch (err) {
    console.error("AI route error:", err);
    return NextResponse.json({ error: "Failed to process AI request." }, { status: 500 });
  }
}
