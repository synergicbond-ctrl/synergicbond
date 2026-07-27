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
    <nav className="mt-4 flex items-center justify-between gap-3" aria-labelledby={headingId}>
      <p id={headingId} className="sr-only">
        D-block part navigation
      </p>
      <Link
        href={previous.href}
        aria-label={previous.ariaLabel}
        className="inline-flex min-h-8 items-center rounded-full border border-[#17364a] bg-[#071321] px-3 py-1 text-sm font-bold text-[#4ee7ff] transition hover:border-[#4ee7ff] hover:bg-[#17364a]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ee7ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#02060b]"
      >
        <span aria-hidden="true">← Back</span>
      </Link>
      <Link
        href={next.href}
        aria-label={next.ariaLabel}
        className="inline-flex min-h-8 items-center rounded-full border border-[#17364a] bg-[#071321] px-3 py-1 text-sm font-bold text-[#b69aff] transition hover:border-[#b69aff] hover:bg-[#17364a]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b69aff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#02060b]"
      >
        <span aria-hidden="true">Next →</span>
      </Link>
    </nav>
  );
}
