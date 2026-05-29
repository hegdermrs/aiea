type SectionBackdropProps = {
  variant?: "default" | "hero" | "warm" | "cool";
};

const variants = {
  default:
    "bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,120,150,0.07),transparent_60%)]",
  hero: "bg-[radial-gradient(ellipse_70%_55%_at_50%_40%,rgba(100,100,130,0.06),transparent_65%)]",
  warm: "bg-[radial-gradient(ellipse_70%_50%_at_80%_20%,rgba(140,100,80,0.05),transparent_55%)]",
  cool: "bg-[radial-gradient(ellipse_70%_50%_at_20%_30%,rgba(80,120,160,0.06),transparent_55%)]",
};

export function SectionBackdrop({ variant = "default" }: SectionBackdropProps) {
  return (
    <>
      <div
        className={`pointer-events-none absolute inset-0 ${variants[variant]}`}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
        aria-hidden
      />
    </>
  );
}
