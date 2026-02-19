import { SectionHeading } from "@/components/shared/section-heading";
import { StoreFilterGrid } from "@/components/store/store-filter-grid";
import { products } from "@/content/products";

export default function StorePage() {
  return (
    <section className="container-pad py-16">
      <SectionHeading
        eyebrow="Store"
        title="Furniture, Tech Fashion, and Engineered Objects"
        description="Product lines developed by Yuxion teams with the same design and systems thinking used in our digital work."
      />
      <div className="mt-8">
        <StoreFilterGrid items={products} />
      </div>
    </section>
  );
}
