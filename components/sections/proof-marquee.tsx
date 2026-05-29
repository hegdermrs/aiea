"use client";

import { PROOF_CAPABILITIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

type ProofMarqueeProps = {
  /** Sits inside hero — no section wrapper, tighter spacing */
  embedded?: boolean;
};

export function ProofMarquee({ embedded = false }: ProofMarqueeProps) {
  const items = [...PROOF_CAPABILITIES, ...PROOF_CAPABILITIES];

  const track = (
    <div className="relative flex overflow-hidden">
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r to-transparent sm:w-24",
          embedded ? "from-zinc-950/90" : "from-zinc-950"
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l to-transparent sm:w-24",
          embedded ? "from-zinc-950/90" : "from-zinc-950"
        )}
      />
      <div className="animate-marquee flex shrink-0 gap-3 pr-3">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="shrink-0 rounded-full border border-white/10 bg-zinc-900/70 px-4 py-2 text-xs font-medium text-zinc-400 backdrop-blur-sm sm:px-5 sm:py-2.5 sm:text-sm sm:text-zinc-300"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="animate-marquee flex shrink-0 gap-3 pr-3" aria-hidden>
        {items.map((item, i) => (
          <span
            key={`dup-${item}-${i}`}
            className="shrink-0 rounded-full border border-white/10 bg-zinc-900/70 px-4 py-2 text-xs font-medium text-zinc-400 backdrop-blur-sm sm:px-5 sm:py-2.5 sm:text-sm sm:text-zinc-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );

  if (embedded) {
    return (
      <div className="mt-14 w-full">
        <p className="mb-4 text-center text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-600 sm:text-xs sm:tracking-[0.28em]">
          Tools we actually build
        </p>
        {track}
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden border-b border-white/6 bg-zinc-950 py-10">
      <div className="mb-6 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
          Revenue-generating, cost-cutting, time-saving tools we actually build
        </p>
      </div>
      {track}
    </section>
  );
}
