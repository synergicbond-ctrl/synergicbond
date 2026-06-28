"use client";

import { useState } from "react";
import { ELEMENTS, CATS, blockOf, electronConfig, DETAIL, type Element, type Cat } from "@/lib/periodicTable";
import { X, ExternalLink } from "lucide-react";

export default function PeriodicTablePage() {
  const [active, setActive] = useState<Element | null>(null);
  const [hl, setHl] = useState<Cat | null>(null);

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6 py-10">
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-300 mb-2">Knowledge Vault · Interactive</p>
          <h1 className="text-3xl md:text-4xl font-black">Periodic Table</h1>
          <p className="mt-2 text-white/55 text-sm">Tap any element for details. Hover a category in the legend to highlight that family.</p>
        </div>

        {/* Legend */}
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

        {/* Grid */}
        <div className="overflow-x-auto pb-4">
          <div
            className="grid gap-[3px] min-w-[820px]"
            style={{ gridTemplateColumns: "repeat(18, minmax(0, 1fr))", gridTemplateRows: "repeat(10, auto)" }}
          >
            {ELEMENTS.map((e) => {
              const color = CATS[e.cat].color;
              const dim = hl && hl !== e.cat;
              return (
                <button
                  key={e.z}
                  onClick={() => setActive(e)}
                  style={{ gridColumn: e.x, gridRow: e.y, borderColor: `${color}55`, background: `${color}14`, opacity: dim ? 0.2 : 1 }}
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
                <Fact label="Group" value={active.cat === "ln" || active.cat === "ac" ? "f-block" : String(active.x)} />
                <Fact label="Period" value={active.cat === "ln" ? "6" : active.cat === "ac" ? "7" : String(active.y)} />
              </div>
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(active.name + " element properties")}`}
                target="_blank" rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 hover:gap-2.5 transition"
              >
                More about {active.name} <ExternalLink className="h-3.5 w-3.5" />
              </a>
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
