import { Heart, Star, Building2, Check } from "lucide-react";

const tiers = [
  {
    name: "Supporter",
    icon: Heart,
    amount: "₹199",
    period: "/ one-time",
    accent: "#00F5D4",
    perks: ["Name on supporters wall", "Early access to new tools", "Supporter badge on profile"],
  },
  {
    name: "Patron",
    icon: Star,
    amount: "₹999",
    period: "/ one-time",
    accent: "#9B5DE5",
    featured: true,
    perks: ["Everything in Supporter", "Vote on the feature roadmap", "Exclusive Patron live sessions", "Priority doubt resolution"],
  },
  {
    name: "Institutional",
    icon: Building2,
    amount: "Custom",
    period: "/ annual",
    accent: "#FFD700",
    perks: ["Everything in Patron", "Bulk seats for your students", "Co-branded content options", "Dedicated success manager"],
  },
];

export default function Donation() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="mb-8 text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-cyan-300">
          Support the Mission
        </p>
        <h2 className="text-4xl font-black md:text-5xl text-white">Back Free Chemistry Education</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/50 text-sm">
          We keep core learning free for every student. Your support funds servers, content and the next generation of tools.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3 max-w-5xl mx-auto">
        {tiers.map((tier) => {
          const Icon = tier.icon;
          return (
            <div
              key={tier.name}
              className={`relative rounded-2xl bg-[#111827] border p-6 transition-all duration-300 hover:-translate-y-1 ${
                tier.featured ? "scale-[1.03]" : ""
              }`}
              style={{ borderColor: tier.featured ? `${tier.accent}50` : "rgba(255,255,255,0.06)" }}
            >
              {tier.featured && (
                <span
                  className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[9px] font-bold tracking-widest px-3 py-1 rounded-full text-black"
                  style={{ background: tier.accent }}
                >
                  MOST LOVED
                </span>
              )}

              <div className="flex h-11 w-11 items-center justify-center rounded-xl mb-4" style={{ background: `${tier.accent}1a` }}>
                <Icon className="h-5 w-5" style={{ color: tier.accent }} />
              </div>

              <h3 className="text-lg font-bold text-white">{tier.name}</h3>
              <div className="mt-2 mb-5 flex items-baseline gap-1">
                <span className="text-3xl font-black text-white">{tier.amount}</span>
                <span className="text-xs text-gray-500">{tier.period}</span>
              </div>

              <ul className="space-y-2.5 mb-6">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-xs text-gray-400">
                    <Check className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" style={{ color: tier.accent }} />
                    {perk}
                  </li>
                ))}
              </ul>

              {/* TODO: wire to payment gateway when activated */}
              <button
                className="w-full rounded-xl py-2.5 text-sm font-semibold transition hover:-translate-y-0.5"
                style={{
                  background: tier.featured ? tier.accent : "transparent",
                  color: tier.featured ? "#000" : tier.accent,
                  border: tier.featured ? "none" : `1px solid ${tier.accent}40`,
                }}
              >
                Become a {tier.name}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
