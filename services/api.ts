import {
  mockSubjects,
  mockCorrections,
  mockDepartments,
  mockFields,
  mockLevels,
  mockSubjectCategories,
  mockCollaborators,
  mockPurchases,
  mockFavorites,
  type Subject,
  type Correction,
  type Department,
  type Field,
  type Level,
  type SubjectCategory,
  type Collaborator,
  type Purchase,
  type Favorite,
} from "@/mocks/data"

// Fonction utilitaire pour simuler un délai d'API
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// API pour les sujets
export const subjectApi = {
  getAll: async (): Promise<Subject[]> => {
    await delay(800)
    return [...mockSubjects]
  },

  getById: async (id: string): Promise<Subject | null> => {
    await delay(500)
    const subject = mockSubjects.find((s) => s.id === id)
    return subject || null
  },

  search: async (query: string): Promise<Subject[]> => {
    await delay(600)
    return mockSubjects.filter(
      (s) =>
        s.title.toLowerCase().includes(query.toLowerCase()) ||
        s.description.toLowerCase().includes(query.toLowerCase()),
    )
  },

  create: async (subject: Omit<Subject, "id" | "createdAt" | "downloads">): Promise<Subject> => {
    await delay(1000)
    const newSubject: Subject = {
      ...subject,
      id: `subject-${Date.now()}`,
      createdAt: new Date().toISOString(),
      downloads: 0,
    }
    return newSubject
  },

  update: async (id: string, subject: Partial<Subject>): Promise<Subject> => {
    await delay(1000)
    const existingSubject = mockSubjects.find((s) => s.id === id)
    if (!existingSubject) throw new Error("Subject not found")

    const updatedSubject = { ...existingSubject, ...subject }
    return updatedSubject
  },

  delete: async (id: string): Promise<boolean> => {
    await delay(800)
    return true
  },
}

// API pour les corrections
export const correctionApi = {
  getAll: async (): Promise<Correction[]> => {
    await delay(800)
    return [...mockCorrections]
  },

  getById: async (id: string): Promise<Correction | null> => {
    await delay(500)
    const correction = mockCorrections.find((c) => c.id === id)
    return correction || null
  },

  getBySubjectId: async (subjectId: string): Promise<Correction[]> => {
    await delay(600)
    return mockCorrections.filter((c) => c.subjectId === subjectId)
  },

  create: async (correction: Omit<Correction, "id" | "createdAt" | "purchases">): Promise<Correction> => {
    await delay(1000)
    const newCorrection: Correction = {
      ...correction,
      id: `correction-${Date.now()}`,
      createdAt: new Date().toISOString(),
      purchases: 0,
    }
    return newCorrection
  },

  update: async (id: string, correction: Partial<Correction>): Promise<Correction> => {
    await delay(1000)
    const existingCorrection = mockCorrections.find((c) => c.id === id)
    if (!existingCorrection) throw new Error("Correction not found")

    const updatedCorrection = { ...existingCorrection, ...correction }
    return updatedCorrection
  },

  delete: async (id: string): Promise<boolean> => {
    await delay(800)
    return true
  },
}

// API pour les départements
export const departmentApi = {
  getAll: async (): Promise<Department[]> => {
    await delay(500)
    return [...mockDepartments]
  },

  create: async (name: string): Promise<Department> => {
    await delay(800)
    return { id: `dept-${Date.now()}`, name }
  },

  update: async (id: string, name: string): Promise<Department> => {
    await delay(800)
    return { id, name }
  },

  delete: async (id: string): Promise<boolean> => {
    await delay(600)
    return true
  },
}

// API pour les filières
export const fieldApi = {
  getAll: async (): Promise<Field[]> => {
    await delay(500)
    return [...mockFields]
  },

  getByDepartment: async (departmentId: string): Promise<Field[]> => {
    await delay(500)
    return mockFields.filter((f) => f.departmentId === departmentId)
  },

  create: async (name: string, departmentId: string): Promise<Field> => {
    await delay(800)
    return { id: `field-${Date.now()}`, name, departmentId }
  },

  update: async (id: string, data: Partial<Field>): Promise<Field> => {
    await delay(800)
    const existingField = mockFields.find((f) => f.id === id)
    if (!existingField) throw new Error("Field not found")

    return { ...existingField, ...data }
  },

  delete: async (id: string): Promise<boolean> => {
    await delay(600)
    return true
  },
}

// API pour les niveaux
export const levelApi = {
  getAll: async (): Promise<Level[]> => {
    await delay(500)
    return [...mockLevels]
  },

  create: async (name: string): Promise<Level> => {
    await delay(800)
    return { id: `level-${Date.now()}`, name }
  },

  update: async (id: string, name: string): Promise<Level> => {
    await delay(800)
    return { id, name }
  },

  delete: async (id: string): Promise<boolean> => {
    await delay(600)
    return true
  },
}

// API pour les matières
export const subjectCategoryApi = {
  getAll: async (): Promise<SubjectCategory[]> => {
    await delay(500)
    return [...mockSubjectCategories]
  },

  create: async (name: string): Promise<SubjectCategory> => {
    await delay(800)
    return { id: `subject-cat-${Date.now()}`, name }
  },

  update: async (id: string, name: string): Promise<SubjectCategory> => {
    await delay(800)
    return { id, name }
  },

  delete: async (id: string): Promise<boolean> => {
    await delay(600)
    return true
  },
}

// API pour les collaborateurs
export const collaboratorApi = {
  getAll: async (): Promise<Collaborator[]> => {
    await delay(800)
    return [...mockCollaborators]
  },

  getById: async (id: string): Promise<Collaborator | null> => {
    await delay(500)
    const collaborator = mockCollaborators.find((c) => c.id === id)
    return collaborator || null
  },

  create: async (collaborator: Omit<Collaborator, "id">): Promise<Collaborator> => {
    await delay(1000)
    const newCollaborator: Collaborator = {
      ...collaborator,
      id: `collab-${Date.now()}`,
    }
    return newCollaborator
  },

  update: async (id: string, data: Partial<Collaborator>): Promise<Collaborator> => {
    await delay(1000)
    const existingCollaborator = mockCollaborators.find((c) => c.id === id)
    if (!existingCollaborator) throw new Error("Collaborator not found")

    return { ...existingCollaborator, ...data }
  },

  delete: async (id: string): Promise<boolean> => {
    await delay(800)
    return true
  },
}

// API pour les achats
export const purchaseApi = {
  getByUser: async (userId: string): Promise<Purchase[]> => {
    await delay(700)
    return mockPurchases.filter((p) => p.userId === userId)
  },

  create: async (purchase: Omit<Purchase, "id" | "purchaseDate" | "status">): Promise<Purchase> => {
    await delay(1500) // Simuler un délai plus long pour le paiement
    const newPurchase: Purchase = {
      ...purchase,
      id: `purchase-${Date.now()}`,
      purchaseDate: new Date().toISOString(),
      status: "completed", // Dans un cas réel, ce serait "pending" jusqu'à confirmation
    }
    return newPurchase
  },
}

// API pour les favoris
export const favoriteApi = {
  getByUser: async (userId: string): Promise<Favorite[]> => {
    await delay(600)
    return mockFavorites.filter((f) => f.userId === userId)
  },

  add: async (userId: string, subjectId: string): Promise<Favorite> => {
    await delay(500)
    const newFavorite: Favorite = {
      id: `fav-${Date.now()}`,
      userId,
      subjectId,
      addedAt: new Date().toISOString(),
    }
    return newFavorite
  },

  remove: async (id: string): Promise<boolean> => {
    await delay(500)
    return true
  },
}
