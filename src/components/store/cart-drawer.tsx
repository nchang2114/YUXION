"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Drawer } from "@/components/ui/drawer";
import { Button, buttonStyles } from "@/components/ui/button";
import { useCart } from "@/components/providers/cart-provider";
import { formatCurrency } from "@/lib/utils";

export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    subtotal,
    removeItem,
    updateQuantity,
    clearCart,
  } = useCart();

  return (
    <Drawer open={isOpen} onClose={closeCart} title="Cart">
      {items.length === 0 ? (
        <div className="grid h-full place-items-center text-center">
          <div>
            <p className="text-sm text-muted-foreground">Your cart is empty.</p>
            <Button className="mt-4" onClick={closeCart}>
              Continue Browsing
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex h-full flex-col">
          <ul className="space-y-3">
            {items.map((item) => (
              <li
                key={item.slug}
                className="rounded-xl border border-border p-3"
                aria-label={`${item.title} in cart`}
              >
                <div className="flex gap-3">
                  <div className="relative h-16 w-16 overflow-hidden rounded-lg border border-border">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.category}</p>
                    <p className="mt-1 text-sm">{formatCurrency(item.price)}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        aria-label={`Decrease ${item.title} quantity`}
                        className="rounded-md border border-border p-1"
                        onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-6 text-center text-sm">{item.quantity}</span>
                      <button
                        type="button"
                        aria-label={`Increase ${item.title} quantity`}
                        className="rounded-md border border-border p-1"
                        onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                      <button
                        type="button"
                        aria-label={`Remove ${item.title} from cart`}
                        className="ml-auto rounded-md p-1 text-muted-foreground hover:text-red-500"
                        onClick={() => removeItem(item.slug)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-auto space-y-3 border-t border-border pt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">{formatCurrency(subtotal)}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="secondary" onClick={clearCart}>
                Clear
              </Button>
              <Link
                href="/checkout"
                onClick={closeCart}
                className={buttonStyles({ className: "w-full" })}
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </Drawer>
  );
}
