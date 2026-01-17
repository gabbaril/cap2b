"use client"

import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { ProblemsSection } from "@/components/landing/problems-section"
import { SolutionSection } from "@/components/landing/solution-section"
import { IndustriesSection } from "@/components/landing/industries-section"
import { DifferentiationSection } from "@/components/landing/differentiation-section"
import { StatsSection } from "@/components/landing/stats-section"
import { FaqSection } from "@/components/landing/faq-section"
import { CtaSection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll"

export default function LandingPage() {
  useRevealOnScroll()

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <div className="reveal">
        <ProblemsSection />
      </div>
      <div className="reveal">
        <SolutionSection />
      </div>
      <div className="reveal">
        <IndustriesSection />
      </div>
      <div className="reveal">
        <DifferentiationSection />
      </div>
      <div className="reveal">
        <StatsSection />
      </div>
      <div className="reveal">
        <FaqSection />
      </div>
      <div className="reveal">
        <CtaSection />
      </div>
      <Footer />
    </main>
  )
}
