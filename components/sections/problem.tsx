import Image from "next/image";
import { SectionBackdrop } from "@/components/section-backdrop";
import { SectionReveal } from "@/components/section-reveal";
import { FeatureCard } from "@/components/feature-card";
import { CardPreview } from "@/components/card-preview";
import { PILLARS } from "@/lib/constants";

const PILLAR_PREVIEWS = ["decisions", "ship", "specialist"] as const;

export function Problem() {
  return (
    <section className="relative border-b border-white/6 bg-zinc-950 py-28 sm:py-36">
      <SectionBackdrop variant="warm" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionReveal className="text-center lg:text-left">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
              The real problem
            </p>
            <h2 className="font-serif text-3xl leading-tight text-zinc-50 sm:text-4xl md:text-5xl">
              You don&apos;t have an information problem.
              <span className="mt-2 block text-zinc-500">
                You have an execution problem.
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              Everyone&apos;s playing with the tools on the surface — ChatGPT,
              Claude, Midjourney. The real leverage is the agentic AI underneath,
              built into your business. You already know it&apos;s coming; you
              just haven&apos;t shipped anything yet.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <figure className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
              <Image
                src="/imgs/6a106e4b6b56e0.21850769_tip_of_the_iceberg_2.webp"
                alt="The tip of the iceberg: surface AI tools above the water, agentic AI below"
                width={732}
                height={843}
                sizes="(min-width: 1024px) 28rem, 90vw"
                className="w-full object-cover brightness-[0.78] saturate-[0.85] contrast-[1.05]"
              />
              {/* blend the bright sky + sea into the dark theme */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/75 via-zinc-950/10 to-zinc-950/85"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-violet-950/30 via-transparent to-cyan-900/20 mix-blend-overlay"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10"
                aria-hidden
              />
            </figure>
          </SectionReveal>
        </div>

        <div className="mt-20 grid auto-rows-fr gap-5 md:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <SectionReveal
              key={pillar.title}
              className="h-full"
              delay={0.1 + index * 0.08}
            >
              <FeatureCard
                title={pillar.title}
                description={pillar.description}
                preview={<CardPreview type={PILLAR_PREVIEWS[index]} />}
              />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
