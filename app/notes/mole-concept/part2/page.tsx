import React from "react";
import MoleConceptPart2 from "../part2";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Mole Concept — Avogadro Constant and Counting Particles — SYNERGIC BOND",
  description: "Atomic number vs mass number, subatomic rest masses, nuclear mass defect calculations, and Einstein E=mc^2 relation.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="mole-concept" part={2}>
      <MoleConceptPart2 />
    </SbcCoursePartFrame>
  );
}
