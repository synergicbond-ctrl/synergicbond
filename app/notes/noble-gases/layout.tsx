import { requirePaidContent } from "@/lib/auth/guards";
export const dynamic = "force-dynamic";
export default async function NobleGasesLayout({ children }: { children: React.ReactNode }) {
  await requirePaidContent("/notes/noble-gases");
  return <>{children}</>;
}
