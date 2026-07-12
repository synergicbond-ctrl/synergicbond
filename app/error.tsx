"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import Link from "next/link";

// Route-segment error boundary. Shows a generic, safe message — never the raw
// error message or stack. `error.digest` is a non-sensitive correlation id that
// maps to the server log entry for support/debugging.
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Client-side breadcrumb only; the full error is already logged server-side.
    console.error("Application error:", error?.digest ?? "unknown");
  }, [error]);

  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-[11px] font-black uppercase tracking-[0.3em] text-rose-400/70">
        Something went wrong
      </p>
      <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
        We hit an unexpected error
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55">
        This one&apos;s on us. Please try again — if it keeps happening, contact
        support and we&apos;ll look into it.
      </p>
      {error?.digest && (
        <p className="mt-3 text-xs text-white/30">Reference: {error.digest}</p>
      )}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => reset()}
          className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-5 py-2.5 text-sm font-bold text-cyan-300 transition hover:bg-cyan-500/20"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-white/70 transition hover:text-white"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
