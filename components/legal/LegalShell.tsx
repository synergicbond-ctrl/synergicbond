import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// Shared presentational shell for the /privacy, /terms and /refund policy pages.
//
// ⚠️ INTERNAL NOTE — NOT LEGAL ADVICE. These are product-ready DRAFTS written in
// good faith to describe current platform behaviour. They MUST receive final
// review by an Indian lawyer (IT Act 2000 & SPDI Rules 2011, Consumer Protection
// Act 2019 / e-commerce rules, DPDP Act 2023, and the applicable GST/refund
// rules) before being relied upon as the company's binding legal terms. Do not
// present them as certified legal documents.
// ─────────────────────────────────────────────────────────────────────────────

export const LEGAL_LAST_UPDATED = "11 July 2026";
export const LEGAL_SUPPORT_EMAIL = "hello@synergicbond.com";

export default function LegalShell({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        <nav className="mb-8 flex items-center gap-2 text-xs font-semibold text-white/40">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-white/70">{title}</span>
        </nav>

        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-white/55">Last updated: {LEGAL_LAST_UPDATED}</p>
        <p className="mt-5 text-base leading-relaxed text-white/75">{intro}</p>

        <div className="legal-body mt-10 space-y-8 text-sm leading-relaxed text-white/70">
          {children}
        </div>

        <div className="mt-14 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 text-sm text-white/60">
          Questions about this policy? Write to us at{" "}
          <a href={`mailto:${LEGAL_SUPPORT_EMAIL}`} className="font-bold text-cyan-400 hover:text-cyan-300">
            {LEGAL_SUPPORT_EMAIL}
          </a>
          . We update these policies from time to time; the “Last updated” date
          above reflects the current version.
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-xs font-semibold text-white/45">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          <Link href="/refund" className="hover:text-white">Refund &amp; Cancellation</Link>
          <Link href="/support" className="hover:text-white">Support</Link>
        </div>
      </div>
    </main>
  );
}

// Small helper for consistent section headings inside a legal page.
export function LegalSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-black text-white">{heading}</h2>
      <div className="space-y-3 text-white/70">{children}</div>
    </section>
  );
}
