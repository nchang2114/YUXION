import Image from "next/image";
import Link from "next/link";
import { NewsletterSignup } from "@/components/home/newsletter-signup";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { products } from "@/content/products";
import { workItems } from "@/content/work";

const featured = [
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
  {
    title: products[0].title,
    description: products[0].description,
    image: products[0].thumbnail,
    label: products[0].category,
    href: `/shop/${products[0].slug}`,
  },
  {
    title: products[2].title,
    description: products[2].description,
    image: products[2].thumbnail,
    label: products[2].category,
    href: `/shop/${products[2].slug}`,
  },
  {
    title: products[8].title,
    description: products[8].description,
    image: products[8].thumbnail,
    label: products[8].category,
    href: `/shop/${products[8].slug}`,
  },
];

const capabilities = ["Games", "Apps", "Film", "Furniture", "Tech Fashion"];
const values = ["Craft", "Systems", "Story", "Experimentation"];

export default function HomePage() {
  return (
    <>
      <section className="container-pad pt-20">
        <div className="max-w-4xl space-y-6">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-500">Multi-Discipline Studio</p>
          <h1 className="font-display text-5xl leading-none tracking-tight sm:text-7xl">
            YUXION
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Games, apps, film, and designed objects.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/work" className={buttonStyles({ size: "lg" })}>
              View Work
            </Link>
            <Link
              href="/store"
              className={buttonStyles({ variant: "secondary", size: "lg" })}
            >
              Visit Shop
            </Link>
          </div>
        </div>
      </section>

      <section className="container-pad mt-20">
        <SectionHeading
          eyebrow="Featured"
          title="Selected Projects and Objects"
          description="A cross-section of games, product platforms, films, and physical goods from the Yuxion ecosystem."
        />
        <div className="mx-auto mt-8 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 max-w-[24rem] sm:max-w-[49.25rem] xl:max-w-[74.5rem]">
          {featured.map((item) => (
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
        <SectionHeading
          eyebrow="What We Do"
          title="One Brand, Multiple Disciplines"
          description="Yuxion blends product engineering and creative direction to build connected experiences across digital and physical mediums."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {capabilities.map((capability) => (
            <li key={capability}>
              <Card className="h-full p-5">
                <h3 className="font-medium">{capability}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Designed with system-level consistency and premium execution.
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-pad mt-20">
        <SectionHeading
          eyebrow="Studio Values"
          title="How Yuxion Works"
          description="Our operating model keeps quality high while moving quickly across disciplines."
        />
        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <li key={value}>
              <Card className="h-full border-cyan-400/30 p-5">
                <h3 className="font-display text-2xl">{value}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {value === "Craft"
                    ? "Material and interface quality are never afterthoughts."
                    : value === "Systems"
                      ? "Design and engineering standards are shared across every team."
                      : value === "Story"
                        ? "Narrative clarity guides product and brand communication."
                        : "We prototype aggressively and validate ideas with real behavior."}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-pad mb-20 mt-20">
        <NewsletterSignup />
      </section>
    </>
  );
}
