import React from "react";
import MoleConceptPart10 from "../part10";
import { MoleConceptLessonShell } from "../_lesson-helper";

export const metadata = {
  title: "Mole Concept — Ideal Gas Applications — SYNERGIC BOND",
  description: "Combined gas law transformations across multiple states and temperature/pressure interconversions.",
};

export default function Page() {
  return (
    <MoleConceptLessonShell part={10}>
      <MoleConceptPart10 />
    </MoleConceptLessonShell>
  );
}