import type { ReactNode } from "react";
import "./chemical-equilibrium-theme.css";

export default function ChemicalEquilibriumLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="chemical-equilibrium-scope">
      {children}
    </div>
  );
}
