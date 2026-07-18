import type { Metadata } from "next";
import ThermodynamicsPart27 from "../parts/ThermodynamicsPart27";
import { ThermoPartFrame } from "../_components/ThermoChapter";

export const metadata: Metadata = { title: "Thermodynamics Part 27 | Synergic Bond", description: "Thermodynamics Part 27: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart27Page() {
  return (
    <ThermoPartFrame part={27}>
      <ThermodynamicsPart27 />
    </ThermoPartFrame>
  );
}
