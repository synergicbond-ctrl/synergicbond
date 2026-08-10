// tests/retrieval-schema.test.ts — Phase 3: the retrieval content schema and
// the placeholder fixtures that exercise it.
// Run: npm run test:retrieval-schema

import { test } from "node:test";
import assert from "node:assert/strict";

import { validateRetrievalItem, type RetrievalItem } from "../components/retrieval/types.ts";
import { PLACEHOLDER_ITEMS } from "../components/retrieval/fixtures.ts";

test("all placeholder fixtures validate", () => {
  for (const item of PLACEHOLDER_ITEMS) {
    assert.deepEqual(validateRetrievalItem(item), [], item.id);
  }
});

test("fixtures are visibly placeholders, never chemistry", () => {
  for (const item of PLACEHOLDER_ITEMS) {
    assert.match(item.prompt, /\[PLACEHOLDER\]/, `${item.id} prompt must be marked`);
    assert.match(item.conceptId, /^fixture:/, `${item.id} conceptId must be fixture-scoped`);
  }
});

test("mcq validation catches structural problems", () => {
  const bad: RetrievalItem = {
    id: "x",
    conceptId: "fixture:x",
    mode: "mcq",
    prompt: "p",
    options: [{ id: "a", label: "only one" }],
    correctOptionId: "z",
  };
  const problems = validateRetrievalItem(bad);
  assert.ok(problems.includes("mcq needs 2–5 options"));
  assert.ok(problems.includes("correctOptionId not among options"));
});

test("duplicate option ids are rejected", () => {
  const bad: RetrievalItem = {
    id: "x",
    conceptId: "fixture:x",
    mode: "mcq",
    prompt: "p",
    options: [
      { id: "a", label: "1" },
      { id: "a", label: "2" },
    ],
    correctOptionId: "a",
  };
  assert.ok(validateRetrievalItem(bad).includes("duplicate option ids"));
});

test("self-graded requires a model answer", () => {
  const bad: RetrievalItem = {
    id: "x",
    conceptId: "fixture:x",
    mode: "self-graded",
    prompt: "p",
  };
  assert.ok(validateRetrievalItem(bad).includes("self-graded needs modelAnswer"));
});

test("empty ids/prompt are rejected", () => {
  const bad = {
    id: "",
    conceptId: "",
    mode: "self-graded",
    prompt: "",
    modelAnswer: "m",
  } as RetrievalItem;
  const problems = validateRetrievalItem(bad);
  assert.ok(problems.includes("missing id"));
  assert.ok(problems.includes("missing conceptId"));
  assert.ok(problems.includes("missing prompt"));
});
