import React from "react";
import MoleConceptPart14 from "../part14";
import { MoleConceptLessonShell } from "../_lesson-helper";

export const metadata = {
  title: "Mole Concept — Ozonized Oxygen and Mixture Analysis — SYNERGIC BOND",
  description: "Advanced multi-component gas mixtures, vapour density correlations, and ozonized oxygen conversion kinetics.",
};

export default function Page() {
  return (
    <MoleConceptLessonShell part={14}>
      <MoleConceptPart14 />
    </MoleConceptLessonShell>
  );
}