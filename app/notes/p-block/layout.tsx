import { requirePaidContent } from "@/lib/auth/guards";
export const dynamic = "force-dynamic";
export default async function PBlockLayout({ children }: { children: React.ReactNode }) { await requirePaidContent("/notes/p-block"); return <>{children}</>; }
