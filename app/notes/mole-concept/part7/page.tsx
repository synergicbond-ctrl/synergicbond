import React from "react";
import MoleConceptPart7 from "../part7";
import { MoleConceptLessonShell } from "../_lesson-helper";

export const metadata = {
  title: "Mole Concept — Charge Counting in Ions — SYNERGIC BOND",
  description: "Polyatomic ionic electron/proton inventories, total Coulombs of charge calculations, and AB2/A2B3 algebraic trap systems.",
};

export default function Page() {
  return (
    <MoleConceptLessonShell part={7}>
      <MoleConceptPart7 />
    </MoleConceptLessonShell>
  );
}