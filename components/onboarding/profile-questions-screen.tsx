"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { type UserProfile, saveUserProfile } from "@/lib/user-profile"
import { ChevronRight, ChevronLeft } from "lucide-react"

interface ProfileQuestionsScreenProps {
  userName: string
  onComplete: () => void
}

export function ProfileQuestionsScreen({ userName, onComplete }: ProfileQuestionsScreenProps) {
  const [step, setStep] = useState(1)
  const totalSteps = 5 // Increased from 4 to 5 steps

  // Respuestas del usuario
  const [denomination, setDenomination] = useState("")
  const [bibleExperience, setBibleExperience] = useState("") // New field for Bible experience
  const [preferredTreatment, setPreferredTreatment] = useState("amigable")
  const [spiritualGoals, setSpiritualGoals] = useState<string[]>([])
  const [customNotes, setCustomNotes] = useState("")

  const handleComplete = () => {
    const profile: UserProfile = {
      name: userName,
      religion: "evangelical bible", // Fixed to evangelical
      denomination: denomination || undefined,
      preferredTreatment,
      spiritualGoals,
      interests: [],
      customNotes: customNotes || undefined,
      createdAt: Date.now(),
      lastUpdated: Date.now(),
    }

    saveUserProfile(profile)
    onComplete()
  }

  const canContinue = () => {
    if (step === 1) return denomination !== ""
    if (step === 2) return bibleExperience !== ""
    if (step === 3) return preferredTreatment !== ""
    if (step === 4) return true
    if (step === 5) return true
    return false
  }

  const toggleGoal = (goal: string) => {
    setSpiritualGoals((prev) => (prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="bg-card rounded-2xl shadow-lg p-8 space-y-6">
          {/* Progress bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>
                Paso {step} de {totalSteps}
              </span>
              <span>{Math.round((step / totalSteps) * 100)}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground">Bienvenido!</h2>
                <p className="text-muted-foreground">
                  Esta app está diseñada para cristianos evangélicos. ¿A qué denominación perteneces?
                </p>
              </div>

              <RadioGroup value={denomination} onValueChange={setDenomination}>
                <div className="space-y-3">
                  {[
                    { value: "bautista", label: "Bautista" },
                    { value: "pentecostal", label: "Pentecostal" },
                    { value: "presbiteriana", label: "Presbiteriana" },
                    { value: "metodista", label: "Metodista" },
                    { value: "asambleas-dios", label: "Asambleas de Dios" },
                    { value: "nazareno", label: "Iglesia del Nazareno" },
                    { value: "no-denominacional", label: "No denominacional" },
                    { value: "otra", label: "Otra denominación evangélica" },
                  ].map((option) => (
                    <div
                      key={option.value}
                      className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer"
                      onClick={() => setDenomination(option.value)}
                    >
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label htmlFor={option.value} className="cursor-pointer flex-1">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground">
                  ¿Cuánta experiencia tienes leyendo la Biblia?
                </h2>
                <p className="text-muted-foreground">Esto me ayudará a adaptar el contenido a tu nivel</p>
              </div>

              <RadioGroup value={bibleExperience} onValueChange={setBibleExperience}>
                <div className="space-y-3">
                  {[
                    {
                      value: "nuevo",
                      label: "Soy nuevo en la fe",
                      description: "Recién empiezo mi camino con Cristo",
                    },
                    {
                      value: "ocasional",
                      label: "Leo ocasionalmente",
                      description: "Leo la Biblia de vez en cuando",
                    },
                    {
                      value: "regular",
                      label: "Leo regularmente",
                      description: "Tengo el hábito de leer la Biblia",
                    },
                    {
                      value: "avanzado",
                      label: "Estudio profundamente",
                      description: "Estudio la Biblia con dedicación",
                    },
                  ].map((option) => (
                    <div
                      key={option.value}
                      className="flex items-start space-x-3 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer"
                      onClick={() => setBibleExperience(option.value)}
                    >
                      <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor={option.value} className="cursor-pointer font-medium">
                          {option.label}
                        </Label>
                        <p className="text-sm text-muted-foreground mt-1">{option.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          )}

          {/* Step 3: Estilo de comunicación */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground">¿Cómo prefieres que te hable?</h2>
                <p className="text-muted-foreground">
                  Elige el estilo de comunicación con el que te sientas más cómodo
                </p>
              </div>

              <RadioGroup value={preferredTreatment} onValueChange={setPreferredTreatment}>
                <div className="space-y-3">
                  {[
                    {
                      value: "amigable",
                      label: "Amigable y cercano",
                      description: "Como un amigo de confianza (recomendado)",
                    },
                    {
                      value: "casual",
                      label: "Casual y relajado",
                      description: "Conversación informal y natural",
                    },
                    {
                      value: "formal",
                      label: "Formal y respetuoso",
                      description: "Trato más tradicional y respetuoso",
                    },
                  ].map((option) => (
                    <div
                      key={option.value}
                      className="flex items-start space-x-3 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer"
                      onClick={() => setPreferredTreatment(option.value)}
                    >
                      <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor={option.value} className="cursor-pointer font-medium">
                          {option.label}
                        </Label>
                        <p className="text-sm text-muted-foreground mt-1">{option.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground">¿Qué te gustaría lograr?</h2>
                <p className="text-muted-foreground">Selecciona tus objetivos espirituales (puedes elegir varios)</p>
              </div>

              <div className="space-y-3">
                {[
                  "Conocer mejor la Biblia",
                  "Fortalecer mi fe",
                  "Prepararme para enseñar o evangelizar",
                  "Entender doctrinas evangélicas",
                  "Crecer espiritualmente",
                  "Encontrar paz interior",
                  "Entender mi propósito en la vida",
                  "Superar momentos difíciles",
                  "Crecer en amor y compasión",
                  "Conectar con mi comunidad",
                ].map((goal) => (
                  <div
                    key={goal}
                    className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer"
                    onClick={() => toggleGoal(goal)}
                  >
                    <Checkbox
                      id={goal}
                      checked={spiritualGoals.includes(goal)}
                      onCheckedChange={() => toggleGoal(goal)}
                    />
                    <Label htmlFor={goal} className="cursor-pointer flex-1">
                      {goal}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Notas adicionales */}
          {step === 5 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground">¿Algo más que deba saber?</h2>
                <p className="text-muted-foreground">
                  Comparte cualquier información que te ayude a tener una mejor experiencia (opcional)
                </p>
              </div>

              <Textarea
                placeholder="Ej: Estoy pasando por un momento difícil, me interesa aprender sobre el perdón, prefiero respuestas cortas..."
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                rows={6}
                className="resize-none"
              />
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex gap-3 pt-4">
            {step > 1 && (
              <Button variant="outline" onClick={() => setStep(step - 1)} className="flex-1">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Anterior
              </Button>
            )}

            {step < totalSteps ? (
              <Button onClick={() => setStep(step + 1)} disabled={!canContinue()} className="flex-1">
                Siguiente
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button onClick={handleComplete} className="flex-1">
                Comenzar mi camino
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
