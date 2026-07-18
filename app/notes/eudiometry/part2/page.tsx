import React from "react";
import EudiometryPart2 from "../part2";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Eudiometry — Module 2: Combustion & Final Gas Composition — SYNERGIC BOND",
  description: "Limiting reagent identification in volume units, simultaneous equations for binary gas mixtures, and volume expansions/contractions.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="eudiometry" part={2}>
      <EudiometryPart2 />
    </SbcCoursePartFrame>
  );
}
