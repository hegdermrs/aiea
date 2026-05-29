import Image from "next/image";
import { Award } from "lucide-react";
import { SectionBackdrop } from "@/components/section-backdrop";
import { SectionReveal } from "@/components/section-reveal";
import { ThemeIcon } from "@/components/theme-icon";
import { SITE } from "@/lib/constants";

export function Founder() {
  return (
    <section className="relative border-b border-white/6 bg-zinc-950 py-24 sm:py-32">
      <SectionBackdrop variant="warm" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[auto_1fr]">
          <SectionReveal>
            <div className="relative mx-auto w-56 sm:w-64 lg:mx-0">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
                <Image
                  src="/imgs/69bbf9550e5412.02317150_AOC.webp"
                  alt={SITE.founder}
                  width={600}
                  height={800}
                  sizes="(min-width: 1024px) 16rem, 14rem"
                  className="h-auto w-full object-cover"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
              <ThemeIcon
                icon={Award}
                size="sm"
                className="absolute -bottom-2 -right-2 border-zinc-700 bg-zinc-800 shadow-lg"
              />
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Why this exists
            </p>
            <h2 className="font-serif text-3xl text-zinc-50 sm:text-4xl">
              Hi, I&apos;m {SITE.founder}.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              Like you, I&apos;m busy — seven kids, six businesses, and constant
              pressure to close sales and make payroll. But understanding this
              technology is vital to the future of every business.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-400">
              The shift in work ahead is the biggest since the industrial
              revolution — except it&apos;s moving 100x faster. I built the
              Execution Accelerator to make the pivot easier for entrepreneurs
              like you.
            </p>
            <p className="mt-6 text-sm text-zinc-500">
              Former Marine Corps officer · MBA, University of Texas · Owner of
              10 businesses including RealMenRealStyle (3.7M YouTube
              subscribers).
            </p>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
