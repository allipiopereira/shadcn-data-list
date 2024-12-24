"use client";

import { parseAsStringLiteral, useQueryState } from "nuqs";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExampleDataListHorizontal } from "@/components/example-data-list-horizontal";
import { ExampleDataListVertical } from "@/components/example-data-list-vertical";
import { tabAcitveOptions, TabActiveOptions } from "@/lib/tab-example";

export function TabOptions() {
  const [tabActive, setTabActive] = useQueryState(
    "tabActive",
    parseAsStringLiteral(tabAcitveOptions).withDefault("horizontal")
  );

  return (
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
  );
}
