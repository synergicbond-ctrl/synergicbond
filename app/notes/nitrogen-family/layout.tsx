import { requirePaidContent } from "@/lib/auth/guards";
export const dynamic = "force-dynamic";
export default async function NitrogenFamilyLayout({ children }: { children: React.ReactNode }) {
  await requirePaidContent("/notes/nitrogen-family");
  return <>{children}</>;
}
