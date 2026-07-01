export default function RankBar({
  label,
  count,
  max,
  rank,
  accent = "bg-cyan-500",
}: {
  label: string;
  count: number;
  max: number;
  rank?: number;
  accent?: string;
}) {
  const pct = max > 0 ? Math.round((count / max) * 100) : 0;
  return (
    <div className="flex items-center gap-3">
      {rank !== undefined && (
        <span className="w-5 text-xs font-bold text-white/40 shrink-0">#{rank}</span>
      )}
      <span className="text-sm text-white/70 flex-1 min-w-0 truncate">{label}</span>
      <div className="flex-1 max-w-[140px] md:max-w-[200px] bg-white/10 h-2.5 rounded-full overflow-hidden shrink-0">
        <div className={`h-full ${accent} transition-all`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs text-white/50 w-8 text-right shrink-0">{count}</span>
    </div>
  );
}
