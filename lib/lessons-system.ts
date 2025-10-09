import type { LessonBook, LessonProgress } from "./lessons/types"
import { GENESIS_BOOK } from "./lessons/genesis-content"
import { GENESIS_BOOK_2 } from "./lessons/genesis-content-2"
import { GENESIS_BOOK_3 } from "./lessons/genesis-content-3"
import { GENESIS_BOOK_4 } from "./lessons/genesis-content-4"
import { EXODUS_BOOK } from "./lessons/exodus-content"
import { EXODUS_BOOK_PART2 } from "./lessons/exodus-content-2"
import { EXODUS_BOOK_PART3 } from "./lessons/exodus-content-3"
import { EXODUS_BOOK_PART4 } from "./lessons/exodus-content-4"

export type {
  LessonBook,
  LessonSection,
  Lesson,
  LessonContent,
  DialogueStep,
  DialogueOption,
  LessonProgress,
  LessonState,
} from "./lessons/types"

function mergeGenesisBooks(): LessonBook {
  return {
    ...GENESIS_BOOK,
    sections: [
      ...GENESIS_BOOK.sections,
      ...GENESIS_BOOK_2.sections,
      ...GENESIS_BOOK_3.sections,
      ...GENESIS_BOOK_4.sections,
    ],
  }
}

function mergeExodusBooks(): LessonBook {
  return {
    ...EXODUS_BOOK,
    sections: [
      ...EXODUS_BOOK.sections,
      ...EXODUS_BOOK_PART2.sections,
      ...EXODUS_BOOK_PART3.sections,
      ...EXODUS_BOOK_PART4.sections,
    ],
  }
}

// Contenido de lecciones organizado por religión
export const LESSON_BOOKS: Record<string, LessonBook[]> = {
  cristianismo: [mergeGenesisBooks(), mergeExodusBooks()],
}

// Funciones de progreso
export function getLessonProgress(): LessonProgress {
  if (typeof window === "undefined") {
    // Return default progress for SSR
    return {
      userId: "user",
      completedLessons: [],
      lessonStates: {},
      totalTimeSpent: 0,
      lastUpdated: Date.now(),
    }
  }

  const saved = localStorage.getItem("lessonProgress")
  if (saved) {
    return JSON.parse(saved)
  }

  const initial: LessonProgress = {
    userId: localStorage.getItem("userName") || "user",
    completedLessons: [],
    lessonStates: {},
    totalTimeSpent: 0,
    lastUpdated: Date.now(),
  }

  saveLessonProgress(initial)
  return initial
}

export function saveLessonProgress(progress: LessonProgress): void {
  if (typeof window === "undefined") return
  progress.lastUpdated = Date.now()
  localStorage.setItem("lessonProgress", JSON.stringify(progress))
}

export function startLesson(lessonId: string): void {
  const progress = getLessonProgress()

  if (!progress.lessonStates[lessonId]) {
    progress.lessonStates[lessonId] = {
      lessonId,
      startedAt: Date.now(),
      currentStepId: "intro-1",
      responses: {},
      helpUsed: [],
      timeSpent: 0,
    }
    progress.currentLesson = lessonId
    saveLessonProgress(progress)
  }
}

export function completeLesson(lessonId: string): void {
  const progress = getLessonProgress()

  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId)

    if (progress.lessonStates[lessonId]) {
      progress.lessonStates[lessonId].completedAt = Date.now()
    }

    saveLessonProgress(progress)
  }
}

function getAllLessonsInOrder(book: LessonBook) {
  const allLessons = book.sections.flatMap((section) => section.lessons)
  return allLessons.sort((a, b) => a.order - b.order)
}

export function isLessonUnlocked(lessonId: string): boolean {
  const progress = getLessonProgress()
  const allBooks = Object.values(LESSON_BOOKS).flat()

  for (const book of allBooks) {
    const allLessons = getAllLessonsInOrder(book)
    const lesson = allLessons.find((l) => l.id === lessonId)

    if (lesson) {
      if (lesson.order === 1) return true

      const prevLesson = allLessons.find((l) => l.order === lesson.order - 1)
      if (prevLesson) {
        return progress.completedLessons.includes(prevLesson.id)
      }
    }
  }

  return false
}

export function getLessonBooks(religion: string): LessonBook[] {
  return LESSON_BOOKS[religion] || LESSON_BOOKS.cristianismo
}

export function getLessonStats(religion: string): {
  totalLessons: number
  completedLessons: number
  totalTimeSpent: number
} {
  const progress = getLessonProgress()
  const books = getLessonBooks(religion)

  const totalLessons = books.reduce((sum, book) => {
    return sum + book.sections.reduce((sectionSum, section) => sectionSum + section.lessons.length, 0)
  }, 0)

  return {
    totalLessons,
    completedLessons: progress.completedLessons.length,
    totalTimeSpent: progress.totalTimeSpent,
  }
}
