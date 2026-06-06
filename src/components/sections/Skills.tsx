"use client";

import { motion } from "framer-motion";
import { skillClusters } from "@/data/content";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Icon } from "@/components/ui/Icon";
import {
  fadeUp,
  staggerContainer,
  staggerContainerFast,
  viewportOnce,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <SectionWrapper
      id="skills"
      kicker="Skills"
      title="Technical toolkit"
      subtitle="A mathematics-first stack: foundations underpin the machine-learning and engineering layers above them."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-5 md:grid-cols-2"
      >
        {skillClusters.map((cluster) => (
          <motion.div
            key={cluster.title}
            variants={fadeUp}
            className={cn(
              "glass card-hover rounded-xl p-6",
              cluster.featured &&
                "border-emerald-400/25 bg-gradient-to-br from-emerald-400/[0.07] to-transparent md:row-span-1",
            )}
          >
            <div className="mb-5 flex items-center gap-3">
              <span
                className={cn(
                  "inline-flex rounded-lg border p-2.5",
                  cluster.featured
                    ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                    : "border-border bg-white/[0.03] text-cyan-300",
                )}
              >
                <Icon name={cluster.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-ink-primary">{cluster.title}</h3>
                {cluster.featured && (
                  <span className="font-mono text-[0.7rem] uppercase tracking-wider text-emerald-300/80">
                    Core differentiator
                  </span>
                )}
              </div>
            </div>

            <motion.ul
              variants={staggerContainerFast}
              className="flex flex-wrap gap-2"
            >
              {cluster.skills.map((s) => (
                <motion.li
                  key={s}
                  variants={fadeUp}
                  className={cn(
                    "rounded-lg border px-3 py-1.5 text-sm transition-colors",
                    cluster.featured
                      ? "border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-100 hover:border-emerald-400/40"
                      : "border-border bg-white/[0.02] text-ink-secondary hover:border-cyan-400/30 hover:text-white",
                  )}
                >
                  {s}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
