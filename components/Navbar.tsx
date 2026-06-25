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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link href="/" className="flex items-center gap-4">

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/10 text-xl">
            ⚛️
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-wide">
              SYNERGIC BOND
            </h1>

            <p className="text-xs uppercase tracking-[0.35em] text-white/40">
              Chemistry OS
            </p>
          </div>

        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/dashboard"
          className="rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
        >
          Start Learning
        </Link>

      </div>
    </header>
  );
}