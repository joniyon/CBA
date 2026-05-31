import { sections } from "@/config/sections";

/**
 * The home page renders sections in the order defined by config/sections.ts.
 * The registry is intentionally empty — each section is added as we build it.
 */
export default function HomePage() {
  return (
    <main>
      {sections.map(({ id, Component }) => (
        <Component key={id} />
      ))}
    </main>
  );
}
