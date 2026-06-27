import Link from "next/link";
import {
  BookOpen,
  FlaskConical,
  Sigma,
  AlertTriangle,
  Lightbulb,
  Heart,
} from "lucide-react";

const vaultItems = [
  {
    title: "Concepts",
    count: "2000+",
    description: "Core chemistry concepts and explanations",
    href: "/vault/concepts",
    icon: BookOpen,
  },
  {
    title: "Reactions",
    count: "500+",
    description: "Named reactions and mechanisms",
    href: "/vault",
    icon: FlaskConical,
  },
  {
    title: "Formula Vault",
    count: "800+",
    description: "Essential equations and shortcuts",
    href: "/vault/formulas",
    icon: Sigma,
  },
  {
    title: "Exceptions",
    count: "300+",
    description: "Important exceptions and edge cases",
    href: "/vault/exceptions",
    icon: AlertTriangle,
  },
  {
    title: "Quick Facts",
    count: "1500+",
    description: "High-yield facts for rapid revision",
    href: "/vault/facts",
    icon: Lightbulb,
  },
  {
    title: "Favorites",
    count: "Personal",
    description: "Your saved chemistry knowledge",
    href: "/vault/favorites",
    icon: Heart,
  },
];

export default function KnowledgeVault() {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="mb-12 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-cyan-300">
          Knowledge Vault
        </p>

        <h2 className="text-4xl font-black md:text-5xl">
          Everything Chemistry.
          <br />
          One Place.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-white/60">
          Concepts, formulas, reactions, exceptions and revision resources
          organized into a premium chemistry knowledge system.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {vaultItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
                <Icon className="h-7 w-7 text-cyan-300" />
              </div>

              <p className="text-sm text-cyan-300">
                {item.count}
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-white/60">
                {item.description}
              </p>

              <div className="mt-6 text-cyan-300">
                Explore →
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
