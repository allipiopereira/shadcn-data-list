"use client";

import { useState } from "react";
import { Check, Clipboard } from "lucide-react";
import { Button } from "./ui/button";

const CodeCopy = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      setCopied(true);
      const cleanedCode = code.replace(/```ts|```/g, "").trim();
      await navigator.clipboard.writeText(cleanedCode);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Erro ao copiar o código:", error);
    }
  };

  return (
    <Button
      onClick={handleCopy}
      variant="secondary"
      className="bg-zinc-200/50 dark:bg-zinc-500/50 hover:dark:bg-zinc-500/30 hover:bg-zinc-200/30 rounded-lg px-2 h-8"
    >
      {!copied ? (
        <Clipboard className="w-4 h-4 text-black dark:text-white hover:cursor-pointer" />
      ) : (
        <Check className="w-4 h-4 text-black dark:text-white hover:cursor-pointer" />
      )}
    </Button>
  );
};

export default CodeCopy;
