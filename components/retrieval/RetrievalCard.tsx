// RetrievalCard — server-safe presentational wrapper in the canonical block
// anatomy (hairline border, semantic left edge, mono tag). Used to frame any
// retrieval content that isn't itself interactive.

import type { ReactNode } from "react";

export function RetrievalCard({
  tag,
  edgeColor,
  children,
}: {
  tag: string;
  /** Semantic left-edge color; defaults to the structural cyan. */
  edgeColor?: string;
  children: ReactNode;
}) {
  return (
    <section className="sbrCard" style={edgeColor ? { borderLeftColor: edgeColor } : undefined}>
      <span className="sbrTag" style={edgeColor ? { color: edgeColor } : undefined}>
        {tag}
      </span>
      {children}
    </section>
  );
}
