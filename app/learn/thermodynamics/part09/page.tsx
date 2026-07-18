import type { Metadata } from "next";
import ThermodynamicsPart09 from "../parts/ThermodynamicsPart09";
import { ThermoPartFrame } from "../_components/ThermoChapter";

export const metadata: Metadata = { title: "Thermodynamics Part 09 | Synergic Bond", description: "Thermodynamics Part 09: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart09Page() {
  return (
    <ThermoPartFrame part={9}>
      <ThermodynamicsPart09 />
    </ThermoPartFrame>
  );
}
