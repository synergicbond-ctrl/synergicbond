import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

const paddingClasses = {
  sm: "p-5",
  md: "p-7",
  lg: "p-9",
};

export default function Card({
  children,
  className = "",
  hover = true,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={[
        "relative overflow-hidden",
        "rounded-3xl",
        "border border-white/10",
        "bg-white/[0.04]",
        "backdrop-blur-2xl",
        "shadow-[0_8px_40px_rgba(0,0,0,0.35)]",
        paddingClasses[padding],
        "transition-all duration-300 ease-out",
        hover
          ? "hover:-translate-y-1.5 hover:border-cyan-400/40 hover:bg-white/[0.06] hover:shadow-[0_16px_60px_rgba(0,229,255,0.10)]"
          : "",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-cyan-500/5" />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}