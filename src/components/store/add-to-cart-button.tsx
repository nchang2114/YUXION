"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { useCart } from "@/components/providers/cart-provider";
import { Button } from "@/components/ui/button";

type AddToCartButtonProps = {
  slug: string;
  title: string;
  image: string;
  price: number;
  category: string;
};

export function AddToCartButton({
  slug,
  title,
  image,
  price,
  category,
}: AddToCartButtonProps) {
  const { addItem, openCart } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <Button
      className="w-full"
      onClick={() => {
        addItem({ slug, title, image, price, category });
        openCart();
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1400);
      }}
      aria-label={`Add ${title} to cart`}
    >
      {added ? (
        <span className="inline-flex items-center gap-1">
          <Check className="h-4 w-4" /> Added
        </span>
      ) : (
        "Add to cart"
      )}
    </Button>
  );
}
