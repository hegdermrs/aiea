"use client";

import { SectionBackdrop } from "@/components/section-backdrop";
import { SectionReveal } from "@/components/section-reveal";
import { FeatureCard } from "@/components/feature-card";
import { CardPreview, type CardPreviewKey } from "@/components/card-preview";
import { MEMBERSHIP_BENEFITS } from "@/lib/constants";

export function MembershipBenefits() {
  return (
    <section
      id="benefits"
      className="relative scroll-mt-24 overflow-hidden border-b border-white/6 bg-zinc-950 py-28 sm:py-36"
    >
      <SectionBackdrop variant="warm" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
            Membership benefits
          </p>
          <h2 className="font-serif text-3xl text-zinc-50 sm:text-4xl md:text-5xl">
            Everything included in your cohort
          </h2>
          <p className="mt-6 text-lg text-zinc-400">
            Audit, weekly sessions, a dedicated engineer, and a private room of
            operators — one investment, no surprise add-ons.
          </p>
        </SectionReveal>

        <div className="mt-16 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MEMBERSHIP_BENEFITS.map((benefit, index) => (
            <SectionReveal key={benefit.title} className="h-full" delay={index * 0.06}>
              <FeatureCard
                title={benefit.title}
                description={benefit.description}
                preview={
                  <CardPreview type={benefit.preview as CardPreviewKey} />
                }
              />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
