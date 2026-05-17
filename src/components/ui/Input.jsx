import { cn } from "../../lib/utils"

export function Input({ label, error, className = "", ...props }) {
  return (
    <label className="block">
      {label && <span className="mb-2 block text-sm font-bold text-neutral-900 dark:text-white">{label}</span>}
      <input
        className={cn("w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-950 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 dark:border-white/10 dark:bg-white/10 dark:text-white", className)}
        {...props}
      />
      {error && <span className="mt-2 block text-sm font-semibold text-red-500">{error}</span>}
    </label>
  )
}
