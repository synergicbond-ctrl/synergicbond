import { Rocket, BookOpenCheck, BrainCircuit } from "lucide-react";

const pillars = [
  {
    icon: Rocket,
    title: "Built for Elite Ranks",
    body: "Engineered to decode the highest-tier patterns of JEE Advanced, NEET, and International Olympiads — built by educators with 18+ years of rank-topping results.",
    accent: "text-cyan-400",
    border: "border-cyan-500/20",
    bg: "bg-cyan-950/20",
  },
  {
    icon: BookOpenCheck,
    title: "Beyond the Textbook",
    body: "We transform rigid rote-memorization into dynamic visual mechanisms and algorithmic practice — so chemistry becomes intuition, not cramming.",
    accent: "text-purple-400",
    border: "border-purple-500/20",
    bg: "bg-purple-950/20",
  },
  {
    icon: BrainCircuit,
    title: "Human Intelligence + AI",
    body: "Fine-tuned core chemistry data trained to assist students 24/7 with zero placeholders — real answers from a real expert, powered by AI speed.",
    accent: "text-amber-400",
    border: "border-amber-500/20",
    bg: "bg-amber-950/20",
  },
];

export default function AboutVision() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      {/* Gradient divider */}
      <div className="h-px w-full mb-20 bg-gradient-to-r from-cyan-500 via-purple-500 to-transparent" />

      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">

        {/* Left — mission statement */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-300 mb-5">
            Our Mission
          </p>
          <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
            Engineering the Future of{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
              Chemistry Education.
            </span>
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed text-base">
            SYNERGIC BOND was built with a single obsession — give every chemistry student,
            regardless of geography or resources, access to the kind of precision preparation
            that produces top rankers, Olympiad medalists, and future scientists.
          </p>
          <p className="mt-4 text-white/65 leading-relaxed text-sm">
            Created by Prof. Mritunjay Shukla — 18+ years faculty at ALLEN &amp; Sri Chaitanya,
            JEE Advanced expert, published author, and patent holder — this platform carries
            real pedagogical depth, not just AI-generated content.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <div className="flex flex-col">
              <span className="text-3xl font-black text-white">18+</span>
              <span className="text-xs text-white/65 font-medium">Years Teaching</span>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-3xl font-black text-white">50K+</span>
              <span className="text-xs text-white/65 font-medium">Students Guided</span>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-3xl font-black text-white">IIT</span>
              <span className="text-xs text-white/65 font-medium">Rank Producers</span>
            </div>
          </div>
        </div>

        {/* Right — trust pillars */}
        <div className="flex flex-col gap-4">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className={`rounded-2xl border ${p.border} ${p.bg} p-5 flex gap-4 items-start`}
              >
                <div className={`flex-shrink-0 p-2.5 rounded-xl bg-white/5`}>
                  <Icon className={`h-5 w-5 ${p.accent}`} />
                </div>
                <div>
                  <h3 className={`font-bold text-sm text-white mb-1`}>{p.title}</h3>
                  <p className="text-xs text-gray-300 leading-relaxed">{p.body}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
