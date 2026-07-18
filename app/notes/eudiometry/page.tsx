import React from "react";
import { SbcCourseHub } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Eudiometry — Synergic Bond Course Chapter",
  description: "Comprehensive interactive course modules on Eudiometry, gas-phase combustion stoichiometry, selective chemical absorbents, and molecular formula determination.",
};

export default function Page() {
  return <SbcCourseHub courseId="eudiometry" />;
}
