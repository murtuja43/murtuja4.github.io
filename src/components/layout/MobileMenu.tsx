"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { navItems, resumeUrl, socials } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export function MobileMenu({
  open,
  onClose,
  activeId,
}: {
  open: boolean;
  onClose: () => void;
  activeId: string;
}) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm lg:hidden"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
            className="glass-strong fixed right-0 top-0 z-[80] flex h-full w-[78%] max-w-sm flex-col p-6 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono text-sm text-ink-muted">{"// menu"}</span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="rounded-md p-2 text-ink-muted hover:bg-white/5 hover:text-white"
              >
                <Icon name="x" className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              {navItems.map((item, i) => {
                const id = item.href.slice(1);
                const active = activeId === id;
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                    className={cn(
                      "rounded-md px-3 py-3 text-lg font-medium transition-colors",
                      active
                        ? "text-emerald-300"
                        : "text-ink-secondary hover:text-white",
                    )}
                  >
                    <span className="mr-2 font-mono text-xs text-emerald-400/70">
                      0{i + 1}
                    </span>
                    {item.label}
                  </motion.a>
                );
              })}
            </nav>

            <a
              href={resumeUrl}
              download
              onClick={onClose}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-brand-gradient px-6 py-3 font-medium text-[#04130d]"
            >
              <Icon name="download" className="h-4 w-4" /> Download Resume
            </a>

            <div className="mt-auto flex gap-3 pt-8">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="rounded-md border border-border p-2.5 text-ink-muted transition-colors hover:border-emerald-400/40 hover:text-emerald-300"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
