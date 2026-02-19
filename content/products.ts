export type ProductCategory = "Furniture" | "Tech Fashion" | "Objects";

export type ProductItem = {
  slug: string;
  title: string;
  category: ProductCategory;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  description: string;
  specs: string[];
  shipping: string;
  returns: string;
};

export const products: ProductItem[] = [
  {
    slug: "frame-lounge-chair",
    title: "Frame Lounge Chair",
    category: "Furniture",
    price: 980,
    tags: ["Walnut", "Low Profile", "Made-to-Order"],
    thumbnail: "/images/product-chair.svg",
    images: [
      "/images/product-chair.svg",
      "/images/product-chair-2.svg",
      "/images/product-chair-3.svg",
    ],
    description:
      "A low-slung lounge chair with floating side rails and sculpted memory foam upholstery.",
    specs: ["Solid walnut frame", "Performance woven fabric", "Weight: 18.4 kg"],
    shipping: "Ships in 4-6 weeks via white-glove delivery in the contiguous US.",
    returns: "Made-to-order furniture can be returned within 14 days with a 15% restocking fee.",
  },
  {
    slug: "arc-console",
    title: "Arc Console",
    category: "Furniture",
    price: 1240,
    tags: ["Media", "Cable Channel", "Ash Veneer"],
    thumbnail: "/images/product-console.svg",
    images: [
      "/images/product-console.svg",
      "/images/product-console-2.svg",
      "/images/product-console-3.svg",
    ],
    description:
      "A monolithic media console designed for hidden routing, passive cooling, and clean layouts.",
    specs: ["Width: 180 cm", "Integrated cable spine", "Soft-close storage"],
    shipping: "Ships flat-packed in 8-10 business days with assembly guide and hardware.",
    returns: "Eligible for return within 30 days in original packaging.",
  },
  {
    slug: "mesh-field-jacket",
    title: "Mesh Field Jacket",
    category: "Tech Fashion",
    price: 320,
    tags: ["Breathable", "RFID Pocket", "Unisex"],
    thumbnail: "/images/product-jacket.svg",
    images: [
      "/images/product-jacket.svg",
      "/images/product-jacket-2.svg",
      "/images/product-jacket-3.svg",
    ],
    description:
      "A weather-adaptive overshirt with bonded seams and concealed modular pocket architecture.",
    specs: ["Recycled nylon shell", "Two-way matte zip", "Packable hood"],
    shipping: "Ships in 2-3 business days from Los Angeles.",
    returns: "Returns accepted within 21 days if unworn and tagged.",
  },
  {
    slug: "signal-knit-hoodie",
    title: "Signal Knit Hoodie",
    category: "Tech Fashion",
    price: 240,
    tags: ["Thermal", "Reflective Detail", "Seasonal"],
    thumbnail: "/images/product-hoodie.svg",
    images: [
      "/images/product-hoodie.svg",
      "/images/product-hoodie-2.svg",
      "/images/product-hoodie-3.svg",
    ],
    description:
      "A structured knit hoodie tuned for layering with reflective seam taping and drop-tail silhouette.",
    specs: ["Merino-tech blend", "Raglan pattern", "Machine wash cold"],
    shipping: "Ships in 2 business days. International shipping available.",
    returns: "Free US returns within 30 days.",
  },
  {
    slug: "trace-ring",
    title: "Trace Ring",
    category: "Objects",
    price: 110,
    tags: ["Anodized", "NFC-ready", "Limited Run"],
    thumbnail: "/images/product-ring.svg",
    images: [
      "/images/product-ring.svg",
      "/images/product-ring-2.svg",
      "/images/product-ring-3.svg",
    ],
    description:
      "A precision milled ring designed to carry identity tokens and daily access workflows.",
    specs: ["7075 aluminum", "Hypoallergenic liner", "Water resistant"],
    shipping: "Ships in 3-5 business days in custom foam case.",
    returns: "Return within 14 days if unregistered.",
  },
  {
    slug: "quartz-desk-lamp",
    title: "Quartz Desk Lamp",
    category: "Objects",
    price: 190,
    tags: ["Dimmable", "USB-C", "Ambient"],
    thumbnail: "/images/product-lamp.svg",
    images: [
      "/images/product-lamp.svg",
      "/images/product-lamp-2.svg",
      "/images/product-lamp-3.svg",
    ],
    description:
      "A compact desk lamp with warm-to-cool blending and a low-glare directional optic.",
    specs: ["CRI 95 LED array", "USB-C PD", "Adjustable neck"],
    shipping: "Ships in 2 business days with recycled molded packaging.",
    returns: "30-day return policy for unopened or lightly used items.",
  },
  {
    slug: "stack-side-table",
    title: "Stack Side Table",
    category: "Furniture",
    price: 420,
    tags: ["Powder Coat", "Modular", "Compact"],
    thumbnail: "/images/product-table.svg",
    images: [
      "/images/product-table.svg",
      "/images/product-table-2.svg",
      "/images/product-table-3.svg",
    ],
    description:
      "A circular side table system with interchangeable top modules for work or display.",
    specs: ["Aluminum chassis", "Removable tray top", "Height: 47 cm"],
    shipping: "Ships in 5-7 business days.",
    returns: "Return accepted within 30 days in original condition.",
  },
  {
    slug: "ion-commute-pack",
    title: "Ion Commute Pack",
    category: "Tech Fashion",
    price: 260,
    tags: ["Laptop 16\"", "Waterproof", "Urban"],
    thumbnail: "/images/product-pack.svg",
    images: [
      "/images/product-pack.svg",
      "/images/product-pack-2.svg",
      "/images/product-pack-3.svg",
    ],
    description:
      "A weatherproof daily pack with structured silhouette, floating laptop cradle, and magnetic closure.",
    specs: ["22L capacity", "YKK AquaGuard zips", "Padded air channels"],
    shipping: "Ships same day for orders before 1pm PST.",
    returns: "Free exchanges and returns within 30 days.",
  },
  {
    slug: "pulse-dock",
    title: "Pulse Dock",
    category: "Objects",
    price: 150,
    tags: ["Qi2", "Weighted Base", "Desktop"],
    thumbnail: "/images/product-dock.svg",
    images: [
      "/images/product-dock.svg",
      "/images/product-dock-2.svg",
      "/images/product-dock-3.svg",
    ],
    description:
      "A weighted charging dock for phone and earbuds with cable-concealed aluminum body.",
    specs: ["Qi2 15W", "Braided cable", "CNC aluminum shell"],
    shipping: "Ships in 1-2 business days.",
    returns: "45-day satisfaction guarantee.",
  },
];

export const productFilters: Array<"All" | ProductCategory> = [
  "All",
  "Furniture",
  "Tech Fashion",
  "Objects",
];

export function getProductBySlug(slug: string) {
  return products.find((item) => item.slug === slug);
}
