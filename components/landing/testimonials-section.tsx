export function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Témoignages</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ce que disent nos utilisateurs</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Découvrez comment notre plateforme a aidé des milliers d'étudiants à atteindre leurs objectifs
              académiques.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 fill-primary text-primary"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground">
                "Grâce à cette plateforme, j'ai pu préparer efficacement mes examens. Les corrections détaillées m'ont
                permis de comprendre mes erreurs et de progresser rapidement."
              </p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Avatar"
                className="rounded-full"
                width={40}
                height={40}
              />
              <div>
                <p className="font-medium">Sophie M.</p>
                <p className="text-sm text-muted-foreground">Étudiante en Terminale S</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 fill-primary text-primary"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground">
                "En tant qu'enseignant, je recommande cette plateforme à tous mes élèves. La qualité des documents et la
                facilité d'utilisation en font un outil indispensable."
              </p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Avatar"
                className="rounded-full"
                width={40}
                height={40}
              />
              <div>
                <p className="font-medium">Thomas D.</p>
                <p className="text-sm text-muted-foreground">Professeur de Mathématiques</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 fill-primary text-primary"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground">
                "L'abonnement à cette plateforme est le meilleur investissement que j'ai fait pour mes études. J'ai
                amélioré mes notes dans toutes les matières."
              </p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Avatar"
                className="rounded-full"
                width={40}
                height={40}
              />
              <div>
                <p className="font-medium">Amadou K.</p>
                <p className="text-sm text-muted-foreground">Étudiant en Première</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
