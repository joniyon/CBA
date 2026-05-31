"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SparkleIcon, ArrowRightIcon } from "@/components/icons";
import { CircuitBackground } from "./CircuitBackground";
import { HeroDashboard } from "./HeroDashboard";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-subtle pt-40 pb-24">
      <CircuitBackground />

      <Container className="relative flex flex-col items-center text-center">
        {/* frosted pill badge — blur value taken from the source SVG (~2px hero pills) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 text-sm font-medium text-muted shadow-sm backdrop-blur-md"
        >
          <SparkleIcon className="h-4 w-4 text-primary" />
          Newest Emerging CBA
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.08 }}
          className="max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-secondary sm:text-6xl md:text-7xl"
        >
          Powering Rural Credit.
          <br />
          Built for <span className="text-primary">Microfinance</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.16 }}
          className="mt-6 max-w-xl text-balance text-lg text-muted"
        >
          An intelligent core banking platform built for Microfinance Banks and
          credit-focused institutions serving Africa&apos;s informal and rural
          economies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.24 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Button variant="primary">
            Request a Demo
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline">Explore Features</Button>
        </motion.div>

        <HeroDashboard />
      </Container>
    </section>
  );
}
