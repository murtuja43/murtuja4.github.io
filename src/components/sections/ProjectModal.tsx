"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import type { Project } from "@/types";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (project) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl"
          >
            {/* header visual */}
            <div className="relative h-40 overflow-hidden rounded-t-2xl bg-bg-elev2 sm:h-48">
              <div
                aria-hidden
                className={`absolute inset-0 opacity-30 ${
                  project.accent === "cyan"
                    ? "bg-[radial-gradient(120%_120%_at_0%_0%,#22d3ee,transparent_60%)]"
                    : "bg-[radial-gradient(120%_120%_at_0%_0%,#34d399,transparent_60%)]"
                }`}
              />
              <div className="absolute inset-0 bg-grid opacity-40" />
              <span className="absolute bottom-4 left-6 bg-brand-gradient bg-clip-text font-mono text-4xl font-bold text-transparent">
                {project.title
                  .split(" ")
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join("")}
              </span>
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 rounded-md bg-bg/60 p-2 text-ink-secondary backdrop-blur transition-colors hover:bg-bg hover:text-white"
              >
                <Icon name="x" className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-ink-primary">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-cyan-300">{project.tagline}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>

              <div className="mt-6">
                <p className="kicker mb-2">Overview</p>
                <p className="text-sm leading-relaxed text-ink-secondary">
                  {project.description}
                </p>
              </div>

              <div className="mt-6">
                <p className="kicker mb-3">Highlights</p>
                <ul className="space-y-2">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-2.5 text-sm text-ink-secondary"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-md bg-brand-gradient px-5 text-sm font-medium text-[#04130d]"
                  >
                    <Icon name="github" className="h-4 w-4" /> View on GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-md glass px-5 text-sm font-medium text-ink-primary hover:border-emerald-400/40"
                  >
                    <Icon name="external-link" className="h-4 w-4" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
