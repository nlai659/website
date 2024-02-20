/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#080B12",
        "bg-secondary": "#0D1117",
        "bg-tertiary": "#161B22",
        "text-primary": "#C9D1D9",
        "text-secondary": "#8B949E",
        "text-tertiary": "#484F58",
        "border-primary": "#30363D",
        "border-secondary": "#21262D",
        "border-tertiary": "#30363D",
        "accent-primary": "#58A6FF",
        "accent-secondary": "#FFA759",
        "accent-tertiary": "#FFA759",
      },
      fontFamily: {
        "sans": ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

