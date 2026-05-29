"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroShaderBg } from "@/components/hero-shader-bg";
import { MetalCta } from "@/components/metal-cta";
import { SiteLogo } from "@/components/site-logo";
import { ProofMarquee } from "@/components/sections/proof-marquee";
import { ThemeIcon } from "@/components/theme-icon";
import { Badge } from "@/components/ui/badge";
import { APPLY_URL, TRUST_BADGES } from "@/lib/constants";
import { getSectionIcon, TRUST_BADGE_ICONS } from "@/lib/section-icons";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const motionProps = prefersReducedMotion
    ? { initial: false as const }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden border-b border-white/6 pt-16">
      <HeroShaderBg />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 py-20 text-center sm:px-8">
        <motion.div
          {...motionProps}
          transition={{ duration: 0.7, ease, delay: 0.05 }}
          className="mb-8"
        >
          <SiteLogo className="text-xl sm:text-2xl md:text-3xl" />
        </motion.div>

        <motion.h1
          {...motionProps}
          transition={{ duration: 0.7, ease, delay: 0.12 }}
          className="text-balance font-serif text-5xl leading-[1.05] tracking-tight text-zinc-50 drop-shadow-[0_2px_24px_rgba(0,0,0,0.8)] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="italic">Too busy to build AI?</span>
          <br />
          <span className="font-sans text-4xl font-semibold not-italic sm:text-5xl md:text-6xl lg:text-7xl">
            We build it with you.
          </span>
        </motion.h1>

        <motion.p
          {...motionProps}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
        >
          Implement AI systems that make you money — in days, not months. A
          12-week, action-first mastermind with a dedicated implementation
          specialist.
        </motion.p>

        <motion.div
          {...motionProps}
          transition={{ duration: 0.7, ease, delay: 0.28 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MetalCta
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
          >
            Apply to Join
          </MetalCta>
          <a
            href="#how-it-works"
            className={cn(
              "inline-flex h-13 items-center justify-center whitespace-nowrap rounded-full",
              "border border-white/12 bg-white/5 px-8 text-base font-medium text-zinc-200",
              "backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
            )}
          >
            See how it works
          </a>
        </motion.div>

        <motion.div
          {...motionProps}
          transition={{ duration: 0.7, ease, delay: 0.36 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2.5"
        >
          {TRUST_BADGES.map((badge) => (
            <Badge
              key={badge}
              variant="outline"
              className="gap-2 border-white/10 bg-zinc-900/60 px-3.5 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-sm"
            >
              <ThemeIcon
                icon={getSectionIcon(TRUST_BADGE_ICONS, badge)}
                size="sm"
                bare
                className="size-3.5"
              />
              {badge}
            </Badge>
          ))}
        </motion.div>

        <motion.div
          {...motionProps}
          transition={{ duration: 0.7, ease, delay: 0.42 }}
          className="w-full"
        >
          <ProofMarquee embedded />
        </motion.div>
      </div>
    </section>
  );
}
