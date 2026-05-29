import { cn } from "@/lib/utils";

type RainbowGlowProps = {
  position: "top" | "bottom";
  className?: string;
};

/** Faded, iPhone-style rainbow that forms an irregular arc and drifts its
 *  colors organically (non-linear). */
export function RainbowGlow({ position, className }: RainbowGlowProps) {
  const isTop = position === "top";
  const edge = isTop ? "top-0" : "bottom-0";

  // Arc shape: an ellipse centered just past the edge, so only its curved
  // flank shows — a soft downward (or upward) arc rather than a square band.
  const maskY = isTop ? "-35%" : "135%";
  const arcMask = `radial-gradient(120% 95% at 50% ${maskY}, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 38%, rgba(0,0,0,0) 72%)`;

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-x-0 h-80 overflow-hidden",
        edge,
        className
      )}
      style={{ WebkitMaskImage: arcMask, maskImage: arcMask }}
    >
      <div className="absolute inset-0 opacity-[0.2] blur-[64px]">
        <div
          className="absolute inset-[-45%] animate-[rainbow-drift_16s_ease-in-out_infinite]"
          style={{
            backgroundImage: [
              "radial-gradient(42% 60% at 18% 32%, rgba(248,113,113,0.9), transparent 70%)",
              "radial-gradient(38% 55% at 48% 64%, rgba(52,211,153,0.85), transparent 70%)",
              "radial-gradient(46% 64% at 74% 34%, rgba(129,140,248,0.9), transparent 70%)",
              "radial-gradient(32% 50% at 88% 68%, rgba(244,114,182,0.85), transparent 70%)",
              "radial-gradient(36% 55% at 34% 82%, rgba(251,191,36,0.85), transparent 70%)",
              "radial-gradient(40% 58% at 62% 16%, rgba(56,189,248,0.85), transparent 70%)",
            ].join(","),
          }}
        />
      </div>
    </div>
  );
}
