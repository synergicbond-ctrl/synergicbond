import React from "react";
import EudiometryPart1 from "../part1";
import { EudiometryLessonShell } from "../_lesson-helper";

export const metadata = {
  title: "Eudiometry — Module 1: Gas Volume Foundations — SYNERGIC BOND",
  description: "Introduction to Eudiometry, Gay-Lussac's combining volume laws, Amagat's additive volume law, and phase treatment assumptions.",
};

export default function Page() {
  return (
    <EudiometryLessonShell part={1}>
      <EudiometryPart1 />
    </EudiometryLessonShell>
  );
}