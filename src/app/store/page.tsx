import { SectionHeading } from "@/components/shared/section-heading";
import { StoreShowcase } from "@/components/store/store-showcase";
import { products } from "@/content/products";

export default function StorePage() {
  return (
    <section className="container-pad py-16">
      <SectionHeading
        eyebrow="Store"
        title="Furniture, Tech Fashion, and Engineered Objects"
        description="Product lines developed by Yuxion teams with the same design and systems thinking used in our digital work."
      />
      <StoreShowcase items={products} />
    </section>
  );
}
