import type { ReactNode } from "react";
import { requirePremiumLearnAccess } from "@/lib/access/premiumLearn";

export const dynamic = "force-dynamic";

/** Premium gate: runs before any child content is rendered (same pattern as the other premium chapters). */
export default async function OrganicCourseLayout({ children }: { children: ReactNode }) {
  await requirePremiumLearnAccess("organic-chemistry", "/learn/jee-advanced/organic-course");
  return children;
}
