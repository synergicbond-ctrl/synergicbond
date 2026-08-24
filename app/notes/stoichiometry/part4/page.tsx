import React from "react";
import StoichiometryPart4 from "../part4";
import { StoichiometryLessonShell } from "../_lesson-helper";

export const metadata = {
  title: "Stoichiometry Part 4 (Pages 28–36) — SYNERGIC BOND",
  description: "Transcribed notes: SO3 Dissociation, Acetylene Trimerisation, NH3 Dissociation, Percentage Purity, Pyrolusite Assay, and Mixture Problems.",
};

export default function Page() {
  return (
    <StoichiometryLessonShell part={4}>
      <StoichiometryPart4 />
    </StoichiometryLessonShell>
  );
}