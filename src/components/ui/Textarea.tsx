import { TextareaHTMLAttributes } from "react"
import { cn } from "../../lib/utils"
export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        "w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500",
        className
      )}
    />
  )
}