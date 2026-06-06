"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { contact, site, socials } from "@/data/content";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Icon } from "@/components/ui/Icon";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const keyConfigured =
    contact.web3formsKey && contact.web3formsKey !== "YOUR_WEB3FORMS_ACCESS_KEY";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", contact.web3formsKey);
    data.append("subject", "New message from murtuja.me");
    data.append("from_name", "Portfolio Contact Form");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(json.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please email me directly instead.");
    }
  }

  return (
    <SectionWrapper
      id="contact"
      kicker="Contact"
      title={contact.heading}
      subtitle={contact.subheading}
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="glass rounded-xl p-6 sm:p-8"
        >
          {!keyConfigured && (
            <p className="mb-5 rounded-lg border border-amber-400/20 bg-amber-400/5 px-4 py-2.5 text-xs text-amber-200/90">
              Heads up: add your Web3Forms access key in{" "}
              <code className="font-mono">src/data/content.ts</code> to enable
              delivery. Messages currently won&apos;t send.
            </p>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="kicker mb-1.5 block">Name</span>
              <input
                name="name"
                required
                autoComplete="name"
                className="h-11 w-full rounded-md border border-border bg-bg-elev1/60 px-3.5 text-sm text-ink-primary outline-none transition-colors placeholder:text-ink-faint focus:border-emerald-400/50"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="kicker mb-1.5 block">Email</span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                className="h-11 w-full rounded-md border border-border bg-bg-elev1/60 px-3.5 text-sm text-ink-primary outline-none transition-colors placeholder:text-ink-faint focus:border-emerald-400/50"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="mt-4 block">
            <span className="kicker mb-1.5 block">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full resize-none rounded-md border border-border bg-bg-elev1/60 px-3.5 py-3 text-sm text-ink-primary outline-none transition-colors placeholder:text-ink-faint focus:border-emerald-400/50"
              placeholder="Tell me about the role, project, or opportunity…"
            />
          </label>

          {/* honeypot */}
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            className="hidden"
            aria-hidden
          />

          <button
            type="submit"
            disabled={status === "submitting" || !keyConfigured}
            className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-brand-gradient font-medium text-[#04130d] shadow-glow-emerald transition-all hover:brightness-105 disabled:opacity-60 sm:w-auto sm:px-8"
          >
            {status === "submitting" ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#04130d]/40 border-t-[#04130d]" />
                Sending…
              </>
            ) : (
              <>
                <Icon name="send" className="h-4 w-4" /> Send message
              </>
            )}
          </button>

          {status === "success" && (
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-300">
              <Icon name="sparkles" className="h-4 w-4" /> Thanks — your message
              is on its way. I&apos;ll reply soon.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm text-red-300">{error}</p>
          )}
        </motion.form>

        {/* socials + CTA */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-4"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/[0.08] to-cyan-400/[0.04] p-6"
          >
            <p className="text-pretty text-base font-medium text-ink-secondary">
              {contact.cta}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-emerald-300 hover:text-emerald-200"
            >
              <Icon name="mail" className="h-4 w-4" /> {site.email}
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass card-hover flex items-center gap-3 rounded-xl p-4"
              >
                <span className="inline-flex rounded-lg border border-border bg-white/[0.03] p-2 text-emerald-300">
                  <Icon name={s.icon} className="h-4 w-4" />
                </span>
                <span className="text-sm text-ink-secondary">{s.name}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
