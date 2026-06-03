import { Banner } from "@/components/sections/Banner";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { Tools } from "@/components/sections/Tools";

/**
 * The home page renders sections in the order defined by config/sections.ts.
 * The registry is intentionally empty — each section is added as we build it.
 */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <Mission />
      <Tools />
      <Banner />
    </main>
  );
}
