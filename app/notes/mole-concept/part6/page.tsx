import React from "react";
import MoleConceptPart6 from "../part6";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Mole Concept — Formula Units and Hydrated Salts — SYNERGIC BOND",
  description: "Extending quantitative stoichiometry to virus particle specific volumes, macromolecule mass, and hydrated salt inventories.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="mole-concept" part={6}>
      <MoleConceptPart6 />
    </SbcCoursePartFrame>
  );
}
