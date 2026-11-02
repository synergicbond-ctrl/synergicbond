"use client";

import styles from "./reader.module.css";
import { DEFAULT_SETTINGS, settingsStore, useSettings, type ReaderSettings } from "./settings";

function Seg<K extends keyof ReaderSettings>({
  label,
  name,
  options,
}: {
  label: string;
  name: K;
  options: { value: ReaderSettings[K]; text: string }[];
}) {
  const s = useSettings();
  return (
    <div className={styles.ctlRow}>
      <span id={`ctl-${name}`}>{label}</span>
      <div className={styles.seg2} role="group" aria-labelledby={`ctl-${name}`}>
        {options.map((o) => (
          <button
            key={String(o.value)}
            type="button"
            aria-pressed={s[name] === o.value}
            onClick={() => settingsStore.set({ [name]: o.value } as Partial<ReaderSettings>)}
          >
            {o.text}
          </button>
        ))}
      </div>
    </div>
  );
}

/** Reading comfort. Every theme here is dark; they differ in depth and contrast only. */
export function ComfortPanel() {
  const s = useSettings();
  return (
    <div className={styles.box}>
      <p className={styles.panelTitle}>Reading comfort</p>
      <Seg
        label="Text size"
        name="size"
        options={[
          { value: "sm", text: "A−" },
          { value: "md", text: "A" },
          { value: "lg", text: "A+" },
          { value: "xl", text: "A++" },
        ]}
      />
      <Seg
        label="Theme"
        name="theme"
        options={[
          { value: "standard", text: "Dark" },
          { value: "deep", text: "Deep" },
          { value: "contrast", text: "High" },
        ]}
      />
      <Seg
        label="Font"
        name="font"
        options={[
          { value: "serif", text: "Serif" },
          { value: "sans", text: "Sans" },
          { value: "easy", text: "Easy-read" },
        ]}
      />
      <Seg
        label="Line spacing"
        name="space"
        options={[
          { value: "normal", text: "Normal" },
          { value: "roomy", text: "Roomy" },
        ]}
      />
      <div className={styles.ctlRow}>
        <span id="ctl-cvd">Colour-blind safe</span>
        <div className={styles.seg2} role="group" aria-labelledby="ctl-cvd">
          <button type="button" aria-pressed={!s.cvd} onClick={() => settingsStore.set({ cvd: false })}>
            Off
          </button>
          <button type="button" aria-pressed={s.cvd} onClick={() => settingsStore.set({ cvd: true })}>
            On
          </button>
        </div>
      </div>
      <p className={styles.hint}>
        Easy-read uses wider letter and word spacing. Every block keeps its label and shape, so colour is never the only
        signal.
      </p>
      <button
        type="button"
        className={styles.btn}
        style={{ marginTop: "0.6rem" }}
        onClick={() => settingsStore.set({ ...DEFAULT_SETTINGS })}
      >
        Reset
      </button>
    </div>
  );
}
