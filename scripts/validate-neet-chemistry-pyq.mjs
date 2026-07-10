import { pathToFileURL } from "node:url";
import assert from "node:assert/strict";

const generated = await import(pathToFileURL(`${process.cwd()}/lib/pyq/generated/neetChemistry.ts`).href);

const {
  NEET_CHEMISTRY_PYQ_QUESTIONS,
  NEET_CHEMISTRY_PYQ_CHAPTER_INDEX,
  NEET_CHEMISTRY_PYQ_YEAR_INDEX,
  NEET_CHEMISTRY_PYQ_IMPORT_STATS,
} = generated;

assert.equal(NEET_CHEMISTRY_PYQ_QUESTIONS.length, NEET_CHEMISTRY_PYQ_IMPORT_STATS.acceptedRecords);
assert.ok(NEET_CHEMISTRY_PYQ_QUESTIONS.length > 0, "expected accepted NEET chemistry PYQs");

const ids = new Set();
const normalized = new Set();
for (const q of NEET_CHEMISTRY_PYQ_QUESTIONS) {
  assert.equal(q.exam, "NEET");
  assert.match(q.id, /^neet-chem-\d{4}-[a-f0-9]{10}$/);
  assert.ok(!ids.has(q.id), `duplicate id: ${q.id}`);
  ids.add(q.id);
  assert.ok(Number.isInteger(q.year) && q.year >= 1980 && q.year <= 2026, `bad year: ${q.id}`);
  assert.ok(q.question.length >= 12, `short question: ${q.id}`);
  assert.deepEqual(Object.keys(q.options ?? {}).sort(), ["A", "B", "C", "D"]);
  assert.ok(["A", "B", "C", "D"].includes(q.answer), `bad answer: ${q.id}`);
  assert.ok(q.options[q.answer]?.length > 0, `answer option missing text: ${q.id}`);
  assert.ok(!/\([a-d]\)/i.test(q.question), `question still contains inline option markers: ${q.id}`);
  assert.ok(!/(arihant|mtg|disha|publisher|page\s*no)/i.test(`${q.question} ${q.explanation}`), `branding leaked: ${q.id}`);
  assert.ok(!/(Work through the governing concept|States of Matter\s+\d+$)/i.test(q.explanation), `source solution prose leaked: ${q.id}`);
  assert.ok(!/\b(?:[a-z](?:pH|pKa|pKb|T\(K\)|[A-Z][a-z]?\d?)|c\s*=\s*3\.0\s*×\s*10(?:3|5)\s*m?s|ms−1|ms-1)\b/.test(`${q.question} ${Object.values(q.options).join(" ")}`), `damaged notation leaked: ${q.id}`);
  assert.ok(!/(Concept:\s|Steps:\s|Check:\s)/.test(q.explanation), `generic pseudo-solution leaked: ${q.id}`);
  assert.ok(q.explanation.startsWith("Needs manual review:"), `imported record must be review-flagged, not solved: ${q.id}`);
  assert.ok(q.explanation.includes("official answer key is retained"), `review flag must describe retained key status: ${q.id}`);
  assert.ok(q.explanation.includes("independently authored Synergic Bond solution has not yet been written"), `review flag must not imply solved status: ${q.id}`);
  assert.equal(q.authenticityStatus, "NEEDS_MANUAL_REVIEW", `imported key must remain review-flagged: ${q.id}`);
  assert.ok(!/[�È⎯⏐⊕]/.test(`${q.question} ${Object.values(q.options).join(" ")} ${q.explanation}`), `corrupt glyph leaked: ${q.id}`);
  const key = `${q.question} ${Object.values(q.options).join(" ")}`.toLowerCase().replace(/\s+/g, " ").trim();
  assert.ok(!normalized.has(key), `duplicate normalized question/options: ${q.id}`);
  normalized.add(key);
}

assert.ok(NEET_CHEMISTRY_PYQ_CHAPTER_INDEX["Redox Reactions"], "missing Redox Reactions index");
assert.ok(NEET_CHEMISTRY_PYQ_CHAPTER_INDEX["Electrochemistry"], "missing Electrochemistry index");
assert.notDeepEqual(
  NEET_CHEMISTRY_PYQ_CHAPTER_INDEX["Redox Reactions"],
  NEET_CHEMISTRY_PYQ_CHAPTER_INDEX["Electrochemistry"],
  "Redox and Electrochemistry indexes must stay separate",
);

for (const [chapter, chapterIds] of Object.entries(NEET_CHEMISTRY_PYQ_CHAPTER_INDEX)) {
  for (const id of chapterIds) {
    const q = NEET_CHEMISTRY_PYQ_QUESTIONS.find((item) => item.id === id);
    assert.ok(q, `chapter index points to missing id: ${id}`);
    assert.equal(q.chapter, chapter, `chapter index mismatch: ${id}`);
  }
}

for (const [year, yearIds] of Object.entries(NEET_CHEMISTRY_PYQ_YEAR_INDEX)) {
  for (const id of yearIds) {
    const q = NEET_CHEMISTRY_PYQ_QUESTIONS.find((item) => item.id === id);
    assert.ok(q, `year index points to missing id: ${id}`);
    assert.equal(String(q.year), year, `year index mismatch: ${id}`);
  }
}

const generatedPaper = NEET_CHEMISTRY_PYQ_QUESTIONS
  .filter((q) => q.difficulty === "Moderate")
  .concat(NEET_CHEMISTRY_PYQ_QUESTIONS.filter((q) => q.difficulty !== "Moderate"))
  .slice(0, 45);
assert.equal(generatedPaper.length, 45, "audited pool must support a 45-question paper");
assert.equal(new Set(generatedPaper.map((q) => q.id)).size, 45, "45-question paper sample returned duplicates");
assert.equal(generatedPaper.reduce((sum, q) => sum + (q.marks ?? 4), 0), 180, "45-question paper should total 180 marks");

console.log(`Validated ${NEET_CHEMISTRY_PYQ_QUESTIONS.length} NEET Chemistry PYQs and a 45-question generated paper.`);
