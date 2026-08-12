import Link from "next/link";
import { notFound } from "next/navigation";
import { CLASSES, getBoard } from "@/lib/boardDashboard";
import { getPurchasedBoardPrograms } from "@/lib/access/entitlements";

// /dashboard/[board] — Board → Class selector (CBSE / ICSE / State Boards).
// Board-aware; boards are never mixed. Purchased classes surface at top.
// Dynamic: purchased badges come from the signed-in user's real entitlements.

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ board: string }> }) {
  const { board } = await params;
  const b = getBoard(board);
  return b ? { title: `${b.name} Chemistry — SYNERGIC BOND` } : {};
}

export default async function BoardPage({ params }: { params: Promise<{ board: string }> }) {
  const { board } = await params;
  const b = getBoard(board);
  if (!b) notFound();

  const purchased = await getPurchasedBoardPrograms();
  const purchasedHere = purchased.filter((p) => p.board === b.slug).map((p) => p.class);

  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      <div className="border-b border-white/10 bg-gradient-to-b from-amber-950/20 to-[#0B1220] px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <nav className="mb-4 text-sm text-white/45">
            <Link href="/dashboard/boards" className="hover:text-white">School Boards</Link>
            <span className="mx-1.5">/</span><span className="text-white/80">{b.name}</span>
          </nav>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{b.name} Chemistry</h1>
          <p className="mt-2 text-white/55">{b.desc}</p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-10">
        {purchasedHere.length > 0 && (
          <p className="mb-4 text-xs font-bold uppercase tracking-wider text-emerald-300">Your purchased programs</p>
        )}
        <div className="grid gap-4 sm:grid-cols-2">
          {CLASSES.map((c) => {
            const owned = purchasedHere.includes(c.slug);
            return (
              <Link key={c.slug} href={`/dashboard/${b.slug}/${c.slug}`}
                className={`group flex flex-col justify-between rounded-2xl border p-6 transition hover:-translate-y-0.5 ${
                  owned ? "border-emerald-500/40 bg-emerald-500/[0.06]" : "border-white/[0.08] bg-white/[0.03] hover:border-cyan-400/40"
                }`}>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-black text-white">{c.label}</span>
                    {owned && <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-bold uppercase text-emerald-300">Purchased</span>}
                  </div>
                  <p className="mt-1.5 text-sm text-white/55">Open the {b.name} {c.name} class dashboard.</p>
                </div>
                <span className="mt-5 text-sm font-black uppercase tracking-wide text-cyan-300">Open dashboard →</span>
              </Link>
            );
          })}
        </div>
        <div className="mt-8"><Link href="/dashboard/boards" className="text-sm text-white/45 hover:text-white">← All boards</Link></div>
      </div>
    </main>
  );
}
