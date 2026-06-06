"use client";

import { motion } from "framer-motion";
import { teaching } from "@/data/content";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Icon } from "@/components/ui/Icon";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function Teaching() {
  return (
    <SectionWrapper
      id="teaching"
      kicker="Teaching"
      title={teaching.role}
      subtitle={teaching.summary}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {teaching.pillars.map((p) => (
          <motion.div
            key={p.title}
            variants={fadeUp}
            className="glass card-hover rounded-xl p-6"
          >
            <span className="mb-4 inline-flex rounded-lg border border-cyan-400/20 bg-cyan-400/5 p-2.5 text-cyan-300">
              <Icon name={p.icon} className="h-5 w-5" />
            </span>
            <h3 className="text-base font-semibold text-ink-primary">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-ink-muted">{p.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
