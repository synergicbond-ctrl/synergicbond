import type { Metadata } from "next";
import ThermodynamicsPart30 from "../parts/ThermodynamicsPart30";
import { ThermoLessonShell } from "../_lesson-helper";

export const metadata: Metadata = { title: "Thermodynamics Part 30 | Synergic Bond", description: "Thermodynamics Part 30: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart30Page() {
  return (
    <ThermoLessonShell part={30}>
      <ThermodynamicsPart30 />
    </ThermoLessonShell>
  );
}
