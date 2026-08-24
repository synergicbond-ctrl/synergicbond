import type { Metadata } from "next";
import ThermodynamicsPart18 from "../parts/ThermodynamicsPart18";
import { ThermoLessonShell } from "../_lesson-helper";

export const metadata: Metadata = { title: "Thermodynamics Part 18 | Synergic Bond", description: "Thermodynamics Part 18: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart18Page() {
  return (
    <ThermoLessonShell part={18}>
      <ThermodynamicsPart18 />
    </ThermoLessonShell>
  );
}
