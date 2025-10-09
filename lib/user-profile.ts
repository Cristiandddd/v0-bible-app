/**
 * Sistema de perfil de usuario y memoria conversacional
 */

export interface UserProfile {
  name: string
  religion: string // "cristianismo", "catolicismo", "protestantismo", "otro"
  denomination?: string // Denominación específica si aplica
  preferredTreatment: string // "formal", "casual", "amigable"
  spiritualGoals: string[] // Objetivos espirituales del usuario
  interests: string[] // Temas de interés
  customNotes?: string // Notas adicionales del usuario
  createdAt: number
  lastUpdated: number
}

export interface ConversationMemory {
  userId: string
  importantFacts: string[] // Hechos importantes mencionados por el usuario
  preferences: Record<string, string> // Preferencias detectadas
  topics: string[] // Temas recurrentes
  lastUpdated: number
}

// Guardar perfil de usuario
export function saveUserProfile(profile: UserProfile): void {
  if (typeof window === "undefined") return
  localStorage.setItem("userProfile", JSON.stringify(profile))
  localStorage.setItem("userName", profile.name) // Mantener compatibilidad
}

// Obtener perfil de usuario
export function getUserProfile(): UserProfile | null {
  if (typeof window === "undefined") return null
  const saved = localStorage.getItem("userProfile")
  if (!saved) return null
  return JSON.parse(saved)
}

// Guardar memoria conversacional
export function saveConversationMemory(memory: ConversationMemory): void {
  if (typeof window === "undefined") return
  localStorage.setItem("conversationMemory", JSON.stringify(memory))
}

// Obtener memoria conversacional
export function getConversationMemory(): ConversationMemory | null {
  if (typeof window === "undefined") return null
  const saved = localStorage.getItem("conversationMemory")
  if (!saved) return null
  return JSON.parse(saved)
}

// Agregar un hecho importante a la memoria
export function addImportantFact(fact: string): void {
  if (typeof window === "undefined") return
  const memory = getConversationMemory() || {
    userId: getUserProfile()?.name || "user",
    importantFacts: [],
    preferences: {},
    topics: [],
    lastUpdated: Date.now(),
  }

  if (!memory.importantFacts.includes(fact)) {
    memory.importantFacts.push(fact)
    memory.lastUpdated = Date.now()
    saveConversationMemory(memory)
  }
}

// Agregar un tema a la memoria
export function addTopic(topic: string): void {
  if (typeof window === "undefined") return
  const memory = getConversationMemory() || {
    userId: getUserProfile()?.name || "user",
    importantFacts: [],
    preferences: {},
    topics: [],
    lastUpdated: Date.now(),
  }

  if (!memory.topics.includes(topic)) {
    memory.topics.push(topic)
    memory.lastUpdated = Date.now()
    saveConversationMemory(memory)
  }
}

// Verificar si el usuario ha completado el onboarding
export function hasCompletedOnboarding(): boolean {
  if (typeof window === "undefined") return false
  return getUserProfile() !== null
}
