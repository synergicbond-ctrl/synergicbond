import type { Metadata } from "next";
import ThermodynamicsPart15 from "../parts/ThermodynamicsPart15";
import { ThermoLessonShell } from "../_lesson-helper";

export const metadata: Metadata = { title: "Thermodynamics Part 15 | Synergic Bond", description: "Thermodynamics Part 15: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart15Page() {
  return (
    <ThermoLessonShell part={15}>
      <ThermodynamicsPart15 />
    </ThermoLessonShell>
  );
}
