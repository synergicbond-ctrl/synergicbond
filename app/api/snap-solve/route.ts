export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { randomUUID } from "crypto";
import {
  SnapSolveResponseSchema,
  OCR_CONFIDENCE_THRESHOLD,
  type SnapSolveResponse,
  type SnapSolveClassification,
} from "@/lib/snapSolveTypes";

// ---------------------------------------------------------------------------
// Fallback + guidance helpers (server-owned; the UI never computes these)
// ---------------------------------------------------------------------------
const CAMERA_GUIDANCE = [
  "Type the question manually for an exact solution",
  "Improve lighting / increase camera contrast",
  "Crop tightly to a single question",
];

function buildFallback(parsedProblem: string, reason: string): SnapSolveResponse {
  return {
    id: randomUUID(),
    classification: "General",
    ocrConfidence: 0,
    parsedProblem: parsedProblem || "Could not read the problem from the image.",
    solution: { coreAnswer: reason, steps: [], exceptionFlag: undefined },
    fallbackTriggered: true,
    recommendedPractice: [...CAMERA_GUIDANCE],
  };
}

// ---------------------------------------------------------------------------
// Lightweight classifier (shared by the simulator)
// ---------------------------------------------------------------------------
function classify(q: string): SnapSolveClassification {
  const s = q.toLowerCase();
  if (/sn1|sn2|aldol|alkene|alkane|benzene|carbocation|grignard|ester|amine|aromatic|isomer/.test(s)) return "Organic";
  if (/oxidation|salt|precipitat|coordination|d-block|periodic|metal|halogen|oxide/.test(s)) return "Inorganic";
  if (/thermo|kinetic|equilibrium|\bmole\b|gas law|electrochem|enthalp|entropy|energy/.test(s)) return "Physical";
  if (/titrat|analysis|qualitative|\btest\b|chromatograph/.test(s)) return "Analytical";
  return "General";
}

// ---------------------------------------------------------------------------
// Inference simulator — used when GEMINI_API_KEY is absent so the full
// pipeline (validation, fallback routing, UI) is demoable without a live key.
// ---------------------------------------------------------------------------
function simulate({ query, hasImage }: { query?: string; hasImage: boolean }): unknown {
  const q = (query ?? "").trim();

  // Image with no AI engine → genuine low-confidence path (demonstrates fallback).
  if (hasImage && !q) {
    return {
      classification: "General",
      ocrConfidence: 0.5,
      parsedProblem: "Image received — live OCR requires the AI engine.",
      solution: { coreAnswer: "Connect GEMINI_API_KEY to enable image solving, or type the question below.", steps: [] },
      recommendedPractice: [],
    };
  }

  // High-yield canned answer for the documented SN1 example.
  if (/sn1/i.test(q)) {
    return {
      classification: "Organic",
      ocrConfidence: 0.97,
      parsedProblem: "Why is the SN1 reaction fastest for a 3° (tertiary) carbon?",
      solution: {
        coreAnswer:
          "SN1 is fastest at a 3° carbon because the tertiary carbocation intermediate is the most stable (hyperconjugation + inductive donation), giving the rate-determining ionisation the lowest activation energy.",
        steps: [
          { stepNumber: 1, title: "Rate-determining step", equation: "\\text{R-X} \\rightarrow \\text{R}^+ + \\text{X}^-", explanation: "SN1 is unimolecular: the slow step is ionisation of the C–X bond to a carbocation. Rate = k[R-X], independent of the nucleophile." },
          { stepNumber: 2, title: "Carbocation stability order", equation: "3^\\circ > 2^\\circ > 1^\\circ > \\text{methyl}", explanation: "A 3° carbon bears three alkyl groups that donate electron density via +I and hyperconjugation, stabilising the positive charge." },
          { stepNumber: 3, title: "Lower activation energy", explanation: "A more stable carbocation lowers the transition-state energy of the slow step, so the rate constant k — and the overall SN1 rate — is largest for 3°." },
        ],
        exceptionFlag: "Allylic / benzylic 1° substrates can ionise via SN1 faster than expected because resonance stabilises the carbocation.",
      },
      recommendedPractice: ["Carbocation stability order", "SN1 vs SN2 conditions", "Hyperconjugation", "Carbocation rearrangements"],
    };
  }

  // Generic simulated structure for any other typed query.
  return {
    classification: classify(q),
    ocrConfidence: 0.9,
    parsedProblem: q || "No question provided.",
    solution: {
      coreAnswer: "Simulated response — connect GEMINI_API_KEY for a full AI-worked solution.",
      steps: [
        { stepNumber: 1, title: "Identify the concept", explanation: `This problem falls under ${classify(q)} chemistry. The live engine will return a complete step-by-step derivation.` },
      ],
    },
    recommendedPractice: ["Review the core concept", "Attempt 5 related MCQs"],
  };
}

// ---------------------------------------------------------------------------
// Real inference prompt
// ---------------------------------------------------------------------------
const PROMPT = `You are an expert JEE/NEET Chemistry & Physics solver and OCR engine.
Read the problem (from the image and/or the typed question) and solve it completely.

Return ONLY a single JSON object (no markdown, no code fences) matching EXACTLY this shape:
{
  "classification": "Organic" | "Inorganic" | "Physical" | "Analytical" | "General",
  "ocrConfidence": number,           // 0.0-1.0, how clearly you could read the input
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
- All equations/mechanisms/math in "equation"/"coreAnswer"/"explanation" MUST be clean LaTeX.
  Inside JSON use double-backslashes (e.g. "R-X + Mg \\\\rightarrow R-MgX").
- For a clearly typed question set a high ocrConfidence; for a blurry image set a low one.
- Do NOT include any text outside the JSON object.`;

function langLine(language: string): string {
  if (language === "hindi") return "Write parsedProblem, titles and explanations in Hindi (Devanagari).";
  if (language === "hinglish") return "Write explanations in Hinglish (Hindi in Roman script + English terms).";
  return "Write in English.";
}

function stripFences(s: string): string {
  return s.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
}

// ---------------------------------------------------------------------------
// Route
// ---------------------------------------------------------------------------
export async function POST(request: Request) {
  try {
    const { imageBase64, query, language = "english" } = await request.json();
    const typed = typeof query === "string" ? query.trim() : "";
    if (!imageBase64 && !typed) {
      return NextResponse.json({ error: "Provide an image or a typed question." }, { status: 400 });
    }

    const hasKey = !!process.env.GEMINI_API_KEY;
    let candidate: unknown;

    if (!hasKey) {
      // Simulator path — keeps the whole pipeline testable without a live key.
      candidate = simulate({ query: typed, hasImage: !!imageBase64 });
    } else {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
      const parts: Array<Record<string, unknown>> = [];
      if (imageBase64) {
        const base64Data = imageBase64.startsWith("data:") ? imageBase64.split(",")[1] : imageBase64;
        parts.push({ inlineData: { mimeType: "image/jpeg", data: base64Data } });
      }
      parts.push({
        text: `${PROMPT}\n\n${langLine(language)}${typed ? `\n\nStudent's typed question: ${typed}` : ""}`,
      });

      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents: [{ role: "user", parts }],
        config: { responseMimeType: "application/json", temperature: 0.2 },
      });

      const raw = stripFences(response.text ?? "");
      try {
        candidate = JSON.parse(raw);
      } catch {
        return NextResponse.json(buildFallback(typed, "The solver returned an unreadable response. Please try again."));
      }
    }

    // Inject server-owned defaults so validation is deterministic.
    if (candidate && typeof candidate === "object") {
      const c = candidate as Record<string, unknown>;
      c.id ??= randomUUID();
      if (typeof c.fallbackTriggered !== "boolean") c.fallbackTriggered = false;
    }

    // Strict Zod contract validation BEFORE dispatching downstream.
    let payload: SnapSolveResponse;
    try {
      payload = SnapSolveResponseSchema.parse(candidate);
    } catch (e) {
      console.error("snap-solve schema drift:", e);
      return NextResponse.json(buildFallback(typed, "We couldn't structure this solution reliably. Please retake the photo or type the question."));
    }

    // Low-confidence fallback routing — server-side safety-threshold check.
    if (payload.ocrConfidence < OCR_CONFIDENCE_THRESHOLD) {
      payload.fallbackTriggered = true;
    }
    if (payload.fallbackTriggered) {
      payload.recommendedPractice = Array.from(
        new Set([...payload.recommendedPractice, ...CAMERA_GUIDANCE])
      );
    }

    return NextResponse.json(payload);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Snap solve failed";
    console.error("Snap solve error:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
