import type { Metadata } from "next";
import ThermodynamicsPart21 from "../parts/ThermodynamicsPart21";
import { ThermoPartFrame } from "../_components/ThermoChapter";

export const metadata: Metadata = { title: "Thermodynamics Part 21 | Synergic Bond", description: "Thermodynamics Part 21: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart21Page() {
  return (
    <ThermoPartFrame part={21}>
      <ThermodynamicsPart21 />
    </ThermoPartFrame>
  );
}
