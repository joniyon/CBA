import { cn } from "@/lib/utils/cn";

/**
 * Wrapper every section uses for consistent vertical rhythm (section token)
 * and a stable scroll anchor id. Structural only — no visual styling.
 */
export function Section({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-section", className)}>
      {children}
    </section>
  );
}
