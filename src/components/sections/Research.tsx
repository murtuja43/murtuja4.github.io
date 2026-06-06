"use client";

import { motion } from "framer-motion";
import {
  researchInterests,
  researchPhilosophy,
  researchRoadmap,
} from "@/data/content";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SpotlightCard } from "@/components/effects/SpotlightCard";
import { Icon } from "@/components/ui/Icon";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function Research() {
  return (
    <SectionWrapper
      id="research"
      kicker="Research"
      title="Research interests & direction"
      subtitle="My research sits where applied mathematics meets machine learning — methods grounded in optimization, statistics, and signal analysis."
    >
      {/* interests grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {researchInterests.map((r) => (
          <motion.div key={r.title} variants={fadeUp}>
            <SpotlightCard className="h-full p-6">
              <div className="mb-4 inline-flex rounded-lg border border-emerald-400/20 bg-emerald-400/5 p-2.5 text-emerald-300">
                <Icon name={r.icon} className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-ink-primary">
                {r.title}
              </h3>
              <p className="mt-2 text-sm text-ink-muted">{r.description}</p>
            </SpotlightCard>
          </motion.div>
        ))}
      </motion.div>

      {/* roadmap */}
      <div className="mt-16">
        <p className="kicker mb-6 text-center">Research roadmap</p>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-5 md:grid-cols-3"
        >
          {researchRoadmap.map((step, i) => (
            <motion.div
              key={step.stage}
              variants={fadeUp}
              className="relative glass rounded-xl p-6"
            >
              {i < researchRoadmap.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-[-14px] top-1/2 hidden -translate-y-1/2 text-emerald-400/50 md:block"
                >
                  <Icon name="arrow-right" className="h-5 w-5" />
                </span>
              )}
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-300">
                {step.stage}
              </span>
              <h3 className="mt-2 text-base font-semibold text-ink-primary">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-ink-muted">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* philosophy */}
      <motion.blockquote
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative mx-auto mt-16 max-w-3xl rounded-2xl border border-emerald-400/15 bg-gradient-to-br from-emerald-400/[0.06] to-cyan-400/[0.04] p-8 text-center"
      >
        <span className="mx-auto mb-4 inline-flex rounded-full border border-emerald-400/20 p-2 text-emerald-300">
          <Icon name="sigma" className="h-5 w-5" />
        </span>
        <p className="text-pretty text-lg font-medium leading-relaxed text-ink-secondary">
          “{researchPhilosophy}”
        </p>
        <footer className="mt-4 font-mono text-xs uppercase tracking-wider text-ink-faint">
          — Research philosophy
        </footer>
      </motion.blockquote>
    </SectionWrapper>
  );
}
