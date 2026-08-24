import React from "react";
import EudiometryPart2 from "../part2";
import { EudiometryLessonShell } from "../_lesson-helper";

export const metadata = {
  title: "Eudiometry — Module 2: Combustion & Final Gas Composition — SYNERGIC BOND",
  description: "Limiting reagent identification in volume units, simultaneous equations for binary gas mixtures, and volume expansions/contractions.",
};

export default function Page() {
  return (
    <EudiometryLessonShell part={2}>
      <EudiometryPart2 />
    </EudiometryLessonShell>
  );
}