// Types
export type User = {
  id: string
  name: string
  email: string
  role: "admin" | "user"
  avatar: string
  password?: string
}

export type Subject = {
  id: string
  title: string
  description: string
  department: string
  level: string
  field: string
  subject: string
  createdAt: string
  createdBy: string
  downloads: number
  fileUrl: string
}

export type Correction = {
  id: string
  subjectId: string
  title: string
  description: string
  price: number
  previewContent: string
  fullContent: string
  createdAt: string
  createdBy: string
  purchases: number
  fileUrl: string
}

export type Department = {
  id: string
  name: string
}

export type Field = {
  id: string
  name: string
  departmentId: string
}

export type Level = {
  id: string
  name: string
}

export type SubjectCategory = {
  id: string
  name: string
}

export type Collaborator = {
  id: string
  name: string
  email: string
  departmentId: string
  role: string
  avatar: string
}

export type Purchase = {
  id: string
  userId: string
  correctionId: string
  amount: number
  paymentMethod: "Orange Money" | "MTN Money"
  status: "completed" | "pending" | "failed"
  purchaseDate: string
}

export type Favorite = {
  id: string
  userId: string
  subjectId: string
  addedAt: string
}

// Mock data
export const mockUsers: User[] = [
  {
    id: "user-1",
    name: "Utilisateur Test",
    email: "user@example.com",
    password: "password123",
    role: "user",
    avatar: `/placeholder.svg?height=40&width=40`,
  },
  {
    id: "admin-1",
    name: "Admin Test",
    email: "admin@example.com",
    password: "admin123",
    role: "admin",
    avatar: `/placeholder.svg?height=40&width=40`,
  },
]

export const mockDepartments: Department[] = [
  { id: "dept-1", name: "Sciences" },
  { id: "dept-2", name: "Lettres" },
  { id: "dept-3", name: "Économie" },
]

export const mockFields: Field[] = [
  { id: "field-1", name: "Mathématiques", departmentId: "dept-1" },
  { id: "field-2", name: "Physique-Chimie", departmentId: "dept-1" },
  { id: "field-3", name: "Littérature", departmentId: "dept-2" },
  { id: "field-4", name: "Histoire-Géographie", departmentId: "dept-2" },
  { id: "field-5", name: "Économie Générale", departmentId: "dept-3" },
]

export const mockLevels: Level[] = [
  { id: "level-1", name: "Terminale" },
  { id: "level-2", name: "Première" },
  { id: "level-3", name: "Seconde" },
  { id: "level-4", name: "Troisième" },
]

export const mockSubjectCategories: SubjectCategory[] = [
  { id: "subject-1", name: "Algèbre" },
  { id: "subject-2", name: "Géométrie" },
  { id: "subject-3", name: "Mécanique" },
  { id: "subject-4", name: "Chimie organique" },
  { id: "subject-5", name: "Littérature française" },
  { id: "subject-6", name: "Littérature africaine" },
]

export const mockSubjects: Subject[] = Array.from({ length: 20 }).map((_, i) => ({
  id: `subject-${i + 1}`,
  title: `Sujet d'examen ${i + 1}`,
  description: `Description détaillée du sujet d'examen ${i + 1}. Ce sujet couvre plusieurs aspects importants du programme.`,
  department: mockDepartments[i % mockDepartments.length].name,
  level: mockLevels[i % mockLevels.length].name,
  field: mockFields[i % mockFields.length].name,
  subject: mockSubjectCategories[i % mockSubjectCategories.length].name,
  createdAt: new Date(Date.now() - i * 86400000).toISOString(),
  createdBy: i % 3 === 0 ? "admin-1" : "user-1",
  downloads: Math.floor(Math.random() * 100),
  fileUrl: `/files/subject-${i + 1}.pdf`,
}))

export const mockCorrections: Correction[] = mockSubjects.map((subject, i) => ({
  id: `correction-${i + 1}`,
  subjectId: subject.id,
  title: `Correction du ${subject.title}`,
  description: `Solution complète et détaillée pour le ${subject.title}`,
  price: Math.floor(Math.random() * 5 + 1) * 1000,
  previewContent:
    "Ceci est un aperçu de la correction. Pour voir la suite, veuillez vous abonner ou acheter cette correction.",
  fullContent: "Contenu complet de la correction avec toutes les étapes de résolution et explications détaillées.",
  createdAt: new Date(Date.now() - i * 86400000).toISOString(),
  createdBy: i % 3 === 0 ? "admin-1" : "user-1",
  purchases: Math.floor(Math.random() * 50),
  fileUrl: `/files/correction-${i + 1}.pdf`,
}))

export const mockCollaborators: Collaborator[] = [
  {
    id: "collab-1",
    name: "Jean Dupont",
    email: "jean@example.com",
    departmentId: "dept-1",
    role: "Enseignant",
    avatar: `/placeholder.svg?height=40&width=40`,
  },
  {
    id: "collab-2",
    name: "Marie Curie",
    email: "marie@example.com",
    departmentId: "dept-2",
    role: "Correcteur",
    avatar: `/placeholder.svg?height=40&width=40`,
  },
  {
    id: "collab-3",
    name: "Albert Einstein",
    email: "albert@example.com",
    departmentId: "dept-1",
    role: "Enseignant",
    avatar: `/placeholder.svg?height=40&width=40`,
  },
]

export const mockPurchases: Purchase[] = [
  {
    id: "purchase-1",
    userId: "user-1",
    correctionId: "correction-1",
    amount: 2000,
    paymentMethod: "Orange Money",
    status: "completed",
    purchaseDate: new Date(Date.now() - 5 * 86400000).toISOString(),
  },
  {
    id: "purchase-2",
    userId: "user-1",
    correctionId: "correction-3",
    amount: 1500,
    paymentMethod: "MTN Money",
    status: "completed",
    purchaseDate: new Date(Date.now() - 2 * 86400000).toISOString(),
  },
]

export const mockFavorites: Favorite[] = [
  {
    id: "fav-1",
    userId: "user-1",
    subjectId: "subject-2",
    addedAt: new Date(Date.now() - 10 * 86400000).toISOString(),
  },
  {
    id: "fav-2",
    userId: "user-1",
    subjectId: "subject-5",
    addedAt: new Date(Date.now() - 7 * 86400000).toISOString(),
  },
]
