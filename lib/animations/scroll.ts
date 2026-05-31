"use client";

import { gsap, ScrollTrigger } from "./gsap";

/**
 * Helpers for section-to-section scroll choreography. Build out concrete
 * timelines here as sections are added (pinning, parallax, path draws, etc.).
 */

/** Pin an element while its section scrolls past. */
export function pinSection(target: Element, endVh = 100) {
  return ScrollTrigger.create({
    trigger: target,
    start: "top top",
    end: `+=${endVh}%`,
    pin: true,
    pinSpacing: true,
  });
}

export { gsap, ScrollTrigger };
