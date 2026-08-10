// tests/retrieval-submission.test.ts — Phase 4: retrieval → attempts mapping.
// Run: npm run test:retrieval-submission

import { test } from "node:test";
import assert from "node:assert/strict";

import {
  buildRetrievalSubmission,
  SELF_GRADED_CORRECT,
  SELF_GRADED_MISSED,
} from "../lib/retrieval/submission.ts";
import { AttemptSubmissionSchema, kindForSource } from "../lib/attempts/schema.ts";
import { PLACEHOLDER_MCQ, PLACEHOLDER_SELF_GRADED } from "../components/retrieval/fixtures.ts";

const CONTEXT = { contextId: "fixture-lesson", exam: "jee", chapterId: "fixture-chapter" };

test("mcq result maps to a valid AttemptSubmission", () => {
  const submission = buildRetrievalSubmission(
    PLACEHOLDER_MCQ,
    {
      itemId: PLACEHOLDER_MCQ.id,
      conceptId: PLACEHOLDER_MCQ.conceptId,
      mode: "mcq",
      correct: false,
      selectedOptionId: "b",
      confident: true,
      elapsedMs: 4200,
    },
    CONTEXT
  );
  const parsed = AttemptSubmissionSchema.safeParse(submission);
  assert.ok(parsed.success, JSON.stringify(parsed.success ? {} : parsed.error.issues));
  assert.equal(submission.source, "embedded");
  assert.equal(submission.title, "embedded:fixture-lesson");
  const answer = submission.answers[0];
  assert.equal(answer.selectedAnswer, "b");
  assert.equal(answer.correctAnswer, PLACEHOLDER_MCQ.correctOptionId);
  assert.equal(answer.topic, PLACEHOLDER_MCQ.conceptId);
  assert.equal(answer.chapter, "fixture-chapter");
  assert.equal(answer.confident, true);
  assert.deepEqual(Object.keys(answer.options ?? {}), ["a", "b", "c"]);
});

test("self-graded uses the marker pair so server grading mirrors the verdict", () => {
  const recalled = buildRetrievalSubmission(
    PLACEHOLDER_SELF_GRADED,
    {
      itemId: PLACEHOLDER_SELF_GRADED.id,
      conceptId: PLACEHOLDER_SELF_GRADED.conceptId,
      mode: "self-graded",
      correct: true,
    },
    CONTEXT
  );
  assert.equal(recalled.answers[0].selectedAnswer, SELF_GRADED_CORRECT);
  assert.equal(recalled.answers[0].correctAnswer, SELF_GRADED_CORRECT);

  const missed = buildRetrievalSubmission(
    PLACEHOLDER_SELF_GRADED,
    {
      itemId: PLACEHOLDER_SELF_GRADED.id,
      conceptId: PLACEHOLDER_SELF_GRADED.conceptId,
      mode: "self-graded",
      correct: false,
    },
    CONTEXT
  );
  assert.equal(missed.answers[0].selectedAnswer, SELF_GRADED_MISSED);
  assert.equal(missed.answers[0].correctAnswer, SELF_GRADED_CORRECT);
  assert.ok(AttemptSubmissionSchema.safeParse(missed).success);
});

test("embedded source grades as kind 'practice' (live DB check constraint)", () => {
  assert.equal(kindForSource("embedded"), "practice");
  assert.equal(kindForSource("practice"), "practice");
  assert.equal(kindForSource("test"), "test");
  assert.equal(kindForSource("exam"), "test");
});

test("elapsedMs is clamped to the schema's timeSpentMs ceiling", () => {
  const submission = buildRetrievalSubmission(
    PLACEHOLDER_MCQ,
    {
      itemId: PLACEHOLDER_MCQ.id,
      conceptId: PLACEHOLDER_MCQ.conceptId,
      mode: "mcq",
      correct: true,
      selectedOptionId: "a",
      elapsedMs: 99_999_999,
    },
    CONTEXT
  );
  assert.equal(submission.answers[0].timeSpentMs, 7_200_000);
  assert.ok(AttemptSubmissionSchema.safeParse(submission).success);
});

test("unanswered mcq (no selection) survives schema validation as skipped", () => {
  const submission = buildRetrievalSubmission(
    PLACEHOLDER_MCQ,
    {
      itemId: PLACEHOLDER_MCQ.id,
      conceptId: PLACEHOLDER_MCQ.conceptId,
      mode: "mcq",
      correct: false,
    },
    CONTEXT
  );
  assert.equal(submission.answers[0].selectedAnswer, null);
  assert.ok(AttemptSubmissionSchema.safeParse(submission).success);
});
