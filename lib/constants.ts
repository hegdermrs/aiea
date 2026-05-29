// TODO: Replace with the real external application URL when ready
export const APPLY_URL = "#";

/** Set to the date you last updated the countdown; cohort is WEEKS_UNTIL_COHORT after this. */
const COHORT_COUNTDOWN_ANCHOR = new Date("2026-05-29T09:00:00-05:00");
const WEEKS_UNTIL_COHORT = 11;

function cohortStartFromAnchor(anchor: Date, weeks: number): Date {
  const date = new Date(anchor);
  date.setDate(date.getDate() + weeks * 7);
  return date;
}

/** Aug 14, 2026 · 9:00 AM CT (11 weeks from anchor) */
export const COHORT_START_DATE = cohortStartFromAnchor(
  COHORT_COUNTDOWN_ANCHOR,
  WEEKS_UNTIL_COHORT
);

export const SITE = {
  name: "AI Execution Accelerator",
  tagline: "Too busy to build AI? · We build it with you.",
  founder: "Antonio Centeno",
} as const;

export const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Benefits", href: "#benefits" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const PILLARS = [
  {
    title: "Clarity on direction",
    description:
      "Know exactly which AI opportunities matter for your business — and which to ignore.",
  },
  {
    title: "Focused action",
    description:
      "A clear plan that attacks the highest-leverage work first, so you see ROI fast.",
  },
  {
    title: "Accountability",
    description:
      "A room and a specialist that keep you moving until the project is shipped — not shelved.",
  },
] as const;

export const DIFFERENTIATORS = [
  {
    title: "A curated group",
    description:
      "Small and intentional. Every member is interviewed and must meet our business-size criteria.",
  },
  {
    title: "Weekly strategy sessions",
    description:
      "One focused 60-minute Zoom each week — insight into action, fast.",
  },
  {
    title: "24/7 community",
    description:
      "Stay connected in our private Skool community between calls.",
  },
  {
    title: "Implementation specialist",
    description:
      "Your specialist builds with you right after each session — projects launch in days, not months.",
  },
] as const;

export const STEPS = [
  {
    phase: "Immediately",
    title: "AI Business Audit",
    description:
      "We audit your business to pinpoint exactly where AI can eliminate your biggest bottleneck.",
  },
  {
    phase: "First week",
    title: "Identify actions",
    description:
      "We build a plan of attack on the low-hanging fruit for immediate ROI.",
  },
  {
    phase: "First 2 weeks",
    title: "Massive action",
    description:
      "With a plan in place, you start building — visible progress and real value, fast.",
  },
  {
    phase: "Weeks 3–12",
    title: "Adjust & act again",
    description:
      "Evaluate, adjust, and ship. Your ideas meet reality and finally come to fruition.",
  },
] as const;

export const OUTCOMES = [
  {
    title: "Revenue",
    description: "Build tools that win and keep more customers.",
  },
  {
    title: "Costs",
    description: "Automate the manual work draining your margins.",
  },
  {
    title: "Time",
    description: "Hand execution to systems that run themselves.",
  },
  {
    title: "Faster decisions",
    description: "Better strategic calls, made sooner.",
  },
] as const;

export const PRICING_INCLUDES = [
  "Detailed AI audit of your business",
  "Weekly live 1-hour mastermind sessions (max 12 members)",
  "Dedicated AI implementation engineer",
  "Lifetime access to private Skool community",
  "Money-back guarantee if you show up and do the work",
] as const;

export const FAQ_ITEMS = [
  {
    question: "Who is this for — and not for?",
    answer:
      "This is for entrepreneurs serious about shipping AI into their business — not for hobbyists or those looking for another course to consume. You need a real business with revenue and the willingness to take action weekly.",
  },
  {
    question: "How is this different from other masterminds?",
    answer:
      "Most masterminds end with motivation. Ours ends with a shipped tool. You get a dedicated implementation specialist who builds with you after every session — so projects launch in days, not months.",
  },
  {
    question: "What does the implementation specialist actually do?",
    answer:
      "They work alongside you to build your AI automations and systems — speed-to-lead agents, custom GPTs, inbox triage, content systems, and more. You can stay hands-on or manage while they ship.",
  },
  {
    question: "How many people are in each cohort?",
    answer:
      "No more than 12 entrepreneurs per cohort. Application only — Antonio personally interviews every qualified applicant.",
  },
  {
    question: "How much time per week?",
    answer:
      "Plan for one 60-minute live session plus implementation time with your specialist. Most members invest 3–5 hours per week total.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Yes. If you show up, do the work, and don't see value, we'll refund your investment. We stand behind execution, not empty promises.",
  },
  {
    question: "Why is admission application-only?",
    answer:
      "Cohorts are capped at 12 and every member is interviewed to ensure fit — real businesses, real revenue, and a commitment to ship. Antonio personally speaks with qualified applicants before a seat is offered.",
  },
] as const;

export const TRUST_BADGES = [
  "Application only",
  "Cohorts capped at 12",
  "Led by Antonio Centeno",
] as const;

export const PROOF_CAPABILITIES = [
  "Lead agents",
  "Custom GPTs",
  "Inbox triage",
  "Content systems",
  "CRM automations",
  "Speed-to-lead",
  "Audit reports",
  "Workflow bots",
  "Sales pipelines",
  "Support agents",
] as const;

export const MEMBERSHIP_BENEFITS = [
  {
    title: "AI Business Audit",
    description:
      "Bottlenecks mapped, 4–7 tools recommended, install steps included — typical client reclaims 8 hrs/week.",
    preview: "audit" as const,
  },
  {
    title: "Weekly live mastermind",
    description:
      "Max 12 members. Real bottlenecks, concrete action plans — ship by Monday, not someday.",
    preview: "session" as const,
  },
  {
    title: "Dedicated implementation engineer",
    description:
      "Never left to figure it out alone. Your specialist builds automations and systems with you.",
    preview: "specialist" as const,
  },
  {
    title: "Private Skool community",
    description:
      "24/7 access to vetted operators — eCom founders, creators, coaches — sharing what's working.",
    preview: "community" as const,
  },
  {
    title: "Ship in days, not months",
    description:
      "Projects launch right after sessions. Visible progress and real ROI within the first two weeks.",
    preview: "ship" as const,
  },
  {
    title: "Money-back guarantee",
    description:
      "Show up, do the work, and if you don't see value — we'll refund your investment.",
    preview: "guarantee" as const,
  },
] as const;

// Placeholder quotes — swap for verified member testimonials
export const TESTIMONIALS = [
  {
    quote:
      "I finally shipped a lead agent in nine days. My last mastermind never got me past slide decks.",
    name: "Sarah K.",
    role: "eCom founder · 7-figure brand",
  },
  {
    quote:
      "The implementation specialist is the whole game. They built while I ran payroll and closed sales.",
    name: "Marcus T.",
    role: "Agency owner · 22 employees",
  },
  {
    quote:
      "The audit alone found $3,200 a month in wasted manual work. We had the first automation live in a week.",
    name: "Elena R.",
    role: "Business coach · 6-figure practice",
  },
] as const;

export const DIFFERENTIATOR_PREVIEWS = {
  "A curated group": "curated",
  "Weekly strategy sessions": "session",
  "24/7 community": "community",
  "Implementation specialist": "specialist",
} as const;

export const OUTCOME_PREVIEWS = {
  Revenue: "revenue",
  Costs: "costs",
  Time: "time",
  "Faster decisions": "decisions",
} as const;
