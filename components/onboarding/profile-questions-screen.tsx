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
  const [preferredTreatment, setPreferredTreatment] = useState("friendly")
  const [spiritualGoals, setSpiritualGoals] = useState<string[]>([])
  const [customNotes, setCustomNotes] = useState("")

  const handleComplete = () => {
    const profile: UserProfile = {
      name: userName,
      religion: "evangelical Christianity", // Fixed to evangelical
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
                <h2 className="text-2xl font-semibold text-foreground">Welcome!</h2>
                <p className="text-muted-foreground">
                  This app is designed for evangelical Christians. Which denomination do you belong to?
                </p>
              </div>

              <RadioGroup value={denomination} onValueChange={setDenomination}>
                <div className="space-y-3">
                  {[
                    { value: "baptist", label: "Baptist" },
                    { value: "pentecostal", label: "Pentecostal" },
                    { value: "presbyterian", label: "Presbyterian" },
                    { value: "methodist", label: "Methodist" },
                    { value: "assemblies-of-god", label: "Assemblies of God" },
                    { value: "nazarene", label: "Church of the Nazarene" },
                    { value: "non-denominational", label: "Non-denominational" },
                    { value: "other", label: "Other evangelical denomination" },
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
                  How much experience do you have reading the Bible?
                </h2>
                <p className="text-muted-foreground">This will help me adapt the content to your level</p>
              </div>

              <RadioGroup value={bibleExperience} onValueChange={setBibleExperience}>
                <div className="space-y-3">
                  {[
                    {
                      value: "new",
                      label: "I'm new to the faith",
                      description: "Just starting my journey with Christ",
                    },
                    {
                      value: "occasional",
                      label: "I read occasionally",
                      description: "I read the Bible from time to time",
                    },
                    {
                      value: "regular",
                      label: "I read regularly",
                      description: "I have a habit of reading the Bible",
                    },
                    {
                      value: "advanced",
                      label: "I study deeply",
                      description: "I study the Bible with dedication",
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

          {step === 3 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground">How do you prefer I speak to you?</h2>
                <p className="text-muted-foreground">Choose the communication style you feel most comfortable with</p>
              </div>

              <RadioGroup value={preferredTreatment} onValueChange={setPreferredTreatment}>
                <div className="space-y-3">
                  {[
                    {
                      value: "friendly",
                      label: "Friendly and warm",
                      description: "Like a trusted friend (recommended)",
                    },
                    {
                      value: "casual",
                      label: "Casual and relaxed",
                      description: "Informal and natural conversation",
                    },
                    {
                      value: "formal",
                      label: "Formal and respectful",
                      description: "More traditional and respectful approach",
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
                <h2 className="text-2xl font-semibold text-foreground">What would you like to achieve?</h2>
                <p className="text-muted-foreground">Select your spiritual goals (you can choose multiple)</p>
              </div>

              <div className="space-y-3">
                {[
                  "Know the Bible better",
                  "Strengthen my faith",
                  "Prepare to teach or evangelize",
                  "Understand evangelical doctrines",
                  "Grow spiritually",
                  "Find inner peace",
                  "Understand my purpose in life",
                  "Overcome difficult times",
                  "Grow in love and compassion",
                  "Connect with my community",
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

          {step === 5 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground">Anything else I should know?</h2>
                <p className="text-muted-foreground">
                  Share any information that will help you have a better experience (optional)
                </p>
              </div>

              <Textarea
                placeholder="E.g.: I'm going through a difficult time, I'm interested in learning about forgiveness, I prefer short answers..."
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
                Previous
              </Button>
            )}

            {step < totalSteps ? (
              <Button onClick={() => setStep(step + 1)} disabled={!canContinue()} className="flex-1">
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button onClick={handleComplete} className="flex-1">
                Start my journey
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
