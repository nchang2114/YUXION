import Link from "next/link";
import { buttonStyles } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container-pad grid min-h-[60vh] place-items-center py-16 text-center">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">404</p>
        <h1 className="mt-3 font-display text-5xl">Page Not Found</h1>
        <p className="mt-3 text-muted-foreground">
          The page you requested does not exist.
        </p>
        <Link href="/" className={buttonStyles({ className: "mt-6 inline-flex" })}>
          Back Home
        </Link>
      </div>
    </section>
  );
}
