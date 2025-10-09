"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart } from "lucide-react"

interface NameScreenProps {
  onSubmit: (name: string) => void
}

export function NameScreen({ onSubmit }: NameScreenProps) {
  const [name, setName] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      onSubmit(name.trim())
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/30">
            <Heart className="h-8 w-8 text-primary" />
          </div>
        </div>

        <h2 className="mb-3 text-balance text-center text-3xl font-bold">¿Cómo te gustaría que te llame?</h2>

        <p className="mb-8 text-pretty text-center text-muted-foreground leading-relaxed">
          Solo necesito tu nombre o un apodo para personalizar nuestra conversación
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="text"
              placeholder="Tu nombre o apodo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-14 rounded-xl text-lg"
              autoFocus
            />
          </div>

          <Button type="submit" size="lg" className="w-full rounded-full text-lg font-semibold" disabled={!name.trim()}>
            Continuar
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">No compartiremos tu información con nadie</p>
      </div>
    </div>
  )
}
