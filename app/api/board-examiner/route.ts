export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { generateMultimodal } from "@/lib/gemini";
import { createClient } from "@/lib/supabase/server";

// ─────────────────────────────────────────────────────────────────────────────
// /api/board-examiner — AI Board Examiner (Roadmap V2 · Week 11).
//
// Grades a written board answer or uploaded photo/PDF sheet against the marking 
// scheme: awards marks, flags missing keywords, and suggests improvements.
// ─────────────────────────────────────────────────────────────────────────────

const AI_TIMEOUT_MS = 25_000;

function withTimeout<T>(p: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error(`AI timed out after ${ms}ms`)), ms);
    p.then((v) => (clearTimeout(t), resolve(v)), (e) => (clearTimeout(t), reject(e)));
  });
}

export async function POST(req: Request) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Sign in to use the AI Board Examiner." }, { status: 401 });

    const { question, answer, maxMarks = 3, exam = "CBSE", uploadedFile } = await req.json();
    if (!question?.trim()) {
      return NextResponse.json({ error: "Question is required." }, { status: 400 });
    }
    if (!answer?.trim() && !uploadedFile?.localPreview) {
      return NextResponse.json({ error: "Please provide either a written answer or an uploaded sheet." }, { status: 400 });
    }
    
    const marks = Math.min(Math.max(Number(maxMarks) || 3, 1), 10);

    const prompt = `You are a strict but fair ${exam} board chemistry examiner marking to the official marking scheme.
Question (${marks} marks): ${question}
${answer ? `Student's written text: ${answer}` : ""}

Evaluate the student's answer (which may be provided as text and/or an uploaded image/PDF sheet). Award marks per the marking scheme, list the exact keywords/value-points required for full marks that are MISSING, note what was done well, and give concrete improvements.

Respond with ONLY valid JSON (no markdown, no code blocks, no extra text):
{
  "marksAwarded": <number 0-${marks}>,
  "maxMarks": ${marks},
  "verdict": "one-line overall judgement",
  "missingKeywords": ["..."],
  "strengths": ["..."],
  "improvements": ["..."],
  "modelPoints": ["the value-points a full-marks answer must contain"]
}`;

    const contents: any[] = [{ text: prompt }];

    if (uploadedFile?.localPreview) {
      const match = uploadedFile.localPreview.match(/^data:(image\/[a-z]+|application\/pdf);base64,(.+)$/);
      if (match) {
        contents.push({
          inlineData: {
            mimeType: match[1],
            data: match[2]
          }
        });
      }
    }

    const raw = await withTimeout(generateMultimodal(contents), AI_TIMEOUT_MS);
    const clean = raw.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const result = JSON.parse(clean);
    result.maxMarks = marks;
    result.marksAwarded = Math.min(Math.max(Number(result.marksAwarded) || 0, 0), marks);
    return NextResponse.json({ result });
  } catch (error: unknown) {
    console.error("Board examiner error:", error);
    return NextResponse.json(
      { error: "The examiner is unavailable right now — please try again in a moment." },
      { status: 500 }
    );
  }
}
