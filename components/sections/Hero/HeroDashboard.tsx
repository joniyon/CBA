"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Logo } from "@/components/icons/Logo";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

const fields: [string, string][] = [
  ["First Name", "Tope"],
  ["Middle Name", "Ayokunle"],
  ["Last Name", "Aiyegbusi"],
  ["Father's Name", "Segun"],
  ["Email Address", "aiyegbusitope@gmail.com"],
  ["Phone Number", "+234 902 893 9012"],
  ["Gender", "Male"],
  ["Client ID", "12348901"],
  ["Date of Birth", "12 April, 1998"],
  ["Nationality", "Nigerian"],
  ["Marital Status", "Single"],
  ["Primary ID Type", "ID Card"],
];

const nav = {
  "Main Menu": ["Dashboard", "Transactions", "Task"],
  Functions: ["Customers", "Loan", "Credit Intelligence"],
};

export function HeroDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  // Scroll progress while the dashboard rises into view.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.4"],
  });

  // Z-axis reveal: tilted back -> upright, lifting and scaling toward the viewer.
  const rotateX = useTransform(scrollYProgress, [0, 1], [22, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  const motionStyle = reduced
    ? undefined
    : { rotateX, scale, y, transformPerspective: 1400 };

  return (
    <div
      ref={ref}
      className="relative mt-16 w-full"
      style={{ perspective: 1400 }}
    >
      {/* gradient glow beneath -> "floating" illusion */}
      <div
        aria-hidden
        className="absolute inset-x-8 bottom-0 -z-10 h-3/4 rounded-[40px] opacity-70 blur-3xl [background-image:var(--gradient-card)]"
      />

      <motion.div
        style={motionStyle}
        className="mx-auto max-w-5xl origin-bottom overflow-hidden rounded-xl border border-border bg-surface shadow-[0_40px_120px_-40px_rgba(10,13,20,0.45)] will-change-transform"
      >
        <div className="flex h-[440px]">
          {/* sidebar */}
          <aside className="hidden w-56 shrink-0 flex-col border-r border-border bg-surface-2/60 p-4 md:flex">
            <div className="mb-5 flex items-center text-fg">
              <Logo className="h-6 w-auto" />
            </div>
            <div className="mb-4 flex items-center gap-2 rounded-md border border-border bg-surface px-2.5 py-1.5 text-xs text-muted-2">
              <span className="h-3 w-3 rounded-full border border-muted-2" />{" "}
              Search
              <span className="ml-auto text-[10px]">⌘1</span>
            </div>
            {Object.entries(nav).map(([group, items]) => (
              <div key={group} className="mb-4">
                <p className="mb-1.5 px-1 text-[10px] font-semibold uppercase tracking-wide text-muted-2">
                  {group}
                </p>
                {items.map((item) => {
                  const active = item === "Customers";
                  return (
                    <div key={item}>
                      <div
                        className={`flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[13px] ${
                          active
                            ? "bg-primary-100 font-medium text-primary"
                            : "text-muted"
                        }`}
                      >
                        <span className="h-3.5 w-3.5 rounded-sm bg-current opacity-30" />
                        {item}
                      </div>
                      {active && (
                        <div className="ml-4 mt-0.5 space-y-0.5 border-l border-border pl-3 text-[12px]">
                          {[
                            "Individual",
                            "Corporate",
                            "Corporatives",
                            "Clusters",
                          ].map((s) => (
                            <p
                              key={s}
                              className={
                                s === "Individual"
                                  ? "text-primary"
                                  : "text-muted-2"
                              }
                            >
                              {s}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </aside>

          {/* main */}
          <div className="flex-1 overflow-hidden p-5">
            <div className="mb-4 flex gap-5 border-b border-border text-[13px]">
              {["Client Overview", "Loan Account", "Pending", "Failed"].map(
                (t, i) => (
                  <span
                    key={t}
                    className={`pb-2.5 ${
                      i === 0
                        ? "border-b-2 border-primary font-medium text-fg"
                        : "text-muted-2"
                    }`}
                  >
                    {t}
                  </span>
                ),
              )}
            </div>

            <div className="mb-5 flex items-center gap-3 rounded-lg bg-surface-2 p-3">
              <div className="h-9 w-9 rounded-full bg-primary-200" />
              <div>
                <p className="text-sm font-semibold text-fg">
                  Temitope Waniyon
                </p>
                <p className="text-xs text-muted-2">waniyontope@gmail.com</p>
              </div>
              <span className="ml-auto rounded-full bg-success/15 px-2.5 py-1 text-xs font-semibold text-success">
                Active
              </span>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4 lg:grid-cols-4">
              {fields.map(([label, value]) => (
                <div key={label}>
                  <p className="mb-1 text-[11px] text-muted-2">{label}</p>
                  <p className="truncate text-[13px] font-medium text-fg">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
