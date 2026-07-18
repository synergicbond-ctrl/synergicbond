import React from "react";
import StoichiometryPart8 from "../part8";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Stoichiometry Part 8 (Pages 64–72) — SYNERGIC BOND",
  description: "Transcribed notes: Empirical and Molecular Formula, Atomic Mass Determination, Dulong and Petit's Law, and Volatile Chloride Method.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="stoichiometry" part={8}>
      <StoichiometryPart8 />
    </SbcCoursePartFrame>
  );
}
