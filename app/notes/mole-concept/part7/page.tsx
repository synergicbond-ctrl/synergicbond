import React from "react";
import MoleConceptPart7 from "../part7";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Mole Concept — Charge Counting in Ions — SYNERGIC BOND",
  description: "Polyatomic ionic electron/proton inventories, total Coulombs of charge calculations, and AB2/A2B3 algebraic trap systems.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="mole-concept" part={7}>
      <MoleConceptPart7 />
    </SbcCoursePartFrame>
  );
}
