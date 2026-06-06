"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

interface SectionWrapperProps {
  id: string;
  kicker?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function SectionWrapper({
  id,
  kicker,
  title,
  subtitle,
  children,
  className,
  align = "left",
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("section-pad relative", className)}>
      <div className="container">
        {(kicker || title || subtitle) && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className={cn(
              "mb-12 max-w-2xl md:mb-16",
              align === "center" && "mx-auto text-center",
            )}
          >
            {kicker && (
              <motion.p variants={fadeUp} className="kicker mb-4">
                <span className="text-emerald-400">{"//"}</span> {kicker}
              </motion.p>
            )}
            {title && (
              <motion.h2
                variants={fadeUp}
                className="text-balance text-3xl font-semibold tracking-tight text-ink-primary sm:text-4xl md:text-5xl"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                variants={fadeUp}
                className="mt-4 text-pretty text-base text-ink-muted sm:text-lg"
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
