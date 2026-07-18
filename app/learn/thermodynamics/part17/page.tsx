import type { Metadata } from "next";
import ThermodynamicsPart17 from "../parts/ThermodynamicsPart17";
import { ThermoPartFrame } from "../_components/ThermoChapter";

export const metadata: Metadata = { title: "Thermodynamics Part 17 | Synergic Bond", description: "Thermodynamics Part 17: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart17Page() {
  return (
    <ThermoPartFrame part={17}>
      <ThermodynamicsPart17 />
    </ThermoPartFrame>
  );
}
