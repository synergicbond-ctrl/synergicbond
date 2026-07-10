import katex from "katex";
import "katex/dist/katex.min.css";

type MathProps = {
  latex: string;
  block?: boolean;
  label?: string;
};

export function Math({ latex, block = false, label }: MathProps) {
  const html = katex.renderToString(latex, {
    displayMode: block,
    throwOnError: false,
    strict: "ignore",
    output: "htmlAndMathml",
  });

  const Tag = block ? "div" : "span";
  return <Tag aria-label={label ?? latex} dangerouslySetInnerHTML={{ __html: html }} />;
}
