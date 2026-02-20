import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { buttonStyles } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const mediums = [
  "I build apps.",
  "I design systems.",
  "I make films.",
  "I create music.",
  "I design physical objects.",
];
const priorities = [
  "The people I love.",
  "The responsibility I carry.",
  "The seasons of rest.",
  "The simple joy of being alive.",
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
              Change is possible.
            </h1>
            <p className="max-w-2xl text-lg text-zinc-200 sm:text-xl">
              I know because I changed.
              <br />
              Not all at once.
              <br />
              Not perfectly.
              <br />
              But decisively.
            </p>
          </div>
        </div>
      </section>

      <section className="container-pad py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-stretch">
          <Card className="p-7 md:p-8">
            <SectionHeading
              eyebrow="Where This Started"
              title="There was a period in my life where I felt small."
              description="I didn&apos;t see much of a future for myself."
            />
            <div className="mt-6 max-w-2xl space-y-4 text-base text-muted-foreground md:text-lg">
              <p>I questioned my worth.</p>
              <p>I lost people who meant everything to me.</p>
              <p>Nothing about me felt inevitable.</p>
              <p>What shifted everything wasn&apos;t motivation.</p>
              <p>It was one decision.</p>
              <p>When I said, &quot;I&apos;m too tired,&quot; I did it anyway.</p>
              <p>When I thought, &quot;I can&apos;t,&quot; I proved myself wrong.</p>
              <p>I started exercising. Then I kept going. Then other parts of my life followed.</p>
              <p>That&apos;s when I learned something real:</p>
              <p className="font-medium text-foreground">
                Change doesn&apos;t begin with confidence. It begins with action.
              </p>
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
            eyebrow="What I Believe"
            title="I don&apos;t believe people are fixed."
            description="I believe we expand when we engage."
          />
          <div className="mt-6 space-y-4 text-base text-muted-foreground md:text-lg">
            <p>Not through intensity.</p>
            <p>Not through hype.</p>
            <p>Through deliberate participation.</p>
            <p>You build something. You finish it. You improve it. You improve yourself alongside it.</p>
            <p>That process compounds.</p>
          </div>
        </div>
      </section>

      <section className="container-pad py-16">
        <div className="mx-auto max-w-4xl">
          <Card className="mt-8 p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-cyan-500">Why I Build</p>
            <div className="mt-4 space-y-2">
              {mediums.map((medium) => (
                <p key={medium} className="font-display text-2xl tracking-tight md:text-3xl">
                  {medium}
                </p>
              ))}
            </div>
            <p className="mt-6 text-base text-muted-foreground md:text-lg">
              On the surface, they look unrelated.
            </p>
            <p className="mt-3 text-base text-muted-foreground md:text-lg">
              But they all come from the same place: choosing to participate fully in life.
            </p>
            <p className="mt-3 text-base text-muted-foreground md:text-lg">
              Creation is how I test my limits. It&apos;s how I grow. It&apos;s how I stay engaged.
            </p>
          </Card>
        </div>
      </section>

      <section className="container-pad py-16">
        <Card className="border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 via-card to-card p-7 md:p-10">
          <SectionHeading
            eyebrow="My Mission"
            title="There are people, especially young people, who feel stuck."
            description="I remember that feeling clearly."
          />
          <div className="mt-6 space-y-4 text-base text-muted-foreground md:text-lg">
            <p>If someone in that place can look at what I&apos;ve built and think,</p>
            <p className="font-medium text-foreground">&quot;Maybe I&apos;m not fixed either,&quot;</p>
            <p>then this matters.</p>
            <p>I don&apos;t want to preach.</p>
            <p>
              I want to demonstrate quietly, consistently that growth is real.
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
            <p>People are the reason.</p>
          </div>
        </div>
      </section>

      <section className="container-pad py-16">
        <Card className="p-7 md:p-8">
          <SectionHeading
            eyebrow="Where I&apos;m Headed"
            title="I&apos;m 20."
            description="I&apos;m early. But I&apos;m building long-term."
          />
          <div className="mt-6 space-y-4 text-base text-muted-foreground md:text-lg">
            <p>Toward sustainability.</p>
            <p>Toward leadership.</p>
            <p>Toward depth in a few things that matter.</p>
            <p>Not for status.</p>
            <p>For impact. For responsibility. For proof that change compounds.</p>
          </div>
        </Card>
      </section>

      <section className="container-pad pt-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-500">Closing</p>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
            If you feel stuck:
          </h2>
          <div className="mt-6 space-y-2 text-base text-muted-foreground md:text-lg">
            <p>Start small.</p>
            <p>Do the thing you think you can&apos;t.</p>
            <p>Repeat it.</p>
            <p>Let it build.</p>
            <p>Change is possible.</p>
            <p>I&apos;m building as evidence of that.</p>
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
