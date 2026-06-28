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
    titleKey: "res.tutor.title", descKey: "res.tutor.desc",
    icon: Bot, href: "/tutor",
    color: "text-cyan-300", tile: "from-cyan-400/20 to-cyan-500/5 border-cyan-400/20", glow: "rgba(34,211,238,0.14)",
  },
  {
    titleKey: "res.search.title", descKey: "res.search.desc",
    icon: Search, href: "/search",
    color: "text-violet-300", tile: "from-violet-400/20 to-violet-500/5 border-violet-400/20", glow: "rgba(155,93,229,0.14)",
  },
  {
    titleKey: "res.revision.title", descKey: "res.revision.desc",
    icon: BrainCircuit, href: "/revision",
    color: "text-cyan-300", tile: "from-cyan-400/20 to-cyan-500/5 border-cyan-400/20", glow: "rgba(34,211,238,0.14)",
  },
  {
    titleKey: "res.library.title", descKey: "res.library.desc",
    icon: BookOpen, href: "/vault",
    color: "text-violet-300", tile: "from-violet-400/20 to-violet-500/5 border-violet-400/20", glow: "rgba(155,93,229,0.14)",
  },
];

export default function ResourcesSection() {
  const { t } = useT();
  return (
    <section className="mx-auto mt-24 max-w-7xl px-6">

      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-cyan-300">
          <Sparkles className="h-4 w-4" />
          {t("res.eyebrow")}
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {features.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.titleKey}
              href={item.href}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              {/* Glossy icon tile */}
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl border bg-gradient-to-br ${item.tile}`}
                style={{ boxShadow: `0 4px 14px ${item.glow}, inset 0 1px 0 rgba(255,255,255,0.12)` }}
              >
                <Icon className={`h-5 w-5 ${item.color}`} />
              </div>

              <h3 className="mt-4 text-lg font-bold">
                {t(item.titleKey)}
              </h3>

              <p className="mt-1.5 text-sm leading-6 text-white/65">
                {t(item.descKey)}
              </p>

              <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-cyan-300">
                {t("vault.explore")}
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
              </div>

            </Link>
          );
        })}

      </div>

    </section>
  );
}
