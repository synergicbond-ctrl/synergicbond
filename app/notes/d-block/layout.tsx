import { requirePaidContent } from "@/lib/auth/guards";
export const dynamic = "force-dynamic";
export default async function DBlockLayout({ children }: { children: React.ReactNode }) { await requirePaidContent("/notes/d-block"); return <>{children}</>; }
