import React from "react";
import MoleConceptPart8 from "../part8";
import { MoleConceptLessonShell } from "../_lesson-helper";

export const metadata = {
  title: "Mole Concept — Compound Composition Problems — SYNERGIC BOND",
  description: "Simultaneous linear mass extraction across dual binary compounds, organometallic analysis, and CH4 extraction stoichiometry.",
};

export default function Page() {
  return (
    <MoleConceptLessonShell part={8}>
      <MoleConceptPart8 />
    </MoleConceptLessonShell>
  );
}