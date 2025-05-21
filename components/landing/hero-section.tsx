import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Votre réussite académique commence ici
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Accédez à des milliers de sujets et corrections pour exceller dans vos études. Notre plateforme vous
                accompagne vers la réussite.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/subjects">
                <Button size="lg" className="w-full min-[400px]:w-auto">
                  Explorer les sujets
                </Button>
              </Link>
              <Link href="/register">
                <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                  Créer un compte
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[450px] w-[450px]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60 rounded-full blur-[100px] opacity-20" />
              <img
                src="/placeholder.svg?height=450&width=450"
                alt="Illustration de la plateforme éducative"
                className="relative z-10 mx-auto h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
