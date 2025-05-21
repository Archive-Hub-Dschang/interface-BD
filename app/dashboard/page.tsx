"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { UserLayout } from "@/components/layouts/user-layout"
import { useAuth } from "@/context/auth-context"
import { subjectApi, correctionApi, purchaseApi } from "@/services/api"
import type { Subject, Correction, Purchase } from "@/mocks/data"
import { BookOpen, Download, Heart, Plus, Search } from "lucide-react"

export default function DashboardPage() {
  const { user } = useAuth()
  const [recentSubjects, setRecentSubjects] = useState<Subject[]>([])
  const [purchases, setPurchases] = useState<Purchase[]>([])
  const [purchasedCorrections, setPurchasedCorrections] = useState<Correction[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)

        // Récupérer les sujets récents
        const subjects = await subjectApi.getAll()
        setRecentSubjects(subjects.slice(0, 3))

        if (user) {
          // Récupérer les achats de l'utilisateur
          const userPurchases = await purchaseApi.getByUser(user.id)
          setPurchases(userPurchases)

          // Récupérer les corrections achetées
          const corrections: Correction[] = []
          for (const purchase of userPurchases) {
            const correction = await correctionApi.getById(purchase.correctionId)
            if (correction) {
              corrections.push(correction)
            }
          }
          setPurchasedCorrections(corrections)
        }
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [user])

  return (
    <UserLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tableau de bord</h1>
          <p className="text-muted-foreground">Bienvenue, {user?.name}. Voici un aperçu de votre activité.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sujets consultés</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 depuis la semaine dernière</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Corrections achetées</CardTitle>
              <Download className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{purchases.length}</div>
              <p className="text-xs text-muted-foreground">
                {purchases.length > 0 ? "+1 depuis le mois dernier" : "Aucun achat récent"}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sujets favoris</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Inchangé depuis la semaine dernière</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sujets ajoutés</CardTitle>
              <Plus className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">Ajoutez votre premier sujet</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Sujets récents</CardTitle>
              <CardDescription>Les derniers sujets ajoutés à la plateforme</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentSubjects.map((subject) => (
                  <div key={subject.id} className="flex items-center gap-4">
                    <div className="rounded-md bg-primary/10 p-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">{subject.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {subject.department} - {subject.level}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link href={`/dashboard/subjects/${subject.id}`}>
                        <Button variant="ghost" size="sm">
                          Voir
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/dashboard/subjects">
                <Button variant="outline">Voir tous les sujets</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Vos corrections</CardTitle>
              <CardDescription>Les corrections que vous avez achetées</CardDescription>
            </CardHeader>
            <CardContent>
              {purchasedCorrections.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-6 text-center">
                  <Download className="h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-sm font-medium">Aucune correction achetée</p>
                  <p className="text-xs text-muted-foreground">Achetez des corrections pour les retrouver ici</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {purchasedCorrections.map((correction) => (
                    <div key={correction.id} className="flex items-center gap-4">
                      <div className="rounded-md bg-primary/10 p-2">
                        <Download className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{correction.title}</p>
                        <p className="text-xs text-muted-foreground">
                          Acheté le{" "}
                          {new Date(
                            purchases.find((p) => p.correctionId === correction.id)?.purchaseDate || "",
                          ).toLocaleDateString()}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        Télécharger
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Link href="/dashboard/downloads">
                <Button variant="outline">Voir tous les téléchargements</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recherche rapide</CardTitle>
              <CardDescription>Trouvez rapidement un sujet ou une correction</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Rechercher..."
                  className="w-full rounded-md border border-input bg-background pl-8 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href="/dashboard/subjects">
                <Button variant="outline">Parcourir les sujets</Button>
              </Link>
              <Link href="/dashboard/subjects/new">
                <Button>Ajouter un sujet</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Abonnement</CardTitle>
              <CardDescription>Votre abonnement actuel</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="rounded-lg bg-primary/10 p-4">
                  <div className="font-medium">Plan Gratuit</div>
                  <p className="text-sm text-muted-foreground">Accès limité aux fonctionnalités</p>
                </div>
                <p className="text-sm">
                  Passez à un abonnement premium pour débloquer toutes les fonctionnalités et accéder à un nombre
                  illimité de corrections.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/dashboard/subscription" className="w-full">
                <Button className="w-full">Mettre à niveau</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </UserLayout>
  )
}
