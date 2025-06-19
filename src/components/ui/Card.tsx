// src/components/ui/Card.tsx
import { ReactNode } from "react"
import { cn } from "../../lib/utils"

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("rounded-xl shadow p-4 bg-white", className)}>{children}</div>
}

export function CardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mb-2", className)}>{children}</div>
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={cn("text-xl font-bold", className)}>{children}</h3>
}

export function CardDescription({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("text-sm text-gray-500", className)}>{children}</p>
}

export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mt-2 space-y-2", className)}>{children}</div>
}
