import React from "react";
import MoleConceptPart13 from "../part13";
import { MoleConceptLessonShell } from "../_lesson-helper";

export const metadata = {
  title: "Mole Concept — Gas Mixtures and Partial Pressure — SYNERGIC BOND",
  description: "Non-reacting gas mixture average molecular mass, Dalton Partial Pressures, and Amagat Partial Volumes.",
};

export default function Page() {
  return (
    <MoleConceptLessonShell part={13}>
      <MoleConceptPart13 />
    </MoleConceptLessonShell>
  );
}