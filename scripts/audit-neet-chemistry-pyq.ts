import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DATASET_PATH = path.join(ROOT, "lib/pyq/neetChemistryDataset.ts");
const VALID_PROGRAMS = new Set(["neet", "aipmt"]);
const MCQ_TYPES = new Set(["single-correct", "assertion-reason", "statement-based", "match-type"]);

function extractDatasetSource(text) {
  const startToken = "export const VERIFIED_NEET_CHEMISTRY_QUESTIONS";
  const start = text.indexOf(startToken);
  if (start === -1) throw new Error("Verified dataset export was not found.");

  const equals = text.indexOf("=", start);
  const arrayStart = text.indexOf("[", equals);
  if (equals === -1 || arrayStart === -1) throw new Error("Verified dataset array was not found.");

  let depth = 0;
  let inString = false;
  let quote = "";
  let escaped = false;

  for (let index = arrayStart; index < text.length; index += 1) {
    const char = text[index];
    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        inString = false;
      }
      continue;
    }

    if (char === "\"" || char === "'") {
      inString = true;
      quote = char;
      continue;
    }
    if (char === "[") depth += 1;
    if (char === "]") {
      depth -= 1;
      if (depth === 0) return text.slice(arrayStart, index + 1);
    }
  }

  throw new Error("Verified dataset array did not terminate.");
}

function readDataset() {
  const source = fs.readFileSync(DATASET_PATH, "utf8");
  const arraySource = extractDatasetSource(source);
  return JSON.parse(arraySource);
}

function normalizeText(value) {
  return String(value || "")
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

function contentHash(question) {
  const optionText = [...(question.options || [])]
    .sort((a, b) => String(a.id).localeCompare(String(b.id)))
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

function validateQuestion(question) {
  const issues = [];
  const id = question.id || "unknown";
  const add = (message) => issues.push({ id, message });

  if (!VALID_PROGRAMS.has(question.program)) add("program must be neet or aipmt");
  if (question.subject !== "chemistry") add("subject must be chemistry");
  if (!Number.isInteger(question.examYear) || question.examYear < 1988 || question.examYear > 2026) {
    add("examYear is missing or invalid");
  }
  if (!question.chapterId) add("chapterId is required");
  if (!String(question.questionText || "").trim()) add("questionText is required");
  if (MCQ_TYPES.has(question.questionType) && (!Array.isArray(question.options) || question.options.length < 2)) {
    add("MCQ-style questions need at least two options");
  }
  if (!question.correctOptionId && !question.correctAnswerText) add("correct answer is required");
  if (question.correctOptionId && !question.options?.some((option) => option.id === question.correctOptionId)) {
    add("correctOptionId must match an option id");
  }
  if (!String(question.explanation || "").trim()) add("original explanation is required");
  if (!String(question.officialSource?.authority || "").trim()) add("officialSource.authority is required");
  if (!String(question.officialSource?.documentTitle || "").trim()) add("officialSource.documentTitle is required");
  if (!question.officialSource?.questionNumber) add("officialSource.questionNumber is required");
  if (!question.officialSource?.verifiedAt && !question.officialSource?.verificationNotes) {
    add("official-source verification date or notes are required");
  }
  if (question.verificationStatus !== "verified-official") add("verificationStatus must be verified-official");
  if (question.contentHash && question.contentHash !== contentHash(question)) add("contentHash does not match content");

  return issues;
}

const questions = readDataset();
const validationIssues = questions.flatMap(validateQuestion);
const hashes = new Map();
const duplicateContentHashes = [];

for (const question of questions) {
  const hash = question.contentHash || contentHash(question);
  if (hashes.has(hash)) {
    duplicateContentHashes.push(hash);
    validationIssues.push({ id: question.id || "unknown", message: `duplicate content hash also used by ${hashes.get(hash)}` });
  } else {
    hashes.set(hash, question.id || "unknown");
  }
}

const verifiedOfficial = questions.filter((question) => question.verificationStatus === "verified-official");
const pending = questions.filter((question) => question.verificationStatus === "pending-verification");
const rejected = questions.filter((question) => question.verificationStatus === "rejected");
const nonChemistry = questions.filter((question) => question.subject !== "chemistry");
const nonNeetPrograms = questions.filter((question) => !VALID_PROGRAMS.has(question.program));

console.log(JSON.stringify({
  totalRecords: questions.length,
  verifiedOfficial: verifiedOfficial.length,
  pending: pending.length,
  rejected: rejected.length,
  neet: verifiedOfficial.filter((question) => question.program === "neet").length,
  aipmt: verifiedOfficial.filter((question) => question.program === "aipmt").length,
  nonChemistry: nonChemistry.length,
  nonNeetPrograms: nonNeetPrograms.length,
  duplicateContentHashes: duplicateContentHashes.length,
  validationIssues: validationIssues.length,
}, null, 2));

if (validationIssues.length > 0 || nonChemistry.length > 0 || nonNeetPrograms.length > 0) {
  console.error("NEET Chemistry PYQ audit failed.");
  for (const issue of validationIssues.slice(0, 20)) {
    console.error(`- ${issue.id}: ${issue.message}`);
  }
  process.exit(1);
}

console.log("NEET Chemistry PYQ audit passed.");
