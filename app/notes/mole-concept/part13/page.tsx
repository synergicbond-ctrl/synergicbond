import React from "react";
import MoleConceptPart13 from "../part13";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Mole Concept — Gas Mixtures and Partial Pressure — SYNERGIC BOND",
  description: "Non-reacting gas mixture average molecular mass, Dalton Partial Pressures, and Amagat Partial Volumes.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="mole-concept" part={13}>
      <MoleConceptPart13 />
    </SbcCoursePartFrame>
  );
}
