"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { MetalCta } from "@/components/metal-cta";
import { Countdown } from "@/components/countdown";
import { NavDivider } from "@/components/nav-divider";
import { ThemeIcon } from "@/components/theme-icon";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { APPLY_URL, NAV_LINKS, SITE } from "@/lib/constants";
import { getSectionIcon, NAV_LINK_ICONS } from "@/lib/section-icons";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/8 bg-zinc-950/85 backdrop-blur-xl"
          : "bg-zinc-950/20 backdrop-blur-sm"
      )}
    >
      <div className="relative mx-auto flex h-16 max-w-6xl items-center px-5 sm:px-8">
        <div className="relative z-10 flex min-w-0 items-center gap-4">
          <Link
            href="#"
            className="truncate font-serif text-sm font-medium tracking-tight text-zinc-100 sm:text-base"
          >
            {SITE.name}
          </Link>
          <NavDivider className="hidden md:block" />
        </div>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center md:flex">
          {NAV_LINKS.map((link, index) => (
            <Fragment key={link.href}>
              {index > 0 && <NavDivider className="mx-5" />}
              <a
                href={link.href}
                className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
              >
                {link.label}
              </a>
            </Fragment>
          ))}
        </nav>

        <div className="relative z-10 ml-auto hidden items-center gap-4 md:flex">
          <Countdown variant="nav" className="hidden xl:block" />
          <NavDivider className="hidden xl:block" />
          <MetalCta href={APPLY_URL} target="_blank" rel="noopener noreferrer">
            Apply to Join
          </MetalCta>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="relative z-10 ml-auto text-zinc-300 md:hidden"
              />
            }
          >
            <Menu className="size-5" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="border-white/10 bg-zinc-950">
            <SheetHeader>
              <SheetTitle className="font-serif text-left text-zinc-100">
                {SITE.name}
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-1">
              {NAV_LINKS.map((link, index) => (
                <Fragment key={link.href}>
                  {index > 0 && <NavDivider orientation="horizontal" className="my-2" />}
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-zinc-300 transition-colors hover:bg-white/5 hover:text-zinc-50"
                  >
                    <ThemeIcon
                      icon={getSectionIcon(NAV_LINK_ICONS, link.label)}
                      size="sm"
                    />
                    {link.label}
                  </a>
                </Fragment>
              ))}
              <NavDivider orientation="horizontal" className="my-4" />
              <p className="px-2 text-sm text-zinc-500">
                Next cohort in{" "}
                <Countdown variant="nav" showPrefix={false} />
              </p>
              <NavDivider orientation="horizontal" className="my-4" />
              <MetalCta
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
              >
                Apply to Join
              </MetalCta>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
