import React from "react";
import MoleConceptPart4 from "../part4";
import { MoleConceptLessonShell } from "../_lesson-helper";

export const metadata = {
  title: "Mole Concept — Gram Atomic Mass and Conversions — SYNERGIC BOND",
  description: "Atomic dimensions vs molar volume, crystal lattice packing efficiency (SC/BCC/FCC), and line-up atom calculations.",
};

export default function Page() {
  return (
    <MoleConceptLessonShell part={4}>
      <MoleConceptPart4 />
    </MoleConceptLessonShell>
  );
}