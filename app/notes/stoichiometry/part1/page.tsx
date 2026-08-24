import React from "react";
import StoichiometryPart1 from "../part1";
import { StoichiometryLessonShell } from "../_lesson-helper";

export const metadata = {
  title: "Stoichiometry Part 1 (Pages 1–4) — SYNERGIC BOND",
  description: "Transcribed notes: Stoichiometric coefficients, Mass-Mass, Mass-Volume, and Volume-Volume relationship calculations.",
};

export default function Page() {
  return (
    <StoichiometryLessonShell part={1}>
      <StoichiometryPart1 />
    </StoichiometryLessonShell>
  );
}