"use client";

import { useMemo, useState } from "react";
import { workFilters, type WorkItem } from "@/content/work";
import { WorkFilterGrid } from "@/components/work/work-filter-grid";
import { cn } from "@/lib/utils";

type WorkFilter = (typeof workFilters)[number];

const panelStyles: Record<
  WorkFilter,
  { container: string; orbOne: string; orbTwo: string }
> = {
  All: {
    container:
      "relative mt-10 w-full overflow-hidden rounded-3xl border border-border/70 bg-card/70 p-6 shadow-[0_30px_80px_-48px_rgba(8,145,178,0.45)] backdrop-blur-sm md:p-8",
    orbOne:
      "pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full bg-cyan-300/25 blur-3xl",
    orbTwo:
      "pointer-events-none absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-slate-500/15 blur-3xl",
  },
  Games: {
    container:
      "relative mt-10 w-full overflow-hidden rounded-3xl border border-cyan-400/40 bg-cyan-500/[0.08] p-6 shadow-[0_30px_88px_-48px_rgba(34,211,238,0.6)] backdrop-blur-sm md:p-8",
    orbOne:
      "pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full bg-cyan-300/40 blur-3xl",
    orbTwo:
      "pointer-events-none absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-sky-400/20 blur-3xl",
  },
  Apps: {
    container:
      "relative mt-10 w-full overflow-hidden rounded-3xl border border-emerald-400/35 bg-emerald-500/[0.07] p-6 shadow-[0_30px_88px_-48px_rgba(16,185,129,0.5)] backdrop-blur-sm md:p-8",
    orbOne:
      "pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full bg-emerald-300/35 blur-3xl",
    orbTwo:
      "pointer-events-none absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-teal-400/20 blur-3xl",
  },
  Film: {
    container:
      "relative mt-10 w-full overflow-hidden rounded-3xl border border-amber-400/35 bg-amber-500/[0.08] p-6 shadow-[0_30px_88px_-48px_rgba(251,191,36,0.55)] backdrop-blur-sm md:p-8",
    orbOne:
      "pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full bg-amber-300/40 blur-3xl",
    orbTwo:
      "pointer-events-none absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-orange-400/20 blur-3xl",
  },
};

export function WorkShowcase({ items }: { items: WorkItem[] }) {
  const [filter, setFilter] = useState<WorkFilter>("All");
  const styles = panelStyles[filter];
  const categoryCount = useMemo(
    () => new Set(items.map((item) => item.category)).size,
    [items],
  );

  return (
    <div className={cn(styles.container)}>
      <div aria-hidden="true" className={styles.orbOne} />
      <div aria-hidden="true" className={styles.orbTwo} />
      <div className="relative">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Browse Projects</p>
          <p className="text-xs text-muted-foreground">
            {items.length} case studies in {categoryCount} disciplines
          </p>
        </div>
        <WorkFilterGrid items={items} filter={filter} onFilterChange={setFilter} />
      </div>
    </div>
  );
}
