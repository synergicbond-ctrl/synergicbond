// components/retrieval/fixtures.ts — PLACEHOLDER FIXTURES ONLY.
//
// ██ These are not teaching content. ██
// Every item below is deliberately chemistry-free scaffolding for tests and
// local development. Production items are authored/approved by chemistry
// faculty under founder decision F6 and supplied as data — engineering never
// invents questions, distractors, explanations, or misconception tags.

import type { RetrievalItem } from "./types";

export const PLACEHOLDER_MCQ: RetrievalItem = {
  id: "fixture-mcq-1",
  conceptId: "fixture:placeholder-concept",
  mode: "mcq",
  prompt: "[PLACEHOLDER] Faculty-authored question text appears here (F6).",
  options: [
    { id: "a", label: "[PLACEHOLDER] Correct option" },
    { id: "b", label: "[PLACEHOLDER] Distractor 1", misconceptionId: "fixture:m1" },
    { id: "c", label: "[PLACEHOLDER] Distractor 2", misconceptionId: "fixture:m2" },
  ],
  correctOptionId: "a",
  explanation: "[PLACEHOLDER] Faculty-authored explanation of the distractor logic.",
};

export const PLACEHOLDER_SELF_GRADED: RetrievalItem = {
  id: "fixture-self-1",
  conceptId: "fixture:placeholder-concept",
  mode: "self-graded",
  prompt: "[PLACEHOLDER] Recall prompt appears here; student answers mentally.",
  modelAnswer: "[PLACEHOLDER] Model answer for self-assessment.",
};

export const PLACEHOLDER_ITEMS: RetrievalItem[] = [
  PLACEHOLDER_MCQ,
  PLACEHOLDER_SELF_GRADED,
];
