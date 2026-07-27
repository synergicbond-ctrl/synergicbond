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
    <nav className="mt-5 flex items-center justify-between gap-3 sm:mt-6" aria-labelledby={headingId}>
      <p id={headingId} className="sr-only">
        D-block part navigation
      </p>
      <Link
        href={previous.href}
        aria-label={previous.ariaLabel}
        className="inline-flex min-h-9 items-center rounded-full border border-cyan-300/30 bg-cyan-300/[0.07] px-3 py-1.5 text-sm font-bold text-cyan-200 transition hover:border-cyan-300/60 hover:bg-cyan-300/[0.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071321]"
      >
        <span aria-hidden="true">← Back</span>
      </Link>
      <Link
        href={next.href}
        aria-label={next.ariaLabel}
        className="inline-flex min-h-9 items-center rounded-full border border-violet-300/30 bg-violet-300/[0.07] px-3 py-1.5 text-sm font-bold text-violet-200 transition hover:border-violet-300/60 hover:bg-violet-300/[0.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071321]"
      >
        <span aria-hidden="true">Next →</span>
      </Link>
    </nav>
  );
}
