import { LinkButton } from "@/components/ui/Button";

// Homepage overview section.
// The 60–90s intro video is not produced yet, so the player area is an HONEST
// placeholder (clearly labelled), never a fake embed. Swap VIDEO_URL in when
// the founder ships the video.
const VIDEO_URL: string | null = null;

export default function WhatIsSynergicBond() {
  return (
    <section>
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <h2 className="font-display max-w-[18ch] text-[34px] font-semibold leading-[1.05] tracking-[-0.025em] md:text-[46px]">
              <span className="text-[#37c8f4]">The complete</span>{" "}
              <span className="text-[#f0bd36]">chemistry</span>{" "}
              <span className="text-[#b889ff]">learning platform</span>
            </h2>
            <p className="mt-5 max-w-[62ch] text-[16px] leading-[1.7] text-[var(--text-body)]">
              Not a NEET platform. Not a JEE platform. A chemistry operating system — where every
              question connects to its concept, formula, mechanism, reaction, notes, PYQs, tests and
              analytics. Built by an 18-year JEE Advanced chemistry faculty.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <LinkButton href="/snap-solve" variant="primary" size="md">
                Try Snap &amp; Solve →
              </LinkButton>
              <LinkButton href="/notes" variant="secondary" size="md">
                Start a free chapter
              </LinkButton>
            </div>
          </div>

          {/* Video slot — real embed once produced; honest placeholder until then */}
          {VIDEO_URL ? (
            <video controls preload="metadata" className="aspect-video w-full rounded-[var(--radius)] border border-[var(--border-strong)] bg-[var(--background)]" src={VIDEO_URL} />
          ) : (
            <div className="relative flex aspect-video w-full flex-col items-center justify-center overflow-hidden rounded-[var(--radius)] border border-dashed border-[var(--border-strong)] bg-[var(--surface)] text-center">
              <span aria-hidden className="absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(90deg,var(--accent),var(--chem-bond),var(--chem-orbital),var(--chem-rule))]" />
              <span className="flex h-14 w-14 items-center justify-center border border-[var(--border-strong)] bg-[var(--surface-2)] text-2xl text-[var(--accent)]">▶</span>
              <p className="mt-4 text-[15px] font-bold text-[var(--foreground)]">60–90 second intro video</p>
              <p className="mt-1 text-[12px] text-[var(--text-muted)]">In production — coming with launch</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
