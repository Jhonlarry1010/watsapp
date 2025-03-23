"use client"

import { useState, useEffect } from "react"
import Sidebar from "@/components/sidebar"
import ChatDetail from "@/components/chat-detail"
import { useMobile } from "@/hooks/use-mobile"
import type { Chat } from "@/lib/types"
import { initialChats } from "@/lib/data"

export default function Home() {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null)
  const [chats, setChats] = useState<Chat[]>(initialChats)
  const isMobile = useMobile()
  const [showSidebar, setShowSidebar] = useState(!isMobile)

  useEffect(() => {
    setShowSidebar(!isMobile || !selectedChat)
  }, [isMobile, selectedChat])

  const handleChatSelect = (chat: Chat) => {
    setSelectedChat(chat)
    if (isMobile) {
      setShowSidebar(false)
    }
  }

  const handleBackToList = () => {
    if (isMobile) {
      setSelectedChat(null)
      setShowSidebar(true)
    }
  }

  const handleSendMessage = (chatId: string, content: string) => {
    const newMessage = {
      id: `msg-${Date.now()}`,
      content,
      sender: "me",
      timestamp: new Date().toISOString(),
      status: "sent",
    }

    setChats((prevChats) =>
      prevChats.map((chat) => {
        if (chat.id === chatId) {
          return {
            ...chat,
            messages: [...chat.messages, newMessage],
            lastMessage: content,
            lastMessageTime: new Date().toISOString(),
          }
        }
        return chat
      }),
    )
  }

  return (
    <main className="flex h-screen bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
      <div className={`${showSidebar ? "flex" : "hidden"} md:flex md:w-1/3 lg:w-1/4 h-full flex-col`}>
        <Sidebar chats={chats} onChatSelect={handleChatSelect} selectedChatId={selectedChat?.id} />
      </div>
      <div className={`${!showSidebar ? "flex" : "hidden"} md:flex flex-1 h-full`}>
        {selectedChat ? (
          <ChatDetail
            chat={selectedChat}
            onBack={handleBackToList}
            onSendMessage={(content) => handleSendMessage(selectedChat.id, content)}
          />
        ) : (
          <div className="flex-1 flex items-center justify-center bg-zinc-200 dark:bg-zinc-800">
            <div className="text-center p-8">
              <h2 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-300 mb-2">WhatsApp Clone</h2>
              <p className="text-zinc-600 dark:text-zinc-400">Select a chat to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

