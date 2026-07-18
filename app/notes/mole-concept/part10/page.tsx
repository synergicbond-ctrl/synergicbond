import React from "react";
import MoleConceptPart10 from "../part10";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Mole Concept — Ideal Gas Applications — SYNERGIC BOND",
  description: "Combined gas law transformations across multiple states and temperature/pressure interconversions.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="mole-concept" part={10}>
      <MoleConceptPart10 />
    </SbcCoursePartFrame>
  );
}
