import { NextResponse } from "next/server";
import { constructAIPrompt, fetchSyllabusContext } from "@/lib/aiTutor";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message, chapterId } = body;

    if (!message || !chapterId) {
      return NextResponse.json({ error: "Message and chapterId are required." }, { status: 400 });
    }

    const syllabusContext = fetchSyllabusContext(chapterId);
    if (!syllabusContext) {
      return NextResponse.json({ error: "Syllabus chapter context not found." }, { status: 404 });
    }

    const prompt = constructAIPrompt(message, syllabusContext);

    // Simulated LLM graph response
    return NextResponse.json({
      reply: `[Syllabus Hydrated] Processing query via syllabus knowledge graph for ${syllabusContext.chapterTitle}. Focus items extracted successfully.`
    });

  } catch (err) {
    return NextResponse.json({ error: "Failed to process AI endpoint." }, { status: 500 });
  }
}
