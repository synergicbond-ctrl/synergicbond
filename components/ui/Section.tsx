import { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  container?: boolean;
}

export default function Section({
  children,
  className = "",
  container = true,
}: SectionProps) {
  const content = container ? (
    <Container>{children}</Container>
  ) : (
    children
  );

  return (
    <section
      className={[
        "relative w-full",
        "py-24 lg:py-32",
        className,
      ].join(" ")}
    >
      {content}
    </section>
  );
}