"use client";

import { gsap } from "./gsap";

/**
 * Hero circuit-pulse animation.
 *
 * The blue pulses follow the EXACT track geometry extracted from the source
 * SVG (public/assets/sections/hero-circuit.svg). Technique:
 *
 *  - Each <path class="track"> is drawn once as the static rail (--circuit-track).
 *  - A duplicate "pulse" path sits on top, stroked with --circuit-pulse, and is
 *    turned into a short travelling dash via stroke-dasharray. Animating
 *    stroke-dashoffset moves that dash along the path — smooth because it only
 *    touches a single compositable property and respects the path's curvature.
 *  - getTotalLength() gives the exact run length per track so speed is uniform
 *    regardless of track length, and the glowing node (#375DFB) pulses when the
 *    dash arrives.
 *
 * Gated by reduced-motion at the call site (useReducedMotion); when reduced,
 * the rails render static with no travelling pulse.
 */
export function runCircuitPulse(
  pulse: SVGPathElement,
  opts: { duration?: number; dash?: number; delay?: number } = {},
) {
  const len = pulse.getTotalLength();
  const dash = opts.dash ?? Math.min(120, len * 0.18);
  gsap.set(pulse, { strokeDasharray: `${dash} ${len}`, strokeDashoffset: len });
  return gsap.to(pulse, {
    strokeDashoffset: -dash,
    duration: opts.duration ?? 3.2,
    delay: opts.delay ?? 0,
    ease: "none",
    repeat: -1,
  });
}
