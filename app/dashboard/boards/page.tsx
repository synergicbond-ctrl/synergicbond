import Link from "next/link";
import { BOARDS, getBoard, getClass, getPurchasedPrograms } from "@/lib/boardDashboard";

// /dashboard/boards — School Boards entry. Purchased programs surface at top;
// the full catalogue is browsable below. No fabricated purchase data.

export const dynamic = "force-dynamic";

export const metadata = {
  title: "School Boards — SYNERGIC BOND",
  description: "CBSE, ICSE and State Boards chemistry dashboards — Board → Class → Class Dashboard.",
};

export default async function BoardsPage() {
  const purchased = await getPurchasedPrograms();

  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      <div className="border-b border-white/10 bg-gradient-to-b from-amber-950/20 to-[#0B1220] px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-amber-300/80">Board Preparation</p>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">School Boards</h1>
          <p className="mt-2 max-w-2xl text-white/55">Choose your board, then your class. Each opens a full class dashboard — learning, tests, projects, practicals, progress and mentorship.</p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* Purchased programs at top (real entitlements only) */}
        {purchased.length > 0 ? (
          <section className="mb-10">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-emerald-300">Your programs</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {purchased.map((p) => {
                const b = getBoard(p.board); const c = getClass(p.class);
                if (!b || !c) return null;
                return (
                  <Link key={`${p.board}-${p.class}`} href={`/dashboard/${p.board}/${p.class}`}
                    className="rounded-2xl border border-emerald-500/40 bg-emerald-500/[0.06] p-5 transition hover:-translate-y-0.5">
                    <div className="font-black text-white">{b.name} · {c.name}</div>
                    <div className="mt-3 text-sm font-bold text-emerald-300">Open dashboard →</div>
                  </Link>
                );
              })}
            </div>
          </section>
        ) : (
          <div className="mb-8 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-white/55">
            You don&apos;t have a purchased board program yet — browse all boards below.
          </div>
        )}

        <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/40">All School Boards</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {BOARDS.map((b) => (
            <Link key={b.slug} href={`/dashboard/${b.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition hover:-translate-y-0.5 hover:border-cyan-400/40">
              <div>
                <div className="text-lg font-black text-white">{b.name}</div>
                <p className="mt-1 text-sm text-white/55">{b.desc}</p>
              </div>
              <span className="mt-5 text-sm font-black uppercase tracking-wide text-cyan-300">Choose class →</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
