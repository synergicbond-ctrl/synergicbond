import {
  Atom,
  BrainCircuit,
  Trophy,
  Clock3,
} from "lucide-react";

const stats = [
  {
    icon: Atom,
    value: "10K+",
    title: "Chemistry Resources",
    subtitle: "Concepts, reactions, mechanisms & PYQs",
    color: "text-cyan-300",
  },
  {
    icon: BrainCircuit,
    value: "500+",
    title: "JEE / NEET Topics",
    subtitle: "Mapped chapter-wise syllabus",
    color: "text-violet-300",
  },
  {
    icon: Trophy,
    value: "200+",
    title: "Olympiad Problems",
    subtitle: "National & International level",
    color: "text-amber-300",
  },
  {
    icon: Clock3,
    value: "24×7",
    title: "AI Learning",
    subtitle: "Instant chemistry assistance",
    color: "text-emerald-300",
  },
];

export default function Stats() {
  return (
    <section className="mx-auto mt-32 max-w-7xl px-6">

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group rounded-[28px] border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              <Icon className={`h-10 w-10 ${item.color}`} />

              <div className="mt-8 text-5xl font-black">
                {item.value}
              </div>

              <h3 className="mt-5 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-white/55">
                {item.subtitle}
              </p>

            </div>
          );
        })}

      </div>

    </section>
  );
}