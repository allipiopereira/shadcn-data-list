"use client";

import { exampleHorizontal } from "@/code/example-horizontal";
import { exampleVertical } from "@/code/example-vertical";
import CodeBlock from "@/components/code-block";
import { ExampleDataListHorizontal } from "@/components/example-data-list-horizontal";
import { ExampleDataListVertical } from "@/components/example-data-list-vertical";
import { GithubIcon } from "@/components/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { parseAsStringLiteral, useQueryState } from "nuqs";

const tabAcitveOptions = ["horizontal", "vertical"] as const;

type TabActiveOptions = (typeof tabAcitveOptions)[number];

export default function Home() {
  const [tabActive, setTabActive] = useQueryState(
    "tabActive",
    parseAsStringLiteral(tabAcitveOptions).withDefault("horizontal")
  );

  return (
    <main className="flex flex-col items-center justify-center w-full p-6">
      <div className="flex flex-col w-full sm:w-[600px] lg:w-[650px] gap-8 mt-20">
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-start space-x-1 opacity-70">
              <span className="px-2 text-sm bg-zinc-100/10 rounded-lg dark:text-gray-400">
                New
              </span>
            </div>

            <div className="flex items-center space-x-1">
              <h2 className="text-3xl font-semibold">Shadcn Data List</h2>
            </div>

            <p className="text-lg opacity-70 leading-none">
              Inspired by the Radix UI.
            </p>
          </div>

          <div className="flex flex-col md:items-end justify-end md:w-72 gap-4">
            <div>
              <Link
                href="https://x.com/alipiopereira7"
                target="_blank"
                className="inline-flex items-center px-2 py-1 bg-zinc-100 dark:bg-zinc-700 rounded-full text-sm font-medium opacity-70 w-auto"
              >
                View Tweet
              </Link>
            </div>

            <div>
              <Link
                href="https://github.com/allipiopereira/shadcn-datalist"
                target="_blank"
                className="inline-flex items-center px-3 py-1.5 hover:bg-zinc-100 hover:dark:bg-zinc-700 rounded-full text-sm font-medium opacity-70 w-auto"
              >
                <GithubIcon
                  width={20}
                  height={20}
                  className="mr-1"
                  color="fill-black dark:fill-white"
                />
                allipiopereira/shadcn-datalist
              </Link>
            </div>
          </div>
        </div>

        <Tabs
          defaultValue={tabActive}
          className="w-full"
          onValueChange={(v: string) => setTabActive(v as TabActiveOptions)}
        >
          <TabsList className="rounded-xl h-9">
            <TabsTrigger value="horizontal" className="rounded-lg py-1">
              Horizontal
            </TabsTrigger>
            <TabsTrigger value="vertical" className="rounded-lg py-1">
              Vertical
            </TabsTrigger>
          </TabsList>
          <div className="flex gap-7 p-4 bg-zinc-200/50 dark:bg-zinc-950/40 border rounded-xl mt-2">
            <TabsContent value="horizontal">
              <ExampleDataListHorizontal />
            </TabsContent>
            <TabsContent value="vertical">
              <ExampleDataListVertical />
            </TabsContent>
          </div>
        </Tabs>

        <div>
          <h2 className="text-lg font-semibold">Step 1</h2>
          <h2 className="text-sm font-medium opacity-70 mb-2">
            Adding the component to your project
          </h2>

          <CodeBlock
            code={`
\`\`\`
npx shadcn add https://shadcn-datalist.vercel.app/api/r/data-list
\`\`\`
`}
          />
        </div>

        <div>
          <h2 className="text-lg font-semibold">Step 2</h2>
          <h2 className="text-sm font-medium opacity-70 mb-2">
            Now just use it.
          </h2>

          <CodeBlock
            code={
              tabActive === "horizontal" ? exampleHorizontal : exampleVertical
            }
          />
        </div>
      </div>

      <footer className="flex flex-row items-center mt-20 gap-1">
        Created by
        <Link
          href="https://github.com/allipiopereira"
          target="_blank"
          className="flex flex-row items-center gap-1 px-2 py-0.5 hover:bg-zinc-100 hover:dark:bg-zinc-700 rounded-full"
        >
          <Image
            src="https://github.com/allipiopereira.png"
            alt="Alípio Pereira"
            width={22}
            height={22}
            className="rounded-full"
          />
          <span className="text-sm font-medium">@allpiopereira</span>
          <p className="sr-only">
            DataList: A flexible component to display data in horizontal and
            vertical layouts.
          </p>
        </Link>
      </footer>
    </main>
  );
}
