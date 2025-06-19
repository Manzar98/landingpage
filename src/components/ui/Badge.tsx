import { ReactNode } from "react"
import { cn } from "../../lib/utils"
export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("inline-block rounded-full px-3 py-1 text-sm font-semibold", className)}>{children}</span>
}