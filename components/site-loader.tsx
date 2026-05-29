"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { SiteLogo } from "@/components/site-logo";

const SESSION_KEY = "aiea-loader-seen";
const MIN_MS = 900;
const REVEAL_S = 1.8;
const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

function markReady() {
  document.documentElement.classList.add("aiea-ready");
}

export function SiteLoader() {
  const prefersReducedMotion = useReducedMotion();
  const [active, setActive] = useState(false);
  const [phase, setPhase] = useState<"loading" | "reveal">("loading");
  const holeRadius = useMotionValue(0);

  const mask = useMotionTemplate`radial-gradient(circle at 50% 50%, transparent ${holeRadius}%, black ${holeRadius}%)`;

  useLayoutEffect(() => {
    if (prefersReducedMotion || sessionStorage.getItem(SESSION_KEY)) {
      markReady();
      return;
    }
    setActive(true);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!active) return;

    const start = Date.now();
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;

      const elapsed = Date.now() - start;
      const wait = Math.max(0, MIN_MS - elapsed);

      window.setTimeout(() => {
        markReady();
        setPhase("reveal");
        holeRadius.set(0);

        animate(holeRadius, 150, {
          duration: REVEAL_S,
          ease: REVEAL_EASE,
        }).then(() => {
          sessionStorage.setItem(SESSION_KEY, "1");
          setActive(false);
        });
      }, wait);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    return () => {
      finished = true;
      window.removeEventListener("load", finish);
    };
  }, [active, holeRadius]);

  if (!active) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] overflow-hidden"
      data-site-loader
      aria-hidden
    >
      <motion.div
        className="absolute inset-0 bg-zinc-950"
        style={{
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
      >
        {phase === "loading" && (
          <>
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <SiteLogo className="whitespace-nowrap text-2xl sm:text-3xl md:text-4xl" />
            </div>
            <p className="loader-label pointer-events-none absolute bottom-10 left-0 right-0 text-center text-xs font-medium uppercase tracking-[0.32em] text-zinc-500">
              Loading
            </p>
          </>
        )}
      </motion.div>
    </div>
  );
}
