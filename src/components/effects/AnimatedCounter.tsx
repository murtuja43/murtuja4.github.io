"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

function formatNumber(n: number, compact?: boolean) {
  if (compact) return n.toLocaleString("en-US");
  return String(n);
}

export function AnimatedCounter({
  value,
  suffix = "",
  display,
  compact,
  duration = 1600,
  className,
}: {
  value: number;
  suffix?: string;
  display?: string;
  compact?: boolean;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = usePrefersReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (display) return;
    if (!inView) return;
    if (reduced) {
      setCount(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // easeOutExpo
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setCount(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, reduced, display]);

  return (
    <span ref={ref} className={className}>
      {display ?? `${formatNumber(count, compact)}${suffix}`}
    </span>
  );
}
