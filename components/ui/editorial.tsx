import type { ElementType, ReactNode } from "react";

export function PageShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <main className={`sb-page ${className}`}>
      <div className="sb-page-inner">{children}</div>
    </main>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  level = "h2",
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  level?: "h1" | "h2" | "h3";
  id?: string;
}) {
  const Heading = level as ElementType;

  return (
    <header className="flex flex-col gap-4 border-b border-[var(--sb-border)] pb-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-3xl">
        {eyebrow && <p className="sb-eyebrow">{eyebrow}</p>}
        <Heading id={id} className={`${level === "h1" ? "mt-4 text-4xl sm:text-6xl" : "mt-2 text-2xl sm:text-3xl"} sb-display`}>
          {title}
        </Heading>
        {description && <p className="sb-body mt-4 max-w-2xl text-sm sm:text-base">{description}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </header>
  );
}

export function Surface({
  children,
  className = "",
  as: Component = "section",
}: {
  children: ReactNode;
  className?: string;
  as?: "article" | "div" | "section";
}) {
  return <Component className={`sb-surface ${className}`}>{children}</Component>;
}

export function EditorialBadge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "cyan" | "gold" | "neutral";
}) {
  const toneClass = tone === "neutral" ? "" : ` sb-badge--${tone}`;
  return <span className={`sb-badge${toneClass}`}>{children}</span>;
}
