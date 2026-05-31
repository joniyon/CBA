import type { ComponentType } from "react";

/** Shape every home-page section conforms to. */
export type SectionDef = {
  id: string;
  Component: ComponentType;
};

/**
 * Section registry — the single place that controls what renders on the
 * home page and in what order. Add a section here once it's built, e.g.:
 *
 *   import { Hero } from "@/components/sections/Hero";
 *   export const sections: SectionDef[] = [{ id: "hero", Component: Hero }];
 */
export const sections: SectionDef[] = [];
