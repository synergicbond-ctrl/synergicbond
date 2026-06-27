import { ReactNode } from "react";

interface HeadingProps {
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function Heading({
  title,
  subtitle,
  align = "center",
  className = "",
}: HeadingProps) {
  return (
    <div
      className={[
        align === "center" ? "text-center" : "text-left",
        className,
      ].join(" ")}
    >
      <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl xl:text-6xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/65">
          {subtitle}
        </p>
      )}
    </div>
  );
}