import {
  Activity,
  Apple,
  BarChart3,
  Bell,
  Brain,
  Dumbbell,
  Flame,
  HeartPulse,
  LineChart,
  Salad,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react"

export const navItems = ["Features", "How It Works", "Pricing", "Dashboard"]

export const features = [
  { title: "Workout Tracking", text: "Plan sessions, track sets, and keep streaks visible without clutter.", icon: Dumbbell },
  { title: "Nutrition Plans", text: "Macro-aware meal guidance, hydration habits, and simple weekly targets.", icon: Salad },
  { title: "Progress Analytics", text: "Clear trends for calories, strength, consistency, and goal progress.", icon: LineChart },
  { title: "Community", text: "Accountability circles, challenges, and supportive progress sharing.", icon: Users },
]

export const goals = [
  { label: "Lose Weight", icon: Flame },
  { label: "Build Muscle", icon: Dumbbell },
  { label: "Stay Active", icon: Activity },
  { label: "Improve Flexibility", icon: HeartPulse },
  { label: "Eat Healthier", icon: Apple },
  { label: "Reduce Stress", icon: Brain },
]

export const levels = [
  { label: "Sedentary", text: "Desk job with light daily movement", icon: Activity },
  { label: "Lightly Active", text: "Training 1-2 times per week", icon: Zap },
  { label: "Moderately Active", text: "Training 3-4 times per week", icon: Dumbbell },
  { label: "Very Active", text: "Training 5+ times per week", icon: Flame },
  { label: "Athlete", text: "Structured performance training", icon: ShieldCheck },
]

export const pricing = [
  { name: "Free", price: "$0", features: ["3 workout plans", "Basic stats", "Community access"] },
  { name: "Pro", price: "$12", popular: true, features: ["Unlimited plans", "Nutrition insights", "Advanced analytics", "Priority support"] },
  { name: "Elite", price: "$29", features: ["Coach dashboard", "Custom macros", "Recovery score", "Team challenges"] },
]

export const dashboardStats = [
  { label: "Calories Burned", value: "621", icon: Flame },
  { label: "Workouts This Week", value: "4", icon: Dumbbell },
  { label: "Streak Days", value: "18", icon: Zap },
  { label: "Goal Progress", value: "84%", icon: Target },
]

export const quickActions = [
  { label: "Start Workout", icon: Activity },
  { label: "Log Meal", icon: Salad },
  { label: "View Progress", icon: BarChart3 },
  { label: "Preferences", icon: Bell },
]

export const testimonials = [
  { name: "Maya Patel", role: "Product Designer", quote: "FitTrack made progress feel calm and obvious. The onboarding felt premium from the first click." },
  { name: "Jordan Lee", role: "Founder", quote: "I finally kept a streak because the dashboard makes the next healthy action easy." },
  { name: "Priya Shah", role: "Student Athlete", quote: "The app feels fast, beautiful, and motivating without overwhelming me." },
]

export const steps = [
  "Create Account",
  "Personal Details",
  "Fitness Goals",
  "Activity Level",
  "Profile Setup",
]

export const brandIcons = [Sparkles, Activity, HeartPulse, ShieldCheck]
