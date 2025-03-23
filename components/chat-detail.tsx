"use client"

import { useRef, useEffect } from "react"
import { ArrowLeft, MoreVertical, Phone, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import MessageInput from "@/components/message-input"
import Message from "@/components/message"
import type { Chat } from "@/lib/types"
import { useMobile } from "@/hooks/use-mobile"

interface ChatDetailProps {
  chat: Chat
  onBack: () => void
  onSendMessage: (content: string) => void
}

export default function ChatDetail({ chat, onBack, onSendMessage }: ChatDetailProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  useEffect(() => {
    scrollToBottom()
  }, [chat.messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-3 bg-emerald-700 dark:bg-emerald-900 text-white flex items-center">
        {isMobile && (
          <Button variant="ghost" size="icon" className="text-white mr-1" onClick={onBack}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
        )}
        <Avatar className="h-10 w-10 mr-3">
          <img src={chat.avatar || `/placeholder.svg?height=40&width=40`} alt={chat.name} className="rounded-full" />
        </Avatar>
        <div className="flex-1">
          <h2 className="font-medium">{chat.name}</h2>
          {chat.typing ? (
            <p className="text-xs text-emerald-200">Typing...</p>
          ) : chat.online ? (
            <p className="text-xs text-emerald-200">Online</p>
          ) : chat.lastSeen ? (
            <p className="text-xs text-emerald-200">Last seen {chat.lastSeen}</p>
          ) : null}
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="text-white">
            <Video className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <Phone className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto p-4 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat"
        style={{
          backgroundSize: "200px 200px",
          backgroundImage:
            "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRTVEREQzIi8+CjxwYXRoIGQ9Ik0wIDIwMEwyMDAgMFYyMDBIMFoiIGZpbGw9IiNEOUQzQzgiLz4KPC9zdmc+Cg==')",
        }}
      >
        <div className="max-w-3xl mx-auto w-full">
          {chat.messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <MessageInput onSendMessage={onSendMessage} />
    </div>
  )
}

