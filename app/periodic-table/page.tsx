"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ELEMENTS, CATS, blockOf, electronConfig, DETAIL, type Element, type Cat } from "@/lib/periodicTable";
import { X, ExternalLink, Search, Atom, Sparkles, BarChart2 } from "lucide-react";

type View = "category" | "en" | "r" | "mp";
const VIEWS: { id: View; label: string; unit: string }[] = [
  { id: "category", label: "Category", unit: "" },
  { id: "en", label: "Electronegativity", unit: "" },
  { id: "r", label: "Atomic Radius", unit: "pm" },
  { id: "mp", label: "Melting Point", unit: "°C" },
];

// Parse a DETAIL numeric value (handles − sign and "(subl.)")
function num(s?: string): number | null {
  if (!s || s === "—") return null;
  const v = parseFloat(s.replace(/−/g, "-").replace(/[^0-9.\-]/g, ""));
  return Number.isFinite(v) ? v : null;
}
function valueOf(e: Element, view: View): number | null {
  const d = DETAIL[e.sym];
  if (!d) return null;
  if (view === "en") return num(d.en);
  if (view === "r") return num(d.r);
  if (view === "mp") return num(d.mp);
  return null;
}

export default function PeriodicTablePage() {
  const [active, setActive] = useState<Element | null>(null);
  const [hl, setHl] = useState<Cat | null>(null);
  const [view, setView] = useState<View>("category");
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  // min/max for the active property (for the gradient scale)
  const range = useMemo(() => {
    if (view === "category") return null;
    const vals = ELEMENTS.map((e) => valueOf(e, view)).filter((v): v is number => v != null);
    return { min: Math.min(...vals), max: Math.max(...vals) };
  }, [view]);

  // sequential trend color: cyan (low) → magenta (high)
  function trendColor(t: number) {
    return `hsl(${185 + t * 120}, 72%, 55%)`;
  }
  function tileColor(e: Element): string {
    if (view === "category") return CATS[e.cat].color;
    const v = valueOf(e, view);
    if (v == null || !range) return "#475569";
    const t = range.max === range.min ? 0.5 : (v - range.min) / (range.max - range.min);
    return trendColor(t);
  }

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6 py-10">
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-300 mb-2">Knowledge Vault · Interactive</p>
          <h1 className="text-3xl md:text-4xl font-black">Periodic Table</h1>
          <p className="mt-2 text-white/55 text-sm">Tap any element for details · search to jump · colour by trend.</p>
        </div>

        {/* Search shortcut */}
        <div className="relative max-w-sm mb-4">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search element — Fe, iron, halogen…"
            className="w-full rounded-xl border border-white/[0.08] bg-[#111827] pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-cyan-400/50"
          />
        </div>

        {/* View toggle — color the table by a property (trends) */}
        <div className="flex flex-wrap items-center gap-1.5 mb-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-white/40 mr-1">Colour by:</span>
          {VIEWS.map((v) => (
            <button
              key={v.id}
              onClick={() => setView(v.id)}
              className={`text-[11px] font-semibold px-3 py-1.5 rounded-full transition ${
                view === v.id ? "bg-cyan-500 text-black" : "bg-[#111827] border border-white/[0.06] text-gray-400 hover:text-white"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>

        {/* Legend — category chips OR gradient scale */}
        {view === "category" ? (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {(Object.keys(CATS) as Cat[]).map((c) => (
              <button
                key={c}
                onMouseEnter={() => setHl(c)}
                onMouseLeave={() => setHl(null)}
                className="flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/[0.06] bg-[#111827] hover:border-white/20 transition"
              >
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: CATS[c].color }} />
                <span className="text-white/70">{CATS[c].label}</span>
              </button>
            ))}
          </div>
        ) : (
          range && (
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs text-white/50">{range.min}{VIEWS.find((v) => v.id === view)!.unit} (low)</span>
              <div className="h-2.5 flex-1 max-w-xs rounded-full" style={{ background: "linear-gradient(to right, hsl(185,72%,55%), hsl(245,72%,55%), hsl(305,72%,55%))" }} />
              <span className="text-xs text-white/50">(high) {range.max}{VIEWS.find((v) => v.id === view)!.unit}</span>
              <span className="text-[10px] text-white/30 ml-2">grey = no data</span>
            </div>
          )
        )}

        {/* Grid */}
        <div className="overflow-x-auto pb-4">
          <div
            className="grid gap-[3px] min-w-[820px]"
            style={{ gridTemplateColumns: "repeat(18, minmax(0, 1fr))", gridTemplateRows: "repeat(10, auto)" }}
          >
            {ELEMENTS.map((e) => {
              const color = tileColor(e);
              const matches = !q || e.sym.toLowerCase().includes(q) || e.name.toLowerCase().includes(q) || CATS[e.cat].label.toLowerCase().includes(q);
              const dim = (view === "category" && hl && hl !== e.cat) || !matches;
              const hit = !!q && matches;
              return (
                <button
                  key={e.z}
                  onClick={() => setActive(e)}
                  style={{ gridColumn: e.x, gridRow: e.y, borderColor: hit ? color : `${color}55`, background: `${color}${hit ? "33" : "14"}`, opacity: dim ? 0.12 : 1, boxShadow: hit ? `0 0 12px ${color}` : undefined }}
                  className="aspect-square rounded-md border p-0.5 flex flex-col items-center justify-center transition-all duration-150 hover:scale-110 hover:z-10 hover:shadow-lg"
                >
                  <span className="text-[7px] leading-none text-white/40 self-start pl-0.5">{e.z}</span>
                  <span className="text-[13px] md:text-sm font-black leading-none" style={{ color }}>{e.sym}</span>
                  <span className="text-[6px] leading-none text-white/40 truncate w-full text-center hidden md:block">{e.name}</span>
                </button>
              );
            })}
            {/* f-block connector labels */}
            <div style={{ gridColumn: 3, gridRow: 6 }} className="aspect-square rounded-md border border-white/[0.06] flex items-center justify-center text-[8px] text-white/30">57-71</div>
            <div style={{ gridColumn: 3, gridRow: 7 }} className="aspect-square rounded-md border border-white/[0.06] flex items-center justify-center text-[8px] text-white/30">89-103</div>
          </div>
        </div>

        <p className="text-xs text-white/35 mt-3">{ELEMENTS.length} elements · positions follow IUPAC layout (lanthanides &amp; actinides shown below).</p>
      </div>

      {/* Element detail */}
      {active && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm" onClick={() => setActive(null)}>
          <div className="w-full max-w-md rounded-3xl border border-white/[0.08] bg-[#111827] shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 flex items-start justify-between" style={{ background: `linear-gradient(135deg, ${CATS[active.cat].color}22, transparent)` }}>
              <div>
                <p className="text-sm text-white/50">{active.z}</p>
                <p className="text-6xl font-black leading-none" style={{ color: CATS[active.cat].color }}>{active.sym}</p>
                <p className="text-xl font-bold mt-2">{active.name}</p>
                <span className="inline-block mt-2 text-[11px] font-bold px-2.5 py-0.5 rounded-full" style={{ background: `${CATS[active.cat].color}1a`, color: CATS[active.cat].color }}>
                  {CATS[active.cat].label}
                </span>
              </div>
              <button onClick={() => setActive(null)} className="p-1 text-white/40 hover:text-white"><X className="h-5 w-5" /></button>
            </div>
            <div className="px-6 pb-6">
              {/* Electron configuration — full width */}
              <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] px-3 py-2 mb-3">
                <p className="text-[10px] uppercase tracking-wider text-white/40">Electron Configuration</p>
                <p className="text-sm font-mono font-semibold text-cyan-300 mt-0.5">{electronConfig(active.z)}</p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <Fact label="Atomic Number" value={String(active.z)} />
                <Fact label="Atomic Mass" value={active.mass.toString()} />
                <Fact label="Oxidation States" value={DETAIL[active.sym]?.ox ?? "—"} />
                <Fact label="Block" value={blockOf(active)} />
                <Fact label="Melting Point" value={DETAIL[active.sym] ? `${DETAIL[active.sym].mp} °C` : "—"} />
                <Fact label="Boiling Point" value={DETAIL[active.sym] ? `${DETAIL[active.sym].bp} °C` : "—"} />
                <Fact label="Electronegativity" value={DETAIL[active.sym]?.en ?? "—"} />
                <Fact label="Atomic Radius" value={DETAIL[active.sym] ? `${DETAIL[active.sym].r} pm` : "—"} />
                <Fact label="Group" value={active.cat === "ln" || active.cat === "ac" ? "f-block" : String(active.x)} />
                <Fact label="Period" value={active.cat === "ln" ? "6" : active.cat === "ac" ? "7" : String(active.y)} />
              </div>
              {/* Connected system — the periodic table as a navigation brain */}
              <p className="text-[10px] uppercase tracking-wider text-white/40 mt-4 mb-2">Explore connections</p>
              <div className="grid grid-cols-2 gap-2">
                <Link href={`/molecule?q=${active.sym}`} onClick={() => setActive(null)} className="flex items-center gap-2 rounded-lg bg-white/[0.03] border border-white/[0.06] px-3 py-2 text-xs font-semibold text-white/80 hover:border-cyan-400/30 hover:text-white transition">
                  <Atom className="h-3.5 w-3.5 text-cyan-400" /> Compounds
                </Link>
                <Link href="/name-reactions" onClick={() => setActive(null)} className="flex items-center gap-2 rounded-lg bg-white/[0.03] border border-white/[0.06] px-3 py-2 text-xs font-semibold text-white/80 hover:border-cyan-400/30 hover:text-white transition">
                  <Sparkles className="h-3.5 w-3.5 text-violet-400" /> Reactions
                </Link>
                <button onClick={() => { setView("en"); setActive(null); }} className="flex items-center gap-2 rounded-lg bg-white/[0.03] border border-white/[0.06] px-3 py-2 text-xs font-semibold text-white/80 hover:border-cyan-400/30 hover:text-white transition">
                  <BarChart2 className="h-3.5 w-3.5 text-cyan-400" /> Compare Trends
                </button>
                <a href={`https://www.google.com/search?q=${encodeURIComponent(active.name + " element properties")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg bg-white/[0.03] border border-white/[0.06] px-3 py-2 text-xs font-semibold text-white/80 hover:border-cyan-400/30 hover:text-white transition">
                  <ExternalLink className="h-3.5 w-3.5 text-cyan-400" /> More
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] px-3 py-2">
      <p className="text-[10px] uppercase tracking-wider text-white/40">{label}</p>
      <p className="text-sm font-semibold text-white mt-0.5">{value}</p>
    </div>
  );
}
