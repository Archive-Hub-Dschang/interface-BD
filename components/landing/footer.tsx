import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:py-10">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">EduPlateforme</span>
          </Link>
          <p className="text-sm text-muted-foreground">Votre partenaire pour la réussite académique</p>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Plateforme</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/subjects" className="text-sm text-muted-foreground hover:text-foreground">
                  Sujets
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  À propos
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Ressources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-sm text-muted-foreground hover:text-foreground">
                  Aide
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Légal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Nous contacter
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-sm text-muted-foreground hover:text-foreground">
                  Support
                </Link>
              </li>
              <li>
                <a href="mailto:info@eduplateforme.com" className="text-sm text-muted-foreground hover:text-foreground">
                  info@eduplateforme.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-between gap-4 border-t py-6 md:h-16 md:flex-row md:py-0">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} EduPlateforme. Tous droits réservés.
        </p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
