"use client";

import { SectionBackdrop } from "@/components/section-backdrop";
import { SectionReveal } from "@/components/section-reveal";
import { FeatureCard } from "@/components/feature-card";
import { CardPreview, type CardPreviewKey } from "@/components/card-preview";
import { OUTCOMES, OUTCOME_PREVIEWS } from "@/lib/constants";

export function Outcomes() {
  return (
    <section className="relative border-b border-white/6 bg-zinc-950 py-24 sm:py-32">
      <SectionBackdrop variant="cool" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            The point of all this
          </p>
          <h2 className="font-serif text-3xl text-zinc-50 sm:text-4xl">
            We don&apos;t just talk about AI.
            <span className="block text-zinc-400">
              We build it into your business.
            </span>
          </h2>
        </SectionReveal>

        <div className="mt-16 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {OUTCOMES.map((outcome, index) => (
            <SectionReveal key={outcome.title} className="h-full" delay={index * 0.08}>
              <FeatureCard
                title={outcome.title}
                description={outcome.description}
                preview={
                  <CardPreview
                    type={
                      OUTCOME_PREVIEWS[
                        outcome.title as keyof typeof OUTCOME_PREVIEWS
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
