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

        {/* High-End Tech Logo */}
        <Link href="/" className="flex items-center gap-4 group">
          
          {/* Glowing Icon Container */}
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-950/40 text-xl shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-300 group-hover:border-emerald-400/50 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]">
            ⚛️
          </div>

          <div>
            {/* Bold, Ultra-High Contrast Premium Gradient */}
            <h1 className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-[#00F5D4] via-[#00BBF9] to-[#9B5DE5] bg-clip-text text-transparent filter drop-shadow-[0_2px_10px_rgba(0,245,212,0.15)] transition-all duration-300 group-hover:brightness-125">
              SYNERGIC BOND
            </h1>
            
            {/* High-Visibility Subtitle */}
            <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-cyan-400/60 mt-0.5">
              Chemistry OS
            </p>
          </div>

        </Link>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-300 transition-all duration-200 hover:text-white hover:scale-105"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Clean, Premium CTA Button */}
        <Link
          href="/dashboard"
          className="rounded-xl bg-white px-6 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-neutral-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105"
        >
          Start Learning
        </Link>

      </div>
    </header>
  );
}
