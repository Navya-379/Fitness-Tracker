import { motion } from "framer-motion"
import { Activity, ArrowRight, Check, Dumbbell, Flame, Play, Star } from "lucide-react"
import { brandIcons, features, pricing, testimonials } from "../data"
import { Button } from "./ui/Button"
import { Card } from "./ui/Card"
import { Section } from "./ui/Section"
import { cn } from "../lib/utils"

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square max-w-[520px]">
      <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute inset-8 rounded-[3rem] bg-white/75 p-6 shadow-soft backdrop-blur dark:bg-white/10">
        <div className="flex h-full flex-col justify-between rounded-[2.2rem] bg-neutral-950 p-6 text-white">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-bold">Live plan</span>
            <Activity className="text-lime-300" />
          </div>
          <div>
            <p className="text-5xl font-black">84%</p>
            <p className="text-white/65">weekly goal progress</p>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {[55, 72, 38, 90, 66, 82, 96].map((height, index) => (
              <span key={index} className="rounded-full bg-emerald-400" style={{ height }} />
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div animate={{ rotate: [0, 5, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute left-0 top-16 rounded-3xl bg-white p-4 shadow-soft dark:bg-white/10">
        <Flame className="mb-2 text-orange-500" />
        <b className="block text-neutral-950 dark:text-white">621 kcal</b>
        <span className="text-sm text-neutral-500 dark:text-white/60">burned today</span>
      </motion.div>
      <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-12 right-0 rounded-3xl bg-emerald-100 p-4 shadow-soft">
        <Dumbbell className="mb-2 text-emerald-600" />
        <b className="block text-neutral-950">Next workout</b>
        <span className="text-sm text-neutral-500">Strength 42 min</span>
      </motion.div>
    </div>
  )
}

export function Landing({ setView }) {
  return (
    <>
      <section className="bg-mesh pt-28 dark:bg-none dark:bg-neutral-950">
        <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-sm font-bold text-neutral-950 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/10 dark:text-white">
              <Star size={16} className="text-amber-500" fill="currentColor" /> 4.9 rated wellness platform
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-tight text-neutral-950 dark:text-white sm:text-6xl lg:text-7xl">
              Fitness that feels beautifully personal.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-white/70">
              FitTrack blends workouts, nutrition, recovery, and progress analytics into a premium daily companion that keeps healthy habits simple.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => setView("auth")}>Get Started Free <ArrowRight size={18} /></Button>
              <Button variant="secondary"><Play size={18} /> Watch Demo</Button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 text-sm font-bold text-neutral-500 dark:text-white/60 sm:grid-cols-4">
              {brandIcons.map((Icon, index) => (
                <span key={index} className="flex items-center gap-2 rounded-2xl border border-white/70 bg-white/50 px-3 py-2 dark:border-white/10 dark:bg-white/10">
                  <Icon size={16} className="text-emerald-500" /> Partner {index + 1}
                </span>
              ))}
            </div>
          </motion.div>
          <HeroVisual />
        </div>
      </section>

      <Section id="features" eyebrow="Premium tools" title="Everything you need to build momentum.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, text, icon: Icon }) => (
            <Card key={title} className="group">
              <Icon className="mb-7 text-emerald-500 transition group-hover:scale-110" size={30} />
              <h3 className="text-xl font-black text-neutral-950 dark:text-white">{title}</h3>
              <p className="mt-2 leading-7 text-neutral-500 dark:text-white/65">{text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="how-it-works" eyebrow="How it works" title="Three calm steps from intention to progress.">
        <div className="grid gap-5 md:grid-cols-3">
          {["Sign Up", "Set Goals", "Track Progress"].map((step, index) => (
            <Card key={step}>
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-neutral-950 text-lg font-black text-white dark:bg-white dark:text-neutral-950">{index + 1}</span>
              <h3 className="text-xl font-black text-neutral-950 dark:text-white">{step}</h3>
              <p className="mt-2 leading-7 text-neutral-500 dark:text-white/65">{["Create your account in under a minute.", "Choose goals, activity, and profile details.", "Watch your dashboard adapt as habits build."][index]}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Loved by members" title="Premium polish, real daily motivation.">
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name}>
              <div className="mb-4 flex text-amber-500">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
              <p className="text-base leading-7 text-neutral-600 dark:text-white/70">"{item.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-emerald-100 font-black text-emerald-600">{item.name[0]}</span>
                <span><b className="block text-neutral-950 dark:text-white">{item.name}</b><small className="text-neutral-500">{item.role}</small></span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="pricing" eyebrow="Pricing" title="Start free. Upgrade when your routine grows.">
        <div className="grid gap-5 lg:grid-cols-3">
          {pricing.map((plan) => (
            <Card key={plan.name} className={cn(plan.popular && "border-emerald-400 shadow-glow")}>
              {plan.popular && <span className="mb-4 inline-block rounded-full bg-emerald-500 px-3 py-1 text-xs font-black text-white">Popular</span>}
              <h3 className="text-xl font-black text-neutral-950 dark:text-white">{plan.name}</h3>
              <p className="my-5 text-5xl font-black text-neutral-950 dark:text-white">{plan.price}<span className="text-base font-semibold text-neutral-500">/mo</span></p>
              <ul className="space-y-3">
                {plan.features.map((feature) => <li key={feature} className="flex gap-2 text-sm text-neutral-500 dark:text-white/70"><Check className="text-emerald-500" size={18} /> {feature}</li>)}
              </ul>
              <Button className="mt-7 w-full" variant={plan.popular ? "primary" : "secondary"}>Choose {plan.name}</Button>
            </Card>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-neutral-950 p-8 text-white shadow-soft md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-center">
            <div>
              <p className="mb-2 font-bold text-lime-300">Start today</p>
              <h2 className="text-4xl font-black tracking-tight">Build a healthier week before Monday arrives.</h2>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row">
              <input className="min-h-12 flex-1 rounded-full border border-white/15 bg-white/10 px-5 outline-none focus:ring-4 focus:ring-emerald-400/30" placeholder="Email address" aria-label="Email address" />
              <Button className="bg-emerald-500 hover:bg-emerald-400">Join waitlist</Button>
            </form>
          </div>
        </div>
      </section>
      <footer className="border-t border-neutral-200 bg-white px-4 py-10 dark:border-white/10 dark:bg-neutral-950 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <b className="text-neutral-950 dark:text-white">FitTrack</b>
          <p className="text-sm text-neutral-500 dark:text-white/50">2026 FitTrack. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
