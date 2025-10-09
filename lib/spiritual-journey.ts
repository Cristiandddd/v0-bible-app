/**
 * Sistema de Jornada Espiritual
 * Maneja el contenido, progreso y seguimiento del camino de fe del usuario
 */

export interface DailyReflection {
  id: string
  religion: string
  title: string
  description: string
  scripture?: string
  questions: string[]
  estimatedMinutes: number
}

export interface LearningTopic {
  id: string
  religion: string
  category: string // "fundamentos", "vivir-la-fe", "profundizando"
  title: string
  description: string
  subtopics: string[]
  completed: boolean
  startedAt?: number
  completedAt?: number
}

export interface SpiritualProgress {
  userId: string
  daysOfPractice: number
  lastPracticeDate: string // YYYY-MM-DD
  topicsExplored: string[] // IDs de temas explorados
  topicsCompleted: string[] // IDs de temas completados
  reflectionsCompleted: string[] // IDs de reflexiones completadas
  journalEntries: JournalEntry[]
  habits: SpiritualHabits
  createdAt: number
  lastUpdated: number
}

export interface JournalEntry {
  id: string
  date: number
  topic: string
  reflection: string
  conversationSummary?: string
}

export interface SpiritualHabits {
  prayer: number // días consecutivos
  reading: number // días consecutivos
  reflection: number // días consecutivos
  lastPrayerDate?: string
  lastReadingDate?: string
  lastReflectionDate?: string
}

// ============================================
// CONTENIDO RELIGIOSO
// ============================================

export const DAILY_REFLECTIONS: Record<string, DailyReflection[]> = {
  cristianismo: [
    {
      id: "cr-1",
      religion: "cristianismo",
      title: "El Amor que Transforma",
      description: "Reflexiona sobre cómo el amor de Dios puede transformar tu vida y tus relaciones",
      scripture: "1 Corintios 13:4-7",
      questions: [
        "¿Cómo has experimentado el amor de Dios en tu vida?",
        "¿Hay alguien a quien necesites mostrar más amor hoy?",
      ],
      estimatedMinutes: 5,
    },
    {
      id: "cr-2",
      religion: "cristianismo",
      title: "La Paz en la Tormenta",
      description: "Descubre cómo encontrar paz interior incluso en momentos difíciles",
      scripture: "Filipenses 4:6-7",
      questions: ["¿Qué situación te está causando ansiedad hoy?", "¿Cómo puedes entregar esa preocupación a Dios?"],
      estimatedMinutes: 5,
    },
    {
      id: "cr-3",
      religion: "cristianismo",
      title: "El Perdón que Libera",
      description: "Explora el poder sanador del perdón en tu vida",
      scripture: "Mateo 6:14-15",
      questions: ["¿Hay alguien a quien necesites perdonar?", "¿Qué te impide dar ese paso?"],
      estimatedMinutes: 5,
    },
  ],
  catolicismo: [
    {
      id: "cat-1",
      religion: "catolicismo",
      title: "La Gracia de los Sacramentos",
      description: "Reflexiona sobre cómo los sacramentos fortalecen tu vida espiritual",
      scripture: "Juan 6:54-56",
      questions: [
        "¿Cuándo fue la última vez que recibiste la Eucaristía?",
        "¿Cómo te preparas espiritualmente para recibirla?",
      ],
      estimatedMinutes: 5,
    },
    {
      id: "cat-2",
      religion: "catolicismo",
      title: "María, Madre de Misericordia",
      description: "Medita sobre el papel de María en tu camino de fe",
      scripture: "Lucas 1:46-55",
      questions: ["¿Cómo te ayuda María en tu vida espiritual?", "¿Qué puedes aprender de su ejemplo de fe?"],
      estimatedMinutes: 5,
    },
  ],
  islam: [
    {
      id: "isl-1",
      religion: "islam",
      title: "La Misericordia de Alá",
      description: "Reflexiona sobre la infinita misericordia y compasión de Alá",
      scripture: "Corán 39:53",
      questions: ["¿Cómo has experimentado la misericordia de Alá?", "¿Cómo puedes mostrar misericordia a otros hoy?"],
      estimatedMinutes: 5,
    },
  ],
  judaismo: [
    {
      id: "jud-1",
      religion: "judaismo",
      title: "Tikkun Olam - Reparar el Mundo",
      description: "Reflexiona sobre tu responsabilidad de hacer del mundo un lugar mejor",
      scripture: "Deuteronomio 16:20",
      questions: [
        "¿Qué acción puedes hacer hoy para reparar el mundo?",
        "¿Cómo puedes practicar la justicia en tu vida diaria?",
      ],
      estimatedMinutes: 5,
    },
  ],
  budismo: [
    {
      id: "bud-1",
      religion: "budismo",
      title: "La Práctica de la Compasión",
      description: "Medita sobre cómo cultivar compasión hacia ti mismo y los demás",
      questions: ["¿Cómo puedes ser más compasivo contigo mismo?", "¿Qué significa para ti la compasión universal?"],
      estimatedMinutes: 5,
    },
  ],
}

export const LEARNING_PATHS: Record<string, LearningTopic[]> = {
  cristianismo: [
    // Fundamentos
    {
      id: "cr-fund-1",
      religion: "cristianismo",
      category: "fundamentos",
      title: "La Naturaleza de Dios",
      description: "Comprende quién es Dios y cómo se revela a la humanidad",
      subtopics: ["La Trinidad", "Los atributos de Dios", "Dios como Padre"],
      completed: false,
    },
    {
      id: "cr-fund-2",
      religion: "cristianismo",
      category: "fundamentos",
      title: "El Mensaje de Jesús",
      description: "Explora las enseñanzas centrales de Jesucristo",
      subtopics: ["El Reino de Dios", "El Sermón del Monte", "Las Bienaventuranzas"],
      completed: false,
    },
    {
      id: "cr-fund-3",
      religion: "cristianismo",
      category: "fundamentos",
      title: "El Espíritu Santo",
      description: "Descubre el papel del Espíritu Santo en la vida del creyente",
      subtopics: ["Los dones del Espíritu", "El fruto del Espíritu", "La guía divina"],
      completed: false,
    },
    // Vivir la Fe
    {
      id: "cr-vida-1",
      religion: "cristianismo",
      category: "vivir-la-fe",
      title: "La Oración",
      description: "Aprende diferentes formas de comunicarte con Dios",
      subtopics: ["El Padre Nuestro", "Oración contemplativa", "Intercesión"],
      completed: false,
    },
    {
      id: "cr-vida-2",
      religion: "cristianismo",
      category: "vivir-la-fe",
      title: "El Perdón",
      description: "Comprende y practica el perdón cristiano",
      subtopics: ["Perdonar a otros", "Recibir perdón", "Reconciliación"],
      completed: false,
    },
    {
      id: "cr-vida-3",
      religion: "cristianismo",
      category: "vivir-la-fe",
      title: "El Servicio",
      description: "Descubre cómo servir a otros como Jesús lo hizo",
      subtopics: ["Amor al prójimo", "Justicia social", "Generosidad"],
      completed: false,
    },
    // Profundizando
    {
      id: "cr-prof-1",
      religion: "cristianismo",
      category: "profundizando",
      title: "Las Parábolas",
      description: "Explora el significado profundo de las parábolas de Jesús",
      subtopics: ["El hijo pródigo", "El buen samaritano", "El sembrador"],
      completed: false,
    },
    {
      id: "cr-prof-2",
      religion: "cristianismo",
      category: "profundizando",
      title: "Los Profetas",
      description: "Comprende el mensaje de los profetas del Antiguo Testamento",
      subtopics: ["Isaías", "Jeremías", "Los profetas menores"],
      completed: false,
    },
  ],
  catolicismo: [
    {
      id: "cat-fund-1",
      religion: "catolicismo",
      category: "fundamentos",
      title: "Los Sacramentos",
      description: "Comprende los siete sacramentos de la Iglesia",
      subtopics: ["Bautismo", "Eucaristía", "Confirmación", "Reconciliación"],
      completed: false,
    },
    {
      id: "cat-vida-1",
      religion: "catolicismo",
      category: "vivir-la-fe",
      title: "La Vida Litúrgica",
      description: "Explora el año litúrgico y las celebraciones",
      subtopics: ["Adviento", "Cuaresma", "Pascua", "Tiempo Ordinario"],
      completed: false,
    },
  ],
  islam: [
    {
      id: "isl-fund-1",
      religion: "islam",
      category: "fundamentos",
      title: "Los Cinco Pilares",
      description: "Comprende los fundamentos de la práctica islámica",
      subtopics: ["Shahada", "Salat", "Zakat", "Sawm", "Hajj"],
      completed: false,
    },
  ],
  judaismo: [
    {
      id: "jud-fund-1",
      religion: "judaismo",
      category: "fundamentos",
      title: "La Torá",
      description: "Explora las enseñanzas fundamentales de la Torá",
      subtopics: ["Los Cinco Libros", "Las Mitzvot", "La interpretación"],
      completed: false,
    },
  ],
  budismo: [
    {
      id: "bud-fund-1",
      religion: "budismo",
      category: "fundamentos",
      title: "Las Cuatro Nobles Verdades",
      description: "Comprende las verdades fundamentales del budismo",
      subtopics: ["El sufrimiento", "El origen", "El cese", "El camino"],
      completed: false,
    },
  ],
}

// ============================================
// FUNCIONES DE PROGRESO
// ============================================

export function getSpiritualProgress(): SpiritualProgress {
  if (typeof window === "undefined") {
    // Return default progress for SSR
    return {
      userId: "user",
      daysOfPractice: 0,
      lastPracticeDate: "",
      topicsExplored: [],
      topicsCompleted: [],
      reflectionsCompleted: [],
      journalEntries: [],
      habits: {
        prayer: 0,
        reading: 0,
        reflection: 0,
      },
      createdAt: Date.now(),
      lastUpdated: Date.now(),
    }
  }

  const saved = localStorage.getItem("spiritualProgress")
  if (saved) {
    return JSON.parse(saved)
  }

  // Crear progreso inicial
  const initialProgress: SpiritualProgress = {
    userId: localStorage.getItem("userName") || "user",
    daysOfPractice: 0,
    lastPracticeDate: "",
    topicsExplored: [],
    topicsCompleted: [],
    reflectionsCompleted: [],
    journalEntries: [],
    habits: {
      prayer: 0,
      reading: 0,
      reflection: 0,
    },
    createdAt: Date.now(),
    lastUpdated: Date.now(),
  }

  saveSpiritualProgress(initialProgress)
  return initialProgress
}

export function saveSpiritualProgress(progress: SpiritualProgress): void {
  if (typeof window === "undefined") return
  progress.lastUpdated = Date.now()
  localStorage.setItem("spiritualProgress", JSON.stringify(progress))
}

export function updateDaysOfPractice(): void {
  const progress = getSpiritualProgress()
  const today = new Date().toISOString().split("T")[0]

  if (progress.lastPracticeDate !== today) {
    progress.daysOfPractice += 1
    progress.lastPracticeDate = today
    saveSpiritualProgress(progress)
  }
}

export function completeReflection(reflectionId: string): void {
  const progress = getSpiritualProgress()

  if (!progress.reflectionsCompleted.includes(reflectionId)) {
    progress.reflectionsCompleted.push(reflectionId)
    updateDaysOfPractice()
    saveSpiritualProgress(progress)
  }
}

export function startTopic(topicId: string): void {
  const progress = getSpiritualProgress()

  if (!progress.topicsExplored.includes(topicId)) {
    progress.topicsExplored.push(topicId)
    saveSpiritualProgress(progress)
  }
}

export function completeTopic(topicId: string): void {
  const progress = getSpiritualProgress()

  if (!progress.topicsCompleted.includes(topicId)) {
    progress.topicsCompleted.push(topicId)
    saveSpiritualProgress(progress)
  }
}

export function addJournalEntry(entry: Omit<JournalEntry, "id">): void {
  const progress = getSpiritualProgress()
  const newEntry: JournalEntry = {
    ...entry,
    id: `journal-${Date.now()}`,
  }

  progress.journalEntries.push(newEntry)
  saveSpiritualProgress(progress)
}

export function getDailyReflection(religion: string): DailyReflection | null {
  const reflections = DAILY_REFLECTIONS[religion] || DAILY_REFLECTIONS.cristianismo
  const progress = getSpiritualProgress()

  // Encontrar una reflexión no completada
  const available = reflections.filter((r) => !progress.reflectionsCompleted.includes(r.id))

  if (available.length === 0) {
    // Si completó todas, rotar desde el principio
    return reflections[0]
  }

  // Retornar la primera disponible
  return available[0]
}

export function getLearningPath(religion: string): LearningTopic[] {
  const topics = LEARNING_PATHS[religion] || LEARNING_PATHS.cristianismo
  const progress = getSpiritualProgress()

  // Marcar temas como completados según el progreso
  return topics.map((topic) => ({
    ...topic,
    completed: progress.topicsCompleted.includes(topic.id),
  }))
}

export function getTopicsByCategory(religion: string, category: string): LearningTopic[] {
  const allTopics = getLearningPath(religion)
  return allTopics.filter((t) => t.category === category)
}
