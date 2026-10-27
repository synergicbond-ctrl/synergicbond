"use client";

import { useState, useSyncExternalStore } from "react";
import styles from "./reader.module.css";
import { toggleDone, toggleSaved, useProgress } from "./progress";

const noopSubscribe = () => () => {};
const canSpeak = () => typeof window !== "undefined" && "speechSynthesis" in window;

/** Mark done / Save / Listen for one topic. Listening uses the browser's own speech engine. */
export function TopicTools({ chapterId, topic }: { chapterId: string; topic: number }) {
  const progress = useProgress(chapterId);
  const done = progress.done.includes(topic);
  const saved = progress.saved.includes(topic);
  const speechOk = useSyncExternalStore(noopSubscribe, canSpeak, () => false);
  const [speaking, setSpeaking] = useState(false);

  const listen = () => {
    const synth = window.speechSynthesis;
    if (speaking) {
      synth.cancel();
      setSpeaking(false);
      return;
    }
    const el = document.getElementById(`topic-${topic}`);
    if (!el) return;
    // read only what is visible, so Skim/Exam modes are read as they are shown
    const text = Array.from(el.querySelectorAll<HTMLElement>("h2, p:not([class*='tag']), li, h4"))
      .filter((n) => n.offsetParent !== null)
      .map((n) => n.textContent?.trim())
      .filter(Boolean)
      .join(". ");
    if (!text) return;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-IN";
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    setSpeaking(true);
    synth.speak(u);
  };

  return (
    <div className={styles.topicTools} role="group" aria-label={`Topic ${topic} tools`}>
      <button type="button" className={styles.btn} aria-pressed={done} onClick={() => toggleDone(chapterId, topic)}>
        {done ? "✓ Done" : "Mark as done"}
      </button>
      <button type="button" className={styles.btn} aria-pressed={saved} onClick={() => toggleSaved(chapterId, topic)}>
        {saved ? "★ Saved" : "☆ Save"}
      </button>
      {speechOk ? (
        <button type="button" className={styles.btn} aria-pressed={speaking} onClick={listen}>
          {speaking ? "■ Stop" : "▶ Listen"}
        </button>
      ) : null}
    </div>
  );
}
