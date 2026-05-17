import { cn } from "../../lib/utils"

export function Card({ children, className = "" }) {
  return (
    <div className={cn("rounded-[1.75rem] border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/10", className)}>
      {children}
    </div>
  )
}
