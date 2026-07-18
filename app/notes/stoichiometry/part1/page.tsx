import React from "react";
import StoichiometryPart1 from "../part1";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Stoichiometry Part 1 (Pages 1–4) — SYNERGIC BOND",
  description: "Transcribed notes: Stoichiometric coefficients, Mass-Mass, Mass-Volume, and Volume-Volume relationship calculations.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="stoichiometry" part={1}>
      <StoichiometryPart1 />
    </SbcCoursePartFrame>
  );
}
