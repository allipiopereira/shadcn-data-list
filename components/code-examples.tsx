"use client";

import { parseAsStringLiteral, useQueryState } from "nuqs";

import { tabAcitveOptions } from "@/lib/tab-example";
import { exampleHorizontal } from "@/code/example-horizontal";
import { exampleVertical } from "@/code/example-vertical";
import CodeBlock from "./code-block";

export function CodeExamples() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tabActive, setTabActive] = useQueryState(
    "tabActive",
    parseAsStringLiteral(tabAcitveOptions).withDefault("horizontal")
  );

  return (
    <CodeBlock
      code={tabActive === "horizontal" ? exampleHorizontal : exampleVertical}
    />
  );
}
