import Link from "next/link";
import BenzeneInstrument from "@/components/home/BenzeneInstrument";
import styles from "./HomeHero.module.css";

const SYSTEM_PAGES = [
  { index: "01", label: "Control Center", href: "/" },
  { index: "02", label: "Chapter Notes", href: "/notes" },
  { index: "03", label: "Formula Cards", href: "/formula-cards" },
  { index: "04", label: "Knowledge Vault", href: "/vault" },
  { index: "05", label: "Periodic Table", href: "/periodic-table" },
  { index: "06", label: "Programs", href: "/programs" },
  { index: "07", label: "Practice Center", href: "/pyq" },
  { index: "08", label: "AI Lab", href: "/snap-solve" },
  { index: "09", label: "Performance", href: "/dashboard" },
  { index: "10", label: "Pricing", href: "/pricing" },
] as const;

/** Demo-faithful Chemistry OS shell; every destination remains a live route. */
export default function HomeHero() {
  return (
    <>
      <nav className={styles.systemRail} aria-label="Chemistry OS sections">
        <div className={styles.railLabel}>
          <span aria-hidden className={styles.railBond} />
          <span>Split-valence continuum</span>
          <strong>01 / Control Center</strong>
        </div>
        <div className={styles.railPages}>
          {SYSTEM_PAGES.map((page) => (
            <Link href={page.href} key={page.index}>
              <span>{page.index}</span><em>{page.label}</em>
            </Link>
          ))}
        </div>
      </nav>

      <section className={styles.hero} aria-labelledby="chemistry-os-title">
        <div className={styles.copy}>
          <div className={styles.identity}>
            <div className={styles.carbonTile} aria-label="Carbon, atomic number 6, atomic mass 12.011">
              <small>6</small><strong>C</strong><span>Carbon</span><em>12.011</em>
            </div>
            <div>
              <span className={styles.microLabel}>The intelligent chemistry platform</span>
              <h1 id="chemistry-os-title"><span>Synergic</span><span>Bond</span></h1>
            </div>
          </div>
          <div className={styles.osBracket} aria-label="The Chemistry Operating System">
            <span>The Chemistry</span><span>Operating System</span>
          </div>
          <p>Know what to learn. Know what to do next. One connected system for theory, practice, revision and scientific reasoning.</p>
          <div className={styles.actions}>
            <Link className={styles.primaryAction} href="/notes">Enter the Chemistry Operating System <span aria-hidden>↗</span></Link>
            <Link className={styles.secondaryAction} href="/programs">Explore programs</Link>
          </div>
          <div className={styles.systemStatus}>
            <span>Live system</span><strong>One connected chemistry workspace.</strong><small>Notes · practice · revision · exam intelligence</small>
          </div>
          <span className={styles.bondBridge} aria-hidden><i /><i /><b>ΣB / 06</b></span>
        </div>
        <BenzeneInstrument />
      </section>
    </>
  );
}
