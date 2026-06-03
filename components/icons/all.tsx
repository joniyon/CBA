import type { SVGProps } from "react";

/**
 * Inline icon set matching the design. All use `currentColor` so they inherit
 * color from the token system. When your own icon SVGs arrive, drop them in
 * public/icons-src and `npm run icons` to replace these.
 */
type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const SparkleIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
  </svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ChevronDownIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

/* ---- Tool icons ---- */

export const CreditScoreIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 12a9 9 0 0118 0" />
    <path d="M12 12l4-2" />
    <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
  </svg>
);

export const CoreBankingIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 10l8-5 8 5" />
    <path d="M5 10v8M9 10v8M15 10v8M19 10v8" />
    <path d="M3 21h18" />
  </svg>
);

export const AgentIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20a6 6 0 0112 0" />
    <path d="M16 7a3 3 0 010 6M19 20a6 6 0 00-3.5-5.4" />
  </svg>
);

export const InsuranceIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3l7 3v5c0 4.4-3 8.3-7 10-4-1.7-7-5.6-7-10V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const ReportIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M21 12a9 9 0 11-9-9v9h9z" />
    <path d="M12 3a9 9 0 019 9" opacity="0.4" />
  </svg>
);

export const ShieldIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3l7 3v6c0 4-3 7.4-7 9-4-1.6-7-5-7-9V6l7-3z" />
    <path d="M12 8v4M12 15.5h.01" />
  </svg>
);


export { Logo, LogoMark } from "./Logo";
