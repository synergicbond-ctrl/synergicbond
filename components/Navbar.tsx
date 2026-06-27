"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  BookOpen, ClipboardList, FlaskConical, FileText,
  Bot, Camera, PenLine, Atom, Target, Calendar,
  BarChart2, Medal, Trophy, Archive, Gem, Menu, X,
  Globe, ChevronDown, Sparkles
} from "lucide-react";

const mainLinks = [
  { href: "/notes",            label: "Notes",          icon: BookOpen,      category: "learn" },
  { href: "/assignment",       label: "Assignments",    icon: ClipboardList, category: "learn" },
  { href: "/quiz",             label: "Quiz",           icon: FlaskConical,  category: "learn" },
  { href: "/exam",             label: "Mock Exam",      icon: FileText,      category: "learn" },
  { href: "/tutor",            label: "AI Tutor",       icon: Bot,           category: "ai"    },
  { href: "/snap-solve",       label: "Snap & Solve",   icon: Camera,        category: "ai"    },
  { href: "/doubt-solver",     label: "Doubt Solver",   icon: Sparkles,      category: "ai"    },
  { href: "/handwritten-notes",label: "Handwritten",    icon: PenLine,       category: "ai"    },
  { href: "/molecule",         label: "Molecule",       icon: Atom,          category: "ai"    },
  { href: "/daily-challenge",  label: "Challenge",      icon: Target,        category: "game"  },
  { href: "/study-plan",       label: "Study Plan",     icon: Calendar,      category: "game"  },
  { href: "/exam-predictor",   label: "Predictor",      icon: BarChart2,     category: "game"  },
  { href: "/achievements",     label: "Achievements",   icon: Medal,         category: "game"  },
  { href: "/leaderboard",      label: "Leaderboard",    icon: Trophy,        category: "game"  },
  { href: "/vault",            label: "Vault",          icon: Archive,       category: "learn" },
  { href: "/pricing",          label: "Pricing",        icon: Gem,           category: "other" },
];

const LANGS = [
  { code: "english",  label: "English",  short: "EN", flag: "🇬🇧" },
  { code: "hindi",    label: "हिन्दी",     short: "HI", flag: "🇮🇳" },
  { code: "hinglish", label: "Hinglish", short: "HX", flag: "🇮🇳" },
  { code: "spanish",  label: "Español",  short: "ES", flag: "🇪🇸" },
  { code: "arabic",   label: "العربية",   short: "AR", flag: "🇸🇦" },
  { code: "french",   label: "Français", short: "FR", flag: "🇫🇷" },
  { code: "german",   label: "Deutsch",  short: "DE", flag: "🇩🇪" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("english");
  const [langOpen, setLangOpen] = useState(false);

  const currentLang = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  function switchLang(l: string) {
    setLang(l);
    setLangOpen(false);
    if (typeof window !== "undefined") localStorage.setItem("sb_lang", l);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0B0F19]/90 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 md:px-6 gap-4">

        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-950/40 shadow-[0_0_14px_rgba(34,211,238,0.18)] transition group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <circle cx="12" cy="12" r="2.5" fill="#00F5D4"/>
              <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#00F5D4" strokeWidth="1.2" strokeOpacity="0.7" transform="rotate(-45 12 12)"/>
              <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#9B5DE5" strokeWidth="1.2" strokeOpacity="0.7" transform="rotate(45 12 12)"/>
            </svg>
          </div>
          <div>
            <p className="text-sm font-extrabold tracking-widest bg-gradient-to-r from-[#00F5D4] via-[#00BBF9] to-[#9B5DE5] bg-clip-text text-transparent leading-none">
              SYNERGIC BOND
            </p>
            <p className="text-[8px] font-bold uppercase tracking-[0.35em] text-cyan-400/50 hidden sm:block mt-0.5">
              Chemistry OS
            </p>
          </div>
        </Link>

        {/* Desktop Nav — scrollable pill container */}
        <nav className="hidden lg:flex items-center flex-1 mx-4 overflow-hidden">
          <div
            className="flex items-center space-x-1 overflow-x-auto scrollbar-none px-3 py-1.5 rounded-full bg-[#111827] border border-white/[0.06]"
            style={{ scrollbarWidth: "none" }}
          >
            {mainLinks.map((link) => {
              const Icon = link.icon;
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105 group/tab
                    ${active
                      ? "text-white font-bold"
                      : "text-gray-400 hover:text-white font-normal"
                    }`}
                >
                  <Icon
                    className={`h-3.5 w-3.5 flex-shrink-0 transition-colors
                      ${active ? "text-cyan-400" : "text-gray-500 group-hover/tab:text-gray-300"}`}
                  />
                  {link.label}
                  {/* Active glowing underline */}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-4/5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Right Utilities */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Language dropdown */}
          <div className="hidden sm:block relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.04] px-2.5 py-1.5 text-[11px] font-bold text-white/70 hover:text-white hover:border-cyan-400/30 transition"
            >
              <Globe className="h-3.5 w-3.5 text-cyan-400" />
              {currentLang.short}
              <ChevronDown className={`h-3 w-3 transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>

            {langOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                <div className="absolute right-0 mt-2 w-44 z-50 rounded-xl border border-white/[0.08] bg-[#111827] shadow-2xl shadow-black/50 p-1.5">
                  {LANGS.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => switchLang(l.code)}
                      className={`flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-xs font-medium transition ${
                        lang === l.code
                          ? "bg-cyan-500/15 text-cyan-300 font-bold"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span className="text-sm">{l.flag}</span>
                      {l.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <Link
            href="/achievements"
            className="hidden sm:flex items-center justify-center h-8 w-8 rounded-xl border border-yellow-500/20 bg-yellow-950/20 text-yellow-400 hover:border-yellow-400/40 hover:bg-yellow-950/40 transition"
          >
            <Medal className="h-3.5 w-3.5" />
          </Link>

          <Link
            href="/auth/signin"
            className="rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-3 py-1.5 text-xs font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5"
          >
            Sign In →
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition"
            aria-label="Menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-white/[0.06] bg-[#0B0F19]/98 px-4 py-4">
          <div className="grid grid-cols-4 gap-2 mb-4">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => switchLang(l.code)}
                className={`py-1.5 rounded-xl text-xs font-bold transition ${
                  lang === l.code
                    ? "bg-cyan-500 text-black"
                    : "border border-white/10 text-white/50"
                }`}
              >
                {l.short}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {mainLinks.map((link) => {
              const Icon = link.icon;
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-2 text-sm px-3 py-2.5 rounded-xl transition border ${
                    active
                      ? "text-white font-bold border-cyan-400/30 bg-cyan-950/20"
                      : "text-gray-400 border-white/[0.06] hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 ${active ? "text-cyan-400" : "text-gray-500"}`} />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
