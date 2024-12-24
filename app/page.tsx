import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

import CodeBlock from "@/components/code-block";
import { CodeExamples } from "@/components/code-examples";
import { GithubIcon } from "@/components/icons";
import { TabOptions } from "@/components/tab-examples";

export default function Home() {
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
                href="https://x.com/alipiopereira7/status/1871371536772575650"
                target="_blank"
                className="inline-flex items-center px-2 py-1 bg-zinc-100 dark:bg-zinc-700 rounded-full text-sm font-medium opacity-70 w-auto"
              >
                View Tweet
              </Link>
            </div>

            <div>
              <Link
                href="https://github.com/allipiopereira/shadcn-data-list"
                target="_blank"
                className="inline-flex items-center px-3 py-1.5 hover:bg-zinc-100 hover:dark:bg-zinc-700 rounded-full text-sm font-medium opacity-70 w-auto"
              >
                <GithubIcon
                  width={20}
                  height={20}
                  className="mr-1"
                  color="fill-black dark:fill-white"
                />
                allipiopereira/shadcn-data-list
              </Link>
            </div>
          </div>
        </div>

        <Suspense>
          <TabOptions />
        </Suspense>

        <div>
          <h2 className="text-lg font-semibold">Step 1</h2>
          <h2 className="text-sm font-medium opacity-70 mb-2">
            Adding the component to your project
          </h2>

          <CodeBlock
            code={`
\`\`\`
npx shadcn add https://shadcn-data-list.vercel.app/api/r/data-list
\`\`\`
`}
          />
        </div>

        <div>
          <h2 className="text-lg font-semibold">Step 2</h2>
          <h2 className="text-sm font-medium opacity-70 mb-2">
            Now just use it.
          </h2>

          <Suspense>
            <CodeExamples />
          </Suspense>
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
