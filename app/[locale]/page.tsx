import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Pains } from "@/components/sections/Pains";
import { Logos } from "@/components/sections/Logos";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQ } from "@/components/sections/FAQ";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<div className="h-20 bg-white" />}>
        <Navbar />
      </Suspense>

      <Suspense fallback={<div className="h-screen animate-pulse bg-slate-50" />}>
        <Hero />
      </Suspense>

      <Logos />

      <Pains />

      <Suspense fallback={<div className="h-96 animate-pulse bg-slate-50" />}>
        <Services />
      </Suspense>

      <Process />

      <CTABanner />

      <FAQ />

      <Team />

      <Contact />

      <Suspense fallback={<div className="h-96 bg-slate-900" />}>
        <Footer />
      </Suspense>
    </main>
  );
}
