import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { buttonStyles } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const mediums = ["Apps.", "Games.", "Film.", "Music.", "Physical design."];
const priorities = [
  "The people I love.",
  "The responsibility I carry.",
  "The quiet seasons.",
  "Rest.",
  "Presence.",
];

export default function FounderPage() {
  return (
    <main className="pb-20">
      <section className="relative min-h-[72vh] overflow-hidden border-b border-border">
        <Image
          src="/images/work-afterlight-4.svg"
          alt="Moody cinematic abstract background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black/75" />
        <div className="relative container-pad flex min-h-[72vh] items-end py-16 md:py-20">
          <div className="max-w-4xl space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Founder</p>
            <h1 className="font-display text-5xl leading-[0.92] tracking-tight text-white sm:text-6xl md:text-7xl">
              I build intentionally.
            </h1>
            <p className="max-w-2xl text-lg text-zinc-200 sm:text-xl">
              Creation changed my life.
              <br />
              Now I build things and myself with purpose.
            </p>
          </div>
        </div>
      </section>

      <section className="container-pad py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-stretch">
          <Card className="p-7 md:p-8">
            <SectionHeading
              eyebrow="Where This Started"
              title="I didn&apos;t start from confidence."
              description="I started from a place where I felt small."
            />
            <div className="mt-6 max-w-2xl space-y-4 text-base text-muted-foreground md:text-lg">
              <p>Powerless.</p>
              <p>Lost in my own head.</p>
              <p>There were seasons in my life where I genuinely couldn&apos;t see a future for myself.</p>
              <p>What shifted everything wasn&apos;t motivation.</p>
              <p>It was effort.</p>
              <p>Small, deliberate effort. Training. Practicing. Learning. Finishing things.</p>
              <p>Not to impress anyone. Just to prove to myself that change was possible.</p>
              <p>And it was.</p>
              <p>That discovery shaped who I am.</p>
            </div>
          </Card>

          <Card className="relative min-h-[320px] overflow-hidden border-cyan-400/20">
            <Image
              src="/images/work-glass-4.svg"
              alt="Founder workspace texture"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/15 via-transparent to-black/50" />
          </Card>
        </div>
      </section>

      <section className="container-pad py-16">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="What I Believe Now"
            title="I don&apos;t believe people are fixed."
            description="I believe we expand in proportion to the effort we choose."
          />
          <div className="mt-6 space-y-4 text-base text-muted-foreground md:text-lg">
            <p>Not in a dramatic way. Not overnight.</p>
            <p>But steadily.</p>
            <p>Life feels different when you participate in it.</p>
            <p>When you build something. When you take responsibility. When you care about improving.</p>
            <p>Effort isn&apos;t punishment to me anymore. It&apos;s engagement.</p>
          </div>
          <Card className="mt-8 p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-cyan-500">I Work Across Different Mediums</p>
            <div className="mt-4 space-y-2">
              {mediums.map((medium) => (
                <p key={medium} className="font-display text-2xl tracking-tight md:text-3xl">
                  {medium}
                </p>
              ))}
            </div>
            <p className="mt-6 text-base text-muted-foreground md:text-lg">
              They may look unrelated, but the instinct is the same: build something thoughtfully,
              improve it, improve myself alongside it.
            </p>
            <p className="mt-3 font-medium">I don&apos;t build for noise. I build for depth.</p>
          </Card>
        </div>
      </section>

      <section className="container-pad py-16">
        <Card className="border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 via-card to-card p-7 md:p-10">
          <SectionHeading
            eyebrow="My Mission"
            title="I care about people first."
            description="Especially young people who feel stuck, overlooked, or like they don&apos;t matter."
          />
          <div className="mt-6 space-y-4 text-base text-muted-foreground md:text-lg">
            <p>Because I remember that version of myself.</p>
            <p>If someone in a dark season can look at what I build and think:</p>
            <p className="font-medium text-foreground">&quot;Maybe I can change too.&quot;</p>
            <p>That&apos;s enough.</p>
            <p>I don&apos;t want to preach.</p>
            <p>
              I want to demonstrate through consistency, effort, and stability that growth is real.
            </p>
          </div>
        </Card>
      </section>

      <section className="container-pad py-16">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="What Matters Most"
            title="Ambition matters to me."
            description="But it doesn&apos;t outrank:"
          />
          <div className="mt-6 space-y-2">
            {priorities.map((item) => (
              <p key={item} className="font-display text-3xl tracking-tight sm:text-4xl">
                {item}
              </p>
            ))}
          </div>
          <div className="mt-6 space-y-3 text-base text-muted-foreground md:text-lg">
            <p>The people I&apos;ve lost shaped me.</p>
            <p>The people still here anchor me.</p>
            <p>Creation is my lifeline.</p>
            <p>Love is the reason.</p>
          </div>
        </div>
      </section>

      <section className="container-pad py-16">
        <Card className="p-7 md:p-8">
          <SectionHeading
            eyebrow="Where I&apos;m Headed"
            title="I&apos;m 20."
            description="I don&apos;t pretend to have decades of leadership behind me."
          />
          <div className="mt-6 space-y-4 text-base text-muted-foreground md:text-lg">
            <p>But I&apos;m building toward sustainable creation, long-term leverage, and depth in what matters.</p>
            <p>Becoming someone others can rely on.</p>
            <p>Not explosive growth.</p>
            <p className="font-medium text-foreground">Durable growth.</p>
          </div>
        </Card>
      </section>

      <section className="container-pad pt-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-500">Closing</p>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
            If you&apos;re in a season where things feel heavy:
          </h2>
          <div className="mt-6 space-y-2 text-base text-muted-foreground md:text-lg">
            <p>Start small.</p>
            <p>Choose something worth caring about.</p>
            <p>Stick with it.</p>
            <p>Let effort compound quietly.</p>
            <p>You are more expandable than you think.</p>
            <p>And I&apos;m building to prove that every day.</p>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/work" className={buttonStyles({ size: "lg" })}>
              Explore My Work
            </Link>
            <Link href="/support" className={buttonStyles({ variant: "secondary", size: "lg" })}>
              Start Here <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
