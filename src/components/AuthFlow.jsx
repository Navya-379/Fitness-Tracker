import { AnimatePresence, motion } from "framer-motion"
import { Bell, Check, ChevronRight, HeartPulse } from "lucide-react"
import { useMemo, useState } from "react"
import { z } from "zod"
import { goals, levels, steps } from "../data"
import { cn } from "../lib/utils"
import { Button } from "./ui/Button"
import { Input } from "./ui/Input"

const accountSchema = z.object({
  name: z.string().min(2, "Full name is required."),
  email: z.string().email("Enter a valid email."),
  password: z.string().min(8, "Use at least 8 characters."),
  confirm: z.string(),
}).refine((data) => data.password === data.confirm, { path: ["confirm"], message: "Passwords must match." })

function validate(step, data) {
  if (step === 0) {
    const result = accountSchema.safeParse(data)
    if (result.success) return {}
    return Object.fromEntries(result.error.issues.map((issue) => [issue.path[0], issue.message]))
  }
  if (step === 1) return data.dob ? {} : { dob: "Date of birth is required." }
  if (step === 2) return data.goals.length >= 1 && data.goals.length <= 3 ? {} : { goals: "Choose 1 to 3 goals." }
  if (step === 3) return data.level ? {} : { level: "Choose an activity level." }
  if (step === 4 && data.username && data.username.length < 3) return { username: "Username must be at least 3 characters." }
  return {}
}

function Slider({ label, value, min, max, unit, onChange }) {
  return (
    <label className="block">
      <span className="mb-2 flex justify-between text-sm font-bold text-neutral-900 dark:text-white">{label}<b>{value} {unit}</b></span>
      <input type="range" value={value} min={min} max={max} onChange={(event) => onChange(Number(event.target.value))} className="w-full accent-emerald-500" />
    </label>
  )
}

function StepContent({ step, data, update, errors }) {
  if (step === 0) {
    return (
      <div className="space-y-4">
        <h2 className="text-3xl font-black text-neutral-950 dark:text-white">Create your account</h2>
        <Button variant="secondary" className="w-full">Sign up with Google</Button>
        <Input label="Full name" value={data.name} onChange={(e) => update("name", e.target.value)} error={errors.name} />
        <Input label="Email" value={data.email} onChange={(e) => update("email", e.target.value)} error={errors.email} />
        <Input label="Password" type="password" value={data.password} onChange={(e) => update("password", e.target.value)} error={errors.password} />
        <div className="h-2 rounded-full bg-black/10 dark:bg-white/10">
          <span className="block h-full rounded-full bg-emerald-500 transition-all" style={{ width: `${Math.min(data.password.length * 12, 100)}%` }} />
        </div>
        <Input label="Confirm password" type="password" value={data.confirm} onChange={(e) => update("confirm", e.target.value)} error={errors.confirm} />
      </div>
    )
  }

  if (step === 1) {
    return (
      <div className="space-y-5">
        <h2 className="text-3xl font-black text-neutral-950 dark:text-white">Personal details</h2>
        <Input label="Date of birth" type="date" value={data.dob} onChange={(e) => update("dob", e.target.value)} error={errors.dob} />
        <div>
          <p className="mb-2 text-sm font-bold text-neutral-900 dark:text-white">Gender</p>
          <div className="flex flex-wrap gap-2">
            {["Female", "Male", "Non-binary", "Prefer not to say"].map((gender) => (
              <button key={gender} onClick={() => update("gender", gender)} className={cn("rounded-full border px-4 py-2 text-sm font-bold", data.gender === gender ? "border-emerald-500 bg-emerald-100 text-emerald-700" : "border-neutral-200 text-neutral-500 dark:border-white/10 dark:text-white/70")}>{gender}</button>
            ))}
          </div>
        </div>
        <Slider label="Height" value={data.height} min={120} max={220} unit="cm" onChange={(value) => update("height", value)} />
        <Slider label="Weight" value={data.weight} min={35} max={160} unit={data.unit} onChange={(value) => update("weight", value)} />
        <button onClick={() => update("unit", data.unit === "kg" ? "lbs" : "kg")} className="rounded-full bg-black/5 px-4 py-2 text-sm font-bold dark:bg-white/10 dark:text-white">Switch to {data.unit === "kg" ? "lbs" : "kg"}</button>
      </div>
    )
  }

  if (step === 2) {
    return (
      <div>
        <h2 className="text-3xl font-black text-neutral-950 dark:text-white">Choose 1-3 goals</h2>
        {errors.goals && <p className="mt-2 text-sm font-semibold text-red-500">{errors.goals}</p>}
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {goals.map(({ label, icon: Icon }) => {
            const active = data.goals.includes(label)
            return (
              <button key={label} onClick={() => update("goals", active ? data.goals.filter((goal) => goal !== label) : data.goals.length < 3 ? [...data.goals, label] : data.goals)} className={cn("flex items-center justify-between rounded-3xl border p-4 text-left transition", active ? "border-emerald-500 bg-emerald-100" : "border-neutral-200 bg-white hover:-translate-y-1 dark:border-white/10 dark:bg-white/10")}>
                <span className="flex items-center gap-3 font-black text-neutral-950 dark:text-white"><Icon className="text-emerald-500" /> {label}</span>
                {active && <Check className="text-emerald-500" />}
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  if (step === 3) {
    return (
      <div>
        <h2 className="text-3xl font-black text-neutral-950 dark:text-white">Activity level</h2>
        {errors.level && <p className="mt-2 text-sm font-semibold text-red-500">{errors.level}</p>}
        <div className="mt-6 grid gap-3">
          {levels.map(({ label, text, icon: Icon }) => (
            <button key={label} onClick={() => update("level", label)} className={cn("flex items-center gap-4 rounded-3xl border p-4 text-left", data.level === label ? "border-emerald-500 bg-emerald-100" : "border-neutral-200 dark:border-white/10 dark:bg-white/10")}>
              <Icon className="text-emerald-500" />
              <span><b className="block text-neutral-950 dark:text-white">{label}</b><span className="text-sm text-neutral-500 dark:text-white/60">{text}</span></span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <h2 className="text-3xl font-black text-neutral-950 dark:text-white">Profile setup</h2>
      <div className="rounded-3xl border border-dashed border-neutral-300 p-6 text-center dark:border-white/15">
        <div className="mx-auto mb-3 grid h-24 w-24 place-items-center rounded-full bg-emerald-100 text-3xl font-black text-emerald-600">{data.name ? data.name[0] : "F"}</div>
        <p className="font-bold text-neutral-950 dark:text-white">Click or drag avatar</p>
        <p className="text-sm text-neutral-500">Preview appears instantly in the dashboard.</p>
      </div>
      <Input label="Username" value={data.username} onChange={(e) => update("username", e.target.value)} error={errors.username} />
      <label className="block">
        <span className="mb-2 block text-sm font-bold text-neutral-900 dark:text-white">Bio optional</span>
        <textarea value={data.bio} onChange={(e) => update("bio", e.target.value)} className="min-h-28 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none focus:border-emerald-400 dark:border-white/10 dark:bg-white/10 dark:text-white" />
      </label>
      <button onClick={() => update("notifications", !data.notifications)} className="flex w-full items-center justify-between rounded-2xl border border-neutral-200 p-4 dark:border-white/10">
        <span className="flex items-center gap-3 font-bold text-neutral-950 dark:text-white"><Bell className="text-emerald-500" /> Notifications</span>
        <span className={cn("h-7 w-12 rounded-full p-1 transition", data.notifications ? "bg-emerald-500" : "bg-black/20")}><span className={cn("block h-5 w-5 rounded-full bg-white transition", data.notifications && "translate-x-5")} /></span>
      </button>
    </div>
  )
}

export function AuthFlow({ setView, setUser }) {
  const [step, setStep] = useState(0)
  const [data, setData] = useState({ name: "", email: "", password: "", confirm: "", dob: "", gender: "Female", height: 168, weight: 62, unit: "kg", goals: [], level: "", username: "", bio: "", notifications: true })
  const errors = useMemo(() => validate(step, data), [step, data])
  const canContinue = Object.keys(errors).length === 0

  function update(key, value) {
    setData((current) => ({ ...current, [key]: value }))
  }

  function next() {
    if (!canContinue) return
    if (step === 4) {
      setUser({ name: data.name || "FitTrack User", username: data.username || "fittrack_user" })
      setView("dashboard")
      return
    }
    setStep(step + 1)
  }

  return (
    <main className="min-h-screen bg-mesh px-4 py-6 dark:bg-neutral-950 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <button onClick={() => setView("landing")} className="mb-6 flex items-center gap-2 font-bold text-neutral-950 dark:text-white"><HeartPulse className="text-emerald-500" /> FitTrack</button>
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft dark:bg-white/10">
          <div className="h-2 bg-black/5 dark:bg-white/10"><motion.div className="h-full bg-emerald-500" animate={{ width: `${((step + 1) / 5) * 100}%` }} /></div>
          <div className="grid lg:grid-cols-[360px_1fr]">
            <aside className="hidden bg-neutral-950 p-8 text-white lg:block">
              <p className="mb-3 text-lime-300">Step {step + 1} of 5</p>
              <h1 className="text-4xl font-black">{steps[step]}</h1>
              <p className="mt-4 text-white/65">Premium onboarding with live validation, polished controls, and smooth transitions.</p>
            </aside>
            <section className="p-5 sm:p-8">
              <p className="mb-4 font-bold text-emerald-600 lg:hidden">Step {step + 1} of 5</p>
              <AnimatePresence mode="wait">
                <motion.div key={step} initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -32 }} transition={{ duration: 0.28 }} className="min-h-[520px]">
                  <StepContent step={step} data={data} update={update} errors={errors} />
                </motion.div>
              </AnimatePresence>
              <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button variant="secondary" disabled={step === 0} onClick={() => setStep(step - 1)}>Back</Button>
                <div className="flex items-center gap-3">
                  {(step === 3 || step === 4) && <button className="text-sm font-bold text-neutral-500 dark:text-white/60" onClick={() => step === 4 ? setView("dashboard") : setStep(step + 1)}>Skip for now</button>}
                  <Button onClick={next} disabled={!canContinue}>{step === 4 ? "Finish setup" : "Continue"} <ChevronRight size={18} /></Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
