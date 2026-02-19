"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, ShoppingBag, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/components/providers/cart-provider";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/studio", label: "Studio" },
  { href: "/store", label: "Store" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    if (href === "/store") {
      return (
        pathname.startsWith("/store") ||
        pathname.startsWith("/shop") ||
        pathname.startsWith("/checkout")
      );
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="flex h-16 w-full items-center justify-between px-6 md:px-8 lg:px-10">
        <Link href="/" className="font-display text-2xl tracking-tight">
          YUXION
        </Link>

        <nav aria-label="Primary" className="hidden md:flex">
          <div className="flex items-center gap-1 rounded-full border border-cyan-400/20 bg-card/55 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_10px_28px_rgba(0,0,0,0.12)] backdrop-blur-md">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {active ? (
                    <>
                      <motion.span
                        layoutId="nav-active-pill"
                        transition={{ type: "spring", stiffness: 460, damping: 36 }}
                        className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-cyan-400/28 via-cyan-300/14 to-transparent shadow-[0_0_0_1px_rgba(34,211,238,0.3),0_0_24px_rgba(34,211,238,0.28)]"
                      />
                      <motion.span
                        layoutId="nav-active-line"
                        transition={{ type: "spring", stiffness: 520, damping: 40 }}
                        className="pointer-events-none absolute -bottom-1 left-3 right-3 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
                      />
                    </>
                  ) : null}
                  <span className="inline-flex items-center">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            className="rounded-full border border-border px-3 py-2 text-xs text-muted-foreground"
            aria-label="Open command palette"
            onClick={() => window.dispatchEvent(new Event("yuxion-command-palette"))}
          >
            Cmd+K
          </button>
          <ThemeToggle />
          <button
            type="button"
            onClick={openCart}
            className="relative rounded-full border border-border p-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-4 w-4" />
            {itemCount > 0 ? (
              <span className="absolute -right-1 -top-1 rounded-full bg-cyan-400 px-1.5 py-0.5 text-[10px] font-semibold text-black">
                {itemCount}
              </span>
            ) : null}
          </button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-foreground transition-colors hover:bg-foreground/5 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border px-6 pb-5 pt-3 md:hidden">
          <nav aria-label="Mobile navigation" className="grid gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-foreground/5 hover:text-foreground",
                    active &&
                      "bg-foreground/8 text-foreground before:absolute before:left-1 before:top-1/2 before:h-5 before:w-0.5 before:-translate-y-1/2 before:rounded-full before:bg-cyan-400",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-3 flex items-center justify-between gap-2">
            <ThemeToggle />
            <Button
              variant="secondary"
              className="flex-1"
              onClick={() => {
                openCart();
                setOpen(false);
              }}
            >
              Cart ({itemCount})
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
