"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "@/lib/hooks/useInView";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

const skeleton = "h-2 rounded-full bg-border";

/* ---- 01 · Clients: scanning highlight + Active badge pulse ---- */
export function ClientsMock() {
  return (
    <div className="relative w-[78%] overflow-hidden rounded-lg bg-surface p-4 shadow-[0_12px_40px_-16px_rgba(10,13,20,0.25)]">
      <div className="absolute inset-0 animate-sweep bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      <div className="relative">
        <p className="mb-3 text-[13px] font-semibold text-fg">Clients</p>
        <p className="mb-3 text-[10px] text-muted-2">
          ‹ Go Back · Clients · <span className="text-primary">Chinedu Temitope</span>
        </p>
        <div className="mb-3 flex gap-3 border-b border-border pb-2 text-[10px]">
          <span className="border-b-2 border-primary pb-2 font-medium text-fg">
            Client Overview
          </span>
          <span className={`${skeleton} mt-1 w-12`} />
          <span className={`${skeleton} mt-1 w-10`} />
        </div>
        <div className="mb-3 flex items-center gap-2 rounded-md border border-border p-2">
          <div className="h-6 w-6 rounded-full bg-primary-200" />
          <span className="text-[11px] font-medium text-fg">Chinedu Temitope</span>
          <span className="ml-auto animate-soft-pulse rounded-full bg-success/15 px-2 py-0.5 text-[9px] font-semibold text-success">
            Active
          </span>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
          {["First Name", "Middle Name", "Email Address", "Phone Number"].map((l) => (
            <div key={l}>
              <p className="mb-1 text-[8px] text-muted-2">{l}</p>
              <span className={`${skeleton} block w-full`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---- 02 · Credit score: count-up + bar fill + check ticks ---- */
export function CreditScoreMock() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const reduced = useReducedMotion();
  const [score, setScore] = useState(reduced ? 600 : 0);

  useEffect(() => {
    if (!inView || reduced) return;
    let raf = 0;
    const loop = () => {
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min((t - start) / 1800, 1);
        setScore(Math.round(600 * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
        else setTimeout(() => (raf = requestAnimationFrame(loop)), 1400);
      };
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced]);

  const pct = (score / 700) * 100;

  return (
    <div ref={ref} className="w-[82%] rounded-lg bg-surface p-4 shadow-[0_12px_40px_-16px_rgba(10,13,20,0.25)]">
      <div className="mb-3 flex items-center justify-between border-b border-border pb-3">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-primary-200" />
          <span className="text-[11px] font-medium text-fg">Chinedu Temitope</span>
        </div>
        <span className="text-[10px] text-muted-2">Credit Score</span>
      </div>
      <div className="mb-3 flex gap-4 text-[9px] text-muted-2">
        <span>Payment History</span>
        <span>Loan History</span>
      </div>
      <div className="mb-3 inline-flex items-center gap-1 rounded-full border border-primary/30 px-2 py-1 text-[9px] font-medium text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        Analyze Credit score with AI
      </div>
      <div className="mb-2 flex items-baseline gap-1">
        <span className="text-[10px] font-medium text-muted">Credit Score Result</span>
        <span className="ml-auto text-lg font-semibold text-fg tabular-nums">{score}</span>
        <span className="text-[10px] text-muted-2">/ 700</span>
      </div>
      <div className="mb-2 flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-1.5 flex-1 rounded-full transition-colors duration-500"
            style={{ background: pct > i * 33 ? "var(--color-primary)" : "var(--color-border)" }}
          />
        ))}
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-300 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

/* ---- 03 · Disbursement: pulses flow Bank → recipients ---- */
export function DisbursementMock() {
  const recipients = [
    { name: "Shittu Fejiro", on: true },
    { name: "Sherifat Umar", on: true },
    { name: "Ahmed Chizoba", on: false },
  ];
  return (
    <div className="flex w-[88%] items-center gap-3">
      <div className="w-1/2 rounded-lg bg-surface p-3 shadow-[0_12px_40px_-16px_rgba(10,13,20,0.25)]">
        <p className="mb-2 text-[11px] font-semibold text-fg">🏦 Bank</p>
        <div className="space-y-2">
          {["Loan 1 Disbursed", "Loan 2 Disbursed"].map((l) => (
            <div key={l}>
              <p className="text-[8px] text-muted-2">{l}</p>
              <span className="mt-1 block h-1.5 w-full rounded-full bg-border" />
            </div>
          ))}
        </div>
      </div>
      <svg viewBox="0 0 40 80" className="h-20 w-10 shrink-0" fill="none">
        {[18, 40, 62].map((y, i) => (
          <path
            key={i}
            d={`M0 12 C 18 12, 22 ${y}, 40 ${y}`}
            stroke="var(--circuit-track)"
            strokeWidth={1.5}
            className="[stroke-dasharray:5_120] animate-flow"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </svg>
      <div className="w-1/2 space-y-1.5">
        {recipients.map((r) => (
          <div key={r.name} className="flex items-center gap-1.5 rounded-md bg-surface p-1.5 shadow-sm">
            <div className="h-4 w-4 rounded-full bg-primary-200" />
            <span className={`text-[9px] ${r.on ? "text-fg" : "text-muted-2"}`}>{r.name}</span>
            <span
              className={`ml-auto h-2 w-2 rounded-full ${r.on ? "animate-soft-pulse bg-success" : "bg-border-2"}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---- 04 · Reach: slow-rotating globe + floating pins ---- */
export function ReachMock() {
  const pins = [
    { x: "28%", y: "62%", d: "0s" },
    { x: "54%", y: "48%", d: "0.6s" },
    { x: "70%", y: "68%", d: "1.2s" },
    { x: "44%", y: "78%", d: "0.3s" },
  ];
  return (
    <div className="relative h-44 w-[80%]">
      <div className="mx-auto mb-3 grid w-[78%] grid-cols-2 gap-1.5">
        {["Ikwe Abdulrahman", "Funsho Osaware", "Funsho Osaware", "Ikwe Abdulrahman"].map((n, i) => (
          <div key={i} className="flex items-center gap-1 rounded-md bg-surface p-1 shadow-sm">
            <div className="h-3.5 w-3.5 rounded-full bg-primary-200" />
            <span className="truncate text-[7px] text-muted">{n}</span>
          </div>
        ))}
      </div>
      <div className="relative mx-auto h-24 w-24">
        <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow text-border-2" fill="none" stroke="currentColor" strokeWidth={1}>
          <circle cx="50" cy="50" r="40" />
          <ellipse cx="50" cy="50" rx="40" ry="15" />
          <ellipse cx="50" cy="50" rx="15" ry="40" />
          <line x1="10" y1="50" x2="90" y2="50" />
        </svg>
        {pins.map((p, i) => (
          <span
            key={i}
            className="absolute h-2.5 w-2.5 animate-float rounded-full border-2 border-surface bg-primary shadow"
            style={{ left: p.x, top: p.y, animationDelay: p.d }}
          />
        ))}
      </div>
    </div>
  );
}
