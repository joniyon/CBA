import { cn } from "@/lib/utils/cn";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-fg hover:brightness-110 shadow-[0_1px_2px_rgba(10,13,20,0.08),0_8px_24px_-12px_rgba(55,93,251,0.6)]",
  outline:
    "bg-surface text-fg border border-border hover:border-border-2 hover:bg-surface-2",
  ghost: "text-fg hover:bg-surface-2",
};

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium",
        "transition-all duration-200 ease-out active:scale-[0.98]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
