import type { ReactNode } from "react";
import { requirePremiumLearnAccess } from "@/lib/access/premiumLearn";

export const dynamic = "force-dynamic";

// Covers the visual overview and every lesson part before any content streams.
export default async function ThermodynamicsLayout({ children }: { children: ReactNode }) {
  await requirePremiumLearnAccess("thermodynamics", "/learn/thermodynamics");
  return children;
}
