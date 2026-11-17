import type { ReactNode } from "react";
import { requirePremiumLearnAccess } from "@/lib/access/premiumLearn";

// JEE Advanced complete notes hub pages. The HTML notes themselves are route
// handlers (not wrapped by this layout) and check the same rule in
// lib/notes/htmlNotes.ts.
export const dynamic = "force-dynamic";

export default async function CompleteNotesLayout({ children }: { children: ReactNode }) {
  await requirePremiumLearnAccess("jee-advanced-notes", "/learn/jee-advanced/complete-notes");
  return children;
}
