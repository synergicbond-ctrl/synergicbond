import { requirePaidContent } from "@/lib/auth/guards";
export const dynamic = "force-dynamic";
export default async function PocLayout({ children }: { children: React.ReactNode }) {
  await requirePaidContent("/notes/purification-characterisation");
  return <>{children}</>;
}
