"use client";

import { motion } from "framer-motion";
import { about } from "@/data/content";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Reveal } from "@/components/effects/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function About() {
  return (
    <SectionWrapper id="about" kicker="About" title={about.thesis}>
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        {/* left: identity + facts */}
        <div className="space-y-8">
          <Reveal className="glass rounded-xl p-6">
            <p className="kicker mb-4">Identity</p>
            <div className="flex flex-wrap gap-2">
              {about.identityChips.map((c) => (
                <Badge key={c}>{c}</Badge>
              ))}
            </div>
          </Reveal>

          <motion.dl
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-4"
          >
            {about.facts.map((f) => (
              <motion.div
                key={f.label}
                variants={fadeUp}
                className="flex items-start gap-3 border-l-2 border-emerald-400/30 pl-4"
              >
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                    {f.label}
                  </dt>
                  <dd className="mt-0.5 text-sm text-ink-secondary">{f.value}</dd>
                </div>
              </motion.div>
            ))}
          </motion.dl>
        </div>

        {/* right: narrative */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-5"
        >
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="text-pretty text-base leading-relaxed text-ink-secondary sm:text-lg"
            >
              {p}
            </motion.p>
          ))}
          <motion.div
            variants={fadeUp}
            className="mt-2 inline-flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/5 px-4 py-3 text-sm text-emerald-200"
          >
            <Icon name="sigma" className="h-4 w-4 shrink-0" />
            Mathematics first — engineering and research follow from it.
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
