import Image from "next/image";
import Link from "next/link";

const buildAreas = [
  {
    title: "Apps & Systems",
    lines: [
      "When I design an app, I care about it being intuitive, efficient, and clean.",
      "Not flashy.",
      "Just intentional.",
    ],
  },
  {
    title: "Film & Music",
    lines: [
      "When I make music or film, I'm chasing something real.",
      "Beauty.",
      "Honest moments.",
      "The kind of feeling you recognise immediately.",
    ],
  },
  {
    title: "Physical Design",
    lines: [
      "When I design objects, function comes first.",
      "Then longevity.",
      "Then beauty that doesn't fade.",
    ],
  },
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
              Not all at once.
              <br />
              Not perfectly.
              <br />
              Just decisively.
            </p>
          </div>
        </div>
      </section>

      <section className="container-pad py-20 md:py-24">
        <div className="max-w-[780px]">
          <div className="h-px w-20 bg-border/80" />
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">WHO I AM</p>
          <div className="mt-6 space-y-3 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>I&apos;m the founder of YUXION.</p>
            <p>I build across software, media, and physical design.</p>
            <p>I care about quality, clarity, and things that last.</p>
            <p>I&apos;m building long-term, with responsibility.</p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-zinc-950 py-20 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_6%_18%,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_88%_72%,rgba(120,113,108,0.18),transparent_36%)]" />
        <div className="container-pad relative">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">ORIGINS</p>

              <div className="relative mt-6 max-w-2xl space-y-7 text-[15px] leading-[1.62] text-zinc-300 md:text-[17px]">
                <div className="space-y-2">
                  <p className="font-display text-4xl leading-[1.02] tracking-tight text-zinc-100 md:text-5xl">
                    I didn&apos;t start from confidence.
                  </p>
                  <p className="font-display text-2xl leading-tight tracking-tight text-zinc-100 md:text-3xl">
                    I started from wanting to feel less powerless.
                  </p>
                </div>

                <div className="space-y-2">
                  <p>There was a time I hated who I was.</p>
                  <p>I felt worthless &mdash; that I had nothing going for me.</p>
                </div>

                <div className="space-y-2">
                  <p>I didn&apos;t see much of a future.</p>
                  <p>I didn&apos;t see strength in myself.</p>
                  <p>
                    I lost people who shaped me, and for a while I thought that I couldn&apos;t go on.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="font-display text-2xl leading-tight tracking-tight text-zinc-100 md:text-3xl">
                    One day I got tired of feeling that way.
                  </p>
                  <p>Not inspired.</p>
                  <p>Not confident.</p>
                  <p>Just tired.</p>
                </div>

                <div className="space-y-2">
                  <p>So I changed something I could control.</p>
                  <p className="font-display text-3xl leading-tight tracking-tight text-zinc-100 md:text-4xl">
                    I started working out.
                  </p>
                </div>

                <div className="space-y-2">
                  <p>When I said, &quot;I&apos;m too tired,&quot; I went anyway.</p>
                  <p>When I thought, &quot;I can&apos;t,&quot; I tried anyway.</p>
                </div>

                <div className="space-y-2">
                  <p>There was no big breakthrough.</p>
                  <p>No speech.</p>
                  <p>No turning point.</p>
                </div>

                <div className="space-y-2">
                  <p>Just small decisions that proved I was wrong about myself.</p>
                </div>
                <div className="space-y-2">
                  <p>At first, effort was proof that I wasn&apos;t worthless.</p>
                  <p>
                    Training, practicing, learning &mdash; they gave me something solid to stand on.
                  </p>
                </div>

                <div className="space-y-2">
                  <p>Over time, that changed.</p>
                  <p>Effort stopped being survival.</p>
                  <p>It became curiosity.</p>
                  <p>Then skill.</p>
                  <p>Then something I genuinely enjoyed.</p>
                </div>

                <div className="space-y-2">
                  <p className="font-display text-2xl leading-tight tracking-tight text-zinc-100 md:text-3xl">
                    I realised something simple:
                  </p>
                  <p className="font-display text-3xl leading-tight tracking-tight text-zinc-100 md:text-4xl">
                    When you commit to something fully &mdash; you change.
                  </p>
                  <p>Not overnight.</p>
                  <p>Not perfectly.</p>
                  <p>But steadily.</p>
                </div>

                <div className="space-y-1">
                  <p>And once you see that for yourself,</p>
                  <p>you can&apos;t unsee it.</p>
                </div>
              </div>
            </div>

            <div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 md:min-h-[520px]">
              <Image
                src="/images/work-glass-4.svg"
                alt="Founder workspace texture in grayscale"
                fill
                className="object-cover object-center grayscale contrast-125 brightness-[0.58]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/70" />
              <div className="absolute inset-x-5 bottom-5 border-l border-cyan-300/40 pl-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-400">Realisation</p>
                <p className="mt-2 font-display text-2xl leading-tight tracking-tight text-zinc-100 md:text-3xl">
                  &quot;When you commit fully, you change.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
        <div className="container-pad relative">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">MISSION</p>
            <div className="mt-8 space-y-4">
              <p className="font-display text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
                We&apos;re not here to drift.
              </p>
              <p className="font-display text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
                We&apos;re here to live deliberately.
              </p>
              <p className="font-display text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
                To build.
              </p>
              <p className="font-display text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
                To love well.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-pad py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="max-w-[520px]">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">WHAT I BUILD &amp; WHY</p>
            <p className="mt-5 font-display text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
              I build across mediums.
            </p>
            <div className="mt-6 space-y-2 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>Apps.</p>
              <p>Systems.</p>
              <p>Film.</p>
              <p>Music.</p>
              <p>Physical objects.</p>
            </div>
            <div className="mt-6 space-y-3 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>They look different.</p>
              <p className="font-medium text-foreground">They aren&apos;t.</p>
            </div>
            <div className="mt-6 space-y-2 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>What annoys me is friction.</p>
              <p>Cluttered thinking.</p>
              <p>Poor design.</p>
              <p>Moments wasted because something wasn&apos;t built well.</p>
            </div>
            <div className="mt-6 space-y-2 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>If someone uses something I&apos;ve built, I want them to feel satisfied.</p>
              <p>Clear.</p>
              <p>Capable.</p>
              <p>Happy in a quiet way.</p>
            </div>
            <div className="mt-6 space-y-3 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p className="font-display text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
                Quality matters.
              </p>
              <p>I don&apos;t like things that are loud and hollow.</p>
              <p>I like things that last.</p>
            </div>
            <div className="mt-6 space-y-2 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>Because that&apos;s what I value.</p>
              <p>Taking life into your own hands.</p>
              <p>Shaping it deliberately.</p>
              <p>Not letting moments slip by unnoticed.</p>
            </div>
            <div className="mt-6 space-y-3 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p className="font-display text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
                Creation, for me, is participation.
              </p>
              <p className="font-display text-2xl leading-tight tracking-tight text-foreground md:text-3xl">
                It&apos;s a refusal to drift.
              </p>
              <p>
                And that value runs through everything I build.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {buildAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-border/80 bg-card/70 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-30px_rgba(15,23,42,0.45)]"
              >
                <p className="font-display text-3xl leading-tight tracking-tight text-foreground">
                  {area.title}
                </p>
                <div className="mt-3 space-y-2 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {area.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-pad py-20 md:py-24">
        <div className="max-w-[780px] border-l border-border/90 pl-6 md:pl-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">WHERE I&apos;M HEADED</p>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg md:leading-[1.85]">
            <p className="font-display text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
              I&apos;m not chasing noise.
            </p>
            <p>I&apos;m building long-term.</p>
            <p>I want depth &mdash; not just range.</p>
            <p>Responsibility &mdash; not just freedom.</p>
            <p>Leadership that carries weight, not status that looks impressive.</p>
            <p>I want to build things that last.</p>
            <p>Things that are thoughtful.</p>
            <p>Things that feel intentional years later.</p>
            <p>
              I don&apos;t want to drift through my twenties and look back wondering where the time
              went.
            </p>
            <p className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
              I want to shape my life deliberately.
            </p>
            <p>To grow steadily.</p>
            <p>To build sustainably.</p>
            <p>To love well.</p>
            <p>To lead well when the time comes.</p>
            <p>Not perfectly.</p>
            <p className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
              But intentionally.
            </p>
          </div>
        </div>
      </section>

      <section className="container-pad pt-24 md:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Closing</p>
          <h2 className="mt-5 font-display text-5xl leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Life doesn&apos;t change by accident.
          </h2>
          <div className="mt-8 space-y-2 text-base text-muted-foreground md:text-lg">
            <p>It changes when something is chosen.</p>
            <p>When something is built.</p>
            <p>When you give your heart to something more than yourself.</p>
            <p className="pt-4 font-display text-3xl tracking-tight text-foreground md:text-4xl">
              Take it into your own hands.
            </p>
          </div>
          <div className="mt-16">
            <Link
              href="/work"
              className="text-sm tracking-[0.01em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
