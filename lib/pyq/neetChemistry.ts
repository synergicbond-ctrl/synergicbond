import { createHash } from "node:crypto";
import {
  NEET_CHEMISTRY_CHAPTERS,
  getNEETChemistryChapterById,
  type PYQChemistryDomain,
} from "./neetChemistryChapters";

export type ExamProgram = "neet" | "aipmt" | "jee-main" | "jee-advanced" | "cbse" | "isc" | "olympiad";
export type PYQVerificationStatus = "verified-official" | "pending-verification" | "rejected";
export type PYQQuestionType = "single-correct" | "assertion-reason" | "statement-based" | "match-type" | "integer" | "other";
export type PYQSubject = "chemistry";

export interface PYQOfficialSource {
  authority: string;
  documentTitle: string;
  sourceUrl?: string;
  sourceFileName?: string;
  officialPaperCode?: string;
  officialAnswerKeyCode?: string;
  pageNumber?: number;
  questionNumber?: number;
  verifiedBy?: string;
  verifiedAt?: string;
  verificationNotes?: string;
}

export interface NEETChemistryPYQOption {
  id: string;
  label: string;
  text: string;
  latex?: string;
}

export interface NEETChemistryPYQQuestion {
  id: string;
  program: "neet" | "aipmt";
  subject: PYQSubject;
  examName: string;
  examYear: number;
  examSession?: string;
  paperCode?: string;
  language: "english" | "hindi" | "bilingual";
  domain: PYQChemistryDomain;
  classLevel?: "11" | "12" | "mixed";
  chapterId: string;
  chapterName: string;
  topicId?: string;
  topicName?: string;
  questionType: PYQQuestionType;
  questionText: string;
  questionLatex?: string;
  options: NEETChemistryPYQOption[];
  correctOptionId?: string;
  correctAnswerText?: string;
  explanation: string;
  explanationLatex?: string;
  difficulty?: "easy" | "moderate" | "difficult";
  ncertReference?: {
    classLevel: "11" | "12";
    chapter?: string;
    section?: string;
    page?: number;
    edition?: string;
  };
  officialSource: PYQOfficialSource;
  verificationStatus: PYQVerificationStatus;
  contentHash?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface PYQValidationIssue {
  id: string;
  message: string;
}

export interface PYQDatasetValidation {
  ok: boolean;
  issues: PYQValidationIssue[];
  duplicateContentHashes: string[];
}

const VALID_PROGRAMS = new Set(["neet", "aipmt"]);
const VALID_OPTION_COUNT_TYPES = new Set<PYQQuestionType>([
  "single-correct",
  "assertion-reason",
  "statement-based",
  "match-type",
]);

function normalizeText(value: string) {
  return value
    .normalize("NFKC")
    .replace(/<[^>]*>/g, " ")
    .replace(/[“”]/g, "\"")
    .replace(/[‘’]/g, "'")
    .replace(/[‐‑‒–—−]/g, "-")
    .replace(/[^\p{L}\p{N}+\-*/=().,%\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

export function createPYQContentHash(question: Pick<NEETChemistryPYQQuestion, "examName" | "examYear" | "questionText" | "options">) {
  const optionText = [...question.options]
    .sort((a, b) => a.id.localeCompare(b.id))
    .map((option) => `${normalizeText(option.label)}:${normalizeText(option.text)}`)
    .join("|");
  const payload = [
    normalizeText(question.examName),
    String(question.examYear),
    normalizeText(question.questionText),
    optionText,
  ].join("::");
  return createHash("sha256").update(payload).digest("hex");
}

export function validatePYQQuestion(question: NEETChemistryPYQQuestion): PYQValidationIssue[] {
  const issues: PYQValidationIssue[] = [];
  const ref = question.id || "unknown";
  const chapter = question.chapterId ? getNEETChemistryChapterById(question.chapterId) : undefined;
  const computedHash = createPYQContentHash(question);

  const add = (message: string) => issues.push({ id: ref, message });

  if (!VALID_PROGRAMS.has(question.program)) add("program must be neet or aipmt");
  if (question.subject !== "chemistry") add("subject must be chemistry");
  if (!Number.isInteger(question.examYear) || question.examYear < 1988 || question.examYear > 2026) {
    add("examYear is missing or outside the supported NEET/AIPMT archive range");
  }
  if (!question.chapterId) add("chapterId is required");
  if (!chapter) add("chapterId must match the central NEET chemistry chapter map");
  if (chapter && question.chapterName !== chapter.name) add("chapterName must match the central chapter map");
  if (chapter && question.domain !== chapter.domain) add("domain must match the central chapter map");
  if (chapter && question.classLevel && question.classLevel !== chapter.classLevel) add("classLevel must match the central chapter map");
  if (!question.questionText?.trim()) add("questionText is required");
  if (VALID_OPTION_COUNT_TYPES.has(question.questionType) && question.options.length < 2) add("MCQ-style questions need at least two options");
  if (!question.correctOptionId && !question.correctAnswerText) add("correct answer is required");
  if (question.correctOptionId && !question.options.some((option) => option.id === question.correctOptionId)) {
    add("correctOptionId must match an option id");
  }
  if (!question.explanation?.trim()) add("original Synergic Bond explanation is required");
  if (!question.officialSource?.authority?.trim()) add("officialSource.authority is required");
  if (!question.officialSource?.documentTitle?.trim()) add("officialSource.documentTitle is required");
  if (!question.officialSource?.questionNumber) add("officialSource.questionNumber is required");
  if (!question.officialSource?.verifiedAt && !question.officialSource?.verificationNotes) {
    add("official-source verification date or notes are required");
  }
  if (question.verificationStatus !== "verified-official") add("verificationStatus must be verified-official");
  if (question.contentHash && question.contentHash !== computedHash) add("contentHash does not match normalized question content");

  return issues;
}

export function validatePYQDataset(questions: NEETChemistryPYQQuestion[]): PYQDatasetValidation {
  const issues = questions.flatMap(validatePYQQuestion);
  const seen = new Map<string, string>();
  const duplicateContentHashes: string[] = [];

  for (const question of questions) {
    const hash = question.contentHash || createPYQContentHash(question);
    const existing = seen.get(hash);
    if (existing) {
      duplicateContentHashes.push(hash);
      issues.push({ id: question.id, message: `duplicate content hash also used by ${existing}` });
    } else {
      seen.set(hash, question.id);
    }
  }

  return {
    ok: issues.length === 0,
    issues,
    duplicateContentHashes,
  };
}

export function withPYQContentHashes(questions: NEETChemistryPYQQuestion[]) {
  return questions.map((question) => ({
    ...question,
    contentHash: question.contentHash || createPYQContentHash(question),
  }));
}

export function getVerifiedNEETQuestions(questions: NEETChemistryPYQQuestion[]) {
  const withHashes = withPYQContentHashes(questions);
  return withHashes.filter((question) => {
    if (!VALID_PROGRAMS.has(question.program)) return false;
    if (question.subject !== "chemistry") return false;
    if (question.verificationStatus !== "verified-official") return false;
    return validatePYQQuestion(question).length === 0;
  });
}

export { NEET_CHEMISTRY_CHAPTERS };
export type { PYQChemistryDomain };
