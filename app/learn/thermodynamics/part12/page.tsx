import type { Metadata } from "next";
import ThermodynamicsPart12 from "../parts/ThermodynamicsPart12";
import { ThermoLessonShell } from "../_lesson-helper";

export const metadata: Metadata = { title: "Thermodynamics Part 12 | Synergic Bond", description: "Thermodynamics Part 12: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart12Page() {
  return (
    <ThermoLessonShell part={12}>
      <ThermodynamicsPart12 />
    </ThermoLessonShell>
  );
}
