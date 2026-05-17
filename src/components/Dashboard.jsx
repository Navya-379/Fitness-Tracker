import { Activity, BarChart3, HeartPulse, Salad, Users } from "lucide-react"
import { dashboardStats, quickActions } from "../data"
import { Button } from "./ui/Button"
import { Card } from "./ui/Card"
import { cn } from "../lib/utils"

export function Dashboard({ user, setView }) {
  return (
    <main id="dashboard" className="min-h-screen bg-[#f6faf8] text-neutral-950 dark:bg-neutral-950 dark:text-white">
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <aside className="hidden border-r border-neutral-200 bg-white p-6 dark:border-white/10 dark:bg-white/5 lg:block">
          <button onClick={() => setView("landing")} className="mb-10 flex items-center gap-2 text-xl font-black"><HeartPulse className="text-emerald-500" /> FitTrack</button>
          {["Overview", "Workouts", "Meals", "Progress", "Community"].map((item, index) => (
            <a key={item} className={cn("mb-2 flex rounded-2xl px-4 py-3 font-bold", index === 0 ? "bg-emerald-100 text-emerald-700" : "text-neutral-500 dark:text-white/60")}>{item}</a>
          ))}
        </aside>
        <section className="p-4 pb-24 sm:p-8 lg:pb-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-bold text-emerald-600">Welcome back</p>
              <h1 className="text-4xl font-black">Hi, {user.name}</h1>
            </div>
            <div className="flex items-center gap-3 rounded-full bg-white p-2 shadow-sm dark:bg-white/10">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-emerald-100 font-black text-emerald-600">{user.name[0]}</span>
              <b>{user.username}</b>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {dashboardStats.map(({ label, value, icon: Icon }) => (
              <Card key={label}>
                <Icon className="mb-4 text-emerald-500" />
                <p className="text-neutral-500 dark:text-white/65">{label}</p>
                <h3 className="mt-1 text-3xl font-black">{value}</h3>
              </Card>
            ))}
          </div>
          <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_420px]">
            <Card>
              <h3 className="text-xl font-black">Today's workout</h3>
              {["Warm-up mobility", "Goblet squats", "Incline push-ups", "Core finisher"].map((item, index) => (
                <label key={item} className="mt-4 flex items-center gap-3 rounded-2xl bg-black/5 p-4 dark:bg-white/10">
                  <input type="checkbox" defaultChecked={index < 2} className="h-5 w-5 accent-emerald-500" />
                  <span className="font-semibold">{item}</span>
                </label>
              ))}
            </Card>
            <Card>
              <h3 className="text-xl font-black">Weekly activity</h3>
              <div className="mt-6 flex h-60 items-end gap-3">
                {[52, 80, 44, 96, 68, 88, 74].map((height, index) => (
                  <span key={index} className="flex-1 rounded-t-2xl bg-emerald-500/80" style={{ height: `${height}%` }} />
                ))}
              </div>
            </Card>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {quickActions.map(({ label, icon: Icon }) => <Button key={label} variant="secondary"><Icon size={18} /> {label}</Button>)}
          </div>
        </section>
      </div>
      <nav className="fixed inset-x-4 bottom-4 flex justify-around rounded-full bg-neutral-950 p-2 text-white shadow-soft lg:hidden">
        {[Activity, Salad, BarChart3, Users].map((Icon, index) => <button key={index} className="rounded-full p-3" aria-label={`Mobile nav ${index + 1}`}><Icon size={20} /></button>)}
      </nav>
    </main>
  )
}
