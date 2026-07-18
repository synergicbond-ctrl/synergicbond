import type { Metadata } from "next";
import ThermodynamicsPart22 from "../parts/ThermodynamicsPart22";
import { ThermoPartFrame } from "../_components/ThermoChapter";

export const metadata: Metadata = { title: "Thermodynamics Part 22 | Synergic Bond", description: "Thermodynamics Part 22: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart22Page() {
  return (
    <ThermoPartFrame part={22}>
      <ThermodynamicsPart22 />
    </ThermoPartFrame>
  );
}
