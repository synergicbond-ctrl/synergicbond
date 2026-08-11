import * as React from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
}

// Gold is the interface's only accent, so exactly one button on a view should
// ever be `primary`. Everything else is a hairline or a bare label.
const base =
  "inline-flex items-center justify-center rounded-[var(--radius-sm)] font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--accent)] text-black hover:opacity-90",
  secondary:
    "border border-[var(--border-strong)] text-[var(--foreground)] hover:bg-[var(--surface-hover)]",
  ghost:
    "bg-transparent text-[var(--text-body)] hover:text-[var(--foreground)] hover:bg-[var(--surface-hover)]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[15px]",
  lg: "h-13 px-8 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  className = "",
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

export function LinkButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}

export default Button;