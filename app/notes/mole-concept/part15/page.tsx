import React from "react";
import MoleConceptPart15 from "../part15";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Mole Concept — Dissociation, Association and Final Review — SYNERGIC BOND",
  description: "Gas dissociation equilibrium, degree of dissociation (alpha), apparent molecular mass, and complete course review.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="mole-concept" part={15}>
      <MoleConceptPart15 />
    </SbcCoursePartFrame>
  );
}
