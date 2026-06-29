"use client";

import { useState, useRef } from "react";
import { track } from "@vercel/analytics";
import { Camera, Type, Zap, AlertTriangle, Lock } from "lucide-react";
import type { SnapSolveResponse } from "@/lib/snapSolveTypes";

interface Props {
  /** Fired with the validated payload after the stream's `final` event. */
  onUploadSuccess: (data: SnapSolveResponse) => void;
}

const LANGS = ["english", "hinglish", "hindi"] as const;

interface StreamStep {
  stepNumber: number;
  text: string;
}

// Stable per-browser id so the server's Memory Core keys adaptation per student.
function getUserId(): string {
  try {
    let id = localStorage.getItem("ss_uid");
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem("ss_uid", id);
    }
    return id;
  } catch {
    return "anonymous";
  }
}

// Parse a single SSE frame ("event: x\ndata: ...") into its parts.
function parseFrame(frame: string): { event?: string; data: string } {
  let event: string | undefined;
  const dataLines: string[] = [];
  for (const line of frame.split("\n")) {
    if (line.startsWith("event:")) event = line.slice(6).trim();
    else if (line.startsWith("data:")) dataLines.push(line.slice(5).trim());
  }
  return { event, data: dataLines.join("\n") };
}

export default function SnapSolveUpload({ onUploadSuccess }: Props) {
  const [image, setImage] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState<string>("english");
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paywall, setPaywall] = useState(false);
  const [reasoning, setReasoning] = useState<string[]>([]);
  const [steps, setSteps] = useState<StreamStep[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);
  const cameraRef = useRef<HTMLInputElement>(null);

  // Single dispatch path for both manual + camera flows. Opens the SSE stream,
  // renders reasoning/step events live, and hands the `final` payload to the page.
  async function dispatch(payload: { imageBase64?: string; query?: string }) {
    setIsProcessing(true);
    setError(null);
    setPaywall(false);
    setReasoning([]);
    setSteps([]);
    try {
      const res = await fetch("/api/snap-solve", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "text/event-stream" },
        body: JSON.stringify({
          imageBase64: payload.imageBase64 ?? undefined,
          query: payload.query?.trim() || undefined,
          language,
          userId: getUserId(),
        }),
      });

      const ctype = res.headers.get("content-type") || "";

      // Non-stream response (validation/error path) → fall back to JSON handling.
      if (!res.ok || !ctype.includes("text/event-stream") || !res.body) {
        const data = await res.json().catch(() => null);
        if (res.status === 402 || data?.paywall) {
          setPaywall(true);
          track("paywall_hit", { feature: "snap-solve" });
        } else if (data?.error) setError(data.error);
        else if (data) onUploadSuccess(data as SnapSolveResponse);
        else setError("Unexpected response from the solver. Please try again.");
        return;
      }

      // Read the SSE stream frame-by-frame.
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });

        // Frames are separated by a blank line; keep any trailing partial frame.
        const frames = buf.split("\n\n");
        buf = frames.pop() ?? "";

        for (const frame of frames) {
          if (!frame.trim()) continue;
          const { event, data } = parseFrame(frame);
          if (!event || !data) continue;
          try {
            const parsed = JSON.parse(data);
            if (event === "reasoning") {
              setReasoning((prev) => [...prev, parsed as string]);
            } else if (event === "step") {
              setSteps((prev) => [...prev, parsed as StreamStep]);
            } else if (event === "final") {
              onUploadSuccess(parsed as SnapSolveResponse);
            }
            // `partial_result` / `interrupt` are streamed too but the page's
            // SnapSolveResult renders the complete `final`, so they're ignored here.
          } catch {
            /* skip malformed frame */
          }
        }
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
        @keyframes snapFadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes snapBlink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
      `}</style>

      {/* Live stream panel — driven by real SSE events from /api/snap-solve */}
      {isProcessing && (
        <div style={{ animation: "snapFadeIn 0.3s ease-out both" }} className="space-y-3 py-2">
          <div className="flex items-center gap-2 text-sm font-bold text-cyan-300">
            <span className="h-2 w-2 animate-ping rounded-full bg-cyan-400" />
            AI is reasoning…
          </div>

          {/* Reasoning tokens (server-streamed) */}
          <div className="rounded-xl border border-cyan-500/25 bg-[#0B0F19] p-4 shadow-[0_0_45px_-12px_rgba(34,211,238,0.4)]">
            {reasoning.length === 0 ? (
              <p className="font-mono text-[13px] text-white/40">
                Connecting to the solver…
                <span style={{ animation: "snapBlink 1s steps(1) infinite" }} className="ml-0.5 text-emerald-300">▍</span>
              </p>
            ) : (
              <ul className="space-y-1.5">
                {reasoning.map((line, i) => (
                  <li
                    key={i}
                    style={{ animation: "snapFadeIn 0.3s ease-out both" }}
                    className="font-mono text-[13px] leading-relaxed text-emerald-300/90"
                  >
                    {line}
                    {i === reasoning.length - 1 && (
                      <span style={{ animation: "snapBlink 1s steps(1) infinite" }} className="ml-0.5 text-emerald-300">▍</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Solution steps as they stream in */}
          {steps.length > 0 && (
            <ul className="space-y-2 border-l-2 border-cyan-500/20 pl-4">
              {steps.map((s) => (
                <li
                  key={s.stepNumber}
                  style={{ animation: "snapFadeIn 0.3s ease-out both" }}
                  className="flex gap-2 text-sm text-white/80"
                >
                  <span className="shrink-0 font-bold text-cyan-400">{s.stepNumber}.</span>
                  {s.text}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Input form — hidden while the stream panel is shown */}
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

      {/* Paywall — free daily limit reached */}
      {paywall && !isProcessing && (
        <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/[0.06] p-5 text-center space-y-3">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10">
            <Lock className="h-5 w-5 text-cyan-300" />
          </div>
          <div>
            <p className="text-sm font-bold text-white">You&apos;ve used your 5 free solves today</p>
            <p className="mt-1 text-xs text-white/55">Upgrade to Pro for unlimited Snap &amp; Solve.</p>
          </div>
          <a
            href="/pricing"
            onClick={() => track("upgrade_click", { feature: "snap-solve" })}
            className="inline-block w-full rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 py-2.5 text-sm font-bold text-black transition hover:-translate-y-0.5"
          >
            Upgrade to Pro →
          </a>
        </div>
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
