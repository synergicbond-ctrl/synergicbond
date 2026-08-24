import type { Metadata } from "next";
import ThermodynamicsPart24 from "../parts/ThermodynamicsPart24";
import { ThermoLessonShell } from "../_lesson-helper";

export const metadata: Metadata = { title: "Thermodynamics Part 24 | Synergic Bond", description: "Thermodynamics Part 24: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart24Page() {
  return (
    <ThermoLessonShell part={24}>
      <ThermodynamicsPart24 />
    </ThermoLessonShell>
  );
}
