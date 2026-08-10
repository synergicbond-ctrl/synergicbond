"use client";

// RevealAnswer — attempt-first progressive disclosure. Content stays hidden
// until the student explicitly reveals it; the button carries aria-expanded
// and the region is labelled for assistive tech.

import { useId, useState, type ReactNode } from "react";

export function RevealAnswer({
  label = "Reveal",
  hideLabel = "Hide",
  onReveal,
  children,
}: {
  label?: string;
  hideLabel?: string;
  /** Fired the first time the student reveals (a struggle/reveal signal). */
  onReveal?: () => void;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [everOpened, setEverOpened] = useState(false);
  const regionId = useId();

  return (
    <div className="sbrReveal">
      <button
        type="button"
        className="sbrBtn"
        aria-expanded={open}
        aria-controls={regionId}
        onClick={() => {
          const next = !open;
          setOpen(next);
          if (next && !everOpened) {
            setEverOpened(true);
            onReveal?.();
          }
        }}
      >
        {open ? hideLabel : label}
      </button>
      <div id={regionId} role="region" aria-label="Revealed answer" hidden={!open}>
        {children}
      </div>
    </div>
  );
}
