import { Accordion } from "@/components/ui/accordion";

export default function FaqPage() {
  return (
    <section className="container-pad py-16">
      <h1 className="font-display text-5xl">FAQ&apos;s</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Common questions about Yuxion services, products, and fulfillment.
      </p>
      <div className="mt-8 max-w-3xl">
        <Accordion
          items={[
            {
              id: "lead-time",
              title: "What is the typical timeline for studio engagements?",
              content:
                "Most engagements run 8-16 weeks depending on complexity and production scope.",
            },
            {
              id: "shipping",
              title: "Where do you ship store products?",
              content:
                "We ship worldwide for most object and fashion categories. Furniture shipping is currently US-focused.",
            },
            {
              id: "support",
              title: "How quickly does support reply?",
              content:
                "Our support target is one business day for all order and account requests.",
            },
          ]}
        />
      </div>
    </section>
  );
}
