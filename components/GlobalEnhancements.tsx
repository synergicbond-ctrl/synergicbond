"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Analytics = dynamic(() => import("@vercel/analytics/react").then((mod) => mod.Analytics), {
  ssr: false,
});
const BetaTracker = dynamic(() => import("@/components/BetaTracker"), { ssr: false });
const FeedbackButton = dynamic(() => import("@/components/FeedbackButton"), { ssr: false });

/**
 * Client-only instrumentation and feedback UI are not needed to paint or
 * navigate a page. Load them after the initial render so they do not extend
 * the shared route bundle or compete with primary content hydration.
 */
export default function GlobalEnhancements() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const enable = () => setEnabled(true);
    const idleId = window.requestIdleCallback?.(enable, { timeout: 1500 });
    const timeoutId = idleId === undefined ? window.setTimeout(enable, 1) : undefined;

    return () => {
      if (idleId !== undefined) window.cancelIdleCallback?.(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <BetaTracker />
      <FeedbackButton />
      <Analytics />
    </>
  );
}
