import type { BibleVerse } from "./bible-api"
import { genesisChapters } from "./bible/genesis-chapters"
import { genesisChapters2 } from "./bible/genesis-chapters-2"
import { genesisChapters3 } from "./bible/genesis-chapters-3"
import { exodusChapters } from "./bible/exodus-chapters"
import { exodusChapters2 } from "./bible/exodus-chapters-2"
import { exodusChapters3 } from "./bible/exodus-chapters-3"

const allGenesisChapters = {
  ...genesisChapters,
  ...genesisChapters2,
  ...genesisChapters3,
}

const allExodusChapters = {
  ...exodusChapters,
  ...exodusChapters2,
  ...exodusChapters3,
}

export const BIBLE_DATA: Record<string, Record<number, BibleVerse[]>> = {
  genesis: allGenesisChapters,
  exodus: allExodusChapters,
  // Aquí se agregarán más libros: leviticus, etc.
}

export function getBibleChapterData(bookId: string, chapter: number): BibleVerse[] | null {
  if (typeof window === "undefined") {
    return null
  }

  return BIBLE_DATA[bookId]?.[chapter] || null
}

export function getAvailableChapters(bookId: string): number[] {
  if (typeof window === "undefined") {
    return []
  }

  const book = BIBLE_DATA[bookId]
  if (!book) return []

  return Object.keys(book)
    .map(Number)
    .sort((a, b) => a - b)
}

export function isChapterAvailable(bookId: string, chapter: number): boolean {
  if (typeof window === "undefined") {
    return false
  }

  return !!BIBLE_DATA[bookId]?.[chapter]
}
