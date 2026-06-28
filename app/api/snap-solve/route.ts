export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { randomUUID } from "crypto";
import {
  SnapSolveResponseSchema,
  OCR_CONFIDENCE_THRESHOLD,
  type SnapSolveResponse,
} from "@/lib/snapSolveTypes";

// Always return a schema-valid payload so the client contract never breaks.
function buildFallback(parsedProblem: string, reason: string): SnapSolveResponse {
  return {
    id: randomUUID(),
    classification: "General",
    ocrConfidence: 0,
    parsedProblem: parsedProblem || "Could not read the problem from the image.",
    solution: {
      coreAnswer: reason,
      steps: [],
      exceptionFlag: undefined,
    },
    fallbackTriggered: true,
    recommendedPractice: ["Retake the photo in better lighting", "Crop to a single question"],
  };
}

const PROMPT = `You are an expert JEE/NEET Chemistry & Physics solver and OCR engine.
Read the problem in the image and solve it completely.

Return ONLY a single JSON object (no markdown, no code fences) matching EXACTLY this shape:
{
  "classification": "Organic" | "Inorganic" | "Physical" | "Analytical" | "General",
  "ocrConfidence": number,           // 0.0-1.0, how clearly you could read the image
  "parsedProblem": string,           // clean restatement of the question
  "solution": {
    "coreAnswer": string,            // the final answer with units
    "steps": [
      { "stepNumber": number, "title": string, "equation": string, "explanation": string }
    ],
    "exceptionFlag": string          // optional; a high-yield exception/trap if relevant, else omit
  },
  "recommendedPractice": [string]    // 2-4 high-yield topics to practice next
}

RULES:
- All chemical equations, mechanisms and math in "equation" / "coreAnswer" / "explanation"
  MUST be clean LaTeX. Inside JSON use double-backslashes (e.g. "R-X + Mg \\\\rightarrow R-MgX").
- If the image is blurry/unreadable, set a low ocrConfidence and still return your best guess.
- Do NOT include any text outside the JSON object.`;

function langLine(language: string): string {
  if (language === "hindi") return "Write parsedProblem, titles and explanations in Hindi (Devanagari).";
  if (language === "hinglish") return "Write explanations in Hinglish (Hindi in Roman script + English terms).";
  return "Write in English.";
}

function stripFences(s: string): string {
  return s.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
}

export async function POST(request: Request) {
  try {
    const { imageBase64, language = "english" } = await request.json();
    if (!imageBase64) return NextResponse.json({ error: "Image required" }, { status: 400 });

    const base64Data = imageBase64.startsWith("data:") ? imageBase64.split(",")[1] : imageBase64;
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            { inlineData: { mimeType: "image/jpeg", data: base64Data } },
            { text: `${PROMPT}\n\n${langLine(language)}` },
          ],
        },
      ],
      config: { responseMimeType: "application/json", temperature: 0.2 },
    });

    const raw = stripFences(response.text ?? "");

    // Parse the model output safely — never trust the inference payload.
    let candidate: unknown;
    try {
      candidate = JSON.parse(raw);
    } catch {
      return NextResponse.json(buildFallback("", "The solver returned an unreadable response. Please try again."));
    }

    // Inject server-owned defaults so validation is deterministic.
    if (candidate && typeof candidate === "object") {
      const c = candidate as Record<string, unknown>;
      c.id ??= randomUUID();
      if (typeof c.fallbackTriggered !== "boolean") c.fallbackTriggered = false;
    }

    // Strict Zod contract validation before delivering to the view.
    const result = SnapSolveResponseSchema.safeParse(candidate);
    if (!result.success) {
      console.error("snap-solve schema drift:", result.error.flatten());
      return NextResponse.json(buildFallback("", "We couldn't structure this solution reliably. Please retake the photo."));
    }

    // Server-side confidence gate — force fallback when OCR is too weak.
    const payload = result.data;
    if (payload.ocrConfidence < OCR_CONFIDENCE_THRESHOLD) {
      payload.fallbackTriggered = true;
    }

    return NextResponse.json(payload);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Snap solve failed";
    console.error("Snap solve error:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
