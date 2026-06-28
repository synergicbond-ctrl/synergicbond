import { BadgeCheck, FileText } from "lucide-react";
import FormulaText from "./FormulaText";
import { CATEGORY_META, type ImportantOrder } from "@/lib/importantOrders";

// Reusable, presentational card for one verified order. Renders only the data
// passed in — no transformation. Every card carries the verification badge.
export default function OrderCard({ order }: { order: ImportantOrder }) {
  const cat = CATEGORY_META[order.category];
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#111827] p-4 transition hover:border-cyan-400/25">
      <div className="mb-2 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-sm font-bold leading-snug text-white">{order.property}</h3>
          <p className="mt-0.5 text-[11px] text-white/40">{order.group}</p>
        </div>
        <span className="flex shrink-0 items-center gap-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2 py-1 text-[10px] font-bold text-emerald-300">
          <BadgeCheck className="h-3 w-3" /> Verified
        </span>
      </div>

      {/* The verified sequence */}
      <div className="rounded-xl border border-white/[0.06] bg-[#0B0F19] px-3 py-2.5">
        <FormulaText
          text={order.order}
          className="font-mono text-[13px] leading-relaxed text-cyan-200 [&_sub]:text-[0.7em] [&_sup]:text-[0.7em]"
        />
      </div>

      {order.note && <p className="mt-2 text-[12px] leading-relaxed text-white/55">{order.note}</p>}

      {/* Meta row: category · reference · source */}
      <div className="mt-3 flex flex-wrap items-center gap-2 text-[10px]">
        <span className="rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-semibold text-white/60">
          {cat.emoji} {cat.label}
        </span>
        {order.reference && (
          <span className="rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-mono text-white/50">
            {order.reference}
          </span>
        )}
        <span className="flex items-center gap-1 text-white/35">
          <FileText className="h-3 w-3" /> {order.sourcePdf}
        </span>
        <span className="ml-auto flex items-center gap-1 font-semibold text-emerald-400/80">
          <BadgeCheck className="h-3 w-3" /> Verified from Uploaded PDF
        </span>
      </div>
    </div>
  );
}
