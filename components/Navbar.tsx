"use client";

import Link from "next/link";
import { useState } from "react";

const mainLinks = [
  { href: "/notes", label: "📘 Notes", category: "learn" },
  { href: "/assignment", label: "📝 Assignments", category: "learn" },
  { href: "/quiz", label: "🧪 Quiz", category: "learn" },
  { href: "/exam", label: "📋 Mock Exam", category: "learn" },
  { href: "/tutor", label: "🤖 AI Tutor", category: "ai" },
  { href: "/snap-solve", label: "📸 Snap & Solve", category: "ai" },
  { href: "/handwritten-notes", label: "✍️ Handwritten", category: "ai" },
  { href: "/molecule", label: "🧬 Molecule", category: "ai" },
  { href: "/daily-challenge", label: "🎯 Daily Challenge", category: "game" },
  { href: "/study-plan", label: "🗓️ Study Plan", category: "game" },
  { href: "/exam-predictor", label: "📊 Predictor", category: "game" },
  { href: "/achievements", label: "🏅 Achievements", category: "game" },
  { href: "/leaderboard", label: "🏆 Leaderboard", category: "game" },
  { href: "/vault", label: "🗄️ Vault", category: "learn" },
  { href: "/pricing", label: "💎 Pricing", category: "other" },
];

const LANGS = [
  { code: "english", label: "EN" },
  { code: "hinglish", label: "HI-EN" },
  { code: "hindi", label: "हिं" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("english");

  // Store language in localStorage for pages to use
  function switchLang(l: string) {
    setLang(l);
    if (typeof window !== "undefined") localStorage.setItem("sb_lang", l);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-950/40 text-lg shadow-[0_0_15px_rgba(34,211,238,0.15)]">
            ⚛️
          </div>
          <div>
            <h1 className="text-base font-extrabold tracking-wide bg-gradient-to-r from-[#00F5D4] via-[#00BBF9] to-[#9B5DE5] bg-clip-text text-transparent">
              SYNERGIC BOND
            </h1>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-cyan-400/60 hidden sm:block">
              Chemistry OS
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex overflow-x-auto max-w-3xl">
          {mainLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className="whitespace-nowrap text-xs font-medium text-neutral-400 transition hover:text-white hover:bg-white/5 px-2.5 py-2 rounded-lg">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <div className="hidden sm:flex items-center rounded-xl border border-white/10 bg-white/5 p-0.5 gap-0.5">
            {LANGS.map((l) => (
              <button key={l.code} onClick={() => switchLang(l.code)}
                className={`px-2 py-1 rounded-lg text-xs font-bold transition ${lang === l.code ? "bg-cyan-500 text-black" : "text-white/40 hover:text-white"}`}>
                {l.label}
              </button>
            ))}
          </div>

          <Link href="/achievements"
            className="hidden sm:flex items-center gap-1 text-xs font-medium text-yellow-400/80 hover:text-yellow-400 border border-yellow-500/20 bg-yellow-950/20 px-3 py-2 rounded-xl transition">
            🏅
          </Link>

          <Link href="/dashboard"
            className="hidden sm:block text-xs font-medium text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-500 px-3 py-2 rounded-xl transition">
            Dashboard
          </Link>

          <Link href="/auth/signin"
            className="rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-3 py-2 text-xs font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5">
            Sign In →
          </Link>

          <button onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white" aria-label="Menu">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-black/95 px-4 py-4">
          {/* Mobile language switcher */}
          <div className="flex gap-2 mb-3">
            {LANGS.map((l) => (
              <button key={l.code} onClick={() => switchLang(l.code)}
                className={`flex-1 py-1.5 rounded-xl text-sm font-bold transition ${lang === l.code ? "bg-cyan-500 text-black" : "border border-white/10 text-white/50"}`}>
                {l.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {mainLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                className="text-sm text-zinc-300 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-xl transition border border-zinc-800">
                {link.label}
              </Link>
            ))}
            <Link href="/dashboard" onClick={() => setMenuOpen(false)}
              className="text-sm text-cyan-400 hover:text-white hover:bg-cyan-950 px-3 py-2.5 rounded-xl transition border border-cyan-800 col-span-2 text-center">
              📊 My Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
