import type { Metadata } from "next";
import ThermodynamicsPart29 from "../parts/ThermodynamicsPart29";
import { ThermoPartFrame } from "../_components/ThermoChapter";

export const metadata: Metadata = { title: "Thermodynamics Part 29 | Synergic Bond", description: "Thermodynamics Part 29: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart29Page() {
  return (
    <ThermoPartFrame part={29}>
      <ThermodynamicsPart29 />
    </ThermoPartFrame>
  );
}
