import type { Metadata } from "next";
import ThermodynamicsPart27 from "../parts/ThermodynamicsPart27";
import { ThermoLessonShell } from "../_lesson-helper";

export const metadata: Metadata = { title: "Thermodynamics Part 27 | Synergic Bond", description: "Thermodynamics Part 27: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart27Page() {
  return (
    <ThermoLessonShell part={27}>
      <ThermodynamicsPart27 />
    </ThermoLessonShell>
  );
}
