import { Book, Download, Heart, Search, ShieldCheck, Users } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Fonctionnalités</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Tout ce dont vous avez besoin pour réussir
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Notre plateforme offre une multitude d'outils et de ressources pour vous aider à atteindre l'excellence
              académique.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Recherche avancée</h3>
            <p className="text-center text-muted-foreground">
              Trouvez rapidement les sujets et corrections dont vous avez besoin grâce à notre moteur de recherche
              avancé.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Book className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Bibliothèque complète</h3>
            <p className="text-center text-muted-foreground">
              Accédez à une vaste collection de sujets et corrections couvrant toutes les matières et niveaux.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Download className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Téléchargements illimités</h3>
            <p className="text-center text-muted-foreground">
              Téléchargez et consultez vos documents à tout moment, même hors ligne.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Favoris personnalisés</h3>
            <p className="text-center text-muted-foreground">
              Enregistrez vos sujets préférés pour y accéder rapidement plus tard.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Communauté collaborative</h3>
            <p className="text-center text-muted-foreground">
              Contribuez en ajoutant vos propres sujets et corrections pour aider d'autres étudiants.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Contenu vérifié</h3>
            <p className="text-center text-muted-foreground">
              Tous nos documents sont vérifiés par des experts pour garantir leur qualité et leur exactitude.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
