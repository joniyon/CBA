"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SparkleIcon } from "@/components/icons";
import { fadeUp, staggerChildren } from "@/lib/animations/variants";
import {
  ClientsMock,
  CreditScoreMock,
  DisbursementMock,
  ReachMock,
} from "./MissionMocks";

const cards = [
  {
    n: "01",
    Mock: ClientsMock,
    title: "Manage customer accounts with ease",
    body: "Open, track, and maintain accounts across all channels. Ensure smooth operations with real-time account control.",
  },
  {
    n: "02",
    Mock: CreditScoreMock,
    title: "Assess credit risk using AI-driven insights",
    body: "Analyze behavioral and financial data instantly. Make smarter, faster lending decisions with confidence.",
  },
  {
    n: "03",
    Mock: DisbursementMock,
    title: "Disburse loans with built-in insurance coverage",
    body: "Protect borrowers and lenders with embedded coverage. Minimize risk while expanding credit access at scale.",
  },
  {
    n: "04",
    Mock: ReachMock,
    title: "Reach underserved and remote communities",
    body: "Deliver financial services through mobile and agents. Connect with customers beyond traditional bank reach.",
  },
];

export function Mission() {
  return (
    <Section id="mission" className="bg-bg-subtle">
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-muted">
            <SparkleIcon className="h-4 w-4 text-primary" />
            Our Mission
          </span>
          <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-secondary sm:text-5xl">
            Chaincore is redefining core banking for the underserved.
          </h2>
          <p className="mt-4 text-muted">From boardrooms to open markets</p>
        </div>

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {cards.map(({ n, Mock, title, body }) => (
            <motion.article
              key={n}
              variants={fadeUp}
              className="group rounded-xl border border-border bg-surface p-6"
            >
              <span className="font-display text-2xl font-semibold text-border-2">{n}</span>
              <div className="relative mt-4 flex h-64 items-center justify-center overflow-hidden rounded-lg bg-surface-2">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-40 [background-image:var(--gradient-card)]"
                />
                <div className="relative flex w-full items-center justify-center">
                  <Mock />
                </div>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-fg">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
