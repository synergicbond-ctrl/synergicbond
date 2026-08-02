import type { ReactNode } from "react";
import type { Components } from "react-markdown";
import { AnchoredFigures } from "./AnchoredFigures";

function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (node && typeof node === "object" && "props" in node) return textOf((node as { props: { children?: ReactNode } }).props.children);
  return "";
}

function headingId(part: number, children: ReactNode) {
  return `p${part}-${textOf(children)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;
}

export function createMarkdownComponents(part: number): Components {
  return {
    h1: ({ node, children, ...domProps }) => { void node; return <h2 className="mt-6 text-2xl font-black leading-tight tracking-tight text-[#f5f7fb] sm:text-3xl" {...domProps} id={headingId(part, children)}>{children}</h2>; },
    h2: ({ node, children, ...domProps }) => {
      void node; const id = headingId(part, children);
      return <><h3 className="mt-8 border-l-2 border-[#4ee7ff] pl-3 text-xl font-black leading-tight text-[#f5f7fb] sm:text-2xl" {...domProps} id={id}>{children}</h3><AnchoredFigures anchor={id} /></>;
    },
    h3: ({ node, children, ...domProps }) => {
      void node; const id = headingId(part, children);
      return <><h4 className="mt-6 text-lg font-extrabold leading-tight text-[#66e2a8]" {...domProps} id={id}>{children}</h4><AnchoredFigures anchor={id} /></>;
    },
    p: ({ node, ...domProps }) => { void node; return <p className="mt-3 text-[.98rem] leading-7 text-[#f5f7fb]" {...domProps} />; },
    strong: ({ node, ...domProps }) => { void node; return <strong className="font-extrabold text-[#f5f7fb]" {...domProps} />; },
    em: ({ node, ...domProps }) => { void node; return <em className="text-[#4ee7ff]" {...domProps} />; },
    ul: ({ node, ...domProps }) => { void node; return <ul className="mt-3 space-y-1.5 pl-6 text-[#f5f7fb] marker:text-[#4ee7ff]" {...domProps} />; },
    ol: ({ node, ...domProps }) => { void node; return <ol className="mt-3 space-y-1.5 pl-6 text-[#f5f7fb] marker:font-bold marker:text-[#f2b84b]" {...domProps} />; },
    li: ({ node, ...domProps }) => { void node; return <li className="leading-7" {...domProps} />; },
    blockquote: ({ node, ...domProps }) => { void node; return <blockquote className="my-5 rounded-lg border border-[#f2b84b]/40 bg-[#f2b84b]/10 px-4 py-3 text-[#f5f7fb]" {...domProps} />; },
    table: ({ node, ...domProps }) => { void node; return <div className="my-5 overflow-x-auto rounded-lg border border-[#17364a]"><table className="min-w-full border-collapse text-left text-sm text-[#f5f7fb]" {...domProps} /></div>; },
    thead: ({ node, ...domProps }) => { void node; return <thead className="bg-[#17364a]/60 text-[#4ee7ff]" {...domProps} />; },
    th: ({ node, ...domProps }) => { void node; return <th className="whitespace-nowrap border-b border-r border-[#17364a] px-3 py-2.5 font-black last:border-r-0" {...domProps} />; },
    td: ({ node, ...domProps }) => { void node; return <td className="border-b border-r border-[#17364a] px-3 py-2.5 align-top leading-6 last:border-r-0" {...domProps} />; },
    code: ({ node, ...domProps }) => { void node; return <code className="rounded bg-[#17364a]/70 px-1.5 py-0.5 text-[#4ee7ff]" {...domProps} />; },
    hr: () => <hr className="my-7 border-[#17364a]" />,
  };
}
