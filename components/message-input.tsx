"use client"

import { useState, type KeyboardEvent } from "react"
import { Smile, Paperclip, Mic, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface MessageInputProps {
  onSendMessage: (content: string) => void
}

export default function MessageInput({ onSendMessage }: MessageInputProps) {
  const [message, setMessage] = useState("")

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message.trim())
      setMessage("")
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="p-3 bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" className="text-zinc-500">
          <Smile className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-zinc-500">
          <Paperclip className="h-5 w-5" />
        </Button>
        <Input
          placeholder="Type a message"
          className="flex-1 bg-white dark:bg-zinc-800 border-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button variant="ghost" size="icon" className="text-zinc-500" onClick={handleSend} disabled={!message.trim()}>
          {message.trim() ? (
            <Send className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
          ) : (
            <Mic className="h-5 w-5" />
          )}
        </Button>
      </div>
    </div>
  )
}

