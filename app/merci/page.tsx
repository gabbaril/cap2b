"use client"
import { CheckCircle2, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import {
  HowItWorksSection,
  WhyDifferentSection,
  NetworkMapSection,
  FAQSection,
  FinalCTASection,
  Footer,
} from "@/components/landing-sections"

export default function MerciPage() {
  const router = useRouter()

  const goToHomeForm = () => {
    router.push("/#form-section")
  }

  const ctaText = "Faire une autre estimation"
  const subheadingText = "Simple, rapide et sans engagement"

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section with Thank You Card */}
      <section
        className="relative px-4 py-10 sm:py-12 md:py-16 md:px-6 lg:py-24 lg:px-8 bg-cover bg-center bg-no-repeat min-h-[600px] sm:min-h-[700px]"
        style={{
          backgroundImage: "url('/images/trois-rivie-cc-80res.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-white/75"></div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 shadow-xl">
            {/* Left column - Content (identical to home page) */}
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black text-balance leading-snug sm:leading-tight mb-4 md:mb-6 text-center lg:text-center">
                Vous pensez vendre en 2026 ou dans les prochains mois ?
              </h1>
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                <li>
                  <p className="text-base sm:text-lg text-gray-600 font-medium text-center lg:text-center">
                    Évaluation gratuite • Données locales • Sans engagement
                  </p>
                </li>
                <li>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center lg:text-center">
                    {"En 2026, une estimation approximative\npeut vous faire perdre des milliers de dollars. "}
                  </p>
                </li>
              </ul>

              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 text-red-600" />
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed text-center lg:text-left">
                    Analyse basée sur les ventes comparables de votre secteur précis
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 text-red-600" />
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                    Validation humaine effectuée par un expert immobilier local
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 text-red-600" />
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                    100% confidentiel, sans obligation
                  </p>
                </div>
              </div>

              <div className="mt-6 md:mt-8 flex flex-col items-center lg:items-start justify-center gap-2 sm:gap-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">4.9</span>
                  <div className="flex gap-0.5 sm:gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 fill-orange-400 text-orange-400"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">Basé sur 175+ avis</p>
                <div className="flex gap-1.5 sm:gap-2">
                  {[
                    { initials: "VG", bg: "bg-green-200" },
                    { initials: "BS", bg: "bg-yellow-200" },
                    { initials: "PV", bg: "bg-red-200" },
                    { initials: "DR", bg: "bg-purple-200" },
                    { initials: "SM", bg: "bg-green-200" },
                  ].map((user, index) => (
                    <div
                      key={index}
                      className={`flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-full ${user.bg} text-xs sm:text-sm font-semibold text-gray-800`}
                    >
                      {user.initials}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column - Thank You Card */}
            <div className="order-1 lg:order-2 w-full max-w-xl mx-auto lg:max-w-none">
              <Card className="border-gray-200 bg-white shadow-xl">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="text-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
                    {/* Check icon */}
                    <div className="mx-auto mb-4 md:mb-6 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-green-600" />
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Merci !</h2>

                    {/* Main text */}
                    <p className="text-gray-700 text-base sm:text-lg mb-3 md:mb-4">
                      Votre demande a été envoyée avec succès.
                    </p>

                    {/* Secondary text */}
                    <p className="text-gray-500 text-xs sm:text-sm max-w-md mx-auto leading-relaxed mb-3 md:mb-4">
                      Un professionnel immobilier local analyse actuellement votre demande afin d'établir une évaluation
                      marchande la plus précise possible.
                    </p>

                    {/* Complementary text */}
                    <p className="text-gray-500 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                      Si des informations supplémentaires sont nécessaires, vous serez contacté dans les prochaines 24 à
                      48 heures.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* All other sections - identical to home page */}
      <HowItWorksSection scrollToForm={goToHomeForm} ctaText={ctaText} subheadingText={subheadingText} />
      <WhyDifferentSection scrollToForm={goToHomeForm} ctaText={ctaText} />
      <NetworkMapSection />
      <FAQSection />
      <FinalCTASection scrollToForm={goToHomeForm} ctaText={ctaText} />
      <Footer />
    </div>
  )
}
