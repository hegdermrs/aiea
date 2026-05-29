"use client";

import { useEffect, useState } from "react";
import { COHORT_START_DATE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

type CountdownProps = {
  className?: string;
  targetDate?: Date;
  variant?: "default" | "nav";
  showPrefix?: boolean;
};

export function Countdown({
  className,
  targetDate = COHORT_START_DATE,
  variant = "default",
  showPrefix = true,
}: CountdownProps) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    getTimeLeft(targetDate)
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, variant === "nav" ? 60_000 : 1000);
    return () => clearInterval(interval);
  }, [mounted, targetDate, variant]);

  if (variant === "nav") {
    const time = mounted
      ? `${timeLeft.days}d ${pad(timeLeft.hours)}h ${pad(timeLeft.minutes)}m`
      : "—";
    const timeEl = (
      <span className="font-medium tabular-nums text-zinc-300">{time}</span>
    );

    if (!showPrefix) {
      return (
        <span
          className={cn("tabular-nums text-zinc-300", className)}
          aria-live="polite"
        >
          {time}
        </span>
      );
    }

    return (
      <p
        className={cn(
          "whitespace-nowrap text-sm leading-none text-zinc-500",
          className
        )}
        aria-live="polite"
      >
        Starts in {timeEl}
      </p>
    );
  }

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div
      className={cn(
        "flex flex-wrap justify-center gap-3 sm:gap-4",
        className
      )}
      aria-live="polite"
    >
      {units.map(({ value, label }) => (
        <div key={label} className="flex flex-col items-center gap-1">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-zinc-900/80 text-2xl font-semibold tabular-nums text-zinc-50 backdrop-blur-sm sm:h-16 sm:w-16 sm:text-3xl">
            {mounted ? pad(value) : "00"}
          </div>
          <span className="text-xs uppercase tracking-wider text-zinc-500">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
