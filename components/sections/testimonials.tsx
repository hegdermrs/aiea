"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionBackdrop } from "@/components/section-backdrop";
import { MetalBorderCard } from "@/components/metal-border-card";
import { SectionReveal } from "@/components/section-reveal";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  const reduced = useReducedMotion();

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-24 overflow-hidden border-b border-white/6 bg-zinc-950 py-28 sm:py-36"
    >
      <SectionBackdrop />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
            Proof, not promises
          </p>
          <h2 className="font-serif text-3xl text-zinc-50 sm:text-4xl md:text-5xl">
            Operators who stopped consuming and started shipping
          </h2>
          <p className="mt-4 text-sm text-zinc-500">
            From entrepreneurs in recent cohorts
          </p>
        </SectionReveal>

        <div className="mt-16 grid auto-rows-fr gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <SectionReveal key={item.name} className="h-full" delay={index * 0.1}>
              <MetalBorderCard
                className="h-full"
                innerClassName="flex h-full flex-col bg-gradient-to-b from-zinc-900/60 to-zinc-950 p-8"
              >
                <blockquote className="relative flex-1">
                  <span className="font-serif text-4xl leading-none text-zinc-600">
                    &ldquo;
                  </span>
                  <p className="mt-2 font-serif text-xl leading-snug text-zinc-100 sm:text-2xl">
                    {item.quote}
                  </p>
                </blockquote>
                <figcaption className="relative mt-8 shrink-0 border-t border-white/6 pt-6">
                  <p className="font-medium text-zinc-200">{item.name}</p>
                  <p className="mt-1 text-sm text-zinc-500">{item.role}</p>
                </figcaption>
              </MetalBorderCard>
            </SectionReveal>
          ))}
        </div>

        {!reduced && (
          <motion.div
            className="mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-4 border-y border-white/6 py-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { label: "8 hrs/week", sub: "typical time reclaimed (audit)" },
              { label: "12 max", sub: "members per cohort" },
              { label: "12 weeks", sub: "structured implementation" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-2xl text-zinc-100">{stat.label}</p>
                <p className="text-xs text-zinc-500">{stat.sub}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
