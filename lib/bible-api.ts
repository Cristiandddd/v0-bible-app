import { getBibleChapterData } from "./bible-system"

export interface BibleVerse {
  verse: number
  text: string
}

export interface BibleChapter {
  book: string
  chapter: number
  verses: BibleVerse[]
}

export interface BibleBook {
  id: string
  name: string
  testament: "old" | "new"
  chapters: number
}

// Estructura de los 66 libros de la Biblia
export const BIBLE_BOOKS: BibleBook[] = [
  // Antiguo Testamento - Pentateuco
  { id: "genesis", name: "Génesis", testament: "old", chapters: 50 },
  { id: "exodus", name: "Éxodo", testament: "old", chapters: 40 },
  { id: "leviticus", name: "Levítico", testament: "old", chapters: 27 },
  { id: "numbers", name: "Números", testament: "old", chapters: 36 },
  { id: "deuteronomy", name: "Deuteronomio", testament: "old", chapters: 34 },

  // Libros Históricos
  { id: "joshua", name: "Josué", testament: "old", chapters: 24 },
  { id: "judges", name: "Jueces", testament: "old", chapters: 21 },
  { id: "ruth", name: "Rut", testament: "old", chapters: 4 },
  { id: "1samuel", name: "1 Samuel", testament: "old", chapters: 31 },
  { id: "2samuel", name: "2 Samuel", testament: "old", chapters: 24 },
  { id: "1kings", name: "1 Reyes", testament: "old", chapters: 22 },
  { id: "2kings", name: "2 Reyes", testament: "old", chapters: 25 },
  { id: "1chronicles", name: "1 Crónicas", testament: "old", chapters: 29 },
  { id: "2chronicles", name: "2 Crónicas", testament: "old", chapters: 36 },
  { id: "ezra", name: "Esdras", testament: "old", chapters: 10 },
  { id: "nehemiah", name: "Nehemías", testament: "old", chapters: 13 },
  { id: "esther", name: "Ester", testament: "old", chapters: 10 },

  // Libros Poéticos
  { id: "job", name: "Job", testament: "old", chapters: 42 },
  { id: "psalms", name: "Salmos", testament: "old", chapters: 150 },
  { id: "proverbs", name: "Proverbios", testament: "old", chapters: 31 },
  { id: "ecclesiastes", name: "Eclesiastés", testament: "old", chapters: 12 },
  { id: "song", name: "Cantares", testament: "old", chapters: 8 },

  // Profetas Mayores
  { id: "isaiah", name: "Isaías", testament: "old", chapters: 66 },
  { id: "jeremiah", name: "Jeremías", testament: "old", chapters: 52 },
  { id: "lamentations", name: "Lamentaciones", testament: "old", chapters: 5 },
  { id: "ezekiel", name: "Ezequiel", testament: "old", chapters: 48 },
  { id: "daniel", name: "Daniel", testament: "old", chapters: 12 },

  // Profetas Menores
  { id: "hosea", name: "Oseas", testament: "old", chapters: 14 },
  { id: "joel", name: "Joel", testament: "old", chapters: 3 },
  { id: "amos", name: "Amós", testament: "old", chapters: 9 },
  { id: "obadiah", name: "Abdías", testament: "old", chapters: 1 },
  { id: "jonah", name: "Jonás", testament: "old", chapters: 4 },
  { id: "micah", name: "Miqueas", testament: "old", chapters: 7 },
  { id: "nahum", name: "Nahúm", testament: "old", chapters: 3 },
  { id: "habakkuk", name: "Habacuc", testament: "old", chapters: 3 },
  { id: "zephaniah", name: "Sofonías", testament: "old", chapters: 3 },
  { id: "haggai", name: "Hageo", testament: "old", chapters: 2 },
  { id: "zechariah", name: "Zacarías", testament: "old", chapters: 14 },
  { id: "malachi", name: "Malaquías", testament: "old", chapters: 4 },

  // Nuevo Testamento - Evangelios
  { id: "matthew", name: "Mateo", testament: "new", chapters: 28 },
  { id: "mark", name: "Marcos", testament: "new", chapters: 16 },
  { id: "luke", name: "Lucas", testament: "new", chapters: 24 },
  { id: "john", name: "Juan", testament: "new", chapters: 21 },

  // Hechos
  { id: "acts", name: "Hechos", testament: "new", chapters: 28 },

  // Epístolas de Pablo
  { id: "romans", name: "Romanos", testament: "new", chapters: 16 },
  { id: "1corinthians", name: "1 Corintios", testament: "new", chapters: 16 },
  { id: "2corinthians", name: "2 Corintios", testament: "new", chapters: 13 },
  { id: "galatians", name: "Gálatas", testament: "new", chapters: 6 },
  { id: "ephesians", name: "Efesios", testament: "new", chapters: 6 },
  { id: "philippians", name: "Filipenses", testament: "new", chapters: 4 },
  { id: "colossians", name: "Colosenses", testament: "new", chapters: 4 },
  { id: "1thessalonians", name: "1 Tesalonicenses", testament: "new", chapters: 5 },
  { id: "2thessalonians", name: "2 Tesalonicenses", testament: "new", chapters: 3 },
  { id: "1timothy", name: "1 Timoteo", testament: "new", chapters: 6 },
  { id: "2timothy", name: "2 Timoteo", testament: "new", chapters: 4 },
  { id: "titus", name: "Tito", testament: "new", chapters: 3 },
  { id: "philemon", name: "Filemón", testament: "new", chapters: 1 },

  // Epístolas Generales
  { id: "hebrews", name: "Hebreos", testament: "new", chapters: 13 },
  { id: "james", name: "Santiago", testament: "new", chapters: 5 },
  { id: "1peter", name: "1 Pedro", testament: "new", chapters: 5 },
  { id: "2peter", name: "2 Pedro", testament: "new", chapters: 3 },
  { id: "1john", name: "1 Juan", testament: "new", chapters: 5 },
  { id: "2john", name: "2 Juan", testament: "new", chapters: 1 },
  { id: "3john", name: "3 Juan", testament: "new", chapters: 1 },
  { id: "jude", name: "Judas", testament: "new", chapters: 1 },

  // Apocalipsis
  { id: "revelation", name: "Apocalipsis", testament: "new", chapters: 22 },
]

export async function getBibleChapter(bookId: string, chapter: number): Promise<BibleChapter> {
  const localVerses = getBibleChapterData(bookId, chapter)

  if (localVerses) {
    console.log("[v0] Using local JSON data for", bookId, chapter)
    return {
      book: bookId,
      chapter,
      verses: localVerses,
    }
  }

  throw new Error(
    `Capítulo ${chapter} del libro ${bookId} no disponible. Por favor, agrega el archivo JSON correspondiente.`,
  )
}

export function getBibleBook(bookId: string): BibleBook | undefined {
  return BIBLE_BOOKS.find((book) => book.id === bookId)
}

export function getBooksByTestament(testament: "old" | "new"): BibleBook[] {
  return BIBLE_BOOKS.filter((book) => book.testament === testament)
}
