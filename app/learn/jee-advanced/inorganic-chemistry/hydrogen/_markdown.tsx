"use client";

import type { FC } from "react";

interface HydrogenMarkdownProps {
  text: string;
}

const HydrogenMarkdown: FC<HydrogenMarkdownProps> = ({ text }) => {
  return (
    <div className="prose max-w-none dark:prose-invert whitespace-pre-wrap">
      {text}
    </div>
  );
};

export default HydrogenMarkdown;
