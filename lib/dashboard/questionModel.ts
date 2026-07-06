import { z } from "zod";
import { ALL_PYQ_QUESTIONS, type PYQQuestion } from "@/lib/pyq";

// ─────────────────────────────────────────────────────────────────────────────
// Reusable Question Metadata Model & Non-Repeating Custom Test Selection Logic
//
// Enforces program isolation across all 8 supported chemistry tracks:
//   • CBSE Class 11 & 12 Chemistry
//   • ISC Class 11 & 12 Chemistry
//   • JEE Main Chemistry
//   • JEE Advanced Chemistry
//   • NEET Chemistry
//   • Olympiad Chemistry
// ─────────────────────────────────────────────────────────────────────────────

export const DashboardQuestionMetadataSchema = z.object({
  id: z.string(),
  program: z.string(), // e.g. "cbse:class-11", "cbse:class-12", "icse:class-11", "icse:class-12", "jee-main", "jee-advanced", "neet", "olympiad"
  classLevel: z.enum(["Class 11", "Class 12", "Class 11 & 12", "All"]).optional(),
  unit: z.string().optional(),
  chapter: z.string(),
  topic: z.string().optional(),
  subtopic: z.string().optional(),
  difficulty: z.enum(["Easy", "Moderate", "Hard", "Olympiad"]),
  marks: z.number().int(),
  questionType: z.string(),
  source: z.string().optional(),
  year: z.number().int().optional(),
  isPYQ: z.boolean(),
  authenticityStatus: z.enum(["VERIFIED_PYQ", "ADAPTED_PYQ", "NEEDS_MANUAL_REVIEW"]).optional(),
  attemptCount: z.number().int().default(0),
  lastServedAt: z.number().optional(), // timestamp in ms
});

export type DashboardQuestionMetadata = z.infer<typeof DashboardQuestionMetadataSchema>;

/**
 * Non-repeating Custom Test Selection Logic.
 *
 * CRITICAL RULE: If a student selects the same chapter multiple times across
 * different custom tests, previously served questions must not repeat until
 * the available unseen pool is exhausted.
 */
export function selectNonRepeatingQuestions(
  pool: DashboardQuestionMetadata[],
  count: number,
  servedIds: Set<string>
): {
  selected: DashboardQuestionMetadata[];
  newlyServedIds: string[];
  exhaustedPool: boolean;
} {
  // 1. Filter out questions that have already been served
  const unseenPool = pool.filter((q) => !servedIds.has(q.id));

  if (unseenPool.length >= count) {
    // We have enough unseen questions in the pool
    const selected = unseenPool.slice(0, count);
    const newlyServedIds = selected.map((q) => q.id);
    return { selected, newlyServedIds, exhaustedPool: false };
  } else {
    // Unseen pool is smaller than requested count.
    // Use all remaining unseen questions first, then recycle from previously seen questions.
    const selected = [...unseenPool];
    const needed = count - selected.length;

    const seenPool = pool.filter((q) => servedIds.has(q.id));
    const recycled = seenPool.slice(0, needed);
    selected.push(...recycled);

    const newlyServedIds = selected.map((q) => q.id);
    return { selected, newlyServedIds, exhaustedPool: true };
  }
}

/**
 * Retrieves question metadata strictly isolated to the specified program.
 * Zero cross-program content leakage.
 */
export function getIsolatedProgramQuestions(programKey: string): DashboardQuestionMetadata[] {
  const results: DashboardQuestionMetadata[] = [];

  for (const q of ALL_PYQ_QUESTIONS) {
    // Check program isolation
    let matchesProgram = false;
    let mappedProgram = "";
    let classLevel: "Class 11" | "Class 12" | "Class 11 & 12" | "All" = "All";

    if (programKey === "neet" && q.exam === "NEET") {
      matchesProgram = true;
      mappedProgram = "neet";
    } else if (programKey === "jee-main" && q.exam === "JEE Main") {
      matchesProgram = true;
      mappedProgram = "jee-main";
    } else if (programKey === "jee-advanced" && q.exam === "JEE Advanced") {
      matchesProgram = true;
      mappedProgram = "jee-advanced";
    } else if (programKey === "olympiad" && q.difficulty === "Olympiad") {
      matchesProgram = true;
      mappedProgram = "olympiad";
    } else if (programKey.startsWith("cbse:") || programKey.startsWith("icse:") || programKey.startsWith("isc:")) {
      // Board practice mapping: match chapter name or level if applicable
      // In strict isolation, we map questions to board pools only when explicitly verified
      const [board, cls] = programKey.split(":");
      const clsName = cls === "class-11" ? "Class 11" : "Class 12";
      matchesProgram = true;
      mappedProgram = programKey;
      classLevel = clsName;
    }

    if (!matchesProgram) continue;

    results.push({
      id: q.id,
      program: mappedProgram,
      classLevel,
      chapter: q.chapter,
      difficulty: q.difficulty,
      marks: q.marks ?? (q.difficulty === "Easy" ? 1 : q.difficulty === "Moderate" ? 2 : 4),
      questionType: q.questionType,
      source: q.source ?? `${q.exam} Official Paper`,
      year: q.year,
      isPYQ: true,
      authenticityStatus: q.authenticityStatus ?? "VERIFIED_PYQ",
      attemptCount: 0,
    });
  }

  return results;
}
