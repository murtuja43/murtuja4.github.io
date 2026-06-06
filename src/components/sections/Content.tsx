"use client";

import { motion } from "framer-motion";
import {
  contentPlatforms,
  contentSummary,
  contentTopics,
} from "@/data/content";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function Content() {
  return (
    <SectionWrapper
      id="content"
      kicker="Content"
      title="Tech content creator"
      subtitle="I share AI, programming, and developer-tools content — and motivation for students — reaching a growing technical audience."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        {/* summary + topics */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="glass flex flex-col justify-between rounded-xl p-8"
        >
          <motion.p
            variants={fadeUp}
            className="text-pretty text-base leading-relaxed text-ink-secondary sm:text-lg"
          >
            {contentSummary}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8">
            <p className="kicker mb-3">Topics</p>
            <div className="flex flex-wrap gap-2">
              {contentTopics.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* platform cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-4"
        >
          {contentPlatforms.map((p) => (
            <motion.a
              key={p.name}
              variants={fadeUp}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass card-hover group flex items-center gap-4 rounded-xl p-5"
            >
              <span className="inline-flex rounded-lg border border-border bg-white/[0.03] p-3 text-emerald-300 transition-colors group-hover:text-emerald-200">
                <Icon name={p.icon} className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <p className="font-semibold text-ink-primary">{p.name}</p>
                <p className="font-mono text-xs text-ink-muted">{p.handle}</p>
              </div>
              <div className="text-right">
                <p className="bg-brand-gradient bg-clip-text font-mono text-xl font-bold text-transparent">
                  {p.metric}
                </p>
                <p className="text-[0.7rem] text-ink-faint">{p.metricLabel}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
