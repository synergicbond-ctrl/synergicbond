"use client";

import Link from "next/link";
import { Fragment, type CSSProperties } from "react";
import { LinkButton } from "@/components/ui/Button";
import BenzeneInstrument from "@/components/home/BenzeneInstrument";
import { useT } from "@/lib/i18n";
import styles from "./HomeHero.module.css";

const STAGE_TONES = [
  "var(--chem-bond)",
  "var(--chem-orbital)",
  "var(--chem-rule)",
  "var(--chem-energy)",
] as const;

const LEARNING_PATHS = [
  { index: "01", label: "Chapter Notes", href: "/notes", tone: "var(--chem-bond)" },
  { index: "02", label: "Practice Center", href: "/pyq", tone: "var(--chem-orbital)" },
  { index: "03", label: "Formula Cards", href: "/formula-cards", tone: "var(--chem-rule)" },
  { index: "04", label: "Periodic Table", href: "/periodic-table", tone: "var(--chem-energy)" },
] as const;

function BondChain({ stages }: { stages: string[] }) {
  return (
    <div className={styles.bondChain} aria-label={stages.join(", ")}>
      {stages.map((stage, index) => (
        <Fragment key={stage}>
          {index > 0 ? <span aria-hidden className={styles.stageBond} /> : null}
          <span
            className={styles.stage}
            style={{ "--stage-tone": STAGE_TONES[index % STAGE_TONES.length] } as CSSProperties}
          >
            <span aria-hidden className={styles.stageDot} />
            {stage}
          </span>
        </Fragment>
      ))}
    </div>
  );
}

/**
 * Public landing composition. This intentionally follows the approved Chemistry
 * OS demo: a calm two-column reading surface, one scientific instrument, and
 * four useful entry points. The destination routes remain the production app.
 */
export default function HomeHero() {
  const { t } = useT();
  const stages = t("hero.tagline")
    .split("•")
    .map((stage) => stage.trim())
    .filter(Boolean);

  return (
    <section className={styles.hero} aria-labelledby="chemistry-os-title">
      <span aria-hidden className={styles.spectrum} />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.kicker}>
            <span className={styles.eyebrowCode}>SB / 06-C</span>
            <span>{t("hero.badge")}</span>
          </div>

          <h1 id="chemistry-os-title" className={styles.title}>
            <span>{t("hero.headline1")}</span>
            <span>{t("hero.headline2")}</span>
          </h1>

          <p className={styles.promise}>
            <strong>Read verified notes.</strong> Practise with purpose, connect every
            question to its chemistry, and always know what to learn next.
          </p>

          <BondChain stages={stages} />

          <div className={styles.actions}>
            <LinkButton href="/notes" variant="primary" size="md" className={styles.primaryAction}>
              {t("hero.startLearning")}
            </LinkButton>
            <LinkButton href="/vault" variant="secondary" size="md" className={styles.secondaryAction}>
              {t("hero.exploreVault")}
            </LinkButton>
          </div>
        </div>

        <div className={styles.instrument}>
          <BenzeneInstrument />
        </div>
      </div>

      <nav className={styles.pathRail} aria-label="Core chemistry tools">
        {LEARNING_PATHS.map((path) => (
          <Link
            key={path.href}
            href={path.href}
            style={{ "--path-tone": path.tone } as CSSProperties}
          >
            <span className={styles.pathIndex}>{path.index}</span>
            <span className={styles.pathLabel}>{path.label}</span>
            <span aria-hidden className={styles.pathArrow}>↗</span>
          </Link>
        ))}
      </nav>
    </section>
  );
}
