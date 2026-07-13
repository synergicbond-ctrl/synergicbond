import type { ReactNode } from "react";
import {
  ChemicalEquilibriumFooter,
  ChemicalEquilibriumHeader,
} from "./_components/ChemicalEquilibriumChrome";
import "./chemical-equilibrium-theme.css";

export default function ChemicalEquilibriumLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="chemical-equilibrium-scope">
      <ChemicalEquilibriumHeader />

      <div
        id="chemical-equilibrium-content"
        className="chemical-equilibrium-content"
      >
        {children}
      </div>

      <ChemicalEquilibriumFooter />
    </div>
  );
}
