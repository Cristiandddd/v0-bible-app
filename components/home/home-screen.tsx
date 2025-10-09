"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, MessageCircle, Sparkles, ChevronRight, GraduationCap, Book } from "lucide-react"
import { getUserProfile } from "@/lib/user-profile"
import {
  getSpiritualProgress,
  getDailyReflection,
  getLearningPath,
  type DailyReflection,
  type LearningTopic,
} from "@/lib/spiritual-journey"
import { getLessonStats } from "@/lib/lessons-system"

interface HomeScreenProps {
  userName: string
  onNavigateToChat: () => void
  onNavigateToJourney?: () => void
  onNavigateToLessons?: () => void
  onNavigateToBible?: () => void
}

export function HomeScreen({
  userName,
  onNavigateToChat,
  onNavigateToJourney,
  onNavigateToLessons,
  onNavigateToBible,
}: HomeScreenProps) {
  const [dailyReflection, setDailyReflection] = useState<DailyReflection | null>(null)
  const [progress, setProgress] = useState<ReturnType<typeof getSpiritualProgress> | null>(null)
  const [nextTopics, setNextTopics] = useState<LearningTopic[]>([])
  const [lessonStats, setLessonStats] = useState({ totalLessons: 0, completedLessons: 0, totalTimeSpent: 0 })

  useEffect(() => {
    const userProfile = getUserProfile()
    if (!userProfile) return

    const reflection = getDailyReflection(userProfile.religion)
    setDailyReflection(reflection)

    const userProgress = getSpiritualProgress()
    setProgress(userProgress)

    const topics = getLearningPath(userProfile.religion)
    const incomplete = topics.filter((t) => !t.completed).slice(0, 3)
    setNextTopics(incomplete)

    const stats = getLessonStats(userProfile.religion)
    setLessonStats(stats)
  }, [])

  const handleStartReflection = () => {
    if (dailyReflection) {
      localStorage.setItem("pendingReflection", JSON.stringify(dailyReflection))
      onNavigateToChat()
    }
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="border-b bg-gradient-to-br from-primary/5 via-background to-accent/5 p-6">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-1 text-2xl font-bold">Bienvenido, {userName}</h1>
          <p className="text-sm text-muted-foreground">Tu jornada espiritual continúa</p>
        </div>
      </div>

      <div className="mx-auto max-w-2xl space-y-6 p-6">
        {dailyReflection && (
          <Card className="overflow-hidden border-2 border-primary/20">
            <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 p-6">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span className="text-sm font-semibold text-primary">Reflexión para hoy</span>
                  </div>
                  <h3 className="mb-1 text-balance text-xl font-bold">{dailyReflection.title}</h3>
                  {dailyReflection.scripture && (
                    <p className="text-sm font-medium text-muted-foreground">{dailyReflection.scripture}</p>
                  )}
                </div>
              </div>
              <p className="mb-4 text-pretty leading-relaxed text-muted-foreground">{dailyReflection.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{dailyReflection.estimatedMinutes} minutos</span>
                <Button onClick={handleStartReflection} className="rounded-full font-semibold">
                  Comenzar reflexión
                </Button>
              </div>
            </div>
          </Card>
        )}

        {progress && (
          <Card className="p-6">
            <h3 className="mb-4 text-lg font-semibold">Tu Jornada</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="mb-1 text-2xl font-bold text-primary">{progress.daysOfPractice}</div>
                <div className="text-xs text-muted-foreground">Días de práctica</div>
              </div>
              <div className="text-center">
                <div className="mb-1 text-2xl font-bold text-primary">{progress.topicsExplored.length}</div>
                <div className="text-xs text-muted-foreground">Temas explorados</div>
              </div>
              <div className="text-center">
                <div className="mb-1 text-2xl font-bold text-primary">{progress.reflectionsCompleted.length}</div>
                <div className="text-xs text-muted-foreground">Reflexiones</div>
              </div>
            </div>
          </Card>
        )}

        {onNavigateToLessons && (
          <Card className="overflow-hidden border-2 border-accent/20">
            <button className="w-full p-6 text-left transition-colors hover:bg-muted/50" onClick={onNavigateToLessons}>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <GraduationCap className="h-7 w-7 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-lg font-semibold">Escuela Espiritual</h3>
                  <p className="mb-2 text-sm text-muted-foreground">Lecciones interactivas y estructuradas</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>
                      {lessonStats.completedLessons} de {lessonStats.totalLessons} lecciones
                    </span>
                    <span>{Math.round(lessonStats.totalTimeSpent / 60)}h dedicadas</span>
                  </div>
                </div>
                <ChevronRight className="h-6 w-6 text-muted-foreground" />
              </div>
            </button>
          </Card>
        )}

        {nextTopics.length > 0 && (
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Camino de Aprendizaje</h3>
              {onNavigateToJourney && (
                <Button variant="ghost" size="sm" onClick={onNavigateToJourney}>
                  Ver todo
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              )}
            </div>
            <div className="space-y-3">
              {nextTopics.map((topic) => (
                <Card key={topic.id} className="overflow-hidden">
                  <button
                    className="w-full p-4 text-left transition-colors hover:bg-muted/50"
                    onClick={() => {
                      localStorage.setItem("selectedTopic", JSON.stringify(topic))
                      onNavigateToChat()
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-1 font-semibold">{topic.title}</h4>
                        <p className="text-sm text-muted-foreground">{topic.description}</p>
                      </div>
                      <ChevronRight className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                    </div>
                  </button>
                </Card>
              ))}
            </div>
          </div>
        )}

        {onNavigateToBible && (
          <Card className="overflow-hidden border-2 border-accent/20">
            <button className="w-full p-6 text-left transition-colors hover:bg-muted/50" onClick={onNavigateToBible}>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <Book className="h-7 w-7 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-lg font-semibold">Leer la Biblia</h3>
                  <p className="text-sm text-muted-foreground">Explora las Escrituras</p>
                </div>
                <ChevronRight className="h-6 w-6 text-muted-foreground" />
              </div>
            </button>
          </Card>
        )}

        <Card className="overflow-hidden border-2">
          <button className="w-full p-6 text-left transition-colors hover:bg-muted/50" onClick={onNavigateToChat}>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <MessageCircle className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="mb-1 text-lg font-semibold">Conversar</h3>
                <p className="text-sm text-muted-foreground">Comparte tus pensamientos y preguntas</p>
              </div>
            </div>
          </button>
        </Card>
      </div>
    </div>
  )
}
