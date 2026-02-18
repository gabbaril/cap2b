import type { Metadata } from "next"
import { LandingPageClient } from "./landing-page-client"

export const metadata: Metadata = {
  title: "Cap2B | Obtenez des Leads Qualifiés pour Votre Entreprise",
  description:
    "Cap2B livre des leads qualifiés et exclusifs aux entreprises de services au Québec. Offre de lancement : 500$ de rabais sur le premier mois. Résultats mesurables garantis.",
}

export default function LandingPage() {
  return <LandingPageClient />
}
