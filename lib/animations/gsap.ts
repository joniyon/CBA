"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Registers GSAP plugins exactly once. Import { gsap, ScrollTrigger }
 * from here rather than from "gsap" directly so registration is guaranteed.
 */
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
