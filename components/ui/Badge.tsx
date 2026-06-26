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
        "rounded-full",
        "border border-cyan-400/20",
        "bg-gradient-to-r from-cyan-500/10 to-violet-500/10",
        "backdrop-blur-xl",
        "px-5 py-2",
        "text-[11px]",
        "font-semibold",
        "uppercase",
        "tracking-[0.30em]",
        "text-cyan-300",
        "shadow-[0_0_30px_rgba(0,229,255,0.08)]",
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}