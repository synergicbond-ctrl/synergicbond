import { Zap, Target, FlaskConical, AlertTriangle, Brain } from "lucide-react";
import type { Mechanism } from "@/lib/mechanismSchema";

// 30-second revision card.
export default function JeeQuickView({ q }: { q: Mechanism["quickView"] }) {
  const rows: { icon: any; label: string; value: string; tone?: string }[] = [
    { icon: Zap, label: "Reaction", value: q.reaction },
    { icon: Brain, label: "Key intermediate", value: q.keyIntermediate },
    { icon: Target, label: "RDS", value: q.rds },
    { icon: FlaskConical, label: "Key reagent", value: q.keyReagent },
    { icon: AlertTriangle, label: "Exam trap", value: q.trap, tone: "text-rose-300" },
  ];
  return (
    <div className="rounded-2xl border border-amber-400/25 bg-gradient-to-br from-amber-500/[0.08] to-transparent p-4">
      <div className="mb-3 flex items-center gap-2 text-sm font-black text-amber-200">⚡ 30-Second Revision</div>
      <div className="space-y-2">
        {rows.map((r) => (
          <div key={r.label} className="flex items-start gap-2 text-[13px]">
            <r.icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-300/70" />
            <span className="text-white/45">{r.label}:</span>
            <span className={`font-semibold ${r.tone || "text-white/90"}`}>{r.value}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 rounded-lg bg-amber-500/10 px-3 py-2 text-[13px] font-semibold text-amber-100">🧩 {q.mnemonic}</p>
    </div>
  );
}
