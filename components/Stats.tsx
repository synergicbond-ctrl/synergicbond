import { Atom, BrainCircuit, Trophy, Clock3 } from "lucide-react";

const stats = [
  {
    icon: Atom, value: "10K+", title: "Chemistry Resources",
    subtitle: "Concepts, reactions, mechanisms & PYQs",
    icon_color: "text-cyan-300", tile: "from-cyan-400/25 to-cyan-500/5 border-cyan-400/25", glow: "rgba(34,211,238,0.18)",
  },
  {
    icon: BrainCircuit, value: "500+", title: "JEE / NEET Topics",
    subtitle: "Mapped chapter-wise syllabus",
    icon_color: "text-violet-300", tile: "from-violet-400/25 to-violet-500/5 border-violet-400/25", glow: "rgba(155,93,229,0.18)",
  },
  {
    icon: Trophy, value: "200+", title: "Olympiad Problems",
    subtitle: "National & International level",
    icon_color: "text-amber-300", tile: "from-amber-400/25 to-amber-500/5 border-amber-400/25", glow: "rgba(255,215,0,0.16)",
  },
  {
    icon: Clock3, value: "24×7", title: "AI Learning",
    subtitle: "Instant chemistry assistance",
    icon_color: "text-emerald-300", tile: "from-emerald-400/25 to-emerald-500/5 border-emerald-400/25", glow: "rgba(16,185,129,0.16)",
  },
];

export default function Stats() {
  return (
    <section className="mx-auto mt-20 max-w-7xl px-6">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              {/* Glossy icon tile */}
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl border bg-gradient-to-br ${item.tile}`}
                style={{ boxShadow: `0 6px 20px ${item.glow}, inset 0 1px 0 rgba(255,255,255,0.12)` }}
              >
                <Icon className={`h-7 w-7 ${item.icon_color}`} />
              </div>

              <div className="mt-6 text-5xl font-black text-white">{item.value}</div>
              <h3 className="mt-4 text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-2.5 leading-6 text-white/70">{item.subtitle}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
