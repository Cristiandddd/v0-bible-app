"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, HelpCircle, ArrowRight, CheckCircle2, Sparkles } from "lucide-react"
import {
  completeLesson,
  getLessonProgress,
  saveLessonProgress,
  startLesson,
  type Lesson,
  type DialogueStep,
} from "@/lib/lessons-system"

interface LessonInteractiveProps {
  lesson: Lesson
  onComplete: () => void
  onExit: () => void
}

export function LessonInteractive({ lesson, onComplete, onExit }: LessonInteractiveProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({})
  const [showHelp, setShowHelp] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    startLesson(lesson.id)
  }, [lesson.id])

  const allSteps: DialogueStep[] = [
    lesson.content.introduction,
    ...lesson.content.teaching,
    lesson.content.application,
    lesson.content.reflection,
  ]

  const currentStep = allSteps[currentStepIndex]
  const progress = ((currentStepIndex + 1) / allSteps.length) * 100
  const isLastStep = currentStepIndex === allSteps.length - 1

  const handleOptionSelect = (optionId: string) => {
    setSelectedOptions({
      ...selectedOptions,
      [currentStep.id]: optionId,
    })

    // Guardar respuesta en el progreso
    const lessonProgress = getLessonProgress()
    if (lessonProgress.lessonStates[lesson.id]) {
      lessonProgress.lessonStates[lesson.id].responses[currentStep.id] = optionId
      saveLessonProgress(lessonProgress)
    }
  }

  const handleNext = () => {
    if (isLastStep) {
      // Completar lección
      completeLesson(lesson.id)
      setIsComplete(true)
    } else {
      setCurrentStepIndex(currentStepIndex + 1)
      setShowHelp(false)
    }
  }

  const selectedOption = currentStep.options?.find((opt) => opt.id === selectedOptions[currentStep.id])

  if (isComplete) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-6">
        <Card className="w-full max-w-md overflow-hidden border-2">
          <div className="bg-gradient-to-br from-green-500/10 via-primary/5 to-accent/10 p-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h2 className="mb-2 text-2xl font-bold">Lección Completada</h2>
            <p className="mb-6 text-muted-foreground">Has completado exitosamente: {lesson.title}</p>
            <div className="space-y-2">
              <Button onClick={onComplete} className="w-full">
                Continuar aprendiendo
              </Button>
              <Button onClick={onExit} variant="outline" className="w-full bg-transparent">
                Volver al inicio
              </Button>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="border-b bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4">
        <div className="mx-auto max-w-2xl">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <h1 className="text-lg font-semibold">{lesson.title}</h1>
            </div>
            <Button variant="ghost" size="sm" onClick={onExit}>
              Salir
            </Button>
          </div>
          <Progress value={progress} className="h-1.5" />
          <p className="mt-2 text-xs text-muted-foreground">
            Paso {currentStepIndex + 1} de {allSteps.length}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-2xl space-y-6 p-6">
        {/* AI Avatar */}
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <Card className="flex-1 p-4">
            {currentStep.type === "scripture" && currentStep.scripture && (
              <div className="mb-3 rounded-lg bg-muted/50 p-3">
                <p className="text-sm italic text-muted-foreground">{currentStep.scripture}</p>
              </div>
            )}
            <p className="leading-relaxed">{currentStep.text}</p>
          </Card>
        </div>

        {/* Options */}
        {currentStep.options && currentStep.options.length > 0 && (
          <div className="space-y-3">
            {currentStep.options.map((option) => {
              const isSelected = selectedOptions[currentStep.id] === option.id
              return (
                <button
                  key={option.id}
                  onClick={() => handleOptionSelect(option.id)}
                  className={`w-full rounded-lg border-2 p-4 text-left transition-all ${
                    isSelected
                      ? "border-primary bg-primary/5"
                      : "border-border bg-card hover:border-primary/50 hover:bg-muted/50"
                  }`}
                >
                  <p className="font-medium">{option.text}</p>
                </button>
              )
            })}
          </div>
        )}

        {/* Response from AI */}
        {selectedOption && (
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <Card className="flex-1 border-2 border-primary/20 bg-primary/5 p-4">
              <p className="leading-relaxed">{selectedOption.response}</p>
              {selectedOption.isCorrect !== undefined && (
                <div className="mt-2 flex items-center gap-2">
                  {selectedOption.isCorrect ? (
                    <span className="flex items-center gap-1 text-sm font-medium text-green-600">
                      <CheckCircle2 className="h-4 w-4" />
                      Correcto
                    </span>
                  ) : (
                    <span className="text-sm font-medium text-amber-600">Reflexionemos más sobre esto</span>
                  )}
                </div>
              )}
            </Card>
          </div>
        )}

        {/* Help Button */}
        {currentStep.helpAvailable && !showHelp && (
          <Button variant="outline" size="sm" onClick={() => setShowHelp(true)} className="w-full">
            <HelpCircle className="mr-2 h-4 w-4" />
            No entiendo, explícame más
          </Button>
        )}

        {showHelp && (
          <Card className="border-2 border-amber-500/20 bg-amber-500/5 p-4">
            <p className="text-sm leading-relaxed">
              Claro, déjame explicarlo de otra manera. {currentStep.text} Piensa en ello como...
            </p>
          </Card>
        )}

        {/* Next Button */}
        {(selectedOption || !currentStep.options) && (
          <Button onClick={handleNext} className="w-full" size="lg">
            {isLastStep ? "Completar lección" : "Continuar"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
