import type { ReactNode } from "react";
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

export function createMarkdownComponents(part: number) {
  return {
    h1: (props: any) => <h2 className="mt-6 text-2xl font-black leading-tight tracking-tight text-[#f5f7fb] sm:text-3xl" {...props} id={headingId(part, props.children)} />,
    h2: (props: any) => {
      const id = headingId(part, props.children);
      return <><h3 className="mt-8 border-l-2 border-[#4ee7ff] pl-3 text-xl font-black leading-tight text-[#f5f7fb] sm:text-2xl" {...props} id={id} /><AnchoredFigures anchor={id} /></>;
    },
    h3: (props: any) => {
      const id = headingId(part, props.children);
      return <><h4 className="mt-6 text-lg font-extrabold leading-tight text-[#66e2a8]" {...props} id={id} /><AnchoredFigures anchor={id} /></>;
    },
    p: (props: any) => <p className="mt-3 text-[.98rem] leading-7 text-[#f5f7fb]" {...props} />,
    strong: (props: any) => <strong className="font-extrabold text-[#f5f7fb]" {...props} />,
    em: (props: any) => <em className="text-[#4ee7ff]" {...props} />,
    ul: (props: any) => <ul className="mt-3 space-y-1.5 pl-6 text-[#f5f7fb] marker:text-[#4ee7ff]" {...props} />,
    ol: (props: any) => <ol className="mt-3 space-y-1.5 pl-6 text-[#f5f7fb] marker:font-bold marker:text-[#f2b84b]" {...props} />,
    li: (props: any) => <li className="leading-7" {...props} />,
    blockquote: (props: any) => <blockquote className="my-5 rounded-lg border border-[#f2b84b]/40 bg-[#f2b84b]/10 px-4 py-3 text-[#f5f7fb]" {...props} />,
    table: (props: any) => <div className="my-5 overflow-x-auto rounded-lg border border-[#17364a]"><table className="min-w-full border-collapse text-left text-sm text-[#f5f7fb]" {...props} /></div>,
    thead: (props: any) => <thead className="bg-[#17364a]/60 text-[#4ee7ff]" {...props} />,
    th: (props: any) => <th className="whitespace-nowrap border-b border-r border-[#17364a] px-3 py-2.5 font-black last:border-r-0" {...props} />,
    td: (props: any) => <td className="border-b border-r border-[#17364a] px-3 py-2.5 align-top leading-6 last:border-r-0" {...props} />,
    code: (props: any) => <code className="rounded bg-[#17364a]/70 px-1.5 py-0.5 text-[#4ee7ff]" {...props} />,
    hr: () => <hr className="my-7 border-[#17364a]" />,
  };
}
