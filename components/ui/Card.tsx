import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

const paddingClasses = {
  sm: "p-5",
  md: "p-6",
  lg: "p-8",
};

/**
 * A flat panel bounded by a hairline. Elevation is expressed by the border and
 * a small surface shift on hover — deliberately no blur, gradient overlay,
 * coloured glow or translate, all of which the design system rules out.
 */
export default function Card({
  children,
  className = "",
  hover = true,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={[
        "relative rounded-[var(--radius)]",
        "border border-[var(--border)]",
        "bg-[var(--surface)]",
        paddingClasses[padding],
        "transition-colors duration-200",
        hover
          ? "hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)]"
          : "",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
