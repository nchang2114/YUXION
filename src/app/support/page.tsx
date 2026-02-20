"use client";

import { FormEvent, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SupportPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const applyExampleFill = () => {
    setForm({
      name: "Jane Doe",
      email: "jane.doe@example.com",
      subject: "Order #YX-2048 shipping update",
      message:
        "Hi YUXION support, I placed order #YX-2048 for the Frame Lounge Chair last week and wanted to confirm the estimated ship window and tracking handoff details. Thanks.",
    });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="container-pad py-16">
      <h1 className="font-display text-5xl">Contact Support</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Need help with a product order or project inquiry? Send details and our
        support desk will respond within one business day.
      </p>
      <button
        type="button"
        className="mt-4 inline-flex items-center rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:border-cyan-400/60 hover:text-foreground"
        onClick={applyExampleFill}
      >
        Use Example Fill
      </button>

      <Card className="mt-8 w-full p-6 md:p-8">
        <form className="grid gap-4" onSubmit={onSubmit}>
          <label htmlFor="support-name">
            Name
            <input
              id="support-name"
              className="mt-1 w-full"
              required
              placeholder="Jane Doe"
              value={form.name}
              onChange={(event) =>
                setForm((current) => ({ ...current, name: event.target.value }))
              }
            />
          </label>
          <label htmlFor="support-email">
            Email
            <input
              id="support-email"
              className="mt-1 w-full"
              type="email"
              required
              placeholder="jane.doe@example.com"
              value={form.email}
              onChange={(event) =>
                setForm((current) => ({ ...current, email: event.target.value }))
              }
            />
          </label>
          <label htmlFor="support-subject">
            Subject
            <input
              id="support-subject"
              className="mt-1 w-full"
              required
              placeholder="Order #YX-2048 shipping update"
              value={form.subject}
              onChange={(event) =>
                setForm((current) => ({ ...current, subject: event.target.value }))
              }
            />
          </label>
          <label htmlFor="support-message">
            Message
            <textarea
              id="support-message"
              className="mt-1 w-full"
              rows={7}
              required
              placeholder="Hi YUXION support, I need help with..."
              value={form.message}
              onChange={(event) =>
                setForm((current) => ({ ...current, message: event.target.value }))
              }
            />
          </label>
          <Button type="submit">Send Message</Button>
          {submitted ? (
            <p className="text-sm text-cyan-600 dark:text-cyan-400">
              Message submitted locally. This demo does not send external email.
            </p>
          ) : null}
        </form>
      </Card>
    </section>
  );
}
