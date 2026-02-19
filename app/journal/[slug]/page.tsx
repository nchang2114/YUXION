import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getJournalBySlug, journalPosts } from "@/content/journal";

export function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export default function JournalDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getJournalBySlug(params.slug);
  if (!post) {
    notFound();
  }

  return (
    <article className="container-pad py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Journal", href: "/journal" },
          { label: post.title },
        ]}
      />
      <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
        {post.date} • {post.readTime}
      </p>
      <h1 className="mt-3 max-w-4xl font-display text-5xl leading-tight">{post.title}</h1>
      <p className="mt-3 max-w-3xl text-lg text-muted-foreground">{post.excerpt}</p>
      <div className="relative mt-8 aspect-[16/7] overflow-hidden rounded-3xl border border-border">
        <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
      </div>
      <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
        {post.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
