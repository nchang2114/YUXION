import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonStylesProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: ButtonStylesProps = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl border font-semibold tracking-tight transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-px disabled:pointer-events-none disabled:opacity-45",
    variant === "primary" &&
      "border-blue-600/70 bg-blue-500/30 text-blue-950 shadow-[0_10px_20px_-18px_rgba(15,23,42,0.55)] hover:border-blue-700/80 hover:bg-blue-500/42 hover:text-blue-950 dark:border-blue-400/70 dark:bg-blue-500/34 dark:text-blue-50 dark:hover:border-blue-300/75 dark:hover:bg-blue-500/46",
    variant === "secondary" &&
      "border-slate-300/85 bg-white/76 text-slate-900 shadow-[0_10px_20px_-18px_rgba(15,23,42,0.4)] hover:border-slate-400/85 hover:bg-white/90 dark:border-slate-600/75 dark:bg-slate-800/68 dark:text-slate-100 dark:hover:border-slate-500/80 dark:hover:bg-slate-800/82",
    variant === "ghost" &&
      "border-transparent bg-transparent text-foreground/75 shadow-none hover:bg-foreground/6 hover:text-foreground",
    size === "sm" && "h-9 px-4 text-sm",
    size === "md" && "h-10 px-5 text-sm",
    size === "lg" && "h-11 px-6 text-base",
    className,
  );
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonStyles({ variant, size, className })}
      {...props}
    />
  );
}
