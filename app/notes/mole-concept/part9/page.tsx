import React from "react";
import MoleConceptPart9 from "../part9";
import { SbcCoursePartFrame } from "@/components/notes/SbcCourseChrome";

export const metadata = {
  title: "Mole Concept — Gaseous Molar Volume — SYNERGIC BOND",
  description: "Standard molar volume at STP/NTP (22.4 L/mol vs 22.7 L/mol), ideal gas equation PV=nRT, and gas constant unit interconversions.",
};

export default function Page() {
  return (
    <SbcCoursePartFrame courseId="mole-concept" part={9}>
      <MoleConceptPart9 />
    </SbcCoursePartFrame>
  );
}
