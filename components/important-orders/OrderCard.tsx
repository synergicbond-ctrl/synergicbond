import FormulaText from "./FormulaText";
import { type ImportantOrder } from "@/lib/importantOrders";

// An order is an "exception" entry if the source flagged it as such.
function isException(o: ImportantOrder): boolean {
  return /exception|anomal|deviat/i.test(o.property) || /exception|anomal|deviat/i.test(o.note ?? "");
}

// Compact, presentational card: title · group · the sequence (+ optional note).
// Exceptions render in red. Category/source/verification chrome lives at the
// page level, not per card.
export default function OrderCard({ order }: { order: ImportantOrder }) {
  const exc = isException(order);
  return (
    <div className="rounded-xl border border-white/[0.07] bg-[#111827] px-3.5 py-2.5 transition hover:border-cyan-400/25">
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="text-[13px] font-bold leading-tight text-white">{order.property}</h3>
        {exc && (
          <span className="shrink-0 rounded-md bg-red-500/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-red-400">
            Exception
          </span>
        )}
      </div>
      <p className="mt-0.5 text-[10px] uppercase tracking-wide text-white/30">{order.group}</p>

      <FormulaText
        text={order.order}
        className={`mt-1.5 block font-mono text-[14px] font-semibold leading-relaxed [&_sub]:text-[0.7em] [&_sup]:text-[0.7em] ${
          exc ? "text-red-400" : "text-cyan-200"
        }`}
      />

      {order.note && (
        <p className={`mt-1 text-[11px] leading-snug ${exc ? "text-red-300/70" : "text-white/45"}`}>{order.note}</p>
      )}
    </div>
  );
}
