"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { Project } from "@/types";
import { projects } from "@/data/content";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ProjectModal } from "@/components/sections/ProjectModal";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const initials = project.title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <motion.article
      variants={fadeUp}
      className="group glass card-hover flex flex-col overflow-hidden rounded-xl"
    >
      {/* thumbnail */}
      <button
        onClick={onOpen}
        aria-label={`Open ${project.title}`}
        className="relative block h-44 w-full overflow-hidden bg-bg-elev2 text-left"
      >
        <div
          aria-hidden
          className={`absolute inset-0 opacity-25 transition-opacity duration-300 group-hover:opacity-40 ${
            project.accent === "cyan"
              ? "bg-[radial-gradient(120%_120%_at_100%_0%,#22d3ee,transparent_55%)]"
              : "bg-[radial-gradient(120%_120%_at_100%_0%,#34d399,transparent_55%)]"
          }`}
        />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <span className="absolute bottom-4 left-5 bg-brand-gradient bg-clip-text font-mono text-3xl font-bold text-transparent">
          {initials}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-bg/60 p-2 text-ink-muted opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
          <Icon name="arrow-up-right" className="h-4 w-4" />
        </span>
      </button>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-ink-primary">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-ink-muted">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
          <button
            onClick={onOpen}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-300 transition-colors hover:text-emerald-200"
          >
            Details <Icon name="arrow-right" className="h-3.5 w-3.5" />
          </button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="ml-auto text-ink-muted transition-colors hover:text-white"
            >
              <Icon name="github" className="h-4 w-4" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="text-ink-muted transition-colors hover:text-white"
            >
              <Icon name="external-link" className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <SectionWrapper
      id="projects"
      kicker="Selected Work"
      title="Projects"
      subtitle="A selection of AI, machine-learning, and data projects — from healthcare signal models to applied research."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-6 md:grid-cols-2"
      >
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} onOpen={() => setActive(p)} />
        ))}
      </motion.div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </SectionWrapper>
  );
}
