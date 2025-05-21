"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
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
            <Link href="/pricing" className="text-sm font-medium transition-colors hover:text-primary">
              Tarifs
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
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                    <span className="text-xl font-bold">EduPlateforme</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <nav className="flex flex-col gap-4 py-4">
                  <Link
                    href="/subjects"
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sujets
                  </Link>
                  <Link
                    href="/pricing"
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Tarifs
                  </Link>
                  <Link
                    href="/about"
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    À propos
                  </Link>
                  <Link
                    href="/contact"
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </nav>
                <div className="mt-auto border-t py-4 flex flex-col gap-4">
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Connexion
                    </Button>
                  </Link>
                  <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full">Inscription</Button>
                  </Link>
                  <div className="flex justify-center">
                    <ModeToggle />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
