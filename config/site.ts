export const siteConfig = {
  name: "Core Banking Platform",
  description: "A modern core banking platform.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  nav: [
    { label: "Security", href: "/security" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
