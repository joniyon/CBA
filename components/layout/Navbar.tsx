"use client";

import { Logo, ChevronDownIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";

const links = [
  { label: "Why Chaincore", dropdown: true },
  { label: "Company", dropdown: true },
  { label: "Blog", dropdown: false },
];

export function Navbar() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-gutter">
      <nav className="pointer-events-auto flex items-center gap-6 rounded-full border border-border bg-surface/80 px-3 py-2 pl-5 shadow-[0_8px_30px_-12px_rgba(10,13,20,0.18)] backdrop-blur-xl">
        <a href="/" className="flex items-center text-fg" aria-label="ChainCore home">
          <Logo className="h-6 w-auto" />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <button className="flex items-center gap-1 rounded-md px-3 py-1.5 text-sm text-muted transition-colors hover:text-fg">
                {l.label}
                {l.dropdown && <ChevronDownIcon className="h-3.5 w-3.5" />}
              </button>
            </li>
          ))}
        </ul>

        <Button variant="outline" className="rounded-full py-2">
          Talk to Sales
        </Button>
      </nav>
    </header>
  );
}
