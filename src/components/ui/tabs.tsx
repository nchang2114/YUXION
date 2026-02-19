"use client";

import { useId, useRef } from "react";
import type { KeyboardEvent } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type TabItem = {
  value: string;
  label: string;
};

type TabsProps = {
  tabs: TabItem[];
  value: string;
  onChange: (value: string) => void;
  ariaLabel: string;
};

export function Tabs({ tabs, value, onChange, ariaLabel }: TabsProps) {
  const groupId = useId();
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const onKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
      return;
    }

    event.preventDefault();
    const offset = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + offset + tabs.length) % tabs.length;
    const nextTab = tabs[nextIndex];

    onChange(nextTab.value);
    buttonRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="w-full">
      <div className="relative sm:hidden">
        <select
          aria-label={ariaLabel}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="font-display w-full cursor-pointer appearance-none rounded-xl border border-border/80 bg-card/60 px-4 py-2.5 pr-10 text-sm tracking-[0.01em] backdrop-blur-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {tabs.map((tab) => (
            <option key={tab.value} value={tab.value}>
              {tab.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/80"
          aria-hidden="true"
        />
      </div>

      <div
        className="hidden sm:inline-flex items-center gap-1 rounded-xl border border-border/80 bg-card/60 p-1 backdrop-blur-sm"
        role="tablist"
        aria-label={ariaLabel}
      >
        {tabs.map((tab, index) => {
          const selected = tab.value === value;

          return (
            <button
              key={tab.value}
              ref={(element) => {
                buttonRefs.current[index] = element;
              }}
              id={`${groupId}-tab-${tab.value}`}
              role="tab"
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              onKeyDown={(event) => onKeyDown(event, index)}
              onClick={() => onChange(tab.value)}
              className={cn(
                "font-display relative rounded-md px-3.5 pb-2 pt-1.5 text-base tracking-[0.01em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                selected
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <span>{tab.label}</span>
              <span
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute bottom-1 left-2 right-2 h-0.5 origin-center rounded-full bg-current transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
                  selected ? "scale-x-100" : "scale-x-0",
                )}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
