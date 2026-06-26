import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
}

const sizes = {
  narrow: "max-w-5xl",
  default: "max-w-7xl",
  wide: "max-w-[1440px]",
};

export default function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={[
        "mx-auto w-full",
        sizes[size],
        "px-5 sm:px-6 lg:px-8 xl:px-10",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}