"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  id: string;
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <section
            key={item.id}
            className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-7"
                aria-expanded={isOpen}
                aria-controls={`accordion-${item.id}`}
              >
                <span className="text-2xl font-semibold leading-tight tracking-tight">
                  {item.title}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
            </h3>
            <div
              id={`accordion-${item.id}`}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-200 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="border-t border-border/70 px-6 pb-6 pt-4 text-lg leading-relaxed text-muted-foreground md:px-7">
                  {item.content}
                </p>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
