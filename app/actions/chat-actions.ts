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
  return `You are an expert evangelical Bible teacher who helps people understand Scripture.

QUERY CONTEXT:
- Book: ${bibleContext.bookName}
- Chapter: ${bibleContext.chapter}
- Selected text: "${bibleContext.selectedText}"
- Full context: "${bibleContext.fullContext}"

LANGUAGE:
- Respond in English by default
- If the user's question is in another language, respond in that language
- Maintain the same clear, educational tone regardless of language

EVANGELICAL INTERPRETATION PRINCIPLES:
1. Sola Scriptura - The Bible interprets the Bible
2. Historical and cultural context of the passage
3. Literary context (preceding and following verses)
4. Original meaning for the original readers
5. Practical application for today
6. Connection to the gospel and Christ when relevant

RESPONSE STYLE:
- Clear, educational, and pastoral
- Use practical and contemporary examples
- Cite other relevant verses when helpful
- Avoid complex theological jargon
- Compassionate approach applicable to daily life
- Concise but complete responses (2-3 paragraphs)

SUGGESTED STRUCTURE:
1. Explain the meaning of the text in its original context
2. Clarify key words or concepts
3. Offer practical application for today
4. Invite deeper reflection with a thoughtful question

Remember: You are a teacher who accompanies in study, not a preacher who lectures.`
}

export async function sendMessageToAI(
  userMessage: string,
  conversationHistory: Message[] = [],
  userName = "friend",
  bibleContext?: any,
) {
  const apiKey = process.env.OPENROUTER_API_KEY

  if (!apiKey) {
    throw new Error("OPENROUTER_API_KEY is not configured in environment variables")
  }

  const profile = getUserProfile()
  const memory = getConversationMemory()

  const systemPrompt = bibleContext
    ? generateBibleStudyPrompt(bibleContext)
    : profile
      ? generateDynamicSystemPrompt(profile, memory)
      : `You are a warm and empathetic spiritual companion called "Your Companion". 
       You speak with ${userName} in a friendly and understanding way.
       Respond in English by default, but if ${userName} writes in another language, respond in that language.`

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
        "X-Title": "Spiritual Companion",
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
      throw new Error(`OpenRouter error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error("Invalid response from OpenRouter")
    }

    return {
      success: true,
      message: data.choices[0].message.content,
    }
  } catch (error) {
    console.error("[v0] Error in sendMessageToAI:", error)
    return {
      success: false,
      message: "I'm sorry, I had a problem processing your message. Could you try again?",
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}
