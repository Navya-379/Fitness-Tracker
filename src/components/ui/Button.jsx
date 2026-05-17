import { cn } from "../../lib/utils"

export function Button({ children, variant = "primary", className = "", ...props }) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-300 disabled:cursor-not-allowed disabled:opacity-45",
        variant === "primary" && "bg-neutral-950 text-white shadow-glow hover:-translate-y-0.5 hover:bg-black dark:bg-white dark:text-neutral-950",
        variant === "secondary" && "border border-neutral-200 bg-white/80 text-neutral-950 hover:border-emerald-400 hover:bg-white dark:border-white/15 dark:bg-white/10 dark:text-white",
        variant === "ghost" && "text-neutral-800 hover:bg-black/5 dark:text-white dark:hover:bg-white/10",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
