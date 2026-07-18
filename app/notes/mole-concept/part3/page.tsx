import React from "react";
import MoleConceptPart3 from "../part3";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Mole Concept — Atomic Mass and Mass Scale — SYNERGIC BOND",
  description: "Historical atomic mass scales (H, O, C-12), unified atomic mass unit (u), and gram atomic mass (GAM) solved calculations.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="mole-concept" part={3}>
      <MoleConceptPart3 />
    </SbcCoursePartFrame>
  );
}
