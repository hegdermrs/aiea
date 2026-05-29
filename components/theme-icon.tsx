import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ThemeIconProps = {
  icon: LucideIcon;
  className?: string;
  size?: "sm" | "md" | "lg";
  bare?: boolean;
};

const sizes = {
  sm: { box: "size-9 rounded-lg", icon: "size-4" },
  md: { box: "size-11 rounded-xl", icon: "size-5" },
  lg: { box: "size-13 rounded-xl", icon: "size-6" },
} as const;

export function ThemeIcon({
  icon: Icon,
  className,
  size = "md",
  bare = false,
}: ThemeIconProps) {
  const s = sizes[size];

  if (bare) {
    return (
      <Icon
        className={cn(s.icon, "shrink-0 text-zinc-500", className)}
        strokeWidth={1.75}
        aria-hidden
      />
    );
  }

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center",
        "border border-white/10 bg-zinc-900/80 text-zinc-400",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
        "transition-colors duration-300 group-hover:border-white/15 group-hover:text-zinc-200",
        s.box,
        className
      )}
    >
      <Icon className={s.icon} strokeWidth={1.75} aria-hidden />
    </div>
  );
}
