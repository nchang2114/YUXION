import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { buttonStyles } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const timeline = [
  {
    title: "Discover",
    detail:
      "We align on ambition, constraints, and the highest-leverage outcomes before any production starts.",
  },
  {
    title: "Systemize",
    detail:
      "Design language, technical architecture, and production rules are defined as one operating system.",
  },
  {
    title: "Build",
    detail:
      "Cross-functional squads ship in tight loops with clear ownership and measurable checkpoints.",
  },
  {
    title: "Launch + Iterate",
    detail:
      "We monitor behavior, refine fast, and keep the product and brand narrative coherent post-launch.",
  },
];

const team = [
  { name: "Nia Sol", role: "Creative Director" },
  { name: "Ari Kwon", role: "Head of Product" },
  { name: "Luca Ramos", role: "Film Lead" },
  { name: "Mina Park", role: "Industrial Design" },
];

export default function FounderPage() {
  return (
    <section className="container-pad py-16">
      <SectionHeading
        eyebrow="Founder"
        title="Founder Vision. Product-Level Execution."
        description="Yuxion is built to unify strategy, software, film, and industrial design under one disciplined operating model."
      />

      <div className="mt-8 grid gap-5 lg:grid-cols-[2fr_1fr]">
        <Card className="p-6">
          <h2 className="font-display text-3xl">Founder Note</h2>
          <p className="mt-3 text-muted-foreground">
            Yuxion was built to close the gap between concept and execution.
            Creative teams often deliver vision without systems, and product teams
            often ship systems without narrative depth. We build both, together.
          </p>
          <h3 className="mt-6 text-sm uppercase tracking-[0.16em] text-muted-foreground">
            Focus Areas
          </h3>
          <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
            <li>Game Design + Production</li>
            <li>App Strategy + Engineering</li>
            <li>Film Development + Post</li>
            <li>Furniture + Object Design</li>
            <li>Tech Fashion Product Systems</li>
            <li>Launch and Go-to-Market Content</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="font-display text-3xl">Leadership Team</h2>
          <ul className="mt-4 space-y-4">
            {team.map((member) => (
              <li key={member.name} className="border-b border-border pb-3 last:border-0 last:pb-0">
                <p className="font-medium">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="mt-10">
        <SectionHeading
          eyebrow="Operating Model"
          title="How We Build Across Disciplines"
          description="A consistent process across every medium keeps quality high and delivery predictable."
        />
        <ol className="mt-6 grid gap-4 md:grid-cols-2">
          {timeline.map((step, index) => (
            <li key={step.title}>
              <Card className="h-full p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-cyan-500">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 font-display text-2xl">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.detail}</p>
              </Card>
            </li>
          ))}
        </ol>
      </div>

      <Card className="mt-10 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-3xl">Work With the Founder</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Engagements run with shared dashboards, weekly demos, and direct founder-level communication.
          </p>
        </div>
        <Link
          href="/support"
          className={buttonStyles({ className: "inline-flex items-center" })}
        >
          Start a Conversation <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </Card>
    </section>
  );
}
