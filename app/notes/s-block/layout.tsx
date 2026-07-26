import { requirePaidContent } from "@/lib/auth/guards";
export const dynamic = "force-dynamic";
export default async function SBlockLayout({ children }: { children: React.ReactNode }) { await requirePaidContent("/notes/s-block"); return <>{children}</>; }
