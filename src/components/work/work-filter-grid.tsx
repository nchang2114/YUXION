"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { workFilters, type WorkItem } from "@/content/work";
import { Tabs } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function WorkFilterGrid({ items }: { items: WorkItem[] }) {
  const [filter, setFilter] = useState<(typeof workFilters)[number]>("All");

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
        tabs={workFilters.map((entry) => ({ label: entry, value: entry }))}
        value={filter}
        onChange={(next) => setFilter(next as (typeof workFilters)[number])}
        ariaLabel="Filter work by category"
      />

      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((item) => (
          <motion.div
            key={item.slug}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="group overflow-hidden">
              <Link href={`/work/${item.slug}`} className="block">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="space-y-3 p-5">
                  <div className="flex items-center justify-between">
                    <Badge>{item.category}</Badge>
                    <span className="text-xs text-muted-foreground">{item.year}</span>
                  </div>
                  <h3 className="font-display text-2xl">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Link>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
