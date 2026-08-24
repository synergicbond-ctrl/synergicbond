import type { Metadata } from "next";
import ThermodynamicsPart29 from "../parts/ThermodynamicsPart29";
import { ThermoLessonShell } from "../_lesson-helper";

export const metadata: Metadata = { title: "Thermodynamics Part 29 | Synergic Bond", description: "Thermodynamics Part 29: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart29Page() {
  return (
    <ThermoLessonShell part={29}>
      <ThermodynamicsPart29 />
    </ThermoLessonShell>
  );
}
