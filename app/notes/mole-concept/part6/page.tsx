import React from "react";
import MoleConceptPart6 from "../part6";
import { MoleConceptLessonShell } from "../_lesson-helper";

export const metadata = {
  title: "Mole Concept — Formula Units and Hydrated Salts — SYNERGIC BOND",
  description: "Extending quantitative stoichiometry to virus particle specific volumes, macromolecule mass, and hydrated salt inventories.",
};

export default function Page() {
  return (
    <MoleConceptLessonShell part={6}>
      <MoleConceptPart6 />
    </MoleConceptLessonShell>
  );
}