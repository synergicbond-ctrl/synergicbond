import { requirePaidContent } from "@/lib/auth/guards";

export const dynamic = "force-dynamic";

export default async function HydrogenNotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requirePaidContent("/notes/hydrogen");
  return <>{children}</>;
}
