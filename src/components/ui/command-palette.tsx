"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/founder", label: "Founder" },
  { href: "/store", label: "Store" },
  { href: "/support", label: "Support" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const isOpenShortcut = (event.metaKey || event.ctrlKey) && event.key === "k";
      if (!isOpenShortcut) {
        if (event.key === "Escape") {
          setOpen(false);
        }
        return;
      }

      event.preventDefault();
      setOpen((prev) => !prev);
    };
    const onOpen = () => setOpen(true);

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("yuxion-command-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("yuxion-command-palette", onOpen);
    };
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) {
      return links;
    }

    return links.filter((link) =>
      link.label.toLowerCase().includes(query.trim().toLowerCase()),
    );
  }, [query]);

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-50">
          <motion.button
            type="button"
            aria-label="Close command palette"
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 top-20 w-[min(95vw,38rem)] -translate-x-1/2 rounded-2xl border border-border bg-background/95 p-3 shadow-2xl backdrop-blur"
          >
            <label className="mb-2 flex items-center gap-2 rounded-xl border border-border px-3 py-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search navigation..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </label>
            <ul className="space-y-1">
              {results.length ? (
                results.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-sm hover:bg-foreground/5"
                      onClick={() => {
                        setOpen(false);
                        setQuery("");
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))
              ) : (
                <li className="px-3 py-2 text-sm text-muted-foreground">No results.</li>
              )}
            </ul>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
