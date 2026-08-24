import type { Metadata } from "next";
import ThermodynamicsPart01 from "../parts/ThermodynamicsPart01";
import { ThermoLessonShell } from "../_lesson-helper";

export const metadata: Metadata = { title: "Thermodynamics Part 01 | Synergic Bond", description: "Thermodynamics Part 01: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart01Page() {
  return (
    <ThermoLessonShell part={1}>
      <ThermodynamicsPart01 />
    </ThermoLessonShell>
  );
}
