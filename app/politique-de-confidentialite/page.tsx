import Link from "next/link"

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 px-4 py-4">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="text-lg font-semibold text-gray-900 hover:text-red-600 transition-colors">
            ← Retour à l'accueil
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Politique de confidentialité</h1>
          <p className="text-gray-500 mb-10">Dernière mise à jour : 2025-07-01</p>

          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              Bienvenue sur valeurmaisonrapide.com (le « Site »), exploité par Valeur Maison Rapide (« nous », « notre
              », « nos »). Nous nous engageons à protéger vos renseignements personnels conformément aux lois
              canadiennes et québécoises applicables (dont la LPRPDE et la Loi 25 au Québec).
            </p>

            <hr className="my-8 border-gray-200" />

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1) Portée</h2>
              <p className="text-gray-700 leading-relaxed">
                La présente politique explique quelles données nous recueillons, dans quel but, comment nous les
                utilisons, avec qui nous les partageons, où elles sont hébergées, combien de temps nous les conservons
                et quels sont vos droits.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2) Nature de notre activité</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Valeur Maison Rapide est une entreprise spécialisée dans la génération et la distribution de leads
                qualifiés pour des professionnels œuvrant dans les secteurs liés au courtage immobilier (ex. : courtiers
                immobiliers, évaluateurs, prêteurs hypothécaires, notaires, entrepreneurs, inspecteurs en bâtiment,
                etc.).
              </p>
              <p className="text-gray-700 leading-relaxed">
                Les renseignements que nous recueillons via notre site sont utilisés pour mettre en relation les
                propriétaires ou vendeurs avec des partenaires professionnels pertinents et dûment sélectionnés.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3) Renseignements personnels collectés</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Selon votre utilisation du Site, nous pouvons collecter :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  <strong>Identité et contact :</strong> Nom, téléphone, courriel.
                </li>
                <li>
                  <strong>Informations immobilières :</strong> Adresse de la propriété
                </li>
                <li>
                  <strong>Données techniques :</strong> adresse IP, identifiants de cookies, type d'appareil et de
                  navigateur, pages vues, durée de session, provenance du trafic.
                </li>
                <li>
                  <strong>Communications</strong> que vous nous envoyez (courriel, téléphone, formulaires).
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4) Méthodes de collecte</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Formulaires en ligne (demande d'évaluation ou d'information).</li>
                <li>Cookies et technologies similaires (voir §10).</li>
                <li>Échanges directs (téléphone, courriel, messagerie).</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5) Finalités et bases juridiques</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Nous utilisons vos données pour :</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  Fournir une estimation immobilière et transmettre votre demande à un ou plusieurs partenaires
                  professionnels qualifiés (courtiers, prêteurs, évaluateurs, etc.).
                </li>
                <li>Vous contacter au sujet de votre demande ou pour confirmer certaines informations.</li>
                <li>Analyser l'audience et améliorer nos outils et services.</li>
                <li>Personnaliser nos communications marketing (avec votre consentement).</li>
                <li>Respecter nos obligations légales et contractuelles.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Nous ne vendons pas vos renseignements personnels au sens commercial du terme, mais nous pouvons les
                partager à titre de lead qualifié avec des partenaires professionnels en lien avec votre demande,
                conformément à votre consentement explicite.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6) Partage des renseignements</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Vos renseignements peuvent être communiqués à :</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  <strong>Nos partenaires</strong> (professionnels de l'immobilier, hypothèques, inspection, rénovation,
                  etc.) pour leur permettre de vous contacter et d'offrir leurs services.
                </li>
                <li>
                  <strong>Nos fournisseurs de services</strong> (hébergement, CRM, envoi d'e‑mails, outils d'analytique
                  et publicitaires) agissant à titre de sous‑traitants.
                </li>
                <li>
                  <strong>Les autorités publiques</strong> si requis par la loi.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Tous nos partenaires et fournisseurs sont tenus de respecter des standards élevés de confidentialité et
                de sécurité.
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                7) Hébergement et transferts hors juridiction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Vos données peuvent être hébergées ou traitées au Canada (Québec) par nos fournisseurs.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">8) Sécurité</h2>
              <p className="text-gray-700 leading-relaxed">
                Nous appliquons des mesures techniques et organisationnelles (chiffrement, contrôle d'accès,
                sauvegardes, pare‑feu) pour protéger vos données contre toute perte, vol ou accès non autorisé.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">9) Durée de conservation</h2>
              <p className="text-gray-700 leading-relaxed">
                Les données sont conservées aussi longtemps que nécessaire pour les finalités décrites ou selon les
                obligations légales applicables, puis supprimées ou anonymisées de façon sécurisée.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">10) Cookies et technologies similaires</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Nous utilisons des cookies pour :</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Assurer le bon fonctionnement du Site.</li>
                <li>Analyser la performance et le trafic.</li>
                <li>Personnaliser nos publicités (Google Ads, Meta Ads, etc.).</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Vous pouvez configurer votre navigateur pour refuser les cookies non essentiels.
              </p>
            </section>

            {/* Section 11 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">11) Marketing et communications</h2>
              <p className="text-gray-700 leading-relaxed">
                Avec votre consentement, nous pouvons vous transmettre des offres ou communications promotionnelles
                provenant de nos partenaires professionnels. Vous pouvez retirer votre consentement à tout moment en
                cliquant sur le lien de désinscription ou en nous écrivant à l'adresse suivante :{" "}
                <a href="mailto:info@valeurmaisonrapide.com" className="text-red-600 hover:text-red-700 underline">
                  info@valeurmaisonrapide.com
                </a>
                .
              </p>
            </section>

            {/* Section 12 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">12) Vos droits</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Vous avez le droit de :</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Accéder à vos renseignements personnels.</li>
                <li>Rectifier ou mettre à jour vos renseignements.</li>
                <li>Retirer votre consentement à la collecte, au traitement ou au partage.</li>
                <li>Demander la suppression de vos renseignements (dans les limites légales applicables).</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Pour exercer vos droits, veuillez communiquer avec nous (§15).
              </p>
            </section>

            {/* Section 13 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">13) Mineurs</h2>
              <p className="text-gray-700 leading-relaxed">
                Le site n'est pas destiné aux personnes de moins de 18 ans.
              </p>
            </section>

            {/* Section 14 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">14) Modifications de la politique</h2>
              <p className="text-gray-700 leading-relaxed">
                Nous pouvons mettre à jour la présente politique périodiquement. La version en vigueur est celle publiée
                sur le site avec la date de mise à jour.
              </p>
            </section>

            {/* Section 15 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">15) Contact</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pour toute question, commentaire ou demande liée à la confidentialité :
              </p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>
                  <strong>Courriel :</strong>{" "}
                  <a href="mailto:info@valeurmaisonrapide.com" className="text-red-600 hover:text-red-700 underline">
                    info@valeurmaisonrapide.com
                  </a>
                </li>
                <li>
                  <strong>Nom de l'exploitant :</strong> Valeur Maison Rapide
                </li>
              </ul>
            </section>

            <hr className="my-8 border-gray-200" />

            <p className="text-center text-gray-500 font-medium">Valeur Maison Rapide</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-4 py-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Valeur Maison Rapide. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}
