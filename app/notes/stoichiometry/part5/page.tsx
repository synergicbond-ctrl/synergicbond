import React from "react";
import StoichiometryPart5 from "../part5";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Stoichiometry Part 5 (Pages 37–45) — SYNERGIC BOND",
  description: "Transcribed notes: Equivalent Reaction Form, Methane-Ethane Mixture Combustion, Salts Mixture, Minimum AgNO3 Volume, and Competitive Reactions.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="stoichiometry" part={5}>
      <StoichiometryPart5 />
    </SbcCoursePartFrame>
  );
}
