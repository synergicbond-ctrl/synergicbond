import React from "react";
import StoichiometryPart5 from "../part5";
import { StoichiometryLessonShell } from "../_lesson-helper";

export const metadata = {
  title: "Stoichiometry Part 5 (Pages 37–45) — SYNERGIC BOND",
  description: "Transcribed notes: Equivalent Reaction Form, Methane-Ethane Mixture Combustion, Salts Mixture, Minimum AgNO3 Volume, and Competitive Reactions.",
};

export default function Page() {
  return (
    <StoichiometryLessonShell part={5}>
      <StoichiometryPart5 />
    </StoichiometryLessonShell>
  );
}