import React from "react";
import EudiometryPart4 from "../part4";
import { EudiometryLessonShell } from "../_lesson-helper";

export const metadata = {
  title: "Eudiometry — Module 4: Hydrogen, Nitrogen & Oxygen Firing — SYNERGIC BOND",
  description: "Hypothesis testing for unknown limiting reagents and multi-stage sequential firings with secondary oxygen additions.",
};

export default function Page() {
  return (
    <EudiometryLessonShell part={4}>
      <EudiometryPart4 />
    </EudiometryLessonShell>
  );
}