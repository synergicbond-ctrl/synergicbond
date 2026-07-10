import type { NEETChemistryPYQQuestion } from "./neetChemistry";

// Production source of verified NEET/AIPMT Chemistry PYQs.
// Keep this empty until records have official examination-authority provenance
// and pass scripts/import-verified-neet-pyq.ts.
export const VERIFIED_NEET_CHEMISTRY_QUESTIONS: NEETChemistryPYQQuestion[] = [];

export const NEET_CHEMISTRY_PYQ_STATS = {
  totalRecords: VERIFIED_NEET_CHEMISTRY_QUESTIONS.length,
  verifiedOfficial: VERIFIED_NEET_CHEMISTRY_QUESTIONS.filter((question) => question.verificationStatus === "verified-official").length,
  pending: VERIFIED_NEET_CHEMISTRY_QUESTIONS.filter((question) => question.verificationStatus === "pending-verification").length,
  rejected: VERIFIED_NEET_CHEMISTRY_QUESTIONS.filter((question) => question.verificationStatus === "rejected").length,
  neet: VERIFIED_NEET_CHEMISTRY_QUESTIONS.filter((question) => question.program === "neet").length,
  aipmt: VERIFIED_NEET_CHEMISTRY_QUESTIONS.filter((question) => question.program === "aipmt").length,
} as const;
