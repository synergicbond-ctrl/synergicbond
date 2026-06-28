"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MoleculeLogo from "@/components/MoleculeLogo";
import { useT, LANGS, type Lang } from "@/lib/i18n";
import {
  BookOpen, ClipboardList, FlaskConical, FileText,
  Bot, Camera, PenLine, Atom, Target, Calendar,
  BarChart2, Medal, Trophy, Archive, Gem, Menu, X,
  Globe, ChevronDown, Sparkles, GraduationCap, Layers, Info
} from "lucide-react";

const mainLinks = [
  { href: "/notes",            tkey: "nav.notes",        icon: BookOpen,      category: "learn" },
  { href: "/assignment",       tkey: "nav.assignments",  icon: ClipboardList, category: "learn" },
  { href: "/quiz",             tkey: "nav.quiz",         icon: FlaskConical,  category: "learn" },
  { href: "/exam",             tkey: "nav.mockExam",     icon: FileText,      category: "learn" },
  { href: "/tutor",            tkey: "nav.aiTutor",      icon: Bot,           category: "ai"    },
  { href: "/snap-solve",       tkey: "nav.snapSolve",    icon: Camera,        category: "ai"    },
  { href: "/doubt-solver",     tkey: "nav.doubtSolver",  icon: Sparkles,      category: "ai"    },
  { href: "/handwritten-notes",tkey: "nav.handwritten",  icon: PenLine,       category: "ai"    },
  { href: "/study-tools",      tkey: "nav.studyTools",   icon: Layers,        category: "learn" },
  { href: "/molecule",         tkey: "nav.molecule",     icon: Atom,          category: "ai"    },
  { href: "/daily-challenge",  tkey: "nav.challenge",    icon: Target,        category: "game"  },
  { href: "/study-plan",       tkey: "nav.studyPlan",    icon: Calendar,      category: "game"  },
  { href: "/exam-predictor",   tkey: "nav.predictor",    icon: BarChart2,     category: "game"  },
  { href: "/achievements",     tkey: "nav.achievements", icon: Medal,         category: "game"  },
  { href: "/leaderboard",      tkey: "nav.leaderboard",  icon: Trophy,        category: "game"  },
  { href: "/lab",              tkey: "nav.virtualLab",   icon: FlaskConical,  category: "ai"    },
  { href: "/vault",            tkey: "nav.vault",        icon: Archive,       category: "learn" },
  { href: "/teachers",         tkey: "nav.teachers",     icon: GraduationCap, category: "other" },
  { href: "/about",            tkey: "nav.about",        icon: Info,          category: "other" },
  { href: "/pricing",          tkey: "nav.pricing",      icon: Gem,           category: "other" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { lang, setLang, t } = useT();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const currentLang = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  function switchLang(l: Lang) {
    setLang(l);
    setLangOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0B0F19]/90 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 md:px-6 gap-4">

        {/* Brand Logo — animated network molecule in top-left corner */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-950/40 shadow-[0_0_16px_rgba(34,211,238,0.2)] transition group-hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]">
            <MoleculeLogo size={40} />
          </div>
          <div>
            <p className="text-lg font-extrabold tracking-widest bg-gradient-to-r from-[#00F5D4] via-[#00BBF9] to-[#9B5DE5] bg-clip-text text-transparent leading-none">
              SYNERGIC BOND
            </p>
            <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-cyan-400/50 hidden sm:block mt-1">
              Chemistry OS
            </p>
          </div>
        </Link>

        {/* Desktop Nav — glossy glass dock */}
        <nav className="hidden lg:flex items-center flex-1 mx-4 overflow-hidden">
          <div
            className="flex items-center gap-1 overflow-x-auto scrollbar-none px-2 py-1.5 rounded-full bg-[#111827]/70 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/40"
            style={{ scrollbarWidth: "none" }}
          >
            {mainLinks.map((link) => {
              const Icon = link.icon;
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative flex items-center gap-2 whitespace-nowrap px-3 py-1.5 rounded-full text-sm transition-all duration-200 group/tab
                    ${active
                      ? "text-white font-semibold bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
                      : "text-gray-400 hover:text-white font-medium hover:bg-white/[0.04]"
                    }`}
                >
                  <Icon
                    className={`h-[18px] w-[18px] flex-shrink-0 transition-colors
                      ${active ? "text-cyan-400" : "text-gray-500 group-hover/tab:text-gray-300"}`}
                  />
                  {t(link.tkey)}
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
            {t("nav.signIn")} →
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
                  {t(link.tkey)}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
