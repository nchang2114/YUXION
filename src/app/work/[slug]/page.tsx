import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Card } from "@/components/ui/card";
import { getWorkBySlug, workItems } from "@/content/work";

export function generateStaticParams() {
  return workItems.map((item) => ({ slug: item.slug }));
}

export default function WorkDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const item = getWorkBySlug(params.slug);
  if (!item) {
    notFound();
  }

  return (
    <section className="container-pad py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Work", href: "/work" },
          { label: item.title },
        ]}
      />

      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <Badge>{item.category}</Badge>
          <span className="text-sm text-muted-foreground">{item.year}</span>
        </div>
        <h1 className="font-display text-5xl leading-tight">{item.title}</h1>
        <p className="max-w-3xl text-lg text-muted-foreground">{item.description}</p>
      </div>

      <div className="relative mt-8 aspect-[16/8] overflow-hidden rounded-3xl border border-border">
        <Image src={item.heroImage} alt={item.title} fill className="object-cover" />
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="space-y-4 p-6">
          <h2 className="font-display text-3xl">Overview</h2>
          <p className="text-muted-foreground">{item.overview}</p>
          <h3 className="pt-2 text-sm uppercase tracking-[0.16em] text-muted-foreground">
            Outcomes
          </h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {item.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </Card>

        <Card className="space-y-5 p-6">
          <div>
            <h3 className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Role</h3>
            <p className="mt-2 text-sm">{item.role}</p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Tools</h3>
            <ul className="mt-2 space-y-1 text-sm">
              {item.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              {item.links.map((entry) => (
                <li key={entry.label}>
                  <Link
                    href={entry.url}
                    className="text-cyan-600 hover:text-cyan-500 dark:text-cyan-400"
                  >
                    {entry.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {item.gallery.map((image) => (
          <div
            key={image}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border"
          >
            <Image src={image} alt={`${item.title} gallery image`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
