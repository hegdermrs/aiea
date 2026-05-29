import { MetalBorderCard } from "@/components/metal-border-card";
import { MetalCta } from "@/components/metal-cta";
import { SectionBackdrop } from "@/components/section-backdrop";
import { SectionReveal } from "@/components/section-reveal";
import { SiteLogo } from "@/components/site-logo";
import { ThemeIcon } from "@/components/theme-icon";
import { APPLY_URL, PRICING_INCLUDES } from "@/lib/constants";
import { getSectionIcon, PRICING_ICONS } from "@/lib/section-icons";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative scroll-mt-24 overflow-hidden border-b border-white/6 bg-zinc-950 py-28 sm:py-36"
    >
      <SectionBackdrop variant="cool" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
            The investment
          </p>
          <h2 className="font-serif text-3xl text-zinc-50 sm:text-4xl md:text-5xl">
            One cohort. Everything you need to ship.
          </h2>
          <p className="mt-6 text-lg text-zinc-400">
            AI experts run $250–$1,000+/hr. Custom tools start at $10,000.
            There&apos;s a faster way.
          </p>
        </SectionReveal>

        <SectionReveal className="mx-auto mt-16 max-w-md" delay={0.1}>
          <MetalBorderCard preset="gold" innerClassName="overflow-hidden p-0">
            <div className="border-b border-white/8 px-8 pb-8 pt-8 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Full 12 weeks
              </p>
              <div className="relative mt-3">
                <div className="select-none font-serif text-6xl text-zinc-50 blur-[12px] transition-[filter] duration-500 ease-out group-hover/metal:blur-[0px]">
                  $7,500
                </div>
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-sm font-medium uppercase tracking-[0.18em] text-zinc-400 opacity-100 transition-opacity duration-300 group-hover/metal:opacity-0">
                  Hover to reveal
                </span>
              </div>
              <p className="mt-2 text-sm text-zinc-400">
                Inside the{" "}
                <SiteLogo className="inline text-inherit" />
              </p>
            </div>
            <div className="px-8 pb-8 pt-8">
              <ul className="space-y-4">
                {PRICING_INCLUDES.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-zinc-300"
                  >
                    <ThemeIcon
                      icon={getSectionIcon(PRICING_ICONS, item)}
                      size="sm"
                      bare
                      className="mt-0.5 group-hover/metal:text-zinc-300"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex justify-center">
                <MetalCta
                  href={APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                >
                  Apply to Join
                </MetalCta>
              </div>
            </div>
          </MetalBorderCard>
        </SectionReveal>
      </div>
    </section>
  );
}
