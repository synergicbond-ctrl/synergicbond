import { z } from "zod";

// Single source of truth for the Snap & Solve response contract.
// Client-safe: only depends on zod (no server-only modules), so both the
// API route and the presentational view import from here.

export const SnapSolveResponseSchema = z.object({
  id: z.string(),
  classification: z.enum(["Organic", "Inorganic", "Physical", "Analytical", "General"]),
  ocrConfidence: z.number(), // 0.0 to 1.0
  parsedProblem: z.string(), // Clean mathematical / chemical statement
  solution: z.object({
    coreAnswer: z.string(),
    steps: z.array(
      z.object({
        stepNumber: z.number(),
        title: z.string(),
        equation: z.string().optional(), // clean LaTeX (double-backslash in JSON)
        explanation: z.string(),
      })
    ),
    exceptionFlag: z.string().optional(), // high-yield exceptions (e.g. steric hindrance)
  }),
  fallbackTriggered: z.boolean(),
  recommendedPractice: z.array(z.string()), // high-yield topics to practice next
});

export type SnapSolveResponse = z.infer<typeof SnapSolveResponseSchema>;

export type SnapSolveClassification = SnapSolveResponse["classification"];
export type SnapSolveStep = SnapSolveResponse["solution"]["steps"][number];

// Confidence threshold below which the server forces fallback behaviour.
export const OCR_CONFIDENCE_THRESHOLD = 0.7;
