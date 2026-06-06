"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import type { GitHubProfile, GitHubRepo } from "@/types";
import { github } from "@/data/content";
import {
  fetchContributions,
  fetchProfile,
  fetchRepos,
  langColor,
  type ContributionDay,
} from "@/lib/github";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Icon } from "@/components/ui/Icon";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const LEVEL_BG = [
  "rgba(148,163,184,0.08)",
  "rgba(52,211,153,0.25)",
  "rgba(52,211,153,0.45)",
  "rgba(52,211,153,0.7)",
  "rgba(52,211,153,0.95)",
];

function Heatmap({ days }: { days: ContributionDay[] }) {
  // pad start so first column aligns to weekday
  const padded = useMemo(() => {
    if (days.length === 0) return [];
    const first = new Date(days[0].date);
    const offset = first.getDay(); // 0 = Sunday
    const pad: (ContributionDay | null)[] = Array(offset).fill(null);
    return [...pad, ...days];
  }, [days]);

  return (
    <div className="overflow-x-auto pb-2">
      <div
        className="grid grid-flow-col gap-[3px]"
        style={{ gridTemplateRows: "repeat(7, 10px)" }}
        role="img"
        aria-label="GitHub contribution activity over the last year"
      >
        {padded.map((d, i) => (
          <span
            key={i}
            title={d ? `${d.count} contributions on ${d.date}` : ""}
            className="h-[10px] w-[10px] rounded-[2px]"
            style={{
              backgroundColor: d ? LEVEL_BG[d.level] ?? LEVEL_BG[0] : "transparent",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function RepoCard({ repo }: { repo: GitHubRepo }) {
  return (
    <motion.a
      variants={fadeUp}
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass card-hover group flex h-full flex-col rounded-xl p-5"
    >
      <div className="flex items-center gap-2">
        <Icon name="github" className="h-4 w-4 text-ink-muted" />
        <span className="truncate font-mono text-sm font-medium text-ink-primary group-hover:text-emerald-300">
          {repo.name}
        </span>
        <Icon
          name="arrow-up-right"
          className="ml-auto h-3.5 w-3.5 text-ink-faint opacity-0 transition-opacity group-hover:opacity-100"
        />
      </div>
      <p className="mt-2 line-clamp-2 flex-1 text-sm text-ink-muted">
        {repo.description || "—"}
      </p>
      <div className="mt-4 flex items-center gap-4 text-xs text-ink-muted">
        {repo.language && (
          <span className="inline-flex items-center gap-1.5">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: langColor(repo.language) }}
            />
            {repo.language}
          </span>
        )}
        <span className="inline-flex items-center gap-1">
          <Icon name="star" className="h-3.5 w-3.5" /> {repo.stargazers_count}
        </span>
        <span className="inline-flex items-center gap-1">
          <Icon name="git-fork" className="h-3.5 w-3.5" /> {repo.forks_count}
        </span>
      </div>
    </motion.a>
  );
}

export function GitHubActivity() {
  const [profile, setProfile] = useState<GitHubProfile>(github.fallbackProfile);
  const [repos, setRepos] = useState<GitHubRepo[]>(github.fallbackRepos);
  const [days, setDays] = useState<ContributionDay[]>([]);
  const [total, setTotal] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    (async () => {
      const [p, r, c] = await Promise.all([
        fetchProfile(github.username),
        fetchRepos(github.username),
        fetchContributions(github.username),
      ]);
      if (!alive) return;
      if (p) setProfile(p);
      if (r && r.length) setRepos(r);
      if (c) {
        setDays(c.days);
        setTotal(c.total);
      }
      setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, []);

  // top languages from repos
  const languages = useMemo(() => {
    const counts: Record<string, number> = {};
    repos.forEach((r) => {
      if (r.language) counts[r.language] = (counts[r.language] ?? 0) + 1;
    });
    const totalC = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([lang, n]) => ({ lang, pct: Math.round((n / totalC) * 100) }));
  }, [repos]);

  return (
    <SectionWrapper
      id="github"
      kicker="Open Source"
      title="Building in public"
      subtitle="Code, experiments, and consistency — straight from my GitHub."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        {/* profile card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="glass rounded-xl p-6"
        >
          <div className="flex items-center gap-4">
            <div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-full border border-emerald-400/30 bg-bg-elev1">
              {profile.avatar_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={profile.avatar_url}
                  alt={profile.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="font-mono text-xl font-bold text-emerald-300">
                  MK
                </span>
              )}
            </div>
            <div>
              <p className="font-semibold text-ink-primary">{profile.name}</p>
              <a
                href={github.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-emerald-300 hover:text-emerald-200"
              >
                @{github.username}
              </a>
            </div>
          </div>

          {profile.bio && (
            <p className="mt-4 text-sm text-ink-muted">{profile.bio}</p>
          )}

          <div className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-5 text-center">
            {[
              { label: "Repos", value: profile.public_repos },
              { label: "Followers", value: profile.followers },
              { label: "Following", value: profile.following },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-mono text-lg font-bold text-ink-primary">
                  {s.value}
                </p>
                <p className="text-xs text-ink-faint">{s.label}</p>
              </div>
            ))}
          </div>

          <a
            href={github.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md glass px-4 py-2.5 text-sm font-medium text-ink-primary transition-colors hover:border-emerald-400/40"
          >
            <Icon name="github" className="h-4 w-4" /> View full profile
          </a>
        </motion.div>

        {/* heatmap + languages */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="glass flex flex-col rounded-xl p-6"
        >
          <div className="mb-4 flex items-center justify-between">
            <p className="kicker">Contribution activity</p>
            {total !== null && (
              <span className="font-mono text-xs text-emerald-300">
                {total.toLocaleString()} in the last year
              </span>
            )}
          </div>

          {days.length > 0 ? (
            <Heatmap days={days} />
          ) : (
            <div className="flex h-[88px] items-center justify-center rounded-lg border border-dashed border-border text-xs text-ink-faint">
              {loading ? "Loading contributions…" : "Contribution graph unavailable"}
            </div>
          )}

          {languages.length > 0 && (
            <div className="mt-6">
              <p className="kicker mb-3">Top languages</p>
              <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-white/5">
                {languages.map((l) => (
                  <span
                    key={l.lang}
                    style={{
                      width: `${l.pct}%`,
                      backgroundColor: langColor(l.lang),
                    }}
                  />
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-muted">
                {languages.map((l) => (
                  <span key={l.lang} className="inline-flex items-center gap-1.5">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: langColor(l.lang) }}
                    />
                    {l.lang}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* repos */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {repos.slice(0, 6).map((r) => (
          <RepoCard key={r.name} repo={r} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
