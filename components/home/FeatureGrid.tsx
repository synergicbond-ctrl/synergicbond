export default function FeatureGrid() {
  const features = [
    { icon: "🧠", title: "AI Tutor", desc: "Learn concepts step by step." },
    { icon: "📚", title: "NCERT Assistant", desc: "Instant NCERT explanations." },
    { icon: "📝", title: "PYQ Analyzer", desc: "Practice previous year questions." },
    { icon: "⚛️", title: "Reaction Predictor", desc: "Understand reaction pathways." },
    { icon: "📈", title: "Revision Planner", desc: "Smart revision schedules." },
    { icon: "🧪", title: "Formula Finder", desc: "Find formulas instantly." },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-3 text-center text-4xl font-bold">
        AI Chemistry Platform
      </h2>

      <p className="mb-12 text-center text-white/60">
        Everything you need to master Chemistry in one place.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-400/40 hover:bg-white/10"
          >
            <div className="mb-4 text-4xl">{feature.icon}</div>

            <h3 className="text-xl font-semibold">
              {feature.title}
            </h3>

            <p className="mt-3 text-white/60">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
