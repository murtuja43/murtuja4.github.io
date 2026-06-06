export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  /** Render a literal string instead of a counted number (e.g. "Multiple"). */
  display?: string;
  /** Format large numbers compactly (e.g. 7000 -> 7,000). */
  compact?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  summary: string;
  points: string[];
  tags: string[];
}

export type Accent = "emerald" | "cyan";

export interface Project {
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  github: string;
  demo: string;
  featured: boolean;
  accent: Accent;
}

export interface ResearchInterest {
  title: string;
  description: string;
  icon: string;
}

export interface SkillCluster {
  title: string;
  icon: string;
  skills: string[];
  featured?: boolean;
}

export interface ContentPlatform {
  name: string;
  handle: string;
  metric: string;
  metricLabel: string;
  icon: string;
  href: string;
}

export interface TeachingPillar {
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface GitHubProfile {
  name: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
}

export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}
