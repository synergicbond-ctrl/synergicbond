import type { Metadata } from "next";
import ThermodynamicsPart24 from "../parts/ThermodynamicsPart24";
import { ThermoPartFrame } from "../_components/ThermoChapter";

export const metadata: Metadata = { title: "Thermodynamics Part 24 | Synergic Bond", description: "Thermodynamics Part 24: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart24Page() {
  return (
    <ThermoPartFrame part={24}>
      <ThermodynamicsPart24 />
    </ThermoPartFrame>
  );
}
