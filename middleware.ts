import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Récupérer l'utilisateur depuis le localStorage (simulé)
  const userJson = request.cookies.get("user")?.value
  const user = userJson ? JSON.parse(userJson) : null

  // Protéger les routes admin
  if (path.startsWith("/admin") && (!user || user.role !== "admin")) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Protéger les routes utilisateur
  if (path.startsWith("/dashboard") && !user) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Rediriger les utilisateurs connectés qui tentent d'accéder aux pages de connexion/inscription
  if ((path === "/login" || path === "/register") && user) {
    if (user.role === "admin") {
      return NextResponse.redirect(new URL("/admin", request.url))
    } else {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*", "/login", "/register"],
}
