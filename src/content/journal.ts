export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  coverImage: string;
  body: string[];
};

export const journalPosts: JournalPost[] = [
  {
    slug: "designing-systems-that-feel-human",
    title: "Designing Systems That Feel Human",
    excerpt:
      "How interface rhythm, pacing, and language shape trust across games, apps, and films.",
    date: "Jan 14, 2026",
    readTime: "6 min",
    coverImage: "/images/journal-human.svg",
    body: [
      "People do not experience products in isolated screens. They experience sequences: expectations, actions, and outcomes. We design for that sequence first.",
      "At Yuxion, systems design starts with emotional legibility. We define what confidence should feel like in each context, then build interaction architecture to support it.",
      "This approach keeps visual decisions tied to behavior and not trend cycles. It also scales better as teams grow and product surfaces multiply.",
    ],
  },
  {
    slug: "craft-in-the-age-of-realtime",
    title: "Craft In The Age Of Realtime",
    excerpt:
      "Realtime tools changed production speed. They did not replace craft.",
    date: "Dec 03, 2025",
    readTime: "5 min",
    coverImage: "/images/journal-craft.svg",
    body: [
      "Realtime pipelines let teams preview ideas faster, but velocity without standards creates inconsistency. Craft is the constraint that makes speed usable.",
      "Our teams define baseline motion, typography, and framing principles before sprint work begins. That keeps iteration coherent under pressure.",
      "The result is simple: fewer revision cycles and stronger final work.",
    ],
  },
  {
    slug: "narrative-ui-for-game-worlds",
    title: "Narrative UI For Game Worlds",
    excerpt:
      "Using interface language as story infrastructure inside interactive worlds.",
    date: "Nov 09, 2025",
    readTime: "7 min",
    coverImage: "/images/journal-ui.svg",
    body: [
      "Game UI should not feel pasted on top of a world. It should behave like a native layer of that world.",
      "We prototype typography and iconography directly in engine to test readability under motion, light change, and stress states.",
      "When done well, interfaces carry narrative tone while still being immediately useful.",
    ],
  },
  {
    slug: "material-thinking-for-digital-teams",
    title: "Material Thinking For Digital Teams",
    excerpt:
      "What furniture prototyping taught us about building better software products.",
    date: "Oct 17, 2025",
    readTime: "4 min",
    coverImage: "/images/journal-material.svg",
    body: [
      "Physical products force early decisions around tolerances, failure modes, and maintenance. Software should do the same.",
      "When teams articulate constraints clearly, launch quality improves and customer support complexity drops.",
      "Material thinking creates products with fewer surprises and stronger lifecycles.",
    ],
  },
  {
    slug: "building-a-small-team-that-ships",
    title: "Building A Small Team That Ships",
    excerpt:
      "A practical operating model for high-output creative and product teams.",
    date: "Sep 01, 2025",
    readTime: "5 min",
    coverImage: "/images/journal-team.svg",
    body: [
      "Small teams win when roles are clear and decision boundaries are explicit. Ambiguity is the main tax on output.",
      "We use short planning loops, visible ownership, and lightweight postmortems to keep momentum high.",
      "The objective is sustainable pace, not artificial urgency.",
    ],
  },
  {
    slug: "from-concept-to-storefront",
    title: "From Concept To Storefront",
    excerpt:
      "How Yuxion aligns product storytelling across launch films, interactive demos, and commerce.",
    date: "Jul 22, 2025",
    readTime: "6 min",
    coverImage: "/images/journal-storefront.svg",
    body: [
      "Launching products across mediums demands one shared narrative spine. Without it, every touchpoint says something different.",
      "We define that spine early and map each channel to a distinct job: explain, persuade, or convert.",
      "That process makes launches feel coherent without feeling repetitive.",
    ],
  },
];

export function getJournalBySlug(slug: string) {
  return journalPosts.find((post) => post.slug === slug);
}
