import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-500">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-sm text-muted-foreground md:text-base">{description}</p>
      ) : null}
    </div>
  );
}
