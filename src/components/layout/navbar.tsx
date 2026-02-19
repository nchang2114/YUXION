"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, ShoppingBag, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/components/providers/cart-provider";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/founder", label: "Founder" },
  { href: "/store", label: "Store" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const { itemCount, openCart } = useCart();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

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
    <header
      ref={navRef}
      className="sticky top-0 z-40 border-b border-border/70 bg-background"
    >
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

        <motion.button
          type="button"
          className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-foreground transition-colors md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="pointer-events-none absolute inset-0 inline-flex items-center justify-center"
            initial={{ opacity: 1, scale: 1, rotate: 0 }}
            animate={{ opacity: open ? 0 : 1, scale: open ? 0.82 : 1, rotate: open ? -20 : 0 }}
            transition={{ duration: 0.11, ease: [0.2, 0.9, 0.3, 1] }}
          >
            <Menu size={20} aria-hidden="true" />
          </motion.span>
          <motion.span
            className="pointer-events-none absolute inset-0 inline-flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.82, rotate: 20 }}
            animate={{ opacity: open ? 1 : 0, scale: open ? 1 : 0.82, rotate: open ? 0 : 20 }}
            transition={{ duration: 0.11, ease: [0.2, 0.9, 0.3, 1] }}
          >
            <X size={20} aria-hidden="true" />
          </motion.span>
        </motion.button>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="mobile-nav-dropdown"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.23, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full z-50 overflow-hidden border-y border-border bg-background pb-5 pt-3 shadow-lg md:hidden"
            aria-hidden={!open}
          >
            <nav aria-label="Mobile navigation" className="grid w-full gap-1">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative block w-full rounded-none px-6 py-2.5 text-base font-semibold uppercase tracking-[0.02em] text-foreground/85 transition-colors hover:bg-foreground/7 hover:text-foreground dark:text-foreground/90 dark:hover:bg-foreground/12",
                      active &&
                        "bg-foreground/10 text-foreground before:absolute before:left-3 before:top-1/2 before:h-5 before:w-0.5 before:-translate-y-1/2 before:rounded-none before:bg-cyan-400 dark:bg-foreground/16",
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-3 flex items-center justify-between gap-2 px-6">
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
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
