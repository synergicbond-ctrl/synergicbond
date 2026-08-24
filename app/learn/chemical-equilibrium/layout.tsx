import type { ReactNode } from "react";

// Chrome now lives in AppShell (per-page), not in this layout. Kept as a
// passthrough so route-level metadata/error boundaries still work.
export default function ChemicalEquilibriumLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
