"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useCart } from "@/components/providers/cart-provider";
import { Badge } from "@/components/ui/badge";
import { Button, buttonStyles } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs } from "@/components/ui/tabs";
import { productFilters, type ProductItem } from "@/content/products";
import { formatCurrency } from "@/lib/utils";

export function StoreFilterGrid({ items }: { items: ProductItem[] }) {
  const [filter, setFilter] = useState<(typeof productFilters)[number]>("All");
  const { addItem, openCart } = useCart();

  const filtered = useMemo(
    () =>
      filter === "All"
        ? items
        : items.filter((item) => item.category === filter),
    [filter, items],
  );

  return (
    <div className="space-y-6">
      <Tabs
        tabs={productFilters.map((entry) => ({ label: entry, value: entry }))}
        value={filter}
        onChange={(next) => setFilter(next as (typeof productFilters)[number])}
        ariaLabel="Filter products by category"
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <motion.div
            key={item.slug}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="group overflow-hidden">
              <Link href={`/shop/${item.slug}`} className="block">
                <div className="relative aspect-square overflow-hidden border-b border-border">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </Link>
              <div className="space-y-3 p-4">
                <div className="flex items-center justify-between">
                  <Badge>{item.category}</Badge>
                  <span className="text-sm font-medium">
                    {formatCurrency(item.price)}
                  </span>
                </div>
                <h3 className="font-medium">{item.title}</h3>
                <ul className="flex flex-wrap gap-1">
                  {item.tags.slice(0, 2).map((tag) => (
                    <li key={tag} className="text-xs text-muted-foreground">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1"
                    onClick={() => {
                      addItem({
                        slug: item.slug,
                        title: item.title,
                        image: item.thumbnail,
                        price: item.price,
                        category: item.category,
                      });
                      openCart();
                    }}
                  >
                    Add to Cart
                  </Button>
                  <Link
                    href={`/shop/${item.slug}`}
                    className={buttonStyles({
                      variant: "secondary",
                      size: "sm",
                      className: "flex-1",
                    })}
                  >
                    View
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
