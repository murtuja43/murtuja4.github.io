"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { navItems, resumeUrl } from "@/data/content";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { Icon } from "@/components/ui/Icon";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const ids = useMemo(() => navItems.map((n) => n.href.slice(1)), []);
  const activeId = useScrollSpy(ids, -120);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border bg-bg/70 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <nav className="container flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
          <a
            href="#home"
            className="group flex items-center gap-2.5"
            aria-label="Murtuja Kayes — home"
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-emerald-400/30 bg-bg-elev1 font-mono text-sm font-bold text-emerald-300 transition-colors group-hover:border-emerald-400/60">
              MK
            </span>
            <span className="hidden text-sm font-semibold text-ink-primary sm:block">
              Murtuja Kayes
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const id = item.href.slice(1);
              const active = activeId === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "relative rounded-md px-3 py-2 text-sm transition-colors",
                      active
                        ? "text-white"
                        : "text-ink-muted hover:text-ink-secondary",
                    )}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-2 -bottom-px h-px bg-brand-gradient"
                        transition={{ type: "spring", stiffness: 320, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={resumeUrl}
              download
              className="hidden items-center gap-2 rounded-md bg-brand-gradient px-4 py-2 text-sm font-medium text-[#04130d] shadow-glow-emerald transition-all hover:brightness-105 sm:inline-flex"
            >
              <Icon name="download" className="h-4 w-4" />
              Resume
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="rounded-md p-2 text-ink-secondary hover:bg-white/5 lg:hidden"
            >
              <Icon name="menu" className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </motion.header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeId={activeId}
      />
    </>
  );
}
