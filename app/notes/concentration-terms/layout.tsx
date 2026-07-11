import { requirePaidContent } from "@/lib/auth/guards";

// Premium chapter — Pro/owner only. Gate runs before any child page renders, so
// the premium notes payload is never sent to unauthorized clients. Deliberately
// free chapters (mole-concept, redox-reactions) have no such layout.
export const dynamic = "force-dynamic";

export default async function ConcentrationTermsNotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requirePaidContent("/notes/concentration-terms");
  return <>{children}</>;
}
