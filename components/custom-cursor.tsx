"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

const MORPH_SELECTOR =
  'a, button, [role="button"], [data-cursor="hover"]';

function shouldMorph(el: HTMLElement) {
  return !el.closest("[data-cursor-skip]");
}

type Target = { w: number; h: number; r: number } | null;

const RING_SIZE = 30;
const PAD = 6;

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [target, setTarget] = useState<Target>(null);
  const prefersReducedMotion = useReducedMotion();

  // ring follows with spring; dot is instant
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);
  const sx = useSpring(ringX, { stiffness: 450, damping: 34, mass: 0.4 });
  const sy = useSpring(ringY, { stiffness: 450, damping: 34, mass: 0.4 });
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    setEnabled(true);
    document.body.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      setVisible(true);
      dotX.set(e.clientX);
      dotY.set(e.clientY);

      const el = (e.target as Element | null)?.closest(
        MORPH_SELECTOR
      ) as HTMLElement | null;

      if (el && shouldMorph(el)) {
        const rect = el.getBoundingClientRect();
        const radius = parseFloat(getComputedStyle(el).borderRadius) || 8;
        setTarget({
          w: rect.width + PAD * 2,
          h: rect.height + PAD * 2,
          r: radius + PAD,
        });
        // wrap the element (independent of pointer position within it)
        ringX.set(rect.left - PAD);
        ringY.set(rect.top - PAD);
      } else {
        setTarget(null);
        ringX.set(e.clientX - RING_SIZE / 2);
        ringY.set(e.clientY - RING_SIZE / 2);
      }
    };
    const down = () => setClicked(true);
    const up = () => setClicked(false);
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.documentElement.addEventListener("mouseleave", leave);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [prefersReducedMotion, ringX, ringY, dotX, dotY]);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 200ms ease" }}
      aria-hidden
    >
      {/* morphing white ring */}
      <motion.div style={{ x: sx, y: sy }} className="absolute left-0 top-0">
        <motion.div
          animate={{
            width: target ? target.w : RING_SIZE,
            height: target ? target.h : RING_SIZE,
            borderRadius: target ? target.r : 999,
            scale: clicked && !target ? 0.8 : 1,
            backgroundColor: target
              ? "rgba(255,255,255,0.08)"
              : "rgba(255,255,255,0)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.5 }}
          className="border-2 border-white/85"
        />
      </motion.div>

      {/* instant core dot — hidden while wrapping a target */}
      <motion.div style={{ x: dotX, y: dotY }} className="absolute left-0 top-0">
        <motion.div
          animate={{
            scale: target ? 0 : clicked ? 2.4 : 1,
            opacity: target ? 0 : 1,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 24 }}
          className="-ml-[3px] -mt-[3px] size-1.5 rounded-full bg-white"
        />
      </motion.div>
    </div>
  );
}
