import Image from "next/image";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/store/add-to-cart-button";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Card } from "@/components/ui/card";
import { getProductBySlug, products } from "@/content/products";
import { formatCurrency } from "@/lib/utils";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="container-pad py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Store", href: "/store" },
          { label: product.title },
        ]}
      />

      <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr]">
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-border">
            <Image src={product.images[0]} alt={product.title} fill className="object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {product.images.slice(1).map((image) => (
              <div
                key={image}
                className="relative aspect-square overflow-hidden rounded-2xl border border-border"
              >
                <Image src={image} alt={`${product.title} detail`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <Badge>{product.category}</Badge>
          <h1 className="font-display text-5xl leading-tight">{product.title}</h1>
          <p className="text-2xl">{formatCurrency(product.price)}</p>
          <p className="text-muted-foreground">{product.description}</p>

          <Card className="p-5">
            <h2 className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Specs</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
              {product.specs.map((spec) => (
                <li key={spec}>{spec}</li>
              ))}
            </ul>
          </Card>

          <AddToCartButton
            slug={product.slug}
            title={product.title}
            image={product.thumbnail}
            price={product.price}
            category={product.category}
          />

          <Accordion
            items={[
              {
                id: "shipping",
                title: "Shipping",
                content: product.shipping,
              },
              {
                id: "returns",
                title: "Returns",
                content: product.returns,
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
