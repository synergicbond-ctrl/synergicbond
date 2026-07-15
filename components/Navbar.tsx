"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import MoleculeLogo from "@/components/MoleculeLogo";
import ProgramSwitcher, { type SwitcherProgram } from "@/components/portal/ProgramSwitcher";
import { useT, LANGS, type Lang } from "@/lib/i18n";
import { supabase } from "@/lib/supabase";
import type { Session } from "@supabase/supabase-js";
import {
  Camera, Gem, Medal, Menu, X,
  Globe, ChevronDown, Info, Search, GitBranch, Palette,
  LayoutDashboard, LogOut, UserCircle, Table2, ListOrdered,
  BookOpen, Target, ClipboardList, Activity, Bot,
  GraduationCap, Microscope, Trophy, Atom, School, Landmark,
  // WEEK 13 final navbar (Roadmap Phase 9)
  Home, Sigma, FlaskConical, FileText, Calendar, History, Heart,
  CreditCard, Gift,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Mega-menu building blocks (label + grouped links with descriptions)
type MenuItem = { href: string; label: string; desc: string; icon: LucideIcon };
type MenuGroup = { title: string; items: MenuItem[] };
type MegaMenu = {
  title: string;
  groups: MenuGroup[];
  /** Optional flagship pinned at the top of the panel. */
  pinned?: MenuItem;
  /** Optional honest footnote (e.g. coming-soon programs). */
  note?: string;
  /** Panel width + column count. */
  wide?: boolean;
};

// ─────────────────────────────────────────────────────────────────────────────
// WEEK 13 — Final public navbar (Roadmap Phase 9):
//   Home · Programs · Features · Pricing · Support
// Snap & Solve stays a top-level link (Phase 7 rule: permanent flagship).
// Every href is a real, existing route; International programs are honestly
// marked coming-soon (Phase 2) rather than linked to nothing.
// ─────────────────────────────────────────────────────────────────────────────

const featuresPinned: MenuItem = { href: "/periodic-table", label: "Periodic Table", desc: "Interactive · trends · element data — the brain of chemistry", icon: Table2 };

const MEGA_MENUS: MegaMenu[] = [
  {
    title: "Programs",
    pinned: { href: "/programs", label: "All Programs", desc: "NEET · JEE · Olympiad · Boards — choose your exam", icon: GraduationCap },
    groups: [
      {
        title: "🇮🇳 Entrance & Olympiad",
        items: [
          { href: "/programs/neet",         label: "NEET",         desc: "Medical entrance track",     icon: Microscope },
          { href: "/programs/jee-main",     label: "JEE Main",     desc: "NTA engineering entrance",   icon: GraduationCap },
          { href: "/programs/jee-advanced", label: "JEE Advanced", desc: "IIT entrance track",         icon: Atom },
          { href: "/programs/olympiad",     label: "Olympiad",     desc: "NSEC · INChO · IChO",        icon: Trophy },
        ],
      },
      {
        title: "🏫 School Boards",
        items: [
          { href: "/dashboard/boards",      label: "Board Dashboards", desc: "Full Class 11 & 12 dashboards", icon: LayoutDashboard },
          { href: "/programs/cbse",         label: "CBSE",         desc: "Class 11–12 · NCERT first",  icon: BookOpen },
          { href: "/programs/icse",         label: "ICSE",         desc: "ISC Class 11–12",            icon: School },
          { href: "/programs/state-boards", label: "State Boards", desc: "State curricula tracks",     icon: Landmark },
        ],
      },
      {
        title: "🎓 Graduate & International",
        items: [
          { href: "/programs/gate",          label: "GATE",          desc: "GATE Chemistry (CY)",       icon: Medal },
          { href: "/programs/international",  label: "International",  desc: "AP · IB · A-Level · MCAT",  icon: Globe },
        ],
      },
    ],
  },
  {
    title: "Features",
    wide: true,
    pinned: featuresPinned,
    groups: [
      {
        title: "📖 Learn Ecosystem",
        items: [
          { href: "/notes",            label: "Chapter Notes",    desc: "Verified exam notes",        icon: BookOpen },
          { href: "/formula-cards",    label: "Formula Cards",    desc: "Verified formula library",   icon: Sigma },
          { href: "/reagents",         label: "Reagents",         desc: "Reagent master list",        icon: FlaskConical },
          { href: "/important-orders", label: "Important Orders", desc: "Ranking sequences (IOC)",    icon: ListOrdered },
          { href: "/salt-colors",      label: "Colours",          desc: "Compound & ion colours",     icon: Palette },
          { href: "/name-reactions",   label: "Mechanisms",       desc: "700+ named reactions",       icon: GitBranch },
        ],
      },
      {
        title: "🎯 Practice Ecosystem",
        items: [
          { href: "/pyq",   label: "PYQ Center",     desc: "Previous-year intelligence", icon: Target },
          { href: "/tests", label: "Practice Tests", desc: "Chapter · topic · papers",   icon: ClipboardList },
        ],
      },
      {
        title: "🤖 AI Ecosystem",
        items: [
          { href: "/snap-solve",   label: "Snap & Solve",  desc: "Photo → verified solution", icon: Camera },
          { href: "/tutor",        label: "AI Tutor",      desc: "Step-by-step explanations", icon: Bot },
          { href: "/ai-lab/notes", label: "AI Notes",      desc: "Generate exam-focused notes", icon: FileText },
          { href: "/ai-lab",       label: "Study Planner", desc: "Week-by-week syllabus plan", icon: Calendar },
        ],
      },
      {
        title: "📊 Performance Ecosystem",
        items: [
          { href: "/dashboard",   label: "Mission Control", desc: "Your study command centre",  icon: LayoutDashboard },
          { href: "/performance", label: "Progress",        desc: "Readiness · weak topics",    icon: Activity },
          { href: "/revision",    label: "Revision Queue",  desc: "What to revise next",        icon: History },
        ],
      },
    ],
  },
];

// Plain top-level links after the mega-menus (final navbar tail).
const NAV_LINKS: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "/pricing", label: "Pricing", icon: Gem },
  { href: "/support", label: "Support", icon: Heart },
];

// Mobile drawer — final IA flattened (Home · flagship · Programs · Features ·
// Pricing · Support). Explicit labels (no i18n key dependency).
const mainLinks: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "/",                 label: "Home",             icon: Home },
  { href: "/snap-solve",       label: "Snap & Solve",     icon: Camera },
  { href: "/programs",         label: "Programs",         icon: GraduationCap },
  { href: "/periodic-table",   label: "Periodic Table",   icon: Table2 },
  { href: "/notes",            label: "Chapter Notes",    icon: BookOpen },
  { href: "/formula-cards",    label: "Formula Cards",    icon: Sigma },
  { href: "/reagents",         label: "Reagents",         icon: FlaskConical },
  { href: "/important-orders", label: "Important Orders", icon: ListOrdered },
  { href: "/salt-colors",      label: "Colours",          icon: Palette },
  { href: "/name-reactions",   label: "Mechanisms",       icon: GitBranch },
  { href: "/pyq",              label: "PYQ Center",       icon: Target },
  { href: "/tests",            label: "Practice Tests",   icon: ClipboardList },
  { href: "/ai-lab",           label: "AI Lab",           icon: Bot },
  { href: "/dashboard",        label: "Mission Control",  icon: LayoutDashboard },
  { href: "/performance",      label: "Progress",         icon: Activity },
  { href: "/pricing",          label: "Pricing",          icon: Gem },
  { href: "/support",          label: "Support",          icon: Heart },
  { href: "/about",            label: "About",            icon: Info },
];

// ─────────────────────────────────────────────────────────────────────────────
// Authenticated portal chrome (Portal Reorganisation pass).
//
// Signed-in students working inside the portal get ONE compact header —
// Home · Learn · Practice · Tests · Revision · Progress · AI Tools + the
// Active Program control + profile menu — instead of the public marketing
// menus (which stay untouched for signed-out visitors and marketing pages).
// Naming is canonical here: Tests (not Testing), Progress (not Analytics),
// AI Tools (not Intelligence/Premium); Memory System is folded into Revision.
// ─────────────────────────────────────────────────────────────────────────────

const PORTAL_PREFIXES = [
  "/dashboard", "/programs/", "/pyq", "/tests", "/revision", "/memory",
  "/mistakes", "/ai-lab", "/tutor", "/performance", "/analytics", "/notes",
  "/exam", "/chapter", "/chemistry-tools", "/formula-cards", "/snap-solve",
  "/board-examiner", "/learn", "/readiness", "/ncert", "/exam-predictor",
  "/timers", "/achievements",
];

function isPortalPath(pathname: string | null): boolean {
  if (!pathname) return false;
  return PORTAL_PREFIXES.some((p) =>
    p.endsWith("/") ? pathname.startsWith(p) : pathname === p || pathname.startsWith(`${p}/`)
  );
}

interface PortalContext {
  entitledPrograms: SwitcherProgram[];
  activeProgram: SwitcherProgram | null;
  isAllAccess: boolean;
  canSwitchPrograms: boolean;
  destinations: {
    home: string; learn: string; practice: string; tests: string;
    revision: string; progress: string; aiTools: string;
  };
}

const FREE_DESTINATIONS: PortalContext["destinations"] = {
  home: "/dashboard", learn: "/notes", practice: "/pyq", tests: "/tests",
  revision: "/revision", progress: "/performance", aiTools: "/ai-lab",
};

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
  const [portal, setPortal] = useState<PortalContext | null>(null);

  // Portal context — server-verified entitled programs + active program for
  // the header. Only fetched for signed-in users; the endpoint returns 401
  // otherwise. Re-fetched after a program switch (custom event from the
  // switcher) so the nav links re-scope without a full reload.
  const fetchPortal = useCallback(async () => {
    try {
      const res = await fetch("/api/portal/active-program", { cache: "no-store" });
      if (!res.ok) { setPortal(null); return; }
      const data = await res.json();
      setPortal({
        entitledPrograms: data.entitledPrograms ?? [],
        activeProgram: data.activeProgram ?? null,
        isAllAccess: Boolean(data.isAllAccess),
        canSwitchPrograms: Boolean(data.canSwitchPrograms),
        destinations: data.destinations ?? FREE_DESTINATIONS,
      });
    } catch {
      setPortal(null);
    }
  }, []);

  // Only fetch on sign-in; render already gates all portal chrome on `email`,
  // so a stale context after sign-out is never shown. Deferred a tick so the
  // effect itself never sets state synchronously.
  useEffect(() => {
    if (!email) return;
    const t = setTimeout(fetchPortal, 0);
    return () => clearTimeout(t);
  }, [email, fetchPortal]);

  useEffect(() => {
    window.addEventListener("sb-program-switched", fetchPortal);
    return () => window.removeEventListener("sb-program-switched", fetchPortal);
  }, [fetchPortal]);

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

  // Authenticated portal chrome — signed-in users inside the portal get the
  // canonical 7-destination header instead of the marketing menus.
  const portalMode = Boolean(email) && isPortalPath(pathname);
  const dest = portal?.destinations ?? FREE_DESTINATIONS;
  const portalLinks: { href: string; label: string; icon: LucideIcon }[] = [
    { href: dest.home,     label: "Home",     icon: Home },
    { href: dest.learn,    label: "Learn",    icon: BookOpen },
    { href: dest.practice, label: "Practice", icon: Target },
    { href: dest.tests,    label: "Tests",    icon: ClipboardList },
    { href: dest.revision, label: "Revision", icon: History },
    { href: dest.progress, label: "Progress", icon: Activity },
    { href: dest.aiTools,  label: "AI Tools", icon: Bot },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0B0F19]/90 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-2 px-3 sm:gap-4 sm:px-4 md:px-6">

        {/* Brand Logo — animated network molecule in top-left corner */}
        <Link href="/" aria-label="SYNERGIC BOND Chemistry OS" className="group flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-950/40 shadow-[0_0_16px_rgba(34,211,238,0.2)] transition group-hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]">
            <MoleculeLogo size={40} />
          </div>
          <div className="hidden min-[360px]:block">
            <p className="text-lg font-extrabold tracking-widest bg-gradient-to-r from-[#00F5D4] via-[#00BBF9] to-[#9B5DE5] bg-clip-text text-transparent leading-none">
              SYNERGIC BOND
            </p>
            <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-cyan-400/50 hidden sm:block mt-1">
              Chemistry OS
            </p>
          </div>
        </Link>

        {/* Desktop Nav — portal chrome for signed-in students, WEEK 13
            marketing IA (Home · Programs · Features · Pricing · Support)
            for everyone else. */}
        {portalMode ? (
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-1" aria-label="Portal">
            {portalLinks.map((l) => {
              const Icon = l.icon;
              const active = pathname === l.href || (l.href !== "/dashboard" && pathname?.startsWith(`${l.href}/`));
              return (
                <Link
                  key={l.label}
                  href={l.href}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition ${
                    active ? "text-cyan-300 bg-cyan-500/10" : "text-gray-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <Icon className="h-4 w-4" /> {l.label}
                </Link>
              );
            })}
          </nav>
        ) : (
        <nav className="hidden lg:flex items-center justify-center flex-1 gap-1">
          {/* Home */}
          <Link
            href="/"
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition ${
              pathname === "/" ? "text-white bg-white/[0.06]" : "text-gray-300 hover:text-white hover:bg-white/[0.05]"
            }`}
          >
            <Home className="h-4 w-4" /> Home
          </Link>

          {/* Programs + Features mega-menus (shared panel machinery) */}
          {MEGA_MENUS.map((menu) => {
            const open = openMenu === menu.title;
            const allItems = menu.groups.flatMap((g) => g.items);
            const hasActive = allItems.some((it) => it.href === pathname) || menu.pinned?.href === pathname;
            return (
              <div key={menu.title} className="relative" onMouseEnter={() => setOpenMenu(menu.title)} onMouseLeave={() => setOpenMenu(null)}>
                <button
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition ${
                    open || hasActive ? "text-white bg-white/[0.06]" : "text-gray-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {menu.title} <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
                </button>
                {open && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50">
                    <div className={`${menu.wide ? "w-[620px]" : "w-[340px]"} rounded-2xl border border-white/[0.08] bg-[#111827]/98 backdrop-blur-xl shadow-2xl shadow-black/50 p-3`}>
                      {/* Pinned flagship (Periodic Table in Features, All Programs in Programs) */}
                      {menu.pinned && (
                        <Link href={menu.pinned.href} onClick={() => setOpenMenu(null)} className="group flex items-center gap-3 rounded-xl p-3 mb-2 border border-cyan-400/25 bg-gradient-to-r from-cyan-500/15 to-purple-500/10 hover:from-cyan-500/20 transition">
                          <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-500/20 border border-cyan-400/30">
                            <menu.pinned.icon className="h-5 w-5 text-cyan-300" />
                          </span>
                          <span className="flex-1 min-w-0">
                            <span className="flex items-center gap-2 text-sm font-black text-white">{menu.pinned.label}<span className="text-[8px] font-bold tracking-wider text-cyan-300 bg-cyan-500/15 px-1.5 py-0.5 rounded-full">PINNED</span></span>
                            <span className="block text-xs text-white/55">{menu.pinned.desc}</span>
                          </span>
                          {/* mini grid motif */}
                          <span className="hidden sm:grid grid-cols-6 gap-[2px] flex-shrink-0">
                            {Array.from({ length: 18 }).map((_, i) => <span key={i} className="h-1.5 w-1.5 rounded-[1px]" style={{ background: `hsl(${185 + (i / 18) * 120},70%,55%)`, opacity: 0.7 }} />)}
                          </span>
                        </Link>
                      )}
                      {/* Grouped sections */}
                      <div className={menu.wide ? "grid grid-cols-2 gap-x-3" : ""}>
                        {menu.groups.map((g) => (
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
                      {/* Honest coming-soon footnote (International programs) */}
                      {menu.note && (
                        <p className="mt-2 border-t border-white/[0.06] px-2 pt-2 text-[11px] text-white/40">{menu.note}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Snap & Solve — permanent flagship, stays top-level (Phase 7 rule) */}
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

          <span className="mx-1.5 h-5 w-px bg-white/10" />

          {/* Pricing · Support */}
          {NAV_LINKS.map((l) => {
            const Icon = l.icon;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition ${
                  pathname === l.href ? "text-white bg-white/[0.06]" : "text-gray-300 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                <Icon className="h-4 w-4" /> {l.label}
              </Link>
            );
          })}

          {/* Search quick-link (utility) */}
          <Link href="/search" className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/[0.05] transition">
            <Search className="h-4 w-4" /> {t("nav.search")}
          </Link>
        </nav>
        )}

        {/* Right Utilities */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          {/* Active Program control — portal chrome only */}
          {portalMode && portal && (
            <div className="hidden md:block">
              <ProgramSwitcher
                entitledPrograms={portal.entitledPrograms}
                activeProgram={portal.activeProgram}
                isAllAccess={portal.isAllAccess}
              />
            </div>
          )}
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
                      <LayoutDashboard className="h-4 w-4 text-cyan-400" /> Home
                    </Link>
                    <Link href="/dashboard/profile" onClick={() => setAcctOpen(false)} className="flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-xs font-medium text-gray-300 hover:text-white hover:bg-white/5 transition">
                      <UserCircle className="h-4 w-4 text-cyan-400" /> My Profile
                    </Link>
                    <Link href="/dashboard/programs" onClick={() => setAcctOpen(false)} className="flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-xs font-medium text-gray-300 hover:text-white hover:bg-white/5 transition">
                      <GraduationCap className="h-4 w-4 text-cyan-400" /> My Programs
                    </Link>
                    <Link href="/dashboard/subscription" onClick={() => setAcctOpen(false)} className="flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-xs font-medium text-gray-300 hover:text-white hover:bg-white/5 transition">
                      <CreditCard className="h-4 w-4 text-cyan-400" /> Subscription &amp; Billing
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
              <Link href="/auth/signup" className="rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-2 py-1.5 text-xs font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 sm:px-3">
                Sign Up →
              </Link>
            </div>
          ) : (
            <Link
              href="/auth/signin"
              className="rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-2 py-1.5 text-xs font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 sm:px-3"
            >
              {t("nav.signIn")} →
            </Link>
          )}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-400 transition hover:bg-white/[0.05] hover:text-white sm:h-11 sm:w-11 lg:hidden"
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
          {portalMode && portal && (
            <div className="mb-4 flex items-center justify-between gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">Active program</span>
              <ProgramSwitcher
                entitledPrograms={portal.entitledPrograms}
                activeProgram={portal.activeProgram}
                isAllAccess={portal.isAllAccess}
              />
            </div>
          )}
          <div className="grid grid-cols-2 gap-2">
            {(portalMode ? portalLinks : mainLinks).map((link) => {
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