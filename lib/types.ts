export interface Message {
  id: string
  content: string
  sender: "me" | "other"
  timestamp: string
  status?: "sent" | "delivered" | "read"
}

export interface Chat {
  id: string
  name: string
  avatar?: string
  lastMessage?: string
  lastMessageTime?: string
  unreadCount?: number
  online?: boolean
  typing?: boolean
  lastSeen?: string
  messages: Message[]
}

