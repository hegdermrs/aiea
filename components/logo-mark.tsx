import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClass = {
  sm: "size-11",
  md: "size-14",
  lg: "size-20 sm:size-24",
} as const;

const textClass = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-3xl sm:text-4xl",
} as const;

/** Metallic ring emblem — matches app/icon.svg */
export function LogoMark({ className, size = "md" }: LogoMarkProps) {
  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center",
        sizeClass[size],
        className
      )}
      aria-hidden
    >
      <div
        className="logo-mark-ring-a absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, #fafafa, #71717a, #e4e4e7, #52525b, #d4d4d8, #a1a1aa, #fafafa)",
          WebkitMask:
            "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
        }}
      />
      <div
        className="logo-mark-ring-b absolute inset-[10%] rounded-full"
        style={{
          background:
            "conic-gradient(from 180deg, #d4d4d8, #fafafa, #52525b, #e4e4e7, #71717a, #d4d4d8)",
          WebkitMask:
            "radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1.5px))",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1.5px))",
        }}
      />
      <div className="absolute inset-[22%] rounded-full border border-white/15 bg-zinc-950/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]" />
      <div
        className="absolute inset-[26%] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.35), transparent 55%)",
        }}
      />
      <span
        className={cn(
          "relative font-serif italic leading-none tracking-tight text-zinc-50",
          textClass[size]
        )}
      >
        AEA
      </span>
    </div>
  );
}
