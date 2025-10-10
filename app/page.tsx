"use client"

import { useState, useEffect } from "react"
import { WelcomeScreen } from "@/components/onboarding/welcome-screen"
import { NameScreen } from "@/components/onboarding/name-screen"
import { ProfileQuestionsScreen } from "@/components/onboarding/profile-questions-screen"
import { ExplanationScreen } from "@/components/onboarding/explanation-screen"
import { HomeScreen } from "@/components/home/home-screen"
import { ChatScreen } from "@/components/chat/chat-screen"
import { JournalScreen } from "@/components/journey/journal-screen"
import { LessonsScreen } from "@/components/lessons/lessons-screen"
import { LessonInteractive } from "@/components/lessons/lesson-interactive"
import { BibleReaderScreen } from "@/components/bible/bible-reader-screen"
import { BibleChatScreen } from "@/components/bible/bible-chat-screen"
import { BibleBookSelectionScreen } from "@/components/bible/bible-book-selection-screen"
import { hasCompletedOnboarding, getUserProfile } from "@/lib/user-profile"
import type { Lesson } from "@/lib/lessons-system"

type Screen =
  | "welcome"
  | "name"
  | "profile-questions"
  | "explanation"
  | "home"
  | "chat"
  | "journal"
  | "lessons"
  | "lesson-interactive"
  | "bible-book-selection"
  | "bible-reader"
  | "bible-chat"

export default function Page() {
  const [screen, setScreen] = useState<Screen>("welcome")
  const [userName, setUserName] = useState("")
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null)
  const [selectedBibleBook, setSelectedBibleBook] = useState<any>(null)

  useEffect(() => {
    if (hasCompletedOnboarding()) {
      const profile = getUserProfile()
      if (profile) {
        setUserName(profile.name)
        setScreen("home")
      }
    }
  }, [])

  const handleNameSubmit = (name: string) => {
    setUserName(name)
    setScreen("profile-questions")
  }

  const handleProfileComplete = () => {
    setScreen("explanation")
  }

  const handleStartLesson = (lesson: Lesson) => {
    setCurrentLesson(lesson)
    setScreen("lesson-interactive")
  }

  const handleLessonComplete = () => {
    setCurrentLesson(null)
    setScreen("lessons")
  }

  const handleLessonExit = () => {
    setCurrentLesson(null)
    setScreen("home")
  }

  const handleNavigateToBible = () => {
    setScreen("bible-book-selection")
  }

  const handleSelectBibleBook = (book: any) => {
    setSelectedBibleBook(book)
    setScreen("bible-reader")
  }

  return (
    <div className="min-h-screen bg-background">
      {screen === "welcome" && <WelcomeScreen onContinue={() => setScreen("name")} />}
      {screen === "name" && <NameScreen onSubmit={handleNameSubmit} />}
      {screen === "profile-questions" && (
        <ProfileQuestionsScreen userName={userName} onComplete={handleProfileComplete} />
      )}
      {screen === "explanation" && <ExplanationScreen onContinue={() => setScreen("home")} />}
      {screen === "home" && (
        <HomeScreen
          userName={userName}
          onNavigateToChat={() => setScreen("chat")}
          onNavigateToLessons={() => setScreen("lessons")}
          onNavigateToBible={handleNavigateToBible}
        />
      )}
      {screen === "chat" && <ChatScreen userName={userName} onBack={() => setScreen("home")} />}
      {screen === "journal" && <JournalScreen onBack={() => setScreen("home")} />}
      {screen === "lessons" && <LessonsScreen onStartLesson={handleStartLesson} />}
      {screen === "lesson-interactive" && currentLesson && (
        <LessonInteractive lesson={currentLesson} onComplete={handleLessonComplete} onExit={handleLessonExit} />
      )}
      {screen === "bible-book-selection" && (
        <BibleBookSelectionScreen onSelectBook={handleSelectBibleBook} onBack={() => setScreen("home")} />
      )}
      {screen === "bible-reader" && (
        <BibleReaderScreen
          onBack={() => setScreen("bible-book-selection")}
          onConsult={() => setScreen("bible-chat")}
          initialBook={selectedBibleBook}
        />
      )}
      {screen === "bible-chat" && <BibleChatScreen onBack={() => setScreen("bible-reader")} />}
    </div>
  )
}
