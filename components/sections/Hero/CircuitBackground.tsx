"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { runCircuitPulse } from "@/lib/animations/circuit";

/** Track geometry lifted verbatim from Hero_Section.svg. */
const TRACKS = [
  "M1440 404.765H1195.01C1186.72 404.765 1180.01 411.481 1180.01 419.765V502C1180.01 510.284 1173.29 517 1165.01 517H320.166C311.881 517 305.166 510.284 305.166 502V419.765C305.166 411.481 298.45 404.765 290.166 404.765H169.089C160.804 404.765 154.089 398.049 154.089 389.765V293C154.089 284.716 147.373 278 139.089 278H6.49095e-05",
  "M1440 705.765H1195.01C1186.72 705.765 1180.01 712.481 1180.01 720.765V803C1180.01 811.284 1173.29 818 1165.01 818H320.166C311.881 818 305.166 811.284 305.166 803V720.765C305.166 712.481 298.45 705.765 290.166 705.765H169.089C160.804 705.765 154.089 699.049 154.089 690.765V594C154.089 585.716 147.373 579 139.089 579H0.00012207",
  "M1180.01 111.765C1180.01 -56.738 1180.01 410.854 1180.01 501.564C1180.01 509.848 1173.29 516.5 1165.01 516.5H739.5H320.166C311.881 516.5 305.166 509.784 305.166 501.5V126.765C305.166 118.481 298.45 111.765 290.166 111.765H169.088C160.804 111.765 154.089 105.049 154.089 96.7652V5.18962e-06C154.089 -8.28427 147.373 -15 139.089 -15H0",
  "M1179.83 -303V86.7348C1179.83 95.0191 1186.55 101.735 1194.83 101.735H1315.91C1324.2 101.735 1330.91 108.451 1330.91 116.735V213.5C1330.91 221.784 1337.63 228.5 1345.91 228.5H1485",
];

const NODES = [
  [1302, 404],
  [1180, 71],
  [305, 148.5],
  [305, 798.5],
  [154, 373],
];

export function CircuitBackground() {
  const pulseRefs = useRef<(SVGPathElement | null)[]>([]);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const tweens = pulseRefs.current
      .filter(Boolean)
      .map((p, i) =>
        runCircuitPulse(p as SVGPathElement, {
          duration: 3 + i * 0.6,
          delay: i * 0.5,
        }),
      );
    return () => tweens.forEach((t) => t.kill());
  }, [reduced]);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 select-none"
    >
      {/* atmospheric glow blob behind the hero (cheap: static, blurred once) */}
      <div className="absolute left-1/2 top-40 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <svg
        viewBox="0 -310 1485 1140"
        className="h-auto w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {TRACKS.map((d, i) => (
          <g key={i}>
            <path
              d={d}
              stroke="var(--circuit-track)"
              strokeWidth={3}
              fill="none"
            />
            <path
              ref={(el) => {
                pulseRefs.current[i] = el;
              }}
              d={d}
              stroke="var(--circuit-pulse)"
              strokeWidth={3}
              fill="none"
              strokeLinecap="round"
              className="[filter:drop-shadow(0_0_6px_var(--circuit-pulse))]"
            />
          </g>
        ))}
        {NODES.map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={3}
            fill="var(--color-primary)"
            className="animate-node-pulse [filter:drop-shadow(0_0_5px_var(--circuit-pulse))]"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
