import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/vault", label: "Vault" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/tutor", label: "AI Tutor" },
  { href: "/revision", label: "Revision" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link href="/" className="flex items-center gap-4 group">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-950/40 text-xl shadow-[0_0_15px_rgba(34,211,238,0.15)]">
            ⚛️
          </div>

          <div>
            <h1 className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-[#00F5D4] via-[#00BBF9] to-[#9B5DE5] bg-clip-text text-transparent">
              SYNERGIC BOND
            </h1>

            <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-cyan-400/60">
              Chemistry OS
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/auth/signin"
          className="rounded-2xl bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1"
        >
          Student Portal →
        </Link>

      </div>
    </header>
  );
}
