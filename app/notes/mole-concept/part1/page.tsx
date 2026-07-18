import React from "react";
import MoleConceptPart1 from "../part1";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Mole Concept — Foundations of the Mole — SYNERGIC BOND",
  description: "SI definition of the mole, Avogadro constant, Faraday constant relationship, formula units, and particle-to-mole calculations.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="mole-concept" part={1}>
      <MoleConceptPart1 />
    </SbcCoursePartFrame>
  );
}
