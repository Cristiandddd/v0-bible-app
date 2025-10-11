"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { type UserProfile, saveUserProfile } from "@/lib/user-profile"
import { ChevronRight, ChevronLeft, Heart, Compass, MessageCircle } from "lucide-react"

interface ProfileQuestionsScreenProps {
  userName: string
  onComplete: () => void
}

export function ProfileQuestionsScreen({ userName, onComplete }: ProfileQuestionsScreenProps) {
  const [step, setStep] = useState(1)
  const totalSteps = 4

  const [faithJourneyStage, setFaithJourneyStage] = useState("")
  const [currentNeed, setCurrentNeed] = useState("")
  const [preferredTreatment, setPreferredTreatment] = useState("friendly")
  const [spiritualGoals, setSpiritualGoals] = useState<string[]>([])
  const [customNotes, setCustomNotes] = useState("")

  const handleComplete = () => {
    const profile: UserProfile = {
      name: userName,
      religion: "cristianismo",
      faithJourneyStage,
      currentNeed,
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
    if (step === 1) return faithJourneyStage !== ""
    if (step === 2) return currentNeed.trim().length >= 10
    if (step === 3) return preferredTreatment !== ""
    if (step === 4) return true
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
                Step {step} of {totalSteps}
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
                <div className="flex items-center gap-2 mb-3">
                  <Compass className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-foreground">Where are you in your faith journey?</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  There's no right or wrong answer. I just want to understand where you are so I can walk alongside you
                  better
                </p>
              </div>

              <RadioGroup value={faithJourneyStage} onValueChange={setFaithJourneyStage}>
                <div className="space-y-3">
                  {[
                    {
                      value: "new-believer",
                      label: "I'm new to faith",
                      description: "Just beginning my journey with God",
                    },
                    {
                      value: "growing",
                      label: "I'm growing",
                      description: "Learning and wanting to deepen my relationship with God",
                    },
                    {
                      value: "seeking",
                      label: "I'm seeking answers",
                      description: "Exploring faith and looking for understanding",
                    },
                    {
                      value: "returning",
                      label: "I'm returning",
                      description: "Coming back to faith after time away",
                    },
                    {
                      value: "mature",
                      label: "I'm established in faith",
                      description: "Looking to go deeper and help others grow",
                    },
                  ].map((option) => (
                    <div
                      key={option.value}
                      className="flex items-start space-x-3 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer"
                      onClick={() => setFaithJourneyStage(option.value)}
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

          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-foreground">What brings you here today?</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Take a moment to share what's on your heart. There's no right or wrong answer - just be honest with
                  yourself and with me.
                </p>
              </div>

              <div className="space-y-3">
                <Textarea
                  placeholder="For example: 'I'm going through a difficult time and need hope' or 'I want to understand God's plan for my career' or 'I'm curious about faith but have many doubts'..."
                  value={currentNeed}
                  onChange={(e) => setCurrentNeed(e.target.value)}
                  rows={6}
                  className="resize-none text-base"
                />
                <p className="text-sm text-muted-foreground italic">
                  {currentNeed.trim().length < 10
                    ? "Share at least a few words so I can understand how to help you best"
                    : "Thank you for sharing. This helps me understand how to support you"}
                </p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-foreground">How should we talk?</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I want you to feel comfortable. How would you like me to communicate with you?
                </p>
              </div>

              <RadioGroup value={preferredTreatment} onValueChange={setPreferredTreatment}>
                <div className="space-y-3">
                  {[
                    {
                      value: "friendly",
                      label: "Like a close friend",
                      description: "Warm, personal, and encouraging (most people love this)",
                    },
                    {
                      value: "casual",
                      label: "Casual and natural",
                      description: "Relaxed conversation, like talking over coffee",
                    },
                    {
                      value: "formal",
                      label: "Respectful and thoughtful",
                      description: "More traditional and measured approach",
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
                <h2 className="text-2xl font-semibold text-foreground">Anything else I should know?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This is completely optional, but if there's anything that would help me support you better, I'd love
                  to know
                </p>
              </div>

              <Textarea
                placeholder="For example: I'm dealing with anxiety, I'm interested in learning about prayer, I prefer shorter responses, I'm preparing to teach a Bible study..."
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                rows={6}
                className="resize-none"
              />

              <p className="text-sm text-muted-foreground italic">
                Don't worry - you can always adjust these preferences later as we get to know each other
              </p>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex gap-3 pt-4">
            {step > 1 && (
              <Button variant="outline" onClick={() => setStep(step - 1)} className="flex-1">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}

            {step < totalSteps ? (
              <Button onClick={() => setStep(step + 1)} disabled={!canContinue()} className="flex-1">
                Continue
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button onClick={handleComplete} className="flex-1">
                Let's begin
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
