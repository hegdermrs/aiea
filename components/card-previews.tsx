"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, MessageCircle, Users, Video, Zap } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

function PreviewFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[280px] rounded-xl border border-white/10 bg-zinc-950/90 p-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] backdrop-blur-sm">
      {children}
    </div>
  );
}

export function CuratedGroupPreview() {
  const reduced = useReducedMotion();
  const slots = Array.from({ length: 12 });

  return (
    <PreviewFrame>
      <div className="mb-2 flex items-center justify-between text-[10px] text-zinc-500">
        <span>Cohort roster</span>
        <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-emerald-400">
          12 max
        </span>
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {slots.map((_, i) => (
          <motion.div
            key={i}
            className="aspect-square rounded-lg bg-zinc-800/80 ring-1 ring-white/5"
            initial={reduced ? false : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.06, duration: 0.35, ease }}
          >
            <div className="flex h-full items-center justify-center">
              <Users className="size-3 text-zinc-600" />
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-2 h-1 overflow-hidden rounded-full bg-zinc-800"
        initial={false}
      >
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500/80 to-cyan-400/80"
          animate={reduced ? { width: "100%" } : { width: ["40%", "100%", "40%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </PreviewFrame>
  );
}

export function WeeklySessionPreview() {
  const reduced = useReducedMotion();

  return (
    <PreviewFrame>
      <div className="mb-2 flex items-center gap-2">
        <div className="relative flex size-8 items-center justify-center rounded-lg bg-zinc-800">
          <Video className="size-4 text-zinc-300" />
          {!reduced && (
            <span className="absolute -right-0.5 -top-0.5 size-2 animate-pulse rounded-full bg-red-500 ring-2 ring-zinc-950" />
          )}
        </div>
        <div>
          <p className="text-[11px] font-medium text-zinc-200">Weekly strategy</p>
          <p className="text-[10px] text-zinc-500">60 min · Live now</p>
        </div>
      </div>
      <div className="space-y-1.5">
        {["Today's bottleneck", "Action plan", "Ship by Monday"].map((item, i) => (
          <motion.div
            key={item}
            className="flex items-center gap-2 rounded-md bg-zinc-900/80 px-2 py-1.5 text-[10px] text-zinc-400"
            initial={reduced ? false : { opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.4, ease }}
          >
            <span className="size-1.5 rounded-full bg-violet-400" />
            {item}
          </motion.div>
        ))}
      </div>
    </PreviewFrame>
  );
}

export function CommunityPreview() {
  const messages = [
    { user: "Sarah", text: "Shipped the lead agent 🚀" },
    { user: "Marcus", text: "Audit saved us 8 hrs/week" },
    { user: "Elena", text: "Specialist nailed the GPT" },
  ];
  const reduced = useReducedMotion();

  return (
    <PreviewFrame>
      <div className="mb-2 flex items-center gap-1.5 text-[10px] text-zinc-500">
        <MessageCircle className="size-3" />
        Skool · 24/7
      </div>
      <div className="space-y-2 overflow-hidden">
        {messages.map((msg, i) => (
          <motion.div
            key={msg.user}
            className="rounded-lg bg-zinc-900/90 px-2.5 py-2"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.5, duration: 0.45, ease }}
          >
            <p className="text-[10px] font-medium text-zinc-300">{msg.user}</p>
            <p className="text-[10px] text-zinc-500">{msg.text}</p>
          </motion.div>
        ))}
      </div>
    </PreviewFrame>
  );
}

export function SpecialistPreview() {
  const reduced = useReducedMotion();
  const lines = [
    { w: "85%", label: "Lead agent workflow" },
    { w: "70%", label: "CRM integration" },
    { w: "95%", label: "Deploy to production" },
  ];

  return (
    <PreviewFrame>
      <div className="mb-2 font-mono text-[10px] text-emerald-400/90">
        implementation.engineer
      </div>
      <div className="space-y-2">
        {lines.map((line, i) => (
          <div key={line.label}>
            <div className="mb-1 flex justify-between text-[9px] text-zinc-500">
              <span>{line.label}</span>
              {!reduced && i === 2 && (
                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  className="text-emerald-400"
                >
                  building…
                </motion.span>
              )}
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-zinc-800">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                initial={{ width: "0%" }}
                animate={{ width: line.w }}
                transition={{ delay: 0.3 + i * 0.4, duration: 0.8, ease }}
              />
            </div>
          </div>
        ))}
      </div>
    </PreviewFrame>
  );
}

export function AuditPreview() {
  const reduced = useReducedMotion();
  const metrics = [
    { label: "Hours saved", value: "8/wk" },
    { label: "Cost reclaimed", value: "$3.2k" },
    { label: "Tools mapped", value: "6" },
  ];

  return (
    <PreviewFrame>
      <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-zinc-500">
        AI Business Audit
      </p>
      <div className="grid grid-cols-3 gap-1.5">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            className="rounded-lg bg-zinc-900/90 p-2 text-center"
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12, duration: 0.35, ease }}
          >
            <motion.p
              className="text-sm font-semibold text-zinc-100"
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.15 }}
            >
              {m.value}
            </motion.p>
            <p className="text-[8px] text-zinc-500">{m.label}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-2 flex items-center gap-1.5 rounded-md border border-white/6 bg-zinc-900/50 px-2 py-1.5 text-[9px] text-zinc-400"
        animate={reduced ? undefined : { borderColor: ["rgba(255,255,255,0.06)", "rgba(167,139,250,0.3)", "rgba(255,255,255,0.06)"] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Zap className="size-3 text-violet-400" />
        Report delivered in 2 business days
      </motion.div>
    </PreviewFrame>
  );
}

export function FastShipPreview() {
  const reduced = useReducedMotion();
  const items = ["Lead agent", "Inbox triage", "Custom GPT"];

  return (
    <PreviewFrame>
      <p className="mb-2 text-[10px] text-zinc-500">Shipped this cohort</p>
      <div className="space-y-1.5">
        {items.map((item, i) => (
          <motion.div
            key={item}
            className="flex items-center gap-2 rounded-md bg-zinc-900/80 px-2 py-1.5"
            initial={reduced ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.6, duration: 0.4, ease }}
          >
            <motion.span
              initial={reduced ? false : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7 + i * 0.6, type: "spring", stiffness: 400 }}
            >
              <Check className="size-3 text-emerald-400" />
            </motion.span>
            <span className="text-[10px] text-zinc-300">{item}</span>
            <span className="ml-auto text-[9px] text-zinc-600">live</span>
          </motion.div>
        ))}
      </div>
    </PreviewFrame>
  );
}

export function GuaranteePreview() {
  const reduced = useReducedMotion();

  return (
    <PreviewFrame>
      <motion.div
        className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10"
        animate={reduced ? undefined : { scale: [1, 1.04, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Check className="size-8 text-emerald-400" strokeWidth={2.5} />
      </motion.div>
      <p className="mt-3 text-center text-[11px] font-medium text-zinc-200">
        Show up. Do the work.
      </p>
      <p className="text-center text-[10px] text-zinc-500">Money-back guarantee</p>
    </PreviewFrame>
  );
}

export function RevenuePreview() {
  const reduced = useReducedMotion();
  const bars = [40, 55, 48, 72, 68, 90];

  return (
    <PreviewFrame>
      <p className="mb-2 text-[10px] text-zinc-500">Revenue impact</p>
      <div className="flex h-20 items-end justify-between gap-1">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="w-full rounded-t bg-gradient-to-t from-violet-600/80 to-cyan-400/60"
            initial={reduced ? { height: `${h}%` } : { height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ delay: i * 0.08, duration: 0.5, ease }}
          />
        ))}
      </div>
    </PreviewFrame>
  );
}

export function CostPreview() {
  const reduced = useReducedMotion();

  return (
    <PreviewFrame>
      <p className="mb-1 text-[10px] text-zinc-500">Manual work automated</p>
      <motion.p
        className="text-2xl font-semibold tabular-nums text-zinc-100"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.span
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          −
        </motion.span>
        <motion.span
          initial={reduced ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          34%
        </motion.span>
      </motion.p>
      <motion.div
        className="mt-2 h-1 overflow-hidden rounded-full bg-zinc-800"
        initial={false}
      >
        <motion.div
          className="h-full rounded-full bg-emerald-500"
          animate={reduced ? { width: "66%" } : { width: ["20%", "66%", "66%"] }}
          transition={{ duration: 2.5, times: [0, 0.6, 1] }}
        />
      </motion.div>
    </PreviewFrame>
  );
}

export function TimePreview() {
  const reduced = useReducedMotion();
  const hours = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  return (
    <PreviewFrame>
      <p className="mb-2 text-[10px] text-zinc-500">Hours back / week</p>
      <div className="flex justify-between gap-1">
        {hours.map((day, i) => (
          <div key={day} className="flex flex-1 flex-col items-center gap-1">
            <motion.div
              className="w-full rounded-md bg-cyan-500/20"
              initial={reduced ? { height: 24 + i * 4 } : { height: 8 }}
              animate={{ height: 24 + i * 4 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.45, ease }}
            />
            <span className="text-[8px] text-zinc-600">{day}</span>
          </div>
        ))}
      </div>
    </PreviewFrame>
  );
}

export function DecisionsPreview() {
  const reduced = useReducedMotion();

  return (
    <PreviewFrame>
      <div className="space-y-2">
        {["Audit complete", "Priority set", "Ship decision"].map((step, i) => (
          <motion.div
            key={step}
            className="flex items-center gap-2"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: i < 2 ? 1 : 0.35 }}
            transition={{ delay: i * 0.4, duration: 0.3 }}
          >
            <div
              className={`size-4 rounded-full ${i < 2 ? "bg-violet-500" : "border border-zinc-700"}`}
            />
            <span className="text-[10px] text-zinc-400">{step}</span>
          </motion.div>
        ))}
      </div>
    </PreviewFrame>
  );
}
