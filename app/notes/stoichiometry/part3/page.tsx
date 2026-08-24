import React from "react";
import StoichiometryPart3 from "../part3";
import { StoichiometryLessonShell } from "../_lesson-helper";

export const metadata = {
  title: "Stoichiometry Part 3 (Pages 18–27) — SYNERGIC BOND",
  description: "Transcribed notes: Detection of Limiting Reagent, Percentage Yield, Degree of Dissociation from Vapour Density, and Solved Examples.",
};

export default function Page() {
  return (
    <StoichiometryLessonShell part={3}>
      <StoichiometryPart3 />
    </StoichiometryLessonShell>
  );
}