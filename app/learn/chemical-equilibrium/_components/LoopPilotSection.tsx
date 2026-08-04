"use client";

// LoopPilotSection — the Learn→Retrieve→Revise pilot surface for ONE lesson
// (Phase 5 of the IA rollout). Rendered ONLY when loop_pilot_v1 is enabled;
// the lesson page returns its exact pre-pilot tree otherwise.
//
// Content is PLACEHOLDER ONLY (visibly marked). Faculty-authored items
// replace components/retrieval/fixtures.ts imports under founder decision
// F6 — this file changes by swapping the imported items, nothing else.

import { useState } from "react";
import {
  RetrievalStyles,
  RetrievalQuestion,
  RetrievalCard,
  SessionSummary,
  type RetrievalResult,
  type SessionSummaryRow,
} from "@/components/retrieval";
import { PLACEHOLDER_ITEMS } from "@/components/retrieval/fixtures";
import { recordRetrievalResult } from "@/lib/retrieval/record";

const CONTEXT = {
  contextId: "ceq-part01",
  exam: "jee",
  chapterId: "chemical-equilibrium",
};

export function LoopPilotSection() {
  const [results, setResults] = useState<Record<string, RetrievalResult>>({});
  const items = PLACEHOLDER_ITEMS;
  const allAnswered = items.every((item) => results[item.id] !== undefined);

  const summaryRows: SessionSummaryRow[] = items.map((item) => {
    const r = results[item.id];
    return {
      itemId: item.id,
      label: item.prompt,
      correct: r?.correct ?? false,
      note:
        r?.confident === undefined
          ? undefined
          : r.confident && r.correct
            ? "sure & right"
            : r.confident
              ? "sure but wrong"
              : r.correct
                ? "unsure but right"
                : "unsure & wrong",
    };
  });

  return (
    <section
      aria-label="Retrieval pilot (placeholder content)"
      className="mx-auto w-full max-w-5xl px-4 pb-12 sm:px-6 lg:px-8"
    >
      <RetrievalStyles />
      <RetrievalCard tag="Pilot preview · placeholder content" edgeColor="#E4B04A">
        <p className="sbrPrompt">
          These checks are engineering placeholders demonstrating the retrieval
          flow. Faculty-authored questions replace them before any student
          cohort sees this lesson (decision F6).
        </p>
      </RetrievalCard>
      {items.map((item) => (
        <RetrievalQuestion
          key={item.id}
          item={item}
          tag={`Check yourself · ${CONTEXT.contextId}`}
          onResult={(result) => {
            setResults((prev) =>
              prev[result.itemId] ? prev : { ...prev, [result.itemId]: result }
            );
            recordRetrievalResult(item, result, CONTEXT);
          }}
        />
      ))}
      {allAnswered && (
        <SessionSummary
          rows={summaryRows}
          takeaway="Placeholder run complete — results recorded to the attempts layer."
        />
      )}
    </section>
  );
}
