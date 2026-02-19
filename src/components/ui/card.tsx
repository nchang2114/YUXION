import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-border/70 bg-card/80 backdrop-blur-sm",
        className,
      )}
      {...props}
    />
  );
}
