"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { VisitorLayout } from "@/components/layouts/visitor-layout"
import { subjectApi, correctionApi } from "@/services/api"
import type { Subject, Correction } from "@/mocks/data"
import { AlertCircle, ArrowLeft, Download, Loader2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"

export default function SubjectDetailPage() {
  const { id } = useParams<{ id: string }>()
  const [subject, setSubject] = useState<Subject | null>(null)
  const [corrections, setCorrections] = useState<Correction[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)

        // Récupérer le sujet
        const subjectData = await subjectApi.getById(id as string)
        if (!subjectData) {
          setError("Sujet non trouvé")
          return
        }
        setSubject(subjectData)

        // Récupérer les corrections associées
        const correctionsData = await correctionApi.getBySubjectId(id as string)
        setCorrections(correctionsData)
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error)
        setError("Une erreur est survenue lors du chargement des données")
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id])

  if (isLoading) {
    return (
      <VisitorLayout>
        <div className="container py-8 flex justify-center items-center min-h-[60vh]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </VisitorLayout>
    )
  }

  if (error || !subject) {
    return (
      <VisitorLayout>
        <div className="container py-8">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Erreur</AlertTitle>
            <AlertDescription>{error || "Sujet non trouvé"}</AlertDescription>
          </Alert>
          <div className="mt-4">
            <Link href="/subjects">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour aux sujets
              </Button>
            </Link>
          </div>
        </div>
      </VisitorLayout>
    )
  }

  return (
    <VisitorLayout>
      <div className="container py-8">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <Link href="/subjects">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">{subject.title}</h1>
          </div>

          <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Détails du sujet</CardTitle>
                  <CardDescription>Informations complètes sur ce sujet d'examen</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium">Description</h3>
                    <p className="text-muted-foreground">{subject.description}</p>
                  </div>

                  <Separator />

                  <div className="grid gap-2 sm:grid-cols-2">
                    <div>
                      <h3 className="font-medium">Département</h3>
                      <p className="text-muted-foreground">{subject.department}</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Niveau</h3>
                      <p className="text-muted-foreground">{subject.level}</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Filière</h3>
                      <p className="text-muted-foreground">{subject.field}</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Matière</h3>
                      <p className="text-muted-foreground">{subject.subject}</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="grid gap-2 sm:grid-cols-2">
                    <div>
                      <h3 className="font-medium">Date d'ajout</h3>
                      <p className="text-muted-foreground">{new Date(subject.createdAt).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Téléchargements</h3>
                      <p className="text-muted-foreground">{subject.downloads}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/login">
                    <Button className="gap-2">
                      <Download className="h-4 w-4" />
                      Télécharger le sujet
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <div className="space-y-4">
                <h2 className="text-xl font-bold">Corrections disponibles</h2>

                {corrections.length === 0 ? (
                  <p className="text-muted-foreground">Aucune correction n'est disponible pour ce sujet.</p>
                ) : (
                  <div className="space-y-4">
                    {corrections.map((correction) => (
                      <Card key={correction.id}>
                        <CardHeader>
                          <CardTitle>{correction.title}</CardTitle>
                          <CardDescription>{correction.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h3 className="font-medium">Aperçu</h3>
                              <p className="text-muted-foreground">{correction.previewContent}</p>
                            </div>

                            <div className="rounded-lg bg-muted p-4">
                              <p className="text-sm font-medium">
                                Pour accéder à la correction complète, veuillez vous connecter et acheter cette
                                correction.
                              </p>
                            </div>

                            <div className="flex items-center justify-between">
                              <p className="font-medium">Prix: {correction.price} FCFA</p>
                              <p className="text-sm text-muted-foreground">{correction.purchases} achats</p>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Link href="/login" className="w-full">
                            <Button className="w-full">Acheter cette correction</Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pourquoi s'inscrire ?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
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
                        className="h-5 w-5 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Téléchargez des sujets gratuitement</span>
                    </li>
                    <li className="flex items-start gap-2">
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
                        className="h-5 w-5 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Accédez aux corrections détaillées</span>
                    </li>
                    <li className="flex items-start gap-2">
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
                        className="h-5 w-5 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Enregistrez vos sujets favoris</span>
                    </li>
                    <li className="flex items-start gap-2">
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
                        className="h-5 w-5 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Contribuez en ajoutant vos propres sujets</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                  <Link href="/register" className="w-full">
                    <Button className="w-full">Créer un compte</Button>
                  </Link>
                  <Link href="/login" className="w-full">
                    <Button variant="outline" className="w-full">
                      Se connecter
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sujets similaires</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {subject &&
                      subject.field &&
                      Array.from({ length: 3 }).map((_, i) => (
                        <li key={i}>
                          <Link
                            href={`/subjects/subject-${i + 5}`}
                            className="text-sm hover:underline hover:text-primary"
                          >
                            Sujet d'examen {subject.field} - {2023 - i}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </VisitorLayout>
  )
}
