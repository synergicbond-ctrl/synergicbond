import type { Metadata } from "next";
import ThermodynamicsPart18 from "../parts/ThermodynamicsPart18";
import { ThermoPartFrame } from "../_components/ThermoChapter";

export const metadata: Metadata = { title: "Thermodynamics Part 18 | Synergic Bond", description: "Thermodynamics Part 18: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart18Page() {
  return (
    <ThermoPartFrame part={18}>
      <ThermodynamicsPart18 />
    </ThermoPartFrame>
  );
}
