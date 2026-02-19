"use client";

import { useId, useRef } from "react";
import type { KeyboardEvent } from "react";
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
    <div
      className="inline-flex rounded-full border border-border bg-card p-1"
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
              "rounded-full px-4 py-2 text-sm transition-colors",
              selected
                ? "bg-cyan-400 text-black"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
