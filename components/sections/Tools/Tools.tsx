"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { fadeUp, staggerChildren } from "@/lib/animations/variants";
import {
  CreditScoreIcon,
  CoreBankingIcon,
  AgentIcon,
  InsuranceIcon,
  ReportIcon,
  ShieldIcon,
} from "@/components/icons";

const tools = [
  {
    Icon: CreditScoreIcon,
    title: "AI-Powered Credit Scoring",
    body: "Score first-time borrowers using behavioral, alternative, and mobile data. Unlock lending for the unbanked.",
  },
  {
    Icon: CoreBankingIcon,
    title: "End-to-End Core Banking",
    body: "Manage accounts, loans, ledgers, and compliance with a modern, secure platform built for African financial institutions.",
  },
  {
    Icon: AgentIcon,
    title: "Agent Toolkit & Offline Access",
    body: "Onboard customers in rural areas through agents and field officers, with offline-first capabilities for low-connectivity zones.",
  },
  {
    Icon: InsuranceIcon,
    title: "Embedded Loan Insurance",
    body: "Reduce defaults with auto-included business insurance on every disbursed loan integrated via API.",
  },
  {
    Icon: ReportIcon,
    title: "Intelligent Reporting & Risk Dashboard",
    body: "Track credit performance, collections, fraud flags, and real-time repayment risk in a single interface.",
  },
  {
    Icon: ShieldIcon,
    title: "Secure & Compliant",
    body: "Built with Nigerian CBN/NDIC regulations in mind, and ready for deployment across evolving regulatory environments.",
  },
];

export function Tools() {
  return (
    <Section id="tools" className="bg-bg">
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-secondary sm:text-5xl">
            Purpose-Built Features for African Financial Institutions
          </h2>
          <p className="mt-4 text-muted">
            Pre-integrated solutions for faster, smarter operations.
          </p>
        </div>

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
        >
          {tools.map(({ Icon, title, body }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              className="group relative bg-surface p-7 transition-colors duration-300 hover:bg-surface-2"
            >
              {/* hover: top accent line wipes in */}
              <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary-100 text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-base font-semibold text-fg">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
