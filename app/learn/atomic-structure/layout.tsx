import type { ReactNode } from "react";
import { requirePremiumLearnAccess } from "@/lib/access/premiumLearn";

export const dynamic = "force-dynamic";

// Covers the visual overview and all 55 part routes before their client/server
// payloads are rendered.
export default async function AtomicStructureLayout({ children }: { children: ReactNode }) {
  await requirePremiumLearnAccess("atomic-structure", "/learn/atomic-structure");
  return children;
}