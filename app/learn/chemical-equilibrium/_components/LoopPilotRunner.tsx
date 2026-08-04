"use client";

// LoopPilotRunner — the INTERACTIVE half of the pilot section. Kept as small
// as possible: the styles block and the static pilot notice are rendered by
// the server component (LoopPilotSection), so only this file's code ships to
// the browser.
//
// Direct module imports (not the components/retrieval barrel) so unused
// library components — MistakeReflection in particular — stay out of the
// pilot's client chunk.

import { useCallback, useMemo, useState } from "react";
import { RetrievalQuestion } from "@/components/retrieval/RetrievalQuestion";
import { SessionSummary, type SessionSummaryRow } from "@/components/retrieval/SessionSummary";
import type { RetrievalItem, RetrievalResult } from "@/components/retrieval/types";
import { recordRetrievalResult } from "@/lib/retrieval/record";
import type { RetrievalContext } from "@/lib/retrieval/submission";

function calibrationNote(result: RetrievalResult | undefined): string | undefined {
  if (!result || result.confident === undefined) return undefined;
  if (result.confident) return result.correct ? "sure & right" : "sure but wrong";
  return result.correct ? "unsure but right" : "unsure & wrong";
}

export function LoopPilotRunner({
  items,
  context,
}: {
  items: RetrievalItem[];
  context: RetrievalContext;
}) {
  const [results, setResults] = useState<Record<string, RetrievalResult>>({});

  const handleResult = useCallback(
    (item: RetrievalItem, result: RetrievalResult) => {
      setResults((prev) => (prev[result.itemId] ? prev : { ...prev, [result.itemId]: result }));
      recordRetrievalResult(item, result, context);
    },
    [context]
  );

  const allAnswered = useMemo(
    () => items.every((item) => results[item.id] !== undefined),
    [items, results]
  );

  const summaryRows = useMemo<SessionSummaryRow[]>(
    () =>
      items.map((item) => ({
        itemId: item.id,
        label: item.prompt,
        correct: results[item.id]?.correct ?? false,
        note: calibrationNote(results[item.id]),
      })),
    [items, results]
  );

  return (
    <>
      {items.map((item) => (
        <RetrievalQuestion
          key={item.id}
          item={item}
          tag={`Check yourself · ${context.contextId}`}
          onResult={(result) => handleResult(item, result)}
        />
      ))}
      {allAnswered && (
        <SessionSummary
          rows={summaryRows}
          takeaway="Placeholder run complete — results recorded to the attempts layer."
        />
      )}
    </>
  );
}
