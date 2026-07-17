import type { ReactNode } from "react";
import { requirePremiumLearnAccess } from "@/lib/access/premiumLearn";

export const dynamic = "force-dynamic";

export default async function ChemicalBondingLayout({ children }: { children: ReactNode }) {
  await requirePremiumLearnAccess("chemical-bonding", "/learn/chemical-bonding");
  return children;
}
