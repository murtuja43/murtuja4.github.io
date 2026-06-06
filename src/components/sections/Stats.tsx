"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/content";
import { AnimatedCounter } from "@/components/effects/AnimatedCounter";
import { GradientBlobs } from "@/components/effects/GradientBlobs";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function Stats() {
  return (
    <section id="stats" className="relative overflow-hidden border-y border-border">
      <div className="absolute inset-0 -z-10 bg-grid opacity-50" aria-hidden />
      <GradientBlobs className="opacity-60" />
      <div className="container py-16 md:py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="text-center"
            >
              <div className="bg-brand-gradient bg-clip-text font-mono text-4xl font-bold text-transparent sm:text-5xl">
                <AnimatedCounter
                  value={s.value}
                  suffix={s.suffix}
                  display={s.display}
                  compact={s.compact}
                />
              </div>
              <div className="mt-2 text-sm text-ink-muted">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
