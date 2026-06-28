"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FlaskConical, Sparkles, GitBranch, Sigma, Palette, Atom } from "lucide-react";

const tabs = [
  { href: "/reagents",        label: "Reagents",            icon: FlaskConical },
  { href: "/redox-reactions", label: "Oxidation / Reduction", icon: Sparkles },
  { href: "/name-reactions",  label: "Name Reactions",      icon: GitBranch },
  { href: "/solubility",      label: "Solubility",          icon: Sigma },
  { href: "/salt-colors",     label: "Salt Colors",         icon: Palette },
  { href: "/properties",      label: "Properties",          icon: Atom },
];

export default function ReferenceTabs() {
  const pathname = usePathname();
  return (
    <div className="mb-8 flex justify-center">
      <div
        className="flex items-center gap-1 overflow-x-auto scrollbar-none rounded-full bg-[#111827] border border-white/[0.06] p-1.5 max-w-full"
        style={{ scrollbarWidth: "none" }}
      >
        {tabs.map((t) => {
          const Icon = t.icon;
          const active = pathname === t.href;
          return (
            <Link
              key={t.href}
              href={t.href}
              className={`flex items-center gap-1.5 whitespace-nowrap px-3.5 py-2 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105 ${
                active ? "bg-cyan-500 text-black font-bold" : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon className="h-3.5 w-3.5 flex-shrink-0" />
              {t.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
