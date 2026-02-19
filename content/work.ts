export type WorkCategory = "Games" | "Apps" | "Film";

export type WorkItem = {
  slug: string;
  title: string;
  category: WorkCategory;
  year: string;
  description: string;
  heroImage: string;
  thumbnail: string;
  overview: string;
  role: string;
  tools: string[];
  gallery: string[];
  outcomes: string[];
  links: Array<{ label: string; url: string }>;
};

export const workItems: WorkItem[] = [
  {
    slug: "riftline-protocol",
    title: "Riftline Protocol",
    category: "Games",
    year: "2026",
    description:
      "A narrative tactics game where players coordinate synchronized urban rescues across split timelines.",
    heroImage: "/images/work-riftline.svg",
    thumbnail: "/images/work-riftline.svg",
    overview:
      "Riftline Protocol was built to merge cinematic pacing with tactical depth. We designed a visual language that makes complex scenarios readable at a glance while preserving emotional momentum.",
    role: "Creative direction, game systems, UI architecture, launch trailer",
    tools: ["Unreal Engine 5", "Figma", "DaVinci Resolve", "Wwise"],
    gallery: [
      "/images/work-riftline-2.svg",
      "/images/work-riftline-3.svg",
      "/images/work-riftline-4.svg",
    ],
    outcomes: [
      "Closed alpha retention reached 62% D14 with a 31-minute average session.",
      "Trailer cut exceeded target completion rate by 2.1x across launch channels.",
      "UI framework now powers two upcoming internal titles.",
    ],
    links: [
      { label: "Launch Site", url: "#" },
      { label: "Gameplay Reel", url: "#" },
    ],
  },
  {
    slug: "vela-drift",
    title: "Vela Drift",
    category: "Games",
    year: "2025",
    description:
      "An atmospheric racing game focused on flow-state controls, modular track logic, and adaptive sound.",
    heroImage: "/images/work-vela.svg",
    thumbnail: "/images/work-vela.svg",
    overview:
      "Vela Drift explored how minimal interfaces can heighten speed perception. We developed a modular HUD that collapses under high-intensity moments so gameplay remains the focal point.",
    role: "Game design, UX, art pipeline automation",
    tools: ["Unity", "Blender", "FMOD", "Notion"],
    gallery: [
      "/images/work-vela-2.svg",
      "/images/work-vela-3.svg",
      "/images/work-vela-4.svg",
    ],
    outcomes: [
      "Controller onboarding time reduced by 39% after iteration three.",
      "Track creation kit enabled weekly content drops with a two-person team.",
      "Audio-reactive visuals became a key differentiator in platform featuring.",
    ],
    links: [
      { label: "Press Kit", url: "#" },
      { label: "Prototype Archive", url: "#" },
    ],
  },
  {
    slug: "aether-notes",
    title: "Aether Notes",
    category: "Apps",
    year: "2026",
    description:
      "A writing and research workspace for distributed teams with living docs and context threading.",
    heroImage: "/images/work-aether.svg",
    thumbnail: "/images/work-aether.svg",
    overview:
      "Aether Notes combines editorial workflows with systems-level structure. The interface balances density and calm through modular typographic scales and low-friction keyboard actions.",
    role: "Product strategy, UX systems, brand direction",
    tools: ["Next.js", "TypeScript", "Supabase", "Framer Motion"],
    gallery: [
      "/images/work-aether-2.svg",
      "/images/work-aether-3.svg",
      "/images/work-aether-4.svg",
    ],
    outcomes: [
      "Pilot teams reduced project handoff overhead by 47%.",
      "Search-to-open workflow measured at 1.9 seconds median.",
      "Design tokens exported for product and marketing parity.",
    ],
    links: [
      { label: "Product Demo", url: "#" },
      { label: "Design System", url: "#" },
    ],
  },
  {
    slug: "orbit-wallet",
    title: "Orbit Wallet",
    category: "Apps",
    year: "2025",
    description:
      "A personal finance app that turns cashflow planning into a visual weekly rhythm.",
    heroImage: "/images/work-orbit.svg",
    thumbnail: "/images/work-orbit.svg",
    overview:
      "Orbit Wallet focused on confidence over complexity. We rebuilt transaction views with progressive disclosure patterns that help users understand changes before taking action.",
    role: "UX writing, app architecture, data visualization",
    tools: ["React Native", "Reanimated", "Plaid", "Amplitude"],
    gallery: [
      "/images/work-orbit-2.svg",
      "/images/work-orbit-3.svg",
      "/images/work-orbit-4.svg",
    ],
    outcomes: [
      "First-week budgeting completion increased from 42% to 71%.",
      "Support requests for categorization dropped by 33%.",
      "Average weekly active use rose for six consecutive releases.",
    ],
    links: [
      { label: "Case Deck", url: "#" },
      { label: "UX Walkthrough", url: "#" },
    ],
  },
  {
    slug: "afterlight-district",
    title: "Afterlight District",
    category: "Film",
    year: "2026",
    description:
      "A short film anthology exploring machine memory through practical sets and digital compositing.",
    heroImage: "/images/work-afterlight.svg",
    thumbnail: "/images/work-afterlight.svg",
    overview:
      "Afterlight District merged product-level precision with cinematic storytelling. We designed production systems that allowed the film team to iterate like a software team without losing craft.",
    role: "Executive production, VFX direction, title design",
    tools: ["ARRI Alexa Mini", "Unreal nDisplay", "Nuke", "DaVinci Resolve"],
    gallery: [
      "/images/work-afterlight-2.svg",
      "/images/work-afterlight-3.svg",
      "/images/work-afterlight-4.svg",
    ],
    outcomes: [
      "Festival cut delivered 3 weeks ahead of schedule.",
      "Virtual production workflow reduced reshoots by 28%.",
      "Title sequence became a licensed asset for two partner projects.",
    ],
    links: [
      { label: "Director Notes", url: "#" },
      { label: "Production Stills", url: "#" },
    ],
  },
  {
    slug: "glass-horizon",
    title: "Glass Horizon",
    category: "Film",
    year: "2024",
    description:
      "A branded documentary series on material innovation and craft economies.",
    heroImage: "/images/work-glass.svg",
    thumbnail: "/images/work-glass.svg",
    overview:
      "Glass Horizon required a brand-safe but emotionally rich visual tone. Yuxion handled narrative structure, field capture, and post-production consistency across six episodes.",
    role: "Story development, cinematography, post pipeline",
    tools: ["Sony FX6", "Premiere Pro", "After Effects", "Frame.io"],
    gallery: [
      "/images/work-glass-2.svg",
      "/images/work-glass-3.svg",
      "/images/work-glass-4.svg",
    ],
    outcomes: [
      "Series completion rate outperformed benchmark by 1.7x.",
      "Client reused format for annual campaign framework.",
      "Asset library scaled into 120+ social cutdowns.",
    ],
    links: [
      { label: "Episode Preview", url: "#" },
      { label: "Behind the Scenes", url: "#" },
    ],
  },
];

export const workFilters: Array<"All" | WorkCategory> = [
  "All",
  "Games",
  "Apps",
  "Film",
];

export function getWorkBySlug(slug: string) {
  return workItems.find((item) => item.slug === slug);
}
