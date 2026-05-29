import { RainbowGlow } from "@/components/rainbow-glow";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/6 bg-zinc-950 py-10">
      <RainbowGlow position="bottom" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-center sm:flex-row sm:px-8 sm:text-left">
        <div>
          <p className="font-serif text-sm text-zinc-300">{SITE.name}</p>
          <p className="mt-1 text-xs text-zinc-500">By {SITE.founder}</p>
        </div>
        <p className="text-xs text-zinc-600">
          © 2026 The AI Execution Accelerator. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
