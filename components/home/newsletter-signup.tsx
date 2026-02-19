"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) {
      return;
    }

    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="rounded-3xl border border-border bg-card/80 p-6 md:p-8">
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-500">Newsletter</p>
      <h2 className="mt-2 font-display text-3xl">Stay in the Loop</h2>
      <p className="mt-2 max-w-xl text-sm text-muted-foreground">
        Monthly updates on launches, behind-the-scenes process notes, and new
        product drops.
      </p>
      <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-2 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@studio.com"
          className="sm:flex-1"
        />
        <Button type="submit">Subscribe</Button>
      </form>
      {subscribed ? (
        <p className="mt-3 text-sm text-cyan-600 dark:text-cyan-400">
          Added locally. You are subscribed in this demo.
        </p>
      ) : null}
    </section>
  );
}
