import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-20 lg:py-32 bg-foreground text-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
          Prêt à recevoir plus de clients,
          <br />
          pas juste plus de clics ?
        </h2>
        <p className="text-lg text-background/70 mb-10 max-w-2xl mx-auto">
          Discutons de votre situation et voyons comment notre système peut accélérer votre croissance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="secondary"
            className="text-base px-8 gap-2 transition-all duration-150 ease-out hover:shadow-lg hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-background/50 focus:ring-offset-2 focus:ring-offset-foreground active:scale-[0.98]"
          >
            Planifier un appel stratégique
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 bg-transparent text-background border-background/30 transition-all duration-150 ease-out hover:bg-background/10 hover:text-background hover:border-background/50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-background/50 focus:ring-offset-2 focus:ring-offset-foreground active:scale-[0.98]"
          >
            Voir si je suis éligible
          </Button>
        </div>
      </div>
    </section>
  )
}
