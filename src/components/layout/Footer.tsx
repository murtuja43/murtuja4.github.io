"use client";

import { navItems, site, socials } from "@/data/content";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-bg-elev1/30">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-emerald-400/30 bg-bg-elev1 font-mono text-sm font-bold text-emerald-300">
                MK
              </span>
              <span className="text-sm font-semibold text-ink-primary">
                {site.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-ink-muted">
              AI Engineer &amp; ML Researcher with an Applied Mathematics
              background — building intelligent systems, conducting research, and
              teaching.
            </p>
          </div>

          <div>
            <h3 className="kicker mb-4">Navigate</h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ink-muted transition-colors hover:text-emerald-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="kicker mb-4">Connect</h3>
            <div className="flex flex-wrap gap-3">
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
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-ink-faint sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-mono">Built with Next.js, Tailwind &amp; Framer Motion</p>
          <a
            href="#home"
            className="inline-flex items-center gap-1 text-ink-muted transition-colors hover:text-emerald-300"
          >
            Back to top <Icon name="arrow-up-right" className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
