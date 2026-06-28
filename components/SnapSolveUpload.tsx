"use client";

import { useState, useRef, useEffect } from "react";
import { Camera, Type, Zap, AlertTriangle } from "lucide-react";
import type { SnapSolveResponse } from "@/lib/snapSolveTypes";

interface Props {
  /** Fired with the validated payload after a successful dispatch. */
  onUploadSuccess: (data: SnapSolveResponse) => void;
}

const LANGS = ["english", "hinglish", "hindi"] as const;

// Cosmetic reasoning script for the simulated token stream — generic, process-
// oriented copy only (no fabricated chemistry conclusions that could contradict
// the real, server-computed answer). Never reflects actual API output.
const REASONING_SCRIPT = [
  "Analyzing the problem…",
  "Parsing the given information…",
  "Identifying the relevant concept…",
  "Mapping out the solution path…",
  "Considering an alternative route… reverting to the cleaner method…",
  "Cross-verifying each step…",
  "Computing the result…",
  "Finalizing the answer…",
].join("\n");

export default function SnapSolveUpload({ onUploadSuccess }: Props) {
  const [image, setImage] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState<string>("english");
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stream, setStream] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const cameraRef = useRef<HTMLInputElement>(null);

  // Simulated token stream — character-by-character reveal, fully decoupled from
  // the API. ~20–40ms/char with natural pauses at sentence/line breaks. Purely a
  // perceived-intelligence layer; never reflects real model output.
  useEffect(() => {
    if (!isProcessing) {
      setStream("");
      return;
    }
    setStream("");
    const full = REASONING_SCRIPT;
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      if (i >= full.length) return; // hold at the end until the API resolves
      const ch = full[i];
      i += 1;
      setStream(full.slice(0, i));
      let delay = 20 + Math.floor(Math.random() * 20);
      if (ch === "\n") delay = 300 + Math.floor(Math.random() * 500);
      else if (ch === "…" || ch === ".") delay = 250 + Math.floor(Math.random() * 250);
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 150);
    return () => clearTimeout(timer);
  }, [isProcessing]);

  // Single dispatch path for both manual + camera flows. Takes an explicit
  // base64 so the camera capture can fire instantly without waiting on the
  // async `image` state update. Sends the exact JSON the API already expects.
  async function dispatch(payload: { imageBase64?: string; query?: string }) {
    setIsProcessing(true);
    setError(null);
    try {
      const res = await fetch("/api/snap-solve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageBase64: payload.imageBase64 ?? undefined,
          query: payload.query?.trim() || undefined,
          language,
        }),
      });
      const data = await res.json();
      if (data?.error) {
        setError(data.error);
      } else {
        onUploadSuccess(data as SnapSolveResponse);
      }
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Network error — please try again.");
    } finally {
      setIsProcessing(false);
    }
  }

  // Read a file → base64. `autoSubmit` powers the camera-first instant pipeline:
  // capture → preview → dispatch, with no intermediate click.
  function handleFile(file: File, autoSubmit = false) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target?.result as string;
      setImage(base64);
      if (autoSubmit) dispatch({ imageBase64: base64 });
    };
    reader.readAsDataURL(file);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    if (isProcessing) return;
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }

  const canSubmit = (!!image || query.trim().length > 0) && !isProcessing;

  function handleSolve() {
    if (!canSubmit) return;
    dispatch({ imageBase64: image ?? undefined, query });
  }

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#111827] p-5 space-y-4">
      <style>{`
        @keyframes snapFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes snapBlink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
      `}</style>

      {/* Token-stream reasoning — replaces the form while the API works */}
      {isProcessing && (
        <div style={{ animation: "snapFadeIn 0.3s ease-out both" }} className="space-y-3 py-2">
          <div className="flex items-center gap-2 text-sm font-bold text-cyan-300">
            <span className="h-2 w-2 animate-ping rounded-full bg-cyan-400" />
            AI is reasoning…
          </div>
          <div className="rounded-xl border border-cyan-500/25 bg-[#0B0F19] p-4 shadow-[0_0_45px_-12px_rgba(34,211,238,0.4)]">
            <pre className="m-0 whitespace-pre-wrap break-words font-mono text-[13px] leading-relaxed text-emerald-300/90">
              {stream}
              <span
                style={{ animation: "snapBlink 1s steps(1) infinite" }}
                className="text-emerald-300"
              >▍</span>
            </pre>
          </div>
        </div>
      )}

      {/* Input form — hidden while the thinking layer is shown */}
      {!isProcessing && (
      <>
      {/* Camera-first: open the back camera, capture, and auto-solve instantly */}
      <button
        onClick={() => !isProcessing && cameraRef.current?.click()}
        disabled={isProcessing}
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3.5 font-bold text-black transition disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Camera className="h-5 w-5" /> Camera Mode — Snap &amp; Solve
      </button>
      <input
        ref={cameraRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        disabled={isProcessing}
        onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0], true)}
      />

      <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-wider text-white/30">
        <span className="h-px flex-1 bg-white/10" /> or do it manually <span className="h-px flex-1 bg-white/10" />
      </div>

      {/* Split container: upload zone | formula text box */}
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Upload drop-box (file picker / drag-drop — manual fallback) */}
        <div
          onClick={() => !isProcessing && fileRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className={`relative flex min-h-44 flex-col items-center justify-center rounded-2xl border-2 border-dashed p-5 text-center transition ${
            isProcessing
              ? "cursor-not-allowed border-white/10 opacity-50"
              : "cursor-pointer border-white/15 bg-white/[0.02] hover:border-cyan-500/50 hover:bg-white/[0.04]"
          }`}
        >
          {image ? (
            <img src={image} alt="Problem" className="max-h-40 rounded-xl object-contain" />
          ) : (
            <>
              <Camera className="mb-3 h-8 w-8 text-cyan-400" />
              <p className="text-sm text-white/70">Click or drag &amp; drop</p>
              <p className="mt-1 text-xs text-white/40">Photo of a problem</p>
            </>
          )}
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            disabled={isProcessing}
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
          />
        </div>

        {/* Formula text box */}
        <div className="relative flex min-h-44 flex-col rounded-2xl border border-white/[0.08] bg-[#0B0F19] p-3">
          <div className="mb-1.5 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white/40">
            <Type className="h-3 w-3" /> Type the question
          </div>
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={isProcessing}
            placeholder="e.g. Why is SN1 fastest for a 3° carbon?"
            className="flex-1 resize-none bg-transparent text-sm text-white placeholder-white/30 outline-none disabled:opacity-50"
          />
        </div>
      </div>

      {/* Language toggle */}
      <div className="flex gap-2">
        {LANGS.map((l) => (
          <button
            key={l}
            onClick={() => setLanguage(l)}
            disabled={isProcessing}
            className={`flex-1 rounded-xl py-2 text-xs font-semibold capitalize transition disabled:opacity-50 ${
              language === l ? "bg-cyan-500 text-black" : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
            }`}
          >
            {l === "hindi" ? "हिंदी" : l}
          </button>
        ))}
      </div>

      {/* Manual submit (camera flow needs no click; this serves file/text input) */}
      <button
        onClick={handleSolve}
        disabled={!canSubmit}
        className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-3 font-bold text-white transition hover:bg-white/10 disabled:opacity-40"
      >
        <Zap className="h-4 w-4" /> Solve This Problem
      </button>

      {(image || query) && (
        <button
          onClick={() => { setImage(null); setQuery(""); setError(null); }}
          className="w-full rounded-xl border border-white/10 py-1.5 text-xs text-white/50 transition hover:text-white"
        >
          Clear &amp; try another
        </button>
      )}
      </>
      )}

      {/* Network / middleware error boundary — capture stays enabled for retry */}
      {error && !isProcessing && (
        <div className="space-y-2">
          <div className="flex items-center gap-2 rounded-xl border border-red-500/25 bg-red-500/[0.08] px-3 py-2 text-xs text-red-300">
            <AlertTriangle className="h-3.5 w-3.5 shrink-0" /> {error}
          </div>
          <button
            onClick={() => cameraRef.current?.click()}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500/30 py-2 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-500/10"
          >
            <Camera className="h-3.5 w-3.5" /> Retry capture
          </button>
        </div>
      )}
    </div>
  );
}
