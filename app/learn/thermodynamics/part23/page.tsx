import type { Metadata } from "next";
import ThermodynamicsPart23 from "../parts/ThermodynamicsPart23";
import { ThermoLessonShell } from "../_lesson-helper";

export const metadata: Metadata = { title: "Thermodynamics Part 23 | Synergic Bond", description: "Thermodynamics Part 23: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart23Page() {
  return (
    <ThermoLessonShell part={23}>
      <ThermodynamicsPart23 />
    </ThermoLessonShell>
  );
}
