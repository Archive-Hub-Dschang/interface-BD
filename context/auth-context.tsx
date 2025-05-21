"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"
import { type User, mockUsers } from "@/mocks/data"

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  // Simuler le chargement de l'utilisateur au démarrage
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  // Rediriger en fonction du rôle et du chemin
  useEffect(() => {
    if (!isLoading) {
      // Protéger les routes admin
      if (pathname?.startsWith("/admin") && (!user || user.role !== "admin")) {
        router.push("/login")
      }

      // Protéger les routes utilisateur
      if (pathname?.startsWith("/dashboard") && !user) {
        router.push("/login")
      }
    }
  }, [user, isLoading, pathname, router])

  const login = async (email: string, password: string) => {
    setIsLoading(true)

    // Simuler un délai d'API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const foundUser = mockUsers.find((u) => u.email === email && u.password === password)

    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser
      setUser(userWithoutPassword)
      localStorage.setItem("user", JSON.stringify(userWithoutPassword))
      setIsLoading(false)
      return true
    }

    setIsLoading(false)
    return false
  }

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true)

    // Simuler un délai d'API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Vérifier si l'email existe déjà
    const userExists = mockUsers.some((u) => u.email === email)

    if (userExists) {
      setIsLoading(false)
      return false
    }

    // Dans une vraie application, on enverrait ces données à l'API
    // Ici, on simule juste une création réussie
    const newUser = {
      id: `user-${Date.now()}`,
      name,
      email,
      role: "user" as const,
      avatar: `/placeholder.svg?height=40&width=40`,
    }

    setUser(newUser)
    localStorage.setItem("user", JSON.stringify(newUser))
    setIsLoading(false)
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    router.push("/")
  }

  return <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
