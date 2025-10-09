"use server"

import { generateDynamicSystemPrompt } from "@/lib/dynamic-prompt"
import { getUserProfile, getConversationMemory } from "@/lib/user-profile"

export interface Message {
  role: "user" | "assistant"
  content: string
  timestamp: number
}

const AI_CONFIG = {
  apiUrl: "https://openrouter.ai/api/v1/chat/completions",
  model: "deepseek/deepseek-chat",
  temperature: 0.7,
  maxTokens: 500,
  topP: 0.9,
}

function generateBibleStudyPrompt(bibleContext: any): string {
  return `Eres un maestro bíblico evangélico experto que ayuda a entender las Escrituras.

CONTEXTO DE LA CONSULTA:
- Libro: ${bibleContext.bookName}
- Capítulo: ${bibleContext.chapter}
- Texto seleccionado: "${bibleContext.selectedText}"
- Contexto completo: "${bibleContext.fullContext}"

PRINCIPIOS DE INTERPRETACIÓN EVANGÉLICA:
1. Sola Scriptura - La Biblia interpreta la Biblia
2. Contexto histórico y cultural del pasaje
3. Contexto literario (versículos anteriores y posteriores)
4. Significado original para los lectores originales
5. Aplicación práctica para hoy
6. Conexión con el evangelio y Cristo cuando sea relevante

ESTILO DE RESPUESTA:
- Claro, educativo y pastoral
- Usa ejemplos prácticos y contemporáneos
- Cita otros versículos relevantes cuando sea útil
- Evita jerga teológica compleja
- Enfoque compasivo y aplicable a la vida diaria
- Respuestas concisas pero completas (2-3 párrafos)

ESTRUCTURA SUGERIDA:
1. Explica el significado del texto en su contexto original
2. Aclara palabras o conceptos clave
3. Ofrece aplicación práctica para hoy
4. Invita a profundizar con una pregunta reflexiva

Recuerda: Eres un maestro que acompaña en el estudio, no un predicador que sermonea.`
}

export async function sendMessageToAI(
  userMessage: string,
  conversationHistory: Message[] = [],
  userName = "amigo",
  bibleContext?: any,
) {
  const apiKey = process.env.OPENROUTER_API_KEY

  if (!apiKey) {
    throw new Error("OPENROUTER_API_KEY no está configurada en las variables de entorno")
  }

  const profile = getUserProfile()
  const memory = getConversationMemory()

  const systemPrompt = bibleContext
    ? generateBibleStudyPrompt(bibleContext)
    : profile
      ? generateDynamicSystemPrompt(profile, memory)
      : `Eres un compañero espiritual cercano y empático llamado "Tu Compañero". 
       Hablas con ${userName} de forma amigable y comprensiva.`

  const messages = [
    { role: "system", content: systemPrompt },
    ...conversationHistory.map((msg) => ({
      role: msg.role,
      content: msg.content,
    })),
    { role: "user", content: userMessage },
  ]

  try {
    const response = await fetch(AI_CONFIG.apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
        "X-Title": "Compañero Espiritual",
      },
      body: JSON.stringify({
        model: AI_CONFIG.model,
        messages,
        temperature: AI_CONFIG.temperature,
        max_tokens: AI_CONFIG.maxTokens,
        top_p: AI_CONFIG.topP,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error("[v0] OpenRouter error:", errorData)
      throw new Error(`Error de OpenRouter: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error("Respuesta inválida de OpenRouter")
    }

    return {
      success: true,
      message: data.choices[0].message.content,
    }
  } catch (error) {
    console.error("[v0] Error in sendMessageToAI:", error)
    return {
      success: false,
      message: "Lo siento, tuve un problema al procesar tu mensaje. ¿Podrías intentarlo de nuevo?",
      error: error instanceof Error ? error.message : "Error desconocido",
    }
  }
}
