"use client";

import { MetalBorderCard } from "@/components/metal-border-card";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  description: string;
  preview: React.ReactNode;
  className?: string;
};

export function FeatureCard({
  title,
  description,
  preview,
  className,
}: FeatureCardProps) {
  return (
    <MetalBorderCard
      className={cn("h-full", className)}
      innerClassName="flex h-full flex-col overflow-hidden p-0"
    >
      <div className="relative h-[180px] shrink-0 overflow-hidden border-b border-white/6 bg-gradient-to-b from-zinc-800/30 via-zinc-900/70 to-zinc-950 sm:h-[188px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,255,255,0.06),transparent_55%)]" />
        <div className="relative flex h-full items-center justify-center p-4 sm:p-5">
          {preview}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-medium text-zinc-100">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
          {description}
        </p>
      </div>
    </MetalBorderCard>
  );
}
