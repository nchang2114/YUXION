"use client";

import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/shared/page-transition";
import { CartDrawer } from "@/components/store/cart-drawer";
import { CommandPalette } from "@/components/ui/command-palette";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <PageTransition>{children}</PageTransition>
      <Footer />
      <CartDrawer />
      <CommandPalette />
    </div>
  );
}
