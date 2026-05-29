"use client";

import { memo } from "react";
import { LiquidMetal } from "@paper-design/shaders-react";
import { useReducedMotion } from "framer-motion";

const MemoizedLiquidMetal = memo(LiquidMetal);

export function HeroShaderBg() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />

      <div className="absolute left-1/2 top-[42%] h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-x-1/2 -translate-y-1/2 sm:h-[620px] sm:w-[620px] lg:h-[780px] lg:w-[780px]">
        <MemoizedLiquidMetal
          width="100%"
          height="100%"
          shape="metaballs"
          colorBack="#09090b00"
          colorTint="#8b8b96"
          repetition={5}
          softness={0.82}
          shiftRed={1}
          shiftBlue={-1}
          distortion={0.32}
          contour={0.45}
          angle={12}
          speed={prefersReducedMotion ? 0 : 0.45}
          scale={0.72}
          fit="cover"
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_45%,rgba(9,9,11,0.35)_0%,#09090b_68%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,transparent_0%,#09090b_72%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent" />
    </div>
  );
}
