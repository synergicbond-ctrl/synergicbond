import { requirePaidContent } from "@/lib/auth/guards";
export const dynamic = "force-dynamic";
export default async function CarbonFamilyLayout({ children }: { children: React.ReactNode }) {
  await requirePaidContent("/notes/carbon-family");
  return <>{children}</>;
}
