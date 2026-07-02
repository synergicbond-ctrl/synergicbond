"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import MoleculeLogo from "@/components/MoleculeLogo";
import { useT, LANGS, type Lang } from "@/lib/i18n";
import { supabase } from "@/lib/supabase";
import type { Session } from "@supabase/supabase-js";
import {
  Camera, BarChart2, Medal, Gem, Menu, X,
  Globe, ChevronDown, Info, Search, GitBranch, Palette,
  LayoutDashboard, LogOut, UserCircle, Table2, ListOrdered,
  // WEEK 10–11 nav groups (Study & Track / Programs)
  BookOpen, Target, ClipboardList, Activity, Bot,
  GraduationCap, Microscope, Trophy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ALLEN-style category mega-menus (label + grouped links with descriptions)
type MenuItem = { href: string; label: string; desc: string; icon: LucideIcon };
type Menu = { title: string; items: MenuItem[]; wide?: boolean };

// LEARN is special: a pinned Periodic Table + grouped sections (the "knowledge engine")
const learnPinned = { href: "/periodic-table", label: "Periodic Table", desc: "Interactive · trends · element data — the brain of chemistry", icon: Table2 };
// PHASE 1: trimmed to the verified-reference KEEP set (non-core routes hidden from nav).
const learnGroups: { title: string; items: MenuItem[] }[] = [
  {
    title: "⚗️ Reactions",
    items: [
      { href: "/name-reactions", label: "Named Reactions", desc: "700+ with AI mechanisms", icon: GitBranch },
    ],
  },
  {
    title: "🧪 Periodic Chemistry",
    items: [
      { href: "/periodic-table",  label: "Periodic Table",  desc: "Interactive · element data", icon: Table2 },
      { href: "/periodic-trends", label: "Trends Explorer", desc: "Radius · IE · ΔₑgH · EN",    icon: BarChart2 },
      { href: "/salt-colors",     label: "Colour Explorer", desc: "Compound & ion colours",     icon: Palette },
    ],
  },
  {
    title: "🎯 Exam Hub",
    items: [
      { href: "/important-orders", label: "Important Orders", desc: "Ranking sequences (IOC)", icon: ListOrdered },
    ],
  },
  // WEEK 10–11: study/track/AI core routes surfaced in nav (additive — no redesign).
  {
    title: "📚 Study & Track",
    items: [
      { href: "/notes",       label: "Chapter Notes",  desc: "Verified exam notes",              icon: BookOpen },
      { href: "/pyq",         label: "PYQ Intelligence", desc: "Real previous-year analytics",   icon: Target },
      { href: "/tests",       label: "Practice Tests", desc: "Chapter · topic · papers",         icon: ClipboardList },
      { href: "/performance", label: "Performance",    desc: "Readiness · weak topics · progress", icon: Activity },
      { href: "/ai-lab",      label: "AI Lab",         desc: "Snap & Solve · tutor · planner",   icon: Bot },
    ],
  },
  {
    title: "🎓 Programs",
    items: [
      { href: "/jee",      label: "JEE",      desc: "Main & Advanced track",  icon: GraduationCap },
      { href: "/neet",     label: "NEET",     desc: "Medical entrance track", icon: Microscope },
      { href: "/olympiad", label: "Olympiad", desc: "NSEC · IChO pathway",    icon: Trophy },
    ],
  },
];

// PHASE 1: Practice/Track/AI mega-menus hidden. Snap & Solve is now a top-level
// link (rendered directly below); only "More" survives, holding About + Pricing.
const menus: Menu[] = [
  {
    title: "More",
    items: [
      { href: "/about",   label: "About & Mission", desc: "Why SYNERGIC BOND exists", icon: Info },
      { href: "/pricing", label: "Pricing",         desc: "Free core + PRO plans",    icon: Gem },
    ],
  },
];

// PHASE 1: mobile catalog trimmed to the KEEP set. Uses explicit labels (no i18n
// key dependency) so hidden-route translation keys can't leak as raw strings.
const mainLinks: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "/snap-solve",       label: "Snap & Solve",     icon: Camera },
  // WEEK 10–11: study/track/AI core routes (additive)
  { href: "/notes",            label: "Chapter Notes",    icon: BookOpen },
  { href: "/pyq",              label: "PYQ Intelligence", icon: Target },
  { href: "/tests",            label: "Practice Tests",   icon: ClipboardList },
  { href: "/performance",      label: "Performance",      icon: Activity },
  { href: "/ai-lab",           label: "AI Lab",           icon: Bot },
  { href: "/name-reactions",   label: "Named Reactions",  icon: GitBranch },
  { href: "/periodic-table",   label: "Periodic Table",   icon: Table2 },
  { href: "/periodic-trends",  label: "Trends Explorer",  icon: BarChart2 },
  { href: "/salt-colors",      label: "Colour Explorer",  icon: Palette },
  { href: "/important-orders", label: "Important Orders", icon: ListOrdered },
  { href: "/pricing",          label: "Pricing",          icon: Gem },
  { href: "/about",            label: "About",            icon: Info },
];

export default function Navbar() {
  const pathname = usePathname();
  const { lang, setLang, t } = useT();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [acctOpen, setAcctOpen] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [isGuest, setIsGuest] = useState(
    () => typeof window !== "undefined" && localStorage.getItem("sb_guest") === "1"
  );

  // Auth state — show the signed-in student in the navbar
  useEffect(() => {
    let mounted = true;
    supabase.auth.getUser().then(({ data }: { data: { user: { email?: string } | null } }) => {
      if (mounted) setEmail(data.user?.email ?? null);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e: string, session: Session | null) => {
      setEmail(session?.user?.email ?? null);
    });
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

          {/* LEARN — grouped knowledge engine with pinned Periodic Table */}
          <div className="relative" onMouseEnter={() => setOpenMenu("Learn")} onMouseLeave={() => setOpenMenu(null)}>
            <button className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition ${openMenu === "Learn" || ["/vault","/periodic-table","/periodic-trends","/important-orders","/molecule","/notes","/reagents","/redox-reactions","/solubility","/properties","/salt-colors","/library","/study-tools","/name-reactions","/pyq","/tests","/performance","/ai-lab","/jee","/neet","/olympiad"].includes(pathname) ? "text-white bg-white/[0.06]" : "text-gray-300 hover:text-white hover:bg-white/[0.05]"}`}>
              Learn <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openMenu === "Learn" ? "rotate-180" : ""}`} />
            </button>
            {openMenu === "Learn" && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50">
                <div className="w-[620px] rounded-2xl border border-white/[0.08] bg-[#111827]/98 backdrop-blur-xl shadow-2xl shadow-black/50 p-3">
                  {/* Pinned Periodic Table */}
                  <Link href={learnPinned.href} onClick={() => setOpenMenu(null)} className="group flex items-center gap-3 rounded-xl p-3 mb-2 border border-cyan-400/25 bg-gradient-to-r from-cyan-500/15 to-purple-500/10 hover:from-cyan-500/20 transition">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-500/20 border border-cyan-400/30">
                      <Table2 className="h-5 w-5 text-cyan-300" />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="flex items-center gap-2 text-sm font-black text-white">{learnPinned.label}<span className="text-[8px] font-bold tracking-wider text-cyan-300 bg-cyan-500/15 px-1.5 py-0.5 rounded-full">PINNED</span></span>
                      <span className="block text-xs text-white/55">{learnPinned.desc}</span>
                    </span>
                    {/* mini grid motif */}
                    <span className="hidden sm:grid grid-cols-6 gap-[2px] flex-shrink-0">
                      {Array.from({ length: 18 }).map((_, i) => <span key={i} className="h-1.5 w-1.5 rounded-[1px]" style={{ background: `hsl(${185 + (i / 18) * 120},70%,55%)`, opacity: 0.7 }} />)}
                    </span>
                  </Link>
                  {/* Grouped sections */}
                  <div className="grid grid-cols-2 gap-x-3">
                    {learnGroups.map((g) => (
                      <div key={g.title} className="py-1">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-white/35 px-2 mt-1 mb-0.5">{g.title}</p>
                        {g.items.map((it) => {
                          const Icon = it.icon;
                          const active = pathname === it.href;
                          return (
                            <Link key={it.label} href={it.href} onClick={() => setOpenMenu(null)} className={`flex items-center gap-2.5 px-2 py-1.5 rounded-lg transition ${active ? "bg-cyan-500/10" : "hover:bg-white/[0.05]"}`}>
                              <Icon className={`h-4 w-4 flex-shrink-0 ${active ? "text-cyan-400" : "text-gray-400"}`} />
                              <span className="min-w-0">
                                <span className={`block text-[13px] font-semibold leading-tight ${active ? "text-cyan-300" : "text-white"}`}>{it.label}</span>
                                <span className="block text-[10px] text-gray-500 leading-tight">{it.desc}</span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Snap & Solve — promoted to a top-level link (the hero product) */}
          <Link
            href="/snap-solve"
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition ${
              pathname === "/snap-solve"
                ? "text-cyan-300 bg-cyan-500/10"
                : "text-gray-200 hover:text-white hover:bg-white/[0.05]"
            }`}
          >
            <Camera className="h-4 w-4" /> Snap &amp; Solve
          </Link>

          {menus.map((menu) => {
            const open = openMenu === menu.title;
            const hasActive = menu.items.some((it) => it.href === pathname);
            const isNew = menu.title === "Exam Tracks";
            return (
              <div key={menu.title} className="flex items-center">
              {/* zone separator before the utility/More zone */}
              {menu.title === "More" && (
                <span className="mx-1.5 h-5 w-px bg-white/10" />
              )}
              <div
                className="relative"
                onMouseEnter={() => setOpenMenu(menu.title)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  className={`relative flex items-center gap-1 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                    hasActive
                      ? "text-white font-bold bg-white/[0.08] -translate-y-px shadow-[0_4px_14px_rgba(0,0,0,0.4)]"
                      : open ? "text-white font-medium bg-white/[0.06]" : "text-gray-300 font-medium hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {menu.title}
                  {isNew && <span className="text-[8px] font-black tracking-wider text-cyan-300 bg-cyan-500/15 border border-cyan-400/30 px-1.5 py-0.5 rounded-full">NEW</span>}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
                  {hasActive && <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-2/3 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />}
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
            className="flex h-11 w-11 items-center justify-center rounded-xl text-gray-400 transition hover:bg-white/[0.05] hover:text-white lg:hidden"
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
