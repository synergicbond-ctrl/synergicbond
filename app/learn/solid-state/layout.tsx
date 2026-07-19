import type { ReactNode } from "react";
import { requirePremiumLearnAccess } from "@/lib/access/premiumLearn";

export const dynamic = "force-dynamic";

export default async function SolidStateLayout({ children }: { children: ReactNode }) {
  await requirePremiumLearnAccess("solid-state", "/learn/solid-state");
  return children;
}
