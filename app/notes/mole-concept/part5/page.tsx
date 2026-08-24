import React from "react";
import MoleConceptPart5 from "../part5";
import { MoleConceptLessonShell } from "../_lesson-helper";

export const metadata = {
  title: "Mole Concept — Molecular Mass and Formula Mass — SYNERGIC BOND",
  description: "Molecular mass calculations, Gram Molecular Mass (GMM), mass conservation across reactions, and particle counting.",
};

export default function Page() {
  return (
    <MoleConceptLessonShell part={5}>
      <MoleConceptPart5 />
    </MoleConceptLessonShell>
  );
}