import type { LucideIcon } from "lucide-react";
import {
  Bot,
  CalendarDays,
  ClipboardList,
  Clock,
  Compass,
  FileCheck,
  Hammer,
  HelpCircle,
  ListChecks,
  MessagesSquare,
  RefreshCw,
  Rocket,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  UserCheck,
  Users,
  Video,
  Zap,
} from "lucide-react";

export const PILLAR_ICONS: Record<string, LucideIcon> = {
  "Clarity on direction": Compass,
  "Focused action": Target,
  Accountability: ShieldCheck,
};

export const DIFFERENTIATOR_ICONS: Record<string, LucideIcon> = {
  "A curated group": UserCheck,
  "Weekly strategy sessions": Video,
  "24/7 community": MessagesSquare,
  "Implementation specialist": Bot,
};

export const STEP_ICONS: Record<string, LucideIcon> = {
  "AI Business Audit": ScanSearch,
  "Identify actions": ListChecks,
  "Massive action": Rocket,
  "Adjust & act again": RefreshCw,
};

export const OUTCOME_ICONS: Record<string, LucideIcon> = {
  Revenue: TrendingUp,
  Costs: TrendingDown,
  Time: Clock,
  "Faster decisions": Zap,
};

export const PRICING_ICONS: Record<string, LucideIcon> = {
  "Detailed AI audit of your business": ClipboardList,
  "Weekly live 1-hour mastermind sessions (max 12 members)": CalendarDays,
  "Dedicated AI implementation engineer": Hammer,
  "Lifetime access to private Skool community": Users,
  "Money-back guarantee if you show up and do the work": ShieldCheck,
};

export const TRUST_BADGE_ICONS: Record<string, LucideIcon> = {
  "Application only": FileCheck,
  "Cohorts capped at 12": Users,
  "Led by Antonio Centeno": Sparkles,
};

export const FAQ_ICONS: Record<string, LucideIcon> = {
  "Who is this for — and not for?": UserCheck,
  "How is this different from other masterminds?": Sparkles,
  "What does the implementation specialist actually do?": Bot,
  "How many people are in each cohort?": Users,
  "How much time per week?": Clock,
  "Is there a money-back guarantee?": ShieldCheck,
};

export const NAV_LINK_ICONS: Record<string, LucideIcon> = {
  "How it works": ListChecks,
  Benefits: Sparkles,
  Pricing: ClipboardList,
  FAQ: HelpCircle,
};

export function getSectionIcon(
  map: Record<string, LucideIcon>,
  key: string
): LucideIcon {
  return map[key] ?? HelpCircle;
}
