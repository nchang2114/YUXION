import { SectionHeading } from "@/components/shared/section-heading";
import { WorkFilterGrid } from "@/components/work/work-filter-grid";
import { workItems } from "@/content/work";

export default function WorkPage() {
  return (
    <section className="container-pad py-16">
      <SectionHeading
        eyebrow="Work"
        title="Case Studies Across Games, Apps, and Film"
        description="Each project combines strategy, craft, and production systems built for execution at speed."
      />
      <div className="mt-8">
        <WorkFilterGrid items={workItems} />
      </div>
    </section>
  );
}
