import { Copy } from "lucide-react";
import {
  DataList,
  DataListItem,
  DataListLabel,
  DataListValue,
} from "./ui/data-list";
import { Badge } from "./ui/badge";

export function ExampleDataListVertical() {
  return (
    <DataList orientation="vertical" className="gap-4">
      <DataListItem>
        <DataListLabel>Status:</DataListLabel>
        <DataListValue>
          <Badge className="py-0 px-1.5 bg-emerald-500/20 text-emerald-500 font-semibold">
            Authorized
          </Badge>
        </DataListValue>
      </DataListItem>

      <DataListItem>
        <DataListLabel>ID:</DataListLabel>
        <DataListValue className="flex items-center gap-2">
          #123456789
          <Copy className="w-3.5 h-3.5 opacity-70" />
        </DataListValue>
      </DataListItem>

      <DataListItem>
        <DataListLabel>Name: </DataListLabel>
        <DataListValue>Allipio Pereira</DataListValue>
      </DataListItem>

      <DataListItem>
        <DataListLabel>Company: </DataListLabel>
        <DataListValue>allipiopereira</DataListValue>
      </DataListItem>
    </DataList>
  );
}
