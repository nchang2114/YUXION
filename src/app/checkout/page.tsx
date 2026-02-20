"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  ChevronDown,
  CircleHelp,
  LockKeyhole,
  Search,
  Smartphone,
  Tag,
} from "lucide-react";
import { useCart } from "@/components/providers/cart-provider";

function formatAud(value: number) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function CheckoutField({
  label,
  placeholder,
  rightIcon,
}: {
  label?: string;
  placeholder: string;
  rightIcon?: React.ReactNode;
}) {
  return (
    <label className="flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-2.5">
      <div className="min-w-0 flex-1">
        {label ? (
          <p className="text-[11px] leading-none text-muted-foreground">{label}</p>
        ) : null}
        <input
          className="mt-0.5 w-full border-0 bg-transparent p-0 text-[15px] font-medium text-foreground placeholder:text-muted-foreground/90 focus:border-0 focus:ring-0"
          placeholder={placeholder}
        />
      </div>
      {rightIcon}
    </label>
  );
}

export default function CheckoutPage() {
  const { items, subtotal } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(true);
  const [shippingAsBilling, setShippingAsBilling] = useState(false);
  const firstItem = items[0];
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = subtotal || 49;
  const sectionHeadingClass = "text-2xl font-semibold tracking-tight";
  const subheadingClass = "text-xl font-semibold tracking-tight";

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="container-pad py-10 md:py-14">
      <form className="mx-auto w-[min(92vw,34rem)] space-y-10 md:w-[min(72vw,36rem)]" onSubmit={onSubmit}>
        <section>
          <div className="mb-4 flex items-end justify-between gap-3">
            <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>
            <Link href="/support" className="text-sm text-foreground/80 underline hover:text-foreground md:text-base">
              Sign in
            </Link>
          </div>

          <label className="block">
            <span className="sr-only">Email</span>
            <input
              type="email"
              required
              placeholder="Email"
              className="h-11 w-full rounded-lg border border-border bg-card px-3.5 text-[14px]"
            />
          </label>

          <label className="mt-3 flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={marketingOptIn}
              onChange={(event) => setMarketingOptIn(event.target.checked)}
              className="h-4 w-4 rounded border border-border accent-zinc-800"
            />
            Email me with news and offers
          </label>
        </section>

        <section>
          <h2 className={sectionHeadingClass}>Delivery</h2>
          <div className="mt-4 space-y-3">
            <label className="flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-2.5">
              <div className="min-w-0 flex-1">
                <p className="text-[11px] leading-none text-muted-foreground">Country/Region</p>
                <p className="mt-0.5 text-[15px] font-medium">Australia</p>
              </div>
              <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
            </label>

            <div className="grid gap-3 md:grid-cols-2">
              <CheckoutField placeholder="First name" />
              <CheckoutField placeholder="Last name" />
            </div>

            <CheckoutField placeholder="Address" rightIcon={<Search className="h-4 w-4 text-muted-foreground" />} />
            <CheckoutField placeholder="Apartment, suite, etc. (optional)" />

            <div className="grid gap-3 md:grid-cols-3">
              <CheckoutField placeholder="Suburb" />
              <label className="flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-2.5">
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] leading-none text-muted-foreground">State/territory</p>
                  <p className="mt-0.5 text-[15px] font-medium">New South Wales</p>
                </div>
                <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
              </label>
              <CheckoutField placeholder="Postcode" />
            </div>

            <CheckoutField
              placeholder="Phone"
              rightIcon={<CircleHelp className="h-4 w-4 text-muted-foreground" />}
            />

            <div className="pt-2">
              <h3 className={subheadingClass}>Shipping method</h3>
              <div className="mt-3 rounded-lg border border-border bg-muted px-5 py-4 text-center text-[13px] text-muted-foreground">
                Enter your shipping address to view available shipping methods.
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className={sectionHeadingClass}>Payment</h2>
          <p className="mt-1.5 text-sm text-muted-foreground">All transactions are secure and encrypted.</p>

          <div className="mt-4 overflow-hidden rounded-lg border border-foreground/50 bg-card">
            <div className="flex items-center justify-between border-b border-foreground/50 px-4 py-4">
              <p className="text-base font-medium">Credit card</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="rounded border border-border bg-background px-2.5 py-1">VISA</span>
                <span className="rounded border border-border bg-background px-2.5 py-1">MC</span>
                <span className="rounded border border-border bg-background px-2.5 py-1">AMEX</span>
                <span className="rounded border border-border bg-background px-2.5 py-1">+5</span>
              </div>
            </div>

            <div className="space-y-3 p-4">
              <CheckoutField
                placeholder="Card number"
                rightIcon={<LockKeyhole className="h-4 w-4 text-muted-foreground" />}
              />
              <div className="grid gap-3 md:grid-cols-2">
                <CheckoutField placeholder="Expiration date (MM / YY)" />
                <CheckoutField
                  placeholder="Security code"
                  rightIcon={<CircleHelp className="h-4 w-4 text-muted-foreground" />}
                />
              </div>
              <CheckoutField placeholder="Name on card" />

              <label className="mt-1 flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={shippingAsBilling}
                  onChange={(event) => setShippingAsBilling(event.target.checked)}
                  className="h-4 w-4 rounded border border-border accent-zinc-800"
                />
                Use shipping address as billing address
              </label>

              <h3 className={`mt-5 ${subheadingClass}`}>Billing address</h3>
              <label className="flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-2.5">
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] leading-none text-muted-foreground">Country/Region</p>
                  <p className="mt-0.5 text-[15px] font-medium">Australia</p>
                </div>
                <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
              </label>
              <div className="grid gap-3 md:grid-cols-2">
                <CheckoutField placeholder="First name" />
                <CheckoutField placeholder="Last name" />
              </div>
              <CheckoutField placeholder="Address" rightIcon={<Search className="h-4 w-4 text-muted-foreground" />} />
              <CheckoutField placeholder="Apartment, suite, etc. (optional)" />
              <div className="grid gap-3 md:grid-cols-3">
                <CheckoutField placeholder="Suburb" />
                <label className="flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-2.5">
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] leading-none text-muted-foreground">State/territory</p>
                    <p className="mt-0.5 text-[15px] font-medium">New South Wales</p>
                  </div>
                  <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                </label>
                <CheckoutField placeholder="Postcode" />
              </div>
              <CheckoutField
                placeholder="Phone (optional)"
                rightIcon={<CircleHelp className="h-4 w-4 text-muted-foreground" />}
              />
            </div>
          </div>

          <div className="mt-8 space-y-3 border-t border-border/70 pt-7">
            <h3 className={`${subheadingClass} leading-tight`}>Save my information for a faster checkout</h3>
            <label className="flex items-center gap-3 rounded-lg border border-border bg-card px-3.5 py-2.5">
              <Smartphone className="h-4 w-4 text-muted-foreground" />
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground">Mobile phone (optional)</p>
                <input
                  className="w-full border-0 bg-transparent p-0 text-[15px] font-medium focus:border-0 focus:ring-0"
                  placeholder="+61"
                />
              </div>
            </label>
            <p className="max-w-4xl text-xs text-muted-foreground">
              By providing your phone number, you agree to create a Shop account subject to Shop&apos;s{" "}
              <Link href="/tos" className="underline">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div className="mt-9 space-y-5 border-t border-border/70 pt-7">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-base font-semibold tracking-tight"
            >
              <Tag className="h-4 w-4" />
              Add discount
            </button>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-lg border border-border bg-card">
                  {firstItem ? (
                    <Image src={firstItem.image} alt={firstItem.title} fill className="object-cover" />
                  ) : null}
                </div>
                <div>
                  <p className="text-2xl font-semibold leading-none tracking-tight">Total</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {itemCount || 1} item{(itemCount || 1) > 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="rounded-full bg-muted px-2.5 py-1 text-[10px] font-semibold text-muted-foreground">
                  AUD
                </span>
                <p className="text-3xl font-semibold tracking-tight">{formatAud(total)}</p>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            <button
              type="submit"
              className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-lg bg-zinc-800 text-base font-semibold text-white transition-colors hover:bg-zinc-700"
            >
              Pay now
            </button>
            {submitted ? (
              <p className="mt-3 text-sm text-cyan-600 dark:text-cyan-400">
                Demo only. No payment was processed.
              </p>
            ) : null}
          </div>
        </section>
      </form>
    </section>
  );
}
