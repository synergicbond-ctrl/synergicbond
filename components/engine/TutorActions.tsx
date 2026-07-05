"use client";

import { useCallback, useState } from "react";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// AI Tutor quick actions — six one-tap actions that stream from the EXISTING
// /api/chat route (chapter-aware, weak-topic-aware). No new AI pipeline; the
// full conversational tutor stays at /tutor.
// ─────────────────────────────────────────────────────────────────────────────

const ACTIONS = [
  { key: "explain", label: "Explain Again", prompt: "Explain the core ideas of this chapter again, clearly and compactly." },
  { key: "simpler", label: "Simpler Version", prompt: "Explain this chapter like I'm struggling — simplest possible words, small steps, everyday analogies." },
  { key: "advanced", label: "Advanced Version", prompt: "Give me the most advanced, competition-depth view of this chapter: edge cases, exceptions, deeper reasoning." },
  { key: "similar", label: "Similar Questions", prompt: "Generate 3 fresh practice questions on this chapter with answers at the end." },
  { key: "revision", label: "Revision Notes", prompt: "Create compact one-screen revision notes for this chapter: key points, formulas, traps." },
  { key: "formulas", label: "Formula Sheet", prompt: "Create a formula sheet for this chapter: every formula, variables defined, units, when to use." },
] as const;

export default function TutorActions({ chapterId, chapterTitle }: { chapterId: string; chapterTitle: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const run = useCallback(async (key: string, prompt: string) => {
    setActive(key); setOutput(""); setError(null); setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: `${prompt} (Chapter: ${chapterTitle})`, chapterId }),
      });
      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "The tutor is unavailable right now.");
        return;
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setOutput(acc);
      }
    } catch { setError("Could not reach the tutor."); }
    finally { setLoading(false); }
  }, [chapterId, chapterTitle]);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {ACTIONS.map((a) => (
          <button key={a.key} onClick={() => run(a.key, a.prompt)} disabled={loading}
            className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition disabled:opacity-50 ${
              active === a.key ? "border-cyan-400/50 bg-cyan-500/15 text-white" : "border-white/10 bg-white/[0.03] text-white/60 hover:text-white/85"
            }`}>
            {a.label}
          </button>
        ))}
      </div>
      {error && <p className="rounded-xl border border-rose-500/30 bg-rose-500/[0.06] p-3 text-sm text-rose-300">{error}</p>}
      {(output || loading) && (
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-white/80">{output || "Thinking…"}</p>
        </div>
      )}
      <p className="text-xs text-white/40">
        Powered by the live AI tutor (Gemini). Full conversation at{" "}
        <Link href="/tutor" className="font-semibold text-cyan-300 hover:underline">/tutor</Link>.
      </p>
    </div>
  );
}
