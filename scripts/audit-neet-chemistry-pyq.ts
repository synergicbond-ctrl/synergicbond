import {
  validatePYQDataset,
  withPYQContentHashes,
} from "../lib/pyq/neetChemistry";
import { VERIFIED_NEET_CHEMISTRY_QUESTIONS } from "../lib/pyq/neetChemistryDataset";

const questions = withPYQContentHashes(VERIFIED_NEET_CHEMISTRY_QUESTIONS);
const validation = validatePYQDataset(questions);
const verifiedOfficial = questions.filter((question) => question.verificationStatus === "verified-official");
const pending = questions.filter((question) => question.verificationStatus === "pending-verification");
const rejected = questions.filter((question) => question.verificationStatus === "rejected");
const neet = verifiedOfficial.filter((question) => question.program === "neet");
const aipmt = verifiedOfficial.filter((question) => question.program === "aipmt");
const nonChemistry = questions.filter((question) => question.subject !== "chemistry");
const nonNeetPrograms = questions.filter((question) => question.program !== "neet" && question.program !== "aipmt");

const report = {
  totalRecords: questions.length,
  verifiedOfficial: verifiedOfficial.length,
  pending: pending.length,
  rejected: rejected.length,
  neet: neet.length,
  aipmt: aipmt.length,
  nonChemistry: nonChemistry.length,
  nonNeetPrograms: nonNeetPrograms.length,
  duplicateContentHashes: validation.duplicateContentHashes.length,
  validationIssues: validation.issues.length,
};

console.log(JSON.stringify(report, null, 2));

if (!validation.ok || nonChemistry.length > 0 || nonNeetPrograms.length > 0) {
  console.error("NEET Chemistry PYQ audit failed.");
  for (const issue of validation.issues.slice(0, 20)) {
    console.error(`- ${issue.id}: ${issue.message}`);
  }
  process.exit(1);
}

console.log("NEET Chemistry PYQ audit passed.");
