import { MetalCta } from "@/components/metal-cta";
import { Countdown } from "@/components/countdown";
import { SectionReveal } from "@/components/section-reveal";
import { APPLY_URL } from "@/lib/constants";

export function FinalCta() {
  return (
    <section className="bg-zinc-950 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <SectionReveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Your move
          </p>
          <h2 className="font-serif text-3xl text-zinc-50 sm:text-4xl md:text-5xl">
            Spend the next 12 weeks taking massive action — not another 12
            months thinking about it.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
            You don&apos;t have an information problem. You have an execution
            problem. Let&apos;s fix it together.
          </p>
        </SectionReveal>

        <SectionReveal className="mt-12" delay={0.1}>
          <p className="mb-6 text-sm text-zinc-500">
            The next cohort starts in:
          </p>
          <Countdown />
        </SectionReveal>

        <SectionReveal className="mt-12" delay={0.15}>
          <MetalCta
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
          >
            Apply to Join the Accelerator
          </MetalCta>
          <p className="mt-6 text-xs text-zinc-500">
            Application only · Cohorts capped at 12 · Money-back guarantee
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
