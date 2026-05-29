import { cn } from "@/lib/utils";

type CardGlow = "chromatic" | "silver" | "gold";

type MetalBorderCardProps = {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  borderRadius?: number;
  /** Tint of the hover glow. */
  preset?: CardGlow;
};

const GLOW_GRADIENT: Record<CardGlow, string> = {
  chromatic:
    "bg-[linear-gradient(120deg,rgba(167,139,250,0.45),rgba(34,211,238,0.35),rgba(167,139,250,0.45))]",
  silver:
    "bg-[linear-gradient(120deg,rgba(228,228,231,0.4),rgba(161,161,170,0.3),rgba(228,228,231,0.4))]",
  gold: "bg-[linear-gradient(120deg,rgba(250,204,21,0.45),rgba(245,158,11,0.35),rgba(250,204,21,0.45))]",
};

export function MetalBorderCard({
  children,
  className,
  innerClassName,
  borderRadius = 16,
  preset = "chromatic",
}: MetalBorderCardProps) {
  const radiusStyle = { borderRadius: `${borderRadius}px` };

  return (
    <div
      className={cn("group/metal relative h-full w-full", className)}
      style={radiusStyle}
    >
      {/* hover glow — pure CSS, no WebGL */}
      <div
        aria-hidden
        style={radiusStyle}
        className={cn(
          "pointer-events-none absolute -inset-px -z-10 opacity-0 blur-[6px]",
          "transition-opacity duration-300 group-hover/metal:opacity-100",
          GLOW_GRADIENT[preset]
        )}
      />
      <div
        style={radiusStyle}
        className={cn(
          "relative h-full w-full overflow-hidden bg-zinc-900/50 backdrop-blur-sm",
          "border border-white/8 transition-colors duration-300",
          "group-hover/metal:border-white/20 group-hover/metal:bg-zinc-900/80",
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
