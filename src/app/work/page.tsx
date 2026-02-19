import { SectionHeading } from "@/components/shared/section-heading";
import { WorkFilterGrid } from "@/components/work/work-filter-grid";
import { workItems } from "@/content/work";

export default function WorkPage() {
  const categoryCount = new Set(workItems.map((item) => item.category)).size;

  return (
    <section className="container-pad py-16">
      <SectionHeading
        eyebrow="Work"
        title="Case Studies Across Games, Apps, and Film"
        description="Each project combines strategy, craft, and production systems built for execution at speed."
      />
      <div className="relative mt-10 w-full overflow-hidden rounded-3xl border border-border/70 bg-card/70 p-6 shadow-[0_30px_80px_-48px_rgba(8,145,178,0.45)] backdrop-blur-sm md:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full bg-cyan-300/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-slate-500/15 blur-3xl"
        />
        <div className="relative">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Browse Projects</p>
            <p className="text-xs text-muted-foreground">
              {workItems.length} case studies in {categoryCount} disciplines
            </p>
          </div>
          <WorkFilterGrid items={workItems} />
        </div>
      </div>
    </section>
  );
}
