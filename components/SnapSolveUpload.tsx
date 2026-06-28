"use client";

import { useState, useRef } from "react";
import { Camera, Type, Zap, AlertTriangle } from "lucide-react";
import type { SnapSolveResponse } from "@/lib/snapSolveTypes";

interface Props {
  /** Fired with the validated payload after a successful dispatch. */
  onUploadSuccess: (data: SnapSolveResponse) => void;
}

const LANGS = ["english", "hinglish", "hindi"] as const;

export default function SnapSolveUpload({ onUploadSuccess }: Props) {
  const [image, setImage] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState<string>("english");
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  function handleFile(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => setImage(e.target?.result as string);
    reader.readAsDataURL(file);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    if (isProcessing) return;
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }

  const canSubmit = (!!image || query.trim().length > 0) && !isProcessing;

  async function handleSolve() {
    if (!canSubmit) return;
    setIsProcessing(true);
    setError(null);
    try {
      const res = await fetch("/api/snap-solve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageBase64: image ?? undefined,
          query: query.trim() || undefined,
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

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#111827] p-5 space-y-4">
      {/* Split container: upload zone | formula text box */}
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Upload drop-box */}
        <div
          onClick={() => !isProcessing && fileRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className={`flex min-h-44 flex-col items-center justify-center rounded-2xl border-2 border-dashed p-5 text-center transition ${
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

      {/* Submit */}
      <button
        onClick={handleSolve}
        disabled={!canSubmit}
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3.5 font-bold text-black transition disabled:opacity-40"
      >
        {isProcessing ? (
          <><span className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" /> Solving…</>
        ) : (
          <><Zap className="h-4 w-4" /> Solve This Problem</>
        )}
      </button>

      {(image || query) && !isProcessing && (
        <button
          onClick={() => { setImage(null); setQuery(""); setError(null); }}
          className="w-full rounded-xl border border-white/10 py-1.5 text-xs text-white/50 transition hover:text-white"
        >
          Clear &amp; try another
        </button>
      )}

      {/* Network / middleware validation error boundary */}
      {error && (
        <div className="flex items-center gap-2 rounded-xl border border-red-500/25 bg-red-500/[0.08] px-3 py-2 text-xs text-red-300">
          <AlertTriangle className="h-3.5 w-3.5 shrink-0" /> {error}
        </div>
      )}
    </div>
  );
}
