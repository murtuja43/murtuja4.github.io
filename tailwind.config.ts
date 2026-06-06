import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "clamp(1.25rem, 5vw, 2rem)",
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        bg: {
          DEFAULT: "#050816",
          elev1: "#0A0F24",
          elev2: "#0F1630",
          grid: "#0C1330",
        },
        emerald: {
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
        },
        cyan: {
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4",
        },
        ink: {
          primary: "#F8FAFC",
          secondary: "#CBD5E1",
          muted: "#94A3B8",
          faint: "#64748B",
        },
        border: "rgba(148,163,184,0.12)",
        glass: "rgba(15,22,48,0.6)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
      boxShadow: {
        card: "0 8px 30px rgba(0,0,0,0.4)",
        "glow-emerald": "0 0 40px rgba(52,211,153,0.25)",
        "glow-cyan": "0 0 40px rgba(34,211,238,0.2)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #34D399 0%, #22D3EE 100%)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.22, 1, 0.36, 1)",
        "in-out-quart": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      keyframes: {
        "blob-drift": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(40px,-30px) scale(1.1)" },
          "66%": { transform: "translate(-30px,20px) scale(0.95)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "blob-drift": "blob-drift 18s ease-in-out infinite",
        shimmer: "shimmer 1.6s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
