import type { Metadata } from "next";
import ThermodynamicsPart26 from "../parts/ThermodynamicsPart26";
import { ThermoPartFrame } from "../_components/ThermoChapter";

export const metadata: Metadata = { title: "Thermodynamics Part 26 | Synergic Bond", description: "Thermodynamics Part 26: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart26Page() {
  return (
    <ThermoPartFrame part={26}>
      <ThermodynamicsPart26 />
    </ThermoPartFrame>
  );
}
