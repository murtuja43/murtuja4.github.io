"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/content";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function Experience() {
  return (
    <SectionWrapper
      id="experience"
      kicker="Experience"
      title="Where I build and research"
    >
      <div className="relative">
        {/* timeline rail */}
        <div
          aria-hidden
          className="absolute left-[7px] top-2 h-full w-px bg-gradient-to-b from-emerald-400/50 via-border to-transparent md:left-2"
        />
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-10"
        >
          {experiences.map((exp) => (
            <motion.li
              key={exp.role + exp.company}
              variants={fadeUp}
              className="relative pl-10 md:pl-12"
            >
              {/* node */}
              <span className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center md:left-0">
                <span className="absolute h-4 w-4 animate-ping rounded-full bg-emerald-400/40" />
                <span className="relative h-3.5 w-3.5 rounded-full border-2 border-emerald-400 bg-bg shadow-glow-emerald" />
              </span>

              <div className="glass card-hover rounded-xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-ink-primary">
                    {exp.role}
                  </h3>
                  <span className="font-mono text-xs text-emerald-300">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-cyan-300">
                  {exp.company}
                </p>
                <p className="mt-3 text-sm text-ink-muted">{exp.summary}</p>

                <ul className="mt-4 space-y-2">
                  {exp.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex gap-2.5 text-sm text-ink-secondary"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/70" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </SectionWrapper>
  );
}
