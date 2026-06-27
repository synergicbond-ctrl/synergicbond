"use client";

import Link from "next/link";
import { useState } from "react";

const mainLinks = [
  { href: "/notes", label: "📘 Notes" },
  { href: "/assignment", label: "📝 Assignments" },
  { href: "/quiz", label: "🧪 Quiz" },
  { href: "/exam", label: "📋 Mock Exam" },
  { href: "/tutor", label: "🤖 AI Tutor" },
  { href: "/snap-solve", label: "📸 Snap & Solve" },
  { href: "/molecule", label: "🧬 Molecule" },
  { href: "/daily-challenge", label: "🎯 Daily Challenge" },
  { href: "/study-plan", label: "🗓️ Study Plan" },
  { href: "/exam-predictor", label: "📊 Predictor" },
  { href: "/leaderboard", label: "🏆 Leaderboard" },
  { href: "/vault", label: "🗄️ Vault" },
  { href: "/pricing", label: "💎 Pricing" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <nav className="hidden items-center gap-1 lg:flex">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-neutral-400 transition hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="hidden sm:block text-xs font-medium text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-500 px-4 py-2 rounded-xl transition"
          >
            Dashboard
          </Link>
          <Link
            href="/auth/signin"
            className="rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-4 py-2 text-xs font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5"
          >
            Sign In →
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white"
            aria-label="Menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-black/95 px-4 py-4">
          <div className="grid grid-cols-2 gap-2">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-zinc-300 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-xl transition border border-zinc-800"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/dashboard"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-cyan-400 hover:text-white hover:bg-cyan-950 px-3 py-2.5 rounded-xl transition border border-cyan-800 col-span-2 text-center"
            >
              📊 My Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
