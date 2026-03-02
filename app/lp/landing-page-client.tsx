"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  CheckCircle2,
  ArrowRight,
  Search,
  Filter,
  Send,
  LineChart,
  Target,
  ShieldCheck,
  BarChart3,
  Zap,
  Clock,
  Users,
  TrendingUp,
  ChevronRight,
  AlertCircle,
  MousePointer,
  TrendingDown,
} from "lucide-react"

/* ─────────────────── STICKY TOP BANNER ─────────────────── */
function TopBanner() {
  return (
    <div className="sticky top-0 z-50 bg-[#D4F340] text-[#0B1224]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 px-4 py-2.5 text-center">
        <span className="text-sm font-bold sm:text-base">
          Offre de lancement : 500$ de rabais sur votre premier mois
        </span>
        <a
          href="mailto:info@cap2b.ca?subject=Offre%20de%20lancement%20-%20Landing%20Page"
          className="inline-flex items-center gap-1.5 rounded-full bg-[#0B1224] px-4 py-1.5 text-xs font-semibold text-[#D4F340] transition-all hover:bg-[#162040]"
        >
          En profiter maintenant
          <ChevronRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  )
}

/* ─────────────────── HEADER ─────────────────── */
function LpHeader() {
  return (
    <header className="bg-[#0B1224]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <img src="/cap2b.png" alt="Cap2B" className="h-full py-3 brightness-0 invert" />
        <a
          href="mailto:info@cap2b.ca?subject=Demande%20de%20rendez-vous"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#D4F340] px-5 py-2 text-sm font-semibold text-[#0B1224] transition-all hover:brightness-110"
        >
          Planifier un appel
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  )
}

/* ─────────────────── HERO ─────────────────── */
function HeroSection() {
  return (
    <section className="relative bg-[#0B1224] overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Subtle gradient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[700px] rounded-full bg-[#D4F340]/5 blur-[120px]" />
        <div className="absolute top-20 right-0 h-[400px] w-[500px] rounded-full bg-[#2563EB]/10 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D4F340]/30 bg-[#D4F340]/10 px-4 py-1.5 text-xs font-semibold text-[#D4F340] tracking-wide uppercase">
              <Zap className="h-3.5 w-3.5" />
              {'Agence de g\u00e9n\u00e9ration de leads #1 au Qu\u00e9bec'}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] text-balance">
              {'Obtenez des leads qualifi\u00e9s'}
              <br />
              <span className="text-[#D4F340]">{'qui se convertissent en clients'}</span>
            </h1>

            <p className="text-lg text-[#94A3B8] max-w-xl leading-relaxed">
              Cap2B aide les entreprises de services au Qu&eacute;bec &agrave; g&eacute;n&eacute;rer des opportunit&eacute;s d{"'"}affaires r&eacute;elles gr&acirc;ce &agrave; des syst&egrave;mes de g&eacute;n&eacute;ration de leads performants et mesurables. Pas de vanity metrics &mdash; des r&eacute;sultats concrets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:info@cap2b.ca?subject=Demande%20de%20rendez-vous%20-%20Landing%20Page"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4F340] px-8 py-4 text-base font-bold text-[#0B1224] transition-all hover:brightness-110 hover:shadow-lg hover:shadow-[#D4F340]/20 active:scale-[0.98]"
              >
                {'Recevoir des leads qualifi\u00e9s'}
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#tarifs"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/5 hover:border-white/40"
              >
                Voir les tarifs
              </a>
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">29 000+</p>
                <p className="text-sm text-[#94A3B8]">{'Leads g\u00e9n\u00e9r\u00e9s'}</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">70+</p>
                <p className="text-sm text-[#94A3B8]">Clients servis</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">2.4x</p>
                <p className="text-sm text-[#94A3B8]">{'ROI moyen observ\u00e9'}</p>
              </div>
            </div>
          </div>

          {/* Dashboard image */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[#D4F340]/20 via-transparent to-[#2563EB]/20 blur-xl" />
            <div className="relative rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              <img
                src="/images/lp-dashboard.jpg"
                alt="Tableau de bord Cap2B montrant le pipeline de leads"
                className="w-full h-auto"
              />
              {/* Floating badge */}
              <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-[#0B1224]/90 backdrop-blur-sm border border-[#D4F340]/30 px-3 py-1.5">
                <div className="h-2 w-2 rounded-full bg-[#D4F340] animate-pulse" />
                <span className="text-xs font-semibold text-[#D4F340]">+ 10 nouveaux leads</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── PROBLEMS ─────────────────── */
const problems = [
  {
    icon: AlertCircle,
    title: "Trop de demandes non qualifi\u00e9es",
    description: "Des contacts qui ne correspondent pas \u00e0 votre client id\u00e9al et qui gaspillent votre temps pr\u00e9cieux.",
  },
  {
    icon: Clock,
    title: "Temps perdu en suivi",
    description: "Des heures pass\u00e9es \u00e0 relancer des prospects qui n\u2019ach\u00e8teront jamais.",
  },
  {
    icon: TrendingDown,
    title: "R\u00e9sultats impr\u00e9visibles",
    description: "Une croissance inconstante bas\u00e9e sur le hasard plut\u00f4t que sur un syst\u00e8me fiable.",
  },
  {
    icon: MousePointer,
    title: "Agences qui vendent des clics",
    description: "Des rapports impressionnants mais aucun client r\u00e9el \u00e0 la fin du mois.",
  },
]

function ProblemsSection() {
  return (
    <section className="bg-[#F8FAFC] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1224] mb-6 text-balance">
            {"Le probl\u00e8me n\u2019est pas la visibilit\u00e9."}
            <br />
            <span className="text-[#2563EB]">{"C\u2019est la qualit\u00e9 des opportunit\u00e9s."}</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white border border-[#E2E8F0] rounded-xl p-6 transition-all duration-150 hover:border-[#2563EB]/30 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="p-3 rounded-lg bg-[#0B1224]/5 w-fit mb-4">
                <problem.icon className="h-6 w-6 text-[#0B1224]" />
              </div>
              <h3 className="font-semibold text-lg text-[#0B1224] mb-2">{problem.title}</h3>
              <p className="text-sm text-[#64748B] leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── HOW IT WORKS ─────────────────── */
const steps = [
  {
    number: "01",
    icon: Search,
    title: "Acquisition cibl\u00e9e",
    description: "Google, Meta, recherche locale \u2014 nous activons les canaux qui performent pour votre industrie.",
  },
  {
    number: "02",
    icon: Filter,
    title: "Qualification des leads",
    description: "Chaque lead est qualifi\u00e9 selon des crit\u00e8res sp\u00e9cifiques, avant d\u2019\u00eatre livr\u00e9.",
  },
  {
    number: "03",
    icon: Send,
    title: "Livraison rapide et structur\u00e9e",
    description: "Recevez vos leads qualifi\u00e9s rapidement, directement dans votre pipeline.",
  },
  {
    number: "04",
    icon: LineChart,
    title: "Optimisation continue",
    description: "Analyse et ajustements constants selon les donn\u00e9es pour maximiser vos r\u00e9sultats.",
  },
]

function HowItWorksSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1224] mb-6 text-balance">
            {"Un acc\u00e9l\u00e9rateur de croissance"}
            <br />
            <span className="text-[#2563EB]">{"pens\u00e9 pour les entreprises d\u2019ici"}</span>
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            {"Nous ne vendons pas du marketing. Nous livrons des opportunit\u00e9s d\u2019affaires."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-bold text-[#E2E8F0]">{step.number}</span>
                  <div className="p-3 rounded-lg bg-[#0B1224] text-white">
                    <step.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="font-semibold text-xl text-[#0B1224] mb-3">{step.title}</h3>
                <p className="text-[#64748B] leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-[#E2E8F0] -translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── VALUE PROPS (HighLevel-inspired dark section) ─────────────────── */
const valueProps = [
  {
    icon: Target,
    title: "Voulez-vous plus de clients qualifi\u00e9s?",
    description:
      "Avec notre syst\u00e8me, vous recevez des leads v\u00e9rifi\u00e9s et qualifi\u00e9s, pr\u00eats \u00e0 \u00eatre contact\u00e9s. Fini le temps perdu sur des prospects non qualifi\u00e9s.",
  },
  {
    icon: TrendingUp,
    title: "Voulez-vous une croissance pr\u00e9visible?",
    description:
      "Notre mod\u00e8le repose sur des donn\u00e9es et l\u2019optimisation continue. Vous obtenez un flux constant d\u2019opportunit\u00e9s, pas des r\u00e9sultats al\u00e9atoires.",
  },
  {
    icon: Users,
    title: "Voulez-vous un vrai partenaire croissance?",
    description:
      "Nous ne livrons pas juste des leads \u2014 nous nous impliquons dans votre succ\u00e8s. Notre ROI d\u00e9pend directement du v\u00f4tre.",
  },
]

function ValuePropsSection() {
  return (
    <section className="bg-[#0B1224] py-20 lg:py-28 relative overflow-hidden">
      {/* Floating icons background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[10%] h-12 w-12 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center">
          <BarChart3 className="h-6 w-6 text-[#2563EB]/40" />
        </div>
        <div className="absolute top-40 right-[15%] h-10 w-10 rounded-xl bg-[#D4F340]/10 border border-[#D4F340]/20 flex items-center justify-center">
          <Target className="h-5 w-5 text-[#D4F340]/40" />
        </div>
        <div className="absolute bottom-32 left-[20%] h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
          <Send className="h-5 w-5 text-white/20" />
        </div>
        <div className="absolute bottom-20 right-[10%] h-12 w-12 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center">
          <Zap className="h-6 w-6 text-[#2563EB]/40" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 text-balance">
            {"Cap2B : Tout ce dont vous avez"}
            <br />
            <span className="text-[#D4F340]">{"besoin pour cro\u00eetre"}</span>
          </h2>
          <p className="text-lg text-[#94A3B8]">
            {"Nous vous aidons \u00e0 consolider votre acquisition de clients."}
          </p>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {valueProps.map((vp, index) => (
            <div
              key={index}
              className="flex gap-5 p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-[#D4F340]/30 hover:bg-white/[0.07]"
            >
              <div className="shrink-0 mt-1">
                <div className="h-10 w-10 rounded-full bg-[#D4F340]/10 border border-[#D4F340]/20 flex items-center justify-center">
                  <vp.icon className="h-5 w-5 text-[#D4F340]" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white mb-2">{vp.title}</h3>
                <p className="text-[#94A3B8] leading-relaxed">{vp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── WHY US ─────────────────── */
const benefits = [
  { title: "Leads exclusifs", description: "Pas de leads brul\u00e9s. Pas de revente massive. Un vrai avantage concurrentiel sur votre march\u00e9." },
  { title: "Qualification avant livraison", description: "Chaque lead est v\u00e9rifi\u00e9 et qualifi\u00e9 selon des crit\u00e8res sp\u00e9cifiques avant d\u2019arriver dans votre pipeline." },
  { title: "Transparence totale des donn\u00e9es", description: "Vous savez exactement d\u2019o\u00f9 vient chaque lead, ce qu\u2019il vous co\u00fbte et ce qu\u2019il vous rapporte." },
  { title: "Focus sur le co\u00fbt par opportunit\u00e9", description: "Notre objectif n\u2019est pas de livrer plus de leads, mais plus d\u2019opportunit\u00e9s rentables." },
  { title: "Aucun bullshit marketing", description: "Pas de vanity metrics. On mesure uniquement ce qui impacte vos revenus." },
]

function WhyUsSection() {
  return (
    <section className="bg-[#F8FAFC] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1224] mb-6 text-balance">
              {"Pourquoi notre mod\u00e8le fonctionne"}
              <br />
              <span className="text-[#2563EB]">{"(quand les autres \u00e9chouent)"}</span>
            </h2>
            <p className="text-lg text-[#64748B] leading-relaxed mb-8">
              {"Nous ne vendons pas de la visibilit\u00e9. Nous livrons des opportunit\u00e9s d\u2019affaires qualifi\u00e9es qui se transforment en revenus."}
            </p>
            <a
              href="mailto:info@cap2b.ca?subject=Demande%20de%20rendez-vous%20-%20Landing%20Page"
              className="inline-flex items-center gap-2 rounded-full bg-[#0B1224] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#162040] hover:shadow-lg active:scale-[0.98]"
            >
              {"Recevoir des leads qualifi\u00e9s"}
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-4 p-5 rounded-xl border border-[#E2E8F0] bg-white transition-all duration-150 hover:border-[#2563EB]/30 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <CheckCircle2 className="h-6 w-6 text-[#D4F340] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[#0B1224] mb-1">{benefit.title}</h3>
                  <p className="text-sm text-[#64748B]">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── PRICING ─────────────────── */
const plans = [
  {
    name: "Mensuel",
    price: "1 495",
    period: "/mois",
    badge: null,
    saving: null,
    description: "Flexibilit\u00e9 maximale, sans engagement \u00e0 long terme.",
    features: [
      "Leads qualifi\u00e9s et exclusifs",
      "Gestion compl\u00e8te de vos campagnes",
      "Tableau de bord en temps r\u00e9el",
      "Optimisation continue",
      "Support d\u00e9di\u00e9",
    ],
    cta: "Commencer",
    highlighted: false,
  },
  {
    name: "Trimestriel",
    price: "1 271",
    period: "/mois",
    badge: "Populaire",
    saving: "Sauvez 15% sur les frais de gestion",
    description: "Engagement de 3 mois pour de meilleurs r\u00e9sultats.",
    features: [
      "Tout du plan Mensuel",
      "15% de rabais sur les frais de gestion",
      "Optimisation avanc\u00e9e",
      "Rapports d\u00e9taill\u00e9s mensuels",
      "Strat\u00e9gie d\u00e9di\u00e9e",
    ],
    cta: "Commencer",
    highlighted: true,
  },
  {
    name: "Annuel",
    price: "1 002",
    period: "/mois",
    badge: "Meilleure valeur",
    saving: "Sauvez 33% sur les frais de gestion",
    description: "L\u2019engagement qui maximise votre ROI.",
    features: [
      "Tout du plan Trimestriel",
      "33% de rabais sur les frais de gestion",
      "Acc\u00e8s prioritaire aux nouvelles fonctionnalit\u00e9s",
      "Strat\u00e9gie trimestrielle avec \u00e9quipe d\u00e9di\u00e9e",
      "Meilleur co\u00fbt par lead garanti",
    ],
    cta: "Commencer",
    highlighted: false,
  },
]

function PricingSection() {
  return (
    <section id="tarifs" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1224] mb-4 text-balance">
            Tarifs simples et transparents
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            {"Frais de gestion + votre budget publicitaire. C\u2019est tout."}
          </p>
        </div>

        {/* Launch offer banner */}
        <div className="max-w-2xl mx-auto mb-12 rounded-2xl bg-gradient-to-r from-[#D4F340]/20 to-[#D4F340]/5 border border-[#D4F340]/30 p-6 text-center">
          <p className="text-lg font-bold text-[#0B1224] mb-1">
            {"Offre de lancement \u2014 500$ de rabais sur le premier mois"}
          </p>
          <p className="text-sm text-[#64748B]">
            {"Applicable sur tous les plans. Dur\u00e9e limit\u00e9e."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-150 hover:-translate-y-1 hover:shadow-xl ${
                plan.highlighted
                  ? "bg-[#0B1224] text-white border-2 border-[#D4F340] shadow-lg shadow-[#D4F340]/10"
                  : "bg-white text-[#0B1224] border border-[#E2E8F0]"
              }`}
            >
              {plan.badge && (
                <span
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold ${
                    plan.highlighted
                      ? "bg-[#D4F340] text-[#0B1224]"
                      : "bg-[#2563EB] text-white"
                  }`}
                >
                  {plan.badge}
                </span>
              )}

              <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-[#0B1224]"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? "text-[#94A3B8]" : "text-[#64748B]"}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-[#0B1224]"}`}>
                  {plan.price}$
                </span>
                <span className={`text-sm ${plan.highlighted ? "text-[#94A3B8]" : "text-[#64748B]"}`}>
                  {plan.period}
                </span>
              </div>

              {plan.saving && (
                <p className={`text-sm font-medium mb-6 ${plan.highlighted ? "text-[#D4F340]" : "text-[#2563EB]"}`}>
                  {plan.saving}
                </p>
              )}

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <CheckCircle2
                      className={`h-5 w-5 shrink-0 mt-0.5 ${
                        plan.highlighted ? "text-[#D4F340]" : "text-[#2563EB]"
                      }`}
                    />
                    <span className={`text-sm ${plan.highlighted ? "text-[#CBD5E1]" : "text-[#64748B]"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:info@cap2b.ca?subject=Demande%20de%20rendez-vous%20-%20Landing%20Page"
                className={`block text-center py-3.5 rounded-full font-semibold text-sm transition-all hover:shadow-lg active:scale-[0.98] ${
                  plan.highlighted
                    ? "bg-[#D4F340] text-[#0B1224] hover:brightness-110"
                    : "bg-[#0B1224] text-white hover:bg-[#162040]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#94A3B8] mt-8">
          {"* Le budget publicitaire (ads) est en sus et est pay\u00e9 directement \u00e0 la plateforme (Google, Meta, etc.)"}
        </p>
      </div>
    </section>
  )
}

/* ─────────────────── STATS BAR ─────────────────── */
function StatsBar() {
  return (
    <section className="bg-[#0B1224] py-12 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-[#D4F340]">29 000+</p>
            <p className="text-sm text-[#94A3B8] mt-1">{"Leads g\u00e9n\u00e9r\u00e9s"}</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-white">70+</p>
            <p className="text-sm text-[#94A3B8] mt-1">Clients servis</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-white">2.4x</p>
            <p className="text-sm text-[#94A3B8] mt-1">{"ROI moyen observ\u00e9"}</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-white">92%</p>
            <p className="text-sm text-[#94A3B8] mt-1">Taux de satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── FAQ ─────────────────── */
const faqs = [
  {
    question: "Les leads sont-ils exclusifs ?",
    answer:
      "Oui, nous offrons des leads exclusifs. Contrairement aux grandes plateformes qui revendent les m\u00eames contacts \u00e0 plusieurs entreprises, vos leads vous appartiennent.",
  },
  {
    question: "Quels secteurs acceptez-vous ?",
    answer:
      "Nous travaillons principalement avec les entreprises de services \u00e0 forte valeur client : immobilier, juridique, construction, services financiers, sant\u00e9 priv\u00e9e, et autres services professionnels.",
  },
  {
    question: "Comment sont qualifi\u00e9s les leads ?",
    answer:
      "Chaque lead passe par notre processus de qualification en plusieurs \u00e9tapes : v\u00e9rification des coordonn\u00e9es, validation de l\u2019intention, et matching avec des crit\u00e8res sp\u00e9cifiques avant livraison.",
  },
  {
    question: "Quel est l\u2019engagement minimum ?",
    answer:
      "Nous proposons un plan mensuel sans engagement, un plan trimestriel avec 15% de rabais, et un plan annuel avec 33% de rabais. Vous choisissez ce qui convient le mieux \u00e0 votre situation.",
  },
  {
    question: "Qu\u2019est-ce qui est inclus dans les frais de gestion ?",
    answer:
      "Les frais de gestion couvrent la cr\u00e9ation et l\u2019optimisation de vos campagnes, la qualification des leads, le tableau de bord en temps r\u00e9el, les rapports, et le support d\u00e9di\u00e9. Le budget publicitaire est en sus.",
  },
  {
    question: "Combien de temps avant de voir des r\u00e9sultats ?",
    answer:
      "La plupart de nos clients voient leurs premiers leads qualifi\u00e9s dans les 48\u00e0 72 heures suivant le lancement de leurs campagnes. L\u2019optimisation continue am\u00e9liore les r\u00e9sultats au fil du temps.",
  },
]

function FaqSection() {
  return (
    <section className="bg-[#F8FAFC] py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1224] mb-4">
            {"Questions fr\u00e9quentes"}
          </h2>
          <p className="text-[#64748B]">{"Tout ce que vous devez savoir avant de commencer."}</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-[#E2E8F0] rounded-xl px-6 data-[state=open]:border-[#2563EB]/30"
            >
              <AccordionTrigger className="text-left font-semibold text-[#0B1224] hover:text-[#2563EB] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#64748B]">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

/* ─────────────────── FINAL CTA ─────────────────── */
function FinalCta() {
  return (
    <section className="bg-[#0B1224] py-20 lg:py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/3 h-[400px] w-[600px] rounded-full bg-[#D4F340]/5 blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 text-balance">
          {"Pr\u00eat \u00e0 recevoir plus de clients,"}
          <br />
          <span className="text-[#D4F340]">{"pas juste plus de clics ?"}</span>
        </h2>
        <p className="text-lg text-[#94A3B8] mb-10 max-w-2xl mx-auto">
          {"Discutons de votre situation et voyons comment notre syst\u00e8me peut acc\u00e9l\u00e9rer votre croissance. Profitez de notre offre de lancement de 500$ de rabais."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:info@cap2b.ca?subject=Demande%20de%20rendez-vous%20-%20Landing%20Page"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4F340] px-8 py-4 text-base font-bold text-[#0B1224] transition-all hover:brightness-110 hover:shadow-lg hover:shadow-[#D4F340]/20 active:scale-[0.98]"
          >
            {"Planifier un appel strat\u00e9gique"}
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="mailto:info@cap2b.ca?subject=Admissibilit\u00e9%20-%20Landing%20Page"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/5 hover:border-white/40"
          >
            {"Voir si je suis \u00e9ligible"}
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── FOOTER ─────────────────── */
function LpFooter() {
  return (
    <footer className="bg-[#070D1A] py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <img src="/cap2b.png" alt="Cap2B" className="h-12 brightness-0 invert" />
          <p className="text-sm text-[#94A3B8]">{"Performance. Donn\u00e9es. R\u00e9sultats."}</p>
          <div className="flex flex-col items-center md:items-end gap-2">
            <a href="mailto:info@cap2b.ca" className="text-sm text-[#94A3B8] hover:text-white transition-colors">
              info@cap2b.ca
            </a>
            <p className="text-xs text-[#64748B]">
              {`\u00a9 ${new Date().getFullYear()} CAP2B Inc. Tous droits r\u00e9serv\u00e9s.`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ─────────────────── PAGE ASSEMBLY ─────────────────── */
export function LandingPageClient() {
  return (
    <div className="min-h-screen">
      <TopBanner />
      <LpHeader />
      <HeroSection />
      <ProblemsSection />
      <HowItWorksSection />
      <ValuePropsSection />
      <WhyUsSection />
      <PricingSection />
      <StatsBar />
      <FaqSection />
      <FinalCta />
      <LpFooter />
    </div>
  )
}
