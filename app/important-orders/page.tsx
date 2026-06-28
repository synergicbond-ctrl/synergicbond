"use client";

import { useMemo, useState } from "react";
import { Search, ShieldAlert, BadgeCheck, ListOrdered } from "lucide-react";
import OrderCard from "@/components/important-orders/OrderCard";
import {
  IMPORTANT_ORDERS,
  CATEGORY_META,
  SOURCE_PDFS,
  type OrderCategory,
  type ImportantOrder,
} from "@/lib/importantOrders";

const TABS: OrderCategory[] = ["IOC", "OC", "PC"];

export default function ImportantOrdersPage() {
  const [tab, setTab] = useState<OrderCategory>("IOC");
  const [query, setQuery] = useState("");
  const [source, setSource] = useState<string | null>(null);

  const q = query.trim().toLowerCase();

  // Filter to the active category, then by search + source (future-proof filter).
  const filtered = useMemo(() => {
    return IMPORTANT_ORDERS.filter((o) => {
      if (o.category !== tab) return false;
      if (source && o.sourcePdf !== source) return false;
      if (!q) return true;
      return (
        o.property.toLowerCase().includes(q) ||
        o.order.toLowerCase().includes(q) ||
        o.group.toLowerCase().includes(q) ||
        (o.note?.toLowerCase().includes(q) ?? false)
      );
    });
  }, [tab, q, source]);

  // Group the filtered orders by their `group` for sectioned display.
  const grouped = useMemo(() => {
    const map = new Map<string, ImportantOrder[]>();
    for (const o of filtered) {
      const arr = map.get(o.group) ?? [];
      arr.push(o);
      map.set(o.group, arr);
    }
    return Array.from(map.entries());
  }, [filtered]);

  const totalInTab = IMPORTANT_ORDERS.filter((o) => o.category === tab).length;

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-5xl px-4 md:px-6 py-10">
        {/* Header */}
        <div className="mb-6">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-cyan-300">Learn · Important Orders</p>
          <h1 className="flex items-center gap-2 text-3xl font-black md:text-4xl">
            <ListOrdered className="h-8 w-8 text-cyan-400" /> Important Orders
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-white/55">
            High-yield increasing / decreasing ordering sequences — every entry is extracted and
            verified directly from the uploaded PDFs. Nothing here is generated or summarised.
          </p>
          <p className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/25 bg-emerald-500/[0.08] px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
            <BadgeCheck className="h-3.5 w-3.5" /> {IMPORTANT_ORDERS.length} document-verified orders
          </p>
        </div>

        {/* Category sub-tabs */}
        <div className="mb-4 flex flex-wrap gap-2">
          {TABS.map((c) => {
            const m = CATEGORY_META[c];
            const count = IMPORTANT_ORDERS.filter((o) => o.category === c).length;
            const on = c === tab;
            return (
              <button
                key={c}
                onClick={() => { setTab(c); setSource(null); }}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition ${
                  on
                    ? "bg-cyan-500 text-black shadow-[0_0_20px_-6px_rgba(34,211,238,0.8)]"
                    : "border border-white/[0.08] bg-[#111827] text-white/70 hover:border-cyan-400/30 hover:text-white"
                }`}
              >
                <span>{m.emoji}</span> {m.label}
                <span className="text-[10px] opacity-70">{m.full}</span>
                <span className={`rounded-full px-1.5 py-0.5 text-[10px] ${on ? "bg-black/20" : "bg-white/10"}`}>{count}</span>
              </button>
            );
          })}
        </div>

        {/* Search + source filter (only meaningful when the tab has content) */}
        {totalInTab > 0 && (
          <div className="mb-5 space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search within Important Orders — property, species, group…"
                className="w-full rounded-xl border border-white/[0.08] bg-[#111827] py-2.5 pl-10 pr-3 text-sm text-white placeholder-white/30 outline-none focus:border-cyan-400/40"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSource(null)}
                className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold transition ${
                  source === null ? "bg-cyan-500/20 text-cyan-200" : "border border-white/10 bg-white/[0.03] text-white/50 hover:text-white"
                }`}
              >
                All sources
              </button>
              {SOURCE_PDFS.map((s) => (
                <button
                  key={s}
                  onClick={() => setSource(s)}
                  className={`max-w-[220px] truncate rounded-lg px-2.5 py-1 text-[11px] font-semibold transition ${
                    source === s ? "bg-cyan-500/20 text-cyan-200" : "border border-white/10 bg-white/[0.03] text-white/50 hover:text-white"
                  }`}
                  title={s}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Content */}
        {totalInTab === 0 ? (
          // Governance empty state — no verified content for this category.
          <div className="rounded-2xl border border-amber-500/25 bg-amber-500/[0.06] p-8 text-center">
            <ShieldAlert className="mx-auto h-8 w-8 text-amber-400" />
            <p className="mt-3 text-sm font-bold text-amber-200">
              ⚠ No verified {CATEGORY_META[tab].full} orders in the uploaded PDFs
            </p>
            <p className="mx-auto mt-1 max-w-md text-[13px] text-white/55">
              To protect content integrity, nothing is shown here because no {CATEGORY_META[tab].full.toLowerCase()}{" "}
              content could be verified from the uploaded documents. Upload a {CATEGORY_META[tab].full.toLowerCase()}{" "}
              PDF to populate this tab.
            </p>
          </div>
        ) : grouped.length === 0 ? (
          <div className="rounded-2xl border border-white/[0.08] bg-[#111827] p-8 text-center text-sm text-white/50">
            No orders match “{query}”.
          </div>
        ) : (
          <div className="space-y-6">
            {grouped.map(([group, items]) => (
              <section key={group}>
                <div className="mb-3 flex items-center gap-2">
                  <h2 className="text-sm font-black uppercase tracking-wider text-white/70">{group}</h2>
                  <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px] text-white/40">{items.length}</span>
                  <span className="h-px flex-1 bg-white/[0.06]" />
                </div>
                <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((o) => (
                    <OrderCard key={o.id} order={o} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
