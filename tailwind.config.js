/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        fit: {
          ink: "#101316",
          muted: "#667085",
          line: "#dde4ee",
          green: "#17b26a",
          mint: "#ccfbef",
          lime: "#d9f99d",
          blue: "#2563eb",
          coral: "#f9736b",
          amber: "#f59e0b",
        },
      },
      fontFamily: {
        sans: ["Inter", "Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(16, 24, 40, 0.12)",
        glow: "0 18px 60px rgba(23, 178, 106, 0.28)",
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 15% 15%, rgba(23,178,106,.22), transparent 30%), radial-gradient(circle at 84% 10%, rgba(37,99,235,.18), transparent 30%), linear-gradient(135deg, #f8fffb 0%, #eff7ff 55%, #fff7ed 100%)",
      },
    },
  },
  plugins: [],
}
