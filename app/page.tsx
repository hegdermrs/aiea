import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Differentiators } from "@/components/sections/differentiators";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Outcomes } from "@/components/sections/outcomes";
import { MembershipBenefits } from "@/components/sections/membership-benefits";
import { Testimonials } from "@/components/sections/testimonials";
import { Founder } from "@/components/sections/founder";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Differentiators />
        <HowItWorks />
        <Outcomes />
        <MembershipBenefits />
        <Founder />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
