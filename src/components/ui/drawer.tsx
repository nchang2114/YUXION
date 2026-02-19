"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

type DrawerProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

export function Drawer({ open, onClose, title, children }: DrawerProps) {
  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-50" aria-modal="true" role="dialog">
          <motion.button
            aria-label="Close drawer"
            type="button"
            className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-border bg-background shadow-2xl"
          >
            <header className="flex items-center justify-between border-b border-border px-5 py-4">
              <h2 className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                {title}
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full px-2 py-1 text-sm text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
              >
                Close
              </button>
            </header>
            <div className="min-h-0 flex-1 overflow-y-auto p-5">{children}</div>
          </motion.aside>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
