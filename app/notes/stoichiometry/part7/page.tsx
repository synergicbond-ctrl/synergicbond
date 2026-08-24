import React from "react";
import StoichiometryPart7 from "../part7";
import { StoichiometryLessonShell } from "../_lesson-helper";

export const metadata = {
  title: "Stoichiometry Part 7 (Pages 55–63) — SYNERGIC BOND",
  description: "Transcribed notes: Percentage Composition, Dumas & Kjeldahl Methods for Nitrogen, and Empirical vs Molecular Formulas.",
};

export default function Page() {
  return (
    <StoichiometryLessonShell part={7}>
      <StoichiometryPart7 />
    </StoichiometryLessonShell>
  );
}