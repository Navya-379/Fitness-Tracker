import { useEffect, useState } from "react"
import { AuthFlow } from "./components/AuthFlow"
import { Dashboard } from "./components/Dashboard"
import { Landing } from "./components/Landing"
import { Navbar } from "./components/Navbar"

export default function App() {
  const [view, setView] = useState("landing")
  const [darkMode, setDarkMode] = useState(false)
  const [user, setUser] = useState({ name: "Navya", username: "fittrack_user" })

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  if (view === "auth") return <AuthFlow setView={setView} setUser={setUser} />
  if (view === "dashboard") return <Dashboard user={user} setView={setView} />

  return (
    <div className="min-h-screen bg-white font-sans dark:bg-neutral-950">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} setView={setView} />
      <Landing setView={setView} />
    </div>
  )
}
