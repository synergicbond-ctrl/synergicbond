"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import MoleculeLogo from "@/components/MoleculeLogo";
import { useT, LANGS, type Lang } from "@/lib/i18n";
import { supabase } from "@/lib/supabase";
import {
  BookOpen, ClipboardList, FlaskConical, FileText,
  Bot, Camera, PenLine, Atom, Target, Calendar,
  BarChart2, Medal, Trophy, Archive, Gem, Menu, X,
  Globe, ChevronDown, Sparkles, GraduationCap, Layers, Info,
  Home, Search, LayoutGrid, GitBranch, Sigma, Palette,
  LayoutDashboard, LogOut, UserCircle, BookMarked, Table2
} from "lucide-react";

// ALLEN-style category mega-menus (label + grouped links with descriptions)
type MenuItem = { href: string; label: string; desc: string; icon: any };
type Menu = { title: string; items: MenuItem[]; wide?: boolean };
const menus: Menu[] = [
  {
    title: "Learn",
    wide: true,
    items: [
      { href: "/vault",           label: "Knowledge Vault",    desc: "Concepts, reactions, formulas, exceptions", icon: Archive },
      { href: "/periodic-table",  label: "Periodic Table",     desc: "Interactive — tap any element",             icon: Table2 },
      { href: "/name-reactions",  label: "Name Reactions",     desc: "700+ named reactions, AI-explained",        icon: GitBranch },
      { href: "/reagents",        label: "Reagent Master List",desc: "Every reagent & what it does",              icon: FlaskConical },
      { href: "/redox-reactions", label: "Oxidation / Reduction", desc: "Substrate → product → reagent",          icon: Sparkles },
      { href: "/solubility",      label: "Solubility Rules",   desc: "Soluble/insoluble + exceptions",            icon: Sigma },
      { href: "/salt-colors",     label: "Colours & Salt Analysis", desc: "Ion, ppt, flame test colours",         icon: Palette },
      { href: "/properties",      label: "Physical Properties",desc: "BP/MP, state, geometry, dipole",            icon: Atom },
      { href: "/notes",           label: "AI Notes",           desc: "Exam-focused notes for any topic",          icon: BookOpen },
      { href: "/study-tools",     label: "Study Tools",        desc: "Multicolor notes, focus timer, roadmap",    icon: Layers },
      { href: "/library",         label: "Book Library",       desc: "70+ world-class textbooks",                 icon: BookMarked },
    ],
  },
  {
    title: "Practice",
    items: [
      { href: "/quiz",            label: "Quiz",            desc: "Topic-wise MCQ practice",         icon: FlaskConical },
      { href: "/exam",            label: "Mock Exam",       desc: "Full JEE/NEET-pattern papers",    icon: FileText },
      { href: "/assignment",      label: "Assignments",     desc: "Auto-generated practice sets",     icon: ClipboardList },
      { href: "/daily-challenge", label: "Daily Challenge", desc: "One high-yield question a day",    icon: Target },
    ],
  },
  {
    title: "AI Tools",
    items: [
      { href: "/tutor",            label: "AI Tutor",       desc: "24×7 step-by-step doubt engine",  icon: Bot },
      { href: "/doubt-solver",     label: "Doubt Solver",   desc: "Photo / voice → full solution",   icon: Sparkles },
      { href: "/snap-solve",       label: "Snap & Solve",   desc: "Photograph a problem, get steps", icon: Camera },
      { href: "/handwritten-notes",label: "Handwritten",    desc: "Convert handwriting to notes",    icon: PenLine },
      { href: "/molecule",         label: "Molecule Explorer", desc: "Look up any compound",         icon: Atom },
      { href: "/lab",              label: "Virtual Lab",    desc: "Interactive titration sim",       icon: FlaskConical },
    ],
  },
  {
    title: "Plan & Track",
    items: [
      { href: "/dashboard",      label: "My Dashboard",   desc: "Your progress & analytics",       icon: LayoutDashboard },
      { href: "/study-plan",     label: "Study Plan",     desc: "Personalized 30-day plan",        icon: Calendar },
      { href: "/exam-predictor", label: "Exam Predictor", desc: "Estimate your rank",              icon: BarChart2 },
      { href: "/achievements",   label: "Achievements",   desc: "Badges, XP, levels",              icon: Medal },
      { href: "/leaderboard",    label: "Leaderboard",    desc: "Compete with peers",              icon: Trophy },
    ],
  },
  {
    title: "More",
    items: [
      { href: "/teachers", label: "Teacher Hub",     desc: "Curriculum, analytics, routing", icon: GraduationCap },
      { href: "/about",    label: "About & Mission", desc: "Why SYNERGIC BOND exists",       icon: Info },
      { href: "/pricing",  label: "Pricing",         desc: "Free core + PRO plans",          icon: Gem },
    ],
  },
];

// Full catalog — shown in the "More" grid panel
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
  { href: "/reagents",         tkey: "nav.reagents",     icon: FlaskConical,  category: "learn" },
  { href: "/library",          tkey: "nav.library",      icon: BookOpen,      category: "learn" },
  { href: "/teachers",         tkey: "nav.teachers",     icon: GraduationCap, category: "other" },
  { href: "/about",            tkey: "nav.about",        icon: Info,          category: "other" },
  { href: "/pricing",          tkey: "nav.pricing",      icon: Gem,           category: "other" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { lang, setLang, t } = useT();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [acctOpen, setAcctOpen] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [isGuest, setIsGuest] = useState(false);

  // Auth state — show the signed-in student in the navbar
  useEffect(() => {
    let mounted = true;
    supabase.auth.getUser().then(({ data }) => {
      if (mounted) setEmail(data.user?.email ?? null);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setEmail(session?.user?.email ?? null);
    });
    if (typeof window !== "undefined") setIsGuest(localStorage.getItem("sb_guest") === "1");
    return () => { mounted = false; sub.subscription.unsubscribe(); };
  }, []);

  async function signOut() {
    await supabase.auth.signOut();
    if (typeof window !== "undefined") localStorage.removeItem("sb_guest");
    setEmail(null); setIsGuest(false); setAcctOpen(false);
    window.location.href = "/";
  }

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

        {/* Desktop Nav — ALLEN-style category mega-menus */}
        <nav className="hidden lg:flex items-center justify-center flex-1 gap-1">
          {/* Search quick-link */}
          <Link href="/search" className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/[0.05] transition">
            <Search className="h-4 w-4" /> {t("nav.search")}
          </Link>

          {menus.map((menu) => {
            const open = openMenu === menu.title;
            const hasActive = menu.items.some((it) => it.href === pathname);
            return (
              <div
                key={menu.title}
                className="relative"
                onMouseEnter={() => setOpenMenu(menu.title)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition ${
                    open || hasActive ? "text-white bg-white/[0.06]" : "text-gray-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {menu.title}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
                </button>

                {open && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50">
                    <div className={`rounded-2xl border border-white/[0.08] bg-[#111827]/98 backdrop-blur-xl shadow-2xl shadow-black/50 p-2 ${menu.wide ? "w-[640px] grid grid-cols-2 gap-0.5" : "w-[340px]"}`}>
                      {menu.items.map((it) => {
                        const Icon = it.icon;
                        const active = pathname === it.href;
                        return (
                          <Link
                            key={it.href}
                            href={it.href}
                            onClick={() => setOpenMenu(null)}
                            className={`flex items-start gap-3 px-3 py-2.5 rounded-xl transition ${
                              active ? "bg-cyan-500/10" : "hover:bg-white/[0.05]"
                            }`}
                          >
                            <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border ${active ? "border-cyan-400/30 bg-cyan-500/10" : "border-white/[0.06] bg-white/[0.03]"}`}>
                              <Icon className={`h-4 w-4 ${active ? "text-cyan-400" : "text-gray-400"}`} />
                            </span>
                            <span className="min-w-0">
                              <span className={`block text-sm font-semibold ${active ? "text-cyan-300" : "text-white"}`}>{it.label}</span>
                              <span className="block text-xs text-gray-400 leading-snug">{it.desc}</span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
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

          {email ? (
            /* Signed-in account chip + dropdown */
            <div className="relative">
              <button
                onClick={() => setAcctOpen(!acctOpen)}
                className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] pl-1 pr-2.5 py-1 hover:border-cyan-400/30 transition"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-sky-500 text-black text-xs font-black">
                  {email[0].toUpperCase()}
                </span>
                <span className="hidden md:block text-xs font-semibold text-white/80 max-w-[120px] truncate">{email.split("@")[0]}</span>
                <ChevronDown className={`h-3 w-3 text-white/50 transition-transform ${acctOpen ? "rotate-180" : ""}`} />
              </button>
              {acctOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setAcctOpen(false)} />
                  <div className="absolute right-0 mt-2 w-56 z-50 rounded-xl border border-white/[0.08] bg-[#111827] shadow-2xl shadow-black/50 p-1.5">
                    <div className="px-3 py-2 border-b border-white/[0.06] mb-1">
                      <p className="text-[10px] text-white/40 uppercase tracking-wider">Signed in as</p>
                      <p className="text-xs font-semibold text-white truncate">{email}</p>
                    </div>
                    <Link href="/dashboard" onClick={() => setAcctOpen(false)} className="flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-xs font-medium text-gray-300 hover:text-white hover:bg-white/5 transition">
                      <LayoutDashboard className="h-4 w-4 text-cyan-400" /> My Dashboard
                    </Link>
                    <Link href="/achievements" onClick={() => setAcctOpen(false)} className="flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-xs font-medium text-gray-300 hover:text-white hover:bg-white/5 transition">
                      <Medal className="h-4 w-4 text-yellow-400" /> Achievements
                    </Link>
                    <button onClick={signOut} className="flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-xs font-medium text-red-400 hover:bg-red-500/10 transition">
                      <LogOut className="h-4 w-4" /> Sign Out
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : isGuest ? (
            /* Guest mode — prompt to create real account */
            <div className="flex items-center gap-2">
              <span className="hidden sm:flex items-center gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.04] px-2.5 py-1.5 text-[11px] font-semibold text-white/60">
                <UserCircle className="h-3.5 w-3.5" /> Guest
              </span>
              <Link href="/auth/signup" className="rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-3 py-1.5 text-xs font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5">
                Sign Up →
              </Link>
            </div>
          ) : (
            <Link
              href="/auth/signin"
              className="rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-3 py-1.5 text-xs font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5"
            >
              {t("nav.signIn")} →
            </Link>
          )}

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
