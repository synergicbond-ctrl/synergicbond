"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { checkRateLimit } from "@/lib/rateLimiter";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import {
  Upload, Mic, Zap, Sparkles, X, FileText, Image as ImageIcon,
  Loader2, Crown, Languages,
} from "lucide-react";

const DAILY_LIMIT = 10;

// XSS-safe text sanitizer for the typed doubt
function sanitize(input: string): string {
  return input.replace(/<[^>]*>/g, "").replace(/javascript:/gi, "").replace(/on\w+\s*=/gi, "").slice(0, 1500);
}

function getCredits(): number {
  if (typeof window === "undefined") return DAILY_LIMIT;
  const today = new Date().toDateString();
  const saved = localStorage.getItem("sb_ai_credits");
  if (saved) {
    const parsed = JSON.parse(saved);
    if (parsed.date === today) return parsed.left;
  }
  localStorage.setItem("sb_ai_credits", JSON.stringify({ date: today, left: DAILY_LIMIT }));
  return DAILY_LIMIT;
}

function setCredits(left: number) {
  if (typeof window === "undefined") return;
  localStorage.setItem("sb_ai_credits", JSON.stringify({ date: new Date().toDateString(), left }));
}

export default function DoubtSolverPage() {
  const [credits, setCreditsState] = useState(DAILY_LIMIT);
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [doubt, setDoubt] = useState("");
  const [language, setLanguage] = useState<"english" | "hinglish">("english");
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");
  const [listening, setListening] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { setCreditsState(getCredits()); }, []);

  const handleFile = useCallback((file: File) => {
    setFileName(file.name);
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      // PDF accepted but image gives best results
      setImage(null);
    }
  }, []);

  function startVoice() {
    const SR = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    if (!SR) { alert("Voice not supported in this browser. Try Chrome."); return; }
    const rec = new SR();
    rec.lang = language === "hinglish" ? "hi-IN" : "en-IN";
    rec.onstart = () => setListening(true);
    rec.onend = () => setListening(false);
    rec.onresult = (e: any) => setDoubt((prev) => (prev ? prev + " " : "") + e.results[0][0].transcript);
    rec.start();
  }

  async function solve(lang: "english" | "hinglish", isToggle = false) {
    if (!image && !doubt.trim()) { alert("Upload an image or type your doubt first."); return; }

    // Sandbox rate limiter — blocks >10 solves / 60s with a cooldown
    if (!isToggle) {
      const rl = checkRateLimit("doubt-solve");
      if (!rl.allowed) { setCooldown(rl.cooldownLeft); return; }
    }

    // Only the first solve costs a credit; language toggle is free
    if (!isToggle) {
      const left = getCredits();
      if (left <= 0) { setShowPaywall(true); return; }
    }

    setLoading(true);
    setAnswer("");
    try {
      let result = "";
      if (image) {
        const res = await fetch("/api/snap-solve", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ imageBase64: image, language: lang }),
        });
        const data = await res.json();
        result = data.solution || data.error || "Could not solve. Try again.";
      } else {
        const res = await fetch("/api/doubt", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ doubt: sanitize(doubt), language: lang }),
        });
        const data = await res.json();
        result = data.reply || data.error || "Could not solve. Try again.";
      }
      setAnswer(result);
      if (!isToggle) {
        const newLeft = getCredits() - 1;
        setCredits(newLeft);
        setCreditsState(newLeft);
      }
    } catch {
      setAnswer("⚠️ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function toggleLang(l: "english" | "hinglish") {
    setLanguage(l);
    if (answer) solve(l, true); // re-translate existing answer for free
  }

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">

      <div className="mx-auto max-w-5xl px-6 py-12">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span className="text-xs font-bold text-cyan-300 tracking-wide">MULTIMODAL AI</span>
          </div>
          <h1 className="text-4xl font-black md:text-5xl">AI Doubt Solver</h1>
          <p className="mt-3 text-white/50 text-sm">
            Upload a photo, dictate by voice, or type — get a full step-by-step solution.
          </p>
        </div>

        {/* Token wallet */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#111827] border border-white/[0.06]">
            <Zap className={`h-4 w-4 ${credits > 0 ? "text-violet-400" : "text-red-400"}`} />
            <span className="text-sm font-semibold">
              <span className={credits > 0 ? "text-violet-400" : "text-red-400"}>{credits}</span>
              <span className="text-white/40"> / {DAILY_LIMIT}</span>
              <span className="text-white/60"> Free Daily AI Solves Left</span>
            </span>
          </div>
        </div>

        {/* Workspace — uniform bg */}
        <div className="rounded-3xl bg-[#111827] border border-white/[0.06] p-6 md:p-8">

          {/* Drop zone */}
          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => { e.preventDefault(); setDragOver(false); if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]); }}
            onClick={() => fileInputRef.current?.click()}
            className={`relative cursor-pointer rounded-2xl border-2 border-dashed p-8 text-center transition ${
              dragOver ? "border-cyan-400 bg-cyan-500/5" : "border-white/[0.1] hover:border-white/20"
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,.pdf"
              className="hidden"
              onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
            />
            {image ? (
              <div className="relative inline-block">
                <img src={image} alt="upload" className="max-h-48 rounded-xl mx-auto" />
                <button
                  onClick={(e) => { e.stopPropagation(); setImage(null); setFileName(""); }}
                  className="absolute -top-2 -right-2 p-1 rounded-full bg-red-500 text-white"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ) : fileName ? (
              <div className="flex items-center justify-center gap-2 text-white/70">
                <FileText className="h-6 w-6 text-cyan-400" />
                <span className="text-sm">{fileName}</span>
              </div>
            ) : (
              <>
                <div className="flex justify-center gap-3 mb-3">
                  <ImageIcon className="h-7 w-7 text-white/30" />
                  <Upload className="h-7 w-7 text-cyan-400" />
                  <FileText className="h-7 w-7 text-white/30" />
                </div>
                <p className="text-sm text-white/60 font-medium">Drop an image or PDF here, or click to browse</p>
                <p className="text-xs text-white/30 mt-1">Photos of problems give the best results</p>
              </>
            )}
          </div>

          {/* Doubt text + voice */}
          <div className="relative mt-4">
            <textarea
              value={doubt}
              onChange={(e) => setDoubt(e.target.value)}
              rows={3}
              placeholder="Or describe your doubt here... (you can also dictate by voice)"
              className="w-full rounded-2xl border border-white/[0.08] bg-black/40 px-5 py-4 pr-14 text-sm text-white placeholder-white/30 outline-none focus:border-cyan-400/50 resize-none"
            />
            <button
              onClick={startVoice}
              title="Voice record"
              className={`absolute right-3 top-3 p-2 rounded-xl transition ${
                listening ? "text-cyan-400 bg-cyan-400/10 shadow-[0_0_12px_rgba(34,211,238,0.5)] animate-pulse" : "text-white/30 hover:text-white/70"
              }`}
            >
              <Mic className="h-4 w-4" />
            </button>
          </div>

          {/* Language toggle + Solve */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4 items-stretch sm:items-center">
            <div className="inline-flex rounded-xl bg-black/40 border border-white/[0.08] p-1">
              <button
                onClick={() => toggleLang("english")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${language === "english" ? "bg-cyan-500 text-black" : "text-gray-400"}`}
              >
                <Languages className="h-3.5 w-3.5" /> English
              </button>
              <button
                onClick={() => toggleLang("hinglish")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${language === "hinglish" ? "bg-cyan-500 text-black" : "text-gray-400"}`}
              >
                Hinglish
              </button>
            </div>

            <button
              onClick={() => solve(language)}
              disabled={loading}
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 disabled:opacity-60"
            >
              {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Solving...</> : <><Sparkles className="h-4 w-4" /> Solve My Doubt</>}
            </button>
          </div>

          {/* Answer */}
          {answer && (
            <div className="mt-6 rounded-2xl bg-black/30 border border-white/[0.06] p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Solution</span>
                <span className="text-[10px] text-white/30">({language === "hinglish" ? "Hinglish" : "English"})</span>
              </div>
              <div className="prose prose-invert prose-sm max-w-none prose-headings:text-cyan-300 prose-strong:text-white">
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                  {answer}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Paywall modal */}
      {showPaywall && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm">
          <div className="relative max-w-md w-full rounded-3xl bg-[#111827] border border-cyan-500/20 p-8 text-center shadow-2xl">
            <button onClick={() => setShowPaywall(false)} className="absolute top-4 right-4 text-white/40 hover:text-white">
              <X className="h-5 w-5" />
            </button>
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-violet-400/20 to-violet-600/10">
                <Crown className="h-8 w-8 text-violet-400" />
              </div>
            </div>
            <h3 className="text-xl font-black mb-2">Daily AI Limit Reached</h3>
            <p className="text-sm text-white/50 mb-6 leading-relaxed">
              Upgrade to <span className="text-cyan-400 font-bold">SYNERGIC BOND PRO</span> for unlimited instant reasoning engines, verified expert reviews, and full-syllabus national rank analytics.
            </p>
            <button className="w-full rounded-xl bg-gradient-to-r from-violet-400 to-violet-500 py-3 text-sm font-bold text-black mb-3 transition hover:-translate-y-0.5">
              ⚡ Upgrade to PRO
            </button>
            <button onClick={() => setShowPaywall(false)} className="text-xs text-white/40 hover:text-white">
              Maybe later — resets at midnight
            </button>
          </div>
        </div>
      )}

      {/* Rate-limit cooldown overlay */}
      {cooldown > 0 && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm">
          <div className="max-w-sm w-full rounded-3xl bg-[#111827] border border-violet-500/30 p-8 text-center shadow-2xl">
            <p className="text-4xl mb-3">⚠️</p>
            <h3 className="text-lg font-black mb-2">Security Threshold Engaged</h3>
            <p className="text-sm text-white/50 mb-5">
              High-frequency traffic detected. A short cool-down is active to protect the service.
            </p>
            <button onClick={() => setCooldown(0)} className="rounded-xl bg-violet-500 text-black font-bold px-5 py-2.5 text-sm">
              Got it ({cooldown}s)
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
