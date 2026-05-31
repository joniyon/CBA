import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";
import "./globals.css";

// FONTS: choose a distinctive display + refined body font when the design is set.
// Wire them with next/font and expose as --font-display / --font-body, e.g.:
//   const display = LocalFont({ variable: "--font-display", src: "..." });
// then add display.variable to <html className>.

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
