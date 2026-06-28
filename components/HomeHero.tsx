"use client";

import { useT } from "@/lib/i18n";

export default function HomeHero() {
  const { t } = useT();
  return (
    <section className="relative overflow-hidden bg-black">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />
        <div className="absolute right-10 top-0 h-[360px] w-[360px] rounded-full bg-violet-500/10 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-16 pb-10 text-center">
        {/* badge pill */}
        <div className="inline-flex items-center rounded-full border border-cyan-400/25 bg-cyan-500/[0.06] px-6 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">
          {t("hero.badge")}
        </div>

        {/* headline */}
        <h1 className="mt-8 text-5xl font-black leading-[0.95] tracking-[-0.03em] md:text-7xl lg:text-8xl">
          <span className="text-white">{t("hero.headline1")}</span>
          <br />
          <span className="bg-gradient-to-r from-[#00F5D4] via-[#00BBF9] to-[#9B5DE5] bg-clip-text text-transparent">
            {t("hero.headline2")}
          </span>
        </h1>

        {/* tagline */}
        <p className="mt-6 text-lg text-white/55 tracking-wide md:text-xl">
          {t("hero.tagline")}
        </p>
      </div>
    </section>
  );
}
