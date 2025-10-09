"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle, Target, TrendingUp } from "lucide-react"

interface ExplanationScreenProps {
  onContinue: () => void
}

export function ExplanationScreen({ onContinue }: ExplanationScreenProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        <h2 className="mb-3 text-balance text-center text-3xl font-bold">Así funciona tu camino</h2>

        <p className="mb-8 text-pretty text-center text-muted-foreground leading-relaxed">
          Dos formas de crecer en tu fe cada día
        </p>

        <div className="mb-8 space-y-4">
          <Card className="border-2 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Pregúntame lo que quieras</h3>
            <p className="text-pretty text-muted-foreground leading-relaxed">
              Sobre la Biblia, tus dudas de fe, o cuando necesites compañía. Estoy aquí para escucharte
            </p>
          </Card>

          <Card className="border-2 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Completa retos diarios</h3>
            <p className="text-pretty text-muted-foreground leading-relaxed">
              Mini-lecciones de 3 minutos con versículos y reflexiones. Gana XP y mantén tu racha
            </p>
          </Card>

          <Card className="border-2 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/30">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Crece a tu ritmo</h3>
            <p className="text-pretty text-muted-foreground leading-relaxed">
              Desde Aprendiz hasta Amigo de Jesús. Cada nivel refleja tu viaje espiritual real
            </p>
          </Card>
        </div>

        <Button onClick={onContinue} size="lg" className="w-full rounded-full text-lg font-semibold">
          ¡Entendido!
        </Button>
      </div>
    </div>
  )
}
