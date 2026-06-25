import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export default function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      className={`w-full border-t border-white/10 py-24 ${className}`}
    >
      {children}
    </section>
  );
}