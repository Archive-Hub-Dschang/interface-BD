"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { VisitorLayout } from "@/components/layouts/visitor-layout"
import { subjectApi } from "@/services/api"
import type { Subject } from "@/mocks/data"
import { Loader2, Search } from "lucide-react"

export default function SubjectsPage() {
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [filteredSubjects, setFilteredSubjects] = useState<Subject[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("")
  const [levelFilter, setLevelFilter] = useState("")

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const data = await subjectApi.getAll()
        setSubjects(data)
        setFilteredSubjects(data)
      } catch (error) {
        console.error("Erreur lors du chargement des sujets:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchSubjects()
  }, [])

  useEffect(() => {
    let result = subjects

    // Filtrer par recherche
    if (searchQuery) {
      result = result.filter(
        (subject) =>
          subject.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          subject.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Filtrer par département
    if (departmentFilter) {
      result = result.filter((subject) => subject.department === departmentFilter)
    }

    // Filtrer par niveau
    if (levelFilter) {
      result = result.filter((subject) => subject.level === levelFilter)
    }

    setFilteredSubjects(result)
  }, [searchQuery, departmentFilter, levelFilter, subjects])

  // Extraire les départements et niveaux uniques pour les filtres
  const departments = [...new Set(subjects.map((subject) => subject.department))]
  const levels = [...new Set(subjects.map((subject) => subject.level))]

  return (
    <VisitorLayout>
      <div className="container py-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Sujets disponibles</h1>
            <p className="text-muted-foreground">Parcourez notre collection de sujets d'examens et exercices</p>
          </div>

          <div className="grid gap-4 md:grid-cols-[1fr_200px_200px]">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rechercher un sujet..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Département" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les départements</SelectItem>
                {departments.map((department) => (
                  <SelectItem key={department} value={department}>
                    {department}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Niveau" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les niveaux</SelectItem>
                {levels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : filteredSubjects.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <p className="text-lg font-medium">Aucun sujet trouvé</p>
              <p className="text-muted-foreground">Essayez de modifier vos critères de recherche</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredSubjects.map((subject) => (
                <Card key={subject.id} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <CardTitle className="line-clamp-1">{subject.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="line-clamp-2 text-sm text-muted-foreground">{subject.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                          {subject.department}
                        </span>
                        <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                          {subject.level}
                        </span>
                        <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                          {subject.field}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-3">
                    <Link href={`/subjects/${subject.id}`} className="w-full">
                      <Button variant="outline" className="w-full">
                        Voir les détails
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </VisitorLayout>
  )
}
