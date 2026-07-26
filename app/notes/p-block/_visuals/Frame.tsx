import type { ReactNode } from "react";
import { VIZ } from "./theme";

export interface FrameProps {
  /** Required. Becomes the accessible name and the printed caption. */
  caption: string;
  /** Longer description for screen readers when the caption is not enough. */
  describe?: string;
  /** SVG user-space width/height. Drawings are authored in this space. */
  w: number;
  h: number;
  /** Optional cap so small diagrams don't stretch absurdly wide. */
  maxWidth?: number;
  children: ReactNode;
}

/**
 * Every diagram in the chapter goes through this frame, which supplies:
 *  - a responsive viewBox (never a fixed pixel size)
 *  - role="img" plus <title>/<desc> so the figure is announced, not skipped
 *  - a horizontal scroll container so a wide drawing never widens the page
 *  - a consistent caption treatment
 */
export function Frame({ caption, describe, w, h, maxWidth, children }: FrameProps) {
  return (
    <figure className="my-6">
      <div className="overflow-x-auto">
        <svg
          role="img"
          aria-label={caption}
          viewBox={`0 0 ${w} ${h}`}
          style={{
            display: "block",
            width: "100%",
            maxWidth: maxWidth ? `${maxWidth}px` : `${w}px`,
            height: "auto",
            margin: "0 auto",
            background: VIZ.surface,
            border: `1px solid ${VIZ.frame}`,
            borderRadius: 14,
          }}
        >
          <title>{caption}</title>
          {describe ? <desc>{describe}</desc> : null}
          {children}
        </svg>
      </div>
      <figcaption
        className="mt-2 text-center text-[12.5px] leading-5"
        style={{ color: "#93a7bd" }}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

/** Formula text with real subscripts and superscripts, usable inside SVG. */
export function Formula({
  parts,
  x,
  y,
  size = VIZ.font.atom,
  fill = VIZ.atomText,
  anchor = "middle",
  weight = 700,
}: {
  parts: { text: string; kind: "base" | "sub" | "sup" }[];
  x: number;
  y: number;
  size?: number;
  fill?: string;
  anchor?: "start" | "middle" | "end";
  weight?: number;
}) {
  return (
    <text x={x} y={y} fontSize={size} fill={fill} textAnchor={anchor} fontWeight={weight} fontFamily="ui-sans-serif, system-ui, sans-serif">
      {parts.map((p, i) => (
        <tspan
          key={i}
          fontSize={p.kind === "base" ? size : size * 0.66}
          dy={p.kind === "sub" ? size * 0.22 : p.kind === "sup" ? -size * 0.34 : 0}
        >
          {p.text}
        </tspan>
      ))}
    </text>
  );
}
