"use client"

import { useState } from "react"
import { Search, MoreVertical, MessageSquarePlus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import type { Chat } from "@/lib/types"
import { formatRelativeTime } from "@/lib/utils"

interface SidebarProps {
  chats: Chat[]
  onChatSelect: (chat: Chat) => void
  selectedChatId?: string
}

export default function Sidebar({ chats, onChatSelect, selectedChatId }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredChats = chats.filter(
    (chat) =>
      chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.lastMessage?.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex flex-col h-full border-r border-zinc-200 dark:border-zinc-800">
      {/* Header */}
      <div className="p-3 bg-emerald-700 dark:bg-emerald-900 flex justify-between items-center">
        <div className="flex items-center">
          <Avatar className="h-10 w-10">
            <img src="/placeholder.svg?height=40&width=40" alt="Your profile" className="rounded-full" />
          </Avatar>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="text-white">
            <MessageSquarePlus className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className="p-2 bg-white dark:bg-zinc-900">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
          <Input
            placeholder="Search or start new chat"
            className="pl-9 bg-zinc-100 dark:bg-zinc-800 border-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Chat list */}
      <div className="flex-1 overflow-y-auto">
        {filteredChats.length === 0 ? (
          <div className="p-4 text-center text-zinc-500 dark:text-zinc-400">No chats found</div>
        ) : (
          filteredChats.map((chat) => (
            <div
              key={chat.id}
              className={`p-3 flex items-start hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer ${
                selectedChatId === chat.id ? "bg-zinc-200 dark:bg-zinc-800" : ""
              }`}
              onClick={() => onChatSelect(chat)}
            >
              <Avatar className="h-12 w-12 mr-3 flex-shrink-0">
                <img
                  src={chat.avatar || `/placeholder.svg?height=48&width=48`}
                  alt={chat.name}
                  className="rounded-full"
                />
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100 truncate">{chat.name}</h3>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
                    {chat.lastMessageTime ? formatRelativeTime(new Date(chat.lastMessageTime)) : ""}
                  </span>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 truncate">
                  {chat.typing ? (
                    <span className="text-emerald-600 dark:text-emerald-500">Typing...</span>
                  ) : (
                    chat.lastMessage
                  )}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

