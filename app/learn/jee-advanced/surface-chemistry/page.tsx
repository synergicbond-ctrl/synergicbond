import { SURFACE_CHEMISTRY_PARTS } from "./part-metadata";
import { SurfaceVisual } from "./surface-chemistry-shared";

export const metadata = {
  title: "Surface Chemistry — Complete JEE Advanced Notes | SYNERGIC BOND",
  description:
    "Original twelve-part Surface Chemistry course for JEE Advanced covering adsorption, catalysis, colloids, molecular-orbital explanations, derivations, visuals and worked examples.",
};

const STATS = [
  ["12", "complete parts"],
  ["3", "core pillars"],
  ["18", "original visual systems"],
  ["30+", "worked examples"],
];

export default function SurfaceChemistryIndexPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050914] text-slate-100 antialiased">
      <div className="min-h-screen bg-[radial-gradient(circle_at_10%_0%,rgba(34,211,238,.13),transparent_31rem),radial-gradient(circle_at_92%_8%,rgba(139,92,246,.13),transparent_34rem)]">
        <header className="border-b border-white/10">
          <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-7 sm:py-20 lg:px-10">
            <div className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/[.07] px-3 py-1.5 text-xs font-bold uppercase tracking-[.2em] text-cyan-200">
              JEE Advanced · Physical Chemistry
            </div>
            <h1 className="mt-6 max-w-5xl text-5xl font-black tracking-[-.055em] text-white sm:text-6xl lg:text-7xl">
              Surface Chemistry
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-violet-300 bg-clip-text text-transparent">
                complete twelve-part edition
              </span>
            </h1>
            <p className="mt-5 max-w-4xl text-base font-medium leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Adsorption, catalysis and colloids developed from first principles with molecular-orbital explanations, quantitative derivations, original dark visuals, experiments, applications and JEE Advanced problem solving.
            </p>
            <div className="mt-9 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {STATS.map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <div className="text-3xl font-black tracking-tight text-white">{value}</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-[.14em] text-slate-500">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section className="mx-auto max-w-[1320px] px-4 py-12 sm:px-7 lg:px-10">
          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-slate-950/60 p-3 sm:p-5">
            <SurfaceVisual mode="interface" />
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {SURFACE_CHEMISTRY_PARTS.map((item) => (
              <a
                key={item.part}
                href={`/learn/jee-advanced/surface-chemistry/parts/${item.slug}`}
                className="group rounded-3xl border border-white/10 bg-slate-950/70 p-5 transition hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-white/[.04] sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-sm font-bold text-cyan-300">{String(item.part).padStart(2, "0")}</span>
                  <span className="text-sm text-slate-600 transition group-hover:text-cyan-300">Open →</span>
                </div>
                <h2 className="mt-5 text-xl font-semibold tracking-tight text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
