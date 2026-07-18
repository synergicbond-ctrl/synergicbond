import React from "react";
import EudiometryPart4 from "../part4";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Eudiometry — Module 4: Hydrogen, Nitrogen & Oxygen Firing — SYNERGIC BOND",
  description: "Hypothesis testing for unknown limiting reagents and multi-stage sequential firings with secondary oxygen additions.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="eudiometry" part={4}>
      <EudiometryPart4 />
    </SbcCoursePartFrame>
  );
}
