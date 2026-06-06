import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-300 ease-out-expo focus-visible:outline-none disabled:pointer-events-none disabled:opacity-60 whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-gradient text-[#04130d] shadow-glow-emerald hover:shadow-[0_0_55px_rgba(52,211,153,0.45)] hover:brightness-105",
        secondary:
          "glass text-ink-primary hover:border-emerald-400/40 hover:text-white",
        ghost:
          "text-ink-secondary hover:text-white hover:bg-white/5",
        outline:
          "border border-border text-ink-secondary hover:border-emerald-400/40 hover:text-white",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-7 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
