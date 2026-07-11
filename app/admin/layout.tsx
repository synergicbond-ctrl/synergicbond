import { requireAdmin } from "@/lib/auth/guards";

// Owner/admin gate for every /admin/* route (currently /admin/pyq-audit). Uses
// the repository's role system (profiles.role via lib/auth/roles). Non-privileged
// visitors get a 404 so admin surfaces — and their data — are undiscoverable.
export const dynamic = "force-dynamic";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAdmin();
  return <>{children}</>;
}
