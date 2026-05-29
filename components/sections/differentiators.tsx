import { SectionBackdrop } from "@/components/section-backdrop";
import { SectionReveal } from "@/components/section-reveal";
import { FeatureCard } from "@/components/feature-card";
import { CardPreview, type CardPreviewKey } from "@/components/card-preview";
import { DIFFERENTIATORS, DIFFERENTIATOR_PREVIEWS } from "@/lib/constants";

export function Differentiators() {
  return (
    <section className="relative border-b border-white/6 bg-zinc-950 py-28 sm:py-36">
      <SectionBackdrop />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
            What makes it different
          </p>
          <h2 className="font-serif text-3xl text-zinc-50 sm:text-4xl md:text-5xl">
            Most masterminds end with motivation.
            <span className="mt-2 block text-zinc-500">
              Ours ends with a shipped tool.
            </span>
          </h2>
        </SectionReveal>

        <div className="mt-16 grid auto-rows-fr gap-5 sm:grid-cols-2">
          {DIFFERENTIATORS.map((item, index) => (
            <SectionReveal key={item.title} className="h-full" delay={index * 0.08}>
              <FeatureCard
                title={item.title}
                description={item.description}
                preview={
                  <CardPreview
                    type={
                      DIFFERENTIATOR_PREVIEWS[
                        item.title as keyof typeof DIFFERENTIATOR_PREVIEWS
                      ] as CardPreviewKey
                    }
                  />
                }
              />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
