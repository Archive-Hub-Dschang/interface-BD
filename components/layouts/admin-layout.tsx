"use client"

import { type ReactNode, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { useAuth } from "@/context/auth-context"
import {
  BarChart,
  Book,
  FileText,
  Folder,
  GraduationCapIcon as Graduation,
  Home,
  LogOut,
  Menu,
  Search,
  Settings,
  Users,
  X,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface AdminLayoutProps {
  children: ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const { user, logout } = useAuth()
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const navigation = [
    { name: "Tableau de bord", href: "/admin", icon: Home },
    { name: "Sujets", href: "/admin/subjects", icon: Book },
    { name: "Corrections", href: "/admin/corrections", icon: FileText },
    { name: "Collaborateurs", href: "/admin/collaborators", icon: Users },
    { name: "Départements", href: "/admin/departments", icon: Folder },
    { name: "Filières", href: "/admin/fields", icon: Graduation },
    { name: "Niveaux", href: "/admin/levels", icon: BarChart },
    { name: "Matières", href: "/admin/subjects-categories", icon: Book },
    { name: "Paramètres", href: "/admin/settings", icon: Settings },
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
                    <span className="rounded-full bg-primary px-2 py-1 text-xs text-primary-foreground">Admin</span>
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
            <span className="rounded-full bg-primary px-2 py-1 text-xs text-primary-foreground">Admin</span>
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
