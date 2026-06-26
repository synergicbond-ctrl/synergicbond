import Link from "next/link";
import {
  BookOpen,
  Bot,
  Database,
  ArrowUpRight,
} from "lucide-react";

const links = [
  { title: "Knowledge Vault", href: "/vault", icon: Database },
  { title: "Dashboard", href: "/dashboard", icon: BookOpen },
  { title: "AI Tutor", href: "/dashboard", icon: Bot },
  { title: "Revision", href: "/revision", icon: BookOpen },
];

export default function Footer() {
  return (
    <footer className="mt-40 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <h2 className="text-4xl font-black">
          SYNERGIC BOND
        </h2>

        <p className="mt-5 max-w-xl text-white/60">
          The Chemistry Operating System built for NEET, JEE,
          Olympiads and GATE.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">

          {links.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">
                    <Icon className="h-6 w-6 text-cyan-300" />
                    <span className="font-semibold">
                      {item.title}
                    </span>
                  </div>

                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />

                </div>
              </Link>
            );
          })}

        </div>

        <div className="mt-20 border-t border-white/10 pt-8 text-center text-sm text-white/40">
          © 2026 SYNERGIC BOND
        </div>

      </div>
    </footer>
  );
}