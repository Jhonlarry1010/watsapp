import type { Chat } from "./types"

export const initialChats: Chat[] = [
  {
    id: "1",
    name: "Alice Johnson",
    avatar: "/placeholder.svg?height=48&width=48&text=AJ",
    lastMessage: "Let's meet tomorrow at the coffee shop",
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 minutes ago
    unreadCount: 2,
    online: true,
    messages: [
      {
        id: "a1",
        content: "Hey there! How are you doing?",
        sender: "other",
        timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
      },
      {
        id: "a2",
        content: "I'm good, thanks for asking! How about you?",
        sender: "me",
        timestamp: new Date(Date.now() - 1000 * 60 * 25).toISOString(), // 25 minutes ago
        status: "read",
      },
      {
        id: "a3",
        content: "I'm doing well. Are you free tomorrow?",
        sender: "other",
        timestamp: new Date(Date.now() - 1000 * 60 * 10).toISOString(), // 10 minutes ago
      },
      {
        id: "a4",
        content: "Let's meet tomorrow at the coffee shop",
        sender: "other",
        timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 minutes ago
      },
    ],
  },
  {
    id: "2",
    name: "Work Group",
    avatar: "/placeholder.svg?height=48&width=48&text=WG",
    lastMessage: "Meeting postponed to 3 PM",
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    messages: [
      {
        id: "b1",
        content: "Good morning team!",
        sender: "other",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
      },
      {
        id: "b2",
        content: "Morning! Are we still meeting at 2?",
        sender: "me",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(), // 4 hours ago
        status: "read",
      },
      {
        id: "b3",
        content: "Meeting postponed to 3 PM",
        sender: "other",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
      },
    ],
  },
  {
    id: "3",
    name: "John Smith",
    avatar: "/placeholder.svg?height=48&width=48&text=JS",
    lastMessage: "Check out this new restaurant",
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
    lastSeen: "yesterday",
    messages: [
      {
        id: "c1",
        content: "Hey, how's it going?",
        sender: "me",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), // 2 days ago
        status: "read",
      },
      {
        id: "c2",
        content: "Not bad, just busy with work",
        sender: "other",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString(), // 1.5 days ago
      },
      {
        id: "c3",
        content: "Check out this new restaurant",
        sender: "other",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
      },
    ],
  },
  {
    id: "4",
    name: "Mom",
    avatar: "/placeholder.svg?height=48&width=48&text=Mom",
    lastMessage: "Call me when you get home",
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), // 2 days ago
    messages: [
      {
        id: "d1",
        content: "Hi sweetie, how are you?",
        sender: "other",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(), // 3 days ago
      },
      {
        id: "d2",
        content: "I'm good Mom, just busy with work",
        sender: "me",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 60).toISOString(), // 2.5 days ago
        status: "read",
      },
      {
        id: "d3",
        content: "Call me when you get home",
        sender: "other",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), // 2 days ago
      },
    ],
  },
  {
    id: "5",
    name: "David Wilson",
    avatar: "/placeholder.svg?height=48&width=48&text=DW",
    lastMessage: "Are you coming to the party?",
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(), // 3 days ago
    typing: true,
    messages: [
      {
        id: "e1",
        content: "Hey, there's a party this weekend",
        sender: "other",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 96).toISOString(), // 4 days ago
      },
      {
        id: "e2",
        content: "Oh nice! Where is it?",
        sender: "me",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 80).toISOString(), // 3.3 days ago
        status: "read",
      },
      {
        id: "e3",
        content: "At Mike's place, starts at 8",
        sender: "other",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 76).toISOString(), // 3.1 days ago
      },
      {
        id: "e4",
        content: "Are you coming to the party?",
        sender: "other",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(), // 3 days ago
      },
    ],
  },
]

