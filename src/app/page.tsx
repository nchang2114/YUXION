import Image from "next/image";
import Link from "next/link";
import { NewsletterSignup } from "@/components/home/newsletter-signup";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { products } from "@/content/products";
import { workItems } from "@/content/work";

const featuredWork = [
  {
    title: workItems[0].title,
    description: workItems[0].description,
    image: workItems[0].thumbnail,
    label: workItems[0].category,
    href: `/work/${workItems[0].slug}`,
  },
  {
    title: workItems[2].title,
    description: workItems[2].description,
    image: workItems[2].thumbnail,
    label: workItems[2].category,
    href: `/work/${workItems[2].slug}`,
  },
  {
    title: workItems[4].title,
    description: workItems[4].description,
    image: workItems[4].thumbnail,
    label: workItems[4].category,
    href: `/work/${workItems[4].slug}`,
  },
];

const proofPoints = [
  {
    metric: "62%",
    label: "D14 retention",
    context: "Closed alpha result from Riftline Protocol.",
  },
  {
    metric: "71%",
    label: "First-week completion",
    context: "Budget setup completion in Orbit Wallet.",
  },
  {
    metric: "120+",
    label: "Social cutdowns",
    context: "Asset library scaled from Glass Horizon.",
  },
  {
    metric: `${workItems.length + products.length}`,
    label: "Shipped releases",
    context: "Combined portfolio across work and products.",
  },
];

const capabilities = [
  {
    title: "Games",
    description: "Original game worlds built with readable systems and cinematic pacing.",
  },
  {
    title: "Apps",
    description: "Product experiences engineered for clarity, speed, and long-term use.",
  },
  {
    title: "Film",
    description: "Narrative and branded films produced with systems-level precision.",
  },
  {
    title: "Objects",
    description: "Physical products designed for utility, longevity, and restrained beauty.",
  },
];

const youtubeUrl = "https://www.youtube.com/@yuxion-studios";

export default function HomePage() {
  return (
    <>
      <section className="container-pad pt-20">
        <div className="max-w-4xl space-y-6">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-500">
            Founder-Led Studio
          </p>
          <h1 className="font-display text-5xl leading-none tracking-tight sm:text-7xl">
            YUXION STUDIOS
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
            A founder-led studio focused on deliberate creation across digital and physical mediums.
          </p>
          <p className="font-display text-2xl tracking-tight text-foreground sm:text-3xl">
            BUILD. CREATE. INSPIRE.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/work" className={buttonStyles({ size: "lg" })}>
              View Work
            </Link>
            <Link
              href="/founder"
              className={buttonStyles({ variant: "secondary", size: "lg" })}
            >
              Read Founder Page
            </Link>
          </div>
        </div>
      </section>

      <section className="container-pad mt-20">
        <SectionHeading
          eyebrow="Credibility / Proof"
          title="Real outcomes from shipped work"
          description="These are concrete numbers from released projects and production systems."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((point) => (
            <li key={point.label}>
              <Card className="h-full p-5">
                <p className="font-display text-4xl leading-none tracking-tight text-foreground">
                  {point.metric}
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.14em] text-cyan-500">
                  {point.label}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{point.context}</p>
              </Card>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-muted-foreground">
          Download metrics will be published as products move from private pilots into public
          release.
        </p>
      </section>

      <section className="container-pad mt-20">
        <SectionHeading
          eyebrow="What We Do"
          title="Digital and physical, built to one standard"
          description="Yuxion blends product engineering and creative direction so every release feels coherent."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability) => (
            <li key={capability.title}>
              <Card className="h-full p-5">
                <h3 className="font-display text-2xl">{capability.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{capability.description}</p>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-pad mt-20">
        <SectionHeading
          eyebrow="Philosophy Snapshot"
          title="I like making stuff."
          description="Like and subscribe haha im done with this"
        />
        <Card className="mt-8 max-w-4xl border-cyan-400/30 bg-card/60 p-6 md:p-8">
          <p className="font-display text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            I like making stuff. Like and subscribe haha im done with this
          </p>
        </Card>
        <div className="mt-6">
          <Link href="/founder" className={buttonStyles({ variant: "secondary" })}>
            Read the Founder Letter
          </Link>
        </div>
      </section>

      <section className="container-pad mt-20">
        <SectionHeading
          eyebrow="Featured Work"
          title="Selected builds from the studio"
          description="A cross-section of current projects across games, apps, and film."
        />
        <div className="mx-auto mt-8 grid w-full max-w-[74.5rem] grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {featuredWork.map((item) => (
            <Card
              key={item.title}
              className="group w-full overflow-hidden transition-colors hover:border-cyan-400/50"
            >
              <Link href={item.href}>
                <div className="relative aspect-[4/3] overflow-hidden border-b border-border">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="space-y-3 p-5">
                  <Badge>{item.label}</Badge>
                  <h2 className="font-display text-2xl">{item.title}</h2>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="container-pad mt-20">
        <div className="rounded-2xl border border-border bg-card/60 p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-500">We Build in Public</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
            Follow the process, not just the launch.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            We share build logs, design decisions, and post-mortems in real time so people can see
            what it actually takes to ship.
          </p>
          <div className="mt-6">
            <Link
              href={youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className={buttonStyles({ size: "lg" })}
            >
              Watch on YouTube
            </Link>
          </div>
        </div>
      </section>

      <section className="container-pad mb-24 mt-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Closing</p>
          <h2 className="mt-5 font-display text-5xl leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Follow our journey!
          </h2>
          <div className="mx-auto mt-10 max-w-3xl text-left">
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </>
  );
}
