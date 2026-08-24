import type { Metadata } from "next";
import ThermodynamicsPart11 from "../parts/ThermodynamicsPart11";
import { ThermoLessonShell } from "../_lesson-helper";

export const metadata: Metadata = { title: "Thermodynamics Part 11 | Synergic Bond", description: "Thermodynamics Part 11: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart11Page() {
  return (
    <ThermoLessonShell part={11}>
      <ThermodynamicsPart11 />
    </ThermoLessonShell>
  );
}
