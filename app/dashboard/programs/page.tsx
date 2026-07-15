import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getActiveProgramContext } from "@/lib/portal/activeProgram";
import MyProgramsSwitchList from "@/components/portal/MyProgramsSwitchList";
import { ArrowRight, CreditCard, GraduationCap } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// /dashboard/programs — My Programs (Portal Reorganisation pass).
//
// The single place to see the programs you actually own (server-verified),
// which one is active, where the access comes from, and to switch — plus an
// Explore Programs path. Catalogue programs the user does NOT own are never
// presented as owned here.
// ─────────────────────────────────────────────────────────────────────────────

export const dynamic = "force-dynamic";

export const metadata = {
  title: "My Programs — SYNERGIC BOND",
  description: "Your entitled programs, the active program, and program switching.",
};

const SOURCE_LABEL: Record<string, string> = {
  "owner-admin": "Owner/Admin all-access",
  "all-access": "Pro all-access",
  purchase: "Purchased",
};

export default async function MyProgramsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/auth/signin?next=/dashboard/programs");

  const ctx = await getActiveProgramContext();

  return (
    <main className="min-h-screen bg-[#0B0F19] px-4 py-10 text-white md:px-8">
      <div className="mx-auto max-w-3xl space-y-6">
        <header>
          <h1 className="flex items-center gap-2 text-3xl font-black tracking-tight">
            <GraduationCap className="h-7 w-7 text-cyan-400" /> My Programs
          </h1>
          <p className="mt-1 text-sm text-white/50">
            The programs your account is entitled to — switch which one drives your portal.
          </p>
        </header>

        {ctx.entitledPrograms.length === 0 ? (
          <section className="rounded-3xl border border-white/[0.08] bg-[#111827] p-8 text-center">
            <h2 className="text-lg font-bold">Free workspace</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-white/55">
              You&apos;re on the free tier — chapter previews, free notes and the free practice
              tools are all yours. Unlock a program for the full experience.
            </p>
            <Link
              href="/programs"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-2.5 text-sm font-black text-black transition hover:-translate-y-0.5"
            >
              Explore Programs <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        ) : (
          <MyProgramsSwitchList
            programs={ctx.entitledPrograms.map((p) => ({
              key: p.key,
              name: p.name,
              category: p.category,
              href: p.href,
              sourceLabel: SOURCE_LABEL[p.source] ?? "Purchased",
              isActive: ctx.activeProgram?.key === p.key,
            }))}
          />
        )}

        <div className="flex flex-wrap items-center gap-3 text-sm">
          <Link href="/dashboard/subscription" className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-2 text-xs font-bold text-white/75 transition hover:bg-white/[0.08]">
            <CreditCard className="h-3.5 w-3.5" /> Subscription &amp; Billing
          </Link>
          <Link href="/programs" className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-2 text-xs font-bold text-white/75 transition hover:bg-white/[0.08]">
            Explore Programs <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <p className="text-center text-sm">
          <Link href="/dashboard" className="text-white/40 transition hover:text-white">← Back to Home</Link>
        </p>
      </div>
    </main>
  );
}
