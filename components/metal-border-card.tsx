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

const HOVER_BORDER: Record<CardGlow, string> = {
  chromatic:
    "hover:bg-[linear-gradient(120deg,rgba(167,139,250,0.7),rgba(34,211,238,0.55),rgba(240,171,252,0.45),rgba(167,139,250,0.7))]",
  silver:
    "hover:bg-[linear-gradient(120deg,rgba(228,228,231,0.55),rgba(161,161,170,0.45),rgba(228,228,231,0.55))]",
  gold:
    "hover:bg-[linear-gradient(120deg,rgba(250,204,21,0.65),rgba(245,158,11,0.5),rgba(250,204,21,0.65))]",
};

const HOVER_SHADOW: Record<CardGlow, string> = {
  chromatic:
    "hover:shadow-[0_0_28px_-6px_rgba(167,139,250,0.5),0_0_44px_-10px_rgba(34,211,238,0.35)]",
  silver: "hover:shadow-[0_0_24px_-6px_rgba(228,228,231,0.35)]",
  gold: "hover:shadow-[0_0_28px_-6px_rgba(250,204,21,0.45)]",
};

export function MetalBorderCard({
  children,
  className,
  innerClassName,
  borderRadius = 16,
  preset = "chromatic",
}: MetalBorderCardProps) {
  const outerRadius = { borderRadius: `${borderRadius}px` };
  const innerRadius = { borderRadius: `${Math.max(borderRadius - 1, 0)}px` };

  return (
    <div
      className={cn(
        "group/metal relative h-full w-full p-px",
        "bg-white/8 transition-shadow duration-500 ease-out",
        HOVER_BORDER[preset],
        HOVER_SHADOW[preset],
        className
      )}
      style={outerRadius}
    >
      <div
        style={innerRadius}
        className={cn(
          "relative h-full w-full overflow-hidden bg-zinc-900/50 backdrop-blur-sm",
          "transition-[background-color] duration-500 ease-out",
          "group-hover/metal:bg-zinc-900/80",
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
