import { cn } from "@/lib/utils/cn";

/** Centers content and applies the gutter token. Structural only. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-gutter", className)}>
      {children}
    </div>
  );
}
