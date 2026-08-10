"use client";

// ConfidenceSelector — one-tap sure/unsure captured BEFORE an answer is
// graded (calibration signal, Blueprint §11). Controlled component.

export function ConfidenceSelector({
  value,
  onChange,
  label = "How sure are you?",
}: {
  value: boolean | undefined;
  onChange: (confident: boolean) => void;
  label?: string;
}) {
  return (
    <div className="sbrConf" role="group" aria-label={label}>
      <span className="sbrConfLabel">{label}</span>
      <button
        type="button"
        className="sbrConfBtn"
        aria-pressed={value === true}
        onClick={() => onChange(true)}
      >
        Sure
      </button>
      <button
        type="button"
        className="sbrConfBtn"
        aria-pressed={value === false}
        onClick={() => onChange(false)}
      >
        Not sure
      </button>
    </div>
  );
}
