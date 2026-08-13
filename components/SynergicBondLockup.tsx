import styles from "./SynergicBondLockup.module.css";

/**
 * Static navbar signature for SYNERGIC BOND.
 *
 * The S is editorial type; the B is constructed from CSS strokes. Their
 * shared waist becomes a covalent double bond, so the chemistry reference is
 * structural rather than a generic atom or orbital illustration.
 */
export default function SynergicBondLockup() {
  return (
    <span className={styles.lockup} aria-hidden="true">
      <span className={styles.mark}>
        <span className={styles.letterS}>S</span>
        <span className={styles.bSpine} />
        <span className={`${styles.bBowl} ${styles.bBowlUpper}`} />
        <span className={`${styles.bBowl} ${styles.bBowlLower}`} />
        <span className={`${styles.doubleBond} ${styles.doubleBondUpper}`} />
        <span className={`${styles.doubleBond} ${styles.doubleBondLower}`} />
      </span>

      <span className={styles.copy}>
        <span className={styles.wordmark}>
          <span className={styles.synergic}>SYNERGIC</span>
          <span className={styles.bond}>BOND</span>
        </span>
        <span className={styles.subtitle}>
          <span>THE CHEMISTRY</span>
          <span>OPERATING SYSTEM</span>
        </span>
      </span>
    </span>
  );
}
