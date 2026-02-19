import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { journalPosts } from "@/content/journal";

export default function JournalPage() {
  return (
    <section className="container-pad py-16">
      <SectionHeading
        eyebrow="Journal"
        title="Process, Craft, and Systems"
        description="Writing from Yuxion teams on how we build across software, film, and objects."
      />
      <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {journalPosts.map((post) => (
          <li key={post.slug}>
            <Card className="h-full p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {post.date} • {post.readTime}
              </p>
              <h2 className="mt-3 font-display text-2xl">{post.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
              <Link href={`/journal/${post.slug}`} className="mt-4 inline-block text-sm text-cyan-600 hover:text-cyan-500 dark:text-cyan-400">
                Read
              </Link>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
