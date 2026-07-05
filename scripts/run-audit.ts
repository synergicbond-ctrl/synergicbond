import { ALL_PYQ_QUESTIONS } from "../lib/pyq";
import { auditQuestionBank } from "../lib/chemistry/validator";

console.log("Auditing question bank for chemistry-only compliance...");
const result = auditQuestionBank(ALL_PYQ_QUESTIONS);

if (result.valid) {
  console.log(`\x1b[32m✅ Success! All ${ALL_PYQ_QUESTIONS.length} questions are verified Chemistry-only.\x1b[0m`);
} else {
  console.error("\x1b[31m❌ Validation failed. Non-chemistry questions detected:\x1b[0m");
  result.errors.forEach((e) => console.error(`- ${e}`));
  process.exit(1);
}
