"use client"

import { type ReactNode, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { useAuth } from "@/context/auth-context"
import { Book, Download, Heart, Home, LogOut, Menu, Plus, Search, Settings, ShoppingCart, X } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface UserLayoutProps {
  children: ReactNode
}

export function UserLayout({ children }: UserLayoutProps) {
  const { user, logout } = useAuth()
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const navigation = [
    { name: "Tableau de bord", href: "/dashboard", icon: Home },
    { name: "Sujets", href: "/dashboard/subjects", icon: Book },
    { name: "Mes téléchargements", href: "/dashboard/downloads", icon: Download },
    { name: "Mes favoris", href: "/dashboard/favorites", icon: Heart },
    { name: "Ajouter un sujet", href: "/dashboard/subjects/new", icon: Plus },
    { name: "Paramètres", href: "/dashboard/settings", icon: Settings },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 md:gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-2 py-4">
                    <Link href="/" className="flex items-center gap-2">
                      <span className="text-xl font-bold">EduPlateforme</span>
                    </Link>
                  </div>
                  <nav className="flex-1 space-y-2 py-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                          pathname === item.href ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                        )}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="border-t py-4">
                    <Button variant="ghost" className="w-full justify-start gap-3" onClick={logout}>
                      <LogOut className="h-4 w-4" />
                      Déconnexion
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold hidden md:inline-block">EduPlateforme</span>
              <span className="text-xl font-bold md:hidden">EP</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {isSearchOpen ? (
              <div className="relative w-full md:w-60 flex items-center">
                <Input
                  type="search"
                  placeholder="Rechercher..."
                  className="w-full pl-8"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Button variant="ghost" size="icon" className="absolute right-0" onClick={() => setIsSearchOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <>
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Rechercher</span>
                </Button>

                <Link href="/dashboard/cart">
                  <Button variant="ghost" size="icon">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="sr-only">Panier</span>
                  </Button>
                </Link>

                <ModeToggle />

                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={user?.avatar || "/placeholder.svg"} alt={user?.name} />
                    <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block">
                    <p className="text-sm font-medium">{user?.name}</p>
                    <p className="text-xs text-muted-foreground">{user?.email}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="hidden md:flex w-64 flex-col border-r bg-muted/40">
          <nav className="flex-1 space-y-2 p-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                  pathname === item.href ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="border-t p-4">
            <Button variant="ghost" className="w-full justify-start gap-3" onClick={logout}>
              <LogOut className="h-4 w-4" />
              Déconnexion
            </Button>
          </div>
        </aside>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
