import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import "./metallurgy.css";
import OreClassificationGrid from "./OreClassificationGrid";

const ORE_GRID_MARKER = "[[ORE_CLASSIFICATION_GRID]]";
const titleGradient = { backgroundImage: "linear-gradient(90deg, #0ee7e7 0%, #54a8ff 48%, #a76cf3 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" } as const;
const topicGradient = { backgroundImage: "linear-gradient(90deg, #62e9ff 0%, #7ca9ff 48%, #9d71ec 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" } as const;

function MarkdownBlock({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={{
        h1: ({ children }) => <h1 className="metallurgy-title" style={titleGradient}>{children}</h1>,
        h2: ({ children }) => <h2 className="metallurgy-topic-title" style={topicGradient}>{children}</h2>,
        h3: ({ children }) => <h3 className="metallurgy-subtopic-title">{children}</h3>,
        p: ({ children }) => <p className="metallurgy-body-copy">{children}</p>,
        strong: ({ children }) => <strong className="metallurgy-key-term">{children}</strong>,
        th: ({ children }) => <th className="metallurgy-table-heading">{children}</th>,
        table: ({ children }) => <div className="table-scroll"><table>{children}</table></div>,
        blockquote: ({ children }) => <aside className="concept-box">{children}</aside>,
        img: ({ src = "", alt = "" }) => (
          <figure className="metallurgy-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="edu-diagram" src={src} alt={alt} loading="lazy" style={{ maxHeight: "560px", objectFit: "contain" }} />
            {alt && <figcaption>{alt}</figcaption>}
          </figure>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

export default function MetallurgyMarkdown({ content }: { content: string }) {
  if (!content.includes(ORE_GRID_MARKER)) {
    return <article className="metallurgy-notes"><MarkdownBlock content={content} /></article>;
  }
  const markerIndex = content.indexOf(ORE_GRID_MARKER);
  const before = content.slice(0, markerIndex);
  const after = content.slice(markerIndex + ORE_GRID_MARKER.length);
  return (
    <article className="metallurgy-notes">
      <MarkdownBlock content={before} />
      <OreClassificationGrid />
      <MarkdownBlock content={after} />
    </article>
  );
}
