import type { Metadata } from "next";
import ThermodynamicsPart10 from "../parts/ThermodynamicsPart10";
import { ThermoPartFrame } from "../_components/ThermoChapter";

export const metadata: Metadata = { title: "Thermodynamics Part 10 | Synergic Bond", description: "Thermodynamics Part 10: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart10Page() {
  return (
    <ThermoPartFrame part={10}>
      <ThermodynamicsPart10 />
    </ThermoPartFrame>
  );
}
