"use client";

import { useEffect, useState } from "react";

// Client hook for Preview Mode: asks the EXISTING /api/content/access route
// (unchanged) whether the visitor has an active Pro subscription.
// Fails open — a network/API error never locks content (same philosophy as
// PaywallGate). While loading we also stay unlocked to avoid a lock flash.
export function useUnlocked(): boolean {
  const [unlocked, setUnlocked] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetch("/api/content/access?feature=preview")
      .then((r) => r.json())
      .then((d) => {
        if (mounted) setUnlocked(d?.tier === "pro");
      })
      .catch(() => {
        if (mounted) setUnlocked(true);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return unlocked;
}
