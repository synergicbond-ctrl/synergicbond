import { requirePaidContent } from "@/lib/auth/guards";
export const dynamic = "force-dynamic";
export default async function BoronFamilyLayout({ children }: { children: React.ReactNode }) {
  await requirePaidContent("/notes/boron-family");
  return <>{children}</>;
}
