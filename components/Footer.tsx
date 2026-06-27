import Link from "next/link";
import { BookOpen, Bot, Database, FlaskConical, Target, BarChart2, Users } from "lucide-react";

const quickLinks = [
  { title: "Knowledge Vault", href: "/vault",            icon: Database    },
  { title: "AI Tutor",        href: "/tutor",            icon: Bot         },
  { title: "Notes Generator", href: "/notes",            icon: BookOpen    },
  { title: "Quiz Engine",     href: "/quiz",             icon: FlaskConical},
  { title: "Daily Challenge", href: "/daily-challenge",  icon: Target      },
  { title: "Exam Predictor",  href: "/exam-predictor",   icon: BarChart2   },
  { title: "Leaderboard",     href: "/leaderboard",      icon: Users       },
  { title: "Snap & Solve",    href: "/snap-solve",       icon: FlaskConical},
];

const socials = [
  { label: "Facebook",  href: "#", letter: "f"  },
  { label: "Twitter / X", href: "#", letter: "𝕏" },
  { label: "LinkedIn",  href: "#", letter: "in" },
  { label: "Instagram", href: "#", letter: "IG" },
  { label: "Reddit",    href: "#", letter: "r/" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/[0.06] bg-[#0B0F19]">

      {/* Live visitor strip */}
      <div className="border-b border-white/[0.04] py-3 px-6">
        <div className="mx-auto max-w-7xl flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3 text-xs text-white/40">
            <Users className="h-3.5 w-3.5 text-cyan-400" />
            <span>
              <span className="text-white/70 font-semibold">👥 Total Platform Journeys:</span>{" "}
              142,850+ Active Scholars
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-green-400 font-semibold">4,310 Online Now</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-950/40">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <circle cx="12" cy="12" r="2.5" fill="#00F5D4"/>
                  <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#00F5D4" strokeWidth="1.2" strokeOpacity="0.7" transform="rotate(-45 12 12)"/>
                  <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#9B5DE5" strokeWidth="1.2" strokeOpacity="0.7" transform="rotate(45 12 12)"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-extrabold tracking-widest bg-gradient-to-r from-[#00F5D4] to-[#9B5DE5] bg-clip-text text-transparent">
                  SYNERGIC BOND
                </p>
                <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-cyan-400/50">Chemistry OS</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              The Chemistry Operating System built for NEET, JEE, Olympiads and GATE.
              Powered by AI. Designed by expert educators.
            </p>

            {/* Socials */}
            <div className="flex gap-2 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-xs font-bold text-gray-400 hover:border-cyan-400/30 hover:text-white transition"
                >
                  {s.letter}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-5">
              Platform
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {quickLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition py-1"
                  >
                    <Icon className="h-3.5 w-3.5 text-gray-600 flex-shrink-0" />
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/[0.06] pt-6 flex items-center justify-between flex-wrap gap-3">
          <p className="text-xs text-gray-500">
            Copyright © 2026 SYNERGIC BOND. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-600">
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms of Use</Link>
            <Link href="#" className="hover:text-white transition">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
