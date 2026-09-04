import { requirePaidContent } from "@/lib/auth/guards";
export const dynamic = "force-dynamic";
export default async function HalogenFamilyLayout({ children }: { children: React.ReactNode }) {
  await requirePaidContent("/notes/halogen-family");
  return <>{children}</>;
}
