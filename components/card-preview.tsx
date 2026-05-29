"use client";

import {
  AuditPreview,
  CommunityPreview,
  CostPreview,
  CuratedGroupPreview,
  DecisionsPreview,
  FastShipPreview,
  GuaranteePreview,
  RevenuePreview,
  SpecialistPreview,
  TimePreview,
  WeeklySessionPreview,
} from "@/components/card-previews";

const PREVIEW_MAP = {
  curated: CuratedGroupPreview,
  session: WeeklySessionPreview,
  community: CommunityPreview,
  specialist: SpecialistPreview,
  audit: AuditPreview,
  ship: FastShipPreview,
  guarantee: GuaranteePreview,
  revenue: RevenuePreview,
  costs: CostPreview,
  time: TimePreview,
  decisions: DecisionsPreview,
} as const;

export type CardPreviewKey = keyof typeof PREVIEW_MAP;

export function CardPreview({ type }: { type: CardPreviewKey }) {
  const Component = PREVIEW_MAP[type];
  return <Component />;
}
