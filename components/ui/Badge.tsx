import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center justify-center",
        "rounded-[var(--radius-sm)]",
        "border border-[var(--border-strong)]",
        "bg-[var(--surface-2)]",
        "px-5 py-2",
        "text-[11px]",
        "font-semibold",
        "uppercase",
        "tracking-[0.30em]",
        "font-data text-[var(--text-muted)]",
        "shadow-[0_0_30px_rgba(0,229,255,0.08)]",
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}