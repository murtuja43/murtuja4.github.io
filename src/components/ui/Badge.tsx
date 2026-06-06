import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-white/[0.03] px-3 py-1 font-mono text-xs text-ink-muted transition-colors hover:border-emerald-400/30 hover:text-emerald-300",
        className,
      )}
    >
      {children}
    </span>
  );
}
