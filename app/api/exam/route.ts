import { NextResponse } from "next/server";
import { buildMockPaperPrompt } from "@/lib/aiQuestionEngine";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { exam, totalQuestions, targetDifficulty, selectedChapters } = body;

    if (!exam || !selectedChapters) {
      return NextResponse.json({ error: "Exam type and selected chapters are required." }, { status: 400 });
    }

    // Pass the required 2 arguments: selectedChapters array and exam string
    const paperPrompt = buildMockPaperPrompt(selectedChapters, exam);

    // Call your actual LLM/AI provider here using paperPrompt
    const mockPaper = `[Mock Paper Generated] Exam: ${exam}. Total Questions: ${totalQuestions}. Difficulty: ${targetDifficulty}. Syllabus knowledge graph synchronized successfully.`;

    return NextResponse.json({ paper: mockPaper });
  } catch (err: any) {
    return NextResponse.json({ error: "Error generating the mock paper." }, { status: 500 });
  }
}
