import { ButtonHTMLAttributes } from "react"
import { cn } from "../../lib/utils"

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center font-medium transition-colors ",
        className
      )}
    />
  )
}
