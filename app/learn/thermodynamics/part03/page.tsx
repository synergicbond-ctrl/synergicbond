import type { Metadata } from "next";
import ThermodynamicsPart03 from "../parts/ThermodynamicsPart03";
import { ThermoPartFrame } from "../_components/ThermoChapter";

export const metadata: Metadata = { title: "Thermodynamics Part 03 | Synergic Bond", description: "Thermodynamics Part 03: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart03Page() {
  return (
    <ThermoPartFrame part={3}>
      <ThermodynamicsPart03 />
    </ThermoPartFrame>
  );
}
