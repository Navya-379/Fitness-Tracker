import { AnimatePresence, motion } from "framer-motion"
import { HeartPulse, Menu, Moon, Sun, X } from "lucide-react"
import { useEffect, useState } from "react"
import { navItems } from "../data"
import { Button } from "./ui/Button"
import { cn } from "../lib/utils"

export function Navbar({ darkMode, setDarkMode, setView }) {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition", solid ? "bg-white/85 shadow-sm backdrop-blur-xl dark:bg-neutral-950/85" : "bg-transparent")}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button onClick={() => setView("landing")} className="flex items-center gap-2" aria-label="FitTrack home">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-500 text-white shadow-glow">
            <HeartPulse size={22} />
          </span>
          <span className="text-xl font-black tracking-tight text-neutral-950 dark:text-white">FitTrack</span>
        </button>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="text-sm font-bold text-neutral-500 transition hover:text-neutral-950 dark:text-white/65 dark:hover:text-white">
              {item}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle dark mode">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          <Button onClick={() => setView("auth")}>Get Started Free</Button>
        </div>

        <button className="rounded-full border border-neutral-200 p-2 dark:border-white/15 dark:text-white lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/35 lg:hidden">
            <motion.aside initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="ml-auto h-full w-80 bg-white p-5 shadow-soft dark:bg-neutral-950">
              <div className="mb-8 flex items-center justify-between">
                <b className="text-neutral-950 dark:text-white">FitTrack</b>
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="rounded-full p-2 dark:text-white">
                  <X />
                </button>
              </div>
              <div className="grid gap-3">
                {navItems.map((item) => (
                  <a onClick={() => setOpen(false)} key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="rounded-2xl px-4 py-3 font-bold text-neutral-950 hover:bg-emerald-50 dark:text-white dark:hover:bg-white/10">
                    {item}
                  </a>
                ))}
                <Button onClick={() => { setOpen(false); setView("auth") }} className="mt-3">Get Started Free</Button>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
