import type { ReactNode } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface VisitorLayoutProps {
  children: ReactNode
}

export function VisitorLayout({ children }: VisitorLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">EduPlateforme</span>
            </Link>
            <nav className="hidden md:flex gap-6 ml-6">
              <Link href="/subjects" className="text-sm font-medium transition-colors hover:text-primary">
                Sujets
              </Link>
              <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                À propos
              </Link>
              <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative w-60">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Rechercher..." className="w-full pl-8" />
            </div>
            <Link href="/login">
              <Button variant="outline" size="sm">
                Connexion
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Inscription</Button>
            </Link>
            <ModeToggle />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Connexion
              </Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} EduPlateforme. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Conditions d'utilisation
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
