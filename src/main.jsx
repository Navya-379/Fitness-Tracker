import * as React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./styles.css"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <main className="grid min-h-screen place-items-center bg-emerald-50 p-6 text-center text-neutral-950">
          <div className="max-w-lg rounded-3xl bg-white p-8 shadow-soft">
            <h1 className="text-3xl font-black">FitTrack could not load</h1>
            <p className="mt-3 text-neutral-600">{String(this.state.error.message || this.state.error)}</p>
          </div>
        </main>
      )
    }

    return this.props.children
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
