import { Check, CheckCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Message as MessageType } from "@/lib/types"

interface MessageProps {
  message: MessageType
}

export default function Message({ message }: MessageProps) {
  const isSentByMe = message.sender === "me"
  const formattedTime = new Date(message.timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })

  return (
    <div className={cn("flex mb-2", isSentByMe ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[70%] rounded-lg px-3 py-2 relative",
          isSentByMe
            ? "bg-emerald-100 dark:bg-emerald-900 text-zinc-800 dark:text-zinc-100 rounded-tr-none"
            : "bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 rounded-tl-none",
        )}
      >
        {message.content}
        <div className="flex items-center justify-end mt-1 space-x-1">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">{formattedTime}</span>
          {isSentByMe &&
            (message.status === "read" ? (
              <CheckCheck className="h-3 w-3 text-blue-500" />
            ) : message.status === "delivered" ? (
              <CheckCheck className="h-3 w-3 text-zinc-500" />
            ) : (
              <Check className="h-3 w-3 text-zinc-500" />
            ))}
        </div>
      </div>
    </div>
  )
}

