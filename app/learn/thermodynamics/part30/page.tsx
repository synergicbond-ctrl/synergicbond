import type { Metadata } from "next";
import ThermodynamicsPart30 from "../parts/ThermodynamicsPart30";
import { ThermoPartFrame } from "../_components/ThermoChapter";

export const metadata: Metadata = { title: "Thermodynamics Part 30 | Synergic Bond", description: "Thermodynamics Part 30: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart30Page() {
  return (
    <ThermoPartFrame part={30}>
      <ThermodynamicsPart30 />
    </ThermoPartFrame>
  );
}
