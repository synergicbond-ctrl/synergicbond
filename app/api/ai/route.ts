export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { constructAIPrompt, fetchSyllabusContext } from "@/lib/aiTutor";
import { generateText } from "@/lib/gemini";

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
    const reply = await generateText(prompt);
    return NextResponse.json({ reply });
  } catch (err) {
    console.error("AI route error:", err);
    return NextResponse.json({ error: "Failed to process AI request." }, { status: 500 });
  }
}
