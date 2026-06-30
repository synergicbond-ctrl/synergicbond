import { Gauge, Flame, FlaskConical, Package, BookOpen, Zap, Layers, Clock, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Mechanism } from "@/lib/mechanismSchema";

const DIFF: Record<string, string> = {
  Easy: "text-emerald-300", Moderate: "text-amber-300", Hard: "text-orange-300", Olympiad: "text-rose-300",
};
const FREQ: Record<string, string> = {
  Low: "text-white/50", Medium: "text-cyan-300", High: "text-amber-300", "Very High": "text-rose-300",
};

function Cell({ icon: Icon, label, children }: { icon: LucideIcon; label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#0e1421] p-3">
      <div className="mb-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white/35">
        <Icon className="h-3 w-3" /> {label}
      </div>
      <div className="text-[13px] font-semibold leading-snug text-white/90">{children}</div>
    </div>
  );
}

export default function ReactionDashboard({ d }: { d: Mechanism["dashboard"] }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      <Cell icon={Layers} label="Type">{d.reactionType}</Cell>
      <Cell icon={Gauge} label="Difficulty"><span className={DIFF[d.difficulty]}>{d.difficulty}</span></Cell>
      <Cell icon={Flame} label="Exam freq"><span className={FREQ[d.examFrequency]}>{d.examFrequency}</span></Cell>
      <Cell icon={Zap} label="Mechanism">{d.mechanismType}</Cell>
      <Cell icon={Sparkles} label="RDS">{d.rds}</Cell>
      <Cell icon={Clock} label="Learn in">{d.timeToLearn}</Cell>
      <Cell icon={FlaskConical} label="Reagents">{d.reagents.join(", ")}</Cell>
      <Cell icon={Package} label="Products">{d.products.join(", ")}</Cell>
      <Cell icon={BookOpen} label="Chapter">{d.chapter}</Cell>
    </div>
  );
}
