import type { ReactNode } from "react";
import { requirePremiumLearnAccess } from "@/lib/access/premiumLearn";
import {
  ChemicalEquilibriumFooter,
  ChemicalEquilibriumHeader,
} from "./_components/ChemicalEquilibriumChrome";
import "./chemical-equilibrium-theme.css";

export const dynamic = "force-dynamic";

export default async function ChemicalEquilibriumLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  await requirePremiumLearnAccess("chemical-equilibrium", "/learn/chemical-equilibrium");
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
