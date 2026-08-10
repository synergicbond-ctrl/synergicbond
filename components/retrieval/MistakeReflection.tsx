"use client";

// MistakeReflection — after a wrong answer: predict-then-reflect. The student
// names (or selects) where they think it went wrong before moving on. The
// note is reported upward; nothing is stored here (Phase 4 owns persistence).

import { useState } from "react";

export function MistakeReflection({
  prompt = "Where do you think it went wrong?",
  choices,
  onReflect,
}: {
  prompt?: string;
  /** Optional faculty-authored reflection choices (e.g. named missteps). */
  choices?: { id: string; label: string }[];
  onReflect?: (reflection: { choiceId?: string; note?: string }) => void;
}) {
  const [choiceId, setChoiceId] = useState<string | undefined>(undefined);
  const [note, setNote] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className="sbrExplain" role="status">
        <strong>Noted.</strong> This will resurface in revision.
      </p>
    );
  }

  return (
    <div className="sbrCard" style={{ borderLeftColor: "#E06E6E" }}>
      <span className="sbrTag" style={{ color: "#E06E6E" }}>
        Mistake reflection
      </span>
      <p className="sbrPrompt">{prompt}</p>
      {choices && choices.length > 0 && (
        <div className="sbrBtnRow" role="group" aria-label="Reflection choices">
          {choices.map((choice) => (
            <button
              key={choice.id}
              type="button"
              className="sbrConfBtn"
              aria-pressed={choiceId === choice.id}
              onClick={() => setChoiceId(choice.id)}
            >
              {choice.label}
            </button>
          ))}
        </div>
      )}
      <div className="sbrReflect">
        <label className="sbrConfLabel" htmlFor="sbr-reflection-note">
          In your own words (optional)
        </label>
        <textarea
          id="sbr-reflection-note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="One line is enough."
        />
        <div className="sbrBtnRow">
          <button
            type="button"
            className="sbrBtn"
            onClick={() => {
              setDone(true);
              onReflect?.({ choiceId, note: note.trim() || undefined });
            }}
          >
            Save reflection
          </button>
        </div>
      </div>
    </div>
  );
}
