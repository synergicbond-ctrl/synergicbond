import type { ReactNode } from "react";
import { requirePremiumLearnAccess } from "@/lib/access/premiumLearn";

export const dynamic = "force-dynamic";

export default async function IsomerismLayout({ children }: { children: ReactNode }) {
  await requirePremiumLearnAccess("isomerism", "/learn/isomerism");
  return children;
}
