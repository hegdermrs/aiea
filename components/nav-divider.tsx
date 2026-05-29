import { cn } from "@/lib/utils";

type NavDividerProps = {
  className?: string;
  orientation?: "vertical" | "horizontal";
};

export function NavDivider({
  className,
  orientation = "vertical",
}: NavDividerProps) {
  if (orientation === "horizontal") {
    return (
      <div
        className={cn(
          "h-px w-full shrink-0 bg-gradient-to-r from-transparent via-white/15 to-transparent",
          className
        )}
        aria-hidden
      />
    );
  }

  return (
    <div
      className={cn(
        "h-4 w-px shrink-0 bg-gradient-to-b from-transparent via-white/20 to-transparent",
        className
      )}
      aria-hidden
    />
  );
}
