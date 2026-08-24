import React from "react";
import MoleConceptPart15 from "../part15";
import { MoleConceptLessonShell } from "../_lesson-helper";

export const metadata = {
  title: "Mole Concept — Dissociation, Association and Final Review — SYNERGIC BOND",
  description: "Gas dissociation equilibrium, degree of dissociation (alpha), apparent molecular mass, and complete course review.",
};

export default function Page() {
  return (
    <MoleConceptLessonShell part={15}>
      <MoleConceptPart15 />
    </MoleConceptLessonShell>
  );
}