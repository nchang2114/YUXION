import Link from "next/link";

const footerLinks = [
  { href: "/support", label: "Contact Support" },
  { href: "/faqs", label: "FAQ's" },
  { href: "/tos", label: "ToS" },
  { href: "/privacy", label: "Privacy Policy" },
];

const socials = ["Instagram", "X", "YouTube", "LinkedIn"];

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-card/50">
      <div className="grid w-full gap-8 px-6 py-12 md:grid-cols-3 md:px-8 lg:px-10">
        <div>
          <p className="font-display text-3xl">YUXION</p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Games, apps, film, and designed objects built with craft and
            technical rigor.
          </p>
        </div>
        <div>
          <h2 className="text-sm uppercase tracking-[0.16em] text-muted-foreground">
            Links
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-cyan-500">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm uppercase tracking-[0.16em] text-muted-foreground">
            Social
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {socials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
