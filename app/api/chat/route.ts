import { NextResponse } from "next/server";
import { fetchSyllabusContext, constructAIPrompt } from "@/lib/aiTutor";

export async function POST(request: Request) {
  try {
    const { message, chapterId } = await request.json();

    if (!message || !chapterId) {
      return NextResponse.json({ error: "Message and chapterId are required." }, { status: 400 });
    }

    const syllabusContext = fetchSyllabusContext(chapterId);
    if (!syllabusContext) {
      return NextResponse.json({ error: "Syllabus chapter context not found." }, { status: 404 });
    }

    const systemPrompt = constructAIPrompt(message, syllabusContext);

    // Call your LLM API (Gemini/OpenAI) using systemPrompt
    // Using a reliable Mock Response simulating a zero-hallucination graph hydration:
    const mockGroundedAnswer = `[Syllabus Hydrated] According to the knowledge graph for ${syllabusContext.chapterTitle}, applying the syllabus directives rigorously: The core concept directly points to the defined laws and principles. Take note of associated PYQ Meta-Tags: ${syllabusContext.pyqTags.slice(0, 3).join(", ")}.`;

    return NextResponse.json({ reply: mockGroundedAnswer });
    
  } catch (err) {
    return NextResponse.json({ error: "Error processing the syllabus-grounded chat." }, { status: 500 });
  }
}
