"use client";

import { useState, useRef } from "react";
import { Camera, Type, Zap, AlertTriangle } from "lucide-react";

export interface SnapSolveInput {
  imageBase64?: string;
  query?: string;
  language: string;
}

interface Props {
  onSubmit: (input: SnapSolveInput) => void;
  isProcessing: boolean;
  error?: string | null;
}

const LANGS = ["english", "hinglish", "hindi"] as const;

export default function SnapSolveUpload({ onSubmit, isProcessing, error }: Props) {
  const [image, setImage] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState<string>("english");
  const fileRef = useRef<HTMLInputElement>(null);

  function handleFile(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => setImage(e.target?.result as string);
    reader.readAsDataURL(file);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }

  const canSubmit = (!!image || query.trim().length > 0) && !isProcessing;

  function submit() {
    if (!canSubmit) return;
    onSubmit({ imageBase64: image ?? undefined, query: query.trim() || undefined, language });
  }

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#111827] p-5 space-y-4">
      {/* Upload box */}
      <div
        onClick={() => fileRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="flex min-h-44 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/15 bg-white/[0.02] p-6 text-center transition hover:border-cyan-500/50 hover:bg-white/[0.04]"
      >
        {image ? (
          <img src={image} alt="Problem" className="max-h-44 rounded-xl object-contain" />
        ) : (
          <>
            <Camera className="mb-3 h-8 w-8 text-cyan-400" />
            <p className="text-sm text-white/70">Click or drag &amp; drop a photo</p>
            <p className="mt-1 text-xs text-white/40">Handwritten or printed problem</p>
          </>
        )}
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
        />
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-white/30">
        <span className="h-px flex-1 bg-white/[0.07]" /> or type it <span className="h-px flex-1 bg-white/[0.07]" />
      </div>

      {/* Text input */}
      <div className="relative">
        <Type className="absolute left-3 top-3 h-4 w-4 text-white/30" />
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          rows={2}
          placeholder="e.g. Why is SN1 fastest for a 3° carbon?"
          className="w-full resize-none rounded-xl border border-white/[0.08] bg-[#0B0F19] pl-9 pr-3 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-cyan-400/50"
        />
      </div>

      {/* Language toggle */}
      <div className="flex gap-2">
        {LANGS.map((l) => (
          <button
            key={l}
            onClick={() => setLanguage(l)}
            className={`flex-1 rounded-xl py-2 text-xs font-semibold capitalize transition ${
              language === l ? "bg-cyan-500 text-black" : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
            }`}
          >
            {l === "hindi" ? "हिंदी" : l}
          </button>
        ))}
      </div>

      {/* Submit */}
      <button
        onClick={submit}
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
          onClick={() => { setImage(null); setQuery(""); }}
          className="w-full rounded-xl border border-white/10 py-1.5 text-xs text-white/50 transition hover:text-white"
        >
          Clear &amp; try another
        </button>
      )}

      {/* Validation / middleware error boundary message */}
      {error && (
        <div className="flex items-center gap-2 rounded-xl border border-red-500/25 bg-red-500/[0.08] px-3 py-2 text-xs text-red-300">
          <AlertTriangle className="h-3.5 w-3.5 shrink-0" /> {error}
        </div>
      )}
    </div>
  );
}
