import React from "react";
import EudiometryPart1 from "../part1";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Eudiometry — Module 1: Gas Volume Foundations — SYNERGIC BOND",
  description: "Introduction to Eudiometry, Gay-Lussac's combining volume laws, Amagat's additive volume law, and phase treatment assumptions.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="eudiometry" part={1}>
      <EudiometryPart1 />
    </SbcCoursePartFrame>
  );
}
