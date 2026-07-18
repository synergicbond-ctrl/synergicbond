import React from "react";
import StoichiometryPart2 from "../part2";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Stoichiometry Part 2 (Pages 5–8) — SYNERGIC BOND",
  description: "Transcribed notes: Limiting Reagent (LR), Excess Reagent, Percentage Yield, Percentage Purity, Sequential & Parallel Reactions.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="stoichiometry" part={2}>
      <StoichiometryPart2 />
    </SbcCoursePartFrame>
  );
}
