import { SectionHeading } from "@/components/shared/section-heading";
import { WorkShowcase } from "@/components/work/work-showcase";
import { workItems } from "@/content/work";

export default function WorkPage() {
  return (
    <section className="container-pad py-16">
      <SectionHeading
        eyebrow="Work"
        title="Case Studies Across Games, Apps, and Film"
        description="Each project combines strategy, craft, and production systems built for execution at speed."
      />
      <WorkShowcase items={workItems} />
    </section>
  );
}
