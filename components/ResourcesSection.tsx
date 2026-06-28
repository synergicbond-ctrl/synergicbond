"use client";
import Link from "next/link";
import { useT } from "@/lib/i18n";
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
    description: "Ask chemistry questions naturally and receive step-by-step explanations.",
    icon: Bot, href: "/tutor",
    color: "text-cyan-300", tile: "from-cyan-400/20 to-cyan-500/5 border-cyan-400/20", glow: "rgba(34,211,238,0.14)",
  },
  {
    title: "Universal Search",
    description: "Instantly search concepts, reactions, formulas and chapters.",
    icon: Search, href: "/search",
    color: "text-violet-300", tile: "from-violet-400/20 to-violet-500/5 border-violet-400/20", glow: "rgba(155,93,229,0.14)",
  },
  {
    title: "Revision Engine",
    description: "Revise smarter with quick facts, flashcards and memory boosters.",
    icon: BrainCircuit, href: "/revision",
    color: "text-cyan-300", tile: "from-cyan-400/20 to-cyan-500/5 border-cyan-400/20", glow: "rgba(34,211,238,0.14)",
  },
  {
    title: "Knowledge Library",
    description: "Everything you need—from concepts to mechanisms—in one place.",
    icon: BookOpen, href: "/vault",
    color: "text-violet-300", tile: "from-violet-400/20 to-violet-500/5 border-violet-400/20", glow: "rgba(155,93,229,0.14)",
  },
];

export default function ResourcesSection() {
  const { t } = useT();
  return (
    <section className="mx-auto mt-36 max-w-7xl px-6">

      <div className="text-center">

        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-cyan-300">
          <Sparkles className="h-4 w-4" />
          {t("res.eyebrow")}
        </div>

        <h2 className="mt-6 text-3xl md:text-4xl font-black">
          {t("res.title")}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70">
          {t("res.desc")}
        </p>

      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">

        {features.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
            >
              {/* Glossy icon tile */}
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl border bg-gradient-to-br ${item.tile}`}
                style={{ boxShadow: `0 6px 20px ${item.glow}, inset 0 1px 0 rgba(255,255,255,0.12)` }}
              >
                <Icon className={`h-7 w-7 ${item.color}`} />
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-white/70">
                {item.description}
              </p>

              <div className="mt-10 flex items-center gap-2 font-medium text-cyan-300">
                {t("vault.explore")}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>

            </Link>
          );
        })}

      </div>

    </section>
  );
}