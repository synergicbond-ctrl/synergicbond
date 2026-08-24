import type { Metadata } from "next";
import ThermodynamicsPart28 from "../parts/ThermodynamicsPart28";
import { ThermoLessonShell } from "../_lesson-helper";

export const metadata: Metadata = { title: "Thermodynamics Part 28 | Synergic Bond", description: "Thermodynamics Part 28: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart28Page() {
  return (
    <ThermoLessonShell part={28}>
      <ThermodynamicsPart28 />
    </ThermoLessonShell>
  );
}
