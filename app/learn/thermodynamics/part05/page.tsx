import type { Metadata } from "next";
import ThermodynamicsPart05 from "../parts/ThermodynamicsPart05";
import { ThermoPartFrame } from "../_components/ThermoChapter";

export const metadata: Metadata = { title: "Thermodynamics Part 05 | Synergic Bond", description: "Thermodynamics Part 05: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart05Page() {
  return (
    <ThermoPartFrame part={5}>
      <ThermodynamicsPart05 />
    </ThermoPartFrame>
  );
}
