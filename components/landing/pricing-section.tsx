import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Tarifs</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Des plans adaptés à vos besoins</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choisissez l'offre qui vous convient et commencez à exceller dans vos études dès aujourd'hui.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Gratuit</h3>
              <p className="text-muted-foreground">Accès limité aux ressources de base</p>
            </div>
            <div className="mt-4 flex items-baseline text-3xl font-bold">
              0 FCFA
              <span className="ml-1 text-base font-medium text-muted-foreground">/mois</span>
            </div>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Accès à la liste des sujets</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Recherche de sujets</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Aperçu limité des corrections</span>
              </li>
            </ul>
            <div className="mt-auto pt-6">
              <Link href="/register">
                <Button variant="outline" className="w-full">
                  S'inscrire gratuitement
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm ring-2 ring-primary">
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">Populaire</div>
              <h3 className="text-2xl font-bold">Standard</h3>
              <p className="text-muted-foreground">Accès complet aux ressources essentielles</p>
            </div>
            <div className="mt-4 flex items-baseline text-3xl font-bold">
              5 000 FCFA
              <span className="ml-1 text-base font-medium text-muted-foreground">/mois</span>
            </div>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Tout ce qui est inclus dans le plan Gratuit</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Téléchargement de corrections</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Gestion des favoris</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Ajout de sujets</span>
              </li>
            </ul>
            <div className="mt-auto pt-6">
              <Link href="/register">
                <Button className="w-full">S'abonner maintenant</Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Premium</h3>
              <p className="text-muted-foreground">Accès illimité à toutes les ressources</p>
            </div>
            <div className="mt-4 flex items-baseline text-3xl font-bold">
              10 000 FCFA
              <span className="ml-1 text-base font-medium text-muted-foreground">/mois</span>
            </div>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Tout ce qui est inclus dans le plan Standard</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Téléchargements illimités</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Ajout de corrections</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Support prioritaire</span>
              </li>
            </ul>
            <div className="mt-auto pt-6">
              <Link href="/register">
                <Button variant="outline" className="w-full">
                  S'abonner maintenant
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
