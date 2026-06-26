import Link from "next/link";
import {
  Bot,
  Search,
  BookOpen,
  BrainCircuit,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "AI Tutor",
    description:
      "Ask chemistry questions naturally and receive step-by-step explanations.",
    icon: Bot,
    href: "/tutor",
    color: "text-cyan-300",
  },
  {
    title: "Universal Search",
    description:
      "Instantly search concepts, reactions, formulas and chapters.",
    icon: Search,
    href: "/search",
    color: "text-violet-300",
  },
  {
    title: "Revision Engine",
    description:
      "Revise smarter with quick facts, flashcards and memory boosters.",
    icon: BrainCircuit,
    href: "/revision",
    color: "text-emerald-300",
  },
  {
    title: "Knowledge Library",
    description:
      "Everything you need—from concepts to mechanisms—in one place.",
    icon: BookOpen,
    href: "/vault",
    color: "text-amber-300",
  },
];

export default function ResourcesSection() {
  return (
    <section className="mx-auto mt-36 max-w-7xl px-6">

      <div className="text-center">

        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-cyan-300">
          <Sparkles className="h-4 w-4" />
          Everything You Need
        </div>

        <h2 className="mt-6 text-5xl font-black">
          One Platform.
          <br />
          Unlimited Learning.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/60">
          Every feature is designed to help you understand, remember and
          master chemistry faster.
        </p>

      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">

        {features.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-[30px] border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
            >
              <Icon className={`h-10 w-10 ${item.color}`} />

              <h3 className="mt-8 text-3xl font-bold">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-white/60">
                {item.description}
              </p>

              <div className="mt-10 flex items-center gap-2 font-medium text-cyan-300">
                Explore
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>

            </Link>
          );
        })}

      </div>

    </section>
  );
}