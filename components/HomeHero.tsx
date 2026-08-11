"use client";

import { Fragment } from "react";
import { LinkButton } from "@/components/ui/Button";
import { useT } from "@/lib/i18n";

/**
 * The four stages arrive as one bullet-separated string from i18n. Rendering
 * them as a bond chain — nodes joined by hairlines — is the brand idea stated
 * literally: separate things connected into something stronger.
 */
function BondChain({ stages }: { stages: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-y-3">
      {stages.map((stage, i) => (
        <Fragment key={stage}>
          {i > 0 ? (
            <span
              aria-hidden
              className="mx-3 h-px w-5 shrink-0 sm:mx-4 sm:w-10"
              style={{ background: "var(--border-strong)" }}
            />
          ) : null}
          <span className="flex items-center gap-2">
            <span
              aria-hidden
              className="h-[5px] w-[5px] shrink-0 rotate-45"
              style={{ background: "var(--accent)" }}
            />
            <span className="font-data text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)] sm:text-[12px]">
              {stage}
            </span>
          </span>
        </Fragment>
      ))}
    </div>
  );
}

/** The lattice: the page's column grid, made visible rather than implied. */
function Lattice() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="mx-auto flex h-full max-w-[1400px] px-6">
        <div className="flex h-full w-full md:hidden">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-full flex-1"
              style={{ borderLeft: i === 0 ? "none" : "1px solid var(--border)" }}
            />
          ))}
        </div>
        <div className="hidden h-full w-full md:flex">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-full flex-1"
              style={{ borderLeft: i === 0 ? "none" : "1px solid var(--border)" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomeHero() {
  const { t } = useT();

  const stages = t("hero.tagline")
    .split("•")
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <section
      className="relative"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <Lattice />

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:py-36">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="h-[5px] w-[5px] shrink-0 rotate-45"
            style={{ background: "var(--accent)" }}
          />
          <span className="font-data text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
            {t("hero.badge")}
          </span>
        </div>

        <h1 className="font-display mt-8 max-w-[15ch] text-[52px] font-semibold leading-[1.02] tracking-[-0.035em] text-[var(--foreground)] sm:text-[76px] lg:text-[104px]">
          {t("hero.headline1")}
          <br />
          {t("hero.headline2")}
        </h1>

        <div className="mt-10">
          <BondChain stages={stages} />
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <LinkButton href="/learn" variant="primary" size="md">
            {t("hero.startLearning")}
          </LinkButton>
          <LinkButton href="/vault" variant="secondary" size="md">
            {t("hero.exploreVault")}
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
