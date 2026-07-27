import Link from "next/link";

const TOTAL_PARTS = 10;

type DBlockPartNavigationProps = {
  part: number;
  position: "top" | "bottom";
};

function destinationFor(part: number, direction: "previous" | "next") {
  const targetPart = direction === "previous" ? part - 1 : part + 1;

  if (targetPart < 1 || targetPart > TOTAL_PARTS) {
    return {
      href: "/notes/d-block",
      label: "D-block overview",
      ariaLabel: `${direction === "previous" ? "Back" : "Next"} to the D-block overview`,
    };
  }

  return {
    href: `/notes/d-block/part${targetPart}`,
    label: `${direction === "previous" ? "Previous" : "Next"}: Part ${targetPart}`,
    ariaLabel: `${direction === "previous" ? "Back" : "Next"} to Part ${targetPart}`,
  };
}

/** Shared previous/next navigation for every D-block theory part. */
export default function DBlockPartNavigation({ part, position }: DBlockPartNavigationProps) {
  const previous = destinationFor(part, "previous");
  const next = destinationFor(part, "next");
  const headingId = `d-block-part-${part}-${position}-navigation`;

  return (
    <nav
      className="mt-5 rounded-2xl border border-cyan-400/20 bg-[#071321] p-3 shadow-[0_18px_60px_rgba(0,0,0,0.22)] sm:p-4"
      aria-labelledby={headingId}
    >
      <p id={headingId} className="sr-only">
        D-block part navigation
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <Link
          href={previous.href}
          aria-label={previous.ariaLabel}
          className="group flex min-h-14 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-left transition hover:border-cyan-300/45 hover:bg-cyan-300/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071321]"
        >
          <span aria-hidden="true" className="text-xl font-black text-cyan-300">←</span>
          <span>
            <span className="block text-xs font-black uppercase tracking-[0.16em] text-cyan-300">Back</span>
            <span className="block text-sm font-bold text-slate-100">{previous.label}</span>
          </span>
        </Link>
        <Link
          href={next.href}
          aria-label={next.ariaLabel}
          className="group flex min-h-14 items-center justify-end gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-right transition hover:border-violet-300/45 hover:bg-violet-300/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071321]"
        >
          <span>
            <span className="block text-xs font-black uppercase tracking-[0.16em] text-violet-300">Next</span>
            <span className="block text-sm font-bold text-slate-100">{next.label}</span>
          </span>
          <span aria-hidden="true" className="text-xl font-black text-violet-300">→</span>
        </Link>
      </div>
    </nav>
  );
}
