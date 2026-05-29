"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { loadMetalFx, type MetalFxComponent } from "@/lib/metal-fx-loader";
import { cn } from "@/lib/utils";

type MetalCtaProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  size?: "default" | "lg";
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  target?: string;
  rel?: string;
};

const sizeStyles = {
  default: "h-10 px-6 text-sm",
  lg: "h-13 px-8 text-base",
} as const;

export function MetalCta({
  href,
  children,
  className,
  size = "default",
  onClick,
  target,
  rel,
}: MetalCtaProps) {
  const prefersReducedMotion = useReducedMotion();
  const [MetalFx, setMetalFx] = useState<MetalFxComponent | null>(null);

  useEffect(() => {
    let active = true;
    loadMetalFx().then(({ MetalFx: Fx }) => {
      if (active) setMetalFx(() => Fx);
    });
    return () => {
      active = false;
    };
  }, []);

  const hostClass = cn(
    "inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-full",
    "font-medium tracking-tight text-zinc-50",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/50",
    sizeStyles[size],
    className
  );

  const fallbackClass = cn(
    hostClass,
    "border border-white/10 bg-zinc-900 transition-colors hover:bg-zinc-800"
  );

  if (!MetalFx) {
    if (href) {
      return (
        <a
          href={href}
          onClick={onClick}
          target={target}
          rel={rel}
          className={fallbackClass}
        >
          {children}
        </a>
      );
    }

    return (
      <button type="button" onClick={onClick} className={fallbackClass}>
        {children}
      </button>
    );
  }

  const metalProps = {
    variant: "button" as const,
    preset: "chromatic" as const,
    theme: "dark" as const,
    strength: 1,
    paused: !!prefersReducedMotion,
    className: "metal-cta-root inline-flex shrink-0 rounded-full",
  };

  if (href) {
    return (
      <MetalFx {...metalProps}>
        <a
          href={href}
          onClick={onClick}
          target={target}
          rel={rel}
          className={hostClass}
        >
          {children}
        </a>
      </MetalFx>
    );
  }

  return (
    <MetalFx {...metalProps}>
      <button type="button" onClick={onClick} className={hostClass}>
        {children}
      </button>
    </MetalFx>
  );
}
