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
import { getAdaptation, recordSession } from "@/lib/memoryCore";
import { rateLimit, clientIp } from "@/lib/rateLimit";
import { checkAndConsumeSnapQuota } from "@/lib/snapQuota";

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
// Core solve — single source of truth for BOTH the JSON and the SSE paths.
// Always resolves to a schema-valid SnapSolveResponse (errors collapse into a
// validated fallback object so callers never have to handle a throw).
// ---------------------------------------------------------------------------
interface SolveInput {
  imageBase64?: string;
  query?: string;
  language?: string;
  userId?: string;
}

async function solve({ imageBase64, query, language = "english" }: SolveInput): Promise<SnapSolveResponse> {
  const typed = typeof query === "string" ? query.trim() : "";

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
      model: "gemini-2.0-flash",
      contents: [{ role: "user", parts }],
      config: { responseMimeType: "application/json", temperature: 0.2 },
    });

    const raw = stripFences(response.text ?? "");
    try {
      candidate = JSON.parse(raw);
    } catch {
      return buildFallback(typed, "The solver returned an unreadable response. Please try again.");
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
    return buildFallback(typed, "We couldn't structure this solution reliably. Please retake the photo or type the question.");
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

  return payload;
}

// ---------------------------------------------------------------------------
// SSE streaming layer (opt-in via `Accept: text/event-stream`).
// Emits: reasoning* → step* → partial_result* → final.
// The schema is never changed; `final` is the same validated SnapSolveResponse
// the JSON path returns. Reasoning copy is generic/process-oriented only — it
// never asserts a chemistry verdict that could contradict the real answer.
// ---------------------------------------------------------------------------
const REASONING_LINES = [
  "Analyzing the problem…",
  "Parsing the given information…",
  "Identifying the relevant concept…",
  "Mapping out the solution path…",
  "Cross-verifying the approach…",
];

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

function sseFrame(event: string, data: unknown): string {
  // JSON.stringify yields a single line (no raw newlines), so SSE framing is safe.
  return `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
}

function streamSolve(input: SolveInput): Response {
  const encoder = new TextEncoder();
  const userId = input.userId || "anonymous";
  // Best-effort pre-classification of a typed question so reasoning depth/pace
  // can adapt to the user's history before the real solve completes.
  const topicGuess = classify(typeof input.query === "string" ? input.query : "");
  const adapt = getAdaptation(userId, topicGuess);

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const send = (event: string, data: unknown) => {
        controller.enqueue(encoder.encode(sseFrame(event, data)));
      };

      try {
        // Phase 1 — reasoning stream (simulated cognition; not model output).
        // Weak topics get a high-priority hint + more, slower reasoning; strong
        // topics get a terser, faster stream. Adaptation never alters `final`.
        if (adapt.hint) {
          send("reasoning", adapt.hint);
          await sleep(adapt.paceMs);
        }
        const lines = REASONING_LINES.slice(0, Math.min(adapt.reasoningDepth, REASONING_LINES.length));
        for (let i = 0; i < lines.length; i++) {
          send("reasoning", lines[i]);
          await sleep(adapt.paceMs);
        }

        // Compute the real, validated answer (always schema-valid).
        const payload = await solve(input);
        recordSession(userId, payload);

        // Phase 2 — stream solution steps. Strong topics get a condensed recap;
        // the full step set is always preserved in `final`.
        const streamedSteps = adapt.concise ? payload.solution.steps.slice(0, 2) : payload.solution.steps;
        for (const step of streamedSteps) {
          send("step", { stepNumber: step.stepNumber, text: step.title || step.explanation });
          await sleep(adapt.concise ? 240 : 320);
        }

        // Phase 3 — incremental JSON hydration, in the mandated order.
        send("partial_result", { classification: payload.classification });
        await sleep(220);
        send("partial_result", { ocrConfidence: payload.ocrConfidence });
        await sleep(220);
        send("partial_result", { parsedProblem: payload.parsedProblem });
        await sleep(220);

        // Phase 4 — final object: the COMPLETE payload, re-validated. Never trimmed.
        const final = SnapSolveResponseSchema.parse(payload);
        send("final", final);
      } catch (err) {
        // Headers are already sent — can't fall back to JSON. Emit a schema-valid
        // final so the client always terminates on a usable contract object.
        console.error("snap-solve stream error:", err);
        const typed = typeof input.query === "string" ? input.query.trim() : "";
        const fb = buildFallback(typed, "The live solver was interrupted. Please try again.");
        try {
          send("final", SnapSolveResponseSchema.parse(fb));
        } catch {
          /* client likely disconnected; nothing more to do */
        }
      } finally {
        try {
          controller.close();
        } catch {
          /* already closed */
        }
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}

// ---------------------------------------------------------------------------
// Tutor mode (interrupt) — a SEPARATE, stateless SSE stream.
//
// NOTE ON ARCHITECTURE: true single-connection interruption (request B mutating
// request A's live stream) is not possible over stateless SSE without WebSockets
// or shared session state (queue/DB) — all out of scope here. So an interrupt is
// modelled as the client aborting the solve stream and opening THIS tutor stream.
// It emits an `interrupt` event, switches to explanation-first pacing, answers
// the clarification via the same validated solve(), and still ends on a
// schema-valid `final`. Solve-mode SSE and the JSON path are unaffected.
// ---------------------------------------------------------------------------
const TUTOR_REASONING = [
  "Pausing the solution to address your question…",
  "Let's build the intuition before the maths…",
  "Comparing the competing pathways side by side…",
  "Breaking the idea into smaller pieces…",
  "Connecting it back to where we left the solution…",
];

interface TutorInput extends SolveInput {
  message?: string;
  currentContext?: string;
}

function streamTutor({ imageBase64, query, language = "english", message, currentContext, userId }: TutorInput): Response {
  const encoder = new TextEncoder();
  // The interrupt's own message is the question to teach against; fall back to
  // the original problem if the client sent no clarification text.
  const tutorQuery = (typeof message === "string" && message.trim()) || query;
  const uid = userId || "anonymous";
  const topicGuess = classify(typeof tutorQuery === "string" ? tutorQuery : "");
  const adapt = getAdaptation(uid, topicGuess);

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const send = (event: string, data: unknown) => {
        controller.enqueue(encoder.encode(sseFrame(event, data)));
      };

      try {
        // Announce the mode switch (new SSE event type — additive, non-breaking).
        send("interrupt", {
          message: typeof message === "string" && message.trim() ? `User asked: ${message.trim()}` : "User requested clarification",
          context: typeof currentContext === "string" && currentContext ? currentContext : "unknown",
        });
        await sleep(250);

        // Tutor pacing — slower, explanation-first (generic teaching scaffolding;
        // never asserts a specific verdict that could contradict the real answer).
        // Weak topics surface a high-priority hint and get the full explanation
        // set; strong topics get a condensed teach-back.
        if (adapt.hint) {
          send("reasoning", adapt.hint);
          await sleep(500);
        }
        const tutorLines = adapt.isStrong ? TUTOR_REASONING.slice(0, 2) : TUTOR_REASONING;
        for (let i = 0; i < tutorLines.length; i++) {
          send("reasoning", tutorLines[i]);
          await sleep(600 + ((i * 113) % 400)); // 600–1000ms, deliberately slower
        }

        // Resolve the clarification via the same validated pipeline.
        const payload = await solve({ imageBase64, query: tutorQuery, language });
        recordSession(uid, payload);

        // Optional resumption of the solution — stream its steps as a recap.
        const recapSteps = adapt.concise ? payload.solution.steps.slice(0, 2) : payload.solution.steps;
        for (const step of recapSteps) {
          send("step", { stepNumber: step.stepNumber, text: step.title || step.explanation });
          await sleep(420);
        }

        send("partial_result", { classification: payload.classification });
        await sleep(220);
        send("partial_result", { ocrConfidence: payload.ocrConfidence });
        await sleep(220);
        send("partial_result", { parsedProblem: payload.parsedProblem });
        await sleep(220);

        const final = SnapSolveResponseSchema.parse(payload);
        send("final", final);
      } catch (err) {
        console.error("snap-solve tutor stream error:", err);
        const fb = buildFallback(typeof tutorQuery === "string" ? tutorQuery.trim() : "", "The tutor session was interrupted. Please try again.");
        try {
          send("final", SnapSolveResponseSchema.parse(fb));
        } catch {
          /* client likely disconnected */
        }
      } finally {
        try {
          controller.close();
        } catch {
          /* already closed */
        }
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}

// ---------------------------------------------------------------------------
// Route — JSON by default (unchanged contract); SSE when explicitly requested;
// tutor-mode SSE when an interrupt is posted.
// ---------------------------------------------------------------------------
export async function POST(request: Request) {
  try {
    // Abuse guard (per-IP). Cheap first line of defense on a paid AI route.
    const rl = rateLimit(`snap:${clientIp(request)}`, 20, 60_000);
    if (!rl.ok) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a few seconds and try again." },
        { status: 429, headers: { "Retry-After": String(rl.retryAfter) } }
      );
    }

    const body = await request.json();
    const { imageBase64, query, language = "english", interrupt, message, currentContext } = body ?? {};
    // Optional — present only once a future frontend sends it. Until then all
    // sessions share the "anonymous" bucket (see lib/memoryCore caveats).
    const userId = typeof body?.userId === "string" && body.userId.trim() ? body.userId.trim() : "anonymous";

    // Interrupt → tutor-mode SSE. Needs either a clarification message or the
    // original question to teach against.
    if (interrupt === true) {
      const hasTopic =
        (typeof message === "string" && message.trim()) ||
        (typeof query === "string" && query.trim()) ||
        !!imageBase64;
      if (!hasTopic) {
        return NextResponse.json({ error: "An interrupt needs a message or an existing question." }, { status: 400 });
      }
      return streamTutor({ imageBase64, query, language, message, currentContext, userId });
    }

    const typed = typeof query === "string" ? query.trim() : "";
    if (!imageBase64 && !typed) {
      return NextResponse.json({ error: "Provide an image or a typed question." }, { status: 400 });
    }

    // Paywall gate — free tier = 5 solves/day, Pro = unlimited. Applies to the
    // main solve path only (interrupt/tutor follow-ups are not separately metered).
    // Degrades open if the usage tables aren't migrated yet (see lib/snapQuota).
    const quota = await checkAndConsumeSnapQuota();
    if (!quota.allowed) {
      if (quota.tier === "guest") {
        return NextResponse.json(
          { error: "Sign in to use Snap & Solve — free accounts get 5 solves per day at no cost." },
          { status: 401 }
        );
      }
      return NextResponse.json(
        {
          error: "You've used your 5 free solves today. Upgrade to Pro for unlimited Snap & Solve.",
          paywall: true,
          tier: quota.tier,
        },
        { status: 402 }
      );
    }

    // Backward-compatible: only stream when the client opts in. The existing
    // frontend (which calls res.json()) keeps receiving the same JSON payload.
    const wantsStream = (request.headers.get("accept") || "").includes("text/event-stream");
    if (wantsStream) {
      return streamSolve({ imageBase64, query, language, userId });
    }

    const payload = await solve({ imageBase64, query, language });
    recordSession(userId, payload);
    return NextResponse.json(payload);
  } catch (err: unknown) {
    const errMessage = err instanceof Error ? err.message : "Snap solve failed";
    console.error("Snap solve error:", err);
    return NextResponse.json({ error: errMessage }, { status: 500 });
  }
}
