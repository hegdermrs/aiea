import type { ComponentType, HTMLAttributes, RefAttributes } from "react";

export type MetalFxPreset = "chromatic" | "silver" | "gold";

export type MetalFxProps = {
  children: React.ReactNode;
  variant?: "button" | "circle";
  preset?: MetalFxPreset;
  theme?: "dark" | "light" | "auto";
  strength?: number;
  paused?: boolean;
  normalizeHostStyles?: boolean;
  borderRadius?: number;
  ringCssPx?: number;
  shaderScale?: number;
  scale?: number;
  disableGlow?: boolean;
  className?: string;
};

export type MetalFxComponent = ComponentType<
  MetalFxProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>
>;

let metalFxPromise: Promise<{ MetalFx: MetalFxComponent }> | null = null;

export function loadMetalFx() {
  if (!metalFxPromise) {
    metalFxPromise = import("metal-fx").then((mod) => {
      mod.resumeShared();
      return { MetalFx: mod.MetalFx as MetalFxComponent };
    });
  }
  return metalFxPromise;
}
