"use client";

import { cn } from "@/lib/utils";

/**
 * Slow-drifting emerald/cyan gradient blobs. Pure CSS animation (paused on
 * reduced-motion via global stylesheet). Decorative only.
 */
export function GradientBlobs({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="absolute -left-32 top-0 h-[34rem] w-[34rem] rounded-full bg-emerald-500/20 blur-[120px] animate-blob-drift" />
      <div className="absolute right-[-10rem] top-40 h-[30rem] w-[30rem] rounded-full bg-cyan-500/15 blur-[120px] animate-blob-drift [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-emerald-400/10 blur-[120px] animate-blob-drift [animation-delay:-12s]" />
    </div>
  );
}
