import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionBackdrop } from "@/components/section-backdrop";
import { SectionReveal } from "@/components/section-reveal";
import { ThemeIcon } from "@/components/theme-icon";
import { FAQ_ITEMS } from "@/lib/constants";
import { FAQ_ICONS, getSectionIcon } from "@/lib/section-icons";

export function Faq() {
  return (
    <section
      id="faq"
      className="relative scroll-mt-24 overflow-hidden border-b border-white/6 bg-zinc-950 py-24 sm:py-32"
    >
      <SectionBackdrop />
      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <SectionReveal className="text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Questions
          </p>
          <h2 className="font-serif text-3xl text-zinc-50 sm:text-4xl">
            Frequently asked questions
          </h2>
        </SectionReveal>

        <SectionReveal className="mt-12" delay={0.1}>
          <Accordion className="w-full" data-cursor-skip>
            {FAQ_ITEMS.map((item) => (
              <AccordionItem
                key={item.question}
                value={item.question}
                className="border-white/10"
              >
                <AccordionTrigger className="items-center gap-3 py-4 text-left text-zinc-200 hover:text-zinc-50 hover:no-underline">
                  <ThemeIcon
                    icon={getSectionIcon(FAQ_ICONS, item.question)}
                    size="sm"
                    className="shrink-0"
                  />
                  <span className="flex-1 pr-4">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pl-[52px] text-zinc-400">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </SectionReveal>
      </div>
    </section>
  );
}
