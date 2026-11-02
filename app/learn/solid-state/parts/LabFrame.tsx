"use client";

import { useState } from "react";

/**
 * The Crystal Lab iframe with a visible fallback.
 * The lab is served by the entitlement-checked /learn/solid-state/files route. If the frame ends up showing an error
 * (not signed in, no access, file missing) or nothing at all, we say so and give a way forward instead of leaving an empty box.
 */
export function LabFrame({ src, title, fullHref }: { src: string; title: string; fullHref: string }) {
  const [problem, setProblem] = useState<string | null>(null);
  return (
    <>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        className="h-[460px] w-full rounded-xl border border-[var(--border)] bg-black md:h-[520px]"
        onLoad={(e) => {
          try {
            const doc = e.currentTarget.contentDocument;
            const text = (doc?.body?.innerText ?? "").trim();
            if (!doc || (!doc.querySelector("canvas") && text.length < 200)) {
              setProblem(text || "The animation did not load.");
            }
          } catch {
            // a frame we cannot read is a frame from another origin; leave it alone
          }
        }}
      />
      {problem ? (
        <p role="status" className="mt-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3 text-sm text-[var(--text-muted)]">
          The animation could not load ({problem.slice(0, 80)}). It is available to signed-in members with Solid State access.
          Sign in with that account and reload, or{" "}
          <a href={fullHref} className="underline">
            try opening it full size
          </a>
          .
        </p>
      ) : null}
    </>
  );
}
