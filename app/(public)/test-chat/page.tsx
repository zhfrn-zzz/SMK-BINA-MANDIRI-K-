"use client"

import { useState } from "react"
import { MessageSquare, X, Send } from "lucide-react"

export default function TestChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, input.trim()])
      setInput("")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Test Chat Box (No Animation)</h1>
        <p className="text-muted-foreground">
          Click the chat icon in the bottom-right corner
        </p>
        <div className="text-sm text-muted-foreground">
          isOpen: {isOpen ? "true" : "false"} | Messages: {messages.length}
        </div>
      </div>

      {/* Simple Chat Box without framer-motion */}
      <div className="fixed bottom-6 right-6 z-50">
        <div
          style={{
            height: isOpen ? "400px" : "50px",
            width: isOpen ? "320px" : "50px",
            transition: "all 0.3s ease",
          }}
          className="flex flex-col shadow-lg overflow-hidden bg-white dark:bg-gray-900 rounded-lg border-2 border-gray-300 dark:border-gray-700"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-blue-500 dark:bg-blue-700">
            {isOpen && <span className="font-medium text-white">Chat</span>}
            <button
              className="flex items-center justify-center w-8 h-8 cursor-pointer rounded hover:bg-blue-600"
              onClick={() => {
                console.log("Toggle clicked, current state:", isOpen)
                setIsOpen(!isOpen)
              }}
            >
              {isOpen ? (
                <X size={20} className="text-white" />
              ) : (
                <MessageSquare size={20} className="text-white" />
              )}
            </button>
          </div>

          {/* Messages */}
          {isOpen && (
            <div className="flex-1 px-4 py-2 overflow-y-auto flex flex-col gap-2 bg-white dark:bg-gray-900">
              {messages.length === 0 ? (
                <span className="text-gray-400 text-sm">No messages yet. Say hi!</span>
              ) : (
                messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className="self-start bg-blue-100 dark:bg-blue-900 text-gray-900 dark:text-gray-100 px-3 py-2 rounded text-sm max-w-[85%]"
                  >
                    {msg}
                  </div>
                ))
              )}
            </div>
          )}

          {/* Input */}
          {isOpen && (
            <div className="flex items-center gap-2 px-4 py-2 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <input
                type="text"
                className="flex-1 h-10 rounded-md border border-gray-300 dark:border-gray-600 px-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    console.log("Enter pressed, sending:", input)
                    handleSend()
                  }
                }}
              />
              <button
                className="flex items-center justify-center w-10 h-10 rounded-md bg-blue-600 dark:bg-blue-700 cursor-pointer hover:bg-blue-700 dark:hover:bg-blue-600"
                onClick={() => {
                  console.log("Send clicked, message:", input)
                  handleSend()
                }}
              >
                <Send size={18} className="text-white" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
