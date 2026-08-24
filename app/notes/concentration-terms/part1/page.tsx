import React from "react";
import ConcentrationTermsPart1 from "../part1";
import { ConcentrationTermsLessonShell } from "../_lesson-helper";

export const metadata = {
  title: "Concentration Terms — Topic 1: Solute vs Solvent & Percentage Solutions — SYNERGIC BOND",
  description: "Transcribed classroom notes: Solution definitions, Solute vs Solvent selection rules, and Percentage formulas (% w/w, w/v, v/v).",
};

export default function Page() {
  return (
    <ConcentrationTermsLessonShell part={1}>
      <ConcentrationTermsPart1 />
    </ConcentrationTermsLessonShell>
  );
}