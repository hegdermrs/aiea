import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/custom-cursor";
import { RainbowGlow } from "@/components/rainbow-glow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "AI Execution Accelerator | Implement AI That Makes You Money",
  description:
    "A 12-week, action-first mastermind with a dedicated implementation specialist. Go from AI Zero to AI Hero — in days, not months.",
  openGraph: {
    title: "AI Execution Accelerator",
    description:
      "Implement AI systems that make you money — in days, not months.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${instrumentSerif.variable} h-full scroll-smooth antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-zinc-950 font-sans text-zinc-50">
        <RainbowGlow position="top" className="z-[45]" />
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
