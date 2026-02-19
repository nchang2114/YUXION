"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { useCart } from "@/components/providers/cart-provider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="container-pad py-16">
      <h1 className="font-display text-5xl">Checkout</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Demo checkout only. No payment is processed.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <Card className="p-6">
          <h2 className="font-display text-3xl">Shipping Details</h2>
          <form className="mt-5 grid gap-3" onSubmit={onSubmit}>
            <label>
              Full name
              <input required name="name" className="mt-1 w-full" />
            </label>
            <label>
              Email
              <input required name="email" type="email" className="mt-1 w-full" />
            </label>
            <label>
              Address
              <input required name="address" className="mt-1 w-full" />
            </label>
            <div className="grid gap-3 sm:grid-cols-2">
              <label>
                City
                <input required name="city" className="mt-1 w-full" />
              </label>
              <label>
                ZIP
                <input required name="zip" className="mt-1 w-full" />
              </label>
            </div>
            <label>
              Notes
              <textarea name="notes" rows={4} className="mt-1 w-full" />
            </label>
            <Button type="submit" className="mt-2">
              Place Mock Order
            </Button>
            {submitted ? (
              <p className="text-sm text-cyan-600 dark:text-cyan-400">
                Mock order created. Thank you.
              </p>
            ) : null}
          </form>
        </Card>

        <Card className="p-6">
          <h2 className="font-display text-3xl">Order Summary</h2>
          {items.length ? (
            <ul className="mt-4 space-y-3">
              {items.map((item) => (
                <li key={item.slug} className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-lg border border-border">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground">Qty {item.quantity}</p>
                  </div>
                  <p className="text-sm">
                    {formatCurrency(item.price * item.quantity)}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-sm text-muted-foreground">Your cart is empty.</p>
          )}

          <div className="mt-5 border-t border-border pt-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Subtotal</p>
              <p className="font-medium">{formatCurrency(subtotal)}</p>
            </div>
            <Button
              variant="secondary"
              className="mt-4 w-full"
              onClick={clearCart}
              disabled={!items.length}
            >
              Clear Cart
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
