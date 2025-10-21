"use client"

import * as React from "react"
import { motion, MotionConfig } from "framer-motion"
import { Input } from "@/components/ui/input"
import { MessageSquare, X, Send, Loader2 } from "lucide-react"

const transition = {
  type: "spring" as const,
  bounce: 0,
  duration: 0.3,
}

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function MinimalChatBox() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [messages, setMessages] = React.useState<Message[]>([
    {
      role: "assistant",
      content: "Halo! Saya asisten virtual SMK Bina Mandiri. Ada yang bisa saya bantu?",
    },
  ])
  const [input, setInput] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      })

      const data = await response.json()

      if (data.response) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.response },
        ])
      } else {
        throw new Error("No response")
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Maaf, terjadi kesalahan. Silakan coba lagi.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <MotionConfig transition={transition}>
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div
          animate={{
            height: isOpen ? "400px" : "60px",
            width: isOpen ? "350px" : "60px",
          }}
          initial={false}
          className="flex flex-col shadow-2xl overflow-hidden bg-card dark:bg-card rounded-lg border-2 border-accent dark:border-accent"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-primary dark:bg-primary cursor-pointer hover:bg-accent dark:hover:bg-accent transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen && <span className="font-semibold text-primary-foreground">Asisten SMK Bina Mandiri</span>}
            <div className="flex items-center justify-center w-8 h-8 rounded">
              {isOpen ? <X size={20} className="text-primary-foreground" /> : <MessageSquare size={20} className="text-primary-foreground" />}
            </div>
          </div>

          {/* Messages */}
          {isOpen && (
            <div className="flex-1 px-4 py-3 overflow-y-auto flex flex-col gap-3 bg-muted/30 dark:bg-background">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`px-4 py-2 rounded-lg text-sm max-w-[85%] shadow-sm ${
                      msg.role === "user"
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-card dark:bg-card text-card-foreground border border-border"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-card dark:bg-card border border-border rounded-lg px-4 py-2">
                    <Loader2 size={16} className="animate-spin text-accent" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}

          {/* Input */}
          {isOpen && (
            <div className="flex items-center gap-2 px-4 py-3 border-t-2 border-border bg-card dark:bg-card">
              <Input
                className="flex-1 h-10 rounded-lg border-2 border-input focus:ring-2 focus:ring-accent focus:border-accent bg-background dark:bg-background text-foreground px-3"
                placeholder="Ketik pertanyaan Anda..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
                disabled={isLoading}
              />
              <button
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary dark:bg-primary cursor-pointer hover:bg-accent dark:hover:bg-accent transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleSend}
                disabled={isLoading}
              >
                <Send size={18} className="text-primary-foreground" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </MotionConfig>
  )
}
