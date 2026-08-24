import React from "react";
import MoleConceptPart3 from "../part3";
import { MoleConceptLessonShell } from "../_lesson-helper";

export const metadata = {
  title: "Mole Concept — Atomic Mass and Mass Scale — SYNERGIC BOND",
  description: "Historical atomic mass scales (H, O, C-12), unified atomic mass unit (u), and gram atomic mass (GAM) solved calculations.",
};

export default function Page() {
  return (
    <MoleConceptLessonShell part={3}>
      <MoleConceptPart3 />
    </MoleConceptLessonShell>
  );
}