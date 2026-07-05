import { notFound } from "next/navigation";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { getAccessUser, isPrivileged } from "@/lib/auth/roles";

export const dynamic = "force-dynamic";

// Role-gated (owner/admin via profiles.role — see lib/auth/access.ts). No email
// hardcoding. Non-privileged visitors get a 404 so the route is not discoverable.
export default async function AdminAnalyticsPage() {
  const supabase = await createClient();
  const user = await getAccessUser(supabase);

  if (!isPrivileged(user)) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center gap-2 text-cyan-300 text-xs font-black uppercase tracking-widest mb-3">
          <ShieldCheck className="h-4 w-4" /> Owner / Admin
        </div>
        <h1 className="text-3xl font-black tracking-tight">Admin Console</h1>
        <p className="text-white/50 text-sm mt-1">
          Signed in as <span className="text-white/80 font-semibold">{user!.email}</span> · role{" "}
          <span className="text-cyan-300 font-bold">{user!.role}</span>. You have unrestricted
          all-access across every program and tool.
        </p>

        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#111827] p-6">
          <h2 className="font-black text-sm text-white/40 uppercase tracking-widest mb-4">
            Management
          </h2>
          <div className="space-y-3">
            <Link
              href="/dashboard/subscription"
              className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 hover:border-white/20 transition"
            >
              <span className="text-sm font-bold">Subscription management</span>
              <ArrowRight className="h-4 w-4 text-white/40" />
            </Link>
            <Link
              href="/programs"
              className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 hover:border-white/20 transition"
            >
              <span className="text-sm font-bold">All programs (preview)</span>
              <ArrowRight className="h-4 w-4 text-white/40" />
            </Link>
          </div>
          <p className="text-[11px] text-white/40 mt-5 leading-relaxed">
            A detailed platform-analytics module is not built yet — this console only exposes
            real management surfaces (no placeholder metrics).
          </p>
        </div>
      </div>
    </main>
  );
}
