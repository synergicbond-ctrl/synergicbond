"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown, AlertTriangle, Table2, Sparkles } from "lucide-react";
import { ELEMENTS, CATS, type Element } from "@/lib/periodicTable";
import { TREND_META, trendValue, type TrendId } from "@/lib/periodicTrends";

// cyan (low) → magenta (high), matching the periodic-table trend heatmap
function heat(t: number) {
  return `hsl(${185 + t * 120}, 72%, 55%)`;
}

function fmt(v: number | null, id: TrendId): string {
  if (v == null) return "—";
  if (id === "en") return v.toFixed(2);
  return String(v);
}

export default function PeriodicTrendsPage() {
  const [active, setActive] = useState<TrendId>("r");
  const meta = TREND_META.find((m) => m.id === active)!;

  // value range for the active property (for color + extremes)
  const { min, max, scored } = useMemo(() => {
    const scored = ELEMENTS.map((e) => ({ e, v: trendValue(e.sym, active) }));
    const vals = scored.map((s) => s.v).filter((v): v is number => v != null);
    return { min: Math.min(...vals), max: Math.max(...vals), scored };
  }, [active]);

  // normalised position 0..1 (respecting `invert` for electron gain enthalpy)
  function norm(v: number): number {
    const t = max === min ? 0.5 : (v - min) / (max - min);
    return meta.invert ? 1 - t : t;
  }

  function tileColor(v: number | null): string {
    if (v == null) return "#1f2937";
    return heat(norm(v));
  }

  // extremes among known values
  const known = scored.filter((s): s is { e: Element; v: number } => s.v != null);
  const sorted = [...known].sort((a, b) => a.v - b.v);
  const lowest = meta.invert ? sorted[sorted.length - 1] : sorted[0];
  const highest = meta.invert ? sorted[0] : sorted[sorted.length - 1];

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-[1300px] px-4 md:px-6 py-10">
        {/* Header */}
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-300 mb-2">Learn · Periodic Trends</p>
          <h1 className="text-3xl md:text-4xl font-black">📈 Periodic Trends</h1>
          <p className="mt-2 max-w-2xl text-sm text-white/55">
            How <span className="text-white/80">atomic radius</span>, <span className="text-white/80">ionisation enthalpy</span>,{" "}
            <span className="text-white/80">electron gain enthalpy</span> and <span className="text-white/80">electronegativity</span>{" "}
            vary across periods and down groups — with the exact exceptions JEE/NEET loves to test.
          </p>
          <Link
            href="/periodic-table"
            className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-white/70 hover:border-cyan-400/30 hover:text-white transition"
          >
            <Table2 className="h-3.5 w-3.5" /> Open full interactive periodic table
          </Link>
        </div>

        {/* Property tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {TREND_META.map((m) => {
            const on = m.id === active;
            return (
              <button
                key={m.id}
                onClick={() => setActive(m.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition ${
                  on
                    ? "bg-cyan-500 text-black shadow-[0_0_20px_-6px_rgba(34,211,238,0.8)]"
                    : "border border-white/[0.08] bg-[#111827] text-white/70 hover:text-white hover:border-cyan-400/30"
                }`}
              >
                <span>{m.emoji}</span> {m.label}
              </button>
            );
          })}
        </div>

        <div className="grid gap-5 lg:grid-cols-2 lg:items-start">
          {/* LEFT — explanation */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/[0.08] bg-[#111827] p-5">
              <h2 className="flex items-center gap-2 text-lg font-black">
                <span>{meta.emoji}</span> {meta.label}
                {meta.unit && <span className="text-xs font-semibold text-white/40">({meta.unit})</span>}
              </h2>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{meta.definition}</p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/[0.06] p-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-300">
                    <ArrowRight className="h-3.5 w-3.5" /> Across a period
                  </div>
                  <p className="mt-1.5 text-[13px] text-white/70 leading-relaxed">{meta.acrossPeriod}</p>
                </div>
                <div className="rounded-xl border border-violet-500/20 bg-violet-500/[0.06] p-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-violet-300">
                    <ArrowDown className="h-3.5 w-3.5" /> Down a group
                  </div>
                  <p className="mt-1.5 text-[13px] text-white/70 leading-relaxed">{meta.downGroup}</p>
                </div>
              </div>

              <div className="mt-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-white/40">Why</p>
                <p className="mt-1 text-[13px] text-white/70 leading-relaxed">{meta.reason}</p>
              </div>
            </div>

            {/* Exceptions — the high-yield part */}
            <div className="rounded-2xl border border-amber-500/25 bg-amber-500/[0.06] p-5">
              <h3 className="flex items-center gap-2 text-sm font-black text-amber-300">
                <AlertTriangle className="h-4 w-4" /> High-yield exceptions
              </h3>
              <ul className="mt-3 space-y-3">
                {meta.exceptions.map((ex) => (
                  <li key={ex.title} className="border-l-2 border-amber-500/40 pl-3">
                    <p className="text-[13px] font-bold text-amber-200">{ex.title}</p>
                    <p className="mt-0.5 text-[13px] text-white/65 leading-relaxed">{ex.detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#111827] p-5">
              <h3 className="flex items-center gap-2 text-sm font-black text-white/80">
                <Sparkles className="h-4 w-4 text-cyan-400" /> Quick facts
              </h3>
              <ul className="mt-2 space-y-1.5">
                {meta.notable.map((n) => (
                  <li key={n} className="flex gap-2 text-[13px] text-white/65">
                    <span className="text-cyan-400">•</span> {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT — heatmap + extremes */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/[0.08] bg-[#111827] p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                  Periodic table coloured by {meta.short.toLowerCase()}
                </p>
                <span className="text-[10px] text-white/35">tap a tile for its value</span>
              </div>

              {/* 18-column periodic grid */}
              <div className="grid gap-[3px]" style={{ gridTemplateColumns: "repeat(18, minmax(0, 1fr))" }}>
                {ELEMENTS.map((e) => {
                  const v = trendValue(e.sym, active);
                  return (
                    <div
                      key={e.z}
                      title={`${e.name} (${e.sym}) — ${meta.label}: ${fmt(v, active)}${meta.unit ? " " + meta.unit : ""}`}
                      style={{ gridColumn: e.x, gridRow: e.y, backgroundColor: tileColor(v) }}
                      className="group relative flex aspect-square min-w-0 flex-col items-center justify-center rounded-[3px] text-black transition hover:z-10 hover:ring-2 hover:ring-white"
                    >
                      <span className="text-[9px] font-bold leading-none sm:text-[10px]">{e.sym}</span>
                      <span className="hidden text-[6px] font-semibold leading-none opacity-80 sm:block">
                        {fmt(v, active)}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* gradient legend */}
              <div className="mt-4 flex items-center gap-2">
                <span className="text-[11px] text-white/50">{meta.lowLabel}</span>
                <div
                  className="h-2.5 flex-1 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${heat(0)}, ${heat(0.5)}, ${heat(1)})` }}
                />
                <span className="text-[11px] text-white/50">{meta.highLabel}</span>
              </div>
              <div className="mt-2 flex items-center gap-1.5 text-[10px] text-white/35">
                <span className="inline-block h-2.5 w-2.5 rounded-[2px]" style={{ backgroundColor: "#1f2937" }} />
                no standard value in dataset
              </div>
            </div>

            {/* extremes */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Highest", item: highest },
                { label: "Lowest", item: lowest },
              ].map(({ label, item }) => (
                <div key={label} className="rounded-2xl border border-white/[0.08] bg-[#111827] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-white/40">{label}</p>
                  {item ? (
                    <>
                      <p className="mt-1 text-2xl font-black text-white">{item.e.sym}</p>
                      <p className="text-xs text-white/55">{item.e.name}</p>
                      <p className="mt-1 text-sm font-bold text-cyan-300">
                        {fmt(item.v, active)}
                        {meta.unit ? ` ${meta.unit}` : ""}
                      </p>
                    </>
                  ) : (
                    <p className="mt-1 text-sm text-white/40">—</p>
                  )}
                </div>
              ))}
            </div>

            {/* category legend (context) */}
            <div className="flex flex-wrap gap-x-3 gap-y-1.5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3">
              {Object.values(CATS).map((c) => (
                <span key={c.label} className="flex items-center gap-1.5 text-[10px] text-white/45">
                  <span className="h-2.5 w-2.5 rounded-[2px]" style={{ backgroundColor: c.color }} />
                  {c.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
