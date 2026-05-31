"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SparkleIcon, ArrowRightIcon } from "@/components/icons";
import { BannerCanvas } from "./BannerCanvas";

const ease = [0.22, 1, 0.36, 1] as const;

export function Banner() {
  return (
    <Section id="cta" className="bg-bg">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] px-6 py-24 text-center">
          <BannerCanvas />
          {/* soft vignette for depth */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,14,40,0.5))]" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
            className="relative mx-auto max-w-2xl"
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-surface px-3.5 py-1.5 text-sm font-medium text-fg">
              <SparkleIcon className="h-4 w-4 text-primary" />
              Built-In Tools
            </span>
            <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-5xl">
              Credit doesn&apos;t reach most of Africa.
              <br />
              We&apos;re changing that.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/70">
              Chaincore is trusted by leading microfinance institutions and
              supported by seasoned industry experts.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button variant="primary">
                Request a Demo
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
              <Button variant="outline">Explore Features</Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
