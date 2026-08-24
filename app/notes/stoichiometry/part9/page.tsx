import React from "react";
import StoichiometryPart9 from "../part9";
import { StoichiometryLessonShell } from "../_lesson-helper";

export const metadata = {
  title: "Stoichiometry Part 9 (Pages 73–81) — SYNERGIC BOND",
  description: "Transcribed notes: Volatile Chloride & Nitride Methods, Law of Isomorphism, Victor Meyer Method, Silver Salt Method, and Chloroplatinate Method.",
};

export default function Page() {
  return (
    <StoichiometryLessonShell part={9}>
      <StoichiometryPart9 />
    </StoichiometryLessonShell>
  );
}