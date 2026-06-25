import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-8
        transition-all
        duration-300
        ${
          hover
            ? "hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}