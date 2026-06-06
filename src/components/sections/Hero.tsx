"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  heroIntro,
  heroRoles,
  heroStats,
  heroTechChips,
  resumeUrl,
  site,
} from "@/data/content";
import { GradientBlobs } from "@/components/effects/GradientBlobs";
import { ParticleField } from "@/components/effects/ParticleField";
import { RotatingText } from "@/components/effects/RotatingText";
import { AnimatedCounter } from "@/components/effects/AnimatedCounter";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { Icon } from "@/components/ui/Icon";
import { EASE_OUT } from "@/lib/animations";

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

function ProfileVisual() {
  const [imgOk, setImgOk] = useState(true);
  return (
    <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-emerald-400/20 glass">
        {/* gradient rim glow */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-brand-gradient opacity-20 blur-2xl"
        />
        {imgOk ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/profile.jpg"
            alt="Murtuja Kayes"
            onError={() => setImgOk(false)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-bg-elev1">
            <span className="bg-brand-gradient bg-clip-text font-mono text-7xl font-bold text-transparent">
              MK
            </span>
            <span className="font-mono text-xs text-ink-faint">/profile.jpg</span>
          </div>
        )}
        {/* duotone overlay to match palette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-cyan-500/5"
        />
        {/* availability dot */}
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-bg/70 px-3 py-1.5 backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono text-[0.7rem] text-emerald-200">
            Open to roles
          </span>
        </div>
      </div>

      {/* Alfa Center credibility badge */}
      <motion.div
        variants={item}
        className="glass-strong absolute -bottom-5 -left-3 rounded-xl px-4 py-3 shadow-card sm:-left-6"
      >
        <p className="font-mono text-[0.65rem] uppercase tracking-wider text-ink-faint">
          Currently
        </p>
        <p className="mt-0.5 text-sm font-semibold text-ink-primary">
          AI Engineer &amp; ML Researcher
        </p>
        <p className="text-sm">
          <span className="text-gradient font-semibold">@ {site.company}</span>
        </p>
      </motion.div>

      {/* floating tech chips */}
      <motion.div
        variants={item}
        className="absolute -right-2 top-8 hidden flex-col items-end gap-2 sm:flex"
      >
        {heroTechChips.slice(0, 3).map((t, i) => (
          <motion.span
            key={t}
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
            className="glass rounded-full px-3 py-1 font-mono text-xs text-emerald-200"
          >
            {t}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-10"
    >
      {/* background layers */}
      <div className="absolute inset-0 -z-10 bg-grid" aria-hidden />
      <GradientBlobs />
      <ParticleField />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-bg"
      />

      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT: identity */}
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.p
              variants={item}
              className="kicker mb-5 inline-flex items-center gap-2"
            >
              <Icon name="sparkles" className="h-4 w-4 text-emerald-400" />
              AI Engineer · ML Researcher · Applied Mathematics
            </motion.p>

            <motion.h1
              variants={item}
              className="text-5xl font-semibold leading-[1.02] tracking-tight text-ink-primary sm:text-6xl xl:text-7xl"
            >
              Murtuja <span className="text-gradient">Kayes</span>
            </motion.h1>

            <motion.div
              variants={item}
              className="mt-5 flex items-center gap-3 text-xl font-medium text-ink-secondary sm:text-2xl"
            >
              <span className="font-mono text-emerald-400">&gt;</span>
              <RotatingText words={heroRoles} className="text-ink-primary" />
            </motion.div>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink-muted sm:text-lg"
            >
              {heroIntro}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <MagneticButton
                href="#projects"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-brand-gradient px-7 font-medium text-[#04130d] shadow-glow-emerald transition-[filter] hover:brightness-105"
              >
                View Projects <Icon name="arrow-right" className="h-4 w-4" />
              </MagneticButton>
              <a
                href={resumeUrl}
                download
                className="inline-flex h-12 items-center gap-2 rounded-md glass px-6 font-medium text-ink-primary transition-colors hover:border-emerald-400/40"
              >
                <Icon name="download" className="h-4 w-4" /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center gap-2 rounded-md px-5 font-medium text-ink-secondary transition-colors hover:text-white"
              >
                Contact Me <Icon name="arrow-up-right" className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT: profile */}
          <motion.div variants={container} initial="hidden" animate="visible">
            <ProfileVisual />
          </motion.div>
        </div>

        {/* METRIC STRIP — above the fold credibility */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border glass md:mt-20 md:grid-cols-4"
        >
          {heroStats.map((s) => (
            <motion.div
              key={s.label}
              variants={item}
              className="flex flex-col items-center justify-center gap-1 bg-bg-elev1/40 px-4 py-6 text-center"
            >
              <span className="bg-brand-gradient bg-clip-text font-mono text-3xl font-bold text-transparent sm:text-4xl">
                <AnimatedCounter
                  value={s.value}
                  suffix={s.suffix}
                  display={s.display}
                  compact={s.compact}
                />
              </span>
              <span className="text-xs text-ink-muted sm:text-sm">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-ink-faint md:block"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <Icon name="chevron-down" className="h-6 w-6" />
        </motion.span>
      </motion.a>
    </section>
  );
}
