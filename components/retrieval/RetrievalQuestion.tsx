"use client";

// RetrievalQuestion — one retrieval item (MCQ or self-graded), with optional
// confidence capture before the answer is revealed/graded. Content-agnostic:
// renders exactly the RetrievalItem it is given (faculty-authored, F6) and
// reports a RetrievalResult upward. No persistence here — Phase 4 owns that.

import { useEffect, useMemo, useRef, useState } from "react";
import type { RetrievalItem, RetrievalResult } from "./types";
import { ConfidenceSelector } from "./ConfidenceSelector";
import { RevealAnswer } from "./RevealAnswer";

const OPTION_KEYS = ["A", "B", "C", "D", "E"];

export function RetrievalQuestion({
  item,
  tag = "Check yourself",
  withConfidence = true,
  onResult,
}: {
  item: RetrievalItem;
  /** Label in the card's mono tag, e.g. "Check yourself · §7.4". */
  tag?: string;
  withConfidence?: boolean;
  onResult?: (result: RetrievalResult) => void;
}) {
  const [confident, setConfident] = useState<boolean | undefined>(undefined);
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const [selfVerdict, setSelfVerdict] = useState<boolean | undefined>(undefined);
  const startedAt = useRef<number | null>(null);
  useEffect(() => {
    if (startedAt.current === null) startedAt.current = Date.now();
  }, []);
  const answered = item.mode === "mcq" ? selected !== undefined : selfVerdict !== undefined;

  const emit = (partial: Pick<RetrievalResult, "correct" | "selectedOptionId">, now: number) => {
    onResult?.({
      itemId: item.id,
      conceptId: item.conceptId,
      mode: item.mode,
      confident,
      elapsedMs: startedAt.current === null ? undefined : now - startedAt.current,
      ...partial,
    });
  };

  const statusText = useMemo(() => {
    if (!answered) return "";
    if (item.mode === "mcq") {
      return selected === item.correctOptionId ? "Correct." : "Not quite.";
    }
    return selfVerdict ? "Marked as recalled." : "Marked for revision.";
  }, [answered, item, selected, selfVerdict]);

  return (
    <div className="sbrCard">
      <span className="sbrTag">{tag}</span>
      <p className="sbrPrompt">{item.prompt}</p>

      {withConfidence && !answered && (
        <ConfidenceSelector value={confident} onChange={setConfident} />
      )}

      {item.mode === "mcq" && item.options && (
        <fieldset className="sbrOptions" disabled={answered}>
          <legend>Answer options</legend>
          {item.options.map((option, index) => {
            const isSelected = selected === option.id;
            const isRight = answered && option.id === item.correctOptionId;
            const isWrong = answered && isSelected && option.id !== item.correctOptionId;
            const cls = ["sbrOpt", isRight && "sbrOptRight", isWrong && "sbrOptWrong"]
              .filter(Boolean)
              .join(" ");
            return (
              <button
                key={option.id}
                type="button"
                className={cls}
                aria-pressed={isSelected}
                onClick={() => {
                  if (answered) return;
                  setSelected(option.id);
                  emit(
                    {
                      correct: option.id === item.correctOptionId,
                      selectedOptionId: option.id,
                    },
                    Date.now()
                  );
                }}
              >
                <span className="sbrOptKey" aria-hidden>
                  {OPTION_KEYS[index] ?? "•"}
                </span>
                <span>{option.label}</span>
              </button>
            );
          })}
        </fieldset>
      )}

      {item.mode === "self-graded" && (
        <RevealAnswer label="Answer in your head, then reveal">
          {item.modelAnswer && (
            <div className="sbrModelAnswer">
              <b>Model answer</b>
              {item.modelAnswer}
            </div>
          )}
          {selfVerdict === undefined && (
            <div className="sbrBtnRow" role="group" aria-label="Self-grade">
              <button
                type="button"
                className="sbrBtn"
                onClick={() => {
                  setSelfVerdict(true);
                  emit({ correct: true }, Date.now());
                }}
              >
                I recalled it
              </button>
              <button
                type="button"
                className="sbrBtn"
                onClick={() => {
                  setSelfVerdict(false);
                  emit({ correct: false }, Date.now());
                }}
              >
                I missed it
              </button>
            </div>
          )}
        </RevealAnswer>
      )}

      <p role="status" aria-live="polite" className="sbrExplain" style={!answered ? { display: "none" } : undefined}>
        {answered && (
          <>
            <strong>{statusText}</strong>{" "}
            {item.explanation ?? ""}
          </>
        )}
      </p>
    </div>
  );
}
