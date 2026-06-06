import type { GitHubProfile, GitHubRepo } from "@/types";

export interface ContributionDay {
  date: string;
  count: number;
  level: number; // 0-4
}

const LANG_COLORS: Record<string, string> = {
  Python: "#3776AB",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  "Jupyter Notebook": "#DA5B0B",
  HTML: "#E34F26",
  CSS: "#1572B6",
  C: "#555555",
  "C++": "#F34B7D",
  Shell: "#89E051",
  Java: "#B07219",
  Go: "#00ADD8",
  Rust: "#DEA584",
};

export function langColor(lang: string): string {
  return LANG_COLORS[lang] ?? "#34D399";
}

export async function fetchProfile(username: string): Promise<GitHubProfile | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) return null;
    const d = await res.json();
    return {
      name: d.name ?? username,
      bio: d.bio ?? "",
      followers: d.followers ?? 0,
      following: d.following ?? 0,
      public_repos: d.public_repos ?? 0,
      avatar_url: d.avatar_url ?? "",
    };
  } catch {
    return null;
  }
}

export async function fetchRepos(username: string): Promise<GitHubRepo[] | null> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
    );
    if (!res.ok) return null;
    const data = await res.json();
    if (!Array.isArray(data)) return null;
    return data
      .filter((r: { fork: boolean }) => !r.fork)
      .sort(
        (a: GitHubRepo, b: GitHubRepo) =>
          b.stargazers_count - a.stargazers_count,
      )
      .slice(0, 6)
      .map((r: GitHubRepo) => ({
        name: r.name,
        description: r.description ?? "",
        language: r.language ?? "",
        stargazers_count: r.stargazers_count ?? 0,
        forks_count: r.forks_count ?? 0,
        html_url: r.html_url,
      }));
  } catch {
    return null;
  }
}

export async function fetchContributions(
  username: string,
): Promise<{ days: ContributionDay[]; total: number } | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
    );
    if (!res.ok) return null;
    const data = await res.json();
    const days: ContributionDay[] = data.contributions ?? [];
    const total = Object.values(data.total ?? {}).reduce(
      (a: number, b) => a + (b as number),
      0,
    );
    return { days, total };
  } catch {
    return null;
  }
}
