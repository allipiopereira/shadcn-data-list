"use client";

import * as React from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import CodeCopy from "./code-copy";
import { useState, useEffect } from "react";

interface CodeBlockProps {
  code: string;
  title?: string;
}

export default function CodeBlock({ code }: CodeBlockProps) {
  const [highlightedCode, setHighlightedCode] = useState<string>("");

  useEffect(() => {
    const highlight = async () => {
      const highlighted = await highlightCode(code);
      setHighlightedCode(highlighted);
    };

    highlight();
  }, [code]);

  return (
    <div className="relative">
      <div className="absolute top-3 right-4">
        <CodeCopy code={code} />
      </div>
      <section
        className="bg-zinc-100 text-sm dark:bg-zinc-800 p-4 rounded-b-xl selection:bg-white/20 overflow-auto rounded-xl"
        dangerouslySetInnerHTML={{
          __html: highlightedCode,
        }}
      />
    </div>
  );
}

async function highlightCode(code: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      keepBackground: false,
      theme: "vesper",
    })
    .use(rehypeStringify)
    .process(code);

  return String(file);
}
