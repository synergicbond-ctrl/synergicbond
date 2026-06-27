interface CoachWidgetProps {
  recommendations: string[];
}

export function CoachWidget({
  recommendations,
}: CoachWidgetProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <h2 className="text-2xl font-bold text-white">
        AI Coach
      </h2>

      <div className="mt-4 space-y-3">
        {recommendations.map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-white/10 p-3 text-white/70"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
