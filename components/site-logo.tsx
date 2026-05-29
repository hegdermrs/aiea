import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  /** Stack “Execution” / “Accelerator” on two lines. */
  multiline?: boolean;
  /** Show ™ superscript — on by default. */
  trademark?: boolean;
};

export function SiteLogo({
  className,
  multiline,
  trademark = true,
}: SiteLogoProps) {
  const tm = trademark ? (
    <sup className="site-logo-tm">TM</sup>
  ) : null;

  if (multiline) {
    return (
      <p
        className={cn(
          "max-w-xl text-balance text-center font-serif font-medium leading-tight tracking-tight text-zinc-100",
          className
        )}
      >
        <span className="text-metal-chromatic">AI</span>
        {" Execution"}
        <br />
        Accelerator
        {tm}
      </p>
    );
  }

  return (
    <span
      className={cn(
        "font-serif font-medium tracking-tight text-zinc-100",
        className
      )}
    >
      <span className="text-metal-chromatic">AI</span>
      {" Execution Accelerator"}
      {tm}
    </span>
  );
}
