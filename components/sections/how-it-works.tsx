"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionBackdrop } from "@/components/section-backdrop";
import { SectionReveal } from "@/components/section-reveal";
import { MetalBorderCard } from "@/components/metal-border-card";
import { STEPS } from "@/lib/constants";

export function HowItWorks() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-24 overflow-hidden border-b border-white/6 bg-zinc-950 py-28 sm:py-36"
    >
      <SectionBackdrop variant="cool" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
            How it works
          </p>
          <h2 className="font-serif text-3xl text-zinc-50 sm:text-4xl md:text-5xl">
            From audit to shipped tool in 12 weeks
          </h2>
          <p className="mt-4 text-zinc-400">
            Four phases. One goal: AI that runs in your business.
          </p>
        </SectionReveal>

        <div className="relative mt-16 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* connector line — desktop only */}
          <div
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[2.75rem] hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block"
            aria-hidden
          />

          {STEPS.map((step, index) => {
            const card = (
              <MetalBorderCard
                className="h-full"
                innerClassName="flex h-full flex-col p-5 sm:p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-zinc-800/80 font-serif text-lg text-zinc-200">
                    {index + 1}
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                    {step.phase}
                  </span>
                </div>
                <h3 className="text-base font-medium text-zinc-100 sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                  {step.description}
                </p>
              </MetalBorderCard>
            );

            if (prefersReducedMotion) {
              return (
                <div key={step.title} className="h-full">
                  {card}
                </div>
              );
            }

            return (
              <motion.div
                key={step.title}
                className="h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {card}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
